import { Component } from '@angular/core';
import {IconifyIconComponent} from "../../@shared/components/iconify-icon/iconify-icon.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    IconifyIconComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
