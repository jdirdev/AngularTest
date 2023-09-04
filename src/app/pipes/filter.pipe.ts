import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, filterString: string) {
    
    if(value.length === 0 || filterString.length === 0) {
      return value;
    }

    if(filterString.length > 3) {
      filterString = filterString.substring(0, 2);
    }

    let filterRecords: Array<any> = [];
    for(const record of value) {
      if(record['name'].toLowerCase().indexOf(filterString.toLowerCase()) >= 0 || 
         record['lastname'].toLowerCase().indexOf(filterString.toLowerCase()) >= 0) {
        filterRecords.push(record);
      }
    }
    return filterRecords;
  }

}
