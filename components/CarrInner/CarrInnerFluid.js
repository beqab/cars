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
        this.setState({
          curentStatement: res.data,
        });
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
                <ImageGallery showPlayButton={false} items={images} />

                <div className="main_carousel_bottom_info">
                  <div className="common_car_price_fluid">
                    <div className="common_car_price">
                      {this.state.curentStatement.price ? (
                        <span>{this.state.curentStatement.price}</span>
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

              <div className="carosel_right_info">
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
                  </ul>
                </div>
              </div>
            </div>

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

                <div className="contact_label">
                  <label>
                    <img src="/imgs/phone.png" />
                  </label>
                  <a href="tel:555 23 32 32">555 23 32 32</a>
                </div>

                <div className="contact_label">
                  <label>
                    <img src="/imgs/ma.png" />
                  </label>
                  <span> {this.state.curentStatement.user.email}</span>
                </div>

                {this.state.curentStatement.location ? (
                  <div className="contact_label">
                    <label>
                      <img src="/imgs/loc.png" />
                    </label>
                    <span>{this.state.curentStatement.location}</span>
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
