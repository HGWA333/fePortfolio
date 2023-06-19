import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../font/font.css";

const TextItemFour = () => {
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
            04. 첫번 째 팀 프로젝트
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
              블록체인 개발자 양성과정 4개월차에 제 인생에 있어 처음으로 팀
              프로젝트를 참여했습니다. 첫 프로젝트는 HTML,CSS,JavaScript, NodeJs
              Express를 활용한 MVC패턴을 사용한 프로젝트입니다. 참여한 인원은 총
              4명 그리고 기간은 2주간 진행을 하였고, 제가 맡은 역할은 프론트
              였습니다. 제가 팀 프로젝트에 기여한건 메인페이지 UI 그리고
              동적기능을 적용했었고, 2주라는 시간동안 인터넷 검색을 하여 사용한
              코드를 어떻게 해서든 커스터마이징을 하여 “내 스스로가 컨트롤을 할
              수 있게 만들자” 였습니다. 2주라는 시간이 엄청 짧게 느껴질 정도로
              시간은 빨리 흘러갔고, 결과물에 만족을 하지 못했습니다.그리고 그때
              당시 클라이언트와 서버의 통신에 대한 개념이 부족하여 백엔드의 진행
              흐름을 파악하지 못한 아쉬움이 지금에서야 생깁니다.
            </motion.h5>
          </SlideWarp>
        )}
      </AnimatePresence>
    </>
  );
};

export default TextItemFour;

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
    background-color: #745a9e;
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
      font-size: 2.5rem;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 1.5rem;
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
    background-color: #00a497;
    color: #f7f2d9;
    padding: 22px 19px 22px 19px;
    font-size: 0.92rem;
    z-index: 1;
    font-weight: 300;
    line-height: 210%;
    text-align: left;
  }
  @media (min-width: 320px) {
    h5 {
      font-size: clamp(1.58rem, 2vw, 1.61rem);
    }
  }

  @media (min-width: 768px) {
    h5 {
      font-size: clamp(0.92rem, 3vw, 1rem);
    }
  }
`;
