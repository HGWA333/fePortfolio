import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../font/font.css";

const TextItemFive = () => {
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
            05. React 그리고 두 번째 팀 프로젝트
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
              5개월 차에 React를 배우게 되고 또 상태 관리를 해주는 라이브러리
              Redux를 배우게 됩니다. React를 배우면서 동기와 비동기의 개념
              그리고 EventLoop, CallStack, CallbackQueue가 어떤 식으로 동작을
              하는지 알게 되었습니다. 또 Redux의 작동 방식 동작도 배우고 바로 두
              번째 팀 프로젝트를 진행하게 됩니다. 이번 프로젝트는
              Redux-toolkit을 활용하여 Flux패턴을 사용한 프로젝트입니다. 총
              4명의 인원이 투입이 되었고 기간은 2주간 진행하였습니다. 이번에
              제가 팀 프로젝트에 기여한 부분은 회원가입 페이지 그리고 로그인
              페이지의 프론트 백엔드를 맡아서 진행을 했습니다. 2주간
              클라이언트와 서버와의 통신 그리고 클라이언트에서 보낸 데이터를
              서버에서 받아 DataBase에 저장하여 그것을 활용하여 로그인을 할때
              필요한 로직을 구현하는 것에 집중을 했습니다. 최종적으로 나온
              결과물을 보았을 때 역시나 만족하지 않았습니다. 그래도 두 번째
              프로젝트로 웹 개발의 시작과 끝 그리고 사이에 흐름을 파악하는
              계기가 되었습니다. 여기서 저는 프론트라는 역할이 가장 집중이 잘
              되고 흥미가 있다는 걸 알게 되었습니다.
            </motion.h5>
          </SlideWarp>
        )}
      </AnimatePresence>
    </>
  );
};

export default TextItemFive;

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
    background-color: #00a497;
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
      font-size: 2.3rem;
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
    background-color: #cc5229;
    color: #f7f2d9;
    padding: 22px 19px 22px 19px;
    font-size: 1rem;
    z-index: 1;
    font-weight: 300;
    line-height: 210%;
    text-align: left;
  }
  @media (min-width: 320px) {
    h5 {
      font-size: clamp(1.57rem, 2vw, 1.58rem);
    }
  }

  @media (min-width: 768px) {
    h5 {
      font-size: clamp(0.99rem, 3vw, 1rem);
    }
  }
`;
