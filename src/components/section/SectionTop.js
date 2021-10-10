import React from 'react'

function SectionTop(props){
        return (
        <div className="section_top">
          <div className="grid wide">
            <div className="row">
              <div className="col l-4 m-6 c-12">
                <div className="section_top_left">
                  {props.content_left}
                </div>
              </div>
              <div className="col l-8 m-6 c-12">
                <div className="section_top_right">
                  {props.content_right}
                  <p>{props.content_right_bottom}</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
        
        )
    }
export default SectionTop;
