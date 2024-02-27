import { useState } from "react";
import styles from "./index.module.scss";
import Survey from "../Survey";

interface Props {
  setModalIsOpen: (x: boolean) => void;
}

const SurveyModal = ({ setModalIsOpen }: Props) => {
  const [isProccesed, setIsProcessed] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isProccesed ? (
          <Survey
            setIsFinished={setIsFinished}
            setIsProcessed={setIsProcessed}
          />
        ) : (
          <>
            {isFinished ? (
              <p className={styles.textFinish} style={{ color: "#211f1f" }}>
                Thank you for your time
              </p>
            ) : (
              <>
                <p className={styles.text} style={{ color: "#211f1f" }}>
                  Share your opinion about the web site usability please. Answer
                  a few questions for a few seconds. Your opinion is important
                  for us.
                </p>
                <button
                  className={styles.startBtn}
                  onClick={() => setIsProcessed(true)}
                >
                  Start
                </button>
              </>
            )}
          </>
        )}
      </div>
      <button className={styles.closeBtn} onClick={() => setModalIsOpen(false)}>
        X
      </button>
    </div>
  );
};

export default SurveyModal;
