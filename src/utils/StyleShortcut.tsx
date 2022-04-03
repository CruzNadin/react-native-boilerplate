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
  align: 'alignItems',
  justify: 'justifyContent',
  direction: 'flexDirection',
  color: 'color',
} as any;

function stylesConfig(type: string, value: string) {
  if (type === 'color') {
    const colors = StyleConfig.theme.color;
    const colorsKey = Object.keys(colors);
    const key = colorsKey?.find((color: string) => color === value);
    return colors[key] ?? value;
  }
  return;
}

export const getStyleShortcuts = (props: any) => {
  const _props = Object.keys(props).filter(prop => Object.keys(shortcutStyles).includes(prop)) // prettier-ignore

  const styles = {} as any;

  _props.forEach((prop: any) => {
    if (prop === 'bg' || prop === 'color') {
      styles[shortcutStyles[prop]] = stylesConfig('color', props[prop]);
    } else if (shortcutStyles[prop]) {
      styles[shortcutStyles[prop]] = props[prop];
    }
  });

  return styles;
};
