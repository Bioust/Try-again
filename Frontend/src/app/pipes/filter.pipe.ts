import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filteringString: string, propName : string): any[] {
    const resultArray = [];
    if(value.length === 0 || filteringString === '' || propName === '') {
      return value;
    }
    for(const item of value) {
      if(item[propName] === filteringString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
