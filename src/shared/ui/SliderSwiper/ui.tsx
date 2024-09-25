import type { FC } from "react"
import type {TSliderSwiper} from "./types";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

const SliderSwiper: FC<TSliderSwiper> = (props) => {
  const {
    children,
    slides,
    ...rest
  } = props

  return (
    <Swiper {...rest}>
      {slides.map(({element, id}) => (
        <SwiperSlide key={id}>{element}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderSwiper