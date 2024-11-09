import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EugeniaComponent } from './eugenia.component';

describe('EugeniaComponent', () => {
  let component: EugeniaComponent;
  let fixture: ComponentFixture<EugeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EugeniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EugeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
