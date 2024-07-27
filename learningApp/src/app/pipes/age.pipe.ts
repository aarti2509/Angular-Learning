import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    let currentDateYear = new Date().getFullYear();
    console.log(currentDateYear);
    let userBirthDate = new Date(value).getFullYear();
    console.log(userBirthDate);
    let age = currentDateYear - userBirthDate;
    return age;
  }

}
