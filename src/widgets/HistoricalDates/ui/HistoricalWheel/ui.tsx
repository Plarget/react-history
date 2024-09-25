import type {THistoricalWheel} from "./types"
import {FC, useRef} from "react"
import NavigationArrow from "../../../../shared/ui/NavigationArrow";
import {gsap} from 'gsap'
import {useGSAP} from "@gsap/react";
import classNames from "classnames";
import "./HistoricalWheel.scss"

const HistoricalWheel: FC<THistoricalWheel> = (props) => {
  const {dates, activeDate, setActiveDate} = props

  const [firstDate, secondDate] = dates[activeDate - 1].date
  const wheel = useRef(null)
  const firstDateRef = useRef(null)
  const secondDateRef = useRef(null)
  const prevActiveDate = useRef(activeDate)

  useGSAP(
    () => {
      if (prevActiveDate.current !== activeDate) {
        const prevDate = prevActiveDate.current - 1
        const dateIndex = activeDate - 1
        let rotation
        for (let i = 1; i <= 3; i++) {
          if (dates.indexOf(dates.at((prevDate - i) % 6)!) === dateIndex) {

            rotation = 60 * i
          }
        }

        for (let i = 1; i <= 2; i++) {
          if (dates.indexOf(dates.at((prevDate + i) % 6)!) === dateIndex) {
            rotation = -60 * i
          }
        }

        const duration = 1

        gsap.to(wheel.current, {rotation: `+=${rotation}`, duration});
        gsap.to(".historical-wheel__button", {rotation: `-=${rotation}`, duration: duration / 5})
        const [prevFirstDate, prevSecondDate] = dates[prevDate].date
        gsap.from(firstDateRef.current, {
          textContent: prevFirstDate,
          duration,
          snap: { textContent: 1},
          stagger: 1,
        })
        gsap.from(secondDateRef.current, {
          textContent: prevSecondDate,
          duration,
          snap: { textContent: 1},
          stagger: 1,
        })
        prevActiveDate.current = activeDate
      }
    },
    {dependencies: [activeDate]}
  );


  return (
    <div className="historical-wheel">
      <div className="historical-wheel__body">
        <div className="historical-wheel__dates">
          <span className="historical-wheel__date historical-wheel__date--first" ref={firstDateRef}>
             {firstDate}
          </span>
          <span className="historical-wheel__date historical-wheel__date--second" ref={secondDateRef}>
            {secondDate}
          </span>
        </div>
        <div className="historical-wheel__wheel" ref={wheel}>
          {dates.map((date, index) => (
            <button
              className={classNames(`historical-wheel__button historical-wheel__button--${index}`,
                {"is-active": index + 1 === activeDate})}
              onClick={() => setActiveDate(index + 1)}
            >
              <h3
                className={classNames("historical-wheel__label text text--weight",
                  {"is-active": index + 1 === activeDate})}
              >
                {date.title}
              </h3>
              <div className="historical-wheel__button-active">
                <span className="historical-wheel__button-active-text text">{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <NavigationArrow
        className="historical-wheel__navigation"
        activeNumber={activeDate} setActiveNumber={setActiveDate}
        maxCount={dates.length}
      />
      <hr className="historical-wheel__line visible-mobile"/>
    </div>
  )
}

export default HistoricalWheel