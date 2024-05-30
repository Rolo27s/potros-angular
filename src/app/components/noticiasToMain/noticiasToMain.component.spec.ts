import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasToMainComponent } from './noticiasToMain.component';

describe('NoticiasToMainComponent', () => {
  let component: NoticiasToMainComponent;
  let fixture: ComponentFixture<NoticiasToMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasToMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasToMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
