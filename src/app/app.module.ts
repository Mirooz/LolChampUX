import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChampionModule } from './champion/champion.module';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './MOKS/InMemoryDataService';
import { RouterModule, Routes } from '@angular/router';
import { ChampionListComponent } from './champion/champion-list/champion-list.component';
import { ChampionDetailComponent } from './champion/champion-detail/champion-detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'champions/:id', component: ChampionDetailComponent },
  { path: 'champions', component: ChampionListComponent },
  { path: '', redirectTo: '/champions', pathMatch: 'full' },
  // Ajoutez d'autres routes si nécessaire
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    ChampionModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{ dataEncapsulation: false }),
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
