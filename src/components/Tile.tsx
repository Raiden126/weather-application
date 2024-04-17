import Feels from "./Icons/Feels";
import Humidity from "./Icons/Humidity";
import Pop from "./Icons/Pop";
import Pressure from "./Icons/Pressure";
import Visibility from "./Icons/Visibility";
import Wind from "./Icons/Wind";

type Props = {
    icon:'wind' | 'feels' | 'humidity' | 'pressure' | 'pop' | 'visibility';
    title: string;
    info: string | JSX.Element;
    description: string;
}

const icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    visibility: Visibility,
    pressure: Pressure,
    pop: Pop
}

const Tile = ({icon, title, info, description}: Props): JSX.Element => {
    const Icon = icons[icon]
    return (
    <article className="w-[120px] h-[120px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
        <div className="flex items-center text-sm font-bold">
        <Icon /> <h4 className="ml-1">{title}</h4>
        </div>
        <h3 className="mt-2 text-lg">{info}</h3>
        <p className="text-xs font-bold">{description}</p>
    </article>
  )
}

export default Tile;
