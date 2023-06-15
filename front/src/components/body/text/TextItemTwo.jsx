import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../font/font.css";

const TextItemTwo = () => {
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
            02. CSS
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
              HTML5를 접하고 CSS가 존재하는 것을 알게 되었습니다. HTML5로 구조
              뼈대를 잡는다면, CSS는 옷을 입히는 것이라고 합니다. 지금에서야 저
              말이 이해가 갔지만, 2개월 차인 저 당시에는 VScode 조작에도 애를
              먹고 있는 시기 였습니다. 그래서 “그냥 그렇구나” 하고 넘어
              갔습니다. 가장 기초중에 기초를 배우는 것인데, 모든 것이 익숙지
              않아 많이 애를 먹었습니다. 하지만 신기하고 재미있었습니다.
            </motion.h5>
          </SlideWarp>
        )}
      </AnimatePresence>
    </>
  );
};

export default TextItemTwo;

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
    background-color: #ef454a;
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
    background-color: #008e74;
    color: #f7f2d9;
    padding: 22px 19px 22px 19px;
    font-size: 1.1rem;
    z-index: 1;
    font-weight: 300;
    line-height: 210%;
    text-align: left;
  }
  @media (min-width: 320px) {
    h5 {
      font-size: clamp(1.9rem, 2vw, 1.93rem);
    }
  }

  @media (min-width: 768px) {
    h5 {
      font-size: clamp(1.07rem, 3vw, 1.1rem);
    }
  }
`;
