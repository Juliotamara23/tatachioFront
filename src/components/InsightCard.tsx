interface InsightCardProps {
  icon: string;
  value: number;
  label: string;
}

export default function InsightCard({ icon, value, label }: InsightCardProps) {
  return (
    <li>
      <i className={`bx ${icon}`}></i>
      <span className="info">
        <h3>{value}</h3>
        <p>{label}</p>
      </span>
    </li>
  )
}