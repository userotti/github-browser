import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-repo-issues-view',
    templateUrl: './repo-issues-view.component.html',
    styleUrls: ['./repo-issues-view.component.css']
})
export class RepoIssuesViewComponent implements OnInit {

    @Input() issues: any[];

    constructor() { }

    ngOnInit() {
    }

}
