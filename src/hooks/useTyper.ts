import React, { useEffect, useState } from "react";

export const useTyper = () => {
  const text1 =
    'Can you give me the BSR keyword under category "computer monitor" at Amazon? I need Top5 BSR keyword for past 6 months\' data, draw me a graph of "Line Charts", y-axis=Monthly Sales, x-axis=time';
  const text2 =`TOP-5 BSR keyword under category "computer monitor" at Amazon is:\n1.computer monitor\n2.computer screen\n3.computer display\n4.monitor\n5.screen\nWith a monthly GMV of $38.47M and $299.95 on average price. Top sellers are Samsung, Acer, ASUS, KOORUI and dell. Growth in this market is slow with about 0.5% up in GMV month to month. Trending here is bigger and thinner screen, wide-bend screen has a month GMV growth of 6.2%. I\'m able to find 289 keywords and misspelling-keywords and here are the Top5 keywords with its "Monthly Sales" and time manner data in Line Charter:`
  const [state, setState] = useState({ typedText1: "", typedText2: "", mode: "person" });
  let text1len = text1.length;
  let text2len = text2.length;
  useEffect(() => {
    const timer1 = setInterval(() => {
      setState((pre) => {
        if (pre.mode != "text1") {
          return pre;
        } else if (pre.mode == "text1" && pre.typedText1.length < text1len) {
          return { ...pre, typedText1: text1.slice(0, pre.typedText1.length + 1) };
        } else if (pre.mode == "text1" && pre.typedText1.length >= text1len) {
          return { ...pre, mode: "ma" };
        }
        return pre;
      });
    }, 20);

    const timer2 = setInterval(() => {
      setState((pre) => {
        if (pre.mode == "text2" && pre.typedText2.length < text2len) {
          return { ...pre, typedText2: text2.slice(0, pre.typedText2.length + 1) };
        } else if (pre.mode == "text2" && pre.typedText2.length >= text2len) {
          return {
            ...pre,
            mode: "title"
          };
        }
        return pre;
      });
    }, 10);

    return function () {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);
  return { state, setState };
};
