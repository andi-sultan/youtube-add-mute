// func mute button(muteButton(true/false))
function muteAdButton(muteTheButton) {
  //   check button status (mute(false) or unmuted(true))
  let muteProp = document
    .getElementsByClassName("ytp-mute-button")[0]
    .querySelectorAll(".ytp-svg-fill")[0]
    .getAttribute("d");
  let buttonStatus;

  muteProp ===
  "m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"
    ? (buttonStatus = true) //muted
    : (buttonStatus = false); //unmuted

  if (muteTheButton !== buttonStatus) {
    for (const muteButton of document.getElementsByClassName(
      "ytp-mute-button"
    )) {
      muteButton.click();
    }
  }
}

let i = 1;
setInterval(() => {
  const vidProgessBar = document.querySelector(
    ".ytp-play-progress.ytp-swatch-background-color"
  );
  const compStyles = window.getComputedStyle(vidProgessBar);
  if (compStyles.background === "rgb(255, 204, 0)") {
    muteAdButton(true);
    i++;
  } else {
    muteAdButton(false);
    i = 0;
  }

  if (i > 0) {
    for (const skipButton of document.getElementsByClassName(
      "ytp-ad-skip-button"
    )) {
      skipButton.click();
    }
    i = 0;
  }

  for (const closeAdButtonNew of document.getElementsByClassName(
    "ytp-ad-preview-container"
  )) {
    closeAdButtonNew.click();
  }

  for (const closeAdButton of document.getElementsByClassName(
    "ytp-ad-overlay-close-button"
  )) {
    closeAdButton.click();
  }
}, 300);
