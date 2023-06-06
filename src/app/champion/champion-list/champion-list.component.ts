import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion';
import { CHAMPIONS } from '../../champions-MOKS';
import { ChampListServiceService } from './champ-list-service.service';
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

  constructor(private champListService: ChampListServiceService, private router : Router) {}

  ngOnInit(): void {
    this.champListService.getListChampions().subscribe((champions) => {
      this.championList = champions;
      this.filteredChampionList = this.championList; // Set initial filtered list to the complete champion list
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
}
