import React, { Component } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";

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
                              src="https://images.unsplash.com/photo-1505592225030-dad7a0531844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="common_box_body">
                        <div>
                          <h2>
                            <a href="">
                              {" "}
                              {el.producer} {el.carModel}
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
                            <span>{el.price}</span>
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
                            <a href="">რედაქტირება</a>
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

export default myStatements;
