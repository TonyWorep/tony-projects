export type Driver = {
  name: string;
  pfp: string;
  points: number;
};

export const drivers = {
  Johannes: {
    pfp: "https://cdn.discordapp.com/avatars/163195440974528512/118dcf418c48736e3b669aa0d0257103.png?size=1024",
    points: 25,
  },
  Tony: {
    pfp: "https://cdn.discordapp.com/avatars/484955136997851148/b5cdf1c9210be63b4cb97cfe12951b6d.png?size=1024",
    points: 2,
  },
  Jacob: {
    pfp: "https://cdn.discordapp.com/avatars/386234508095258644/ea82f4105eefc27f972aa8bd68cec7a8.png?size=1024",
    points: 0,
  },
};

export const f1Tracks = [
  "Melbourne",
  "Kina",
  "Suzuka",
  "Bahrain",
  "Jeddah",
  "Miami",
  "Imola",
  "Monaco",
  "Barcelona",
  "Canada",
  "Redbullring",
  "Silverstone",
  "Spa",
  "Hungary",
  "Zandvoort",
  "Monza",
  "Baku",
  "Singapore",
  "Austin",
  "Mexico",
  "Interlagos",
  "Las Vegas",
  "Qatar",
  "Abu Dhabi",
];
