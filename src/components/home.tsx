import React, { useState } from "react";
import EmotionSelector, { Emotion } from "./EmotionSelector";
import VerseJar from "./VerseJar";
import VerseDisplay from "./VerseDisplay";

function Home() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [isJarOpened, setIsJarOpened] = useState(false);

  const handleSelectEmotion = (emotion: Emotion) => {
    setSelectedEmotion(emotion);
    setIsJarOpened(false);
  };

  const handleOpenJar = () => {
    setIsJarOpened(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Bible Verse Jar
          </h1>
          <p className="text-gray-600">
            Find comfort and guidance based on how you're feeling today
          </p>
        </header>

        <div className="space-y-8">
          <EmotionSelector
            onSelectEmotion={handleSelectEmotion}
            selectedEmotion={selectedEmotion}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <VerseJar
              selectedEmotion={selectedEmotion}
              onOpenJar={handleOpenJar}
            />

            <VerseDisplay
              selectedEmotion={selectedEmotion}
              isJarOpened={isJarOpened}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
