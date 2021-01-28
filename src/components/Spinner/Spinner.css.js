import { css } from '@emotion/react';
import { colors } from 'styles';

const circleSize = '10px';
const circleOpacity = 0.5;
const timing = 1.8;

export const styles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &.inline {
    position: relative;
  }

  &.page {
    z-index: 999;
    position: fixed;
  }

  /*** LOADER ELEMENTS ***/

  /* DEFAULT = dark */
  & .spin-parts {
    color: ${colors.greyDark};
  }

  &.color-light .spin-parts {
    color: white;
  }
  &.color-dark .spin-parts {
    color: ${colors.greyDark};
  }

  &.color-default .spin-parts {
    color: ${colors.defaultDark};
  }

  &.color-info .spin-parts {
    color: ${colors.infoDark};
  }

  &.color-success .spin-parts {
    color: ${colors.successDark};
  }

  &.color-warning .spin-parts {
    color: ${colors.warningDark};
  }

  &.color-error .spin-parts,
  &.color-danger .spin-parts {
    color: ${colors.dangerDark};
  }

  .spin-parts,
  .spin-parts:before,
  .spin-parts:after {
    border-radius: 50%;
    width: ${circleSize};
    height: ${circleSize};
    animation-fill-mode: both;
    animation: loading ${timing}s infinite ease-in-out;
  }
  .spin-parts {
    opacity: ${circleOpacity};
    font-size: 0.8em;
    margin: 0 auto;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -${timing / 11}s;
    transform: translateY(-100%);
  }
  .spin-parts:before,
  .spin-parts:after {
    content: '';
    position: absolute;
    top: 0;
  }
  .spin-parts:before {
    left: calc(-${circleSize}*1.5);
    animation-delay: -${timing / 5.5}s;
  }
  .spin-parts:after {
    left: calc(${circleSize}*1.5);
  }

  /*** LOADER ANIMATION ***/

  @-webkit-keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: 0 ${circleSize} 0 calc(-${circleSize} / 2);
    }
    40% {
      box-shadow: 0 ${circleSize} 0 0;
    }
  }
  @keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: 0 ${circleSize} 0 calc(-${circleSize} / 2);
    }
    40% {
      box-shadow: 0 ${circleSize} 0 0;
    }
  }
`;
