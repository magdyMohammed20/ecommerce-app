import { useState, useRef, useEffect } from "react";
import useCustomTranslation from "../../hooks/translation";
import styles from "./DropDown.module.css";

const Dropdown = () => {
  const { i18n } = useCustomTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    i18n.changeLanguage(language);

    document.body.dir = language == "en" ? "ltr" : "rtl";
    document.body.style.textAlign = language == "en" ? "left" : "right";
  };

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")) {
      handleLanguageClick(localStorage.getItem("i18nextLng"));
    }
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className={styles.buttonStyle}
        type="button">
        <span>
          {selectedLanguage == "ar" ? (
            <>
              <span className="fi fi-sa "></span>{" "}
              <span className="font-bold ms-1">السعودية</span>
            </>
          ) : (
            <>
              <span className="fi fi-us"></span>{" "}
              <span className="font-bold ms-1">USA</span>
            </>
          )}{" "}
        </span>
      </button>

      {isOpen && (
        <div id="dropdown" className={styles.dropDown_container}>
          <ul
            className={styles.dropDown_list}
            aria-labelledby="dropdownDefaultButton">
            <li>
              <a
                onClick={() => handleLanguageClick("en")}
                className={styles.select_option}>
                <span className="fi fi-us"></span>
                English
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLanguageClick("ar")}
                className={styles.select_option}>
                <span className="fi fi-sa"></span>
                السعودية
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
