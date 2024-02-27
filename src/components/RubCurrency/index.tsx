import styles from "./index.module.scss";

const Rub = "RUB";

interface Props {
  value: number;
  changeValue: (x: number) => void;
}

const RubCurrency = ({ value, changeValue }: Props) => {
  return (
    <div className={styles.block}>
      <ul className={styles.currency}>
        <li className={styles.active}>{Rub}</li>
      </ul>
      <input
        className={styles.input}
        type="number"
        placeholder={"0"}
        value={value}
        onChange={(e) => changeValue(Number(e.target.value))}
      />
    </div>
  );
};

export default RubCurrency;
