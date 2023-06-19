import styled from "styled-components";
import "../../css/modal/slideOne.css";

const OneModal = ({ modalRef, closeModal }) => {
  return (
    <>
      <ModalStyle ref={modalRef}>
        <div className="gridContainer">
          <div className="gridItem001">
            <div>죄송합니다. 현재 어떻게 만들지 구상 중입니다.ㅜ1</div>
            <div
              onClick={() => {
                closeModal();
              }}
            >
              이거 클릭 하면 꺼짐
            </div>
          </div>
          <div className="gridItem002"></div>
          <div className="gridItem003"></div>
          <div className="gridItem004"></div>
          <div className="gridItem005"></div>
          <div className="gridItem006"></div>
          <div className="gridItem007"></div>
          <div className="gridItem008"></div>
          <div className="gridItem009"></div>
          <div className="gridItem010"></div>
        </div>
      </ModalStyle>
    </>
  );
};

const ModalStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fa;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  border-top: 0;
  z-index: 88;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export default OneModal;
