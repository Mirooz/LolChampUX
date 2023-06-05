import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampListServiceService } from './champion-list/champ-list-service.service';
import { AppModule } from "../app.module";
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
    declarations: [
        ChampionListComponent,
        SearchBarComponent
    ],
    providers: [ChampListServiceService],
    exports: [ChampionListComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class ChampionModule { }
