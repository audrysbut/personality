import { Personality } from '../data/cognitive-funcion-data';

export function getPersonalityTypeColor(
  personality: Personality,
  selected: boolean
): string {
  const type = personality.type;
  const intuitive = type[1] === 'N';
  const sensor = type[1] === 'S';
  const thinker = type[2] === 'T';
  const feeler = type[2] === 'F';
  const judger = type[3] === 'J';
  const perceiver = type[3] === 'P';

  const analytic = intuitive && thinker;
  if (analytic && selected) {
    return 'violet';
  }

  const diplomat = intuitive && feeler;
  if (diplomat && selected) {
    return 'lightgreen';
  }

  const sentinel = sensor && judger;
  if (sentinel && selected) {
    return 'lightblue';
  }

  if (perceiver && selected) {
    return 'yellow';
  }

  return 'white';
}