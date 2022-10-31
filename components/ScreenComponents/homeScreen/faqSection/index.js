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
        title: "Lorem Ipsum Dolor set?",
        content: (
          <AnswerSection
            content={
              "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht."
            }
          />
        ),
      },
      {
        title: "Lorem Ipsum Dolor set?",
        content: (
          <AnswerSection
            content={
              "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht."
            }
          />
        ),
      },
      {
        title: "Lorem Ipsum Dolor set?",
        content: (
          <AnswerSection
            content={
              "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht."
            }
          />
        ),
      },
      {
        title: "Lorem Ipsum Dolor set?",
        content: (
          <AnswerSection
            content={
              "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht."
            }
          />
        ),
      },
      {
        title: "Lorem Ipsum Dolor set?",
        content: (
          <AnswerSection
            content={
              "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht."
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
