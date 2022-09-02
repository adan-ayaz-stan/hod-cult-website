import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { preRequisteDone } from "../../../atoms/login-prerequiste";

import styles from "./main.module.css";

const Heading = () => {
  // RECOIL STATE
  const preRequisteRecoilSetter = useSetRecoilState(preRequisteDone);

  // LETTERS STATE
  const [lettera, setLettera] = useState(false);
  const [letterl1, setLetterl1] = useState(false);
  const [letterl2, setLetterl2] = useState(false);
  const [letterDot1, setLetterDot1] = useState(false);
  const [letteri1, setLetteri1] = useState(false);
  const [lettern1, setLettern1] = useState(false);
  const [letterDot2, setLetterDot2] = useState(false);
  const [lettern2, setLettern2] = useState(false);
  const [lettero1, setLettero1] = useState(false);
  const [lettert1, setLettert1] = useState(false);
  const [letterh1, setLetterh1] = useState(false);
  const [letteri2, setLetteri2] = useState(false);
  const [lettern3, setLettern3] = useState(false);
  const [letterg1, setLetterg1] = useState(false);
  const [letterr1, setLetterr1] = useState(false);
  const [lettere1, setLettere1] = useState(false);
  const [letterv, setLetterv] = useState(false);
  const [lettere2, setLettere2] = useState(false);
  const [letterr2, setLetterr2] = useState(false);
  const [lettere3, setLettere3] = useState(false);
  const [letterd, setLetterd] = useState(false);
  const [letterDot3, setLetterDot3] = useState(false);
  const [letterj, setLetterj] = useState(false);
  const [lettero2, setLettero2] = useState(false);
  const [letteri3, setLetteri3] = useState(false);
  const [lettern4, setLettern4] = useState(false);
  const [lettert2, setLettert2] = useState(false);
  const [letterh2, setLetterh2] = useState(false);
  const [lettere4, setLettere4] = useState(false);
  const [letterc, setLetterc] = useState(false);
  const [letteru, setLetteru] = useState(false);
  const [letterl3, setLetterl3] = useState(false);
  const [lettert3, setLettert3] = useState(false);
  const [letterDot4, setLetterDot4] = useState(false);
  const [letterb, setLetterb] = useState(false);
  const [lettere5, setLettere5] = useState(false);
  const [letteri4, setLetteri4] = useState(false);
  const [lettert4, setLettert4] = useState(false);
  const [letterapostrophe, setLetterapostrophe] = useState(false);
  const [letters, setLetters] = useState(false);
  const [letterg2, setLetterg2] = useState(false);
  const [letterl4, setLetterl4] = useState(false);
  const [lettero3, setLettero3] = useState(false);
  const [letterr3, setLetterr3] = useState(false);
  const [lettery, setLettery] = useState(false);
  const [letterDot5, setLetterDot5] = useState(false);

  async function approvalCookieSetter() {
    const data = await fetch("/api/passcodeapproval").then((data) =>
      data.json()
    );
    console.log(data);
  }

  if (
    // LETTER N
    !lettern1 &&
    !lettern3 &&
    !lettern4 &&
    lettern2 &&
    // LETTER V
    letterv &&
    // LETTER E
    !lettere3 &&
    !lettere4 &&
    !lettere5 &&
    lettere2 &&
    lettere1 &&
    // LETTER R
    !letterr1 &&
    letterr2 &&
    letterr3 &&
    // LETTER B
    letterb &&
    // LETTER I
    !letteri1 &&
    !letteri2 &&
    !letteri3 &&
    letteri4 &&
    // LETTER APOSTROPHE
    letterapostrophe &&
    // LETTER S
    letters &&
    // LETTER G
    !letterg1 &&
    letterg2 &&
    // LETTER L
    !letterl1 &&
    !letterl2 &&
    !letterl3 &&
    letterl4 &&
    // LETTER O
    !lettero1 &&
    !lettero2 &&
    lettero3 &&
    // LETTER Y
    lettery &&
    // LETTER DOTS
    !letterDot1 &&
    !letterDot2 &&
    !letterDot3 &&
    !letterDot4 &&
    letterDot5
  ) {
    approvalCookieSetter();
    preRequisteRecoilSetter(true);
    console.log("Condition met.");
  } else {
    preRequisteRecoilSetter(false);
  }

  return (
    <div className={styles.main}>
      <h2>
        <span
          onClick={() => setLettera(!lettera)}
          style={lettera == true ? { color: "red" } : {}}
        >
          A
        </span>
        <span
          onClick={() => setLetterl1(!letterl1)}
          style={letterl1 == true ? { color: "red" } : {}}
        >
          l
        </span>
        <span
          onClick={() => setLetterl2(!letterl2)}
          style={letterl2 == true ? { color: "red" } : {}}
        >
          l
        </span>
        <span>&nbsp;</span>
        <span
          onClick={() => setLetteri1(!letteri1)}
          style={letteri1 == true ? { color: "red" } : {}}
        >
          i
        </span>
        <span
          onClick={() => setLettern1(!lettern1)}
          style={lettern1 == true ? { color: "red" } : {}}
        >
          n
        </span>
        <span
          onClick={() => setLetterDot1(!letterDot1)}
          style={letterDot1 == true ? { color: "red" } : {}}
        >
          .
        </span>
        <span>&nbsp;</span>
        <span
          onClick={() => setLettern2(!lettern2)}
          style={lettern2 == true ? { color: "red" } : {}}
        >
          n
        </span>
        <span
          onClick={() => setLettero1(!lettero1)}
          style={lettero1 == true ? { color: "red" } : {}}
        >
          o
        </span>
        <span
          onClick={() => setLettert1(!lettert1)}
          style={lettert1 == true ? { color: "red" } : {}}
        >
          t
        </span>
        <span
          onClick={() => setLetterh1(!letterh1)}
          style={letterh1 == true ? { color: "red" } : {}}
        >
          h
        </span>
        <span
          onClick={() => setLetteri2(!letteri2)}
          style={letteri2 == true ? { color: "red" } : {}}
        >
          i
        </span>
        <span
          onClick={() => setLettern3(!lettern3)}
          style={lettern3 == true ? { color: "red" } : {}}
        >
          n
        </span>
        <span
          onClick={() => setLetterg1(!letterg1)}
          style={letterg1 == true ? { color: "red" } : {}}
        >
          g
        </span>
        <span>&nbsp;</span>
        <span
          onClick={() => setLetterr1(!letterr1)}
          style={letterr1 == true ? { color: "red" } : {}}
        >
          r
        </span>
        <span
          onClick={() => setLettere1(!lettere1)}
          style={lettere1 == true ? { color: "red" } : {}}
        >
          e
        </span>
        <span
          onClick={() => setLetterv(!letterv)}
          style={letterv == true ? { color: "red" } : {}}
        >
          v
        </span>
        <span
          onClick={() => setLettere2(!lettere2)}
          style={lettere2 == true ? { color: "red" } : {}}
        >
          e
        </span>
        <span
          onClick={() => setLetterr2(!letterr2)}
          style={letterr2 == true ? { color: "red" } : {}}
        >
          r
        </span>
        <span
          onClick={() => setLettere3(!lettere3)}
          style={lettere3 == true ? { color: "red" } : {}}
        >
          e
        </span>
        <span
          onClick={() => setLetterd(!letterd)}
          style={letterd == true ? { color: "red" } : {}}
        >
          d
        </span>
        <span
          onClick={() => setLetterDot2(!letterDot2)}
          style={letterDot2 == true ? { color: "red" } : {}}
        >
          .
        </span>
      </h2>
      <h2>
        <span
          onClick={() => setLetterj(!letterj)}
          style={letterj == true ? { color: "red" } : {}}
        >
          j
        </span>
        <span
          onClick={() => setLettero2(!lettero2)}
          style={lettero2 == true ? { color: "red" } : {}}
        >
          o
        </span>
        <span
          onClick={() => setLetteri3(!letteri3)}
          style={letteri3 == true ? { color: "red" } : {}}
        >
          i
        </span>
        <span
          onClick={() => setLettern4(!lettern4)}
          style={lettern4 == true ? { color: "red" } : {}}
        >
          n
        </span>
        <span>&nbsp;</span>
        <span
          onClick={() => setLettert2(!lettert2)}
          style={lettert2 == true ? { color: "red" } : {}}
        >
          t
        </span>
        <span
          onClick={() => setLetterh2(!letterh2)}
          style={letterh2 == true ? { color: "red" } : {}}
        >
          h
        </span>
        <span
          onClick={() => setLettere4(!lettere4)}
          style={lettere4 == true ? { color: "red" } : {}}
        >
          e
        </span>
        <span>&nbsp;</span>
        <span
          onClick={() => setLetterc(!letterc)}
          style={letterc == true ? { color: "red" } : {}}
        >
          c
        </span>
        <span
          onClick={() => setLetteru(!letteru)}
          style={letteru == true ? { color: "red" } : {}}
        >
          u
        </span>
        <span
          onClick={() => setLetterl3(!letterl3)}
          style={letterl3 == true ? { color: "red" } : {}}
        >
          l
        </span>
        <span
          onClick={() => setLettert3(!lettert3)}
          style={lettert3 == true ? { color: "red" } : {}}
        >
          t
        </span>
        <span
          onClick={() => setLetterDot3(!letterDot3)}
          style={letterDot3 == true ? { color: "red" } : {}}
        >
          .
        </span>
        <span>&nbsp;</span>
        <span
          onClick={() => setLetterb(!letterb)}
          style={letterb == true ? { color: "red" } : {}}
        >
          b
        </span>
        <span
          onClick={() => setLettere5(!lettere5)}
          style={lettere5 == true ? { color: "red" } : {}}
        >
          e
        </span>
        <span>&nbsp;</span>
        <span
          onClick={() => setLetteri4(!letteri4)}
          style={letteri4 == true ? { color: "red" } : {}}
        >
          i
        </span>
        <span
          onClick={() => setLettert4(!lettert4)}
          style={lettert4 == true ? { color: "red" } : {}}
        >
          t
        </span>
        <span
          onClick={() => setLetterapostrophe(!letterapostrophe)}
          style={letterapostrophe == true ? { color: "red" } : {}}
        >
          '
        </span>
        <span
          onClick={() => setLetters(!letters)}
          style={letters == true ? { color: "red" } : {}}
        >
          s
        </span>
        <span>&nbsp;</span>
        <span
          onClick={() => setLetterg2(!letterg2)}
          style={letterg2 == true ? { color: "red" } : {}}
        >
          g
        </span>
        <span
          onClick={() => setLetterl4(!letterl4)}
          style={letterl4 == true ? { color: "red" } : {}}
        >
          l
        </span>
        <span
          onClick={() => setLettero3(!lettero3)}
          style={lettero3 == true ? { color: "red" } : {}}
        >
          o
        </span>
        <span
          onClick={() => setLetterr3(!letterr3)}
          style={letterr3 == true ? { color: "red" } : {}}
        >
          r
        </span>
        <span
          onClick={() => setLettery(!lettery)}
          style={lettery == true ? { color: "red" } : {}}
        >
          y
        </span>
        <span
          onClick={() => setLetterDot5(!letterDot5)}
          style={letterDot5 == true ? { color: "red" } : {}}
        >
          .
        </span>
      </h2>
    </div>
  );
};

export default Heading;
