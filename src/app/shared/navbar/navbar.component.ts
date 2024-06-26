import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isHidden = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > 50) {
      this.isHidden = true;
      navbar.classList.add('hidden-navbar');
    } else {
      this.isHidden = false;
      navbar.classList.remove('hidden-navbar');
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    navbar.classList.remove('hidden-navbar');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (window.scrollY > 50) {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      navbar.classList.add('hidden-navbar');
    }
  }
}
