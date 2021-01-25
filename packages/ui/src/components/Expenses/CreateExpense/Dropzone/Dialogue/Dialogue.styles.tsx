import {
  Dialog,
  DialogContentText,
  LinearProgress,
  DialogContent,
} from '@material-ui/core';
import styled, { css, keyframes } from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  ${({ theme }) => css`
    height: 20px;
    background: ${theme.palette.grey[200]};
    border-radius: 10px;
    margin-bottom: ${theme.spacing(2)};
  `}
`;

export const StyledDialog = styled(Dialog)`
  -webkit-app-region: no-drag;
  ${({ theme }) => css`
    .MuiPaper-root {
      min-width: 600px;
      min-height: 350px;
      border-radius: 25px;
    }
  `}
`;

export const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
const dotElasticBefore = keyframes`
0% {
  transform: scale(1, 1);
}
25% {
  transform: scale(1, 1.5);
}
50% {
  transform: scale(1, 0.67);
}
75% {
  transform: scale(1, 1);
}
100% {
  transform: scale(1, 1);
    }
`;

const dotElastic = keyframes`
 
 0% {
   transform: scale(1, 1);
 }
 25% {
   transform: scale(1, 1);
 }
 50% {
   transform: scale(1, 1.5);
 }
 75% {
   transform: scale(1, 1);
 }
 100% {
   transform: scale(1, 1);
 }
 `;

const dotElasticAfter = keyframes`

    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 0.67);
    }
    75% {
      transform: scale(1, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
`;
export const AnimatedDots = styled.div`
  /* background-color: #9880ff; */
  ${({ theme }) => css`
 position: relative;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  margin-left: ${theme.spacing(2)};
  background-color: #9880ff;
  color: #9880ff;
  animation: ${dotElastic} 1s infinite linear;
  &::before, &::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}
&::before {
  left: -7.5px;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: ${dotElasticBefore} 1s infinite linear;
}
&::after {
  left: 7.5px;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: ${dotElasticAfter} 1s infinite linear;
}
}

 `}
`;
