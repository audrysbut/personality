import { useState } from "react";
import { Personality } from "../../data/personality";
import { ActivePersonalityTypeSelector } from "../../pages/inspect/active-personality-type-selector";
import { getPersonalityTypeColor } from "../../tools/personality-tools";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlined from "@mui/icons-material/ToggleOnOutlined";
import { Trait } from "../../data/traits.ts/trait";

interface PersonalityDetailTitleProps {
  personality: Personality;
  states: ActivePersonalityTypeSelector;
  traitState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  traits: Trait[] | undefined;
}

function navigateTo(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

interface SwitchProps {
  traitState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
const Switch = ({ traitState }: SwitchProps) => {
  const [state, setState] = traitState;
  const size = "1.8rem";
  const item = state ? (
    <ToggleOnOutlined style={{ width: size, height: size }} />
  ) : (
    <ToggleOffOutlinedIcon style={{ width: size, height: size }} />
  );
  const changeState = () => setState((prev) => !prev);
  return (
    <span style={{ paddingRight: "0.2rem" }} onClick={changeState}>
      {item}
    </span>
  );
};

export const PersonalityDetailTitle = ({
  personality,
  states,
  traitState,
  traits,
}: PersonalityDetailTitleProps) => {
  const [activeCloseButton, setActiveCloseButton] = useState(false);
  const [activeNavigateButton, setActiveNavigateButton] = useState(false);

  const closeButtonOpacity = activeCloseButton ? 0.3 : 0.1;
  const navigateButtonOpacity = activeNavigateButton ? 0.3 : 0.1;
  const { deactivatePersonality } = states;

  return (
    <div
      style={{
        background: getPersonalityTypeColor(personality, true),
        lineHeight: "1.8rem",
        alignItems: "center",
        fontWeight: "bold",
        position: "relative",
        userSelect: "none",
      }}
    >
      {`${personality.name} (${personality.type}) [${personality.rarity}%]`}

      <span
        style={{
          right: "0rem",
        }}
      ></span>
      <span style={{ right: 0, bottom: 0, top: 0, position: "absolute" }}>
        {traits && traits.length && <Switch traitState={traitState} />}
        <DehazeIcon
          style={{
            height: "100%",
            background: `rgba(0,0,0,${navigateButtonOpacity})`,
            borderRight: "1px solid black",
            borderLeft: "1px solid black",
          }}
          onMouseOver={() => setActiveNavigateButton(true)}
          onMouseLeave={() => setActiveNavigateButton(false)}
          onClick={() => navigateTo(personality.moreInfoUrl)}
        />
        <CloseIcon
          style={{
            background: `rgba(0,0,0,${closeButtonOpacity})`,
            height: "100%",
          }}
          onMouseOver={() => setActiveCloseButton(true)}
          onMouseLeave={() => setActiveCloseButton(false)}
          onClick={() => deactivatePersonality(personality)}
        />
      </span>
    </div>
  );
};
