import React, { useState, useEffect } from "react";
import classes from "./chat.module.css";
import placeholder_user from "../../public/assets/homescreen/placeholder_user.svg";
import send_btn from "../../public/assets/chat_assets/send_btn.svg";
import { useWindowSize } from "../../utils";
import back_arrow from "../../public/assets/login_screen_assets/back_arrow.svg";
import { useRouter } from "next/router";

function Chat() {
  const [showInbox, setShowInbox] = useState(false);
  const router = useRouter();
  const { width } = useWindowSize();

  useEffect(() => {
    console.log(showInbox);
  }, [showInbox]);

  // const handleToggleShowInboxScreen = async (value) => {
  //   setShowInbox(value);
  // };

  const MESSAGES_DUMMY = [
    {
      messageLeft: true,
      text: "Heyy how're you?",
      id: 1,
    },
    {
      messageLeft: false,
      text: "Hey i'm good wby?",
      id: 2,
    },
    {
      messageLeft: true,
      text: "Did u see the match?",
      id: 3,
    },
    {
      messageLeft: false,
      text: "Yeah, we're unlucky?",
      id: 4,
    },
    {
      messageLeft: true,
      text: "For sure",
      id: 5,
    },
  ];

  const DUMMY_DATA = [
    {
      id: "1",
      name: "Fatima",
    },
    {
      id: "2",
      name: "Hamza",
    },
    {
      id: "3",
      name: "Mariam",
    },
    {
      id: "4",
      name: "Tahir",
    },
    {
      id: "5",
      name: "Arshad",
    },
    {
      id: "6",
      name: "Aleena",
    },
    {
      id: "7",
      name: "Khalid",
    },
    {
      id: "8",
      name: "Nauman",
    },
    {
      id: "9",
      name: "Ayaz",
    },
  ];

  const [selectedUserInbox, setSelectedUserInbox] = useState(DUMMY_DATA[0]);
  const [messaages, setMessages] = useState(MESSAGES_DUMMY);
  const [message, setMessage] = useState();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
      console.log("do validate");
    }
  };

  const handleSendMessage = async () => {
    setMessage("");
    setMessages((msg) => [
      ...msg,
      { messageLeft: false, text: message, id: messaages?.length },
    ]);
  };

  const handleSelectUser = async (user) => {
    setSelectedUserInbox(user);
  };

  return (
    <div className={classes.chat_screen_section}>
      <div className={classes.chat_screen_content_section}>
        {width < 786 ? (
          showInbox ? (
            <div className={classes.right_panel}>
              <div className={classes.top_banner}>
                <img
                  onClick={() => {
                    setShowInbox(false);
                  }}
                  src={back_arrow.src}
                  className={classes.back_arrow}
                />

                <img src={placeholder_user.src} className={classes.user_img} />
                <p>{selectedUserInbox?.name}</p>
              </div>
              <div className={classes.chat_panel_mobile}>
                {messaages?.map((msg, index) =>
                  msg?.messageLeft === true ? (
                    <div className={classes.msg_container_left}>
                      <div className={classes.left_msg}>
                        <p className={classes.msg_text}> {msg?.text}</p>
                      </div>
                    </div>
                  ) : (
                    <div className={classes.msg_container_right}>
                      <div className={classes.right_msg}>
                        <p className={classes.msg_text}>{msg?.text}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className={classes.msg_section_mobile}>
                <input
                  placeholder="Message"
                  className={classes.text_input_mobile}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                />
                <img
                  className={classes.mobile_msg_send}
                  onClick={handleSendMessage}
                  src={send_btn.src}
                />
              </div>
            </div>
          ) : (
            <div className={classes.left_panel}>
              <img
                onClick={() => {
                  router.push("/");
                }}
                style={{ right: "32px" }}
                src={back_arrow.src}
                className={classes.back_arrow}
              />
              <h2>Messages</h2>
              <div className={classes.list}>
                {DUMMY_DATA?.map((user, index) => (
                  <>
                    <div
                      onClick={() => {
                        handleSelectUser(user);
                        console.log(
                          "CALLED THE FUNCTION TO FUCKING TURN IT TRUE"
                        );
                        setShowInbox(true);
                      }}
                      key={index}
                      className={classes.contact_tab}
                    >
                      <img
                        src={placeholder_user.src}
                        className={classes.user_img}
                      />
                      <div className={classes.name_text}>
                        <p className={classes.name_title}>{user?.name}</p>
                        <p className={classes.text}>
                          Lorem ipsum dolor sit amet
                        </p>
                        <p className={classes.duration}>2H</p>
                      </div>
                    </div>
                    <div className={classes.divider} />
                  </>
                ))}
              </div>
            </div>
          )
        ) : (
          <>
            <div className={classes.left_panel}>
              <h2>Messages</h2>
              <div className={classes.list}>
                {DUMMY_DATA?.map((user, index) => (
                  <>
                    <div
                      onClick={() => {
                        handleSelectUser(user);
                      }}
                      key={index}
                      className={
                        selectedUserInbox?.id === user?.id
                          ? classes.contact_tab_selected
                          : classes.contact_tab
                      }
                    >
                      <img
                        src={placeholder_user.src}
                        className={classes.user_img}
                      />
                      <div className={classes.name_text}>
                        <p className={classes.name_title}>{user?.name}</p>
                        <p className={classes.text}>
                          Lorem ipsum dolor sit amet
                        </p>
                        <p className={classes.duration}>2H</p>
                      </div>
                    </div>
                    <div className={classes.divider} />
                  </>
                ))}
              </div>
            </div>
            <div className={classes.right_panel}>
              <div className={classes.top_banner}>
                <img src={placeholder_user.src} className={classes.user_img} />
                <p>{selectedUserInbox?.name}</p>
              </div>
              <div className={classes.chat_panel}>
                {messaages?.map((msg, index) =>
                  msg?.messageLeft === true ? (
                    <div className={classes.msg_container_left}>
                      <div className={classes.left_msg}>
                        <p className={classes.msg_text}> {msg?.text}</p>
                      </div>
                    </div>
                  ) : (
                    <div className={classes.msg_container_right}>
                      <div className={classes.right_msg}>
                        <p className={classes.msg_text}>{msg?.text}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className={classes.msg_section}>
                <div className={classes.msg_content}>
                  <textarea
                    placeholder="Message"
                    className={classes.text_input}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                  />
                  <img onClick={handleSendMessage} src={send_btn.src} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Chat;
