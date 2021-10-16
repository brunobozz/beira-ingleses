import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-fotos',
  templateUrl: './comp-fotos.component.html',
  styleUrls: ['./comp-fotos.component.scss'],
})
export class CompFotosComponent implements OnInit {
  @Input() fotosTitle?: string;
  @Input() fotosList!: any;
  constructor() {}

  ngOnInit(): void {}
}
