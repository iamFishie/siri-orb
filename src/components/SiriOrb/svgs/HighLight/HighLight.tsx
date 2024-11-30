import css from "./HighLight.module.css";

const HighLight = () => {
  return (
    <svg
      width="206"
      height="224"
      viewBox="0 0 206 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={css.highLight}
    >
      <g filter="url(#filter0_df_534_505)">
        <path
          d="M125.171 110.907C125.171 128.754 110.703 143.222 92.8556 143.222C75.0085 143.222 60.5405 128.754 60.5405 110.907C60.5405 104.045 62.6795 97.682 66.3271 92.4492C70.0167 87.1562 72.5204 86.4688 68.3037 81.5854C62.8258 75.2415 58.0103 67.3737 84.856 63.1335C109.898 59.1762 122.493 57.6932 115.741 80.8013C114.199 86.0777 115.903 87.6011 119.112 92.0644C122.925 97.3687 125.171 103.876 125.171 110.907Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_df_534_505"
          x="0.540527"
          y="0.818359"
          width="204.63"
          height="222.404"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" dy="10" />
          <feGaussianBlur stdDeviation="35" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_534_505"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_534_505"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="12.5"
            result="effect2_foregroundBlur_534_505"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HighLight;
