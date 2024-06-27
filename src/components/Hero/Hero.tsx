import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Scene from "../Scene/Scene";
import styles from "./Hero.module.css";
import dynamic from "next/dynamic";


// const SceneConfig = dynamic(() => import("../Scene/Scene"), {
//   ssr: false,
// });


const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              We build interactive immersive web applications.
            </h1>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              minima sint ipsum error beatae repellat deleniti corrupti,
              doloremque illo. Eum nemo laudantium blanditiis eos minus
              consequatur a inventore illo aut.
            </p>
          </div>
          <div className={styles.right}>
            <Scene />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
