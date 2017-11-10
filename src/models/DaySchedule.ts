import * as moment from "moment";
import { JsonObject, JsonProperty } from "json2typescript";

import { ScheduleItem } from "./ScheduleItem";

@JsonObject
export class DaySchedule {
  @JsonProperty("minTime", String)
  private _minTime: string = undefined;

  @JsonProperty("maxTime", String)
  private _maxTime: string = undefined;

  @JsonProperty("unavailableTimes", [ScheduleItem])
  unavailableTimes: Array<ScheduleItem> = undefined;

  get minTime(): moment.Moment {
    return moment(this._minTime);
  }

  get maxTime(): moment.Moment {
    return moment(this._maxTime);
  }
}
