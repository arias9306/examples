import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AgendaService,
  DayService,
  EventSettingsModel,
  MonthAgendaService,
  MonthService,
  ResizeService,
  TimelineMonthService,
  TimelineViewsService,
  WeekService,
  WorkWeekService,
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'examples-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
    ResizeService,
  ],
})
export class CalendarComponent implements OnInit {
  public data: object[] = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(2023, 3, 18, 10, 0),
      EndTime: new Date(2023, 3, 18, 12, 30),
    },
  ];
  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
  };
  ngOnInit(): void {
    console.log(this.eventSettings);
  }
}
