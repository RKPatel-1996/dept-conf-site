// Helper to generate placeholder image URLs
const createPlaceholder = (text) =>
  `https://placehold.co/150x150/4A044E/FFFFFF?text=${text}`;

export const speakersData = [
  {
    id: 1,
    name: "K.S. Ulhas Cortes",
    affiliation: "TIFR-Hyderabad",
    imageUrl: createPlaceholder("KU"),
  },
  {
    id: 2,
    name: "Dr. P.K. Arora",
    affiliation: "DRDO",
    imageUrl: createPlaceholder("PA"),
  },
  {
    id: 3,
    name: "Dr. Rachna Shukla",
    affiliation: "USA",
    imageUrl: createPlaceholder("RS"),
  },
  {
    id: 4,
    name: "Dr. Sonali Chaturvedi",
    affiliation: "USA",
    imageUrl: createPlaceholder("SC"),
  },
  {
    id: 5,
    name: "AIIMS",
    affiliation: "Delhi",
    imageUrl: createPlaceholder("AD"),
  },
  {
    id: 6,
    name: "Dr. Mehul Thukor",
    affiliation: "Canada",
    imageUrl: createPlaceholder("MT"),
  },
  {
    id: 7,
    name: "Prof. Sunil Khare",
    affiliation: "IISER-Kolkata, IIT-Delhi",
    imageUrl: createPlaceholder("SK"),
  },
  {
    id: 8,
    name: "IISc",
    affiliation: "Bangalore",
    imageUrl: createPlaceholder("IB"),
  },
  {
    id: 9,
    name: "IIT",
    affiliation: "India",
    imageUrl: createPlaceholder("IT"),
  },
  {
    id: 10,
    name: "Prof. Natarajan",
    affiliation: "Dean - JNU - New Delhi",
    imageUrl: createPlaceholder("N"),
  },
  {
    id: 11,
    name: "Prof. Rupesh Chaturvedi",
    affiliation: "J.U.O - Biotech",
    imageUrl: createPlaceholder("RC"),
  },
  {
    id: 12,
    name: "Dr. Anand Singh",
    affiliation: "Microbiology. IISER-Tirupati",
    imageUrl: createPlaceholder("AS"),
  },
];
