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

  searchQuery: string = '';
  constructor(private champListService: ChampListServiceService) { }

  ngOnInit(): void {
    this.champListService.getListChampions().subscribe(
      (champions) => {
        this.championList = champions;
        console.log(this.championList)
      }
    );
  }

  goToChampion(champion: Champion): void {
    // Mettez ici le code pour rediriger vers la page du champion sélectionné
  }
  onSearchQuery(query: string): void {
    // Effectuer le filtrage de la liste des champions en fonction de la valeur de recherche (query)
  }
}
