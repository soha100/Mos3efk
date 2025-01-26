import { Component } from '@angular/core';

import { ChartComponent } from '../chart/chart.component';
import { CalenderComponent } from '../calender/calender.component';

@Component({
  selector: 'app-main-page',
  imports: [ChartComponent, CalenderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
