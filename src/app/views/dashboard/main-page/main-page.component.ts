import {
  ChangeDetectionStrategy,
  Component,
  model,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { DatepickerInlineCalendarExample } from '../calender/calender.component';
import { Chart, registerables, ChartConfiguration } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-main-page',
  imports: [MatCardModule, MatDatepickerModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  public config: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: ['jan', 'feb', 'Mar', 'April'],
      datasets: [
        {
          label: '',
          data: [65, 69, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#016239',
          tension: 0.1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false, // تعطيل عرض الرموز والتسميات
        },
      },
      aspectRatio: 1,
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  };
  chart: any;

  ngOnInit(): void {
    this.chart = new Chart('Mychart', this.config);
  }
}
