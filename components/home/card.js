import React, { Component } from "react";
import Link from "next/link";

class Card extends Component {
  render() {
    const {
      price,
      engin,
      oilType,
      Pessengers,
      wheels,
      doors,
      carAge,
      gearbox,
      conditioner,
      navigation,
      signailzation,
      bortComp,
      parcingConttrol,
      insured,
      withDriver,
    } = this.props.data;
    // const { price, _id } = this.props.data;

    const detailInfoArray = [];

    oilType &&
      detailInfoArray.push({ name: oilType, img: "/imgs/Untitled-1gh.png" });

    Pessengers &&
      detailInfoArray.push({ name: Pessengers, img: "/imgs/loc.png" });

    doors && detailInfoArray.push({ name: doors, img: "/imgs/ffff.png" });

    navigation && detailInfoArray.push({ name: "ნავიგაცია", img: null });

    gearbox && detailInfoArray.push({ name: gearbox, img: "/imgs/loc.png" });

    wheels && detailInfoArray.push({ name: wheels, img: "/imgs/loc.png" });

    conditioner && detailInfoArray.push({ name: "კონდიციიონერი", img: null });

    wheels && detailInfoArray.push({ name: wheels, img: "/imgs/loc.png" });
    return (
      <div className="common_car_box">
        <div className="vip">
          <img src="/imgs/vip.png" alt="" />
        </div>
        <div className="common_box_img">
          <Link href={`/statement/${this.props.data._id}`}>
            <a>
              <img
                src={"https://app.gcar.ge/" + this.props.data.images[0]}
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="common_box_body">
          <div>
            <h2>
              <a href="">
                {this.props.data.producer} {this.props.data.carModel}
              </a>
            </h2>
            <div className="car_common_properties">
              {/* {this.props.data.backVision ? (
                <div>
                  <img src="/imgs/loc.png" /> <span>უკანა ხედვის კამერა </span>
                </div>
              ) : null} */}
              {detailInfoArray.map((el, i) => {
                return (
                  <div>
                    {el.img && <img src={el.img} />} <span>{el.name} </span>
                  </div>
                );
              })}
              {/* {this.props.data.conditioner ? (
                <div>
                  <img src="/imgs/loc.png" /> <span>კონდიციონერი </span>
                </div>
              ) : null} */}
              {/* {this.props.data.centralLock ? (
                <div>
                  <img src="/imgs/loc.png" /> <span>ცენტრალური საკეტი </span>
                </div>
              ) : null} */}

              {/* {this.props.data.hidravlika ? (
                <div>
                  <img src="/imgs/loc.png" /> <span>ჰიდრავლიკა </span>
                </div>
              ) : null} */}

              {/* {this.props.data.parcingConttrol ? (
                <div>
                  <img src="/imgs/loc.png" /> <span>პარკინგ კონტროლი </span>
                </div>
              ) : null} */}

              {/* {this.props.data.navigation ? (
                <div>
                  <img src="/imgs/loc.png" /> <span>ნავიგაცია </span>
                </div>
              ) : null} */}

              {/* {this.props.data.signailzation ? (
                <div>
                  <img src="/imgs/loc.png" /> <span>სიგნალიზაცია </span>
                </div>
              ) : null} */}
              {/* 
              {this.props.data.bortComp ? (
                <div>
                  <img src="/imgs/loc.png" /> <span>ბორტ-კომპიუტერი </span>
                </div>
              ) : null} */}

              {/* {this.props.data.luqi ? (
                <div>
                  <img src="/imgs/loc.png" /> <span>ლუქი </span>
                </div>
              ) : null} */}
            </div>
          </div>
          <div className="common_car_price_fluid">
            <div className="common_car_footer">
              <span>დღიურად</span>
              <div className="common_car_price">
                <span>{`${price} ₾`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
