import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
})
export class ControlComponent {
  // Could use ng-content but using @Input instead
  @Input({ required: true }) label!: string;
}
