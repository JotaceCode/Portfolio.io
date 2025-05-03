import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-download-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cv--dl-button.component.html',
  styleUrl: './cv--dl-button.component.css'
})
export class DownloadButton {

  constructor() { }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/descargas/cv-04-2025.pdf'; // Ruta del archivo a descargar
    link.download = 'josecarlosvs-cv.pdf'; // Nombre del archivo descargado
    link.click();
  }
}
