import { Component, Input, OnInit } from '@angular/core';
import { Champion } from '../model/champion';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampListService } from '../champion-list/champ-list-service';
import { Stats } from '../model/stats';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit{
  champion: Champion | undefined; // Utilisez l'annotation @Input pour recevoir le champion en tant que propriété d'entrée

  stats : Stats | undefined
  constructor(
    private route: ActivatedRoute,
    
    private championService: ChampListService ) { }

  ngOnInit(): void {
    const ChampId: string|null = this.route.snapshot.paramMap.get('id');
    console.log(ChampId)
    if(ChampId) {
      this.championService.getChampion(ChampId)
        .subscribe(champion => {
          this.champion = champion,
          console.log(this.champion)}
          );
      this.championService.getStatForChamp(ChampId)
      .subscribe(stats => {
        this.stats = stats
        console.log('hp : ' + this.stats?.hp)
      })
    }

    
  }
}
