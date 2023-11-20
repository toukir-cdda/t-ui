// import { AccordionTheme } from '../components/Accordion'
// import { AlertTheme } from '../components/Alert'
// import { AvatarTheme } from '../components/Avatar/Avatar'
// import { BadgeTheme } from '../components/Badge'
// import { BreadCrumbTheme } from '../components/Breadcrumb'
// import { ButtonTheme } from '../components/Button/Button'
// import { ButtonGroupTheme } from '../components/Button/ButtonGroup'
// import { CardTheme } from '../components/Card'
// import { CarouselTheme } from '../components/Carousel'
// import { CheckboxTheme } from '../components/CheckBox'
// import { CheckboxGroupTheme } from '../components/CheckboxGroup'
// import { DropdownTheme } from '../components/Dropdown'
// import { EmptyTheme } from '../components/Empty'
// import { FloatingTheme } from '../components/Floating'
// import { FormControlTheme } from '../components/FormControls/formControls'
// import { ModalTheme } from '../components/Modal'
// import { NavigationTheme } from '../components/Navigation'
// import { NotificationTheme } from '../components/Notification'
// import { PaginationTheme } from '../components/Pagination'
// import { PopoverTheme } from '../components/Popover'
// import { ProgressTheme } from '../components/Progress'
// import { RatingTheme } from '../components/Rating'
// import { SidebarTheme } from '../components/Sidebar'
// import { SkeletonTheme } from '../components/Skeleton'
// import { SpinnerTheme } from '../components/Spinner'
// import { StatisticTheme } from '../components/Statistic'
// import { StepTheme } from '../components/Steps'
// import { ToggleTheme } from '../components/Switch'
// import { TableTheme } from '../components/Table'
// import { TabTheme } from '../components/Tabs'
// import { TagTheme } from '../components/Tag'
// import { TimelineTheme } from '../components/Timeline'
// import { TreeTheme } from '../components/Tree'
// import { UploadTheme } from '../components/Upload'

import { AccordionTheme } from "@/app/ui/Accordion/Accordion";
import { DeepPartial } from "@/helpers/deep-partial";

export interface CheckboxShape {
  circle: string;
  round: string;
}
export interface Shapes {
  square: string;
  round: string;
  roundSquare: string;
}

export interface Positions {
  "bottom-left": string;
  "bottom-right": string;
  "bottom-center": string;
  "top-left": string;
  "top-center": string;
  "top-right": string;
  "center-left": string;
  center: string;
  "center-right": string;
}

export interface Sizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
  "7xl": string;
}

export interface ButtonType {
  primary: string;
  outlineGray: string;
  outlinePrimary: string;
  dashed: string;
  text: string;
  linkPrimary: string;
  linkGray: string;
  default: string;
}

export interface Boolean {
  off: string;
  on: string;
}

export interface StateColors {
  info: string;
  error: string;
  success: string;
  warning: string;
}

export interface Colors extends StateColors {
  [key: string]: string;
  blue: string;
  cyan: string;
  dark: string;
  gray: string;
  green: string;
  indigo: string;
  light: string;
  lime: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
}

export interface GradientColors extends Omit<StateColors, "warning"> {
  [key: string]: string;
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
  teal: string;
}

export interface GradientDuoToneColors {
  cyanToBlue: string;
  greenToBlue: string;
  pinkToOrange: string;
  purpleToBlue: string;
  purpleToPink: string;
  redToYellow: string;
  tealToLime: string;
}

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type CustomTheme = DeepPartial<Theme>;

export interface Theme {
  // alert: AlertTheme
  // avatar: AvatarTheme
  accordion: AccordionTheme;
  // button: ButtonTheme
  // buttonGroup: ButtonGroupTheme
  // badge: BadgeTheme
  // breadcrumb: BreadCrumbTheme
  // card: CardTheme
  // carousel: CarouselTheme
  // dropdown: DropdownTheme
  // progress: ProgressTheme
  // popover: PopoverTheme
  // pagination: PaginationTheme
  // navigation: NavigationTheme
  // notification: NotificationTheme
  // tooltip: FloatingTheme
  // modal: ModalTheme
  // rating: RatingTheme
  // spinner: SpinnerTheme
  // tabs: TabTheme
  // sidebar: SidebarTheme
  // switch: ToggleTheme
  // skeleton: SkeletonTheme
  // tag: TagTheme
  // table: TableTheme
  // timeline: TimelineTheme
  // empty: EmptyTheme
  // statistic: StatisticTheme
  // upload: UploadTheme
  // checkbox: CheckboxTheme
  // formControls: FormControlTheme
  // checkboxGroup: CheckboxGroupTheme
  // tree: TreeTheme
  // step: StepTheme
}
