import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @Output() add = new EventEmitter<{ title: string; text: string }>();
  titleInput = '';
  requestInput = '';

  onSubmit() {
    this.add.emit({ title: this.titleInput, text: this.requestInput });
    this.titleInput = '';
    this.requestInput = '';
  }
}
