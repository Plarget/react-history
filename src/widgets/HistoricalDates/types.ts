export type THistoricalDates = {}

export type TDatesInfo = {
  date: number[]
  title: string
  detail: TDatesInfoDetail[]
}[]

export type TDatesInfoDetail = {
  id: number
  date: number
  info: string
}