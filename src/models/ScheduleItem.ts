import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class ScheduleItem {
  @JsonProperty("startTime", String)
  startTime: string = undefined;

  @JsonProperty("endTime", String)
  endTime: string = undefined;
}
