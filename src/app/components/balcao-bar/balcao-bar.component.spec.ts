import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalcaoBarComponent } from './balcao-bar.component';

describe('BalcaoBarComponent', () => {
  let component: BalcaoBarComponent;
  let fixture: ComponentFixture<BalcaoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalcaoBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalcaoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
