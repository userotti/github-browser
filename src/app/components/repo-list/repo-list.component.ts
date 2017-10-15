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
    repos$: Observable<Repo[]>;
    searchTerm$ = new Subject<string>();

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private repoService: RepoService
    ) {


    }

    ngOnInit() {
        this.repos$ = this.repoService.fetchReposBySearchTerm('');
        this.searchTerm$
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe((data)=>{
                console.log("GO!!!")
                this.repos$ = this.repoService.fetchReposBySearchTerm(data);
            })
    }

}
