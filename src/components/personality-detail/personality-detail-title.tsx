import { useState } from "react";
import { Personality } from "../../data/personality";
import { ActivePersonalityTypeSelector } from "../../pages/inspect/active-personality-type-selector";
import { getPersonalityTypeColor } from "../../tools/personality-tools";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

interface PersonalityDetailTitleProps {
  personality: Personality;
  states: ActivePersonalityTypeSelector;
}

export const PersonalityDetailTitle = ({
  personality,
  states,
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
      <span
        style={{
          right: 0,
          bottom: 0,
          top: 0,
          position: "absolute",
        }}
      >
        <DehazeIcon
          style={{
            height: "100%",
            background: `rgba(0,0,0,${navigateButtonOpacity})`,
            borderRight: "1px solid black",
            borderLeft: "1px solid black",
          }}
          onMouseOver={() => setActiveNavigateButton(true)}
          onMouseLeave={() => setActiveNavigateButton(false)}
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
