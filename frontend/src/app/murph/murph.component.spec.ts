import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MurphComponent } from './murph.component';

describe('MurphComponent', () => {
  let component: MurphComponent;
  let fixture: ComponentFixture<MurphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MurphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MurphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
