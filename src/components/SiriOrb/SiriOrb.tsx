import BlueMiddle from "./svgs/BlueMiddle/BlueMiddle";
import BlueRight from "./svgs/BlueRight/BlueRight";
import GreenLeft from "./svgs/GreenLeft/GreenLeft";
import GreenLeftFirst from "./svgs/GreenLeftFirst/GreenLeftFirst";
import HighLight from "./svgs/HighLight/HighLight";
import Intersect from "./svgs/Intersect/Intersect";
import PinkLeft from "./svgs/PinkLeft/PinkLeft";
import PinkTop from "./svgs/PinkTop";

import css from "./SiriOrb.module.css";

const SiriOrb = () => {
  return (
    <div className={css.root}>
      <div className={css.rainbowBg}></div>
      <div className={css.rainbowContainer}>
        <PinkTop />
        <PinkLeft />
        <BlueMiddle />
        <BlueRight />
        <Intersect />
        <GreenLeft />
        <GreenLeftFirst />
      </div>
      <div className={css.rainbowFg}>
        <HighLight />
      </div>
    </div>
  );
};

export default SiriOrb;
