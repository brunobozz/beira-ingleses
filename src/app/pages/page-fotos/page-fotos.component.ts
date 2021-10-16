import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-fotos',
  templateUrl: './page-fotos.component.html',
  styleUrls: ['./page-fotos.component.scss'],
})
export class PageFotosComponent implements OnInit {
  public galerias: any = [
    {
      title: 'Sacada',
      fotos: [
        'sacada/01',
        'sacada/02',
        'sacada/03',
        'sacada/04',
        'sacada/05',
        'sacada/06',
      ],
    },
    {
      title: 'Sala',
      fotos: [
        'sala/01',
        'sala/02',
        'sala/03',
        'sala/04',
        'sala/05',
        'sala/06',
        'sala/07',
        'sala/08',
        'sala/09',
        'sala/10',
        'sala/11',
      ],
    },
    {
      title: 'Cozinha',
      fotos: [
        'cozinha/01',
        'cozinha/02',
        'cozinha/03',
        'cozinha/04',
        'cozinha/05',
        'cozinha/06',
      ],
    },
    {
      title: 'Quarto de Casal',
      fotos: [
        'quarto1/01',
        'quarto1/02',
        'quarto1/03',
        'quarto1/04',
        'quarto1/05',
        'quarto1/06',
        'quarto1/07',
      ],
    },
    {
      title: 'Quarto de Solteiro',
      fotos: [
        'quarto2/01',
        'quarto2/02',
        'quarto2/03',
        'quarto2/04',
        'quarto2/05',
        'quarto2/06',
        'quarto2/07',
        'quarto2/08',
      ],
    },
    {
      title: 'Banheiro',
      fotos: [
        'banheiro/01',
        'banheiro/02',
        'banheiro/03',
        'banheiro/04',
        'banheiro/05',
      ],
    },
    {
      title: 'Área de Servico',
      fotos: [
        'areaservico/01',
        'areaservico/02',
        'areaservico/03',
        'areaservico/04',
      ],
    },
    // {
    //   title: 'Ítens do Imóvel',
    //   fotos: [
    //     'itens/01',
    //     'itens/02',
    //     'itens/03',
    //     'itens/04',
    //     'itens/05',
    //     'itens/06',
    //     'itens/07',
    //   ],
    // },
    {
      title: 'Prédio',
      fotos: [
        'predio/01',
        'predio/02',
        'predio/03',
        'predio/04',
        'predio/05',
        'predio/06',
        'predio/07',
        'predio/08',
        'predio/09',
        'predio/10',
      ],
    },
    {
      title: 'Garagem',
      fotos: [
        'garagem/01',
        'garagem/02',
        'garagem/03',
        'garagem/04',
        'garagem/05',
      ],
    },
    {
      title: 'Praia',
      fotos: [
        'praia/01',
        'praia/02',
        'praia/03',
        'praia/04',
        'praia/05',
        'praia/06',
        'praia/07',
        'praia/08',
        'praia/09',
        'praia/10',
        'praia/11',
        'praia/12',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
