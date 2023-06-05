import type themeColors from '../../style-config.json';

type ThemeColorTypes = keyof typeof themeColors.theme.color.light;
type ThemeSizes = keyof typeof themeColors.theme.size;
type ThemeSpacing = keyof typeof themeColors.theme.spacing;
type ThemeFonts = keyof typeof themeColors.theme.font;

export interface StyleInterface {
  /* Layout */
  display?: string;
  overflow?: string;
  position?: 'absolute' | 'relative' | 'static';
  tp?: number | string;
  bm?: number | string;
  lt?: number | string;
  rt?: number | string;
  z?: number;

  /* Sizing */
  p?: number | ThemeSpacing;
  m?: number | ThemeSpacing;
  mx?: number | ThemeSpacing;
  my?: number | ThemeSpacing;
  mt?: number | ThemeSpacing;
  mb?: number | ThemeSpacing;
  ml?: number | ThemeSpacing;
  mr?: number | ThemeSpacing;
  px?: number | ThemeSpacing;
  py?: number | ThemeSpacing;
  pt?: number | ThemeSpacing;
  pb?: number | ThemeSpacing;
  pl?: number | ThemeSpacing;
  pr?: number | ThemeSpacing;

  /* Flex */
  w?: number | ThemeSizes | 'full' | string;
  h?: number | ThemeSizes | 'full' | string;
  minW?: number | ThemeSizes | 'full' | string;
  minH?: number | ThemeSizes | 'full' | string;
  maxW?: number | ThemeSizes | 'full' | string;
  maxH?: number | ThemeSizes | 'full' | string;

  /* Backgrounds */
  bg?: ThemeColorTypes;

  /* Flexbox */
  flex?: number;
  direction?: 'row' | 'column';
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  /* Typography */
  fs?: number | ThemeSizes;
  ff?: ThemeFonts;
  fw?: string | number;
  fc?: string;
  lh?: string | number;
  ls?: string | number;
  tc?: string;
  dc?: string | number;
  color?: ThemeColorTypes;

  /* Borders */
  bw?: number;
  btw?: number;
  bbw?: number;
  brw?: number;
  blw?: number;
  br?: string | number;
  bs?: string;
  bc?: ThemeColorTypes;
  btwc?: string;
  bbwc?: string;
  brc?: string;
  blc?: string;
}

export const shortcutStyles = {
  /* Layout */
  display: 'display',
  overflow: 'overflow',
  position: 'position',
  tp: 'top',
  bm: 'bottom',
  lt: 'left',
  rt: 'right',
  z: 'zIndex',

  /* Spacing */
  p: 'padding',
  m: 'margin',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  pl: 'paddingLeft',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',

  /* Sizing */
  w: 'width',
  h: 'height',
  minW: 'minWidth',
  maxW: 'maxWidth',
  minH: 'minHeight',
  maxH: 'maxHeight',

  /* Backgrounds */
  bg: 'backgroundColor',

  /* Flexbox */
  flex: 'flex',
  align: 'alignItems',
  justify: 'justifyContent',
  direction: 'flexDirection',
  wrap: 'flexWrap',

  /* Typography */
  fs: 'fontSize',
  ff: 'fontFamily',
  fw: 'fontWeight',
  fc: 'color',
  lh: 'lineHeight',
  ls: 'letterSpacing',
  tc: 'textAlign',
  dc: 'textDecorationLine',
  color: 'color',

  /* Borders */
  bw: 'borderWidth',
  btw: 'borderTopWidth',
  bbw: 'borderBottomWidth',
  brw: 'borderRightWidth',
  blw: 'borderLeftWidth',
  br: 'borderRadius',
  bs: 'borderStyle',
  bc: 'borderColor',
  btwc: 'borderTopColor',
  bbwc: 'borderBottomColor',
  brc: 'borderRightColor',
  blc: 'borderLeftColor',
} as never;

export const spacingData = [
  'p',
  'm',
  'mx',
  'my',
  'mt',
  'mb',
  'px',
  'py',
  'pl',
  'pt',
  'pr',
  'pb',
];
export const colorData = [
  'color',
  'bg',
  'fc',
  'bc',
  'btwc',
  'bbwc',
  'brc',
  'blc',
];
export const SizeData = [
  'fs',
  'lh',
  'ls',
  'w',
  'br',
  'h',
  'minW',
  'maxW',
  'minH',
  'maxH',
];
