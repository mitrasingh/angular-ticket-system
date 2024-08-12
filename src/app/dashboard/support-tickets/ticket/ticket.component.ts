import { Component, Input, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) data!: Ticket;
  @Input() detailsVisible: boolean = false;

  // detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.update((wasVisible) => !wasVisible);
    this.detailsVisible = !this.detailsVisible;
  }
}
