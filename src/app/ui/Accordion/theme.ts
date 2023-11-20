import type { AccordionTheme } from "./Accordion";
import baseCss from "./style.module.css";
export const accordionTheme: AccordionTheme = {
  root: {
    base: baseCss.root__base,
    flush: {
      on: baseCss.root__flush__on,
      off: baseCss.root__flush__off,
    },
  },
  content: {
    base: baseCss.content__base,
  },
  title: {
    disabled: baseCss.title__disabled,
    arrow: {
      base: baseCss.title__arrow__base,
      open: {
        off: "",
        on: baseCss.title__arrow__open__on,
      },
    },
    base: baseCss.title__base,
    iconPosition: {
      left: baseCss.title__iconPosition__left,
      right: baseCss.title__iconPosition__right,
    },
    flush: {
      off: baseCss.title__flush__off,
      on: baseCss.title__flush__on,
    },
    heading: "",
    open: {
      off: baseCss.title__open__off,
      on: baseCss.title__open__on,
    },
  },
};
