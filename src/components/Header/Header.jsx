import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import styled from "styled-components";

const HamburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  position: relative;
  width: 36px;
  height: 16px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  span {
    display: inline-block;
    position: absolute;
    background-color: #3A3C35;
    width: 28px;
    height: 2px;
    right: 0;
    bottom: 50%;
    transform: translateY(50%);
    transition: all 0.3s;
    opacity: 1;
  }
  &::before{
    content: "";
    background-color: #3A3C35;
    width: 36px;
    height: 2px;
    display: inline-block;
    position: absolute;
    right: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  &::after {
    content: "";
    background-color: #3A3C35;
    width: 22px;
    height: 2px;
    display: inline-block;
    position: absolute;
    right: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  span {
    opacity: ${(props) => (props.clicked ? "0" : "1")};
  }
  &::before {
    width: ${(props) => (props.clicked ? "100%" : "36px")};
    top: ${(props) => (props.clicked ? "8px" : "0px")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    width: ${(props) => (props.clicked ? "100%" : "22px")};
    bottom: ${(props) => (props.clicked ? "6px" : "0px")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: #F3F4F6;
  border: 1px solid #3A3C35;
  border-radius: 5px;
  margin: 0.5rem;
  .mobile-menu__nav-item {
    margin-bottom: 20px
  }
  a {
    color: #3A3C35;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.84px;
    cursor: pointer;
  }
`;

export const Header = () => {
  const [click, setClick] = useState(false);

  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;
    const mq = window.matchMedia("(max-width: 640px)");
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        borderRadius: "5px 5px 0px 0px",
        borderTop: "1px solid #3A3C35",
        borderLeft: "1px solid #3A3C35",
        borderRight: "1px solid #3A3C35",
        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  const activeLink = 'header__nav-link header__nav-link--active';
	const normalLink = 'header__nav-link';

  const mobileActiveLink = 'mobile-menu__nav-link mobile-menu__nav-link--active';
	const mobileNormalLink = 'mobile-menu__nav-link';

  return (
    <header className="header" ref={ref}>
      <div className="container-md">
        <div className="header__inner">
          <NavLink to="/" className="logo">
            Cars Classic Autotrader
          </NavLink>
          <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item">
                      <NavLink 
                        to="/cars" 
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        Cars
                      </NavLink>
                  </li>
                  <li className="header__nav-item">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        About Us
                      </NavLink>
                  </li>
                  <li className="header__nav-item">
                      <NavLink 
                        to="/services" 
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        Services
                      </NavLink>
                  </li>
                  <li className="header__nav-item">
                      <NavLink 
                        to="/contacts" 
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        Contacts
                      </NavLink>
                  </li>
                </ul>
          </nav>
          <div className="header__nav-actions">
            <a className="header__nav-phone" href="tel:+12403751288">+1 (240) 375-1288</a>
          </div>
          <HamburgerBtn clicked={+click} onClick={() => setClick(!click)}>
            <span></span>
          </HamburgerBtn>
          <MobileMenu clicked={+click}>
                <ul className="mobile-menu__nav-list">
                  <li className="mobile-menu__nav-item">
                      <NavLink 
                        to="/cars" 
                        className={({ isActive }) =>
                          isActive ?  mobileActiveLink : mobileNormalLink
                        }
                      >
                        Cars
                      </NavLink>
                  </li>
                  <li className="mobile-menu__nav-item">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ?  mobileActiveLink : mobileNormalLink
                        }
                      >
                        About Us
                      </NavLink>
                  </li>
                  <li className="mobile-menu__nav-item">
                      <NavLink 
                        to="/services" 
                        className={({ isActive }) =>
                          isActive ?  mobileActiveLink : mobileNormalLink
                        }
                      >
                        Services
                      </NavLink>
                  </li>
                  <li className="mobile-menu__nav-item">
                      <NavLink 
                        to="/contacts" 
                        className={({ isActive }) =>
                          isActive ?  mobileActiveLink : mobileNormalLink
                        }
                      >
                        Contacts
                      </NavLink>
                  </li>
                </ul>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
};

