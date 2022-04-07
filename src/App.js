import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./styles.css";
import SwiperCore, {EffectCoverflow, Pagination} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

export default function App() {
  const news = [
    {
      title: "LOKAPALA MINOR LEAGUES",
      category: "Events",
      updates: "FEB 22",
      date: "12/15/2021",
      image: "images/heroes.png",
    },
    {
      title: "LOKAPALA MINOR LEAGUES",
      category: "Events",
      updates: "MAR 22",
      date: "12/15/2021",
      image: "images/heroes.png",
    },
    {
      title: "LOKAPALA MINOR LEAGUES",
      category: "Events",
      updates: "APR 22",
      date: "12/15/2021",
      image: "images/heroes.png",
    },
    {
      title: "LOKAPALA MINOR LEAGUES",
      category: "Events",
      updates: "MEI 22",
      date: "12/15/2021",
      image: "images/heroes.png",
    },
    {
      title: "LOKAPALA MINOR LEAGUES",
      category: "Events",
      updates: "JUN 22",
      date: "12/15/2021",
      image: "images/heroes.png",
    },
    {
      title: "LOKAPALA MINOR LEAGUES",
      category: "Events",
      updates: "AUG 22",
      date: "12/15/2021",
      image: "images/heroes.png",
    },
    {
      title: "LOKAPALA MINOR LEAGUES",
      category: "Events",
      updates: "SEP 22",
      date: "12/15/2021",
      image: "images/heroes.png",
    },
  ];
  return (
    <Swiper
      centeredSlides={false}
      slidesPerView={3}
      spaceBetween={0}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      className="mySwiper"
    >
      {news.map((x, i) => (
        <SwiperSlide key={i}>
          <div className="card">
            <img src={x.image} alt="" />
            <div className="card_content">
              <div className="content">
                <span className="date">{x.date}</span>
                <span className="category">{x.category}</span>
                <h4 className="title">{x.title}</h4>
                <h4 className="updates">UPDATES {x.updates}</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div class="swiper-pagination"></div>
    </Swiper>
  );
}
