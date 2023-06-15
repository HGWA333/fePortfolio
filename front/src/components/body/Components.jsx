import SvgComponent from "./item/SvgCompoentn";
import styled from "styled-components";

const BodyComponent = ({
  modalHandlers,
  btnHandlers,
  springFilterHandlers,
  transHoverHandlers,
}) => {
  return (
    <>
      <BodyContent>
        <SvgComponent
          modalHandlers={modalHandlers}
          btnHandlers={btnHandlers}
          springFilterHandlers={springFilterHandlers}
          transHoverHandlers={transHoverHandlers}
        />
      </BodyContent>
    </>
  );
};

export default BodyComponent;

const BodyContent = styled.div``;
