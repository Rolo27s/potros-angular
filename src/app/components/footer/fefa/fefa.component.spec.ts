import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FefaComponent } from './fefa.component';

describe('FefaComponent', () => {
  let component: FefaComponent;
  let fixture: ComponentFixture<FefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FefaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
