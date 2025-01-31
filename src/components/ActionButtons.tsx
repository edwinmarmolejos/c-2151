import { Film, Star, Clock, Compass, Heart } from "lucide-react";

const ActionButtons = () => {
  const actions = [
    { icon: <Film className="h-4 w-4 text-purple-400" />, label: "Popular Movies" },
    { icon: <Star className="h-4 w-4 text-yellow-400" />, label: "Top Rated" },
    { icon: <Clock className="h-4 w-4 text-blue-400" />, label: "Latest Releases" },
    { icon: <Compass className="h-4 w-4 text-green-400" />, label: "Discover" },
    { icon: <Heart className="h-4 w-4 text-red-400" />, label: "Recommendations" },
  ];

  return (
    <div className="flex gap-2 flex-wrap justify-center mt-4">
      {actions.map((action) => (
        <button 
          key={action.label} 
          className="relative flex h-[42px] items-center gap-1.5 rounded-full border border-movie-accent/20 px-3 py-2 text-start text-[13px] shadow-lg transition enabled:hover:bg-movie-main disabled:cursor-not-allowed xl:gap-2 xl:text-[14px] hover:border-movie-accent"
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;