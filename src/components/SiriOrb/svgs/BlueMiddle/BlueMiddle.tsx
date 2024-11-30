import css from "./BlueMiddle.module.css";

const BlueMiddle = () => {
  return (
    <svg
      width="144"
      height="172"
      viewBox="0 0 144 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={css.blueMiddle}
    >
      <g className={css.graph}>
        <path
          d="M0.236817 107.645C0.23538 65.6894 13.2023 26.5533 19.7266 8.0249C22.4112 0.401146 32.4576 -1.76943 39.1556 2.75452C50.5606 9.63159 73.5372 26.3386 96.7305 42.3552C120.832 58.999 155.587 77.3993 139.636 131.963C127.551 173.305 68.5822 171.434 68.5822 171.434C68.5822 171.434 0.238962 170.297 0.236817 107.645Z"
          fill="url(#paint0_linear_534_499)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_534_499"
          x1="14.6654"
          y1="127.39"
          x2="86.0483"
          y2="100.052"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7EA1E4" />
          <stop offset="1" stop-color="#70CBFF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BlueMiddle;
