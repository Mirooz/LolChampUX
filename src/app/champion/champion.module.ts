import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampListServiceService } from './champion-list/champ-list-service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { SpellsComponent } from './champion-detail/spells/spells.component';



@NgModule({
    declarations: [
        ChampionDetailComponent,
        ChampionListComponent,
        SearchBarComponent,
        SpellsComponent
    ],
    providers: [ChampListServiceService],
    exports: [ChampionListComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class ChampionModule { }
