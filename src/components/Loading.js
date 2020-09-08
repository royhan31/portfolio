import React,{useEffect} from "react";
import mojs from "@mojs/core";

export default function Loading() {
  document.body.style.backgroundColor = "#353353";

  useEffect(() => {
    const animation = new mojs.Shape({
      parent:           '#spinner',
      shape:            'circle',
      stroke:           '#FC46AD',
      strokeDasharray:  '125, 125',
      strokeDashoffset: {'0': '-125'},
      strokeWidth:      4,
      fill:             'none',
      left:             '50%',
      top:              '50%',
      angle:            {'-90': '270'},
      radius:           20,
      isShowStart:      true,
      duration:         1000,
      easing:           'back.in',
    })
    .then({
      angle:            {'-90': '270'},
      strokeDashoffset: {'-125': '-250'},
      duration:         2000,
      easing:           'cubic.out',
      onComplete () {
        this.replay(0);
      }
    });

    animation.play();
  }, []);

  return <div id="spinner"> </div>;
}
