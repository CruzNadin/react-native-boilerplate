export interface StyleInterface {
  /* Layout */
  display: string;
  overflow: string;
  position: string;
  tp: number | string;
  bm: number | string;
  lt: number | string;
  rt: number | string;
  z: number;

  /* Sizing */
  p: number | string;
  m: number | string;
  mx: number | string;
  my: number | string;
  mt: number | string;
  mb: number | string;
  ml: number | string;
  mr: number | string;
  px: number | string;
  py: number | string;
  pt: number | string;
  pb: number | string;
  pl: number | string;
  pr: number | string;

  /* Flex */
  w: number | string;
  h: number | string;
  minW: number | string;
  minH: number | string;
  maxW: number | string;
  maxH: number | string;

  /* Backgrounds */
  bg: string;

  /* Flexbox */
  flex: number;
  direction: string;
  align: string;
  justify: string;
  wrap: string;

  /* Typography */
  fs: number | string;
  ff: string;
  fw: string | number;
  fc: string;
  lh: string | number;
  ls: string | number;
  tc: string;
  dc: string | number;
  color: string;

  /* Borders */
  bw: number;
  btw: number;
  bbw: number;
  brw: number;
  blw: number;
  br: string | number;
  bs: string;
  bc: string;
  btwc: string;
  bbwc: string;
  brc: string;
  blc: string;
}
