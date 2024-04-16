"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "./images/logo.png";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
//IMPORTS
export default function Home() {
  const Heater1 = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  );
  const Heater2 = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  );
  const Heater3 = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  );
  const Heater4 = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  );
  const Clap = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  );
  const OpenHH = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  );
  const PunchyKick = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  );
  const SideStick = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  );
  const Snare = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  );
  //power on off
  const [cPower, setPower] = useState(true);
  function powerHandler() {
    cPower ? setPower(false) : setPower(true);
    setSound("");
  }
  //the name of sound
  const [currentSound, setSound] = useState("");
  function soundHandler(e: any) {
    cPower ? setSound(e.target.value) : setSound("");
    e.target.value == "Heater1"
      ? Heater1.play()
      : e.target.value == "Heater2"
      ? Heater2.play()
      : e.target.value == "Heater3"
      ? Heater3.play()
      : e.target.value == "Heater4"
      ? Heater4.play()
      : e.target.value == "Clap"
      ? Clap.play()
      : e.target.value == "OpenHH"
      ? OpenHH.play()
      : e.target.value == "PunchyKick"
      ? PunchyKick.play()
      : e.target.value == "SideStick"
      ? SideStick.play()
      : e.target.value == "Snare"
      ? Snare.play()
      : "";
  }

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-[gray]"
      id="drum-machine"
    >
      <div
        className=" border-[0.7vh] m-auto h-[40vh] w-[45vw] border-[orange] bg-neutral-400 flex"
        id="display"
      >
        <div className="  w-[60%] h-[100%] flex flex-wrap	p-[2vw] gap-[0.6vw]">
          <Button
            className=" font-semibold text-[1.5vw] bg-[gray] w-[30%] h-[30%] drum-pad"
            id="Q"
            value="Heater1"
            onClick={soundHandler}
          >
            Q
          </Button>

          <Button
            className=" font-semibold text-[1.5vw] bg-[gray] w-[30%] h-[30%] drum-pad"
            id="W"
            value="Heater2"
            onClick={soundHandler}
          >
            W
          </Button>
          <Button
            className=" font-semibold text-[1.5vw] bg-[gray] w-[30%] h-[30%] drum-pad"
            id="E"
            value="Heater3"
            onClick={soundHandler}
          >
            E
          </Button>
          <Button
            className=" font-semibold text-[1.5vw] bg-[gray] w-[30%] h-[30%] drum-pad"
            id="A"
            value="Heater4"
            onClick={soundHandler}
          >
            A
          </Button>
          <Button
            className=" font-semibold text-[1.5vw] bg-[gray] w-[30%] h-[30%] drum-pad"
            id="S"
            value="Clap"
            onClick={soundHandler}
          >
            S
          </Button>
          <Button
            className=" font-semibold text-[1.5vw] bg-[gray] w-[30%] h-[30%] drum-pad"
            id="D"
            value="OpenHH"
            onClick={soundHandler}
          >
            D
          </Button>
          <Button
            className=" font-semibold text-[1.5vw] bg-[gray] w-[30%] h-[30%] drum-pad"
            id="Z"
            value="PunchyKick"
            onClick={soundHandler}
          >
            Z
          </Button>
          <Button
            className=" font-semibold text-[1.5vw] bg-[gray] w-[30%] h-[30%] drum-pad"
            id="X"
            value="SideStick"
            onClick={soundHandler}
          >
            X
          </Button>
          <Button
            className=" font-semibold text-[1.5vw] bg-[gray] w-[30%] h-[30%] drum-pad"
            id="C"
            value="Snare"
            onClick={soundHandler}
          >
            C
          </Button>
        </div>

        <div className=" block p-[0.8vw] w-[40%]">
          <div className=" w-[100%] flex justify-end	">
            <Image src={logo} alt="logo" className=" w-[2vw] h-[2vw]"></Image>
          </div>
          <div className=" justify-center w-[100%] flex flex-wrap gap-x-[10vw] gap-y-[1vw]">
            <Label className=" font-extrabold text-[1vw]">Power</Label>
            <Switch
              id="airplane-mode"
              className="data-[state=checked]:bg-[gray] data-[state=unchecked]:bg-black"
              defaultChecked
            />
          </div>
          <br></br>
          <div className=" h-[6vh] w-[70%] bg-[grey] m-auto font-bold text-[1.3vw] text-center p-[0.7vw]">
            {currentSound}
          </div>
          <br></br>
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            className="bg-[gray] w-[100%]"
            typeof="range"
            id="volume-slider"
          />
          <br></br>
          <div className=" justify-center w-[100%] flex flex-wrap gap-x-[12vw] gap-y-[1vw]">
            <Label className=" font-extrabold text-[1vw]">Bank</Label>
            <Switch
              id="airplane-mode"
              className="data-[state=checked]:bg-[gray] data-[state=unchecked]:bg-black"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
