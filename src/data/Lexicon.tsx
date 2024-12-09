import The_R_pentomino from "../assets/images/The-R-pentomino.png";
import Penta_decathlon from "../assets/images/Penta-decathlon.png";
import Diehard from "../assets/images/Diehard.png";
import Acorn from "../assets/images/Acorn.png";
import Glider from "../assets/images/Glider.png";
import LWSS from "../assets/images/LWSS.png";
type Pattern = {
  name: string;
  description: string;
  patterns: { i: number; j: number }[];
  img: string;
};
export const lexiconP: Pattern[] = [
  {
    name: "The R-pentomino",
    description:
      "The R-pentomino is a 5-cell pattern that evolves chaotically for 1,100+ generations, highlighting Game of Life's complexity.",
    patterns: [
      {
        i: 35,
        j: 42,
      },
      {
        i: 35,
        j: 43,
      },
      {
        i: 36,
        j: 41,
      },
      {
        i: 36,
        j: 42,
      },
      {
        i: 37,
        j: 42,
      },
    ],
    img: The_R_pentomino,
  },
  {
    name: "Penta-decathlon",
    description:
      "The Penta-decathlon is a 22-cell oscillator with a 15-generation cycle, known for its simple yet iconic form.",
    patterns: [
      {
        i: 28,
        j: 39,
      },
      {
        i: 28,
        j: 40,
      },
      {
        i: 28,
        j: 41,
      },
      {
        i: 29,
        j: 40,
      },
      {
        i: 30,
        j: 40,
      },
      {
        i: 31,
        j: 39,
      },
      {
        i: 31,
        j: 40,
      },
      {
        i: 31,
        j: 41,
      },
      {
        i: 33,
        j: 39,
      },
      {
        i: 33,
        j: 40,
      },
      {
        i: 33,
        j: 41,
      },
      {
        i: 34,
        j: 39,
      },
      {
        i: 34,
        j: 40,
      },
      {
        i: 34,
        j: 41,
      },
      {
        i: 36,
        j: 39,
      },
      {
        i: 36,
        j: 40,
      },
      {
        i: 36,
        j: 41,
      },
      {
        i: 37,
        j: 40,
      },
      {
        i: 38,
        j: 40,
      },
      {
        i: 39,
        j: 39,
      },
      {
        i: 39,
        j: 40,
      },
      {
        i: 39,
        j: 41,
      },
    ],
    img: Penta_decathlon,
  },
  {
    name: "Diehard",
    description:
      "The Diehard pattern is a 7-cell configuration that survives 130 generations before disappearing, showcasing chaotic behavior.",
    patterns: [
      {
        i: 32,
        j: 42,
      },
      {
        i: 33,
        j: 36,
      },
      {
        i: 33,
        j: 37,
      },
      {
        i: 34,
        j: 37,
      },
      {
        i: 34,
        j: 41,
      },
      {
        i: 34,
        j: 42,
      },
      {
        i: 34,
        j: 43,
      },
    ],
    img: Diehard,
  },
  {
    name: "Acorn",
    description:
      "The Acorn is a 7-cell pattern that produces a glider and evolves into various structures over generations.",
    patterns: [
      {
        i: 32,
        j: 57,
      },
      {
        i: 33,
        j: 59,
      },
      {
        i: 34,
        j: 56,
      },
      {
        i: 34,
        j: 57,
      },
      {
        i: 34,
        j: 60,
      },
      {
        i: 34,
        j: 61,
      },
      {
        i: 34,
        j: 62,
      },
    ],
    img: Acorn,
  },
  {
    name: "Glider",
    description:
      "The Glider is a pattern that moves diagonally across the grid while maintaining its shape.",
    patterns: [
      {
        i: 36,
        j: 41,
      },
      {
        i: 37,
        j: 39,
      },
      {
        i: 37,
        j: 41,
      },
      {
        i: 38,
        j: 40,
      },
      {
        i: 38,
        j: 41,
      },
    ],
    img: Glider,
  },
  {
    name: "LWSS",
    description:
      "The LWSS (Lightweight Spaceship) is a small, fast-moving pattern that travels across the grid.",
    patterns: [
      {
        i: 29,
        j: 41,
      },
      {
        i: 29,
        j: 44,
      },
      {
        i: 30,
        j: 40,
      },
      {
        i: 31,
        j: 40,
      },
      {
        i: 31,
        j: 44,
      },
      {
        i: 32,
        j: 40,
      },
      {
        i: 32,
        j: 41,
      },
      {
        i: 32,
        j: 42,
      },
      {
        i: 32,
        j: 43,
      },
    ],
    img: LWSS,
  },
];
