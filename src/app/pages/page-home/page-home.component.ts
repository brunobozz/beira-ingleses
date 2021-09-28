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
  constructor() {}

  ngOnInit(): void {}
}
