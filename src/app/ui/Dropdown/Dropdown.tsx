import React, { useState, useRef, useEffect } from "react";
import DropdownHeader from "./DropdownHeader";
import RenderOptions from "./RenderOptions";
import cssStyles from "./styles/dropdown.module.css";
import {
  BaseOption,
  DropdownProps,
  GroupOption,
  Option,
} from "./dropdownTypes";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  multiSelect = false,
  styles,
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
      const dropdownOptions = dropdownRef.current.querySelector(
        `.${cssStyles.dropdown_options_base}`
      );
      if (dropdownOptions) {
        totalOptionsHeight = dropdownOptions.getBoundingClientRect().height;
      }

      if (
        dropdownRect.bottom > windowHeight - totalOptionsHeight &&
        dropdownRect.top > windowHeight / 2
      ) {
        dropdownRef.current.classList.add(cssStyles.open_up);
      } else {
        dropdownRef.current.classList.remove(cssStyles.open_up);
      }
    }
  }, [isOpen]);

  return (
    <div className={cssStyles.custom_dropdown} ref={dropdownRef}>
      {/* dropdown header */}
      <DropdownHeader
        toggleDropdown={toggleDropdown}
        selectedOptions={selectedOptions}
        styles={styles}
      />
      {/* dropdown lists */}
      {isOpen && (
        <div
          className={`${cssStyles.dropdown_options_base} ${
            styles && styles.optionContainer
              ? styles.optionContainer
              : cssStyles.dropdown_options
          }`}
        >
          {options?.map((groupOrOption, index) => (
            <React.Fragment key={index}>
              {"options" in groupOrOption ? (
                <RenderOptions
                  groupOrOption={groupOrOption as GroupOption}
                  isGroup={true}
                  selectedOptions={selectedOptions}
                  onClickOption={handleOptionClick}
                  styles={styles}
                />
              ) : (
                <RenderOptions
                  groupOrOption={groupOrOption as BaseOption}
                  isGroup={false}
                  selectedOptions={selectedOptions}
                  onClickOption={handleOptionClick}
                  styles={styles}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
