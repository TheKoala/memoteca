import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
  };

  constructor(private service: PensamentoService) {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito) {
      return 'ativo';
    }
    return 'inativo';
  }

  atualizarFavoritos(pensamento: Pensamento) {
    this.service.mudarFavorito(pensamento).subscribe((pensamento) => {});
  }
}
