import styles from "./styles.module.css";
import Image from "next/image";

export default function Parallax() {
  return (
    <>
      <div className={styles.parallax}></div>
      <a href="#" className={styles.up}>
        <Image src={require("./arrow.png")} alt="up" fill />
      </a>
      <div className={styles.contacts}>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={styles.link}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M2685 5105 c-131 -46 -178 -243 -80 -331 39 -35 82 -50 170 -59 164
        -18 402 -69 580 -124 509 -160 859 -454 1062 -891 114 -246 208 -627 227 -916
        12 -186 68 -256 206 -256 67 0 114 18 149 57 42 49 51 91 51 251 0 427 -99
        794 -309 1143 -353 585 -915 988 -1545 1105 -184 35 -442 45 -511 21z"
              />
              <path
                d="M884 4858 c-167 -19 -403 -138 -548 -277 -89 -86 -140 -155 -186
        -255 -64 -135 -75 -190 -74 -366 0 -135 4 -168 27 -253 64 -239 325 -778 559
        -1156 647 -1044 1602 -1867 2788 -2404 253 -114 385 -153 495 -143 338 28 721
        314 885 659 122 255 85 455 -117 636 -139 123 -587 453 -746 549 -158 94 -334
        132 -464 98 -136 -34 -232 -105 -346 -254 -103 -135 -146 -162 -253 -162 -71
        0 -139 22 -269 88 -430 216 -786 569 -977 968 -87 182 -105 305 -60 406 28 63
        64 101 172 183 147 111 206 186 236 300 37 137 -2 268 -157 532 -161 273 -454
        631 -621 760 -99 76 -213 106 -344 91z"
              />
              <path
                d="M2825 4465 c-5 -2 -27 -6 -48 -10 -106 -18 -178 -172 -132 -282 33
        -78 77 -103 231 -132 548 -104 829 -289 974 -641 56 -135 109 -357 125 -520 9
        -93 25 -138 60 -175 74 -79 243 -68 303 19 34 50 42 90 42 216 -1 313 -87 584
        -268 845 -72 103 -274 305 -377 377 -158 111 -357 203 -533 247 -63 16 -344
        63 -362 60 -3 0 -9 -2 -15 -4z"
              />
              <path
                d="M2850 3774 c-88 -31 -139 -106 -140 -202 0 -63 18 -102 62 -135 38
        -28 68 -39 188 -67 156 -37 253 -107 310 -224 29 -61 36 -85 65 -227 18 -86
        57 -144 119 -173 99 -47 222 6 263 113 24 62 24 223 -1 306 -78 265 -305 505
        -563 596 -80 28 -242 35 -303 13z"
              />
            </g>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={styles.link}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M916 5105 c-81 -21 -164 -67 -249 -140 -94 -81 -431 -424 -486 -495
-223 -285 -227 -728 -11 -1300 263 -699 756 -1407 1380 -1982 860 -793 2012
-1306 2605 -1162 88 21 234 89 301 140 68 51 520 515 562 576 78 113 108 264
78 392 -34 143 -45 156 -480 592 -439 439 -453 450 -598 480 -115 24 -232 3
-345 -62 -26 -16 -150 -129 -275 -253 l-227 -224 -73 38 c-179 93 -311 182
-508 344 -202 166 -484 457 -640 661 -113 148 -279 421 -280 458 0 7 78 89
173 182 200 195 279 286 324 372 56 109 67 247 28 361 -39 116 -77 160 -459
543 -378 378 -436 428 -544 465 -75 27 -199 33 -276 14z m232 -281 c28 -16
188 -167 403 -383 389 -390 404 -408 403 -511 0 -91 -24 -123 -285 -384 -132
-131 -247 -252 -255 -269 -12 -21 -15 -50 -12 -99 3 -60 11 -83 72 -204 138
-274 320 -515 621 -823 299 -306 597 -534 904 -692 109 -56 130 -64 180 -63
34 0 70 7 91 18 19 10 143 126 275 257 170 169 253 244 285 258 60 27 138 27
193 0 60 -30 767 -736 798 -798 17 -33 24 -63 24 -106 0 -103 -21 -131 -305
-416 -281 -282 -307 -301 -457 -335 -145 -32 -388 -6 -634 67 -375 111 -879
377 -1294 683 -799 588 -1485 1487 -1770 2318 -136 395 -151 678 -47 888 32
67 62 101 270 312 128 130 251 248 272 263 90 62 182 69 268 19z"
              />
            </g>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={styles.link}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height=""
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M4770 4666 c-340 -125 -4535 -1736 -4597 -1766 -205 -97 -229 -225
-58 -312 17 -9 300 -99 631 -202 l601 -187 1364 854 c751 469 1380 859 1398
865 47 16 87 15 105 -4 13 -13 14 -19 3 -38 -6 -13 -505 -466 -1107 -1006
-602 -541 -1097 -987 -1099 -992 -2 -5 -22 -275 -45 -600 l-42 -590 46 6 c25
3 64 16 87 29 24 12 180 154 349 315 168 161 312 296 319 298 7 3 275 -187
596 -422 320 -235 607 -438 638 -452 81 -38 171 -41 230 -10 53 28 104 98 126
171 8 28 192 875 407 1882 359 1676 392 1838 392 1925 0 82 -3 102 -25 145
-15 31 -42 62 -68 80 -59 41 -157 46 -251 11z"
              />
            </g>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={styles.link}
        >
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="32"
            height="32"
            viewBox="0, 0, 400,400"
          >
            <g id="svgg">
              <path
                id="path0"
                d="M49.929 82.732 C 41.746 85.350,34.795 91.593,31.070 99.672 L 29.297 103.516 29.297 200.000 L 29.297 296.484 31.070 300.328 C 36.876 312.919,47.093 318.750,63.347 318.750 L 71.868 318.750 72.067 233.526 L 72.266 148.302 135.864 198.760 C 170.844 226.513,199.847 249.215,200.317 249.209 C 200.787 249.204,228.945 227.730,262.891 201.488 L 324.609 153.777 324.808 236.347 L 325.007 318.917 336.918 318.618 C 356.745 318.122,368.051 309.921,371.082 293.839 C 372.231 287.741,372.162 111.607,371.009 106.093 C 367.858 91.033,355.007 81.250,338.375 81.250 L 333.858 81.250 273.374 132.520 C 240.108 160.718,210.955 185.464,208.589 187.510 L 204.288 191.230 137.215 136.240 L 70.142 81.250 62.220 81.292 C 56.859 81.320,52.884 81.786,49.929 82.732 "
                stroke="none"
                fill="#000000"
                fillRule="evenodd"
              ></path>
            </g>
          </svg>
        </a>
        <div className={styles.main}>
          <Image
            src={require("./support.png")}
            alt="contacts"
            width={30}
            height={30}
          />
        </div>
      </div>
    </>
  );
}
