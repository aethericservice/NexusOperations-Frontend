import { Component, input, output } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  open = input(false);
  title = input('Dialog');
  closed = output<void>();
}
