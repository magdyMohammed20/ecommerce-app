import styles from "./Banner.module.css";
import cta from "../../assets/banner/CTA.png";
import Modal from "../Modal/Modal";
import { useState } from "react";
const Banner = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <div className={styles.container}>
      {isOpenModal && <Modal toggleModal={toggleModal} />}
      <div className={styles.innerContainer}>
        <img src={cta} alt="cta" />
        <div>
          <h2 className={styles.title}>إجمالي الربح</h2>
          <span className={styles.totalEarn}>$5000</span>
        </div>
      </div>

      <div>
        <button className={styles.button} onClick={toggleModal}>
          طلب تحويل جديد
        </button>
      </div>
    </div>
  );
};

export default Banner;
