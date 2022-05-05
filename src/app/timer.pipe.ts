import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayscount'
})
export class DayscountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithoutTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDiff = Math.abs(value - todayWithoutTime) //return value in miliseconds
    const dailySeconds = 86400; //60 seconds * 60 minutes >> 1 hour * 24 hours >> day
    var dateDiffSeconds = dateDiff*0.001; //converting miliseconds to seconds
    var dateCounter = dateDiffSeconds/dailySeconds;

    if (dateCounter >= 1 && value > todayWithoutTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
