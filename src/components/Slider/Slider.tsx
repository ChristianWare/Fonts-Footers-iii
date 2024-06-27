import styles from "./Slider.module.css";
import Logo1 from "../../../public/icons/logoipsum-299.svg";
import Logo2 from "../../../public/icons/logoipsum-300.svg";
import Logo3 from "../../../public/icons/logoipsum-311.svg";
import Logo4 from "../../../public/icons/logoipsum-317.svg";
import Logo5 from "../../../public/icons/logoipsum-321.svg";
import Logo6 from "../../../public/icons/logoipsum-323.svg";
import Logo7 from "../../../public/icons/logoipsum-325.svg";
import Logo8 from "../../../public/icons/logoipsum-327.svg";
import Logo9 from "../../../public/icons/logoipsum-329.svg";
import Logo10 from "../../../public/icons/logoipsum-330.svg";

const Slider = () => {
  const logos = [
    { logo: <Logo1 className={styles.logo} />, position: 1 },
    { logo: <Logo2 className={styles.logo} />, position: 2 },
    { logo: <Logo3 className={styles.logo} />, position: 3 },
    { logo: <Logo4 className={styles.logo} />, position: 4 },
    { logo: <Logo5 className={styles.logo} />, position: 5 },
    { logo: <Logo6 className={styles.logo} />, position: 6 },
    { logo: <Logo7 className={styles.logo} />, position: 7 },
    { logo: <Logo8 className={styles.logo} />, position: 8 },
    { logo: <Logo9 className={styles.logo} />, position: 9 },
    { logo: <Logo10 className={styles.logo} />, position: 10 },
    { logo: <Logo1 className={styles.logo} />, position: 11 },
    { logo: <Logo2 className={styles.logo} />, position: 12 },
    { logo: <Logo3 className={styles.logo} />, position: 13 },
    { logo: <Logo4 className={styles.logo} />, position: 14 },
    { logo: <Logo5 className={styles.logo} />, position: 15 },
    { logo: <Logo6 className={styles.logo} />, position: 16 },
    { logo: <Logo7 className={styles.logo} />, position: 17 },
    { logo: <Logo8 className={styles.logo} />, position: 18 },
    { logo: <Logo9 className={styles.logo} />, position: 19 },
    { logo: <Logo10 className={styles.logo} />, position: 20 },
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {[...logos, ...logos].map((x, index) => (
          <div key={index} className={styles.item}>
            {x.logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
