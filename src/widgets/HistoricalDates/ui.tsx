import type {FC} from "react"
import type {THistoricalDates} from "./types"
import {useState} from "react"
import HistoricalWheel from "./ui/HistoricalWheel";
import HistoricalDetails from "./ui/HistoricalDetails";
import useHistoricalDates from "./hooks/useHistoricalDates";
import "./HistoricalDates.scss"

const HistoricalDates: FC<THistoricalDates> = () => {
  const dates = useHistoricalDates()

  const [activeDate, setActiveDate] = useState(1)
  const [isBlocked, setIsBlocked] = useState(false)

  const changeActiveDate = (date: number) => {
    if (isBlocked) return
    setIsBlocked(true)
    setTimeout(() => setIsBlocked(false), 1000)
    setActiveDate(date)
  }

  return (
    <section className="historical-dates">
      <div className="historical-dates__inner container">
        <div className="historical-dates__body">
          <div className="historical-dates__line historical-dates__line--left"/>
          <div className="historical-dates__line historical-dates__line--center"/>
          <div className="historical-dates__line historical-dates__line--right"/>
          <div className="historical-dates__line historical-dates__line--middle"/>
          <h1 className="historical-dates__title title">Исторические даты</h1>
          <HistoricalWheel dates={dates} activeDate={activeDate} setActiveDate={changeActiveDate}/>
          <HistoricalDetails details={dates[activeDate - 1].detail}/>
        </div>
      </div>
    </section>
  )
}

export default HistoricalDates