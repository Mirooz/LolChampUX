import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatArray' })
export class FormatArrayPipe implements PipeTransform {
  transform(array: number[]): string {
    return array.map((value) => this.formatValue(value)).join('/');
  }

  private formatValue(value: number): string {
    const formattedValue = Math.floor(value).toString().padStart(2, '0');
    return formattedValue;
  }
}
