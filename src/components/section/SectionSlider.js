import React from 'react'

function SectionSlider(props){
        return (
        <div className="section_slider">
            <div className="grid wide">
                <div className="row">
                    <div className="title">{props.title}</div>
                </div>
            </div>
          <div className="grid slider_container">
            <div className="slider_img slider_img_left ">
              <img className="slider_1" src={props.img_1} alt="" />
            </div>
            <div className="arrow_left">
              <i className="bi bi-chevron-left" />
            </div>
            <div className="slider_img slider_ipad slider_img_mid">
              <img className="slider_2" src={props.img_2} alt="" />
              <div className="btn_ipad" />
            </div>
            <div className="arrow_right">
              <i className="bi bi-chevron-right" />
            </div>
            <div className="slider_img slider_img_right">
              <img className="slider_3" src={props.img_3} alt="" />
            </div>
          </div>
          <div className="btn_slider">
            <div className="btn_circle">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
            </div>
            <div className="btn_slider_bottom">
              <p>전자계약 체험하기</p>
              <i className="bi bi-chevron-right" />
            </div>
          </div>
        </div>
        )
    }
export default SectionSlider;