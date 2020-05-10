import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import axios from "axios";
import Cookies from "js-cookie";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class carrInnerFluid extends Component {
  state = {
    curentStatement: null,
    images: null,
  };

  componentDidMount() {
    let token = Cookies.get("token");
    axios
      .get("statement/", {
        params: { statementId: this.props.id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        this.setState(
          {
            curentStatement: res.data,

            images: res.data.images.map((el, index) => {
              var link = "http://167.172.109.81:5001/";
              return { original: link + el, thumbnail: link + el };
            }),
          },
          () => {
            // console.log(this.state);
          }
        );
      });
  }

  render() {
    let carInfo;

    if (this.state.curentStatement) {
      carInfo = (
        <div className="carrinner_fluid">
          <div className="carrinner_wrapper">
            <div className="carosel_wrapper">
              <div className="carr_iner_carousel">
                <ImageGallery
                  showPlayButton={false}
                  items={this.state.images}
                />

                <div className="main_carousel_bottom_info">
                  <div className="common_car_price_fluid">
                    <div className="car_title">
                      {this.state.curentStatement.producer &&
                      this.state.curentStatement.carModel ? (
                        <h2>
                          {this.state.curentStatement.producer} -{" "}
                          {this.state.curentStatement.carModel}
                        </h2>
                      ) : (
                        {}
                      )}
                    </div>
                    <div className="common_car_footer">
                      <div className="common_car_price">
                        {this.state.curentStatement.price ? (
                          <span>{this.state.curentStatement.price}₾</span>
                        ) : (
                          {}
                        )}
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

              <div className="carosel_right_info"></div>
            </div>
            <div className="right_inf_wrapper">
              <div className="contact_info_box">
                <div className="contact_info_title">
                  <span>საკონტაქტო ინფორმაცია</span>
                </div>
                <div className="contact_info">
                  {this.state.curentStatement.user.name ? (
                    <div className="contact_label">
                      <label>
                        <img src="/imgs/pp.png" />
                      </label>
                      <span>{this.state.curentStatement.user.name}</span>
                    </div>
                  ) : (
                    {}
                  )}
                  {this.state.curentStatement.phone ? (
                    <div className="contact_label">
                      <label>
                        <img src="/imgs/phone.png" />
                      </label>
                      <a href="tel:555 23 32 32">
                        {this.state.curentStatement.phone}
                      </a>
                    </div>
                  ) : (
                    {}
                  )}

                  <div className="contact_label">
                    <label>
                      <img src="/imgs/ma.png" />
                    </label>
                    <span> {this.state.curentStatement.user.email}</span>
                  </div>

                  {this.state.curentStatement.address ? (
                    <div className="contact_label">
                      <label>
                        <img src="/imgs/loc.png" />
                      </label>
                      <span>{this.state.curentStatement.address}</span>
                    </div>
                  ) : (
                    {}
                  )}

                  <div className="contact_socials">
                    <a href="" target="_blank">
                      <img src="/imgs/facebook.png" />
                    </a>
                    <a href="" target="_blank">
                      <img src="/imgs/viber.png" />
                    </a>
                  </div>
                </div>
              </div>

              {this.state.curentStatement.withDriver ? (
                <div className="main_inf driver_inf">
                  <div>
                    <img src="/imgs/driver.png" alt="" />
                  </div>
                  <span>მძღოლით</span>
                </div>
              ) : (
                <div className="main_inf driver_inf">
                  <div className="no_driver">
                    <img src="/imgs/driver.png" alt="" />
                  </div>
                  <span>მძღოლის გარეშე</span>
                </div>
              )}
              {this.state.curentStatement.insured ? (
                <div className="main_inf insured">
                  <span>დაზღვეულია!</span>
                </div>
              ) : (
                <div className="main_inf insured">
                  <span>დაზღვეული არ არის!</span>
                </div>
              )}
              {this.state.curentStatement.finalPurchase ? (
                <div className="main_inf">
                  <span>საბოლოო შესყიდვით!</span>
                </div>
              ) : (
                <div className="main_inf">
                  <span>საბოლოოს შესყიდვის გარეშე</span>
                </div>
              )}
            </div>
          </div>

          <div className="car_list_wrapper">
            <div className="car_list_title">
              <span>ძირითადი მონაცემები</span>
            </div>

            <div className="car_list_box">
              <ul>
                {this.state.curentStatement.engin ? (
                  <li>
                    <span>
                      <img src="/imgs/Untitled-1gh.png"></img>

                      <span>ძრავის მოცულობა</span>
                    </span>
                    <span>{this.state.curentStatement.engin}</span>
                  </li>
                ) : (
                  {}
                )}

                {this.state.curentStatement.carAge ? (
                  <li>
                    <span>
                      <img src="/imgs/Untitled-1gh.png"></img>

                      <span>გამოშვების წელი</span>
                    </span>
                    <span>{this.state.curentStatement.carAge}</span>
                  </li>
                ) : (
                  {}
                )}
                {this.state.curentStatement.category ? (
                  <li>
                    <span>
                      <img src="/imgs/Untitled-1gh.png"></img>

                      <span>კატეგორია</span>
                    </span>
                    <span>{this.state.curentStatement.category}</span>
                  </li>
                ) : (
                  {}
                )}

                {this.state.curentStatement.doors ? (
                  <li>
                    <span>
                      <img src="/imgs/Untitled-1gh.png"></img>

                      <span>კარის რაოდენობა</span>
                    </span>
                    <span>{this.state.curentStatement.doors}</span>
                  </li>
                ) : (
                  {}
                )}
              </ul>
            </div>
          </div>

          <div className="car_list_wrapper no_border">
            <div className="car_list_title">
              <span>დამატებითი ინფორმაცია</span>
            </div>

            <div className="car_list_box">
              <ul>
                <li>
                  <span>მოცურების საწინააღმდეგო</span>
                  <span className="checkminus_span">
                    {this.state.curentStatement.antiMocureb ? (
                      <img src="/imgs/check.png" alt="" />
                    ) : (
                      <img src="/imgs/minus.png" alt="" />
                    )}
                  </span>
                </li>

                <li>
                  <span>ბორტ-კომპიუტერი</span>
                  <span className="checkminus_span">
                    {this.state.curentStatement.bortComp ? (
                      <img src="/imgs/check.png" alt="" />
                    ) : (
                      <img src="/imgs/minus.png" alt="" />
                    )}
                  </span>
                </li>
                <li>
                  <span>უკანა ხედვის კამერა</span>
                  <span className="checkminus_span">
                    {this.state.curentStatement.backVision ? (
                      <img src="/imgs/check.png" alt="" />
                    ) : (
                      <img src="/imgs/minus.png" alt="" />
                    )}
                  </span>
                </li>

                <li>
                  <span>ცენტრალური საკეტი</span>
                  <span className="checkminus_span">
                    {this.state.curentStatement.centralLock ? (
                      <img src="/imgs/check.png" alt="" />
                    ) : (
                      <img src="/imgs/minus.png" alt="" />
                    )}
                  </span>
                </li>

                <li>
                  <span>კონდიციიონერი</span>
                  <span className="checkminus_span">
                    {this.state.curentStatement.conditioner ? (
                      <img src="/imgs/check.png" alt="" />
                    ) : (
                      <img src="/imgs/minus.png" alt="" />
                    )}
                  </span>
                </li>

                <li>
                  <span>ჰიდრავლიკა</span>
                  <span className="checkminus_span">
                    {this.state.curentStatement.hidravlika ? (
                      <img src="/imgs/check.png" alt="" />
                    ) : (
                      <img src="/imgs/minus.png" alt="" />
                    )}
                  </span>
                </li>
                <li>
                  <span>ლუქი</span>
                  <span className="checkminus_span">
                    {this.state.curentStatement.luqi ? (
                      <img src="/imgs/check.png" alt="" />
                    ) : (
                      <img src="/imgs/minus.png" alt="" />
                    )}
                  </span>
                </li>
                <li>
                  <span>ნავიგაცია</span>
                  <span className="checkminus_span">
                    {this.state.curentStatement.navigation ? (
                      <img src="/imgs/check.png" alt="" />
                    ) : (
                      <img src="/imgs/minus.png" alt="" />
                    )}
                  </span>
                </li>
                <li>
                  <span>პარკინგ-კონტროლი</span>
                  <span className="checkminus_span">
                    {this.state.curentStatement.parcingConttrol ? (
                      <img src="/imgs/check.png" alt="" />
                    ) : (
                      <img src="/imgs/minus.png" alt="" />
                    )}
                  </span>
                </li>

                <li>
                  <span>სიგნალიზაცია</span>
                  <span className="checkminus_span">
                    {this.state.curentStatement.signailzation ? (
                      <img src="/imgs/check.png" alt="" />
                    ) : (
                      <img src="/imgs/minus.png" alt="" />
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {this.state.curentStatement.text ? (
            <div className="common_about">
              <div className="common_about_title">
                <h3>ზოგადი აღწერა</h3>
              </div>
              <div className="common_about_text">
                <p>{this.state.curentStatement.text}</p>
              </div>
            </div>
          ) : (
            {}
          )}
        </div>
      );
    } else {
      carInfo = null;
    }

    return carInfo;
  }
}

export default carrInnerFluid;
