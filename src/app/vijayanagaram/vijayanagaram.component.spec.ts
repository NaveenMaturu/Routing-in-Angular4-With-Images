import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VijayanagaramComponent } from './vijayanagaram.component';

describe('VijayanagaramComponent', () => {
  let component: VijayanagaramComponent;
  let fixture: ComponentFixture<VijayanagaramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VijayanagaramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VijayanagaramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
