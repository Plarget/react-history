import type { THistoricalDetail } from "./types"
import type { FC } from "react"
import "./HistoricalDetail.scss"

const HistoricalDetail: FC<THistoricalDetail> = (props) => {
  const {
    detail: {
      info,
      date,
    },
  } = props

  return (
    <article className="historical-detail">
      <time className="historical-detail__year label" dateTime={`${date}`}>{date}</time>
      <div className="historical-detail__text text">
        {info}
      </div>
    </article>
  )
}

export default HistoricalDetail