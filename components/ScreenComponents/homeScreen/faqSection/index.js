import React from "react";
import classes from "./faqSection.module.css";
import Faq from "react-faq-component";

function FAQ() {
  const AnswerSection = ({ content }) => {
    return (
      <>
        <div className={classes.answer_section}>
          <p>{content}</p>
        </div>
      </>
    );
  };

  const data = {
    rows: [
      {
        title: "Which cities are covered by renttoapp?",
        content: (
          <AnswerSection
            content={
              "At present renttoapp is available in Islamabad. Operations in Lahore and Karachi will commence soon."
            }
          />
        ),
      },
      {
        title: "Who can upload an Ad?",
        content: (
          <AnswerSection
            content={
              "All genuine Property Owners who are willing to share their property information and contact details can upload and Ad."
            }
          />
        ),
      },
      {
        title: "What Property Types can be uploaded on renttoapp?",
        content: (
          <AnswerSection
            content={
              "All types of Properties that are vacant and available for long term renting can be uploaded. This includes any of the following: Complete Houses, House Portions, Apartments, Farmhouses, Separate Rooms, Offices, Working Spaces, Shops, Commercial Spaces, Warehouses, Storage Space and Leasable Land."
            }
          />
        ),
      },
      {
        title: "How is renttoapp different from other platforms?",
        content: (
          <AnswerSection
            content={
              "renttoapp is Pakistan’s first rent focused digital platform that aims to ease the cumbersome property rental process by completely eliminating the role of property agents. Through modern techniques such as 360 visualizations, map views, Ad life and more the platform gives its users more liberty to shortlist and select appropriate rental properties."
            }
          />
        ),
      },
      {
        title: "What do I do if I have any difficulty in uploading my Property Ad?",
        content: (
          <AnswerSection
            content={
              "Video tutorials and Rentto Helpline are available to facilitate the Ad uploading process. You can also seek Rentto Assistance to upload your Property Ad."
            }
          />
        ),
      },
      {
        title: "What do I do if am approached by a Property Agent?",
        content: (
          <AnswerSection
            content={
              "Refuse to pay any kind of commission and Report the Ad immediately."
            }
          />
        ),
      },
    ],
  };

  return (
    <div className={classes.faq_section}>
      <p>FIND YOUR ANSWERS</p>
      <h2>
        FAQ<span>&#39;</span>s
      </h2>
      <div className={classes.content_section}>
        <Faq
          styles={{
            titleTextColor: "#0068ed",
            rowTitleColor: "#0068ed",
          }}
          data={data}
        />
      </div>
    </div>
  );
}

export default FAQ;
