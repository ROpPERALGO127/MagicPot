interface IonIconProps {
  name: string;
  size?: string;
  color?: string;
  className?: string;
}

export default function IonIcon({ name, size, color, className }: IonIconProps) {
  return (
    // @ts-expect-error - ion-icon is a web component that TypeScript doesn't recognize by default
    <ion-icon
      name={name}
      size={size}
      color={color}
      className={className}
    />
  );
} 