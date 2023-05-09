import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublesGameComponent } from './doubles-game.component';

describe('DoublesGameComponent', () => {
  let component: DoublesGameComponent;
  let fixture: ComponentFixture<DoublesGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoublesGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoublesGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
