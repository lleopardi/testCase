import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  urls: Menu[] = [
    {path: '*', description: 'Review'},
    {path: '/request', description: 'Request'},
    {path: '/management', description: 'Manage' } ];

  constructor() { }

}
