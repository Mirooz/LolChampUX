import { Component, OnInit } from '@angular/core';
import { Champion } from '../model/champion';
import { ChampListService } from './champ-list-service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { slideInAnimation } from 'src/app/utils/animation';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class ChampionListComponent implements OnInit {
  championList: Champion[] | undefined;
  filteredChampionList: Champion[] | undefined;
  searchQuery: string = '';

  constructor(private champListService: ChampListService, private router : Router) {}

  ngOnInit(): void {
    console.log('list ' + this.championList)
   this.champListService.getListChampions().subscribe((champions) => {
    this.championList = champions;
    
    console.log('ini');
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

}
