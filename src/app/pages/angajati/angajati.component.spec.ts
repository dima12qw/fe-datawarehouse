import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngajatiComponent } from './angajati.component';

describe('AngajatiComponent', () => {
  let component: AngajatiComponent;
  let fixture: ComponentFixture<AngajatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngajatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngajatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
