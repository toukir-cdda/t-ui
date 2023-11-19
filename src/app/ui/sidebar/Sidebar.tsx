import React, { useState } from 'react';
import styles from './styles/sidebar.module.css';
import Search from './components/search/Search';
import SideList from './components/SideList/SideList';
import SideGrid from './components/sideGrid/SideGrid';

const Sidebar = () => {
  const [isListActive, setListActive] = useState(true);

  const handleToggleList = () => {
    setListActive(true);
  };

  const handleToggleGrid = () => {
    setListActive(false);
  };

  return (
    <div>
      {/* sidebar header */}
      <div className={styles.sidebar__header}>
        {/* toggle list */}
        <span onClick={handleToggleList}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3 7H21" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 17H21" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </span>
        <h3>Pyreactor</h3>
        {/* toggle grid  */}
        <span onClick={handleToggleGrid}>
          {/* grid icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 3H7.5V7.5H3V3ZM9.75 3H14.25V7.5H9.75V3ZM16.5 3H21V7.5H16.5V3ZM3 9.75H7.5V14.25H3V9.75ZM9.75 9.75H14.25V14.25H9.75V9.75ZM16.5 9.75H21V14.25H16.5V9.75ZM3 16.5H7.5V21H3V16.5ZM9.75 16.5H14.25V21H9.75V16.5ZM16.5 16.5H21V21H16.5V16.5Z"
              fill="white"
            />
          </svg>
        </span>
      </div>

      {/* sidebar container  */}
      <div className={styles.sidebar__container}>
        {/* search */}
        <Search />
        {/* sidebar content  */}
        <div className={`${styles.sidebar__content} `}>
          {isListActive ? <SideList /> : <SideGrid />}
        </div>
      </div>
      {/* sidebar footer  */}
      <div className={styles.sidebar__footer}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M10 12.9572C11.3807 12.9572 12.5 11.8379 12.5 10.4572C12.5 9.07644 11.3807 7.95715 10 7.95715C8.61929 7.95715 7.5 9.07644 7.5 10.4572C7.5 11.8379 8.61929 12.9572 10 12.9572Z"
              stroke="#6B6B6B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.66669 11.1905V9.72382C1.66669 8.85715 2.37502 8.14049 3.25002 8.14049C4.75835 8.14049 5.37502 7.07382 4.61669 5.76548C4.18335 5.01548 4.44169 4.04048 5.20002 3.60715L6.64169 2.78215C7.30002 2.39048 8.15002 2.62382 8.54169 3.28215L8.63335 3.44048C9.38335 4.74882 10.6167 4.74882 11.375 3.44048L11.4667 3.28215C11.8584 2.62382 12.7084 2.39048 13.3667 2.78215L14.8084 3.60715C15.5667 4.04048 15.825 5.01548 15.3917 5.76548C14.6334 7.07382 15.25 8.14049 16.7584 8.14049C17.625 8.14049 18.3417 8.84882 18.3417 9.72382V11.1905C18.3417 12.0572 17.6334 12.7738 16.7584 12.7738C15.25 12.7738 14.6334 13.8405 15.3917 15.1488C15.825 15.9072 15.5667 16.8738 14.8084 17.3072L13.3667 18.1322C12.7084 18.5238 11.8584 18.2905 11.4667 17.6322L11.375 17.4738C10.625 16.1655 9.39169 16.1655 8.63335 17.4738L8.54169 17.6322C8.15002 18.2905 7.30002 18.5238 6.64169 18.1322L5.20002 17.3072C4.44169 16.8738 4.18335 15.8988 4.61669 15.1488C5.37502 13.8405 4.75835 12.7738 3.25002 12.7738C2.37502 12.7738 1.66669 12.0572 1.66669 11.1905Z"
              stroke="#6B6B6B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M11.5083 2.89047L16.425 5.07381C17.8417 5.69881 17.8417 6.73214 16.425 7.35714L11.5083 9.54047C10.95 9.79047 10.0333 9.79047 9.47502 9.54047L4.55835 7.35714C3.14168 6.73214 3.14168 5.69881 4.55835 5.07381L9.47502 2.89047C10.0333 2.64047 10.95 2.64047 11.5083 2.89047Z"
              stroke="#6B6B6B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.16669 9.62381C3.16669 10.3238 3.69169 11.1321 4.33335 11.4155L9.99169 13.9321C10.425 14.1238 10.9167 14.1238 11.3417 13.9321L17 11.4155C17.6417 11.1321 18.1667 10.3238 18.1667 9.62381"
              stroke="#6B6B6B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.16669 13.7905C3.16669 14.5655 3.62502 15.2655 4.33335 15.5822L9.99169 18.0988C10.425 18.2905 10.9167 18.2905 11.3417 18.0988L17 15.5822C17.7084 15.2655 18.1667 14.5655 18.1667 13.7905"
              stroke="#6B6B6B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M10.3334 7.6236V11.7903H14.3334V10.1236H11.9334V7.6236H10.3334Z"
              fill="#6B6B6B"
            />
            <path
              d="M17.767 8.03778C17.4061 7.14613 16.8822 6.33609 16.2246 5.65273C15.229 4.61568 13.9635 3.90528 12.5846 3.60935C11.6274 3.40642 10.6409 3.40642 9.68377 3.60935C8.30351 3.90339 7.03695 4.61437 6.04217 5.65356C5.38608 6.33765 4.86244 7.14681 4.49977 8.03694C4.12466 8.9608 3.93203 9.9539 3.93337 10.957L3.93417 10.9778H2.33337L4.73337 14.2904L7.13337 10.9778H5.53417L5.53337 10.957C5.53107 9.79479 5.86414 8.65868 6.48937 7.6961C6.89266 7.07499 7.40613 6.53984 8.00217 6.1194C8.60852 5.6939 9.28866 5.39555 10.0046 5.24105C11.4594 4.92946 12.9735 5.23241 14.2139 6.08329C15.4544 6.93418 16.3198 8.26336 16.6198 9.77864C16.7707 10.5552 16.7707 11.3554 16.6198 12.132C16.4734 12.8784 16.1868 13.5873 15.7766 14.2179C15.5766 14.5271 15.347 14.8179 15.0934 15.0813C14.5823 15.613 13.978 16.0376 13.3134 16.3321C12.9748 16.4812 12.623 16.5951 12.263 16.6721C11.5177 16.8292 10.7498 16.8292 10.0046 16.6721C9.2888 16.5193 8.60894 16.2211 8.00377 15.7946C7.70613 15.5851 7.42834 15.3465 7.17417 15.0821L6.04297 16.2604C6.71107 16.9573 7.50459 17.5101 8.37809 17.8871C9.25158 18.264 10.1879 18.4577 11.1334 18.4572C12.0958 18.4567 13.0485 18.2564 13.9358 17.868C15.2219 17.3012 16.3222 16.3573 17.103 15.1513C17.9065 13.9128 18.3351 12.4518 18.3334 10.957C18.3354 9.95411 18.1427 8.96114 17.767 8.03778Z"
              fill="#6B6B6B"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M8.33335 14.5822H5.17502C2.36669 14.5822 1.66669 13.8822 1.66669 11.0738V6.07382C1.66669 3.26549 2.36669 2.56549 5.17502 2.56549H13.95C16.7584 2.56549 17.4584 3.26549 17.4584 6.07382"
              stroke="#6B6B6B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.33331 18.3488V14.5822"
              stroke="#6B6B6B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.66669 11.2488H8.33335"
              stroke="#6B6B6B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.61664 18.3488H8.3333"
              stroke="#6B6B6B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.3333 11.1238V15.8822C18.3333 17.8572 17.8417 18.3488 15.8667 18.3488H12.9083C10.9333 18.3488 10.4417 17.8572 10.4417 15.8822V11.1238C10.4417 9.14883 10.9333 8.65717 12.9083 8.65717H15.8667C17.8417 8.65717 18.3333 9.14883 18.3333 11.1238Z"
              stroke="#6B6B6B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.3704 15.6655H14.3779"
              stroke="#6B6B6B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
