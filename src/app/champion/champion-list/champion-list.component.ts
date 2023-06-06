import { Component, OnInit } from '@angular/core';
import { Champion } from '../../champion';
import { CHAMPIONS } from '../../champions-MOKS';
import { ChampListServiceService } from './champ-list-service.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent implements OnInit {
  championList: Champion[] | undefined;
  filteredChampionList: Champion[] | undefined;
  searchQuery: string = '';

  constructor(private champListService: ChampListServiceService) {}

  ngOnInit(): void {
    this.champListService.getListChampions().subscribe((champions) => {
      this.championList = champions;
      this.filteredChampionList = this.championList; // Set initial filtered list to the complete champion list
    });
  }

  goToChampion(champion: Champion): void {
    // Mettez ici le code pour rediriger vers la page du champion sélectionné
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
}
