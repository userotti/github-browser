import { Injectable } from '@angular/core';
import { Repo } from '../models/repo.model';
// import { HttpModule } from '@angular/http';
import { Subscription, Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class RepoService {


    constructor(private http: HttpClient) {

    }

    fetchReposBySearchTerm(searchTerm):Observable<Repo[]> {
        console.log("making the request");

        return this.http.get("https://api.github.com/search/repositories?q=" + searchTerm)
    }

    fetchRepoByID() {
        return this.http.get("sdfksjdhkfjshkdf");
    }

}
