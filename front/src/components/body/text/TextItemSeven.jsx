import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../font/font.css";

const TextItemSeven = () => {
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
            07, 08. 기업 협약 팀 프로젝트
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
              2023년 4월 21일 블록체인 개발자 양성과정에서의 마지막 부분인 기업
              협약 프로젝트를 참여하게 되었습니다. 제가 참여한 협약 기업은
              솔라디자인이었고, 솔라디자인에서 제안한 프로젝트는 Defi사이트를
              구축하는 것입니다. 이 프로젝트에는 총 6명의 인원이 투입되었고
              기간은 총 8주라는 시간이 주어졌습니다. 제가 이 프로젝트에서 맡은
              역할은 프론트입니다. 프론트를 맡은 이유는 API를 만들어서 A와 B가
              서로 통신을 할 수 있는 데이터를 가공하는 것보다는 클라이언트 즉
              사용자 입장에서 보았을 때 UI / UX에 더 흥미를 느끼고 동적인 모션을
              활용하여 시각적인 것을 만들어 내는 것이 더 집중이 잘되고 만들어 갈
              때 고통보다는 즐거움이라는 마음이 생겨서 프론트를 선택하였습니다.
              그리고 기업 협약 프로젝트에서 Notion, Trello, GoogleDocs,
              GoogleSheet로 팀원과 각자 맡은 포지션에 대한 이슈사항 혹은
              진행사항을 공유하고 소통을 하였습니다. 이때 당시 AWS Amplify를
              알게 되어 AWS Amplify Studio, AWS Amplify Hosting, Figma를
              공부하였습니다. Figma로 Ui를 만들고 AWS Amplify Studio를 활용하여
              컴포넌트화 하여 사용하였고, AWS Amplify Hosting를 활용하여 쉽게
              배포를 할 수 있지만, 이번 기업 협약 프로젝트에서는 AWS EC2,
              Router53를 사용하여 배포하였습니다.
            </motion.h5>
          </SlideWarp>
        )}
      </AnimatePresence>
    </>
  );
};

export default TextItemSeven;

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
    background-color: #5ab5b2;
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
    background-color: #eb6159;
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
      font-size: clamp(1.75rem, 3vw, 1.9rem);
    }
  }

  @media (min-width: 768px) {
    h5 {
      font-size: clamp(0.96rem, 3vw, 1.2rem);
    }
  }
`;
