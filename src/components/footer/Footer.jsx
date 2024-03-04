import { links, otherLinks } from "./data";
import useCustomTranslation from "../../hooks/translation";
import logo from "../../assets/navbar/Logo.png";
import facebook from "../../assets/socials/facebook.png";
import x from "../../assets/socials/twitter.png";
import instagram from "../../assets/socials/instagram.png";
import snapchat from "../../assets/socials/snapchat.png";
import linkedin from "../../assets/socials/linkedin.png";
import { ChevronLeft, Info, Settings } from "lucide-react";
import play from "../../assets/socials/image 7.png";
import appStore from "../../assets/socials/image 6.png";
import visa from "../../assets/purcache/visa.png";
import master from "../../assets/purcache/master.png";
import mada from "../../assets/purcache/mada.png";
const Footer = () => {
  const { t, language } = useCustomTranslation();

  const mapLinks = links.map((link) => (
    <li
      key={link.id}
      className={`${
        language == "ar" && "text-[18px]"
      } dark:text-slate-400 mt-6 hover:text-white transition-all duration-100 ease-linear`}>
      <a href="#" className="flex items-center gap-2">
        <ChevronLeft className="text-gray-600" />{" "}
        {t(`links.internal_links.${link.name}`)}
      </a>
    </li>
  ));

  const renderOtherLinks = otherLinks.map((link) => (
    <li
      key={link.id}
      className="dark:text-slate-400 mt-6 hover:text-indigo-500 transition-all duration-0 ease-linear flex items-center gap-2">
      {link.icon}
      <a href="#" className="flex items-center gap-2">
        {" "}
        <ChevronLeft className="text-gray-600" />{" "}
        {t(`links.other_links.${link.name}`)}
      </a>
    </li>
  ));
  return (
    <div>
      <div className="bg-white py-10 px-16 lg:flex justify-between hidden">
        <div>
          <h1 className="text-lg font-bold">متواجدين دائمًا لمساعدتك</h1>
          <p className="text-gray-600 mt-4">
            تواصل معنا من خلال أي من قنوات الدعم التالية:
          </p>
        </div>

        <div className="flex gap-6">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-black rounded-full">
              <Info className="text-white" />
            </div>
            <div className="text-gray-600">
              <h5>مركز المساعدة</h5>
              <p>help.samvalley.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-4 bg-black rounded-full">
              <Settings className="text-white" />
            </div>
            <div className="text-gray-600">
              <h5> الدعم عبر الايميل</h5>
              <p>help.samvalley.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-24 px-6 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:ps-12 border-b border-b-gray-700 pb-8">
          <div className="text-center lg:text-right">
            <img
              src={logo}
              alt="logo"
              className="mr-auto ml-auto lg:mr-0 lg:ml-0 lg:ms-auto"
            />
            <p className="text-gray-400 my-5 lg:w-3/4 w-full font-semibold text-[16px] ">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى.
            </p>
            <ul className="flex gap-3 mt-10 justify-center lg:justify-start">
              <li>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  style={{ backgroundColor: "#34343d" }}>
                  <img src={facebook} alt="facebook" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  style={{ backgroundColor: "#34343d" }}>
                  <img src={x} alt="twitter" />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  style={{ backgroundColor: "#34343d" }}>
                  <img src={instagram} alt="instagram" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  style={{ backgroundColor: "#34343d" }}>
                  <img src={snapchat} alt="snapchat" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  style={{ backgroundColor: "#34343d" }}>
                  <img src={linkedin} alt="linkedin" />
                </button>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <h1 className="text-white text-[21px] font-bold ">
              اعرف المزيد عنا
            </h1>
            <ul className=" list-none">{mapLinks}</ul>
          </div>
          <div className="mt-8 md:mt-0 hidden lg:block">
            <h1 className="text-white text-[21px] font-bold">
              مركز & المساعدة{" "}
            </h1>

            <ul className="list-disc">{renderOtherLinks}</ul>
          </div>
          <div className="mt-12 md:mt-0">
            <div className="text-white">
              <h1 className="text-white text-[21px] font-bold text-center lg:text-right">
                {" "}
                اشترك معنا لتصلك أخبار الموضة والعروض
              </h1>

              <form className="my-6">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="rounded-full block w-full p-4 ps-10 text-sm text-gray-900  border-gray-300  bg-gray-50 border-0 focus:outline-0  placeholder-gray-400  "
                    placeholder="ادخل بريدك الالكتروني"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute rounded-full end-2.5 bottom-2.5 bg-black hover:bg-blue-800  focus:outline-none  font-medium  text-sm px-6 py-2 ">
                    إشتراك
                  </button>
                </div>
              </form>

              <div>
                <p className="text-white text-lg font-semibold text-center lg:text-right">
                  تسوق أينما كنت
                </p>

                <div className="flex gap-2 mt-6 justify-center lg:justify-start">
                  <img src={play} alt="google play" />
                  <img src={appStore} alt="app store" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-7 flex-col lg:flex-row flex justify-between px-2 lg:px-8">
          <div className="  text-gray-300 ">
            <div>
              <p>جميع الحقوق محفوظة لشركة © 2023 Sam valley</p>
            </div>
            <div className="flex mt-5 gap-7">
              <p>السجل التجاري 1068783009</p>
              <p>الرقم الضريبي 38884655292903</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-8 lg:mt-0">
            <img src={visa} alt="visa" />
            <img src={master} alt="master" />
            <img src={mada} alt="mada" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
