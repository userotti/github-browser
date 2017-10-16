import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'issuesFilter'
})
export class IssuesFilterPipe implements PipeTransform {

    transform(items: any[], args?: any): any {
        if (!items || !args) {
            return items;
        }

        let value = args.toLowerCase();
        return items.filter((item)=>{
            if (value == "all"){
                return true
            } else {
                return item.state == value;
            }

        });
    }

}
