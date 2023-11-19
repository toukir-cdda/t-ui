// CustomDropdown.js
import React, { useState, useRef, useEffect } from "react";
import RenderOptions from "../Dropdown/RenderOptions";
import DropdownHeader from "../Dropdown/DropdownHeader";
const options = [
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
    label: "Option 33",
    isIcon: true,
  },
  {
    title: "Group 1",
    options: [
      {
        value: "groupOption1",
        label: "Group Option 1",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
              stroke="#AFAFAF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
              stroke="#AFAFAF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        iconPosition: "prefix",
      },
      {
        value: "groupOption2",
        label: "Group Option 2",
        selected: true,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1582_4849)">
              <path
                d="M6.60004 17.0045L8.47924 12.0705C8.51765 11.9766 8.65054 11.9764 8.68913 12.0703L10.5513 17.0045"
                stroke="#AFAFAF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.1861 15.7757H9.97465"
                stroke="#AFAFAF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.483 5.04144H18.3659"
                stroke="#AFAFAF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.4837 5.04145V5.46664C16.4837 7.68196 14.8347 9.55089 12.6366 9.82681"
                stroke="#AFAFAF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3652 5.04145V5.46664C14.3652 7.68196 16.0142 9.55089 18.2122 9.82681"
                stroke="#AFAFAF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.4244 5.04144V3.46096"
                stroke="#AFAFAF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.4488 1.19999H9.9383C8.89478 1.19999 8.04883 2.04595 8.04883 3.08951V10.1983C8.04883 11.2418 8.89478 12.0878 9.9383 12.0878H17.6196L20.9105 14.8976V12.0878C21.9541 12.0878 22.8 11.2418 22.8 10.1983V3.08951C22.8 2.04595 21.9541 1.19999 20.9105 1.19999H17.4"
                stroke="#AFAFAF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9512 12.0878V18.1007C15.9512 19.1443 15.1053 19.9902 14.0617 19.9902H6.38048L3.08951 22.8V19.9902C2.04595 19.9902 1.2 19.1443 1.2 18.1007V10.9919C1.2 9.94838 2.04595 9.10243 3.08951 9.10243H8.04878"
                stroke="#AFAFAF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1582_4849">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        iconPosition: "postfix",
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
            label: "Group inside Option 4",
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

interface BaseOption {
  value: string;
  label: string | JSX.Element;
  disabled?: boolean;
  selected?: boolean;
}

interface Icon {
  isIcon: boolean;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
}

interface GroupOption extends BaseOption, Icon {
  title: string;
  options: Option[];
}

type Option = BaseOption | (BaseOption & Icon) | GroupOption;

interface Props {
  options?: Option[] | GroupOption[];
  onSelect?: (selectedOptions: Option[]) => void;
  multiSelect?: boolean;
}

const CustomDropdown: React.FC<Props> = ({
  options,
  onSelect,
  multiSelect = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (clickedOption: Option) => {
    if (!clickedOption.disabled) {
      let updatedSelectedOptions;

      if (multiSelect) {
        // Toggle selection for multi-select and ensure no duplicate objects
        if (
          selectedOptions?.some(
            (selected) => selected.value === clickedOption.value
          )
        ) {
          // Remove the option if it already exists in the selectedOptions array
          updatedSelectedOptions = selectedOptions?.filter(
            (selected) => selected.value !== clickedOption.value
          );
        } else {
          // Add the option if it doesn't exist in the selectedOptions array
          updatedSelectedOptions = [...selectedOptions, clickedOption];
        }
      } else {
        // Single selection for non-multi-select
        updatedSelectedOptions = [clickedOption];
      }

      setSelectedOptions(updatedSelectedOptions);
      if (onSelect) {
        onSelect(updatedSelectedOptions);
      }
    }
  };

  const handleClickOutside = (event: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const getInitiallySelectedOptions = (options: any[]) => {
    return options?.reduce((selected, option) => {
      if (option.selected && !option.disabled) {
        selected.push(option);
      }
      if (option.options) {
        selected.push(...getInitiallySelectedOptions(option.options));
      }
      return selected;
    }, []);
  };

  useEffect(() => {
    // Initialize selected options based on the `selected` property
    const initialSelectedOptions = getInitiallySelectedOptions(options || []);
    setSelectedOptions(initialSelectedOptions);
    if (onSelect) {
      onSelect(initialSelectedOptions);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the total height of dropdown options
      let totalOptionsHeight = 0;
      const dropdownOptions =
        dropdownRef.current.querySelector(".dropdown-options");
      if (dropdownOptions) {
        totalOptionsHeight = dropdownOptions.getBoundingClientRect().height;
      }

      if (
        dropdownRect.bottom > windowHeight - totalOptionsHeight &&
        dropdownRect.top > windowHeight / 2
      ) {
        dropdownRef.current.classList.add("open-up");
      } else {
        dropdownRef.current.classList.remove("open-up");
      }
    }
  }, [isOpen]);

  return (
    <div
      className={`custom-dropdown ${isOpen ? "open" : ""}`}
      ref={dropdownRef}
    >
      {/* dropdown header */}
      <DropdownHeader
        toggleDropdown={toggleDropdown}
        selectedOptions={selectedOptions}
      />
      {/* dropdown lists */}
      {isOpen && (
        <div className="dropdown-options">
          {options?.map((groupOrOption, index) => (
            <React.Fragment key={index}>
              {"options" in groupOrOption ? (
                <RenderOptions
                  groupOrOption={groupOrOption as GroupOption}
                  isGroup={true}
                  selectedOptions={selectedOptions}
                  onClickOption={handleOptionClick}
                />
              ) : (
                <RenderOptions
                  groupOrOption={groupOrOption as BaseOption}
                  isGroup={false}
                  selectedOptions={selectedOptions}
                  onClickOption={handleOptionClick}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
