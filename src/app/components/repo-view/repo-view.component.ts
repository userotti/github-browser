import { Component, OnInit } from '@angular/core';
import { RepoService } from '../../services/repo.service';
import { IssueService } from '../../services/issues.service';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Repo } from '../../models/repo.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';


@Component({
    selector: 'app-repo-view',
    templateUrl: './repo-view.component.html',
    styleUrls: ['./repo-view.component.css']
})
export class RepoViewComponent implements OnInit {

    issues: any[];
    repo: Repo;
    repo$: Observable<Repo>;
    loadingDetails: boolean;
    loadingIssues: boolean;

    errorModalContent: HTMLTemplateElement;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private repoService: RepoService,
        private issueService: IssueService,

    ) {

    }

    ngOnInit() {

        this.route.paramMap.switchMap((params: ParamMap) => {
            this.loadingDetails = true;
            return this.repoService.fetchRepoByOwnerName(params.get('owner')+"/"+params.get('name'));
        })
        .catch((e: any) => Observable.throw(this.repoFetchErrorHandler(e)))
        .subscribe((repsonse)=>{
            this.repoFetchSuccessHandler(repsonse);
        }, error => {} );

        this.route.paramMap.switchMap((params: ParamMap) => {
            this.loadingIssues = true;
            return this.issueService.fetchIssuesByRepoOwnerName(params.get('owner')+"/"+params.get('name'));
        })
        .catch((e: any) => Observable.throw(this.issuesFetchErrorHandler(e)))
        .subscribe((repsonse)=>{
            this.issuesFetchSuccessHandler(repsonse);
        }, error => {})

    }



    repoFetchSuccessHandler(repsonse){
        console.log("repsonse: ", repsonse);
        if (repsonse.items){
            this.repo = repsonse.items[0];
        }
    }

    repoFetchErrorHandler(err) {
        console.log("repoFetchErrorHandler ERROR: ", err);
        this.repo = undefined;
    }

    issuesFetchSuccessHandler(repsonse){
        console.log("issues repsonse: ", repsonse);
        if (repsonse){
            this.issues = repsonse;
        }
    }

    issuesFetchErrorHandler(err) {
        console.log("issuesFetchErrorHandler ERROR: ", err);
        this.issues = undefined;
    }

}
