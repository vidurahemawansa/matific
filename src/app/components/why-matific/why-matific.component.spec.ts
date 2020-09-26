import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMatificComponent } from './why-matific.component';

describe('WhyMatificComponent', () => {
  let component: WhyMatificComponent;
  let fixture: ComponentFixture<WhyMatificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyMatificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyMatificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
