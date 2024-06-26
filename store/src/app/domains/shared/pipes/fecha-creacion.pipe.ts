import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaCreacion',
  standalone: true
})
export class FechaCreacionPipe implements PipeTransform {

  transform(value: string): string {
    return value;
  }

}
