import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";
import ShuffleHero from "../ShuffleHero/ShuffleHero";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              We build interactive and immersive web applications.
            </h1>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              minima sint ipsum error beatae repellat deleniti corrupti,
              doloremque illo.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/' text='Enquire Now' btnType='secondary' arrow />
            </div>
          </div>
          <div className={styles.right}>
            <ShuffleHero />
          </div>
        </div>
      </LayoutWrapper>
      {/* <Slider /> */}
    </section>
  );
};
export default Hero;
