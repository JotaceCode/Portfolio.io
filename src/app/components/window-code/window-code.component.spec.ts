import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCodeComponent } from './window-code.component';

describe('WindowCodeComponent', () => {
  let component: WindowCodeComponent;
  let fixture: ComponentFixture<WindowCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
