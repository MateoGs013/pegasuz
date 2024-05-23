import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  toggleSidebar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    const toggleBtn = document.querySelector('.toggle-btn i') as HTMLElement;
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('collapsed');
    if (sidebar.classList.contains('open')) {
      toggleBtn.classList.remove('fa-chevron-right');
      toggleBtn.classList.add('fa-chevron-left');
    } else {
      toggleBtn.classList.remove('fa-chevron-left');
      toggleBtn.classList.add('fa-chevron-right');
    }
  }
}
