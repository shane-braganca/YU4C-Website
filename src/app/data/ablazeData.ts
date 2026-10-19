export type AblazeEvent = {
  year: number;
  title: string;
  theme: string;
  color: string;
  darkColor: string;
  date: string;
  location: string;
  participants: string;
  speakers: string;
  worshipSessions: string;
  days: string;
  scripture?: string;
  description: string;
  coverImage: string;
  gallery: string[];
};

export const ablazeEvents: AblazeEvent[] = [
  {
    year: 2026,
    title: "Ablaze 2026",
    theme: "",
    color: "#055a33",
    darkColor: "#451A03",
    date: "Coming Soon",
    location: "Goa",
    participants: "",
    speakers: "",
    worshipSessions: "",
    days: "1",
    description:
      "Ablaze brings young people together for a powerful experience of faith, friendship, worship and transformation.",
    coverImage: "/ablaze/2026.jpg",
    gallery: [],
  },

  {
    year: 2025,
    title: "Ablaze 2025",
    theme: "Rooted in Christ",
    color: "#2196F3",
    darkColor: "#021B35",
    date: "26 – 12 October 2025",
    location: "Taleigao Community Hall – Goa",
    participants: "700+",
    speakers: "",
    worshipSessions: "",
    days: "1",
    scripture: "Hebrews 6:19",
    description:
      "Ablaze 2025 was a powerful encounter with God's presence. Through dynamic talks, uplifting worship and powerful adoration, thousands of young hearts were anchored deeper in His love.",
    coverImage: "/ablaze/2025.jpg",
    gallery: [
      "/ablaze/2025/gallery-1.jpg",
      "/ablaze/2025/gallery-2.jpg",
      "/ablaze/2025/gallery-3.jpg",
    ],
  },

  {
    year: 2024,
    title: "Ablaze 2024",
    theme: "Arise",
    color: "#EF2929",
    darkColor: "#450A0A",
    date: "2024",
    location: "Goa",
    participants: "",
    speakers: "",
    worshipSessions: "",
    days: "",
    description:
      "A year filled with worship, fellowship, prayer and unforgettable moments.",
    coverImage: "/ablaze/2024.jpg",
    gallery: [],
  },

  {
    year: 2023,
    title: "Ablaze 2023",
    theme: "",
    color: "#f7c455",
    darkColor: "#651810",
    date: "2023",
    location: "Goa",
    participants: "",
    speakers: "",
    worshipSessions: "",
    days: "1",
    description:
      "Ablaze 2023 reminded young people that they are known, loved and chosen.",
    coverImage: "/ablaze/2023.jpg",
    gallery: [],
  },
];
