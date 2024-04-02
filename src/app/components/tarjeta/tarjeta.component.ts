import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css',
})
export class TarjetaComponent implements OnInit {
  listProyectos: any[] = [
    {
      url: '../assets/images/1.png',
      titulo: 'Gymnasio',
      descripcion: 'Práctica con MVC',
      tecnologias: ['Php', 'HTML', 'CSS']

    },
    {
      url: '../assets/images/3.png',
      titulo: 'Portfolio',
      descripcion: 'Experimentación con Angular',
      tecnologias: ['Angular', 'HTML', 'CSS', 'Node']


    },
    {
      url: '../assets/images/login.png',
      titulo: 'Login',
      descripcion: 'Experimentación ASP.NET MVC',
      tecnologias: ['Laravel', 'HTML', 'CSS', 'Figma']


    }
  ];
  constructor() {}
  ngOnInit(): void {

  }
}
