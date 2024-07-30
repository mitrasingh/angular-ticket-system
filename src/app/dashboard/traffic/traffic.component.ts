import { Component, Input } from '@angular/core';

type dummyTrafficData = {
  id: string;
  value: number;
};
@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  @Input({ required: true }) dummyTrafficData!: dummyTrafficData[];
  @Input({ required: true }) maxTraffic!: number;
}
