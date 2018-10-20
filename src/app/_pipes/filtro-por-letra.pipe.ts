import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorLetra'
})
export class FiltroPorLetraPipe implements PipeTransform {

  transform(value: any, search: string): any {
    if(search == '') {
      return value;
    }

    let arrayTemp = [];
    for(let i=0; i<value.length; i++){

      const values = Object.keys(value[i]).map(key => value[i][key]);

      const commaJoinedValues = values.join("");
      
      if(commaJoinedValues.toLowerCase().indexOf(search) >= 0){
        arrayTemp.push(value[i])
      }
    }

    return arrayTemp;
  }

}
