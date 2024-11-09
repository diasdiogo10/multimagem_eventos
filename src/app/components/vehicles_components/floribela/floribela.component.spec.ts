import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloribelaComponent } from './floribela.component';

describe('FloribelaComponent', () => {
  let component: FloribelaComponent;
  let fixture: ComponentFixture<FloribelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloribelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloribelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
