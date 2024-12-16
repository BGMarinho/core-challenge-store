import styled from 'styled-components';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const MainShelfWrapper = styled.main`
  grid-area: Main;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #000000;
  gap: 0.5rem;
`;

export default function MainShelf() {
  return (
    <MainShelfWrapper>
      <h2>Mais Vendidos</h2>
      {/* <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
    </MainShelfWrapper>
  );
}
