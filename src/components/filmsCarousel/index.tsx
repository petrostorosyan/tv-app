import type { FC } from "react";
import "./styles.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

interface IFilmsCarouselData {
  id: number;
  title: string;
  coverImage: string;
}

interface FilmsCarouselProps {
  data: IFilmsCarouselData[];
  onChangeActiveId: (id: number) => void
}

const FilmsCarousel: FC<FilmsCarouselProps> = ({ data, onChangeActiveId }) => {
  return (
    <div className="film-carousel-container">
      <p className="trending-title">Trending Now</p>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide onClick={() => onChangeActiveId(item.id)} className="film-carousel-slide">
              <img className="film-carousel-image" src={item.coverImage} alt={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FilmsCarousel;
