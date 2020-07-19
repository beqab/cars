import React, { Component } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";

class myStatements extends Component {
  state = {
    myStatements: [],
    hide: false,
    curenCardId: null,
    onfirmModal: false,
  };

  componentDidMount() {
    window.addEventListener("click", () => {
      this.setState({
        curenCardId: null,
      });
    });

    let token = Cookies.get("token");
    axios
      .get("statement/myall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({
          myStatements: res.data.reverse(),
        });
      });
  }

  editShowHide = () => {
    this.setState({
      hide: true,
    });
  };

  openConirmModal = (e = null, bool) => {
    if (e) e.preventDefault();

    this.setState({
      onfirmModal: bool,
    });
  };

  deleteStatement = async () => {
    try {
      await axios.post("statement/delete", {
        statementId: this.state.curenCardId,
      });

      console.log(
        this.state.myStatements.filter((el) => {
          console.log(el._id != this.state.curenCardId, this.state.curenCardId);
          return el._id != this.state.curenCardId;
        })
      );
      this.openConirmModal(null, false);
      this.setState((prev) => ({
        myStatements: prev.myStatements.filter((el) => {
          console.log(el._id != prev.curenCardId, prev.curenCardId);
          return el._id != prev.curenCardId;
        }),
      }));
      this.props.changeStaenmansSum("delete");
    } catch (err) {
      this.openConirmModal(null, false);
      console.log(err);
    }
  };

  render() {
    return (
      <div className="w-100">
        {this.state.onfirmModal && (
          <div onClick={(e) => e.stopPropagation()} className="confirmModal">
            <p>დარწმუნებული ხარ რო გინდა წაშლა?</p>
            <div className="d-flex mt-5 justify-content-around">
              <button onClick={this.deleteStatement} className="deleteBtn">
                წაშლა
              </button>
              <button onClick={(e) => this.openConirmModal(e, false)}>
                გაუქმება
              </button>
            </div>
          </div>
        )}

        <div className="our_statement_fluid">
          <div className="container">
            <div className="row">
              {this.state.myStatements.map((el) => {
                return (
                  <div className="col-12 col-md-4">
                    <div className="common_car_box">
                      <div className="vip">
                        <img src="/imgs/vip.png" alt="" />
                      </div>
                      <div className="common_box_img">
                        <Link href={`/statement/${el._id}`}>
                          <a>
                            <img
                              src={"https://app.gcar.ge/" + el.images[0]}
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="common_box_body">
                        <div>
                          <h2>
                            <a href="">
                              {el.producer} {el.carModel}
                            </a>
                          </h2>
                          <div className="car_common_properties">
                            {el.backVision ? (
                              <div>
                                <img src="/imgs/loc.png" />{" "}
                                <span>უკანა ხედვის კამერა </span>
                              </div>
                            ) : null}
                            {el.conditioner ? (
                              <div>
                                <img src="/imgs/loc.png" />{" "}
                                <span>კონდიციონერი </span>
                              </div>
                            ) : null}
                            {el.centralLock ? (
                              <div>
                                <img src="/imgs/loc.png" />{" "}
                                <span>ცენტრალური საკეტი </span>
                              </div>
                            ) : null}
                            {el.hidravlika ? (
                              <div>
                                <img src="/imgs/loc.png" />{" "}
                                <span>ჰიდრავლიკა საკეტი </span>
                              </div>
                            ) : null}
                            {el.parcingConttrol ? (
                              <div>
                                <img src="/imgs/loc.png" />{" "}
                                <span>პარკინგ კონტროლი </span>
                              </div>
                            ) : null}
                            {el.navigation ? (
                              <div>
                                <img src="/imgs/loc.png" />{" "}
                                <span>ნავიგაცია </span>
                              </div>
                            ) : null}

                            {el.signailzation ? (
                              <div>
                                <img src="/imgs/loc.png" />{" "}
                                <span>სიგნალიზაცია </span>
                              </div>
                            ) : null}

                            {el.bortComp ? (
                              <div>
                                <img src="/imgs/loc.png" />{" "}
                                <span>ბორტ-კომპიუტერი </span>
                              </div>
                            ) : null}

                            {el.luqi ? (
                              <div>
                                <img src="/imgs/loc.png" /> <span>ლუქი </span>
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="common_car_price_fluid">
                          <div className="common_car_footer">
                            <div className="common_car_price">
                              <span>{el.price}-₾</span>
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
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="common_box_footer"
                      >
                        <div className="period_days">
                          <span>25 მაისი</span>
                          <span>25 მაისი</span>
                        </div>
                        <div className="edit_box">
                          <span
                            onClick={() => {
                              this.setState({
                                curenCardId: el._id,
                              });
                            }}
                          >
                            <img src="/imgs/edit.png" alt="" />
                          </span>
                        </div>
                        {this.state.curenCardId === el._id ? (
                          <div className="delete_edit">
                            <a
                              onClick={(e) => this.openConirmModal(e, true)}
                              href=""
                            >
                              წაშლა
                            </a>
                            <a
                              onClick={(e) => {
                                e.preventDefault();

                                Router.push({
                                  pathname: "/profile/addStatement/",
                                  query: {
                                    id: el._id,
                                  },
                                });
                              }}
                            >
                              რედაქტირება
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// pushRoute = () => {
//   Router.push({
//     pathname: "/profile/addStatement/",
//     query: {
//       id: "123",
//     },
//   });
// };
export default myStatements;
