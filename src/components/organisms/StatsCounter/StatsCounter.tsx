import { Heading } from "../../atoms";
import "./StatsCounter.css";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  backgroundImage?: string;
}

function StatsCounter({ stats, backgroundImage }: StatsCounterProps) {
  const style = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <div className="stats-counter" style={style}>
      {stats.map((stat) => (
        <div key={stat.label} className="stats-counter__item">
          <Heading lvl={2} light>{stat.value}</Heading>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsCounter;
