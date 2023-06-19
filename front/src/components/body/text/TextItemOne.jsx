import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../font/font.css";

const TextItemOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <OpenWarp
        onClick={toggleOpen}
        layout
        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <FrameBox>
          <motion.h1
            whileHover={{ borderRadius: "14px 14px 0px 0px", scale: 0.99 }}
          >
            01. 웹 개발의 첫 시작
          </motion.h1>
        </FrameBox>
      </OpenWarp>
      <AnimatePresence>
        {isOpen && (
          <SlideWarp>
            <motion.h5
              whileHover={{ borderRadius: "0px 0px 14px 14px" }}
              layout
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              2023년 8월 23일 제 인생에 있어 태어나서 처음으로 늦은 나이에
              프로그래밍 세계에 처음으로 입문을 하게 되었습니다. 시작은
              블록체인에 관심이 생긴 것이 발단이 되었고, 블록체인을 검색을
              하다가 우연인지 필연인지 국가에서 지원하는 과정 중 블록체인 개발자
              양성과정이 있어 그 과정을 신청하고 9개월간 교육을 듣게 되었습니다.
              교육의 첫 시작은 VScode 설치 그리고 HTML5인 HTML Document와 첫
              만남이었습니다. HTML5를 접하고 그때 당시의 느낌은 “이거 앞으로
              순탄치 않겠는데?” 였고, 그때 받은 느낌 그대로 9개월간 순탄치
              않았습니다.
            </motion.h5>
          </SlideWarp>
        )}
      </AnimatePresence>
    </>
  );
};

export default TextItemOne;

const OpenWarp = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f2d9;
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
`;

const FrameBox = styled(motion.div)`
  padding: 13px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  background-color: #f7f2d9;

  h1 {
    border: 2px solid black;
    background-color: #fbd26b;
    font-family: ComBold;
    color: #221e1f;
    width: 100%;
    padding: 15px 19px 15px 19px;
    font-size: 1.9rem;
    font-weight: 900;
    letter-spacing: 0.38ch;
    z-index: 1;
    text-align: left;
  }

  @media (min-width: 320px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 1.9rem;
    }
  }
`;

const SlideWarp = styled(motion.div)`
  position: absolute;
  height: auto;
  padding: 13px;
  display: flex;
  flex-direction: column;
  background: #f7f2d9;
  border-radius: 0px 0px 20px 20px;
  h5 {
    border: 2px solid black;
    letter-spacing: 0.2ch;
    font-family: ComFamliy;
    background-color: #ef454a;
    color: #f7f2d9;
    padding: 22px 19px 22px 19px;
    font-size: 1.1rem;
    z-index: 1;
    font-weight: 100;
    line-height: 210%;
    text-align: left;
  }

  @media (min-width: 320px) {
    h5 {
      font-size: clamp(1.7em, 2vw, 1.78rem);
    }
  }

  @media (min-width: 768px) {
    h5 {
      font-size: clamp(1.07rem, 3vw, 1.1rem);
    }
  }
`;
