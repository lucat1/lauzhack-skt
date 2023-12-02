
import { Component } from '@angular/core';
import { SbbNotificationModule } from '@sbb-esta/angular/notification';
import { SbbJourneyMapsModule } from '@sbb-esta/journey-maps';
import { API_KEY_MAPS } from '../../const';
/**
 * @title Journey Maps Basic Example
 */
@Component({
  selector: 'app-map-component',
  standalone: true,
  styleUrl: './map-component.component.css',
  templateUrl: './map-component.component.html',
  imports: [SbbJourneyMapsModule, SbbNotificationModule],
})
export class JourneyMapsBasicExample {
  apiKey = API_KEY_MAPS;
}
