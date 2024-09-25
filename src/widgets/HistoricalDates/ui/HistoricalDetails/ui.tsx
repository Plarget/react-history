import type {THistoricalDetails} from "./types"
import type {FC} from "react"
import SliderSwiper from "../../../../shared/ui/SliderSwiper";
import HistoricalDetail from "./ui/HistoricalDetail";
import "./HistoricalDetails.scss"

const HistoricalDetails: FC<THistoricalDetails> = (props) => {
  const {
    details,
  } = props

  return (
    <div className="historical-details">
      <SliderSwiper
        slides={details.map((detail) => ({
          id: detail.id,
          element: <HistoricalDetail detail={detail} />,
        }))}
        breakpoints={{
          320: {
            slidesPerView: 1.5
          },
          480: {
            slidesPerView: 1.5
          },
          767: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 2.5
          },
          1280: {
            slidesPerView: 3
          }
        }}
      />
   </div>
  )
}

export default HistoricalDetails