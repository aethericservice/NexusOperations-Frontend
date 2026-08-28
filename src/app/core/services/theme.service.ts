import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly dark = signal(false);
  toggle() {
    this.dark.update((v) => !v);
    document.documentElement.classList.toggle('dark', this.dark());
  }
}
