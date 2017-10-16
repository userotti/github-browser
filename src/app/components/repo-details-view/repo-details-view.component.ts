import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../models/repo.model';

@Component({
    selector: 'app-repo-details-view',
    templateUrl: './repo-details-view.component.html',
    styleUrls: ['./repo-details-view.component.css']
})
export class RepoDetailsViewComponent implements OnInit {

    @Input() repo: Repo;

    constructor() { }

    ngOnInit() {
        
    }

}
