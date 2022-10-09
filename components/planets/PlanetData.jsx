// Inner planets earth, mercury, mars, venus
// Outer planets: saturn, jupiter, neptune, uranus

const random = (a, b) => a + Math.random() * b;

// Own for Jupiter?

// Order distance from sun: mercury, venus, earth, mars
// Order distance from sun: jupiter, saturn, uranus, neptune

const planetData = [
  {
    id: "mercury",
    textureMap: "/mercury.jpg",
    radius: 1,
    offset: random(0, Math.PI * 2),
    speed: random(0.15, 0.4),
    rotationSpeed: random(0.01, 0.03),
    xRadius: 8,
    zRadius: 4,
  },
  {
    id: "venus",
    textureMap: "/venus.jpg",
    radius: 1.5,
    offset: random(0, Math.PI * 2),
    speed: random(0.15, 0.4),
    rotationSpeed: random(0.01, 0.03),
    xRadius: 10,
    zRadius: 5,
  },
  {
    id: "earth",
    textureMap: "/earth.jpg",
    radius: 1,
    offset: random(0, Math.PI * 2),
    speed: random(0.15, 0.4),
    rotationSpeed: random(0.01, 0.05),
    xRadius: 12,
    zRadius: 6,
  },
  {
    id: "mars",
    textureMap: "/mars.jpg",
    radius: 1,
    offset: random(0, Math.PI * 2),
    speed: random(0.15, 0.4),
    rotationSpeed: random(0.01, 0.03),
    xRadius: 14,
    zRadius: 7,
  },
  {
    id: "jupiter",
    textureMap: "/jupiter.jpg",
    radius: 2,
    offset: random(0, Math.PI * 2),
    speed: random(0.15, 0.4),
    rotationSpeed: random(0.01, 0.03),
    xRadius: 18,
    zRadius: 9,
  },
  // {
  //   id: "saturn",
  //   textureMap: "/saturn.jpg",
  //   radius: 2.6,
  //   offset: random(0, Math.PI * 2),
  //   speed: random(0.15, 0.4),
  //   rotationSpeed: random(0.01, 0.03),
  //   xRadius: 22,
  //   zRadius: 11,
  // },
  {
    id: "uranus",
    textureMap: "/uranus.jpg",
    radius: 1,
    offset: random(0, Math.PI * 2),
    speed: random(0.15, 0.4),
    rotationSpeed: random(0.01, 0.03),
    xRadius: 24,
    zRadius: 12,
  },
  {
    id: "neptune",
    textureMap: "/neptune.jpg",
    radius: 1,
    offset: random(0, Math.PI * 2),
    speed: random(0.15, 0.4),
    rotationSpeed: random(0.01, 0.03),
    xRadius: 26,
    zRadius: 13,
  },
];

export { planetData };
