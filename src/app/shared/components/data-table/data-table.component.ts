import { Component, input } from '@angular/core';
import { Activity } from '../../models/app.models';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  rows = input.required<Activity[]>();
}
