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
import { FC, useState } from "react";

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
        return <span className="color-red">No icon</span>;
    }
  };

  const element = getElement();
  const getColor = (): string => {
    switch (cognitiveFunction) {
      case Fi:
        return "text-red-500"; // Tailwind's red
      case Te:
        return "text-pink-600"; // Closest to #F6358A
      case Ne:
        return "text-orange-500"; // Tailwind's orange
      case Ni:
        return "text-fuchsia-500"; // Closest to magenta
      case Fe:
        return "text-purple-700"; // Tailwind's purple
      case Si:
        return "text-lime-500"; // Tailwind doesn't have lime, you might need to customize your colors
      case Se:
        return "text-green-500"; // Tailwind's green
      case Ti:
        return "text-gray-900"; // Closest to charcoal
      default:
        return "text-blue-500";
    }
  };
  const { show, onEnable, onDisable } = useDelayShow();
  return (
    <div
      className={`${getColor()} pr-1 relative`}
      onMouseEnter={onEnable}
      onMouseLeave={onDisable}
    >
      {show && <Tooltip text={cognitiveFunction} />}
      {element}
    </div>
  );
};

interface TooltipProps {
  text: string;
}
const Tooltip: FC<TooltipProps> = ({ text }) => {
  return (
    <div className="absolute top-6 left-6 border-1 border-black bg-black text-white rounded-0.3 rounded-md z-10 px-1">
      {text}
    </div>
  );
};

const useDelayShow = () => {
  const [show, setShow] = useState(false);
  const [nodeTimemout, setNodeTimeout] = useState(0);
  const onEnable = () => {
    const timemout = setTimeout(() => {
      setShow(true);
    }, 500);
    setNodeTimeout(timemout);
  };

  const onDisable = () => {
    setShow(false);
    clearTimeout(nodeTimemout);
  };

  return { show, onEnable, onDisable };
};
