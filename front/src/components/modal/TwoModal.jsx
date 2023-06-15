import styled from "styled-components";
import "../../css/modal/slideTwo.css";

const TwoModal = ({ modalRef, closeModal }) => {
  return (
    <>
      <ModalStyle ref={modalRef}>
        <div>
          죄송합니다. 현재 어떻게 만들지 구상 중입니다.ㅜ 빠른 시일 내에.. 2
        </div>
        <div
          onClick={() => {
            closeModal();
          }}
        >
          이거 클릭 하면 꺼짐
        </div>
      </ModalStyle>
    </>
  );
};

const ModalStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  z-index: 88;
  background-color: rgba(0, 0, 0, 0.74);
`;

export default TwoModal;
