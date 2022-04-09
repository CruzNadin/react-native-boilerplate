export type BlockInterface = {
  mt: number | string;
  mr: number | string;
  mb: number | string;
  ml: number | string;
  pt: number | string;
  pr: number | string;
  pb: number | string;
  pl: number | string;
  px: number | string;
  py: number | string;
  p: number | string;
  m: number | string;
  onPress?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};
