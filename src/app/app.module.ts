import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { IssuesChartComponent } from './components/issues-chart/issues-chart.component';
import { RepoComponent } from './components/repo/repo.component';
import { DetailsComponent } from './components/repo/details/details.component';


import { RepoService } from './services/repo.service';
import { RepoViewComponent } from './components/repo-view/repo-view.component';
import { RepoDetailsViewComponent } from './components/repo-details-view/repo-details-view.component';
import { RepoIssuesViewComponent } from './components/repo-issues-view/repo-issues-view.component';


// const appRoutes: Routes = [
//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];

const appRoutes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'repository-search', component: RepoListComponent }

];

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        RepoListComponent,
        IssuesChartComponent,
        RepoViewComponent,
        RepoDetailsViewComponent,
        RepoIssuesViewComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes,{ enableTracing: true }),
        NgbModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ChartsModule
    ],
    providers: [
        RepoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
