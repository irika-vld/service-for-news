import styles from "./index.module.scss";
import { currencyList } from "../../assets/data";

interface Props {
  anotherValuteHandler: (valute: string) => void;
}

const CurrencyList = ({ anotherValuteHandler }: Props) => {
  return (
    <ul className={styles.wrapper}>
      {currencyList.map((el) => (
        <li
          key={el}
          className={styles.currency}
          onClick={() => anotherValuteHandler(el)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

export default CurrencyList;
