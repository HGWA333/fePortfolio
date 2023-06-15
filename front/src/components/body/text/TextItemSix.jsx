import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../font/font.css";

const TextItemSix = () => {
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
            06. 블록체인
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
              드디어 제가 이곳에 온 목적인 블록체인을 배우게 됩니다. 블록체인의
              기본 개념 그리고 블록체인의 작동 방식과 블록체인의 통신방법을
              배우고 처음으로 Linux와 Ubunt를 활용하여 GoLang을 설치하여 Geth를
              활용하여 블록을 생성하고, 트랜잭션을 발생시켜 그 기록들을
              DataBase에 저장하여 검색을 했을 때 DataBase에 저장된 것을 가져오게
              할 수 있는 Scan사이트를 만들 수 있게 되었습니다. 앞서 적은 내용은
              상당한 부분이 요약이 되었지만 Scan사이트를 만드는 과정은 매우
              험난했습니다.블록체인의 작동 방식과 블록체인의 통신방법을 코드로
              진행되는 걸 따라가다 보니 그 길이 험난했습니다.이후 Solidity를
              이용하여 컨트랙트를 만들고, Truffle를 사용하여 컨트랙트를
              배포하거나 혹은 remix.ethereum.org 사이트를 통하여 배포를 하는
              방법을 알았고, Pinata 사이트를 활용하여 IPFS 분산 저장을 하고 또
              저장된 것을 호출하여 가져오는 방법을 알게 되었습니다. 그리고
              블록체인도 웹 개발의 일부분이라는 걸 느끼게 됩니다.
            </motion.h5>
          </SlideWarp>
        )}
      </AnimatePresence>
    </>
  );
};

export default TextItemSix;

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
    background-color: #cc5229;
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
    background-color: #5ab5b2;
    color: #f7f2d9;
    padding: 22px 19px 22px 19px;
    font-size: 0.98rem;
    z-index: 1;
    font-weight: 300;
    line-height: 210%;
    text-align: left;
  }
  @media (min-width: 320px) {
    h5 {
      font-size: clamp(1.61rem, 3vw, 1.67rem);
    }
  }

  @media (min-width: 768px) {
    h5 {
      font-size: clamp(0.98rem, 3vw, 1rem);
    }
  }
`;
