import styled from "styled-components";

const SixModal = ({ modalRef, closeModal }) => {
  return (
    <>
      <ModalStyle ref={modalRef}>
        <div>
          죄송합니다. 현재 어떻게 만들지 구상 중입니다.ㅜ 빠른 시일 내에.. 6
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
  background-color: rgba(0, 0, 0, 0.74);
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  z-index: 88;
  overflow-y: scroll;
`;

export default SixModal;
