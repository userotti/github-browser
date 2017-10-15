import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesChartComponent } from './issues-chart.component';

describe('IssuesChartComponent', () => {
  let component: IssuesChartComponent;
  let fixture: ComponentFixture<IssuesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
