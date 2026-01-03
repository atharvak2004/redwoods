import React from "react";
import styled from "styled-components";

export default function Loader() {
  return (
    <Wrapper>
      <div className="center-box">
        <img
          src="/Redwoods_logo-removebg.png"
          alt="Logo"
          className="logo"
        />

        {/* Arc 1 */}
        <div className="arc arc1"></div>

        {/* Arc 2 (opposite position but same clockwise rotation) */}
        <div className="arc arc2"></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #121212;
  display: flex;
  justify-content: center;
  align-items: center;

  .center-box {
    position: relative;
    width: 180px;
    height: 180px;
  }

  .logo {
    width: 110px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  .arc {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 3px solid transparent;
  }

  /* Arc 1 — top position */
  .arc1 {
    border-top-color: #4e5798;
    animation: rotateCW 1.6s linear infinite;
  }

  /* Arc 2 — bottom position but SAME clockwise direction */
  .arc2 {
    border-bottom-color: #54b06d;
    transform: rotate(180deg); /* shift arc to opposite side */
    animation: rotateCW 1.6s linear infinite;
  }

  @keyframes rotateCW {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
