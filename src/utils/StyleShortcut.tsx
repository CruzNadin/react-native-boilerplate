import StyleConfig from '../../style-config.json';

const shortcutStyles = {
  mx: 'marginHorizontal',
  my: 'marginVertical',
  mt: 'marginTop',
  mb: 'marginBottom',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  pl: 'paddingLeft',
  pt: 'paddingTop',
  bg: 'backgroundColor',
  fs: 'fontSize',
  bw: 'borderWidth',
  flex: 'flex',
  align: 'alignItems',
  justify: 'justifyContent',
  direction: 'flexDirection',
  color: 'color',
} as any;

const spacingData = ['mx', 'my', 'mt', 'mb', 'px', 'py', 'pl', 'pt'];

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
  }
  return;
}

export const getStyleShortcuts = (props: any) => {
  const _props = Object.keys(props).filter(prop => Object.keys(shortcutStyles).includes(prop)) // prettier-ignore

  const styles = {} as any;

  _props.forEach((prop: any) => {
    if (prop === 'bg' || prop === 'color') {
      styles[shortcutStyles[prop]] = stylesConfig('color', props[prop]);
    } else if (spacingData.includes(prop)) {
      styles[shortcutStyles[prop]] = stylesConfig('spacing', props[prop]);
    } else if (shortcutStyles[prop]) {
      styles[shortcutStyles[prop]] = props[prop];
    }
  });

  return styles;
};
