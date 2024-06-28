import styles from "./ServicesSection.module.css";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../public/images/image.jpg";

const ServicesSection = () => {
  const data = [
    {
      title: "Landing Pages",
      description:
        "We build you dynamic and engaging marketing websites that not only showcase your brand but also drive results.",
    },
    {
      title: "E-commerce",
      description:
        "Empower your online business with our expertly crafted E-Commerce websites designed for seamless shopping experiences and maximum conversion.",
    },
    {
      src: Img1,
    },
    {
      title: "Blogs",
      description:
        "Unlock your voice and reach with our bespoke blog sites, tailored for captivating content delivery and audience connection.",
    },
    {
      title: "SEO Audits",
      description:
        "Uncover your website's full potential with our comprehensive SEO audits, revealing actionable insights for enhanced online visibility.",
    },
    {
      title: "Keyword Research",
      description:
        "Fuel your online success with our strategic keyword research, driving targeted traffic and boosting search rankings.",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "Analytics and Reporting",
      description:
        "Transform your data into insights with our website analytics and reporting services, guiding informed decisions for digital growth.",
    },
    {
      src: Img1,
    },
    {
      title: "",
      description: "",
    },
    {
      title: "Backend Development",
      description:
        "Power your website with robust functionality and performance through our expert backend development solutions.",
    },
    {
      title: "Frontend Development",
      description:
        "Elevate user experiences and design with our cutting-edge frontend development services, creating visually stunning and intuitive websites.",
    },
    {
      title: "Page Speed Optimization",
      description:
        "Accelerate your online success with our page speed optimization services, ensuring faster loading times and superior user experiences.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            {data.slice(0, 2).map((x, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.cardTop}>
                  <div className={styles.ball}></div>
                </div>
                <div className={styles.cardBottom}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.bottomRight}>
            <div>
              <h2 className={styles.heading}>Our Services</h2>
              <p className={styles.copy}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
                similique.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottom2}>
          {data.slice(2, 9).map((x, index) => (
            <div className={styles.card} key={index}>
              {x.src && (
                <div className={styles.imgContainer}>
                  <Image src={x.src} alt='image' fill className={styles.img} />
                </div>
              )}
              <div className={styles.cardTop}>
                <div className={styles.ball}></div>
              </div>
              <div className={styles.cardBottom}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ServicesSection;
