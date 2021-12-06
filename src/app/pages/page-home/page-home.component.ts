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

  public months: any = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Augosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  public week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  public colors: any = {
    daysMonthBgColor: 'rgba(254, 252, 139,0.5)',
    daysMonthTxColor: 'rgb(33, 37, 41)',
    noDaysMonthBgColor: '#ffffff',
    noDaysMonthTxColor: '#ffffff',
    todayTxColor: 'rgb(0, 0, 0)',
    todayBdColor: 'rgb(0, 0, 0)',
  };

  public dates: any = [
    {
      date: new Date(2021, 10, 1),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 2),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 3),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 4),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 5),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 6),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 7),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 8),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 9),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 10),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 11),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 12),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 13),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 14),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 15),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 16),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 17),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 18),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 19),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 20),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 21),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 22),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 23),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 24),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 25),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 26),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 27),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 28),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 29),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 10, 30),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    //========================================== 2021 dezembro
    {
      date: new Date(2021, 11, 1),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 2),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 3),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 4),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 5),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 6),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 7),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 8),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2021, 11, 9),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2021, 11, 10),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2021, 11, 11),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2021, 11, 12),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2021, 11, 13),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 14),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 15),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 16),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 17),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 18),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 19),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 20),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 21),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 22),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 23),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 24),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 25),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 26),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 27),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 28),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 29),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 30),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2021, 11, 31),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    //========================================== 2022 janeiro
    {
      date: new Date(2022, 0, 1),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 2),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 3),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 4),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 5),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 6),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 7),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 8),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 9),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 10),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 11),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 12),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 13),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 14),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 15),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 16),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 17),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 18),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 19),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 20),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 21),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 22),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 23),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 0, 24),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 25),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 26),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 27),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 28),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 29),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 30),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 0, 31),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    //========================================== 2022 fevereiro
    {
      date: new Date(2022, 1, 1),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 2),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 3),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 4),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 5),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 6),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 7),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 8),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 9),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 10),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 11),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 12),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 13),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 14),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 1, 15),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 16),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 17),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 18),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 19),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 20),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 21),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 22),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 23),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 24),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 25),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 26),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 27),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 1, 28),
      bg: '#fefc8b',
      color: '#666666',
    },
    //========================================== 2022 março
    {
      date: new Date(2022, 2, 1),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 2),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 3),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 4),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 5),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 6),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 7),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 8),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 9),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 10),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 11),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 12),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 2, 13),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 2, 14),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 2, 15),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 2, 16),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 2, 17),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 2, 18),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 2, 19),
      bg: 'rgba(163, 0, 217,0.5)',
      color: '#ffffff',
    },
    {
      date: new Date(2022, 2, 20),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 21),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 22),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 23),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 24),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 25),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 26),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 27),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 28),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 29),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 30),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 2, 31),
      bg: '#fefc8b',
      color: '#666666',
    },
    //========================================== 2022 abril
    {
      date: new Date(2022, 3, 1),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 2),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 3),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 4),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 5),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 6),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 7),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 8),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 9),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 10),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 11),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 12),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 13),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 14),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 15),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 16),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 17),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 18),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 19),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 20),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 21),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 22),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 23),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 24),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 25),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 26),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 27),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 28),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 29),
      bg: '#fefc8b',
      color: '#666666',
    },
    {
      date: new Date(2022, 3, 30),
      bg: '#fefc8b',
      color: '#666666',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
