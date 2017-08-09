import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizagComponent } from './vizag.component';

describe('VizagComponent', () => {
  let component: VizagComponent;
  let fixture: ComponentFixture<VizagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
