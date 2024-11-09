import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoaGiraComponent } from './boa-gira.component';

describe('BoaGiraComponent', () => {
  let component: BoaGiraComponent;
  let fixture: ComponentFixture<BoaGiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoaGiraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoaGiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
