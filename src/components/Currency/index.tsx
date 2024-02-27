import styles from "./index.module.scss";
import CurrencyBlock from "../CurrencyBlock";
import axios from "axios";
import { useEffect, useState } from "react";
import RubCurrency from "../RubCurrency";
import { IValute, ValutesType } from "../../helpers/interfaces";

const Currency = () => {
  const [valute, setValute] = useState<ValutesType | {}>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  useEffect(() => {
    const getCurrency = async () => {
      try {
        if (!isLoading) return;
        const { data } = await axios.get(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        setValute(data.Valute);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getCurrency();
  }, []);

  const currency: IValute = valute[toCurrency as keyof typeof valute];

  const changeFromPrice: (x: number) => void = (value) => {
    if (currency) {
      const result = (value / currency.Value).toFixed(2);
      setFromPrice(value);
      setToPrice(+result);
    }
  };

  const changeToPrice: (x: number) => void = (value) => {
    if (currency) {
      const result = (currency.Value * value).toFixed(2);
      setFromPrice(+result);
      setToPrice(value);
    }
  };

  useEffect(() => {
    changeFromPrice(fromPrice);
  }, [toCurrency, fromPrice]);

  return (
    <div className={styles.currency}>
      <p>Exchange rate</p>
      {error ? (
        <p>Server Error</p>
      ) : (
        <div className={styles.currencyWidget}>
          <RubCurrency value={fromPrice} changeValue={changeFromPrice} />
          <CurrencyBlock
            value={toPrice}
            currency={toCurrency}
            changeCurrency={setToCurrency}
            changeValue={changeToPrice}
          />
        </div>
      )}
    </div>
  );
};

export default Currency;
