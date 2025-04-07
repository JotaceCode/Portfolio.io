import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-tech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-tech.component.html',
  styleUrl: './grid-tech.component.css'
})
export class GridTechComponent {

  techList = [
    // 🟨 Lenguajes
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', alt: 'JavaScript' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/007ACC', alt: 'TypeScript' },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', alt: 'HTML5' },
    { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6', alt: 'CSS3' },
    { name: 'Sass', icon: 'https://cdn.simpleicons.org/sass/C76494',  alt: 'Sass' },
  
    // ⚛️ Frameworks y Librerías Frontend
    { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DA0037', alt: 'Angular' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React' },
    { name: 'Nextjs', icon: 'https://cdn.simpleicons.org/nextdotjs/000000', alt: 'Next.js' },
    { name: 'jQuery', icon: 'https://cdn.simpleicons.org/jquery/0769AD', alt: 'jQuery' },
    { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3', alt: 'Bootstrap' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',  alt: 'Tailwind CSS' },
  
    // 🗄️ Bases de Datos
    { name: 'mySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', alt: 'mySQL' },
    { name: 'SQLserver', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftsqlserver.svg', alt: 'SQLserver' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', alt: 'MongoDB' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28', alt: 'Firebase' },
  
    // ⚙️ Backend y Servidores
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/node.js/339933', alt: 'Node.js' },
    { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/000000', alt: 'Express.js' },
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20', alt: 'Laravel' },
  
    // 🛠️ Herramientas y Plataformas
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717', alt: 'GitHub' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker' },
  ];
}
