import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pathLogos'
})
export class PathLogosPipe implements PipeTransform {

  transform(value: unknown, extension = 'png'): unknown {
    return `assets/imgs/${extension}/logos/${value}`;
  }

}
