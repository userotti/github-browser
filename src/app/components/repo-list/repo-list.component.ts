import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl, FormArray } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

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
    lastSearchTerm: string;

    constructor(
        private router: Router,
        private repoService: RepoService,
        private modalService: NgbModal
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
            this.lastSearchTerm = newSearch
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

    getLinkUrl(item){
        let fullName = item.full_name.split('/');
        return '/repository/' + fullName[0] + "/" + fullName[1]
    }

    successHandler(repsonse){
        if (repsonse.items){
            this.repos = Repo.fromJsonList(repsonse.items);
        } else {
            this.repos = [];
        }
    }

    errorHandler(err) {
        this.repos = [];
        this.loading = false;
        this.openErrorModal(err.name, err.error, 'Try again in a minute').then(()=>{
            setTimeout(()=>{
                this.loading = true;
                this.fetchRepos(this.lastSearchTerm);
            }, 1000)
        });
    }

    openErrorModal(errorTitle: string, errorBody: string, buttonMessage: string) {
        var modalRef = this.modalService.open(ErrorModalComponent);
        modalRef.componentInstance.title = errorTitle;
        modalRef.componentInstance.body = errorBody;
        modalRef.componentInstance.buttonMessage = buttonMessage;


        return modalRef.result;
    }


}
