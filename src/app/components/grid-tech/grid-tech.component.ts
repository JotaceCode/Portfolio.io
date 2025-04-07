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
    { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DA0037', alt: 'Angular' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React' },
    { name: 'mySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', alt: 'mySQL' },
    { name: 'SQLserver', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftsqlserver.svg', alt: 'SQLserver' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', alt: 'MongoDB' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/node.js/339933', alt: 'Node.js' },
    { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/000000', alt: 'Express.js' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', alt: 'JavaScript' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/007ACC', alt: 'TypeScript' },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', alt: 'HTML5' },
    { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6', alt: 'CSS3' },
    { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3', alt: 'Bootstrap' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',  alt: 'Tailwind CSS' },
    { name: 'Sass', icon: 'https://cdn.simpleicons.org/sass/C76494',  alt: 'Sass' },
    { name: 'jQuery', icon: 'https://cdn.simpleicons.org/jquery/0769AD', alt: 'jQuery' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717', alt: 'GitHub' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717', alt: 'GitHub' },
    
  ];
}
