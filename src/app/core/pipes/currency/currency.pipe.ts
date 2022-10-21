import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCustom',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    return (
      '$' + new Intl.NumberFormat(`${args.language}-${args.code}`).format(value)
    );
  }
}
