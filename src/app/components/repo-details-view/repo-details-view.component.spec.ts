import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailsViewComponent } from './repo-details-view.component';

describe('RepoDetailsViewComponent', () => {
  let component: RepoDetailsViewComponent;
  let fixture: ComponentFixture<RepoDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
