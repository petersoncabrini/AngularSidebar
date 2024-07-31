import { CommonModule } from '@angular/common';
import { Component, Input, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})

export class CustomSidenavComponent {

  sidenavCollapsed = signal(false);
  @Input() set collapsed (value: boolean){
    this.sidenavCollapsed.set(value);
  }

  profilePictureSize = computed(() => this.sidenavCollapsed() ? '32' : '100')

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: 'settings'
    }
  ])

}
