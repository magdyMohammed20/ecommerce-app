import SearchIcon from "../../assets/navbar/search-favorite.png";
import styles from "./SearchComponent.module.css";

const SearchComponent = () => {
  return (
    <form className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.searchIconContainer}>
          <img src={SearchIcon} alt="search icon" className="w-5" />
        </div>
        <input
          type="text"
          className={styles.inputStyle}
          placeholder="ما الذى تبحث عنه ؟"
          required
        />
      </div>
    </form>
  );
};

export default SearchComponent;
