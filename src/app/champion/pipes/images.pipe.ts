import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(url : string): string {
    return this.getModifiedImageSource(url);

  }

  getModifiedImageSource(imageFullName: string): string {
    // Récupérer l'extension de fichier (par exemple, ".png")
    const extension = imageFullName.substring(imageFullName.lastIndexOf('.'));
  
    // Retirer l'extension du nom de fichier (par exemple, "Aatrox")
    const fileName = imageFullName.substring(0, imageFullName.lastIndexOf('.'));
  
    // Ajouter le suffixe "_0" avant l'extension (par exemple, "Aatrox_0.png")
    const modifiedFileName = `assets/img/${fileName}_0.jpg`;
  
    
    return modifiedFileName;
  }
}
