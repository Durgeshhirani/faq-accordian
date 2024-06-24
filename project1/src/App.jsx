import React, { useState } from "react";
import pattern from "../../assets/images/background-pattern-desktop.svg";
import iconStar from "../../assets/images/icon-star.svg";
import iconPlus from "../../assets/images/icon-plus.svg";
import iconMinus from "../../assets/images/icon-minus.svg";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <div className="root">
      <img src={pattern} className="patternImg" alt="pattern" />
      <div className="container">
        <div className="heading">
          <div className="star">
            <img src={iconStar} alt="Star Icon" />
          </div>
          <div className="faq">FAQs</div>
        </div>
        <ul className="list">
          {faqItems.map((item, index) => (
            <li className="item" key={index}>
              <div className="question-bar" onClick={() => handleToggle(index)}>
                <div className="question">{item.question}</div>
                <div className="que-btn">
                  <img
                    src={activeIndex === index ? iconMinus : iconPlus}
                    className="que-icon"
                    alt="Toggle Icon"
                  />
                </div>
              </div>
              <div className={`answer ${activeIndex === index ? "" : "hide"}`}>
                {item.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
