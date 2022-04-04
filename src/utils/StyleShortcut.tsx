import StyleConfig from '../../style-config.json';

const shortcutStyles = {
  /* Layout */
  display: 'display',
  overflow: 'overflow',
  position: 'position',
  tp: 'top',
  bm: 'bottom',
  lt: 'left',
  rt: 'right',

  /* Spacing */
  mx: 'marginHorizontal',
  my: 'marginVertical',
  mt: 'marginTop',
  mb: 'marginBottom',
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
} as any;

const spacingData = [
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
const colorData = ['bg', 'fc', 'bc', 'btwc', 'bbwc', 'brc', 'blc'];
const SizeData = ['fs', 'lh', 'ls', 'w', 'h', 'minW', 'maxW', 'minH', 'maxH'];

function objectSearch(data: object, value: string) {
  const colorsKey = Object.keys(data);
  const key: any = colorsKey?.find((_data: string) => _data === value);
  return data[key] ?? value;
}

function stylesConfig(type: string, value: string) {
  if (type === 'color') {
    return objectSearch(StyleConfig.theme.color, value);
  } else if (type === 'spacing') {
    return objectSearch(StyleConfig.theme.spacing, value);
  } else if (type === 'size') {
    return objectSearch(StyleConfig.theme.size, value);
  } else if (type === 'typography') {
    return objectSearch(StyleConfig.theme.font, value);
  }
  return;
}

export const getStyleShortcuts = (props: any) => {
  const _props = Object.keys(props).filter(prop => Object.keys(shortcutStyles).includes(prop)) // prettier-ignore

  const styles = {} as any;

  _props.forEach((prop: any) => {
    if (colorData.includes(prop)) {
      styles[shortcutStyles[prop]] = stylesConfig('color', props[prop]);
    } else if (spacingData.includes(prop)) {
      styles[shortcutStyles[prop]] = stylesConfig('spacing', props[prop]);
    } else if (SizeData.includes(prop)) {
      styles[shortcutStyles[prop]] = stylesConfig('size', props[prop]);
    } else if (prop === 'ff') {
      styles[shortcutStyles[prop]] = stylesConfig('typography', props[prop]);
    } else if (shortcutStyles[prop]) {
      styles[shortcutStyles[prop]] = props[prop];
    }
  });

  return styles;
};
