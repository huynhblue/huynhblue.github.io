import React from 'react'

function TopMenu(props) {
        return (   
        <header className="navbar">
        <div className="grid wide">
          <div className="row">
            <div className="col l-3 m-2 c-2">
              <div className="logo">
                <img src="./images/logo.png" alt="" />
              </div>
            </div>
            <div className="col l-6 m-8 c-8">
              <ul className="menu">
                <li><a href="#">{props.menu_1}</a></li>
                <li><a href="#">{props.menu_2}</a></li>
                <li><a href="#">{props.menu_3}</a></li>
                <li><a href="#">{props.menu_4}</a></li>
                <li><a href="#">{props.menu_5}</a></li>
                <li><a href="#">{props.menu_6}</a></li>
              </ul>
            </div>
            <div className="col l-3 m-2 c-2">
              <div className="login">
                <ul>
                  <li className="login_1"><a href="#">{props.login}</a></li>
                  <li className="login_2"><a href="#">{props.register}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
           
        )
    }
export default TopMenu;
