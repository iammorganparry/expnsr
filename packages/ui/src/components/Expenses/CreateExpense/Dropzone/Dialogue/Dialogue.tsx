import { Typography } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import {
  AnimatedDots,
  ImageContainer,
  StyledDialog,
  StyledDialogContent,
  StyledLinearProgress,
  StyledTextContainer,
} from './Dialogue.styles';
import Lottie from 'react-lottie';
import searchData from '../../../../../assets/lottie/searchBar.json';
interface DialogueProps {
  open: boolean;
  progress: number;
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: searchData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Dialogue = ({ open, progress = 0 }: DialogueProps) => {
  const [jobProgress, setJobProgress] = useState<number>(0);
  const determineValue = () => jobProgress * 100;
  useEffect(() => {
    setJobProgress(progress);
    return () => {
      setJobProgress(0);
    };
  }, [progress]);
  return (
    <StyledDialog maxWidth="lg" open={open}>
      <StyledDialogContent>
        <ImageContainer>
          <Lottie autoplay options={defaultOptions} height={200} width={400} />
        </ImageContainer>
        <StyledLinearProgress variant="determinate" value={determineValue()} />
        <StyledTextContainer>
          <Typography variant="body2" color="textPrimary">
            Extracting items from receipt
          </Typography>
          <AnimatedDots />
        </StyledTextContainer>
      </StyledDialogContent>
    </StyledDialog>
  );
};
