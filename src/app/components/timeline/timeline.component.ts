import { Component, Injectable } from '@angular/core';
import { DownloadButton } from '../cv--dl-button/cv--dl-button.component';
@Injectable()
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [DownloadButton],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

}
