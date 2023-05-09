import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Darts-Score-Holder';
  selectedValue: string = 'val';

  menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
      {
        label: 'New Game', icon: 'pi pi-fw pi-plus', items: [
          {label: 'Normal Game', icon: 'pi pi-user', routerLink: '/new-game/normal-game'},
          {label: 'Doubles Game', icon: 'pi pi-users', routerLink: '/new-game/doubles-game'},
        ]
      },
      {label: 'Played Games Games', icon: 'pi pi-fw pi-check-circle', routerLink: '/played-games'},
    ];
  }
}
