import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../font/font.css";

const TextItemEight = () => {
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
            09. 블록체인 과정 수료 및 취업준비
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
              블록체인 개발자 양성과정 교육을 듣기 전까지 웹 개발에 대한 생각은
              해본 적도 없고 관심도 흥미도 없고 이런 것이 있는 줄도 몰랐습니다.
              교육을 듣는 초, 중반까지도 블록체인은 안배우고 왜 웹 페이지를
              제작하는 내용을 배우는지 항상 의아했고, “내가 이걸 왜하고
              있지?”라는 생각도 수시로 했고 그러다 보니 교육 내용 자체가 재미가
              없고 “그냥 그렇구나” 라는 식으로 흘러갔습니다. 하지만 교육을 계속
              받다가 어느 순간부터 웹 개발의 시작과 끝을 알게 되고 그 사이에
              흐름들과 사이사이에 연결 되는 것들이 합쳐져 어떤 목적성을 가진
              기능을 하는 사이트가 개발이 되는 걸 깨닫고 흥미와 관심이 생기기
              시작했습니다. 블록체인 역시 웹 개발에 있어 일부분이라는 걸 깨닫게
              되고, 하나의 기능을 하는 도구라는 인식이 생겼습니다. 늦은 나이에
              웹 개발을 배우게 되고, 또 제가 배우고 있는 것이 웹 개발이라는 걸
              깨닫는 시점도 교육을 받는 시점에서 중, 후반쯤 되서야 알게
              되었습니다. 이건 웹 개발하는 것에 있어 제 스스로가 부족한 점이
              많다는 것이고, 이것을 해결 하기 위해 부족한 점을 채우면 또 다른
              부족한 점이 보일 수 있도록 제 스스로 항상 겸손한 자세로 무언가를
              배울 준비를 하고 있어야 겠다는 생각을 하고 있고 또 그것을 실행하고
              유지하려고 습관화 하고 있습니다. 여기까지가 9개월 간 제 인생에
              있어 웹 개발을 하기 위한 여정이었습니다. 여기까지 글을 모두
              읽으셨다면 읽어주셔서 진심으로 감사합니다.
            </motion.h5>
          </SlideWarp>
        )}
      </AnimatePresence>
    </>
  );
};

export default TextItemEight;

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
    background-color: #eb6159;
    font-family: ComBold;
    color: #f7f2d9;
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
      font-size: 2.19rem;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 1.9rem;
    }
  }
`;

const SlideWarp = styled(motion.div)`
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
    background-color: #ffdf85;
    color: #221e1f;
    padding: 22px 19px 22px 19px;
    font-size: 1.1rem;
    z-index: 1;
    font-weight: 300;
    line-height: 210%;
    text-align: left;
  }
  @media (min-width: 320px) {
    h5 {
      font-size: clamp(1.7rem, 2vw, 1.9rem);
    }
  }

  @media (min-width: 768px) {
    h5 {
      font-size: clamp(1.08rem, 3vw, 1.1rem);
    }
  }
`;
