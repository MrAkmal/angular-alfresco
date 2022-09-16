import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  items: MenuItem[] = [];


  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Folders',
        routerLink:'/',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Documents',
        routerLink:'/documents',
        routerLinkActiveOptions: { exact: true }
      }
    ];
  }

}
