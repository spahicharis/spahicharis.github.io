import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {IconifyIconComponent} from "./@shared/components/iconify-icon/iconify-icon.component";
import {HeroSidebarComponent} from "./@shell/hero-sidebar/hero-sidebar.component";
import {OffcanvasAreaComponent} from "./@shell/offcanvas-area/offcanvas-area.component";
import {NavigationBarComponent} from "./@shell/navigation-bar/navigation-bar.component";
import { HomeComponent } from './sections/home/home.component';
import {AboutComponent} from "./sections/about/about.component";
import {ResumeComponent} from "./sections/resume/resume.component";
import {PortfolioComponent} from "./sections/portfolio/portfolio.component";
import {BlogComponent} from "./sections/blog/blog.component";
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, IconifyIconComponent,
    HeroSidebarComponent, OffcanvasAreaComponent,
    NavigationBarComponent, HomeComponent, AboutComponent,
    ResumeComponent, PortfolioComponent, BlogComponent, ContactComponent]
})
export class AppComponent {
  title = 'this is my-personal-app';
}
