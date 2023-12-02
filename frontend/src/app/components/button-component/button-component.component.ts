import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SbbButtonModule } from '@sbb-esta/angular/button';
import { SbbCheckboxModule } from '@sbb-esta/angular/checkbox';

@Component({
  selector: 'sbb-icon-button',
  standalone: true,
  imports: [SbbButtonModule],
  templateUrl: './button-component.component.html',
  styleUrl: './button-component.component.css'
})
export class ButtonComponentComponent {
  disabled = false;

}
