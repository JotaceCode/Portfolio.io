import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,PresentacionComponent,TarjetaComponent,ConocimientosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JCC-Portfolio';
}
