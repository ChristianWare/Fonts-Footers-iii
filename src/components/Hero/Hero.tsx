import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>Heading Here</h1>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              minima sint ipsum error beatae repellat deleniti corrupti,
              doloremque illo. Eum nemo laudantium blanditiis eos minus
              consequatur a inventore illo aut.
            </p>
          </div>
          <div className={styles.right}>
            
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
