import {
  Router,
  provideRouter,
  withRouterConfig,
  Routes,
  RouteReuseStrategy,
  BaseRouteReuseStrategy,
} from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor(private service: PensamentoService, private router: Router) {
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  carregarMaisPensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  listarFavoritos() {
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.titulo = 'Meus Favoritos';
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentosFavoritos) => {
        this.listaPensamentos = listaPensamentosFavoritos;
        this.listaFavoritos = listaPensamentosFavoritos;
      });
  }

  recarregarComponente() {
    this.favoritos = false;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.titulo = 'Meu Mural';

    /* this.router.onSameUrlNavigation = 'reload'; */
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate([this.router.url], {});
  }
}
