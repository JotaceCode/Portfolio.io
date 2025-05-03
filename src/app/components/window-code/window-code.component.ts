import { Component } from '@angular/core';

@Component({
  selector: 'app-window-code',
  imports: [],
  standalone: true,
  templateUrl: './window-code.component.html',
  styleUrl: './window-code.component.css'
})
export class WindowCodeComponent {
  closeWindow() {
    const element = document.getElementById('window-code');
    if (element) {
      element.style.display = 'none';
    }
  }
 codigo =
 `  
    1    const developer = {
    2      name: "Jose Carlos",
    3      surname: "Vélez Seisdedos",
    4      role: "Full Stack Developer",
    5      technologies: ["JavaScript", "TypeScript", "Angular", "Node.js"],
    6      contact: {
    7        email: "josvelsei@gmail.com",
    8        linkedin: "linkedin.com/in/jotacecode",
    9        github: "github.com/jotacecode"
    10     },
    11     sayHello: function () {
    12       return "¡Hola, mundo! Soy JotaceCode 🚀";
    13     }
    14   };
    15   
    16   console.log(developer.sayHello());`;
    

  


}

