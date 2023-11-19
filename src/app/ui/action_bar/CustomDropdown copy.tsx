// CustomDropdown.js
import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({
  options,
  onSelect,
  defaultOption,
  multiSelect = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    defaultOption ? defaultOption : []
  );
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (!option.disabled) {
      let updatedSelectedOptions;

      if (multiSelect) {
        // Toggle selection for multi-select and ensure no duplicate objects
        if (
          selectedOptions.some((selected) => selected.value === option.value)
        ) {
          // Remove the option if it already exists in the selectedOptions array
          updatedSelectedOptions = selectedOptions.filter(
            (selected) => selected.value !== option.value
          );
        } else {
          // Add the option if it doesn't exist in the selectedOptions array
          updatedSelectedOptions = [...selectedOptions, option];
        }
      } else {
        // Single selection for non-multi-select
        updatedSelectedOptions = [option];
      }

      setSelectedOptions(updatedSelectedOptions);
      onSelect(updatedSelectedOptions);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
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
  console.log(selectedOptions);
  return (
    <div
      className={`custom-dropdown ${isOpen ? "open" : ""}`}
      ref={dropdownRef}
    >
      <div
        className="dropdown-header"
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0
          ? selectedOptions.map((opt, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".2rem",
                  width: "100%",
                }}
              >
                <div>
                  {/* prefix icon */}
                  {opt?.isIcon && opt?.prefix && (
                    <span className="icon">{opt?.prefix}</span>
                  )}
                </div>
                <div className="option__label"> {opt?.label}</div>
                <div>
                  {opt?.isIcon && opt?.suffix && (
                    <span className="icon">{opt?.suffix}</span>
                  )}
                </div>
              </div>
            ))
          : "Select option(s)"}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((groupOrOption, index) => (
            <React.Fragment key={index}>
              {groupOrOption.options ? ( // Check if it's a group
                <div className="option-group">
                  {groupOrOption.title && (
                    <div className="group-title">
                      {groupOrOption.title}
                      <hr />
                    </div>
                  )}
                  {groupOrOption.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`dropdown-option ${
                        option.disabled ? "disabled" : ""
                      } ${
                        selectedOptions.some(
                          (selected) => selected.value === option.value
                        )
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <div>
                        {/* prefix icon */}
                        {option.isIcon && option.prefix && (
                          <span className="icon">{option.prefix}</span>
                        )}
                      </div>
                      <div className="option__label"> {option.label}</div>
                      <div>
                        {option.isIcon && option.suffix && (
                          <span className="icon">{option.suffix}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className={`dropdown-option ${
                    groupOrOption.disabled ? "disabled" : ""
                  } ${
                    selectedOptions.some(
                      (selected) => selected.value === groupOrOption.value
                    )
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleOptionClick(groupOrOption)}
                >
                  <div>
                    {/* prefix icon */}
                    {groupOrOption.isIcon && groupOrOption.prefix && (
                      <span className="icon">{groupOrOption.prefix}</span>
                    )}
                  </div>
                  <div className="option__label"> {groupOrOption.label}</div>
                  <div>
                    {groupOrOption.isIcon && groupOrOption.suffix && (
                      <span className="icon">{groupOrOption.suffix}</span>
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
