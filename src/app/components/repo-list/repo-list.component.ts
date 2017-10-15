import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl, FormArray } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { RepoService } from '../../services/repo.service';
import { Repo } from '../../models/repo.model';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-repo-list',
    templateUrl: './repo-list.component.html',
    styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

    repos: Repo[];
    searchTerm$ = new Subject<string>();
    loading: boolean;

    constructor(
        private router: Router,
        private repoService: RepoService
    ) {


    }

    ngOnInit() {
        this.repos = [];
        this.searchTerm$
        .debounceTime(300)
        .distinctUntilChanged()
        .do((newSearch) => {
            if (newSearch.length == 0) {
                this.repos = [];
            }
        })
        .filter((searchString) => (searchString.length > 0))
        .do((newSearch) => {
            this.loading = true;
        })
        .subscribe((data)=>{
            this.fetchRepos(data);
        })
    }

    fetchRepos(searchTerm){
        this.repoService.fetchReposBySearchTerm(searchTerm)
        .do(()=>{
            this.loading = false;
        })
        .catch((e: any) => Observable.throw(this.errorHandler(e)))
        .subscribe((repsonse)=>{
            this.successHandler(repsonse);
        })
    }

    successHandler(repsonse){
        if (repsonse.items){
            this.repos = repsonse.items;
        } else {
            this.repos = [];
        }
    }

    errorHandler(err) {
        console.log("ERROR: ", err);
        this.repos = [];
    }


}
