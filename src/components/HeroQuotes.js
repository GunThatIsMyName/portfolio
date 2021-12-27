import React, { useEffect, useState } from "react";

const words = ["배움을 배고파 하는", "어제 보다 성장하는","실패를 통해 성장하는"];

function HeroQuotes() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 700);
    return () => clearTimeout(timeout2);
  }, [blink]);

  const loop = (timeout) => {
    if (index === words.length) {
        return;
    }

    if(index === words.length -1 && subIndex === words[index].length +1){
        return clearTimeout(timeout);
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) =>prev + 1);
      return ;
    }
  };


  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 200);

    loop(timeout);

    return () => clearTimeout(timeout);
// eslint-disable-next-line
  }, [subIndex, index, reverse]);

  return <h1>{`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}</h1>;
}

export default HeroQuotes;
