import React from "react";
import { motion } from "framer-motion";
import { Emotion } from "./EmotionSelector";

interface VerseDisplayProps {
  selectedEmotion: Emotion | null;
  isJarOpened: boolean;
}

interface Verse {
  text: string;
  reference: string;
}

const verses: Record<string, Verse[]> = {
  happy: [
    {
      text: "This is the day that the LORD has made; let us rejoice and be glad in it.",
      reference: "Psalm 118:24",
    },
    {
      text: "Rejoice in the Lord always; again I will say, rejoice.",
      reference: "Philippians 4:4",
    },
    {
      text: "The joy of the LORD is your strength.",
      reference: "Nehemiah 8:10",
    },
    {
      text: "You make known to me the path of life; in your presence there is fullness of joy.",
      reference: "Psalm 16:11",
    },
    {
      text: "Let the heavens be glad, and let the earth rejoice!",
      reference: "1 Chronicles 16:31",
    },
    { text: "A joyful heart is good medicine.", reference: "Proverbs 17:22" },
    {
      text: "Clap your hands, all peoples! Shout to God with loud songs of joy!",
      reference: "Psalm 47:1",
    },
    {
      text: "Sing praises to the LORD, for he has done gloriously.",
      reference: "Isaiah 12:5",
    },
    { text: "Shout for joy to God, all the earth!", reference: "Psalm 66:1" },
    {
      text: "Rejoice, O righteous, in the LORD; praise befits the upright.",
      reference: "Psalm 33:1",
    },
  ],
  thankful: [
    {
      text: "Give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
      reference: "1 Thessalonians 5:18",
    },
    {
      text: "Oh give thanks to the LORD, for he is good; for his steadfast love endures forever!",
      reference: "Psalm 118:1",
    },
    {
      text: "Do not be anxious about anything... with thanksgiving let your requests be made known to God.",
      reference: "Philippians 4:6",
    },
    {
      text: "Let us come into his presence with thanksgiving.",
      reference: "Psalm 95:2",
    },
    {
      text: "Enter his gates with thanksgiving, and his courts with praise!",
      reference: "Psalm 100:4",
    },
    {
      text: "I will give thanks to you, LORD, with all my heart.",
      reference: "Psalm 9:1",
    },
    {
      text: "Thanks be to God for his inexpressible gift!",
      reference: "2 Corinthians 9:15",
    },
    {
      text: "Devote yourselves to prayer, being watchful and thankful.",
      reference: "Colossians 4:2",
    },
    {
      text: "Give thanks to the LORD, call upon his name.",
      reference: "1 Chronicles 16:8",
    },
    {
      text: "Offer to God a sacrifice of thanksgiving.",
      reference: "Psalm 50:14",
    },
  ],
  angry: [
    {
      text: "Be angry and do not sin; do not let the sun go down on your anger.",
      reference: "Ephesians 4:26",
    },
    {
      text: "Whoever is slow to anger has great understanding.",
      reference: "Proverbs 14:29",
    },
    {
      text: "Let every person be quick to hear, slow to speak, slow to anger.",
      reference: "James 1:19",
    },
    {
      text: "A soft answer turns away wrath, but a harsh word stirs up anger.",
      reference: "Proverbs 15:1",
    },
    { text: "Refrain from anger, and forsake wrath!", reference: "Psalm 37:8" },
    {
      text: "A fool gives full vent to his spirit, but a wise man quietly holds it back.",
      reference: "Proverbs 29:11",
    },
    {
      text: "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      reference: "Ecclesiastes 7:9",
    },
    {
      text: "Better a patient person than a warrior, one with self-control than one who takes a city.",
      reference: "Proverbs 16:32",
    },
    {
      text: "Let all bitterness and wrath and anger... be put away from you.",
      reference: "Ephesians 4:31",
    },
    {
      text: "The anger of man does not produce the righteousness of God.",
      reference: "James 1:20",
    },
  ],
  anxious: [
    {
      text: "Do not be anxious about anything...",
      reference: "Philippians 4:6",
    },
    {
      text: "Cast all your anxiety on him because he cares for you.",
      reference: "1 Peter 5:7",
    },
    {
      text: "Let not your hearts be troubled, neither let them be afraid.",
      reference: "John 14:27",
    },
    {
      text: "When I am afraid, I put my trust in you.",
      reference: "Psalm 56:3",
    },
    {
      text: "Even though I walk through the valley of the shadow of death, I will fear no evil.",
      reference: "Psalm 23:4",
    },
    {
      text: "Anxiety weighs down the heart, but a kind word cheers it up.",
      reference: "Proverbs 12:25",
    },
    {
      text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself.",
      reference: "Matthew 6:34",
    },
    {
      text: "I sought the LORD, and he answered me and delivered me from all my fears.",
      reference: "Psalm 34:4",
    },
    {
      text: "Say to those with anxious heart, 'Be strong; fear not!'",
      reference: "Isaiah 35:4",
    },
    {
      text: "He will keep in perfect peace those whose minds are steadfast.",
      reference: "Isaiah 26:3",
    },
  ],
  lonely: [
    { text: "Fear not, for I am with you...", reference: "Isaiah 41:10" },
    {
      text: "The LORD is near to the brokenhearted...",
      reference: "Psalm 34:18",
    },
    {
      text: "He will not leave you or forsake you.",
      reference: "Deuteronomy 31:8",
    },
    {
      text: "I am with you always, to the end of the age.",
      reference: "Matthew 28:20",
    },
    {
      text: "Though my father and mother forsake me, the LORD will receive me.",
      reference: "Psalm 27:10",
    },
    { text: "God sets the lonely in families.", reference: "Psalm 68:6" },
    {
      text: "I will not leave you as orphans; I will come to you.",
      reference: "John 14:18",
    },
    {
      text: "The LORD your God is with you wherever you go.",
      reference: "Joshua 1:9",
    },
    {
      text: "You know when I sit and when I rise... you are familiar with all my ways.",
      reference: "Psalm 139:2-3",
    },
    {
      text: "Even there your hand shall lead me, and your right hand shall hold me.",
      reference: "Psalm 139:10",
    },
  ],
  sad: [
    {
      text: "The LORD is close to the brokenhearted...",
      reference: "Psalm 34:18",
    },
    {
      text: "Blessed are those who mourn, for they shall be comforted.",
      reference: "Matthew 5:4",
    },
    {
      text: "He will wipe away every tear from their eyes...",
      reference: "Revelation 21:4",
    },
    {
      text: "Weeping may tarry for the night, but joy comes with the morning.",
      reference: "Psalm 30:5",
    },
    {
      text: "He heals the brokenhearted and binds up their wounds.",
      reference: "Psalm 147:3",
    },
    {
      text: "Come to me, all who labor and are heavy laden, and I will give you rest.",
      reference: "Matthew 11:28",
    },
    {
      text: "The righteous cry out, and the LORD hears them; he delivers them from all their troubles.",
      reference: "Psalm 34:17",
    },
    {
      text: "You have turned my mourning into dancing.",
      reference: "Psalm 30:11",
    },
    {
      text: "For I will turn their mourning into joy and will comfort them.",
      reference: "Jeremiah 31:13",
    },
    {
      text: "He comforts us in all our troubles.",
      reference: "2 Corinthians 1:4",
    },
  ],
};

const VerseDisplay: React.FC<VerseDisplayProps> = ({
  selectedEmotion = null,
  isJarOpened = false,
}) => {
  if (!selectedEmotion || !isJarOpened) {
    return null;
  }

  // Get verses for the selected emotion
  const emotionVerses = verses[selectedEmotion.id] || [];

  // Select a random verse
  const randomVerse =
    emotionVerses[Math.floor(Math.random() * emotionVerses.length)];

  if (!randomVerse) {
    return null;
  }

  return (
    <motion.div
      className="w-full max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div
        className={`p-6 rounded-lg ${selectedEmotion.bgColor} bg-opacity-20`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg font-medium mb-2 text-gray-800">
            "{randomVerse.text}"
          </p>
          <p className={`text-right font-semibold ${selectedEmotion.color}`}>
            {randomVerse.reference}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VerseDisplay;
