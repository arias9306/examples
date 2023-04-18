import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [CommonModule, ScheduleModule],
  declarations: [CalendarComponent],
  exports: [CalendarComponent],
})
export class SyncfusionCalendarModule {}
