import { useEffect, useRef, useState } from "react";
import styles from "./nav.module.css";
import "../../../node_modules/flag-icons/css/flag-icons.min.css";
import Dropdown from "../langDropDown/DropDown";
import useCustomTranslation from "../../hooks/translation";
import Logo from "../../assets/navbar/Logo.png";
import heart from "../../assets/navbar/heart.png";
import shoppingCart from "../../assets/navbar/shopping-cart.png";
import SearchComponent from "../SearchComponent/SearchComponent";
import ProfileButton from "../profileButton/ProfileButton";
import SearchIcon from "../../assets/navbar/search-favorite.png";
import ComboButton from "../ComboButton/ComboButton";

const Navbar = () => {
  const { language } = useCustomTranslation();
  const [toggle, setToggle] = useState(false);
  const headerRef = useRef();

  const handleOpenSidebar = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 100) {
          headerRef.current.className =
            "h-18 shadow-sm shadow-gray-400 border-gray-400 shadow-slate-800  sticky w-full top-0 z-50 transition-all duration-500 linear dark:bg-mobColor bg-white";
        }
        if (window.scrollY < 50) {
          headerRef.current.classList.remove(
            "shadow-sm",
            "shadow-slate-800",
            "border-gray-400",
            "sticky"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.headerStyle} ref={headerRef}>
      <div className={styles.navContainer}>
        <ComboButton
          toggle={toggle}
          handleOpenSidebar={handleOpenSidebar}
          language={language}
        />

        <div>
          <img src={Logo} alt="logo" className={styles.logoStyle} />
        </div>

        <SearchComponent />

        <nav className="flex items-center  sm:gap-x-3">
          <div className="hidden lg:flex">
            <Dropdown />
          </div>

          <div className="sm:border-l border-l-slate-800 px-0  py-1">
            <ul className={styles.ulList}>
              <li className="hidden lg:flex">
                <button>
                  <img src={heart} alt="favourites" />
                </button>
              </li>
              <li className={styles.searchContainer}>
                <button>
                  <img
                    src={SearchIcon}
                    alt="Search Image"
                    style={{ filter: "invert(100%)" }}
                  />
                </button>
              </li>
              <li className={styles.shoppingContainer}>
                <div className={styles.shoppingInnerContainer}>
                  <div className={styles.quantity}>5</div>
                  <div className={styles.shoppingIconContainer}>
                    <img src={shoppingCart} alt="shopping-cart" />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <ProfileButton />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
