import React, { useState } from "react";

function DrumSound() {
  return (
    <>
      <audio
        id="audioq"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      ></audio>
      <audio
        id="audiow"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      ></audio>
      <audio
        id="audioe"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      ></audio>
      <audio
        id="audioa"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      ></audio>
      <audio
        id="audios"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      ></audio>
      <audio
        id="audiod"
        src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      ></audio>
      <audio
        id="audioz"
        src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      ></audio>
      <audio
        id="audiox"
        src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      ></audio>
      <audio
        id="audioc"
        src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      ></audio>
    </>
  );
}

export default DrumSound;
