import SoundData from "../data/sounds.json";

export function LoadSound() {
  const audioDict = {};

  SoundData.forEach((el) => {
    const { dataKey } = el;
    let currentAudio = new Audio(require(`../sounds/${dataKey}.ogg`).default);
    currentAudio.loop = true;
    audioDict[dataKey] = currentAudio;
  });

  return audioDict;
}

export function numberToMinute(num) {
  return Math.floor(num / 60);
}

export function numberToSeconds(num) {
  return num % 60;
}

export const colorPallete = [
  "rgb(20, 97, 75)",
  "rgb(255, 206, 26)",
  "rgb(254, 190, 18)",
  "rgb(250, 121, 0)",
  "rgb(241, 107, 107)",
  "rgb(229, 75, 75)",
  "rgb(219, 51, 78)",
  "rgb(249, 152, 153)",
  "rgb(204, 137, 162)",
  "rgb(171, 38, 105)",
  "rgb(203, 146, 226)",
  "rgb(73, 64, 170)",
  "rgb(28, 18, 139)",
  "rgb(82, 186, 213)",
  "rgb(52, 152, 219)",
  "rgb(41, 54, 110)",
  "rgb(99, 211, 134)",
  "rgb(26, 188, 156)",
  "rgb(92, 229, 180)",
  "rgb(52, 87, 115)",
  "all",
];

export const APP_NAME = "Noisli";
