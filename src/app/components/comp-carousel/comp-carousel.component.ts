import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-carousel',
  templateUrl: './comp-carousel.component.html',
  styleUrls: ['./comp-carousel.component.scss'],
})
export class CompCarouselComponent implements OnInit {
  fotos = ['00', '01', '02', '03'];

  constructor() {}

  ngOnInit(): void {}
}
