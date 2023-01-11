import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo3',
    },
    {
      conteudo: 'O sapo não lava o pé',
      autoria: 'Professora do Jardim',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      autoria: 'Mussum',
      modelo: 'modelo1',
    },
  ];
}
