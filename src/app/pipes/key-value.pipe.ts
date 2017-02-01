import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue'
})
export class KeyValuePipe implements PipeTransform {

  transform(valueArray: any, key?: any): any {
    if (parseInt(key) !== 0 && valueArray.length > 0) {
      return(valueArray.find((item) => item.key === parseInt(key))).value;
    }
    return null;
  }

}
