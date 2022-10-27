import { Component } from '@angular/core';
import { datas, fotosPraia, itemsApto, meses, week } from './content';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent {
  public itemsApto: any = itemsApto;
  public fotosPraia: any = fotosPraia;
  public months: any = meses;
  public week = week;

  public colors: any = {
    daysMonthBgColor: 'rgba(254, 252, 139,0.5)',
    daysMonthTxColor: 'rgb(33, 37, 41)',
    noDaysMonthBgColor: '#ffffff',
    noDaysMonthTxColor: '#ffffff',
    todayTxColor: 'rgb(0, 0, 0)',
    todayBdColor: 'rgb(0, 0, 0)',
  };

  public dates: any = datas;
}
