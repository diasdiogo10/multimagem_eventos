import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrojadoComponent } from './arrojado.component';

describe('ArrojadoComponent', () => {
  let component: ArrojadoComponent;
  let fixture: ComponentFixture<ArrojadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrojadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrojadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
