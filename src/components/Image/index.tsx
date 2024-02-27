import styles from "./index.module.scss";

interface Props {
  image: string
}

const Image = ({image}: Props) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.wrapperImage} /> : null}
    </div>
  );
};

export default Image;
