import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {NewGameComponent} from "./new-game/new-game.component";
import {HomeComponent} from "./home/home.component";
import {PlayedGamesComponent} from "./played-games/played-games.component";
import {NormalGameComponent} from "./new-game/normal-game/normal-game.component";
import {DoublesGameComponent} from "./new-game/doubles-game/doubles-game.component";
import {PlayGameComponent} from "./new-game/play-game/play-game.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'new-game', component: NewGameComponent, children: [
      {path: 'normal-game', component: NormalGameComponent},
      {path: 'normal-game/:name', component: PlayGameComponent},
      {path: 'doubles-game', component: DoublesGameComponent},
      {path: 'doubles-game/:name', component: PlayGameComponent},
    ]
  },
  {path: 'played-games', component: PlayedGamesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'},),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
