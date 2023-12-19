import { Component } from '@angular/core';
import {IconifyIconComponent} from "../../@shared/components/iconify-icon/iconify-icon.component";

@Component({
  selector: 'app-hero-sidebar',
  standalone: true,
  imports: [
    IconifyIconComponent
  ],
  templateUrl: './hero-sidebar.component.html',
  styleUrl: './hero-sidebar.component.scss'
})
export class HeroSidebarComponent {

}
