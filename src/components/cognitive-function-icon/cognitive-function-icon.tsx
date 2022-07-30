import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import SkateboardingOutlinedIcon from "@mui/icons-material/SkateboardingOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import { CognitiveFunctionPosition } from "../../data/cognitive-function-data";
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
} from "../../data/cognitive-function-type";

interface CognitiveFunctionIconProps {
  cognitiveFunction: CognitiveFunctionType;
  position: CognitiveFunctionPosition;
}

export const CognitiveFunctionIcon = ({
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
        return <GroupsIcon />;
      case Si:
        return <BalanceOutlinedIcon />;
      default:
        return (
          <span
            style={{
              color: "red",
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
        return "red";
      case Te:
        return "#F6358A";
      case Ne:
        return "orange";
      case Ni:
        return "magenta";
      case Fe:
        return "purple";
      case Si:
        return "lime";
      case Se:
        return "green";
      case Ti:
        return "charcoal";
      default:
        return "blue";
    }
  };

  return (
    <div
      style={{
        color: getColor(),
        padding: "0.05rem",
      }}
    >
      {element}
    </div>
  );
};
