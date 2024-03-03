import {
  art,
  brush,
  color,
  paint,
  landscape,
  darklingsun,
  blackhorse
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Acrylic",
      icon: color,
    },
    {
      title: "Oil",
      icon: paint,
    },
    {
      title: "Sketches",
      icon: brush,
    },
    {
      title: "Nature",
      icon: art,
    },
  ];
  
  const projects = [
    {
      name: "Beautiful landscape",
      description:
        "Towering trees, adorned with vibrant foliage, stand as silent sentinels against the azure sky, their branches reaching towards the heavens. In the distance, majestic mountains rise majestically, their peaks kissed by wisps of ethereal clouds.",
      tags: [
        {
          name: "acrylic",
          color: "blue-text-gradient",
        },
        {
          name: "on canvas",
          color: "pink-text-gradient",
        },
      ],
      image: landscape,
    },
    {
      name: "Darkling and Sun Summoner",
      description:
        "The Darkling, cloaked in shadows, exudes an aura of mystery and power, his piercing gaze hinting at depths of darkness yet to be unveiled. In stark contrast, the Sun Summoner emanates a warm and luminous glow, her outstretched hand ablaze with radiant light, symbolizing hope and resilience.",
      tags: [
        {
          name: "acrylic",
          color: "blue-text-gradient",
        },
        {
          name: "on canvas",
          color: "pink-text-gradient",
        },
      ],
      image: darklingsun,
    },
    {
      name: "Black horse",
      description:
        "In the painting, a majestic black horse commands the viewer's attention with its powerful presence. Its sleek, ebony coat gleams under the soft light, exuding a sense of strength and grace. ",
      tags: [
        {
          name: "acrylic",
          color: "blue-text-gradient",
        },
        {
          name: "on canvas",
          color: "pink-text-gradient",
        },
      ],
      image: blackhorse,
    },
  ];
  
  export { services, projects };