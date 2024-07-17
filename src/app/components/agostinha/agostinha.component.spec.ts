import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgostinhaComponent } from './agostinha.component';

describe('AgostinhaComponent', () => {
  let component: AgostinhaComponent;
  let fixture: ComponentFixture<AgostinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgostinhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgostinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
