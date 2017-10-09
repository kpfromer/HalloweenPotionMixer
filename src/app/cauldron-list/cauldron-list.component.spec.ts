import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauldronListComponent } from './cauldron-list.component';

describe('CauldronListComponent', () => {
  let component: CauldronListComponent;
  let fixture: ComponentFixture<CauldronListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauldronListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauldronListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
