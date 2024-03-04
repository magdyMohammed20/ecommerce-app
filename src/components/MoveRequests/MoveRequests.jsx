import styles from "./MoveRequests.module.css";
import logo from "../../assets/mains/logo.png";
import { Calendar, Clock, Loader, MoveLeft } from "lucide-react";
import money from "../../assets/mains/money.png";
import Chart from "../Chart/Chart";
const MoveRequests = ({ products }) => {
  const mapProducts = products.map((item) => {
    return (
      <>
        <div className=" bg-gray-50 rounded-md mt-4">
          <div className={styles.innerContainer}>
            <h1 className="text-xl font-bold">${item.price}</h1>

            <div className="bg-red-50 rounded-full px-7 py-3 flex items-center gap-x-2">
              <Loader size={"22px"} className="text-orange-600" />
              <span className="font-bold  text-orange-500 ">قيد الإنتظار</span>
            </div>
          </div>

          <div className={`${styles.innerContainer} mt-0 px-7`}>
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" />
              <span className="text-gray-500">بنك الراجحى</span>
            </div>

            <span className="text-gray-500">****4567</span>
          </div>
          <hr />
          <div className={`${styles.innerContainer} mt-0 px-7`}>
            <div>ID: 123664532</div>

            <div className="text-gray-500 flex gap-4">
              <span className="flex items-center gap-2">
                <Calendar size={"12px"} />
                14 مايو، 2023
              </span>
              <span className="flex items-center gap-2">
                <Clock size={"12px"} /> 2:00pm
              </span>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div>
      <div className="flex mt-4 justify-between items-center">
        <div className="px-2 flex items-center gap-3">
          <img src={money} alt="money" />
          <h3 className="text-lg font-bold">طلبات التحويل</h3>
        </div>
        <div>
          <a className="flex items-center gap-2 cursor-pointer font-semibold">
            عرض الكل
            <MoveLeft size={"12px"} />
          </a>
        </div>
      </div>
      <div className={styles.container}>{mapProducts}</div>

      <Chart />
    </div>
  );
};

export default MoveRequests;
