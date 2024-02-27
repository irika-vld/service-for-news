import styles from './index.module.scss'

const Loader = () => {
  return (
    <div>
      <h2 className={styles.loading}>Loading...</h2>
      <div className={styles.loading_square}></div>
    </div>
  );
};

export default Loader;
