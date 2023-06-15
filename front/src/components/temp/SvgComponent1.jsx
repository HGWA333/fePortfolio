import styled from "styled-components";
import { ReactComponent as PathCompo } from "../../svg/pathOBJ.svg";

const SvgComponent = ({}) => {
  return (
    <SvgStyle>
      <PathCompo />
    </SvgStyle>
  );
};

export default SvgComponent;

const SvgStyle = styled.div`
  #button {
    & > g {
      transition: transform 0.7s;
      &:hover {
        transform: scale(1.09);
        circle {
          stroke-width: 5.5;
          stroke-miterlimit: 10;
          stroke: #211d1e;
        }
        path {
          fill: #f1ecd5;
        }
      }
    }
    #bt1 {
      transform-origin: 456.16px 874.77px;
      &:hover circle {
        fill: #d43549;
      }
    }
    #bt2 {
      transform-origin: 708.22px 1561.67px;
      &:hover circle {
        fill: #1da159;
      }
    }
    #bt3 {
      transform-origin: 455.72px 2295.51px;
      &:hover circle {
        fill: #d43549;
      }
    }
    #bt4 {
      transform-origin: 1222.54px 2851.07px;
      &:hover circle {
        fill: #1da159;
      }
    }
    #bt5 {
      transform-origin: 557.62px 3320.42px;
      &:hover circle {
        fill: #d43549;
      }
    }
    #bt6 {
      transform-origin: 145.58px 4039.59px;
      &:hover circle {
        fill: #1da159;
      }
    }
    #bt7 {
      transform-origin: 350.45px 4553.24px;
      &:hover circle {
        fill: #d43549;
      }
    }
    #bt8 {
      transform-origin: 1199.46px 4594.2px;
      &:hover circle {
        fill: #1da159;
      }
    }
    #bt9 {
      transform-origin: 826.79px 5442.31px;
      &:hover circle {
        fill: #1da159;
      }
    }
  }
`;
