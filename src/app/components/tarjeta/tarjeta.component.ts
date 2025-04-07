import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'], 
})
export class TarjetaComponent implements OnInit {
  listProyectosR: any[] = [
    {
      urlImage: '../assets/images/3.png',
      titulo: 'OnuCode',
      descripcion: 'Plataforma de retos para programadores y diseñadores',
      tecnologias: ['Angular', 'HTML', 'CSS', 'Node'],
      url: ""},
    {
      urlImage: '../assets/images/3.webp',
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
    },{
      urlImage: '../assets/images/Captura.PNG',
      titulo: 'Generador de contraseñas Seguras',
      descripcion: 'Experimentación con Next.js y React 19',
      tecnologias: ['React', 'HTML', 'CSS', 'Node'],
      url: "https://safe-password-generator-vert.vercel.app"
    },{
      urlImage: '../assets/images/capt.png',
      titulo: 'OnuCode Web-App',
      descripcion: 'Web-App para OnuCode, diseñadores y programadores que buscan nuevos retos que impulsen su carrera profesional',
      tecnologias: ['Angular', 'HTML', 'CSS', 'Node'],
      url: ""
    }
  ];

  listProyectos = this.listProyectosR.reverse();

  constructor(private router: Router) {} 

  ngOnInit(): void {}

  navegar(url: string) {
    if (url) {
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
