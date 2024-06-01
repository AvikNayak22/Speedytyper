import { useState } from "react";
import styles from "./FormInput.module.css";

const FormInput = () => {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textDisplay}>
          <h3>
            {/* some text */}
            {input}
          </h3>
        </div>
        <div className={styles.formField}>
          <form>
            <div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormInput;