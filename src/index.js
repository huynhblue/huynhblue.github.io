import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopMenu from './components/topmenu/TopMenu';
import Banner from './components/banner/Banner';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';

ReactDOM.render(
  <div>
    <TopMenu
      menu_1= "서비스 소개"
      menu_2="법적효력"
      menu_3="활용 분야"
      menu_4="이용 혜택"
      menu_5="요금 안내"
      menu_6="고객센터"
      login="로그인"
      register="회원가입"
    />
    <Banner
      title="가드시그니처로 온라인 계약 하세요."
      content="비즈니스 성공을 위한 첫 걸음을 가드 시그니처와 함께 시작하세요. 모든 계약을 쉽고 간단하게 처리할 수 있고, 온"
      btn_bgr="지금 확인하기"
    />
    <Section />
    <Footer />
  </div>,
  document.getElementById("root")
);

