import type {TNavigationArrow} from "./types"
import type {FC} from "react"
import classNames from "classnames";
import "./NavigationArrow.scss"

const NavigationArrow: FC<TNavigationArrow> = (props) => {
  const {
    maxCount,
    activeNumber,
    setActiveNumber,
    className,
  } = props

  const textNavigation = `0${activeNumber}/0${maxCount}`

  return (
    <div className={classNames(className, "navigation-arrow")}>
      <div className="navigation-arrow__text">
        {textNavigation}
      </div>
      <div className="navigation-arrow__actions">
        <button
          className={classNames("navigation-arrow__button navigation-arrow__button--prev", {
            "is-active": activeNumber !== 1
          })}
          onClick={() => setActiveNumber(Math.max(activeNumber - 1, 1))}
        >
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2"/>
          </svg>
        </button>
        <button
          className={classNames("navigation-arrow__button navigation-arrow__button--next", {
            "is-active": activeNumber !== maxCount
          })}
          onClick={() => setActiveNumber(Math.min(activeNumber + 1, maxCount))}
        >
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NavigationArrow