import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetudiantsComponent } from './listetudiants.component';

describe('ListetudiantsComponent', () => {
  let component: ListetudiantsComponent;
  let fixture: ComponentFixture<ListetudiantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListetudiantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListetudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
