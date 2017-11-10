import { Component } from "@angular/core";
import { ScheduleProvider } from "../../providers/schedule/schedule";
import { DaySchedule } from "../../models/DaySchedule";
import moment from "moment";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  filter = "store";

  storeSchedule: DaySchedule;
  trainerSchedule: DaySchedule;

  constructor(private schedule: ScheduleProvider) {}

  ionViewDidLoad() {
    // Parameter values don't matter since we're returing static data for the demo
    this.schedule
      .getForStore(123, 456, moment())
      .subscribe(data => (this.storeSchedule = data));

    this.schedule
      .getForTrainer(123, moment())
      .subscribe(data => (this.trainerSchedule = data));
  }
}
