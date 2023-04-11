import { Navigation, FreeMode, A11y } from 'swiper';
import { Wrapper } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import Avatar from '../avatar';

interface HeaderCardProps {
  badges: any[];
  setMethod: any;
}

const Carousel = ({ badges, setMethod }: HeaderCardProps) => (
  <Wrapper>
    <Swiper
      slideToClickedSlide
      modules={[Navigation, A11y, FreeMode]}
      slidesPerView={3}
      loop
      centeredSlides
      onSlideChange={(swiperCore) => {
        const { realIndex } = swiperCore;
        if (setMethod) setMethod(badges[realIndex].image);
      }}
    >
      {badges.map(({ name, image }, index) => (
        <SwiperSlide key={index}>
          {({ isActive, isPrev }) => <Avatar isActive={isActive} src={image} alt={name} />}
        </SwiperSlide>
      ))}
    </Swiper>
  </Wrapper>
);
export default Carousel;
