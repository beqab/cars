import React, { useMemo } from "react";
import Link from "next/link";
import Moment from "react-moment";
import { connect } from "react-redux";

const Card = ({
  data: {
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
    carModel,
    images,
    creationDate,
    _id,
    producer,
    userName,
    location,
    phone,
    Creat,
  },
}) => {
  const getEditionData = useMemo(() => {
    const detailInfoArray = [];

    if (withDriver && withDriver !== "null") {
      detailInfoArray.push({ name: "მძღოლით", img: null });
    }

    if (oilType && oilType !== "null") {
      detailInfoArray.push({ name: oilType, img: "/imgs/icons-13.svg" });
    }

    if (engin && engin !== "null") {
      detailInfoArray.push({
        name: Number(engin) / 1000,
        img: "/imgs/icons-04.svg",
      });
    }

    if (doors && doors !== "null") {
      detailInfoArray.push({ name: doors, img: "/imgs/icons-19.svg" });
    }

    if (Pessengers && Pessengers !== "null") {
      detailInfoArray.push({ name: Pessengers, img: "/imgs/icons-06.svg" });
    }

    if (navigation && navigation !== "null") {
      detailInfoArray.push({ name: "ნავიგაცია", img: null });
    }

    if (insured && insured !== "null") {
      detailInfoArray.push({
        name: "დაზღვეული",
        img: "/imgs/icons-07.svg",
      });
    }
    if (gearbox && gearbox !== "null") {
      detailInfoArray.push({ name: gearbox, img: "/imgs/loc.png" });
    }
    if (wheels && wheels !== "null") {
      detailInfoArray.push({ name: wheels, img: "/imgs/loc.png" });
    }
    if (conditioner && conditioner !== "null") {
      detailInfoArray.push({
        name: "კონდიციიონერი",
        img: "/imgs/icons-20.svg",
      });
    }

    if (bortComp && bortComp !== "null") {
      detailInfoArray.push({ name: "ბორტ-კომპიუტერი", img: null });
    }
    if (parcingConttrol && parcingConttrol !== "null") {
      detailInfoArray.push({ name: "პარკინგ კონტროლი", img: null });
    }

    return detailInfoArray;
  }, []);

  return (
    <div className="common_car_box">
      {/* <div className="vip">
        <img src="/imgs/vip.png" alt="" />
      </div> */}
      <div className="common_box_img">
        <Link href={`/statement/${_id}`}>
          <a>
            <img src={images[0]} alt="" />
          </a>
        </Link>
      </div>
      <div className="common_box_body">
        <div>
          <h2>
            <a href="">
              {producer} {carModel}
            </a>
          </h2>
          <div className="car_common_properties">
            {getEditionData.map((el, i) => {
              if (i < 8)
                return (
                  <div>
                    {el.img && (
                      <img style={{ maxHeight: "13px" }} src={el.img} />
                    )}{" "}
                    <span>{el.name} </span>
                  </div>
                );
            })}
          </div>
          <div className="d-flex cardContactInfo ">
            <div>
              {userName} {phone && phone !== "undefined" ? phone : ""}
            </div>
            <div>{location}</div>
          </div>
        </div>
        <div className="common_car_price_fluid">
          <div className="common_car_footer">
            <span>
              დღიურად
              <div>
                {creationDate && (
                  <Moment format="YYYY.MM.DD ">{new Date(creationDate)}</Moment>
                )}
              </div>
            </span>
            <div className="common_car_price">
              <span>{`${price} ₾`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateProps = (state) => ({ state });

export default connect(mapStateProps, null)(Card);
