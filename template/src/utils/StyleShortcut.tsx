import {
  SizeData,
  StyleInterface,
  colorData,
  shortcutStyles,
  spacingData,
} from '@/interface';
import {useColorScheme} from 'react-native';
import StyleConfig from '../../style-config.json';

function darkMode() {
  const scheme = useColorScheme();
  if (scheme === 'light') {
    return StyleConfig.theme.color.light;
  } else if (scheme === 'dark') {
    return StyleConfig.theme.color.dark;
  }
  return StyleConfig.theme.color.light;
}

function objectSearch(data: object, value: string) {
  const colorsKey = Object.keys(data);
  const key: any = colorsKey?.find((_data: string) => _data === value);
  return data[key] ?? value;
}

function stylesConfig(type: string, value: string) {
  if (type === 'color') {
    return objectSearch(darkMode(), value);
  } else if (type === 'spacing') {
    return objectSearch(StyleConfig.theme.spacing, value);
  } else if (type === 'size') {
    return objectSearch(StyleConfig.theme.size, value);
  } else if (type === 'typography') {
    return objectSearch(StyleConfig.theme.font, value);
  }
  return;
}

export const getStyleShortcuts = (props: StyleInterface | any) => {
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
