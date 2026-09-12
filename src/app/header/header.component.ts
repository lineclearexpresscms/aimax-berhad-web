import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileOpen = signal(false);
  /** Which dropdown is currently open (desktop). null = all closed. */
  openDropdown = signal<'about' | 'businesses' | 'media' | null>(null);

  toggleMobile() { this.mobileOpen.update(v => !v); }
  closeMobile() { this.mobileOpen.set(false); }

  showDropdown(name: 'about' | 'businesses' | 'media') {
    this.openDropdown.set(name);
  }
  hideDropdown() {
    this.openDropdown.set(null);
  }
}
