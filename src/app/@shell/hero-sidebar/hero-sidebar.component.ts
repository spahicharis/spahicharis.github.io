import { Component } from '@angular/core';
import {IconifyIconComponent} from "../../@shared/components/iconify-icon/iconify-icon.component";
import { CarouselModule } from 'primeng/carousel';
import {GalleriaModule} from "primeng/galleria";

@Component({
  selector: 'app-hero-sidebar',
  standalone: true,
  imports: [
    IconifyIconComponent,
    CarouselModule,
    GalleriaModule
  ],
  templateUrl: './hero-sidebar.component.html',
  styleUrl: './hero-sidebar.component.scss'
})
export class HeroSidebarComponent {
  images = [
    {
      itemImageSrc: "assets/Vector-1.png"
    },
    {
      itemImageSrc: "assets/Vector-7.svg"
    },
    {
      itemImageSrc: "assets/Vector-2.png"
    },
    {
      itemImageSrc: "assets/Vector-4.png"
    }
  ];


  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}
