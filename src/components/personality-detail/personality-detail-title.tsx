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

function navigateTo(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function useOpacity(active: boolean) {
  return active ? "bg-opacity-30" : "bg-opacity-10";
}

export const PersonalityDetailTitle = ({
  personality,
  states,
}: PersonalityDetailTitleProps) => {
  const [activeCloseButton, setActiveCloseButton] = useState(false);
  const [activeNavigateButton, setActiveNavigateButton] = useState(false);

  const closeButtonOpacity = useOpacity(activeCloseButton);
  const navigateButtonOpacity = useOpacity(activeNavigateButton);

  const { deactivatePersonality } = states;
  return (
    <div
      className={`${getPersonalityTypeColor(
        personality,
        true
      )} text-center border-1 border-black select-none font-bold relative`}
    >
      {`${personality.name} (${personality.type}) [${personality.rarity}%]`}

      <span className="absolute right-0 top-0 flex">
        <DehazeIcon
          className={`border-r border-l border-solid border-black bg-black ${navigateButtonOpacity}`}
          onMouseOver={() => setActiveNavigateButton(true)}
          onMouseLeave={() => setActiveNavigateButton(false)}
          onClick={() => navigateTo(personality.moreInfoUrl)}
        />
        <CloseIcon
          className={`bg-black ${closeButtonOpacity}`}
          onMouseOver={() => setActiveCloseButton(true)}
          onMouseLeave={() => setActiveCloseButton(false)}
          onClick={() => deactivatePersonality(personality)}
        />
      </span>
    </div>
  );
};
