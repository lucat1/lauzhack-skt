import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SbbButtonModule } from '@sbb-esta/angular/button';
import { SbbCheckboxModule } from '@sbb-esta/angular/checkbox';
import { SbbIconModule } from '@sbb-esta/angular/icon';

@Component({
  selector: 'sbb-icon-button',
  standalone: true,
  imports: [SbbButtonModule, SbbIconModule, SbbCheckboxModule, FormsModule],
  templateUrl: './button-component.component.html',
  styleUrl: './button-component.component.css'
})
export class ButtonComponentComponent {
  disabled = false;

}
