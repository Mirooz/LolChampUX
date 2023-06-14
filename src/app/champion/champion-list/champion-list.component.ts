import { Component, OnInit } from '@angular/core';
import { Champion } from '../model/champion';
import { CHAMPIONS } from '../../MOKS/champions-MOKS';
import { ChampListService } from './champ-list-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent implements OnInit {
  championList: Champion[] | undefined;
  filteredChampionList: Champion[] | undefined;
  searchQuery: string = '';

  constructor(private champListService: ChampListService, private router : Router) {}

  ngOnInit(): void {
   this.champListService.getListChampions().subscribe((champions) => {
    this.championList = champions;
      this.filteredChampionList = this.championList; 
    });
  }

  goToChampion(champion: Champion): void {
    this.router.navigate(['/champions', champion.id]);
  }

  onSearchQuery(query: string): void {
    this.searchQuery = query;
    this.filterChampionList();
  }

  filterChampionList(): void {
    if (this.searchQuery === '') {
      this.filteredChampionList = this.championList; // If search query is empty, show all champions
    } else {
      this.filteredChampionList = this.championList?.filter((champion) =>
        champion.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
  getModifiedImageSource(imageFullName: string): string {
    // Récupérer l'extension de fichier (par exemple, ".png")
    const extension = imageFullName.substring(imageFullName.lastIndexOf('.'));
  
    // Retirer l'extension du nom de fichier (par exemple, "Aatrox")
    const fileName = imageFullName.substring(0, imageFullName.lastIndexOf('.'));
  
    // Ajouter le suffixe "_0" avant l'extension (par exemple, "Aatrox_0.png")
    const modifiedFileName = `assets/img/${fileName}_0.jpg`;
  
    console.log(modifiedFileName);
    
    return modifiedFileName;
  }
}
