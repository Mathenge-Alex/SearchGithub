import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let currentDate: Date = new Date();
    let fullCurrentDate: any = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
    var dateDifference = Math.abs(value - fullCurrentDate) // date diff in ms
    const timeInSeconds = 86400; // seconds in a day
    var pastSeconds = dateDifference * 0.001; //convert ms to seconds
    var dater = pastSeconds / timeInSeconds;

    if (dater >= 1 && value < fullCurrentDate) {
        var days = dater/365
      return days;
    } else {
      return 0;
    }
  }

}
