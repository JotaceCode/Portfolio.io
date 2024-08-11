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
      url: '../assets/images/Broom.png',
      titulo: 'BROOM',
      descripcion: 'Proyecto final del Grado Superior, pretende organizar y facilitar el trabajo de limpieza de las habitaciones de un hotel',
      tecnologias: ['Angular', 'HTML', 'CSS', 'C#']

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
      descripcion: 'Experimentación Figma, desarrollo UI de un componente LOGIN con iconos y animaciones',
      tecnologias: ['Figma']


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
