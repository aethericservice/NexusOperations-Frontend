import { Component, output } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { ThemeService } from '../../core/services/theme.service';
import { NotificationService } from '../../core/services/notification.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menu = output<void>();
  constructor(
    public auth: AuthService,
    public theme: ThemeService,
    public notices: NotificationService,
  ) {}
}
