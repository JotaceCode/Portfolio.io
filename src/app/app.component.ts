import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { TimelineComponent } from "./components/timeline/timeline.component";
import { HeaderComponent } from './components/header/header.component';
import { WindowCodeComponent } from './components/window-code/window-code.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { GridTechComponent } from './components/grid-tech/grid-tech.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadButton } from './components/cv--dl-button/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarjetaComponent,  TimelineComponent, HeaderComponent, WindowCodeComponent, SeparatorComponent, GridTechComponent, FooterComponent, DownloadButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jotace-Portfolio';
}
