import { Driver, drivers, f1Tracks, TRACK_INDEX } from "@/lib/thabetsstanding/info";

export default function StandingApp() {

  const driversArray: Driver[] = Object.entries(drivers)
    .map(([name, data]) => ({
      name,
      pfp: data.pfp,
      points: data.points,
    }))
    .sort((a, b) => b.points - a.points);

  let tracks = [];

  if (!TRACK_INDEX) {
    tracks = [f1Tracks[TRACK_INDEX], f1Tracks[TRACK_INDEX + 1]];
  } else if (TRACK_INDEX === f1Tracks.length) {
    tracks = [f1Tracks[TRACK_INDEX - 1], f1Tracks[TRACK_INDEX]];
  } else {
    tracks = [
      f1Tracks[TRACK_INDEX - 1],
      f1Tracks[TRACK_INDEX],
      f1Tracks[TRACK_INDEX + 1],
    ];
  }

  return (
    <div className="flex flex-col gap-20 min-h-screen">
      <div className="flex flex-col ml-5 sm:ml-56">
        <h1 className="font-bold text-4xl">Tha Bets F1 Standings</h1>
        <p className="opacity-75">
          {tracks[0]} - <span className="font-bold">{tracks[1]}</span> -{" "}
          {tracks[2]}
        </p>
      </div>
      <div className="flex gap-5 items-center ml-[39%]">
        <h2 className="text-yellow-500 font-bold text-5xl">1.</h2>
        <img
          src={driversArray[0].pfp}
          alt="Profile Picture"
          className="w-20 rounded-md"
        />
        <p className="font-bold text-2xl">{driversArray[0].name}</p>
        <p className="font-bold">{driversArray[0].points}</p>
      </div>
      <div className="flex flex-col gap-5">
        {driversArray.slice(1).map((driver, i) => (
          <div className="flex gap-5 items-center ml-[40%]">
            <p className="font-bold text-3xl">{i + 2}.</p>
            <img
              src={driver.pfp}
              alt="Profile Picture"
              className="w-20 rounded-md"
            />
            <p className="font-bold text-2xl">{driver.name}</p>
            <p className="font-bold">{driver.points}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto"></div>
    </div>
  );
}
