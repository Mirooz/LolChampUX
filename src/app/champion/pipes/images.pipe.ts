import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(url : string): string {
    return this.getModifiedImageSource(url);

  }

  getModifiedImageSource(imageFullname: string): string {
    console.log(imageFullname)
    // Récupérer l'extension de fichier (par exemple, ".png")
    const extension = imageFullname.substring(imageFullname.lastIndexOf('.'));
  
    // Retirer l'extension du nom de fichier (par exemple, "Aatrox")
    const fileName = imageFullname.substring(0, imageFullname.lastIndexOf('.'));
  
    // Ajouter le suffixe "_0" avant l'extension (par exemple, "Aatrox_0.png")
    const modifiedFileName = `assets/img/${fileName}_0.jpg`;
  

    
    return modifiedFileName;
  }
}
