import { ICity } from "../../helpers/interfaces";
import styles from "./index.module.scss";

interface Props {
  getWeather: (e: React.FormEvent<ICity>) => void;
}

export const CityForm = ({ getWeather }: Props) => {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => getWeather(e as React.FormEvent<ICity>)}
    >
      <p>Weather in your city</p>
      <input
        className={styles.input}
        type="text"
        name="city"
        placeholder="Write your city"
      />
      <button className={styles.check}>Cheсk</button>
    </form>
  );
};

export default CityForm;
