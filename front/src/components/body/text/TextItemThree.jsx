import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../font/font.css";

const TextItemThree = () => {
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
            03. Javascript 그리고 NodeJs
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
              HTML5 그리고 CSS에 적응하던 중 JavaScript에 대해서 알게 되었고
              이후 NodeJs를 접하게 되었습니다. JavaScript로 지금에서야 선언형
              프로그래밍, 명령형 프로그래밍, 반응형 프로그래밍이 있다는 걸 알게
              되었지만, 저 당시 처음 접하였을 때 든 생각은 “내가 과연 이것을
              제대로 사용할 수 있을까?” 였습니다. 처음으로 변수를 선언하는
              방식과 그리고 각 어떤 상황에 따라 분기점을 만드는 조건문 그리고 그
              조건을 충족하기 위해 사용하는 반복문을 사용하여 원하는 결과 값을
              만들어내야 하는데, 이것이 어떻게 작동하고 어떤 식으로 돌아가는지와
              같은 사용법에 관한 것으로 어떻게 사용을 하고 활용을 해야 하는지에
              대한 감이 아예 잡히지 않았습니다. 이후 NodeJs를 접하였고 NodeJs
              역시 JavaScript를 처음 접했을 때와 느낌이 같았습니다.
            </motion.h5>
          </SlideWarp>
        )}
      </AnimatePresence>
    </>
  );
};

export default TextItemThree;

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
    background-color: #008e74;
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
    background-color: #745a9e;
    color: #f7f2d9;
    padding: 22px 19px 22px 19px;
    font-size: 0.94rem;
    z-index: 1;
    font-weight: 300;
    line-height: 210%;
    text-align: left;
  }
  @media (min-width: 320px) {
    h5 {
      font-size: clamp(1.62rem, 3vw, 1.64rem);
    }
  }

  @media (min-width: 768px) {
    h5 {
      font-size: clamp(0.93rem, 3vw, 0.97rem);
    }
  }
`;
