import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'], // Cambiado a 'styleUrls'
})
export class TarjetaComponent implements OnInit {
  listProyectos: any[] = [
    {
      urlImage: '../assets/images/Broom.png',
      titulo: 'BROOM - TFG',
      descripcion: 'Proyecto final del Grado Superior, pretende organizar y facilitar el trabajo de limpieza de las habitaciones de un hotel',
      tecnologias: ['Angular', 'HTML', 'CSS', 'C#'],
      url: "https://github.com/JotaceCode/TFG-DAW24"
    },
    {
      urlImage: '../assets/images/3.png',
      titulo: 'Portfolio',
      descripcion: 'Experimentación con Angular',
      tecnologias: ['Angular', 'HTML', 'CSS', 'Node'],
      url: "https://github.com/JotaceCode/Portfolio.io"
    },
    {
      urlImage: '../assets/images/nodejs.png',
      titulo: 'CLI-task-tracker',
      descripcion: 'Experimentación Node con gestión de ficheros',
      tecnologias: ['Node','Javascript'],
      url: "https://github.com/JotaceCode/CLI-Task-Tracker-1D1P"
    }
  ];

  constructor(private router: Router) {} // Cambio de Route a Router

  ngOnInit(): void {}

  navegar(url: string) {
    if (url) {
      //console.log(url); 
      window.open(url, '_blank'); 
    } else {
      console.log('No URL provided');
    }
  }

  // Método que devuelve un array de tres proyectos por fila (para mostrar 3 por row en la vista)
  get proyectosPorFilas() {
    const proyectos = [...this.listProyectos]; // Copiar la lista de proyectos
    const proyectosPorFilas = [];

    while (proyectos.length > 0) {
      proyectosPorFilas.push(proyectos.splice(0, 3)); // Extraer y añadir grupos de 3 proyectos
    }

    return proyectosPorFilas;
  }
}
