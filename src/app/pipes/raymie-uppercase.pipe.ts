import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dutchLicensePlate',
  pure: true
})
export class DutchLicensePlatePipe implements PipeTransform {

  transform(value?: string): unknown {
    return "NL"+value?.toUpperCase();
  }
}
