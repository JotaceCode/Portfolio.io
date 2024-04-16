import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
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


  //Método que devuelve un array de tres proyectos por fila(para mostrar 3 por row en la vista)
  get proyectosPorFilas() {
    const proyectos = [...this.listProyectos]; // Copiar la lista de proyectos
    const proyectosPorFilas = [];
  
    while (proyectos.length > 0) {
      proyectosPorFilas.push(proyectos.splice(0, 3)); // Extraer y añadir grupos de 3 proyectos
    }
  
    return proyectosPorFilas;
  }
  
}
