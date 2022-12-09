import React from "react";
import classes from "./assistance.module.css";
import assistance1 from "../../public/assets/assistance/assistance1.svg";
import assistance2 from "../../public/assets/assistance/assistance2.svg";
import assistance3 from "../../public/assets/assistance/assistance3.svg";
import map_img from "../../public/assets/homescreen/map_img.png";
import client_pic from "../../public/assets/homescreen/client_pic.png";
import user1 from "../../public/assets/homescreen/user1.png";
import user2 from "../../public/assets/homescreen/user2.png";
import user3 from "../../public/assets/homescreen/user3.png";
import user4 from "../../public/assets/homescreen/user4.png";
function Assistance() {
  return (
    <div className={classes.container}>
      <div className={classes.first_section}>
        <h2>
          Rentto <span className={classes.black_text}>Assistance</span>
        </h2>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className={classes.cards_container}>
          <div className={classes.card_body}>
            <h3 className={classes.card_heading}>
              Let <span className={classes.orange_text}>Rentto</span> List Your
              Property
            </h3>
            <img src={assistance1.src} />
            <p className={classes.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <p className={classes.learn_more}>Learn More</p>
          </div>
          <div className={classes.card_body}>
            <h3 className={classes.card_heading}>Watch Video Tutorials</h3>
            <img src={assistance2.src} />
            <p className={classes.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <p className={classes.learn_more}>Learn More</p>
          </div>
          <div className={classes.card_body}>
            <h3 className={classes.card_heading}>
              Contact <span className={classes.orange_text}>Rentto </span>
              Helpline
            </h3>
            <img src={assistance3.src} />
            <p className={classes.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <p className={classes.learn_more}>Learn More</p>
          </div>
        </div>
      </div>

      <div className={classes.properties_section}>
        <div className={classes.properties_content}>
          <h2>
            Clients feedback using{" "}
            <span className={classes.orange_text}>Rentto Assistance</span>
          </h2>
          <div className={classes.content_section}>
            <img src={user3.src} className={classes.user3} />
            <img src={user4.src} className={classes.user4} />

            <img src={map_img.src} className={classes.map_img} />
            <img src={client_pic.src} className={classes.mid_img} />
            <div className={classes.orbit}>
              <img src={user1.src} className={classes.dot} />
            </div>
            <div className={classes.orbit2}>
              <img src={user2.src} className={classes.user2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assistance;
