import { Component, Input } from '@angular/core';
import { Champion } from '../../model/champion';
import { ChampListService } from '../../champion-list/champ-list-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Spells } from '../../model/spells';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent {

  @Input() champion : Champion | any
  spells: Spells[] = [];

  constructor(private champListService: ChampListService, 
    private route: ActivatedRoute,
    private router : Router) {}

  ngOnInit(): void {
    
    const ChampId: string|null = this.route.snapshot.paramMap.get('id');
    if (ChampId){
      this.champListService.getSpellsByChamp(ChampId).subscribe((spells) => {
        console.log("spells : ");
        console.log(spells)
        
      this.spells = spells;
    });
  }
  }
}