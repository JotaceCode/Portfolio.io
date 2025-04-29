import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from 'node:inspector';

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
      urlImage: '../assets/images/3.webp',
      titulo: 'BROOM - TFG',
      descripcion:
        'Proyecto final del Grado Superior DAW.',
      tecnologias: ['Angular', 'HTML', 'CSS', 'C#','MongoDB', 'SQLserver'],
      url: 'https://optimistic-knuth.87-106-236-123.plesk.page',
      github: 'https://github.com/JotaceCode/TFG-DAW24',
      estado: 'Finalizado',
    },
    {
      urlImage: '../assets/images/Captura.PNG',
      titulo: 'Generador de contraseñas Seguras',
      descripcion: 'Experimentación con Next.js y React 19.',
      tecnologias: ['React', 'HTML', 'CSS', 'Node', 'Next.js', 'Tailwind', 'MySQL'],
      url: 'https://safe-password-generator-vert.vercel.app',
      github: '',
      estado: 'Activo',
    },
    {
      urlImage: '../assets/images/capt.png',
      titulo: 'OnuCode Web-App',
      descripcion:
        'Web-App para ONUCODE.',
      tecnologias: ['Angular', 'HTML', 'CSS', 'Tailwind'],
      url: '',
      github: '',
      estado: 'En desarrollo',
    },
    {
      urlImage: '../assets/images/flowers.png',
      titulo: 'Pixel Run',
      descripcion:
        'Juego 2D clásico desarrollado en javascript.',
      tecnologias: ['HTML', 'Tailwind', 'JavaScript', 'Node'],
      url: '',
      github: 'https://github.com/JotaceCode/Pixel-Run',
      estado: 'En desarrollo',
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

  // // Método que devuelve un array de tres proyectos por fila (para mostrar 3 por row en la vista)
  // get proyectosPorFilas() {
  //   const proyectos = [...this.listProyectos]; // Copiar la lista de proyectos
  //   const proyectosPorFilas = [];

  //   while (proyectos.length > 0) {
  //     proyectosPorFilas.push(proyectos.splice(0, 3)); // Extraer y añadir grupos de 3 proyectos
  //   }

  //   return proyectosPorFilas;
  // }
}
