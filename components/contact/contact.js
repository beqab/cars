import React, { Component } from "react";

class contact extends Component {
  state = {};

  render() {
    return (
      <div className="contact_box">
        <div className="letter_fluid">
          <div className="about_fluid">
            <div className="about_box">
              <div className="common_title">
                <h3>ჩვენს შესახებ</h3>
              </div>
              <div className="about_text">
                <p>
                  Gcar.ge წარმოადგენს მანქანათა გაქირავების საიტს, რომელიც
                  სრულად მორგებულია მომხმარებელთა ინტერესებსა და სურვილებზე.
                  მოცემულ საიტზე, ერთი მხრივ, თქვენ შეგიძლიათ ატვირთოთ თქვენს
                  საკუთრებაში არსებული მანქანების ფოტოები, რომელთა გაქირავებაც
                  გსურთ და მიუთითოთ ყველა ის მნიშვნელოვანი პარამეტრი,რაც
                  საყურადღებოა იცოდეს მომხმარებელმა, რათა შეჯერდეს თქვენს
                  შემოთავაზებაზე. მეორე მხრივ, თქვენ შეგიძლიათ საიტზე არსებული
                  კონტენტიდან აირჩიოთ სასურველი მანქანა, რომელიც შეესაბამება
                  თქვენს მოთხოვნებს და თქვენს მიერ არჩეული დღეების განმავლობაში
                  გახდეთ მისი მფლობელი.
                </p>
                <p>
                  ჩვენ ვცდილობთ, ჩვენს საიტზე მარტივად და დროის მცირე მონაკვეთში
                  შეძლოთ ნებისმიერი ტიპის მანქანის გაქირავება ან ქირაობა.
                  პასუხისმგებლიანი გუნდი პროცედურათა განხორციელებისას დახმარებას
                  გაგიწევთ ნებისმიერ კითხვასთან დაკავშირებით. ორივე მხარის
                  უფლებები და ვალდებულებები იქნება დაცული.
                </p>
              </div>
            </div>
          </div>
          {/* <h2>მოგვწერეთ წერილი</h2>
          <form>
            <textarea placeholder="მოგვწერეთ..."></textarea>
            <button>გაგზავნა</button>
          </form> */}
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
                <a href="tel:579 29 66 56">579 29 66 56</a>
              </div>
              <div class="contact_label">
                <label>
                  <img src="/imgs/ma.png" />
                </label>
                <span> infogcar@gmail.com</span>
              </div>

              <div class="contact_socials">
                <a
                  href="https://www.facebook.com/Gcarge-105939904792665"
                  target="_blank"
                >
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
