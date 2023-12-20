import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TimelineModel} from "../../models/timeline.model";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  @Input() items: TimelineModel[] = [];
}
