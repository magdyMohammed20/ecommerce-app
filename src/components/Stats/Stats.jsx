import styles from "./Stats.module.css";
import cta from "../../assets/banner/CTA.png";
import ups from "../../assets/banner/money.png";
import { MoveDown, MoveUp } from "lucide-react";
const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img src={cta} alt="cta" />
        <div>
          <h2 className={styles.title}> ربح التسويق</h2>
          <div className="flex gap-3">
            <span className={styles.totalEarn}>$10</span>
            <span className={styles.percentage}>
              <MoveUp size={"15px"} /> %26{" "}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.innerContainer}>
        <div className={styles.imgContainer}>
          <img src={ups} alt="ups" />
        </div>
        <div>
          <h2 className={styles.title}> ربح التسويق</h2>
          <div className="flex gap-3">
            <span className={styles.totalEarn}>$200</span>
            <span className={styles.percentageDown}>
              <MoveDown size={"15px"} /> %26{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
