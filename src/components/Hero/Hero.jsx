import classes from "./Hero.module.scss";
import Img from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <section className={`${classes.hero} container`}>
      <div className={classes.imgContainer}>
        <img src={Img} alt="hero" className={classes.img} />
      </div>
      <article className={classes.text}>
        <h1 className={classes.title}>Больше, чем просто короткие ссылки</h1>
        <p className={classes.description}>
          Повышайте узнаваемость своего бренда и получайте подробные сведения о
          том, как ссылки работают.
        </p>
      </article>
    </section>
  );
};

export { Hero };
