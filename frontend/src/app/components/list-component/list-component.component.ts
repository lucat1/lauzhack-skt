import { Component } from '@angular/core';
import { SbbAccordionModule } from '@sbb-esta/angular/accordion';

/**
 * @title Simple Panel
 * @order 10
 */
@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  standalone: true,
  imports: [SbbAccordionModule],
})
export class AccordionSimplePanelExample {
  showComponent: boolean = false;
}