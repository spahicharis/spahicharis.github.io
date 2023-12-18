import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconifyIconComponent } from './iconify-icon.component';

describe('IconifyIconComponent', () => {
  let component: IconifyIconComponent;
  let fixture: ComponentFixture<IconifyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconifyIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconifyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
