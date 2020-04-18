import React, { Component } from "react";
import Cookies from "js-cookie";
import axios from "axios";

class myStatements extends Component {
  state = {
    myStatements: [],
    hide: false,
  };

  componentDidMount() {
    window.onClick = this.setState({
      // hide: true,
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
          myStatements: res.data,
        });
      });
  }

  editShowHide = () => {
    this.setState({
      hide: true,
    });
  };

  render() {
    var editBox;
    if (this.state.hide) {
      editBox = (
        <div className="delete_edit">
          <a href="">წაშლა</a>
          <a href="">რედაქტირება</a>
        </div>
      );
    }
    return (
      <div className="w-100">
        <div className="our_statement_fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
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
                        <a href=""> MERCEDES E360</a>
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
                        <span>20ლ</span>
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
                  <div className="common_box_footer">
                    <div className="period_days">
                      <span>25 მაისი</span>
                      <span>25 მაისი</span>
                    </div>
                    <div className="edit_box">
                      <span onClick={this.editShowHide}>
                        <img src="/imgs/edit.png" alt="" />
                      </span>
                    </div>
                    {editBox}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.myStatements.map((el) => {
          return <h1>my stamant</h1>;
        })}
      </div>
    );
  }
}

export default myStatements;
