import { CognitiveFunctionType, Ni } from '../../data/cognitive-funcion-data';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

interface CognitiveFunctionIconProps {
  cognitiveFunction: CognitiveFunctionType;
}

export const CongnitiveFunctionIcon = ({
  cognitiveFunction,
}: CognitiveFunctionIconProps) => {
  switch (cognitiveFunction) {
    case Ni:
      return <VisibilityOutlinedIcon />;
    default:
      return <ErrorOutlineOutlinedIcon />;
  }
};
