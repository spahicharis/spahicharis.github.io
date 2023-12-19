import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasAreaComponent } from './offcanvas-area.component';

describe('OffcanvasAreaComponent', () => {
  let component: OffcanvasAreaComponent;
  let fixture: ComponentFixture<OffcanvasAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffcanvasAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
