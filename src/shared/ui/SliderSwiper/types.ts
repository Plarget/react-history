import type { PropsWithChildren } from "react"
import type { ReactNode } from "react"
import type {SwiperOptions} from "swiper/types/swiper-options"

export type TSliderSwiper = PropsWithChildren<SwiperOptions> & {
  slides: {id: string | number, element: ReactNode }[],
  className?: string
}
