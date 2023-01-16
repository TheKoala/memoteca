import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent {
  /* pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  }; */

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulario reatio'],
      autoria: [''],
      modelo: ['modelo2']
    })
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
