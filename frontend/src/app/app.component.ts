import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SbbButtonModule } from '@sbb-esta/angular/button';
import { SbbCheckboxModule } from '@sbb-esta/angular/checkbox';
import { JourneyMapsBasicExample } from './components/map-component/map-component.component';
import { InputOverviewExample } from './components/input-component/input-component.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,JourneyMapsBasicExample,InputOverviewExample, ButtonComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

@NgModule({
  imports: [SbbButtonModule, SbbCheckboxModule]
})
export class TrainChooChooAppModule {}