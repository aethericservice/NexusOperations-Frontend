import { Component, input } from '@angular/core';
@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.scss',
})
export class ChartCardComponent {
  title = input('Automation performance');
  subtitle = input('Successful executions this week');
  values = input([42, 65, 50, 82, 71, 95, 76]);
}
