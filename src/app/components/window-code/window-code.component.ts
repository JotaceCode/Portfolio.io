import { Component } from '@angular/core';

@Component({
  selector: 'app-window-code',
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
    2      name: "JotaceCode",
    3      role: "Full Stack Developer",
    4      technologies: ["JavaScript", "TypeScript", "Angular", "Node.js"],
    5      contact: {
    6        email: "jo@example.com",
    7        linkedin: "linkedin.com/in/jotacecode",
    8        github: "github.com/jotacecode"
    9      },
    10     sayHello: function () {
    11       return "¡Hola, mundo! Soy JotaceCode 🚀";
    12     }
    13   };
    14   
    15   console.log(developer.sayHello());`;
    

  


}

