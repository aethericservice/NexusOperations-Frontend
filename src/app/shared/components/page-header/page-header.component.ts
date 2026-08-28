import { Component, input } from '@angular/core';
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  title = input.required<string>();
  subtitle = input('');
  eyebrow = input('Workspace');
  action = input('Create new');
}
