import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMatificComponent } from './about-matific.component';

describe('AboutMatificComponent', () => {
  let component: AboutMatificComponent;
  let fixture: ComponentFixture<AboutMatificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMatificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMatificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
