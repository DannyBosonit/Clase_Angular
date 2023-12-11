interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Videogames",
  details: {
    author: "Tenacious D",
    year: 2023,
  },
};

// const { song, songDuration: duration } = audioPlayer;
// const { author, year } = audioPlayer.details;

// console.log("Song: ", song);
// console.log("Duration: ", duration);
// console.log("Author: ", author);

const [, , trunks = "No se encuentra el personaje"]: string[] = [
  "Goku",
  "Vegeta",
];
// const personaje4 = dbz[3] || "No se encuentra el personaje";

console.log("Personaje 3:", trunks);
// console.error("Personaje 4: ", personaje4);

export {};
