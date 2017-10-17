import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoViewComponent } from './components/repo-view/repo-view.component';
import { RepoDetailsViewComponent } from './components/repo-details-view/repo-details-view.component';
import { RepoIssuesViewComponent } from './components/repo-issues-view/repo-issues-view.component';

import { RepoService } from './services/repo.service';
import { IssueService } from './services/issues.service';
import { IssuesFilterPipe } from './shared/issues-filter.pipe';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'repository-search', component: RepoListComponent },
    { path: 'repository/:owner/:name', component: RepoViewComponent }

];

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        RepoListComponent,
        RepoViewComponent,
        RepoDetailsViewComponent,
        RepoIssuesViewComponent,
        IssuesFilterPipe,
        ErrorModalComponent

    ],
    imports: [
        RouterModule.forRoot(appRoutes,{ enableTracing: true }),
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ChartsModule
    ],
    providers: [
        RepoService,
        IssueService
    ],
    bootstrap: [AppComponent],
    entryComponents: [ErrorModalComponent]
})
export class AppModule { }
