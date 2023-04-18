import { Component } from '@angular/core';
import { SyncfusionCalendarModule } from '@examples/web/shared/ui/syncfusion-calendar';

@Component({
  standalone: true,
  selector: 'examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [SyncfusionCalendarModule],
})
export class AppComponent {
  title = 'calendars';
}
