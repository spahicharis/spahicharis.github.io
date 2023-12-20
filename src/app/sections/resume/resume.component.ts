import { Component } from '@angular/core';
import {TimelineComponent} from "../../@shared/components/timeline/timeline.component";
import {experienceData} from "../../../assets/data/experience.data";
import {educationData} from "../../../assets/data/education.data";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    TimelineComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  edu = educationData;
  exp = experienceData;
}
