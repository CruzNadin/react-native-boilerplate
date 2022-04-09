export interface BlockInterface {
  onPress?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}
