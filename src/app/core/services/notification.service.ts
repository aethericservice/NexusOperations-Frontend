import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class NotificationService {
  readonly unread = signal(5);
  clear() {
    this.unread.set(0);
  }
}
