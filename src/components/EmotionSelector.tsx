import React from "react";
import { Button } from "./ui/button";

export interface Emotion {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  hoverColor: string;
}

interface EmotionSelectorProps {
  onSelectEmotion: (emotion: Emotion) => void;
  selectedEmotion?: Emotion | null;
}

const emotions: Emotion[] = [
  {
    id: "happy",
    name: "Happy",
    color: "text-yellow-900",
    bgColor: "bg-yellow-300",
    hoverColor: "hover:bg-yellow-400",
  },
  {
    id: "thankful",
    name: "Thankful",
    color: "text-orange-900",
    bgColor: "bg-orange-300",
    hoverColor: "hover:bg-orange-400",
  },
  {
    id: "angry",
    name: "Angry",
    color: "text-red-900",
    bgColor: "bg-red-300",
    hoverColor: "hover:bg-red-400",
  },
  {
    id: "anxious",
    name: "Anxious",
    color: "text-green-900",
    bgColor: "bg-green-300",
    hoverColor: "hover:bg-green-400",
  },
  {
    id: "lonely",
    name: "Lonely",
    color: "text-sky-900",
    bgColor: "bg-sky-300",
    hoverColor: "hover:bg-sky-400",
  },
  {
    id: "sad",
    name: "Sad",
    color: "text-blue-900",
    bgColor: "bg-blue-300",
    hoverColor: "hover:bg-blue-400",
  },
];

const EmotionSelector: React.FC<EmotionSelectorProps> = ({
  onSelectEmotion = () => {},
  selectedEmotion = null,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium text-center mb-4 text-gray-700">
        How are you feeling today?
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {emotions.map((emotion) => (
          <Button
            key={emotion.id}
            onClick={() => onSelectEmotion(emotion)}
            className={`
              ${emotion.bgColor} 
              ${emotion.color} 
              ${emotion.hoverColor} 
              border-2 
              ${selectedEmotion?.id === emotion.id ? "border-gray-800 ring-2 ring-gray-400" : "border-transparent"} 
              transition-all 
              h-16 
              font-medium
              rounded-lg
              flex
              flex-col
              justify-center
              items-center
              shadow-sm
            `}
            variant="ghost"
          >
            <span className="text-sm">{emotion.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default EmotionSelector;
