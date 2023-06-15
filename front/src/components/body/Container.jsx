import BodyComponent from "./Components";
import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import { setBtn } from "../../modules/btn.js";
import "../../css/modals.css";

const BodyContainer = () => {
  const [modalOpen, setModalOpen] = useState(0);
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modalOpen");
    } else {
      document.body.classList.remove("modalOpen");
    }
  }, [modalOpen]);

  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeModal = () => {
    if (isClosing) return;

    setIsClosing(true);

    gsap.to(modalRef.current, {
      scale: 0.7,
      opacity: 0,
      duration: 0.54,
      ease: "power3.in",
      onComplete: () => {
        modalRef.current.display = "none";
        setModalOpen(0);
        setIsClosing(false);
      },
    });
  };

  useEffect(() => {
    const modalCloseHandler = () => {};

    if (modalOpen) {
      gsap.fromTo(
        modalRef.current,
        {
          scale: 0.7,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          onStart: () => {
            modalRef.current.style.display = "block";
            modalRef.current.style.overflow = "hidden";
          },
        }
      );
    } else {
      modalCloseHandler();
    }

    return () => {
      modalRef.current?.removeEventListener("closeModal", modalCloseHandler);
    };
  }, [modalOpen, setModalOpen]);

  const modalHandlers = {
    modalOpen: modalOpen,
    setModalOpen: setModalOpen,
    modalRef: modalRef,
    closeModal: closeModal,
  };

  const dispatch = useDispatch();
  const buttons = useSelector(state => state.btn);
  const MouseEnter = id => {
    dispatch(setBtn({ id, isHovering: true }));
  };

  const MouseLeave = id => {
    dispatch(setBtn({ id, isHovering: false }));
  };

  const pathDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: i => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const [viewBox, setViewBox] = useState("0 0 1440 6600");

  useEffect(() => {
    function updateViewBox() {
      const width = window.innerWidth;

      if (width >= 768) {
        setViewBox("0 0 1440 6600");
      } else {
        setViewBox("0 100 1440 12500");
      }
    }

    updateViewBox();
    window.addEventListener("resize", updateViewBox);

    return () => {
      window.removeEventListener("resize", updateViewBox);
    };
  }, []);
  const btnHandlers = {
    viewBox: viewBox,
    pathDraw: pathDraw,
    buttons: buttons,
    MouseEnter: MouseEnter,
    MouseLeave: MouseLeave,
  };

  const AnimFeTurbulence = animated("feTurbulence");
  const AnimFeDisplacementMap = animated("feDisplacementMap");
  const [textHover, setTextHover] = useState(false);
  const [{ freq, factor, scale, opacity }] = useSpring(
    () => ({
      reverse: textHover,
      to: { factor: 90, opacity: 1, scale: 0.95, freq: "0.0, 0.0" },
      from: { factor: 0, opacity: 0.9, scale: 0.97, freq: "0.0175, 0.0" },
      config: { duration: 5000 },
    }),
    [textHover]
  );

  const springFilterHandlers = {
    AnimFeTurbulence: AnimFeTurbulence,
    AnimFeDisplacementMap: AnimFeDisplacementMap,
    textHover: textHover,
    setTextHover: setTextHover,
    freq: freq,
    factor: factor,
    scale: scale,
    opacity: opacity,
  };

  const transRef = useRef(null);

  const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 300,
    (x - rect.left - rect.width / 2) / 300,
    1.01,
  ];

  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [{ xys }, api] = useSpring(() => ({ xys: [0, 0, 1] }), []);

  const handleMouseLeave = () =>
    api.start({
      xys: [0, 0, 1],
    });

  const handleMouseMove = e => {
    const rect = transRef.current.getBoundingClientRect();
    api.start({
      xys: calc(e.clientX, e.clientY, rect),
    });
  };

  const transHoverHandlers = {
    transRef: transRef,
    xys: xys,
    trans: trans,
    handleMouseLeave: handleMouseLeave,
    handleMouseMove: handleMouseMove,
  };

  return (
    <>
      <BodyComponent
        btnHandlers={btnHandlers}
        modalHandlers={modalHandlers}
        springFilterHandlers={springFilterHandlers}
        transHoverHandlers={transHoverHandlers}
      ></BodyComponent>
    </>
  );
};

export default BodyContainer;
