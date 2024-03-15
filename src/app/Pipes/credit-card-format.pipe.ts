import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat',
  standalone: true
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(creditCard:string): string {
    if (creditCard !="") {
      return creditCard.slice(0,4) + "-" + creditCard.slice(4,8) + "-" + creditCard.slice(8,12) + "-" +creditCard.slice(12,16);
    }else{
      return "";
    }

  }

}
