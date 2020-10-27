import React from "react";
import moment from "moment";

// 복잡한 계산이있을때 memorization으로 사용
const MyMemo = () => {
  const getLength = (w) => {
    console.log(
      "getLength() 호출됨! :::: " + moment().format("YY/MM/DD hh:mm:ss:ms")
    );
    return w.length;
  };

  const words = ["City", "Wisdom", "Deagyu", "Jeju", "Jeju", "Wisdom"];

  const [myCount, setMyCount] = React.useState(0);

  const [myIndex, setMyInex] = React.useState(0);

  const [myWord, setMyWord] = React.useState(words[myIndex]);

  // React.useEffect(() => {
  //   setMyState({
  //     ...myState,
  //     len: getLength(myState.word),
  //   });
  // }, [myState.word]);

  // React.useEffect(() => {
  //   setMyLen(getLength(myWord));
  // }, [myWord]);

  // 아래 문법을 합친게 useMemo
  // const [myLen, setMyLen] = React.useState(myWord.length);
  // React.useEffect(() => {
  //   setMyLen(getLength(myWord));
  // }, [myWord]);

  const myLen = React.useMemo(() => {
    return getLength(myWord);
  }, [myWord]);

  return (
    <div>
      <h2>MyMemo</h2>
      <p>
        {myIndex}번째 단어 "{myWord}"의 길이 : {myLen}
      </p>
      <button


        onClick={() => {
          const next = (myIndex + 1) % words.length;
          setMyInex(next);
          setMyCount(myCount + 1);
          setMyWord(words[next]);
        }}
      >
        {/* 버튼({myState.count}) */}
        버튼({myCount})
      </button>
    </div>
  );
};

export default MyMemo;
