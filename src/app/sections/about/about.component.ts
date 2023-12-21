import { Component } from '@angular/core';
import { IconifyIconComponent } from "../../@shared/components/iconify-icon/iconify-icon.component";
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    IconifyIconComponent,
    CarouselModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  products: string[] = [
    "assets/Vector-1.png",
    "assets/Vector-7.svg",
    "assets/Vector-2.png",
    "assets/Vector-3.png",
    "assets/Vector-4.png",
    "assets/Vector-5.png",
    "assets/Vector-6.png",
    "assets/Vector-8.png",
  ];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 4,
      numScroll: 3
    },
    {
      breakpoint: '767px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '600px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '400px',
      numVisible: 2,
      numScroll: 1
    }
  ];
}
