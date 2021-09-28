import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-itens',
  templateUrl: './page-itens.component.html',
  styleUrls: ['./page-itens.component.scss'],
})
export class PageItensComponent implements OnInit {
  public itemsApto: any = [
    {
      img: 'wifi',
      text: 'Internet Wifi de 250mb',
    },
    {
      img: 'vista_mar',
      text: 'Vista para o mar',
    },
    {
      img: 'cozinha',
      text: 'Cozinha',
    },
    {
      img: 'cama_solteiro',
      text: '2 Quartos',
    },
    {
      img: 'porta',
      text: 'Entrada Privada',
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
      img: 'cigarro',
      text: 'Cinzeiro (pode fumar na sacada)',
    },
    {
      img: 'interfone',
      text: 'Interfone',
    },
    {
      img: 'user_plus',
      text: 'Até 6 pessoas',
    },
  ];

  public itemsQuartoCasal: any = [
    {
      img: 'cama_casal',
      text: 'Cama de casal',
    },
    {
      img: 'ventilador_teto',
      text: 'Ventilador de teto',
    },
    {
      img: 'roupeiro',
      text: 'Roupeiro',
    },
    {
      img: 'cabides',
      text: 'Cabides',
    },
    {
      img: 'roupas_de_cama',
      text: 'Roupas de Cama',
    },
    {
      img: 'espelho_horizontal',
      text: 'Espelho Vertical',
    },
    {
      img: 'ar',
      text: 'Ar condicionado quente/frio',
    },
    {
      img: 'criado_mudo',
      text: 'Criado mudo com tomada',
    },
  ];

  public itemsQuartoSolteiro: any = [
    {
      img: 'cama_solteiro',
      text: '2 Camas de solteiro',
    },
    {
      img: 'roupeiro',
      text: 'Roupeiro',
    },
    {
      img: 'cabides',
      text: 'Cabides',
    },
    {
      img: 'roupas_de_cama',
      text: 'Roupas de Cama',
    },
    {
      img: 'ar',
      text: 'Ar condicionado quente/frio',
    },
  ];

  public itemsBanheiro: any = [
    {
      img: 'agua_quente',
      text: 'Água quente',
    },
    {
      img: 'chuveiro',
      text: 'Chuveiro elétrico',
    },
    {
      img: 'espelho_horizontal',
      text: 'Espelho',
    },
    {
      img: 'roupas_de_cama',
      text: 'Toalhas',
    },
  ];

  public itemsSala: any = [
    {
      img: 'sofa_cama',
      text: 'Sofá cama',
    },
    {
      img: 'tv',
      text: 'Smart TV 65 polegadas',
    },
    {
      img: 'mesa_jantar',
      text: 'Mesa de Jantar',
    },
    {
      img: 'ventilador_portatil',
      text: 'Ventilador portátil',
    },
    {
      img: 'blackout',
      text: 'Cortinas blackout',
    },
  ];

  public itemsCozinha: any = [
    {
      img: 'fogao',
      text: 'Cooktop a gás',
    },
    {
      img: 'geladeira',
      text: 'Geladeira',
    },
    {
      img: 'microondas',
      text: 'Microondas',
    },
    {
      img: 'panela',
      text: 'Panelas',
    },
    {
      img: 'talheres',
      text: 'Pratos e talheres',
    },
    {
      img: 'copo',
      text: 'Copos',
    },
    {
      img: 'caneca',
      text: 'Canecas',
    },
    {
      img: 'espetos',
      text: 'Espetos e utencílios',
    },
    {
      img: 'gelos',
      text: 'Formas de gelo',
    },
    {
      img: 'lixo',
      text: 'Lixeira',
    },
  ];

  public itemsAreaServico: any = [
    {
      img: 'maquina_de_lavar',
      text: 'Maquina de lavar 9kg',
    },
    {
      img: 'ferro',
      text: 'Ferro de Passar',
    },
    {
      img: 'vassoura',
      text: 'Vassoura',
    },
    {
      img: 'pa',
      text: 'Pá',
    },
    {
      img: 'rodo',
      text: 'Rodo',
    },
  ];

  public itemsPredio: any = [
    {
      img: 'elevador',
      text: 'Elevador',
    },
    {
      img: 'carro',
      text: '1 vaga coberta privada',
    },
    {
      img: 'carro',
      text: 'Estacionamento na frente do prédio',
    },
    {
      img: 'sol_mar',
      text: 'Acesso direto à praia',
    },
    {
      img: 'chuveiro',
      text: 'Chuveirinho externo',
    },
    {
      img: 'reciclavel',
      text: 'Coleta seletiva de lixo',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
