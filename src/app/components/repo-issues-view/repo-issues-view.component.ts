import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-repo-issues-view',
    templateUrl: './repo-issues-view.component.html',
    styleUrls: ['./repo-issues-view.component.css']
})
export class RepoIssuesViewComponent implements OnInit {

    @Input() issues: any[];
    @Input() openIssuesCount: number;

    filter: any;

    public pieChartLabels:string[] = ['Closed Issues', 'Open Issues'];
    public pieChartData:number[] = [];
    public pieChartType:string = 'pie';

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

    constructor() {
        this.filter = 'All';
    }

    setFilter(filterValue) {
        this.filter = filterValue
    }

    ngOnInit() {
        this.filter = "All";
        if (this.issues && this.issues.length){
            this.pieChartData[0] = Number(this.issues[0].number) - this.openIssuesCount;
            this.pieChartData[1] = this.openIssuesCount;
        }

    }

}
