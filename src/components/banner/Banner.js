import React from 'react'

function Banner(props) {
        return (
        <div className="bground">
        <div className="grid wide">
          <div className="row">
            <div className="col l-5 m-8 c-10">
              <div className="content">
                <h1 className="title">{props.title}</h1>
                <p>{props.content}</p>
                <div className="button-bgr">
                  <p>{props.btn_bgr}</p>
                  <i className="bi bi-chevron-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
        )
    }
export default Banner;
