import type {TDatesInfo} from "../../types";

export type THistoricalWheel = {
  dates: TDatesInfo
  activeDate: number
  setActiveDate: (date: number) => void
}