import { useState } from 'react';
import { Personality } from '../../data/personality';

export interface ActivePersonalityTypeSelector {
  activePersonalities: Personality[];

  activate(personality: Personality): void;
  deactivatePersonality(personality: Personality): void;
  toggle(personality: Personality): void;
  isActive(personality: Personality): boolean;
}

export const useActivePersonalityTypes = (): ActivePersonalityTypeSelector => {
  const [activePersonalities, setActivePersonalities] = useState<Personality[]>(
    []
  );
  return {
    activePersonalities,

    activate(personality: Personality) {
      if (!activePersonalities.includes(personality)) {
        setActivePersonalities([...activePersonalities, personality]);
      }
    },

    deactivatePersonality(personality: Personality) {
      if (activePersonalities.includes(personality)) {
        setActivePersonalities(
          activePersonalities.filter((p) => p !== personality)
        );
      }
    },

    toggle(personality: Personality) {
      if (activePersonalities.includes(personality)) {
        setActivePersonalities(
          activePersonalities.filter((p) => p !== personality)
        );
      } else {
        setActivePersonalities([...activePersonalities, personality]);
      }
    },

    isActive(personality: Personality): boolean {
      return activePersonalities.includes(personality);
    },
  };
};
