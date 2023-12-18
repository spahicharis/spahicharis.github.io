import { Component } from '@angular/core';
import {IconifyIconComponent} from "../../@shared/components/iconify-icon/iconify-icon.component";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    IconifyIconComponent
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

}
