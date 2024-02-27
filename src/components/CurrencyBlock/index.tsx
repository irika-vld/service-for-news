import { useState } from "react";
import styles from "./index.module.scss";
import CurrencyList from "../CurrencyList";

const defaultCurrencies = ["AED", "USD", "EUR", "GBP"];

interface Props {
  value: number;
  currency: string;
  changeCurrency: (x: string) => void;
  changeValue: (x: number) => void;
}

const CurrencyBlock = ({
  value,
  currency,
  changeCurrency,
  changeValue,
}: Props) => {
  const [defaultCur, setDefaultCur] = useState(defaultCurrencies);
  const [currencyList, setCurrencyList] = useState(false);

  const anotherValuteHandler: (valute: string) => void = (valute) => {
    setCurrencyList(false);
    defaultCur.splice(3, 1, valute);
    setDefaultCur(defaultCur);
  };

  return (
    <div className={styles.block}>
      <ul className={styles.currency}>
        {defaultCur.map((cur) => (
          <li
            key={cur}
            className={
              currency === cur ? `${styles.active}` : `${styles.curBlock}`
            }
            onClick={() => changeCurrency(cur)}
          >
            {cur}
          </li>
        ))}
        <img
          className={styles.arrow}
          src={
            currencyList
              ? "https://cdn.icon-icons.com/icons2/1883/PNG/512/caretsymbol_120671.png"
              : "https://cdn.icon-icons.com/icons2/1883/PNG/512/downarrow_120663.png"
          }
          alt="arrow"
          onClick={() => setCurrencyList(!currencyList)}
        />
      </ul>
      <input
        className={styles.input}
        type="number"
        placeholder={"0"}
        value={value}
        onChange={(e) => changeValue(Number(e.target.value))}
      />
      {currencyList && (
        <CurrencyList anotherValuteHandler={anotherValuteHandler} />
      )}
    </div>
  );
};

export default CurrencyBlock;
