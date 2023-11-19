import React from "react";
import styles from "./styles/canvas.module.css";
// import { MyAutoComplete } from "react-custom-google-map";

const Canvas = () => {
  return (
    <div className={styles.canvas__wrapper}>
      {/* quick action bar */}
      <div className={styles.quick__action__container}>
        <div className={styles.quick__btn__container}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1582_5046)">
                <path
                  d="M7.99999 4.47999C7.27957 4.47999 0.959991 4.43071 0.959991 2.71999C0.959991 1.00927 7.27957 0.959991 7.99999 0.959991C8.72042 0.959991 15.04 1.00927 15.04 2.71999C15.04 4.43071 8.72042 4.47999 7.99999 4.47999ZM1.89162 2.71999C2.32106 3.05322 4.38202 3.59999 7.99999 3.59999C11.618 3.59999 13.6789 3.05322 14.1084 2.71999C13.6789 2.38676 11.618 1.83999 7.99999 1.83999C4.38202 1.83999 2.32106 2.38676 1.89162 2.71999Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 8.00001C7.27957 8.00001 0.959991 7.94983 0.959991 6.20801C0.959991 5.96071 1.15711 5.76001 1.39999 5.76001C1.62586 5.76001 1.81183 5.93324 1.83706 6.15664C2.1081 6.48696 4.19076 7.10401 7.99999 7.10401C11.8092 7.10401 13.8919 6.48696 14.1629 6.15664C14.1882 5.93324 14.3741 5.76001 14.6 5.76001C14.8429 5.76001 15.04 5.96071 15.04 6.20801C15.04 7.94983 8.72042 8.00001 7.99999 8.00001ZM14.16 6.20741C14.16 6.20801 14.16 6.20801 14.16 6.20741V6.20741ZM1.83999 6.20741C1.83999 6.20801 1.83999 6.20801 1.83999 6.20741V6.20741Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 11.52C7.27957 11.52 0.959991 11.4698 0.959991 9.728C0.959991 9.4807 1.15711 9.28 1.39999 9.28C1.62586 9.28 1.81183 9.45323 1.83706 9.67663C2.1081 10.007 4.19076 10.624 7.99999 10.624C11.8092 10.624 13.8919 10.007 14.1629 9.67663C14.1882 9.45323 14.3741 9.28 14.6 9.28C14.8429 9.28 15.04 9.4807 15.04 9.728C15.04 11.4698 8.72042 11.52 7.99999 11.52ZM14.16 9.7274C14.16 9.728 14.16 9.728 14.16 9.7274V9.7274ZM1.83999 9.7274C1.83999 9.728 1.83999 9.728 1.83999 9.7274V9.7274Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 15.04C7.27957 15.04 0.959991 14.9906 0.959991 13.2745V2.68137C0.959991 2.43773 1.15711 2.23999 1.39999 2.23999C1.64287 2.23999 1.83999 2.43773 1.83999 2.68137V13.2268C2.12218 13.554 4.20426 14.1572 7.99999 14.1572C11.7957 14.1572 13.8778 13.554 14.16 13.2268V2.68137C14.16 2.43773 14.3571 2.23999 14.6 2.23999C14.8429 2.23999 15.04 2.43773 15.04 2.68137V13.2745C15.04 14.9906 8.72042 15.04 7.99999 15.04Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 9.76001C4.22926 9.76001 4.47999 9.50929 4.47999 9.20001C4.47999 8.89074 4.22926 8.64001 3.91999 8.64001C3.61071 8.64001 3.35999 8.89074 3.35999 9.20001C3.35999 9.50929 3.61071 9.76001 3.91999 9.76001Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 6.24C4.22926 6.24 4.47999 5.98927 4.47999 5.68C4.47999 5.37072 4.22926 5.12 3.91999 5.12C3.61071 5.12 3.35999 5.37072 3.35999 5.68C3.35999 5.98927 3.61071 6.24 3.91999 6.24Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 13.28C4.22926 13.28 4.47999 13.0293 4.47999 12.72C4.47999 12.4107 4.22926 12.16 3.91999 12.16C3.61071 12.16 3.35999 12.4107 3.35999 12.72C3.35999 13.0293 3.61071 13.28 3.91999 13.28Z"
                  fill="#EAECF0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1582_5046">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>New Model</span>
          </button>
        </div>
        <div className={styles.quick__btn__container}>
          <button>New</button>
          <button>Save</button>
        </div>
        <div className={styles.quick__btn__container}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1582_5068)">
                <path
                  d="M5.99036 14.6446C5.71342 14.725 5.42189 14.5619 5.34028 14.2807L2.06793 3.00737C1.98631 2.7262 2.14521 2.43237 2.42215 2.35198C2.55728 2.31276 2.69925 2.3293 2.82269 2.39902L12.6759 7.95901C12.7984 8.02739 12.8877 8.14026 12.9271 8.27596C13.0086 8.55666 12.8497 8.85099 12.5729 8.93135L8.49676 10.1145L6.30771 14.3825C6.24208 14.5099 6.1265 14.6051 5.99036 14.6446ZM3.0105 3.41853L5.91144 13.4124L7.8713 9.5914C7.92113 9.49478 8.00734 9.42308 8.11114 9.39295L11.7353 8.34096L3.0105 3.41853Z"
                  fill="#EAECF0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1582_5068">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Select</span>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1582_5075)">
                <path
                  d="M8 4.47999C7.27957 4.47999 0.959999 4.43071 0.959999 2.71999C0.959999 1.00927 7.27957 0.959991 8 0.959991C8.72043 0.959991 15.04 1.00927 15.04 2.71999C15.04 4.43071 8.72043 4.47999 8 4.47999ZM1.89163 2.71999C2.32107 3.05322 4.38203 3.59999 8 3.59999C11.618 3.59999 13.6789 3.05322 14.1084 2.71999C13.6789 2.38676 11.618 1.83999 8 1.83999C4.38203 1.83999 2.32107 2.38676 1.89163 2.71999Z"
                  fill="#EAECF0"
                />
                <path
                  d="M8 8.00001C7.27957 8.00001 0.959999 7.94983 0.959999 6.20801C0.959999 5.96071 1.15712 5.76001 1.4 5.76001C1.62587 5.76001 1.81184 5.93324 1.83707 6.15664C2.10811 6.48696 4.19077 7.10401 8 7.10401C11.8092 7.10401 13.8919 6.48696 14.1629 6.15664C14.1882 5.93324 14.3741 5.76001 14.6 5.76001C14.8429 5.76001 15.04 5.96071 15.04 6.20801C15.04 7.94983 8.72043 8.00001 8 8.00001ZM14.16 6.20741C14.16 6.20801 14.16 6.20801 14.16 6.20741V6.20741ZM1.84 6.20741C1.84 6.20801 1.84 6.20801 1.84 6.20741V6.20741Z"
                  fill="#EAECF0"
                />
                <path
                  d="M8 11.52C7.27957 11.52 0.959999 11.4698 0.959999 9.728C0.959999 9.4807 1.15712 9.28 1.4 9.28C1.62587 9.28 1.81184 9.45323 1.83707 9.67663C2.10811 10.007 4.19077 10.624 8 10.624C11.8092 10.624 13.8919 10.007 14.1629 9.67663C14.1882 9.45323 14.3741 9.28 14.6 9.28C14.8429 9.28 15.04 9.4807 15.04 9.728C15.04 11.4698 8.72043 11.52 8 11.52ZM14.16 9.7274C14.16 9.728 14.16 9.728 14.16 9.7274V9.7274ZM1.84 9.7274C1.84 9.728 1.84 9.728 1.84 9.7274V9.7274Z"
                  fill="#EAECF0"
                />
                <path
                  d="M8 15.04C7.27957 15.04 0.959999 14.9906 0.959999 13.2745V2.68137C0.959999 2.43773 1.15712 2.23999 1.4 2.23999C1.64288 2.23999 1.84 2.43773 1.84 2.68137V13.2268C2.12219 13.554 4.20427 14.1572 8 14.1572C11.7957 14.1572 13.8778 13.554 14.16 13.2268V2.68137C14.16 2.43773 14.3571 2.23999 14.6 2.23999C14.8429 2.23999 15.04 2.43773 15.04 2.68137V13.2745C15.04 14.9906 8.72043 15.04 8 15.04Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.92 9.76001C4.22928 9.76001 4.48 9.50929 4.48 9.20001C4.48 8.89074 4.22928 8.64001 3.92 8.64001C3.61072 8.64001 3.36 8.89074 3.36 9.20001C3.36 9.50929 3.61072 9.76001 3.92 9.76001Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.92 6.24C4.22928 6.24 4.48 5.98927 4.48 5.68C4.48 5.37072 4.22928 5.12 3.92 5.12C3.61072 5.12 3.36 5.37072 3.36 5.68C3.36 5.98927 3.61072 6.24 3.92 6.24Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.92 13.28C4.22928 13.28 4.48 13.0293 4.48 12.72C4.48 12.4107 4.22928 12.16 3.92 12.16C3.61072 12.16 3.36 12.4107 3.36 12.72C3.36 13.0293 3.61072 13.28 3.92 13.28Z"
                  fill="#EAECF0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1582_5075">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Collection</span>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1582_5046)">
                <path
                  d="M7.99999 4.47999C7.27957 4.47999 0.959991 4.43071 0.959991 2.71999C0.959991 1.00927 7.27957 0.959991 7.99999 0.959991C8.72042 0.959991 15.04 1.00927 15.04 2.71999C15.04 4.43071 8.72042 4.47999 7.99999 4.47999ZM1.89162 2.71999C2.32106 3.05322 4.38202 3.59999 7.99999 3.59999C11.618 3.59999 13.6789 3.05322 14.1084 2.71999C13.6789 2.38676 11.618 1.83999 7.99999 1.83999C4.38202 1.83999 2.32106 2.38676 1.89162 2.71999Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 8.00001C7.27957 8.00001 0.959991 7.94983 0.959991 6.20801C0.959991 5.96071 1.15711 5.76001 1.39999 5.76001C1.62586 5.76001 1.81183 5.93324 1.83706 6.15664C2.1081 6.48696 4.19076 7.10401 7.99999 7.10401C11.8092 7.10401 13.8919 6.48696 14.1629 6.15664C14.1882 5.93324 14.3741 5.76001 14.6 5.76001C14.8429 5.76001 15.04 5.96071 15.04 6.20801C15.04 7.94983 8.72042 8.00001 7.99999 8.00001ZM14.16 6.20741C14.16 6.20801 14.16 6.20801 14.16 6.20741V6.20741ZM1.83999 6.20741C1.83999 6.20801 1.83999 6.20801 1.83999 6.20741V6.20741Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 11.52C7.27957 11.52 0.959991 11.4698 0.959991 9.728C0.959991 9.4807 1.15711 9.28 1.39999 9.28C1.62586 9.28 1.81183 9.45323 1.83706 9.67663C2.1081 10.007 4.19076 10.624 7.99999 10.624C11.8092 10.624 13.8919 10.007 14.1629 9.67663C14.1882 9.45323 14.3741 9.28 14.6 9.28C14.8429 9.28 15.04 9.4807 15.04 9.728C15.04 11.4698 8.72042 11.52 7.99999 11.52ZM14.16 9.7274C14.16 9.728 14.16 9.728 14.16 9.7274V9.7274ZM1.83999 9.7274C1.83999 9.728 1.83999 9.728 1.83999 9.7274V9.7274Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 15.04C7.27957 15.04 0.959991 14.9906 0.959991 13.2745V2.68137C0.959991 2.43773 1.15711 2.23999 1.39999 2.23999C1.64287 2.23999 1.83999 2.43773 1.83999 2.68137V13.2268C2.12218 13.554 4.20426 14.1572 7.99999 14.1572C11.7957 14.1572 13.8778 13.554 14.16 13.2268V2.68137C14.16 2.43773 14.3571 2.23999 14.6 2.23999C14.8429 2.23999 15.04 2.43773 15.04 2.68137V13.2745C15.04 14.9906 8.72042 15.04 7.99999 15.04Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 9.76001C4.22926 9.76001 4.47999 9.50929 4.47999 9.20001C4.47999 8.89074 4.22926 8.64001 3.91999 8.64001C3.61071 8.64001 3.35999 8.89074 3.35999 9.20001C3.35999 9.50929 3.61071 9.76001 3.91999 9.76001Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 6.24C4.22926 6.24 4.47999 5.98927 4.47999 5.68C4.47999 5.37072 4.22926 5.12 3.91999 5.12C3.61071 5.12 3.35999 5.37072 3.35999 5.68C3.35999 5.98927 3.61071 6.24 3.91999 6.24Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 13.28C4.22926 13.28 4.47999 13.0293 4.47999 12.72C4.47999 12.4107 4.22926 12.16 3.91999 12.16C3.61071 12.16 3.35999 12.4107 3.35999 12.72C3.35999 13.0293 3.61071 13.28 3.91999 13.28Z"
                  fill="#EAECF0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1582_5046">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Reference</span>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1582_5046)">
                <path
                  d="M7.99999 4.47999C7.27957 4.47999 0.959991 4.43071 0.959991 2.71999C0.959991 1.00927 7.27957 0.959991 7.99999 0.959991C8.72042 0.959991 15.04 1.00927 15.04 2.71999C15.04 4.43071 8.72042 4.47999 7.99999 4.47999ZM1.89162 2.71999C2.32106 3.05322 4.38202 3.59999 7.99999 3.59999C11.618 3.59999 13.6789 3.05322 14.1084 2.71999C13.6789 2.38676 11.618 1.83999 7.99999 1.83999C4.38202 1.83999 2.32106 2.38676 1.89162 2.71999Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 8.00001C7.27957 8.00001 0.959991 7.94983 0.959991 6.20801C0.959991 5.96071 1.15711 5.76001 1.39999 5.76001C1.62586 5.76001 1.81183 5.93324 1.83706 6.15664C2.1081 6.48696 4.19076 7.10401 7.99999 7.10401C11.8092 7.10401 13.8919 6.48696 14.1629 6.15664C14.1882 5.93324 14.3741 5.76001 14.6 5.76001C14.8429 5.76001 15.04 5.96071 15.04 6.20801C15.04 7.94983 8.72042 8.00001 7.99999 8.00001ZM14.16 6.20741C14.16 6.20801 14.16 6.20801 14.16 6.20741V6.20741ZM1.83999 6.20741C1.83999 6.20801 1.83999 6.20801 1.83999 6.20741V6.20741Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 11.52C7.27957 11.52 0.959991 11.4698 0.959991 9.728C0.959991 9.4807 1.15711 9.28 1.39999 9.28C1.62586 9.28 1.81183 9.45323 1.83706 9.67663C2.1081 10.007 4.19076 10.624 7.99999 10.624C11.8092 10.624 13.8919 10.007 14.1629 9.67663C14.1882 9.45323 14.3741 9.28 14.6 9.28C14.8429 9.28 15.04 9.4807 15.04 9.728C15.04 11.4698 8.72042 11.52 7.99999 11.52ZM14.16 9.7274C14.16 9.728 14.16 9.728 14.16 9.7274V9.7274ZM1.83999 9.7274C1.83999 9.728 1.83999 9.728 1.83999 9.7274V9.7274Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 15.04C7.27957 15.04 0.959991 14.9906 0.959991 13.2745V2.68137C0.959991 2.43773 1.15711 2.23999 1.39999 2.23999C1.64287 2.23999 1.83999 2.43773 1.83999 2.68137V13.2268C2.12218 13.554 4.20426 14.1572 7.99999 14.1572C11.7957 14.1572 13.8778 13.554 14.16 13.2268V2.68137C14.16 2.43773 14.3571 2.23999 14.6 2.23999C14.8429 2.23999 15.04 2.43773 15.04 2.68137V13.2745C15.04 14.9906 8.72042 15.04 7.99999 15.04Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 9.76001C4.22926 9.76001 4.47999 9.50929 4.47999 9.20001C4.47999 8.89074 4.22926 8.64001 3.91999 8.64001C3.61071 8.64001 3.35999 8.89074 3.35999 9.20001C3.35999 9.50929 3.61071 9.76001 3.91999 9.76001Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 6.24C4.22926 6.24 4.47999 5.98927 4.47999 5.68C4.47999 5.37072 4.22926 5.12 3.91999 5.12C3.61071 5.12 3.35999 5.37072 3.35999 5.68C3.35999 5.98927 3.61071 6.24 3.91999 6.24Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 13.28C4.22926 13.28 4.47999 13.0293 4.47999 12.72C4.47999 12.4107 4.22926 12.16 3.91999 12.16C3.61071 12.16 3.35999 12.4107 3.35999 12.72C3.35999 13.0293 3.61071 13.28 3.91999 13.28Z"
                  fill="#EAECF0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1582_5046">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Line</span>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1582_5046)">
                <path
                  d="M7.99999 4.47999C7.27957 4.47999 0.959991 4.43071 0.959991 2.71999C0.959991 1.00927 7.27957 0.959991 7.99999 0.959991C8.72042 0.959991 15.04 1.00927 15.04 2.71999C15.04 4.43071 8.72042 4.47999 7.99999 4.47999ZM1.89162 2.71999C2.32106 3.05322 4.38202 3.59999 7.99999 3.59999C11.618 3.59999 13.6789 3.05322 14.1084 2.71999C13.6789 2.38676 11.618 1.83999 7.99999 1.83999C4.38202 1.83999 2.32106 2.38676 1.89162 2.71999Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 8.00001C7.27957 8.00001 0.959991 7.94983 0.959991 6.20801C0.959991 5.96071 1.15711 5.76001 1.39999 5.76001C1.62586 5.76001 1.81183 5.93324 1.83706 6.15664C2.1081 6.48696 4.19076 7.10401 7.99999 7.10401C11.8092 7.10401 13.8919 6.48696 14.1629 6.15664C14.1882 5.93324 14.3741 5.76001 14.6 5.76001C14.8429 5.76001 15.04 5.96071 15.04 6.20801C15.04 7.94983 8.72042 8.00001 7.99999 8.00001ZM14.16 6.20741C14.16 6.20801 14.16 6.20801 14.16 6.20741V6.20741ZM1.83999 6.20741C1.83999 6.20801 1.83999 6.20801 1.83999 6.20741V6.20741Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 11.52C7.27957 11.52 0.959991 11.4698 0.959991 9.728C0.959991 9.4807 1.15711 9.28 1.39999 9.28C1.62586 9.28 1.81183 9.45323 1.83706 9.67663C2.1081 10.007 4.19076 10.624 7.99999 10.624C11.8092 10.624 13.8919 10.007 14.1629 9.67663C14.1882 9.45323 14.3741 9.28 14.6 9.28C14.8429 9.28 15.04 9.4807 15.04 9.728C15.04 11.4698 8.72042 11.52 7.99999 11.52ZM14.16 9.7274C14.16 9.728 14.16 9.728 14.16 9.7274V9.7274ZM1.83999 9.7274C1.83999 9.728 1.83999 9.728 1.83999 9.7274V9.7274Z"
                  fill="#EAECF0"
                />
                <path
                  d="M7.99999 15.04C7.27957 15.04 0.959991 14.9906 0.959991 13.2745V2.68137C0.959991 2.43773 1.15711 2.23999 1.39999 2.23999C1.64287 2.23999 1.83999 2.43773 1.83999 2.68137V13.2268C2.12218 13.554 4.20426 14.1572 7.99999 14.1572C11.7957 14.1572 13.8778 13.554 14.16 13.2268V2.68137C14.16 2.43773 14.3571 2.23999 14.6 2.23999C14.8429 2.23999 15.04 2.43773 15.04 2.68137V13.2745C15.04 14.9906 8.72042 15.04 7.99999 15.04Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 9.76001C4.22926 9.76001 4.47999 9.50929 4.47999 9.20001C4.47999 8.89074 4.22926 8.64001 3.91999 8.64001C3.61071 8.64001 3.35999 8.89074 3.35999 9.20001C3.35999 9.50929 3.61071 9.76001 3.91999 9.76001Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 6.24C4.22926 6.24 4.47999 5.98927 4.47999 5.68C4.47999 5.37072 4.22926 5.12 3.91999 5.12C3.61071 5.12 3.35999 5.37072 3.35999 5.68C3.35999 5.98927 3.61071 6.24 3.91999 6.24Z"
                  fill="#EAECF0"
                />
                <path
                  d="M3.91999 13.28C4.22926 13.28 4.47999 13.0293 4.47999 12.72C4.47999 12.4107 4.22926 12.16 3.91999 12.16C3.61071 12.16 3.35999 12.4107 3.35999 12.72C3.35999 13.0293 3.61071 13.28 3.91999 13.28Z"
                  fill="#EAECF0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1582_5046">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Line</span>
          </button>
        </div>
        <div className={styles.quick__btn__container}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.62 3.95334L13.6667 8.00001L9.62 12.0467"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.33334 8H13.5533"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <MyAutoComplete  /> */}
      {/* <nav className="menu">
        <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="hamburger hamburger-1"></span>
          <span className="hamburger hamburger-2"></span>
          <span className="hamburger hamburger-3"></span>
        </label>

        <a href="#" className="menu-item">
          {' '}
          <i className="fa fa-bar-chart"></i>{' '}
        </a>
        <a href="#" className="menu-item">
          {' '}
          <i className="fa fa-plus"></i>{' '}
        </a>
        <a href="#" className="menu-item">
          {' '}
          <i className="fa fa-heart"></i>{' '}
        </a>
        <a href="#" className="menu-item">
          {' '}
          <i className="fa fa-envelope"></i>{' '}
        </a>
      </nav> */}
    </div>
  );
};

export default Canvas;
