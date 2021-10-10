import React, { Component } from 'react'
import SectionTop from './SectionTop'
import SectionMid from './SectionMid'
import SectionSlider from './SectionSlider'
import SectionMid2 from './SectionMid2'
import SectionBlue from './SectionBlue'
import SectionMid3 from './SectionMid3'
import SectionBrand from './SectionBrand'
import SectionFinal from './SectionFinal'

export default class Section extends Component {
    render() {
        return (   
        <section>
        <SectionTop 
          content_left="Easy and quick"
          content_right="가드 시그니처에서는 복잡한 절차를 거치지 않고 수월하게 계약을 진행할 수 있습니다. 준비해둔 계약 문서를 곧바로 업로드하고,
          서명을 요청하세요. 상대방도 별도의 회원가입이나 복잡한 인증 과정없이 서명이 가능합니다.
          계약이 진행되는 모든 과정을 효과적으로 체크할 수 있고, 언제 어디서든 5분이면 계약이 완료됩니다."
          content_right_bottom="가드 시그니처와 함께 빠르고 신속하게 상대방과의 계약을 체결하고 관리하세요."
        />
        <SectionMid 
          title ="5분 만에 끝내는 계약 업무"
          content ="계약서 파일을 업로드하여 서명을 요청해 보세요.
          상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다.
          언제 어디서든 5분만에 계약을 체결해 보세요."
          icon_1="/images/icon_1.jpg"
          icon_2="/images/icon_2.jpg"
          icon_3="/images/icon_3.jpg"
          icon_4="/images/icon_4.jpg"
          title_icon="업로드하기"
          content_icon="필요한 계약서 파일을 파일을 파일을 업로드합니다."
          
        />
        <SectionSlider 
          title="짧고 간단한 절차 지금 직접 확인해보세요"
          img_1="./images/slide_1.png"
          img_2="./images/slide_2.jpg"
          img_3="./images/slide_3.png"
        />

        <SectionMid2 />

        <SectionBlue />

        <SectionMid3 />

        <SectionBrand />

        <SectionFinal />
        
      </section>
            
        )
    }
}
