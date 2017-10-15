import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoIssuesViewComponent } from './repo-issues-view.component';

describe('RepoIssuesViewComponent', () => {
  let component: RepoIssuesViewComponent;
  let fixture: ComponentFixture<RepoIssuesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoIssuesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoIssuesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
