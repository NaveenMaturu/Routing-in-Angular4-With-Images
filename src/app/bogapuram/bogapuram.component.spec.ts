import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BogapuramComponent } from './bogapuram.component';

describe('BogapuramComponent', () => {
  let component: BogapuramComponent;
  let fixture: ComponentFixture<BogapuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BogapuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BogapuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
