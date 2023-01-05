export interface ButtonInterface {
  onPress?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}
