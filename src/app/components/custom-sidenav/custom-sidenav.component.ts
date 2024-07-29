import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'


export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})

export class CustomSidenavComponent {

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
