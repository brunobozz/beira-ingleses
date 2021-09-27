import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-flex-itens',
  templateUrl: './comp-flex-itens.component.html',
  styleUrls: ['./comp-flex-itens.component.scss'],
})
export class CompFlexItensComponent implements OnInit {
  itens = [
    { icon: 'fa-map-marker', text: 'Pé na Areia' },
    { icon: 'fa-wifi', text: 'Wi-Fi' },
    { icon: 'fa-tv', text: 'Smart TV' },
    { icon: 'fa-snowflake-o', text: 'Ar Condicionado' },
    { icon: 'fa-car', text: 'Garagem' },
    { icon: 'fa-building', text: 'Elevador' },
    { icon: 'fa-users', text: 'Até 6 Pessoas' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
