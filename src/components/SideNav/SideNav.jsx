import userAvatar from "../../assets/sidenav/user.png";
import profileIcon from "../../assets/sidenav/profile.png";
import video from "../../assets/sidenav/video-play.png";
import talabatIcon from "../../assets/sidenav/notification-circle.png";
import monyes from "../../assets/sidenav/moneys.png";
import chart from "../../assets/sidenav/chart-2.png";
import talabatyIcon from "../../assets/sidenav/clipboard-text.png";
import mortgah from "../../assets/sidenav/message.png";
import location from "../../assets/sidenav/location.png";
import cards from "../../assets/sidenav/cards.png";
import fav from "../../assets/sidenav/heart.png";
import health from "../../assets/sidenav/health.png";
import logout from "../../assets/sidenav/logout.png";
import notification from "../../assets/sidenav/notification-bing.png";
import styles from "./Sidenav.module.css";

const SideNav = () => {
  return (
    <>
      <aside className={styles.container} aria-label="Sidebar">
        <div className={styles.innerContainer}>
          <div className={styles.headerContainer}>
            <img src={userAvatar} alt="user image" />
            <div>
              <h1 className={styles.userName}>أحلام محمد</h1>
              <span className="text-gray-500 "> 7854 758 56 966+ </span>
            </div>
            <div className={styles.notificationsContainer}>
              <div className={styles.notificationsInnerContainer}>
                <div className={styles.quantity}>5</div>
                <div className={styles.notificationsIconContainer}>
                  <button>
                    <img src={notification} alt="shopping-cart" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ul className="space-y-2 font-medium mt-5 px-2">
            <li>
              <hr />
              <a
                href="#"
                className="hover:bg-gray-200 mt-2 transition ease-in duration-200 py-3 ps-3 flex py-5 items-center  text-gray-900    group gap-x-4 rounded-full">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center transition ease-in duration-75 group-hover:bg-black delay-75">
                  <img src={profileIcon} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  بياناتى الشخصية
                </span>
              </a>
            </li>
            <hr />

            <li>
              <a
                href="#"
                className="hover:bg-gray-200 flex mt-5 py-3 ps-3 items-center  text-gray-900 rounded-full   group gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center transition ease-in duration-75 group-hover:bg-black delay-75">
                  <img src={video} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  ملفي وفيديوهاتي
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:bg-gray-200  flex mt-5 py-3 ps-3 items-center  text-gray-900 rounded-full group    gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center  transition ease-in duration-75 group-hover:bg-black group-hover:bg-black delay-75">
                  <img src={talabatIcon} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  طلبات التسويق
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:bg-gray-200  flex mt-5 py-3 ps-3 items-center  text-gray-900 rounded-full group    gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center  transition ease-in duration-150 group-hover:bg-black delay-75">
                  <img src={monyes} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  أرباحى
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:bg-gray-200  flex mt-5 mb-2 py-3 ps-3 items-center  text-gray-900 rounded-full group    gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center  transition ease-in duration-150 group-hover:bg-black delay-75">
                  <img src={chart} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  الإحصائيات
                </span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="space-y-2 font-medium mt-5 px-2">
            <li>
              <a
                href="#"
                className="hover:bg-gray-200 flex mt-5 py-3 ps-3 items-center  text-gray-900 rounded-full   group gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center transition ease-in duration-75 group-hover:bg-black delay-75">
                  <img src={talabatyIcon} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  طلباتي
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:bg-gray-200  flex mt-5 py-3 ps-3 items-center  text-gray-900 rounded-full group    gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center  transition ease-in duration-75 group-hover:bg-black group-hover:bg-black delay-75">
                  <img src={mortgah} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  مرتجعاتي
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:bg-gray-200  flex mt-5 py-3 ps-3 items-center  text-gray-900 rounded-full group    gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center  transition ease-in duration-150 group-hover:bg-black delay-75">
                  <img src={location} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  عناويني
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:bg-gray-200  flex mt-5 py-3 ps-3 items-center  text-gray-900 rounded-full group    gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center  transition ease-in duration-150 group-hover:bg-black delay-75">
                  <img src={cards} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  طرق الدفع
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:bg-gray-200  flex mt-5 py-3 ps-3 items-center  text-gray-900 rounded-full group    gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center  transition ease-in duration-150 group-hover:bg-black delay-75">
                  <img src={fav} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  قائمتي المفضلة
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:bg-gray-200  flex mt-5 py-3 ps-3 items-center  text-gray-900 rounded-full group    gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center  transition ease-in duration-150 group-hover:bg-black delay-75">
                  <img src={health} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  نشاطي
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:bg-gray-200  flex mt-5 py-3 ps-3 items-center  text-gray-900 rounded-full group    gap-x-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center  transition ease-in duration-150 group-hover:bg-black delay-75">
                  <img src={logout} alt="user Icon" />
                </div>
                <span className=" font-bold text-lg tracking-wide text-gray-600">
                  تسجيل الخروج
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
