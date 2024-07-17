import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigeirinhoComponent } from './ligeirinho.component';

describe('LigeirinhoComponent', () => {
  let component: LigeirinhoComponent;
  let fixture: ComponentFixture<LigeirinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigeirinhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LigeirinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
