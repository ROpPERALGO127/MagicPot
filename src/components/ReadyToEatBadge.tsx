import IonIcon from './IonIcon';

interface BadgeProps {
  icon: string;
  text: string;
  subText: string;
}

export default function ReadyToEatBadge({ icon, text, subText }: BadgeProps) {
  return (
    <div className="rte-badge-container">
      <div className="rte-badge">
        <div className="badge-content">
          <div className="utensils">
            <IonIcon name={icon} />
          </div>
          <div className="badge-text">{text}</div>
        </div>
        <div className="badge-dot"></div>
      </div>
      <div className="rte-text">{subText}</div>
    </div>
  );
} 