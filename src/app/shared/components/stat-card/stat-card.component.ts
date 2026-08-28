import { Component, input } from '@angular/core';
@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss',
})
export class StatCardComponent {
  label = input.required<string>();
  value = input.required<string>();
  change = input('0%');
  icon = input('◆');
  tone = input('violet');
}
