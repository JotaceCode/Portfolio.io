import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { TimelineComponent } from "./components/timeline/timeline.component";
import { HeaderComponent } from './components/header/header.component';
import { WindowCodeComponent } from './components/window-code/window-code.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { GridTechComponent } from './components/grid-tech/grid-tech.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, PresentacionComponent, TarjetaComponent, ConocimientosComponent, TimelineComponent, HeaderComponent, WindowCodeComponent, SeparatorComponent, GridTechComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JCC-Portfolio';
}
