export interface BaseOption {
  value: string;
  label: string | JSX.Element;
  disabled?: boolean;
  selected?: boolean;
}

export interface Icon {
  isIcon?: boolean;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
}

export interface GroupOption extends BaseOption, Icon {
  title: string;
  options: Option[];
}

export type Option = BaseOption | (BaseOption & Icon) | GroupOption;

interface styles {
  [key: string]: string;
}

export interface DropdownProps {
  options?: Option[] | GroupOption[];
  onSelect?: (selectedOptions: Option[]) => void;
  multiSelect?: boolean;
  styles?: styles;
  required?: boolean;
}

// dropdown header types
interface selectedOption {
  value: string;
  label: string | JSX.Element;
  disabled?: boolean;
  selected?: boolean;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  isIcon?: boolean;
}

export interface DropdownHeaderProps {
  toggleDropdown: () => void;
  selectedOptions: selectedOption[];
  styles?: styles;
  isError?: boolean;
  errorMessage?: string;
}

// dropdown render options types
export interface RenderOptionsProps {
  selectedOptions: selectedOption[];
  groupOrOption: Option | GroupOption;
  isGroup: boolean;
  onClickOption: (option: Option) => void;
  styles?: styles;
}

export interface OptionProps {
  option: selectedOption;
  onClickOption: (option: Option) => void;
  selectedOptions: selectedOption[];
  styles?: styles;
}
