import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightblue'},
  ];

  longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Fusce maximus est sit amet facilisis interdum. Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Quisque id vulputate libero, non consectetur odio.
  Sed eleifend in felis vitae euismod. Aliquam erat volutpat. Pellentesque congue
  magna mollis mollis facilisis. Nulla vehicula velit non accumsan viverra.
  Integer imperdiet lobortis sem, malesuada varius tortor posuere ut.
  Proin sed sem sit amet risus fringilla efficitur. Nullam tincidunt risus libero,
  a pulvinar dolor accumsan nec. Vestibulum ullamcorper magna vel mauris egestas,
   congue diam viverra. Suspendisse non enim et nisi eleifend posuere.`;
}
