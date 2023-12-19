import { Component } from '@angular/core';
import {HeroSidebarComponent} from "../hero-sidebar/hero-sidebar.component";
import {IconifyIconComponent} from "../../@shared/components/iconify-icon/iconify-icon.component";

@Component({
  selector: 'app-offcanvas-area',
  standalone: true,
  imports: [
    HeroSidebarComponent,
    IconifyIconComponent
  ],
  templateUrl: './offcanvas-area.component.html',
  styleUrl: './offcanvas-area.component.scss'
})
export class OffcanvasAreaComponent {

}
