import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCardDetailComponent } from './component-card-detail.component';

describe('ComponentCardDetailComponent', () => {
  let component: ComponentCardDetailComponent;
  let fixture: ComponentFixture<ComponentCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
