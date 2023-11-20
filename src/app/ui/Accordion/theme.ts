import type { keepAccordionTheme } from "./Accordion";
import baseCss from "./style.module.css";
export const accordionTheme: keepAccordionTheme = {
  root: {
    // base: 'bg-slate-50',
    base: baseCss.root__base,
    flush: {
      // off: "border-b-2 border-b-slate-200",
      // on: "border-b",
      on: baseCss.root__flush__on,
      off: baseCss.root__flush__off,
    },
  },
  content: {
    // base: "pb-5 px-5 md:text-base text-sm text-slate-500 font-normal transition-all duration-300",
    base: baseCss.content__base,
  },
  title: {
    // disabled: "cursor-not-allowed opacity-50",
    disabled: baseCss.title__disabled,
    arrow: {
      // base: "h-6 w-6 shrink-0",
      base: baseCss.title__arrow__base,
      open: {
        off: "",
        // on: "rotate-180",
        on: baseCss.title__arrow__open__on,
      },
    },
    // base: "flex w-full items-center py-5 px-5 text-left font-medium md:text-xl text-md text-slate-800 hover:bg-slate-100",
    base: baseCss.title__base,
    iconPosition: {
      // left: "gap-5",
      left: baseCss.title__iconPosition__left,
      // right: "justify-between",
      right: baseCss.title__iconPosition__right,
    },
    flush: {
      // off: "hover:bg-slate-50",
      off: baseCss.title__flush__off,
      // on: "!bg-transparent",
      on: baseCss.title__flush__on,
    },
    heading: "",
    open: {
      // off: "bg-slate-25",
      off: baseCss.title__open__off,
      // on: "bg-slate-50",
      on: baseCss.title__open__on,
    },
  },
};
