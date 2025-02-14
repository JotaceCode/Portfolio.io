import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTechComponent } from './grid-tech.component';

describe('GridTechComponent', () => {
  let component: GridTechComponent;
  let fixture: ComponentFixture<GridTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
