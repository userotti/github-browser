import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { RepoListComponent } from './repo-list/repo-list.component';

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
        RepoListComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes,{ enableTracing: true }),
        NgbModule,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
