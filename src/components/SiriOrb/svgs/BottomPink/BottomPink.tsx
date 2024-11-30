import css from "./BottomPink.module.css";

const BottomPink = () => {
  return (
    <svg
      width="49"
      height="94"
      viewBox="0 0 49 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      classNames={css.bottomPink}
    >
      <path
        d="M5.47334 70.2566C19.1424 107.847 53.6967 96.0706 48.3776 66.4582C45.8474 52.372 24.7603 26.6851 2.28088 0.270264C0.587159 25.9426 -1.28414 51.6731 5.47334 70.2566Z"
        fill="url(#paint0_radial_534_504)"
      />
      <path
        d="M5.47334 70.2566C19.1424 107.847 53.6967 96.0706 48.3776 66.4582C45.8474 52.372 24.7603 26.6851 2.28088 0.270264C0.587159 25.9426 -1.28414 51.6731 5.47334 70.2566Z"
        fill="url(#paint1_linear_534_504)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_534_504"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.8981 85.066) rotate(-68.2079) scale(53.1942 68.2952)"
        >
          <stop stop-color="#0080FF" stop-opacity="0" />
          <stop offset="1" stop-color="#0080FF" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_534_504"
          x1="5.58236"
          y1="11.405"
          x2="9.37932"
          y2="37.2243"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BottomPink;
