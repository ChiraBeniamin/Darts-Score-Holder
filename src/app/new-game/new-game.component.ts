import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  menuItems: any

  constructor() {

  }

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/normal-game'},
      {label: 'New Game', icon: 'pi pi-fw pi-plus', routerLink: '/new-game'},
      {label: 'Played Games Games', icon: 'pi pi-fw pi-check-circle', routerLink: '/played-games'},
    ];
  }

}
