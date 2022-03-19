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
import SkateboardingOutlinedIcon from '@mui/icons-material/SkateboardingOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { CogntiveFunctionPosition } from '../../data/cognitive-function-roles';

interface CognitiveFunctionIconProps {
  cognitiveFunction: CognitiveFunctionType;
  position: CogntiveFunctionPosition;
}

export const CongnitiveFunctionIcon = ({
  cognitiveFunction,
  position,
}: CognitiveFunctionIconProps) => {
  const getElement = (): JSX.Element => {
    switch (cognitiveFunction) {
      case Ni:
        return <VisibilityOutlinedIcon />;
      case Te:
        return <LanOutlinedIcon />;
      case Fi:
        return <FavoriteOutlinedIcon />;
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
            }}
          >
            No icon
          </span>
        );
    }
  };

  const element = getElement();
  const getColor = (): string => {
    switch (cognitiveFunction) {
      case Fi:
        return 'red';
      case Te:
        return '#F6358A';
      case Ne:
        return 'orange';
      case Ni:
        return 'magenta';
      case Fe:
        return 'tomato';
      case Si:
        return 'lime';
      case Se:
        return 'green';
      case Ti:
        return 'charcoal';
      default:
        return 'blue';
    }
  };

  return (
    <div
      style={{
        color: getColor(),
      }}
    >
      {element}
    </div>
  );
};
