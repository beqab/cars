import React, { Component } from "react";

class contact extends Component {
  state = {};

  render() {
    return (
      <div className="contact_box">
        <div className="letter_fluid">
          <h2>მოგვწერეთ წერილი</h2>
          <form>
            <textarea placeholder="მოგვწერეთ..."></textarea>
            <button>გაგზავნა</button>
          </form>
        </div>
        <div className="contact_us_fluid">
          <div class="contact_info_box">
            <div class="contact_info_title">
              <span>საკონტაქტო ინფორმაცია</span>
            </div>
            <div class="contact_info">
              <div class="contact_label">
                <label>
                  <img src="/imgs/phone.png" />
                </label>
                <a href="tel:555 23 32 32">579 29 66 56</a>
              </div>
              <div class="contact_label">
                <label>
                  <img src="/imgs/ma.png" />
                </label>
                <span> infogcar@gmail.com</span>
              </div>

              <div class="contact_socials">
                <a href="https://www.facebook.com/Gcarge-105939904792665" target="_blank">
                  <img src="/imgs/facebook.png" />
                  <span>Contact Us On Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
