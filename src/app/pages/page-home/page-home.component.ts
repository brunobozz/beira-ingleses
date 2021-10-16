import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  public itemsApto: any = [
    {
      img: 'wifi',
      text: 'Internet Wifi de 250mb',
    },
    {
      img: 'tv',
      text: 'Smart TV 65 polegadas',
    },
    {
      img: 'cozinha',
      text: 'Cozinha',
    },
    {
      img: 'vista_mar',
      text: 'Vista para o mar',
    },
    {
      img: 'cama_solteiro',
      text: '2 Quartos',
    },
    {
      img: 'sacada',
      text: 'Sacada',
    },
    {
      img: 'churrasco',
      text: 'Churrasqueira',
    },
    {
      img: 'user_plus',
      text: 'Até 6 pessoas',
    },
  ];

  public fotosPraia: any = [
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
  ];
  constructor() {}

  ngOnInit(): void {}
}
