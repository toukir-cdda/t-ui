import React, { useState } from "react";
import styles from "./styles/actionbar.module.css";
import CustomDropdown from "./CustomDropdown";
import Dropdown from "../Dropdown/Dropdown";
import { Option, GroupOption } from "../Dropdown/dropdownTypes";

const ActionBar = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const options2: Option[] = [
    {
      value: "unit",
      label: "unit",
      isIcon: true,
      disabled: true,
      selected: true,
      suffix: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <g clip-path="url(#clip0_1582_5201)">
            <path
              d="M5.99999 9.42017C5.78493 9.42017 5.56989 9.33806 5.40592 9.17417L0.246192 4.01439C-0.0820339 3.68616 -0.0820338 3.154 0.246192 2.82591C0.574286 2.49781 1.10634 2.49781 1.43459 2.82591L5.99999 7.39157L10.5654 2.82607C10.8936 2.49797 11.4256 2.49797 11.7537 2.82607C12.0821 3.15416 12.0821 3.68632 11.7537 4.01455L6.59406 9.17433C6.43001 9.33824 6.21497 9.42017 5.99999 9.42017Z"
              fill="#6B6B6B"
            />
          </g>
          <defs>
            <clipPath id="clip0_1582_5201">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="translate(12 12) rotate(-180)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      value: "px",
      label: "px",
    },
    { value: "groupOption3", label: "rem" },
    { value: "groupOption4", label: "ch" },
  ];

  const handleSelect = (option: any) => {
    setSelectedValue(option);
    console.log(option);
  };

  const options: any = [
    {
      value: "option1",
      label: "Option 1",
      isIcon: true,

      prefix: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_1582_4871)">
            <path
              d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.997 9.34875 20.9425 6.80694 19.0678 4.93222C17.1931 3.05751 14.6513 2.00298 12 2ZM12 20.4C10.3386 20.4 8.71459 19.9073 7.33321 18.9843C5.95184 18.0613 4.87519 16.7494 4.23942 15.2145C3.60364 13.6796 3.43729 11.9907 3.76141 10.3612C4.08552 8.7318 4.88555 7.23506 6.06031 6.0603C7.23507 4.88554 8.7318 4.08552 10.3612 3.7614C11.9907 3.43729 13.6796 3.60364 15.2145 4.23941C16.7494 4.87519 18.0613 5.95184 18.9843 7.33321C19.9073 8.71458 20.4 10.3386 20.4 12C20.3974 14.227 19.5116 16.3621 17.9369 17.9369C16.3621 19.5116 14.227 20.3974 12 20.4ZM12 8.4C12.3165 8.4 12.6258 8.30616 12.8889 8.13035C13.152 7.95454 13.3571 7.70465 13.4782 7.41229C13.5993 7.11993 13.631 6.79822 13.5693 6.48785C13.5075 6.17748 13.3551 5.89239 13.1314 5.66863C12.9076 5.44486 12.6225 5.29248 12.3121 5.23074C12.0018 5.16901 11.6801 5.20069 11.3877 5.32179C11.0953 5.44289 10.8455 5.64797 10.6697 5.91109C10.4938 6.17421 10.4 6.48355 10.4 6.8C10.4 7.22435 10.5686 7.63131 10.8686 7.93137C11.1687 8.23143 11.5757 8.4 12 8.4ZM16.2852 8.4082L12.0989 9.01724C12.0333 9.02676 11.9667 9.02676 11.9011 9.01724L7.71524 8.4082C7.50553 8.37826 7.29251 8.43271 7.12288 8.5596C6.95326 8.68648 6.84087 8.87546 6.81036 9.08508C6.77985 9.29471 6.83372 9.50787 6.96014 9.67785C7.08657 9.84782 7.27523 9.96072 7.48477 9.9918L10.0614 10.3667C10.1082 10.3735 10.151 10.3969 10.1819 10.4327C10.2128 10.4685 10.2299 10.5142 10.2299 10.5615V13.6484L10.1615 13.9641L8.50899 17.5969C8.40207 17.7801 8.37234 17.9984 8.42633 18.2036C8.48032 18.4087 8.61361 18.5841 8.79688 18.691C8.98014 18.7979 9.19838 18.8277 9.40357 18.7737C9.60876 18.7197 9.7841 18.5864 9.89102 18.4031L11.8066 14.4171C11.8247 14.3794 11.8531 14.3477 11.8885 14.3254C11.9239 14.3032 11.9649 14.2914 12.0067 14.2915C12.0485 14.2915 12.0894 14.3034 12.1248 14.3257C12.1601 14.3481 12.1884 14.3799 12.2065 14.4177L14.1086 18.4031C14.2159 18.5858 14.3912 18.7185 14.5961 18.7721C14.801 18.8258 15.0189 18.796 15.2019 18.6893C15.3849 18.5826 15.5181 18.4077 15.5724 18.2029C15.6267 17.9981 15.5975 17.7802 15.4914 17.5969L13.8126 13.9064L13.7701 13.7103V10.5615C13.7701 10.5142 13.7872 10.4685 13.8181 10.4327C13.849 10.397 13.8918 10.3735 13.9386 10.3667L16.5148 9.99183C16.7244 9.96082 16.913 9.84801 17.0395 9.67812C17.166 9.50823 17.2199 9.29512 17.1895 9.08552C17.1591 8.87592 17.0468 8.68692 16.8773 8.55996C16.7078 8.433 16.4949 8.3784 16.2852 8.4082Z"
              fill="#AFAFAF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1582_4871">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      suffix: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
            stroke="#AFAFAF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
            stroke="#AFAFAF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.9 21.18C9.36 20.64 9.02 19.88 9.02 19.06"
            stroke="#AFAFAF"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
        </svg>
      ),
    },
    { value: "option2", label: "Option 2", disabled: true },
    {
      value: "option3",
      label: "Option 3",
      isIcon: true,
      selected: true,
      suffix: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
            stroke="#AFAFAF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
            stroke="#AFAFAF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
            stroke="#AFAFAF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
            stroke="#AFAFAF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      value: "option33",
      label: <Dropdown options={options2} onSelect={handleSelect} />,
      isIcon: true,
    },
    {
      title: "Group 1",
      options: [
        {
          value: "groupOption1",
          label: "Group Option 1",
        },
        {
          value: "groupOption2",
          label: "Group Option 2",
          selected: true,
        },
      ],
    },
    {
      value: "option4",
      label: (
        <div className="bg-gray-600 h-40 rounded-md p-3">
          this is inside component
        </div>
      ),
    },
    {
      title: "Group 2",
      options: [
        { value: "groupOption3", label: "Group Option 3" },
        { value: "groupOption4", label: "Group Option 4" },
        {
          title: "Group inside",
          options: [
            { value: "groupOption6", label: "Group inside Option 3" },
            {
              value: "groupOption7",
              label: "group 7",
              selected: true,
              isIcon: true,
              suffix: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
                    stroke="#AFAFAF"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
                    stroke="#AFAFAF"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.9 21.18C9.36 20.64 9.02 19.88 9.02 19.06"
                    stroke="#AFAFAF"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              ),
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.action__bar__wrapper}>
      <h3 className={styles.action__bar__title}>Diagram Details</h3>
      <div className={styles.action__container}>
        {/* form 1  */}
        <form className={styles.action__form}>
          <h4 className={styles.action__title}>Diagram</h4>
          <hr />
          <div className={styles.action__form__group}>
            <label htmlFor="name">
              <span>Name</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <input
              className={styles.action__form__input}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Description</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter your description"
            ></textarea>
          </div>
          {/* color picker 1*/}
          <div className={styles.action__form__group}>
            <label htmlFor="name">
              <span>Background</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <div className={styles.input__color__picker__container}>
              <div className={styles.input__color__picker__group}>
                <input
                  className={styles.input__color__picker}
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value="#737373"
                />
                <span>#737373</span>
              </div>
              <span>100%</span>
            </div>
          </div>
          {/* color picker 2*/}
          <div className={styles.action__form__group}>
            <label htmlFor="name">
              <span>Line Color</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <div className={styles.input__color__picker__container}>
              <div className={styles.input__color__picker__group}>
                <input
                  className={styles.input__color__picker}
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value="#03A9F4"
                />
                <span>#03A9F4</span>
              </div>
              <span>100%</span>
            </div>
          </div>
          {/* color picker 3*/}
          <div className={styles.action__form__group}>
            <label htmlFor="name">
              <span>Descriptions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <div className={styles.input__color__picker__container}>
              <div className={styles.input__color__picker__group}>
                <input
                  className={styles.input__color__picker}
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value="#009688"
                />
                <span>#454323</span>
              </div>
              <span>100%</span>
            </div>
          </div>
          {/* select box 1 */}
          <div className={styles.action__form__group}>
            <label htmlFor="name">
              <span>Line Mode</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <select name="" id="" className={styles.action__form__select}>
              <option value="">Straight</option>
              <option value="">Curved</option>
              <option value="">Orthogonal</option>
            </select>
          </div>

          {/* select box 2 */}
          <div className={styles.action__form__group}>
            <label htmlFor="name">
              <span>Pattern</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <select name="" id="" className={styles.action__form__select}>
              <option value="">Straight</option>
              <option value="">Curved</option>
              <option value="">Orthogonal</option>
            </select>
          </div>

          {/* select box 3 */}
          <div className={styles.action__form__group}>
            <label htmlFor="name">
              <span>Auto Spacing</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <select name="" id="" className={styles.action__form__select}>
              <option value="">Straight</option>
              <option value="">Curved</option>
              <option value="">Orthogonal</option>
            </select>
          </div>
        </form>
        {/* form 2  */}
        <form className={styles.action__form}>
          {/* slider  */}
          <div className={styles.action__form__group}>
            <label htmlFor="name">
              <span>Auto Spacing</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <input
              className={styles.action__form__input}
              type="range"
              id="vol"
              name="vol"
              min="0"
              max="50"
            />
          </div>
          {/* with toggle switch */}
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Identifiers Displayed Graphically</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>

          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Field</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>

          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Indexes</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Descriptions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Data Types</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Sample Data</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Object Details</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Cardinality Captions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display References & Lines</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Estimated Sizes</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>

          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Estimated Sizes</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <Dropdown options={options2} onSelect={handleSelect} />
            </label>
          </div>
        </form>
        {/* form 3  */}
        <form className={styles.action__form}>
          <Dropdown
            options={options}
            onSelect={handleSelect}
            multiSelect={true}
            required={true}
            styles={
              {
                // header: "bg-blue-900 text-white  rounded-md cursor-pointer p-2 ",
                // optionContainer: "bg-green-500 rounded-md mt-1 ",
                // optionGroup: "bg-indigo-500 rounded-md p-2 mx-2 border-2",
                // groupTitle: "text-white",
                // option:
                //   "text-white bg-yellow-500 my-3 p-2 rounded-md hover:bg-red-500  cursor-pointer",
                // disabledOption:
                //   "text-gray-400 bg-gray-200 my-3 p-2 rounded-md hover:bg-gray-200 cursor-not-allowed",
                // selectedOption: "bg-green-800 my-3 p-2 rounded-md cursor-pointer",
              }
            }
          />
          {/* slider  */}
          <div className={styles.action__form__group}>
            <label htmlFor="name">
              <span>Auto Spacing</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <input
              className={styles.action__form__input}
              type="range"
              id="vol"
              name="vol"
              min="0"
              max="50"
            />
          </div>
          {/* with toggle switch */}
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Identifiers Displayed Graphically</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>

          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Field</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>

          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Indexes</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Descriptions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Data Types</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Sample Data</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Object Details</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display Cardinality Captions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Display References & Lines</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
          <div className={styles.action__form__group}>
            <label htmlFor="description">
              <span>Estimated Sizes</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1641_16)">
                  <path
                    d="M5.30252 5.24999C5.43966 4.86013 5.71036 4.53139 6.06666 4.32198C6.42296 4.11258 6.84188 4.03604 7.24921 4.10591C7.65654 4.17577 8.026 4.38755 8.29215 4.70371C8.5583 5.01988 8.70397 5.42004 8.70335 5.83332C8.70335 6.99999 6.95335 7.58332 6.95335 7.58332M7.00002 9.91666H7.00585M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00002 12.8333C3.77836 12.8333 1.16669 10.2217 1.16669 6.99999C1.16669 3.77833 3.77836 1.16666 7.00002 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
                    stroke="#E2E2E2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1641_16">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {/* toggle switch  */}
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActionBar;
