import React from "react";
import ResultItem from "../componenets/ResultItem";
import ResultsList from "../componenets/ResultsList";

const QuizResultsPage = ({ quizList }) => {
  console.log(quizList);
  //need to pass in results from kanjiCard here.
  const results1 = [
    {
      kanjiData: {
        kanji: "村",
        meanings: ["village", "town"],
        readings: {
          pinyin: ["cun1"],
          korean_r: ["chon"],
          korean_h: ["촌"],
          vietnam: ["Thôn"],
          ja_on: ["ソン"],
          ja_kun: ["むら"],
        },
      },
      isCorrect: true,
    },
    {
      kanjiData: {
        kanji: "人",
        meanings: ["person"],
        readings: {
          pinyin: ["ren2"],
          korean_r: ["in"],
          korean_h: ["인"],
          vietnam: ["Nhân"],
          ja_on: ["ジン", "ニン"],
          ja_kun: ["ひと", "-り", "-と"],
        },
      },
      isCorrect: true,
    },
    {
      kanjiData: {
        kanji: "休",
        meanings: ["rest", "day off", "retire", "sleep"],
        readings: {
          pinyin: ["xiu1"],
          korean_r: ["hyu"],
          korean_h: ["휴"],
          vietnam: ["Hưu"],
          ja_on: ["キュウ"],
          ja_kun: ["やす.む", "やす.まる", "やす.める"],
        },
      },
      isCorrect: false,
    },
    {
      kanjiData: {
        kanji: "立",
        meanings: ["stand up", "rise", "set up", "erect"],
        readings: {
          pinyin: ["li4"],
          korean_r: ["rib"],
          korean_h: ["립"],
          vietnam: ["Lập"],
          ja_on: ["リツ", "リュウ", "リットル"],
          ja_kun: [
            "た.つ",
            "-た.つ",
            "た.ち-",
            "た.てる",
            "-た.てる",
            "た.て-",
            "たて-",
            "-た.て",
            "-だ.て",
            "-だ.てる",
          ],
        },
      },
      isCorrect: false,
    },
    {
      kanjiData: {
        kanji: "中",
        meanings: ["in", "inside", "middle", "mean", "center"],
        readings: {
          pinyin: ["zhong1", "zhong4"],
          korean_r: ["jung"],
          korean_h: ["중"],
          vietnam: ["Trung", "Trúng"],
          ja_on: ["チュウ"],
          ja_kun: ["なか", "うち", "あた.る"],
        },
      },
      isCorrect: true,
    },
    {
      kanjiData: {
        kanji: "草",
        meanings: ["grass", "weeds", "herbs", "pasture", "write", "draft"],
        readings: {
          pinyin: ["cao3"],
          korean_r: ["cho"],
          korean_h: ["초"],
          vietnam: ["Thảo"],
          ja_on: ["ソウ"],
          ja_kun: ["くさ", "くさ-", "-ぐさ"],
        },
      },
      isCorrect: true,
    },
    {
      kanjiData: {
        kanji: "十",
        meanings: ["ten"],
        readings: {
          pinyin: ["shi2"],
          korean_r: ["sib"],
          korean_h: ["십"],
          vietnam: ["Thập"],
          ja_on: ["ジュウ", "ジッ", "ジュッ"],
          ja_kun: ["とお", "と", "そ"],
        },
      },
      isCorrect: false,
    },
    {
      kanjiData: {
        kanji: "正",
        meanings: ["correct", "justice", "righteous", "10**40"],
        readings: {
          pinyin: ["zheng4", "zheng1"],
          korean_r: ["jeong"],
          korean_h: ["정"],
          vietnam: ["Chánh", "Chính"],
          ja_on: ["セイ", "ショウ"],
          ja_kun: ["ただ.しい", "ただ.す", "まさ", "まさ.に"],
        },
      },
      isCorrect: false,
    },
  ];

  const renderCorrectItems = quizList
    .filter((result) => result.isCorrect)
    .map((result, index) => {
      return <ResultItem key={index} {...result} />;
    });

  const renderIncorrectItems = quizList
    .filter((result) => !result.isCorrect)
    .map((result, index) => {
      return <ResultItem key={index} {...result} />;
    });

  return (
    <div>
      <ResultsList headerText={"Correct"}> {renderCorrectItems} </ResultsList>
      <ResultsList headerText={"Incorrect"}>{renderIncorrectItems}</ResultsList>
    </div>
  );
};

export default QuizResultsPage;
