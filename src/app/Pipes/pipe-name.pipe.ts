import { Pipe, PipeTransform } from '@angular/core';
import { last } from 'rxjs';

@Pipe({
  name: 'pipeName',
  standalone: true
})
export class PipeNamePipe implements PipeTransform {

  transform(name:string): string {
    return name.charAt(0).toUpperCase() + name.slice(1,name.length);
  }

}
