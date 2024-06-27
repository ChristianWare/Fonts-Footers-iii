"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

const navItems = [
  {
    text: "Benefits",
    href: "/benefits",
  },
  {
    text: "About US",
    href: "/about",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
  {
    text: "FAQS",
    href: "/faqs",
  },
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Glossary",
    href: "/glossary",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setIsOverlayVisible(!isOverlayVisible);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 968 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  

  const pathname = usePathname();

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul
            className={
              isOpen === false
                ? styles.navMenu
                : `${styles.navMenu} ${styles.active}`
            }
          >
            <li className={styles.navItem} onClick={() => setIsOpen(false)}>
              <Link href='/' className={styles.navItem}>
                {pathname === "/" ? (
                  <>
                    Home
                  </>
                ) : (
                  "Home"
                )}
              </Link>
            </li>
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className={styles.navItem}
                onClick={() => setIsOpen(false)}
              >
                <Link href={navItem.href} className={styles.navItem}>
                  {pathname.includes(navItem.href) && (
                    <>
                      {navItem.text}
                    </>
                  )}
                  {!pathname.includes(navItem.href) && navItem.text}{" "}
                </Link>
              </li>
            ))}
            {/* {isOpen && (
              <div className={styles.btnContainerMobile}>
                <Button
                  href='/contact'
                  text='Call Us'
                  btnType='secondary'
                  arrow
                />
                <Button
                  href='/contact/#schedule'
                  text='Schedule a call'
                  btnType='secondary'
                  arrow
                />
              </div>
            )} */}
          </ul>
          {isOpen && (
            <div
              className={`${styles.overlay} ${
                isOverlayVisible ? styles.visible : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                setIsOverlayVisible(false);
              }}
            ></div>
          )}
          <div className={styles.btnContainer}>
            <Button
              href='mailto:fontsandfooters@gmail.com'
              text='email us'
              btnType='secondaryNav'
            />
            <Button
              href='/contact/#schedule'
              text='Schedule a call'
              btnType='primaryNav'
            />
          </div>
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : `${styles.hamburger} ${styles.active}`
            }
            onClick={openMenu}
          >
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
          </span>
        </nav>
      </header>
    </>
  );
}
export default Nav;
