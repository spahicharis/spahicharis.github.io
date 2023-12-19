import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSidebarComponent } from './hero-sidebar.component';

describe('HeroSidebarComponent', () => {
  let component: HeroSidebarComponent;
  let fixture: ComponentFixture<HeroSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
