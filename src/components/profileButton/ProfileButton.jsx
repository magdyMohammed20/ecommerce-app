import userImg from "../../assets/navbar/user.png";
import { ChevronDown } from "lucide-react";
import styles from "./profileButton.module.css";
const ProfileButton = () => {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.buttonStyle}
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className={styles.imgStyle} src={userImg} alt="user photo" />
      </button>

      <div className={styles.dataStyle}>
        <span className="text-slate-500 ">مرحبا حنان البشرى !</span>
        <p className="text-white">حسابى</p>
      </div>

      <button className={styles.iconStyle}>
        <ChevronDown className="text-gray-400" />
      </button>
    </div>
  );
};

export default ProfileButton;
