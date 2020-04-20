import React, { Component } from "react";
import Link from "next/link";
class HomeCar extends Component {
  render() {
    return (
      <div className="home-car_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="common_car_box">
                <div className="vip">
                  <img src="/imgs/vip.png" alt="" />
                </div>
                <div className="common_box_img">
                  <a href="">
                    <img
                      src="https://images.unsplash.com/photo-1505592225030-dad7a0531844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="common_box_body">
                  <div>
                    <h2>
                      <a href="">
                        {/* {el.producer} {el.carModel} */}
                        BMW
                      </a>
                    </h2>
                    <div className="car_common_properties">
                      <div>
                        <img src="/imgs/loc.png" /> <span>A</span>
                      </div>
                      <div>
                        <img src="/imgs/loc.png" /> <span>5</span>
                      </div>
                      <div>
                        <img src="/imgs/loc.png" /> <span>მარჯვენა</span>
                      </div>
                      <div>
                        <img src="/imgs/loc.png" /> <span>დიზელი</span>
                      </div>
                    </div>
                  </div>
                  <div className="common_car_price_fluid">
                    <div className="common_car_price">
                      <span>33</span>
                    </div>
                    <div className="common_car_days">
                      <div className="common_car_up">
                        <span>დ</span>
                        <span>1-3</span>
                        <span>4-7</span>
                        <span>>7</span>
                      </div>
                      <div className="common_car_down">
                        <span>ლ</span>
                        <span>50</span>
                        <span>50</span>
                        <span>80</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="common_car_box">
                <div className="vip">
                  <img src="/imgs/vip.png" alt="" />
                </div>
                <div className="common_box_img">
                  <a>
                    <img
                      src="https://images.unsplash.com/photo-1505592225030-dad7a0531844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="common_box_body">
                  <div>
                    <h2>
                      <a href="">
                        {/* {el.producer} {el.carModel} */}
                        BMW
                      </a>
                    </h2>
                    <div className="car_common_properties">
                      <div>
                        <img src="/imgs/loc.png" /> <span>A</span>
                      </div>
                      <div>
                        <img src="/imgs/loc.png" /> <span>5</span>
                      </div>
                      <div>
                        <img src="/imgs/loc.png" /> <span>მარჯვენა</span>
                      </div>
                      <div>
                        <img src="/imgs/loc.png" /> <span>დიზელი</span>
                      </div>
                    </div>
                  </div>
                  <div className="common_car_price_fluid">
                    <div className="common_car_price">
                      <span>33</span>
                    </div>
                    <div className="common_car_days">
                      <div className="common_car_up">
                        <span>დ</span>
                        <span>1-3</span>
                        <span>4-7</span>
                        <span>>7</span>
                      </div>
                      <div className="common_car_down">
                        <span>ლ</span>
                        <span>50</span>
                        <span>50</span>
                        <span>80</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 see_more_col">
              <a href="">იხილეთ სრულად</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCar;
