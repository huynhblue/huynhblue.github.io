import React from 'react'

function SectionMid(props) {
        return (
        <div className="section_mid">
          <div className="grid wide">
            <div className="row">
              <div className="col l-12">
                <div className="section_mid_text">
                  <div className="text_top">{props.title}</div>
                  <div className="text_bottom">{props.content}</div>
                </div>  
              </div>
              <div className=" row section_mid_icon">
                <div className="col l-3 m-6 c-6">
                  <div className="icon_text">
                    <img src={props.icon_1} alt="" />
                    <p className="title">{props.title_icon}</p>
                    <p>{props.content_icon}</p>
                  </div>
                </div>
                <div className="col l-3 m-6 c-6">
                  <div className="icon_text">
                    <img src={props.icon_2} alt="" />
                    <p className="title">{props.title_icon}</p>
                    <p>{props.content_icon}</p>
                  </div>
                </div>
                <div className="col l-3 m-6 c-6">
                  <div className="icon_text">
                    <img src={props.icon_3} alt="" />
                    <p className="title">{props.title_icon}</p>
                    <p>{props.content_icon}</p>
                  </div>
                </div>
                <div className="col l-3 m-6 c-6">
                  <div className="icon_text">
                    <img className="img_4" src={props.icon_4} alt="" />
                    <p className="title">{props.title_icon}</p>
                    <p>{props.content_icon}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
export default SectionMid;
