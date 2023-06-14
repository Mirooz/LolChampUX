import { Pipe, PipeTransform } from '@angular/core';
import { SpellCooldown, SpellCost } from '../model/spells';
@Pipe({
  name: 'formatArray'
})
export class FormatArrayPipe implements PipeTransform {
  transform(array: any[],type : string): string {
    if (array && array.length > 0) {
      switch(type){
        case 'cost':
          return array.map((value: SpellCost) => this.formatValue(value.value)).join(' / ');
        case 'cooldown':
          return array.map((value: SpellCooldown) => this.formatValue(value.value)).join(' / ');
      }
    }
    return '';
  }

  

  private formatValue(value: number): string {
    const formattedValue = Math.floor(value).toString().padStart(2, '0');
    
    console.log(formattedValue)
    return formattedValue;
  }
}
