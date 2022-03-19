import {
  CognitiveFunctionType,
  Fe,
  Fi,
  Ne,
  Ni,
  Se,
  Si,
  Te,
  Ti,
} from '../../data/cognitive-funcion-data';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SkateboardingOutlinedIcon from '@mui/icons-material/SkateboardingOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

interface CognitiveFunctionIconProps {
  cognitiveFunction: CognitiveFunctionType;
}

export const CongnitiveFunctionIcon = ({
  cognitiveFunction,
}: CognitiveFunctionIconProps) => {
  switch (cognitiveFunction) {
    case Ni:
      return <VisibilityOutlinedIcon />;
    case Te:
      return <LanOutlinedIcon />;
    case Fi:
      return <FavoriteBorderOutlinedIcon />;
    case Se:
      return <SkateboardingOutlinedIcon />;
    case Ne:
      return <TipsAndUpdatesOutlinedIcon />;
    case Ti:
      return <SettingsOutlinedIcon />;
    case Fe:
      return <ConnectWithoutContactOutlinedIcon />;
    case Si:
      return <BalanceOutlinedIcon />;
    default:
      return (
        <span
          style={{
            color: 'red',
            width: 'auto',
          }}
        >
          No icon
        </span>
      );
  }
};
