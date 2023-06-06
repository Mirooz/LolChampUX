import { Component, Input, OnInit } from '@angular/core';
import { Champion } from '../champion';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampListServiceService } from '../champion-list/champ-list-service.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit{
  @Input() champion: Champion | undefined; // Utilisez l'annotation @Input pour recevoir le champion en tant que propriété d'entrée

  constructor(private router: Router,
    private route: ActivatedRoute,
    
    private championService: ChampListServiceService ) { }

  ngOnInit(): void {
    const ChampId: string|null = this.route.snapshot.paramMap.get('id');
    console.log(ChampId)
    if(ChampId) {
      this.championService.getChampion(ChampId)
        .subscribe(champion => this.champion = champion);
    }
  }
}
