import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SbbFormFieldModule } from '@sbb-esta/angular/form-field';
import { SbbInputModule } from '@sbb-esta/angular/input';

/**
 * @title Basic Inputs
 * @order 10
 */
@Component({
  selector: 'app-input-component',
  standalone: true,
  styleUrl: './input-component.component.css', 
  templateUrl: './input-component.component.html',
  imports: [FormsModule, SbbFormFieldModule, SbbInputModule],
})
export class InputOverviewExample {}