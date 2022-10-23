import React from "react";
import classes from "./clientSection.module.css";
import map_img from "../../../../public/assets/homescreen/map_img.png";
import client_pic from "../../../../public/assets/homescreen/client_pic.png";
import user1 from "../../../../public/assets/homescreen/user1.png";
import user2 from "../../../../public/assets/homescreen/user2.png";
import user3 from "../../../../public/assets/homescreen/user3.png";
import user4 from "../../../../public/assets/homescreen/user4.png";

function ClientSection() {
  return (
    <div className={classes.properties_section}>
      <div className={classes.properties_content}>
        <h2>
          What Our <span className={classes.orange_text}>Clients</span> Think
          About Us?
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
  );
}

export default ClientSection;
