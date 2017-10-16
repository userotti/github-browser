import { Component, OnInit } from '@angular/core';
import { RepoService } from '../../services/repo.service';
import { Repo } from '../../models/repo.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';


@Component({
    selector: 'app-repo-view',
    templateUrl: './repo-view.component.html',
    styleUrls: ['./repo-view.component.css']
})
export class RepoViewComponent implements OnInit {

    repo: Repo;
    repo$: Observable<Repo>;
    loadingDetails: boolean;
    loadingIssues: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private repoService: RepoService,
    ) {

    }

    ngOnInit() {

        this.route.paramMap.switchMap((params: ParamMap) => {
            this.loadingDetails = true;
            return this.repoService.fetchRepoByID(params.get('owner')+"/"+params.get('name'));
        })
        .catch((e: any) => Observable.throw(this.errorHandler(e)))
        .subscribe((repsonse)=>{
            this.successHandler(repsonse);
        })

        this.route.paramMap.switchMap((params: ParamMap) => {
            this.loadingIssues = true;
            return this.repoService.fetchRepoByID(params.get('owner')+"/"+params.get('name'));
        })
        .catch((e: any) => Observable.throw(this.errorHandler(e)))
        .subscribe((repsonse)=>{
            this.successHandler(repsonse);
        })

    }

    successHandler(repsonse){
        console.log("repsonse: ", repsonse);
        if (repsonse.items){
            this.repo = repsonse.items[0];
            this.loadingDetails = false;
        }

    }

    errorHandler(err) {
        console.log("ERROR: ", err);
        this.repo = undefined;
    }

}
