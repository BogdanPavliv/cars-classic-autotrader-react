import React from "react";
import section_about_img from "../../img/section-about/section-about-img.png";
import circle from "../../img/section-about/circle.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import Accordion from "../../components/Accordion/Accordion";
import { accordionData } from "../../utils/cars-main";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Запускати анімацію тільки один раз
    threshold: 0.5, // Відсоток появи елемента у видимій області (0 - 1)
  });
  return (
    <>
      <section className="section-who">
        <div className="container-md">
          <div className="section-who__inner">
            <div className="section-who__left">
              <h1 className="title-top">Who<br />are we?</h1>
              <div className="badge-container hiden-element marginTop">
                <a className="badge-transparent brown" href="#!">Read reviews</a>
              </div>
            </div>
            <div className="section-who__right">
              <div className="section-who__right-text-wrapper">
                <div className="car__details--info-text-title">
                1966 Chevrolet Chevelle SS – STK 2801
                </div>
                <div className="car__details--info-text">
                  The 1966 Chevelle SS396 captivated onlookers with its striking appearance. The revamped Fisher body ushered in a new era for the mid-size Chevy, establishing it as a performance icon. In this iteration, the SS396 evolved into a distinct model within the Chevelle lineup, showcasing numerous styling upgrades and an unwavering focus on performance.This ‘138’ code Chevelle SS396 underwent an impressive frame-off restoration in 2013, emerging as a visual masterpiece. A professional application of Bolero Red paint revitalized the exterior, complemented by a meticulous restoration of the interior in original red vinyl. Every authentic detail, including the Muncie ‘hypodermic’ shifter, was thoughtfully recreated. The cabin features a complete set of SunPro gauges alongside a column-mounted tachometer, tinted windows, and an aftermarket AM/FM/cassette stereo system.Under the hood, the original 396ci ‘Rat’ powerplant gave way to a robust 427ci big-block. This powerhouse, meticulously rebuilt, boasts an aluminum intake, dual-line Holley carburetor, and a street-savvy cam. Paired with a 4-speed manual transmission, the throaty exhaust note resonates with power. (Trivia: A few years later, Don Yenko Chevrolet in Pittsburgh adopted a similar drivetrain package for their COPO Chevelles.)GM Rally wheels with trim rings and centers embrace sturdy 15” BFG Radial T/A tires. Steering is managed manually, while power disc/drum brakes, a front sway bar, and HD shocks contribute to a balanced driving experience.
                </div>
              </div>
              <div className="badge-container hiden-element marginTop bottom visible">
                <a className="badge-transparent brown" href="#a">Read reviews</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-about">
        <div className="container-sm">
          <div className="section-about__bottom">
            <ul className="section-about__list">
              <li className="section-about__item">
                <img className="section-about__item--img" src={circle} alt="" />
                <div className="section-about__item--content" ref={ref}>
                  {inView && (
                    <CountUp
                      start={0}
                      end={32}
                      className="section-about__item--digit"
                    />
                  )}
                  <p className="section-about__item--text">Retro car</p>
                </div>
              </li>
              <li className="section-about__item">
                <img className="section-about__item--img" src={circle} alt="" />
                <div className="section-about__item--content" ref={ref}>
                  {inView && (
                    <CountUp
                      start={0}
                      end={400}
                      className="section-about__item--digit"
                    />
                  )}
                  <p className="section-about__item--text">Satisfied clients</p>
                </div>
              </li>
              <li className="section-about__item">
                <img className="section-about__item--img" src={circle} alt="" />
                <div className="section-about__item--content" ref={ref}>
                  <div className="section-about__item--digit-wrapper">
                    {inView && (
                      <CountUp
                        start={0}
                        end={5}
                        className="section-about__item--digit"
                      />
                    )}
                    <span className="years">years</span>
                  </div>
                  <p className="section-about__item--text">
                    Delighting our clients
                  </p>
                </div>
              </li>
            </ul>
            <div className="section-about__img--wrapper">
              <img
                className="section-about__img"
                src={section_about_img}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-faq">
        <div className="container-md">
          <div className="section-faq__inner">
            <div className="section-faq__left hiden-element">
              <div className="section-faq__title-wrapper">
                <h3 className="title-left">FAQ</h3>
              </div>
              <a className="badge-transparent" href="#a">
                Ask a Question
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="badge-img"
                    d="M1 1H15M15 1V15M15 1L1 15"
                    stroke="#3A3C35"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="section-faq__right">
              <h3 className="title-left section-faq-mob">FAQ</h3>
              <Accordion sections={accordionData} />
              <div className="badge-container hiden-badge visible">
                <a className="badge-transparent" href="#a">
                  Ask a Question
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="badge-img"
                      d="M1 1H15M15 1V15M15 1L1 15"
                      stroke="#3A3C35"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
