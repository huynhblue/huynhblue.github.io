import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
            <div className="footer_content">
              <div className="grid wide">
                <div className="row">
                  <div className="col l-8 m-8 c-8">
                    <div className="footer_left">
                      <div className="list_item">
                        <div className="head_title">
                          <div className>이용약관</div>
                          <div className="head_title_item">개인정보처리방침</div>
                          <div className>고객센터</div>
                        </div>
                        <div className="mid_title">
                          <p>(주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000</p>
                          <p>이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000</p>
                          <p>서울특별시 강남구 도산대로 8길 17 2층</p>   
                        </div>
                        <div className="end_title">
                          Copyright© GUARDSIGNATURE All rights reserved.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col l-4 m-4 c-4">
                      <div className="footer_right_container row">
                        <div className="footer_right">
                        <div className="list_item">
                            <img src="/images/icon_ft_1.png" alt="" />
                            <img className="list_item_mid" src="/images/icon_ft_2.png" alt="" />
                            <img src="/images/icon_ft_3.png" alt="" />
                        </div>
                        </div>
                      </div>
                  </div>
                </div>              
              </div>        
            </div>
          </footer>
        )
    }
}
