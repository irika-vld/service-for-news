import { useState } from "react";
import { surveyData } from "../../assets/data";
import styles from "./index.module.scss";

interface Props {
  setIsFinished: (x: boolean) => void;
  setIsProcessed: (x: boolean) => void;
}

const Survey = ({ setIsFinished, setIsProcessed }: Props) => {
  let [index, setIndex] = useState(0);
  let [quastions, setQuastions] = useState(surveyData[index]);
  const [isSelected, setIsSelected] = useState(false);
  const [activeAnswerId, setActiveAnswerId] = useState<null | number>(null);

  const nextHandler = () => {
    if (index === surveyData.length - 1) {
      setIsFinished(true);
      setIsProcessed(false);
      return 0;
    }
    if (isSelected) setIndex(++index);
    setQuastions(surveyData[index]);
    setIsSelected(false);
    setActiveAnswerId(null);
  };

  const answerHandler: (x: number) => void = (id) => {
    setIsSelected(true);
    setActiveAnswerId(id);
  };

  return (
    <div className={styles.content}>
      <p className={styles.number} style={{ color: "#211f1f" }}>
        {index + 1} / 3
      </p>
      <p className={styles.quastion} style={{ color: "#211f1f" }}>
        {quastions.quastion}
      </p>
      <ul>
        {quastions.answers.map((el, index) => (
          <li
            key={index}
            onClick={() => answerHandler(index + 1)}
            className={
              index + 1 === activeAnswerId
                ? styles.answer + " " + styles.checked
                : styles.answer
            }
          >
            {el}
          </li>
        ))}
      </ul>
      <button onClick={() => nextHandler()} className={styles.next}>
        Next
      </button>
    </div>
  );
};

export default Survey;
