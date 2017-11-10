import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

import moment from "moment";
import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript";

import { DaySchedule } from "../../models/DaySchedule";
import storeData from "../../data/store";
import trainerData from "../../data/trainer";

@Injectable()
export class ScheduleProvider {
  private jsonConvert: JsonConvert;

  constructor() {
    this.jsonConvert = new JsonConvert();
    this.jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
    this.jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    this.jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null
  }

  getForTrainer(trainerId: number, date = moment()): Observable<DaySchedule> {
    /**
     * NOTE:
     * Our real app makes an API call to load this data. For this demo,
     * I am loading static data from the /data folder instead (which is a copy of actual data)
     */
    // let isoDate = date.startOf("day").toISOString();
    // return this.http
    //   .get(`schedule/trainer/${trainerId}?date=${isoDate}`)
    //   .map(res => jsonConvert.deserialize(res.json(), DaySchedule));
    return Observable.of(
      this.jsonConvert.deserialize(trainerData, DaySchedule)
    );
  }

  getForStore(
    storeId: number,
    serviceId: number,
    date = moment()
  ): Observable<DaySchedule> {
    /**
     * NOTE:
     * Our real app makes an API call to load this data. For this demo,
     * I am loading static data from the /data folder instead (which is a copy of actual data)
     */
    // let isoDate = date.startOf("day").toISOString();
    // return this.http
    //   .get(`schedule/store/${storeId}?serviceId=${serviceId}&date=${isoDate}`)
    //   .map(res => jsonConvert.deserialize(res.json(), DaySchedule));
    return Observable.of(this.jsonConvert.deserialize(storeData, DaySchedule));
  }
}
