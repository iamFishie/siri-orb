import css from "./GreenLeft.module.css";

const GreenLeft = () => {
  return (
    <svg
      width="188"
      height="142"
      viewBox="0 0 188 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={css.greenLeft}
    >
      <g style={{ "mix-blend-mode": "color-dodge" }}>
        <path
          d="M1.45395 89.979C-4.74151 46.9368 13.5121 0.534668 55.2578 0.534668C88.2149 0.534668 106.839 25.7303 132.158 42.2804C163.251 62.6049 187.086 76.6215 187.086 97.2089C187.086 134.56 131.398 154.397 78.2818 133.134C39.526 117.62 7.64942 133.021 1.45395 89.979Z"
          fill="url(#paint0_radial_534_502)"
          fill-opacity="0.8"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_534_502"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(49.8921 22.6391) rotate(84.3771) scale(84.7035 94.604)"
        >
          <stop stop-color="#CB6CF4" />
          <stop offset="1" stop-color="#CB6CF4" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default GreenLeft;
