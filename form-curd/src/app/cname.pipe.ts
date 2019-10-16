import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cname'
})
export class CnamePipe implements PipeTransform {
   
  transform(value: any, args?: any): any {
    //return null;
    let short = value.substring(0,3).toUpperCase().split('').reverse().join('')
    console.log(value)
    return short
  }

}
