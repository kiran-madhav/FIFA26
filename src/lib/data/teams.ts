import type { Team, Stadium, Player } from "@/types";

export const STADIUMS: Stadium[] = [
  {
    "id": 1,
    "name": "BC Place",
    "city": "Vancouver",
    "country": "Canada",
    "countryFlag": "🇨🇦",
    "capacity": 54500,
    "lat": 49.2768,
    "lng": -123.1117
  },
  {
    "id": 2,
    "name": "Lumen Field",
    "city": "Seattle",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 69000,
    "lat": 47.5952,
    "lng": -122.3316
  },
  {
    "id": 3,
    "name": "Levi's Stadium",
    "city": "San Francisco",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 68500,
    "lat": 37.4032,
    "lng": -121.9697
  },
  {
    "id": 4,
    "name": "SoFi Stadium",
    "city": "Los Angeles",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 70240,
    "lat": 33.9534,
    "lng": -118.3392
  },
  {
    "id": 5,
    "name": "GEHA Field at Arrowhead Stadium",
    "city": "Kansas City",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 76416,
    "lat": 39.0489,
    "lng": -94.4839
  },
  {
    "id": 6,
    "name": "AT&T Stadium",
    "city": "Dallas",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 80000,
    "lat": 32.7473,
    "lng": -97.0945
  },
  {
    "id": 7,
    "name": "NRG Stadium",
    "city": "Houston",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 72220,
    "lat": 29.6847,
    "lng": -95.4107
  },
  {
    "id": 8,
    "name": "Hard Rock Stadium",
    "city": "Miami",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 65326,
    "lat": 25.9579,
    "lng": -80.2389
  },
  {
    "id": 9,
    "name": "Estadio Azteca",
    "city": "Mexico City",
    "country": "Mexico",
    "countryFlag": "🇲🇽",
    "capacity": 87523,
    "lat": 19.3029,
    "lng": -99.1505
  },
  {
    "id": 10,
    "name": "Estadio Akron",
    "city": "Guadalajara",
    "country": "Mexico",
    "countryFlag": "🇲🇽",
    "capacity": 46232,
    "lat": 20.6879,
    "lng": -103.467
  },
  {
    "id": 11,
    "name": "Nissan Stadium",
    "city": "Nashville",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 69143,
    "lat": 36.1665,
    "lng": -86.7713
  },
  {
    "id": 12,
    "name": "BMO Field",
    "city": "Toronto",
    "country": "Canada",
    "countryFlag": "🇨🇦",
    "capacity": 45736,
    "lat": 43.6332,
    "lng": -79.4184
  },
  {
    "id": 13,
    "name": "Lincoln Financial Field",
    "city": "Philadelphia",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 69796,
    "lat": 39.9008,
    "lng": -75.1675
  },
  {
    "id": 14,
    "name": "MetLife Stadium",
    "city": "East Rutherford",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 82500,
    "lat": 40.8135,
    "lng": -74.0745
  },
  {
    "id": 15,
    "name": "Mercedes-Benz Stadium",
    "city": "Atlanta",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 71000,
    "lat": 33.7554,
    "lng": -84.4006
  },
  {
    "id": 16,
    "name": "Gillette Stadium",
    "city": "Boston",
    "country": "USA",
    "countryFlag": "🇺🇸",
    "capacity": 65878,
    "lat": 42.0909,
    "lng": -71.2643
  },
  {
    "id": 17,
    "name": "Estadio BBVA",
    "city": "Monterrey",
    "country": "Mexico",
    "countryFlag": "🇲🇽",
    "capacity": 53500,
    "lat": 25.6667,
    "lng": -100.223
  }
];

export const TEAMS: Team[] = [
  {
    "id": 1,
    "name": "Mexico",
    "shortName": "Mexico",
    "tla": "MEX",
    "flag": "🇲🇽",
    "group": "A",
    "confederation": "CONCACAF",
    "fifaRanking": 15,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1205,
        "name": "Guillermo Ochoa",
        "position": "GK",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 23
      },
      {
        "id": 1206,
        "name": "José de Jesús Corona",
        "position": "GK",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 31
      },
      {
        "id": 1207,
        "name": "Adrián Mora",
        "position": "GK",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 19
      },
      {
        "id": 1208,
        "name": "Héctor Moreno",
        "position": "CB",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 26
      },
      {
        "id": 1209,
        "name": "Carlos Salcedo",
        "position": "CB",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 18
      },
      {
        "id": 1210,
        "name": "Jesús Gallardo",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 23
      },
      {
        "id": 1211,
        "name": "Diego Reyes",
        "position": "CB",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 26
      },
      {
        "id": 1212,
        "name": "Néstor Aguilera",
        "position": "CB",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 22
      },
      {
        "id": 1213,
        "name": "Érick Gutiérrez",
        "position": "CM",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 29
      },
      {
        "id": 1214,
        "name": "Roberto Alvarado",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 23
      },
      {
        "id": 1215,
        "name": "Luis Romo",
        "position": "CM",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 34
      },
      {
        "id": 1216,
        "name": "César duo",
        "position": "CM",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 31
      },
      {
        "id": 1217,
        "name": "Jonathan Rodríguez",
        "position": "CM",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 19
      },
      {
        "id": 1218,
        "name": "Hirving Lozano",
        "position": "ST",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 23
      },
      {
        "id": 1219,
        "name": "Raúl Jiménez",
        "position": "ST",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 35
      },
      {
        "id": 1220,
        "name": "Uriel Antona",
        "position": "ST",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 19
      },
      {
        "id": 1221,
        "name": "Henry Martín",
        "position": "ST",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 27
      },
      {
        "id": 1222,
        "name": "Javier Aquino",
        "position": "ST",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Mexico",
        "age": 28
      }
    ]
  },
  {
    "id": 2,
    "name": "South Africa",
    "shortName": "South Africa",
    "tla": "RSA",
    "flag": "🇿🇦",
    "group": "A",
    "confederation": "CAF",
    "fifaRanking": 58,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 2133,
        "name": "Ronwen Williams",
        "position": "GK",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 35
      },
      {
        "id": 2134,
        "name": "Neil Moss",
        "position": "GK",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 19
      },
      {
        "id": 2135,
        "name": "Justin Pré",
        "position": "GK",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 27
      },
      {
        "id": 2136,
        "name": "Babatunda Ntont",
        "position": "CB",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 30
      },
      {
        "id": 2137,
        "name": "Peter Shalulile",
        "position": "CB",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 28
      },
      {
        "id": 2138,
        "name": "Bondwell Chikoto",
        "position": "CB",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 20
      },
      {
        "id": 2139,
        "name": "Thabo Rakhale",
        "position": "CB",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 25
      },
      {
        "id": 2140,
        "name": "Sifiso Hlanti",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 25
      },
      {
        "id": 2141,
        "name": "Mphandlona",
        "position": "CB",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 35
      },
      {
        "id": 2142,
        "name": "Khotso Mokoapong",
        "position": "CM",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 28
      },
      {
        "id": 2143,
        "name": "Thabo Sino",
        "position": "CM",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 21
      },
      {
        "id": 2144,
        "name": "Percy Mustafa",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 33
      },
      {
        "id": 2145,
        "name": "Simon Gopane",
        "position": "CM",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 32
      },
      {
        "id": 2146,
        "name": "Aubrey Kodipa",
        "position": "CM",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 28
      },
      {
        "id": 2147,
        "name": "Peter Shalulile",
        "position": "ST",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 31
      },
      {
        "id": 2148,
        "name": "Lyle Foster",
        "position": "ST",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 21
      },
      {
        "id": 2149,
        "name": "Thabo Rakhale",
        "position": "ST",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 25
      },
      {
        "id": 2150,
        "name": "Bondwell Chikoto",
        "position": "ST",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 25
      },
      {
        "id": 2151,
        "name": "Aubrey Kodipa",
        "position": "ST",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Africa",
        "age": 30
      }
    ]
  },
  {
    "id": 3,
    "name": "South Korea",
    "shortName": "South Korea",
    "tla": "KOR",
    "flag": "🇰🇷",
    "group": "A",
    "confederation": "AFC",
    "fifaRanking": 23,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1106,
        "name": "Jeong Woo-yeong",
        "position": "GK",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 20
      },
      {
        "id": 1107,
        "name": "Kim Seung-gyu",
        "position": "GK",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 24
      },
      {
        "id": 1108,
        "name": "Lee Pan-soo",
        "position": "GK",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 23
      },
      {
        "id": 1109,
        "name": "Kim Min-jae",
        "position": "CB",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 33
      },
      {
        "id": 1110,
        "name": "Kwon Chang-hoon",
        "position": "CB",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 29
      },
      {
        "id": 1111,
        "name": "Hong Chul",
        "position": "CB",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 19
      },
      {
        "id": 1112,
        "name": "Yeom Ki-hun",
        "position": "CB",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 27
      },
      {
        "id": 1113,
        "name": "Park Joong-hwan",
        "position": "CB",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 33
      },
      {
        "id": 1114,
        "name": "Cho Yu-min",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 25
      },
      {
        "id": 1115,
        "name": "Heung-min Son",
        "position": "CM",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 22
      },
      {
        "id": 1116,
        "name": "Lee Chan-dong",
        "position": "CM",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 24
      },
      {
        "id": 1117,
        "name": "Hwang Hee-chan",
        "position": "CM",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 20
      },
      {
        "id": 1118,
        "name": "Ki Sung-yueng",
        "position": "CM",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 21
      },
      {
        "id": 1119,
        "name": "Park Jong-woo",
        "position": "CM",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 24
      },
      {
        "id": 1120,
        "name": "Son Heung-min",
        "position": "ST",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 31
      },
      {
        "id": 1121,
        "name": "Hwang Ui-jo",
        "position": "ST",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 22
      },
      {
        "id": 1122,
        "name": "Ju Se-jok",
        "position": "ST",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 31
      },
      {
        "id": 1123,
        "name": "Lee Jae-sung",
        "position": "ST",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 32
      },
      {
        "id": 1124,
        "name": "Kim Shin-wook",
        "position": "ST",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "South Korea",
        "age": 27
      }
    ]
  },
  {
    "id": 4,
    "name": "Czechia",
    "shortName": "Czechia",
    "tla": "CZE",
    "flag": "🇨🇿",
    "group": "A",
    "confederation": "UEFA",
    "fifaRanking": 36,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 5,
    "name": "Canada",
    "shortName": "Canada",
    "tla": "CAN",
    "flag": "🇨🇦",
    "group": "B",
    "confederation": "CONCACAF",
    "fifaRanking": 49,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1049,
        "name": "Milan Borian",
        "position": "GK",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 25
      },
      {
        "id": 1050,
        "name": "Sean Clark",
        "position": "GK",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 31
      },
      {
        "id": 1051,
        "name": "Marcus Piton",
        "position": "GK",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 23
      },
      {
        "id": 1052,
        "name": "Atiba Hutchinson",
        "position": "CB",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 34
      },
      {
        "id": 1053,
        "name": "Steven Vitória",
        "position": "CB",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 34
      },
      {
        "id": 1054,
        "name": "Derek Cornelius",
        "position": "CB",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 25
      },
      {
        "id": 1055,
        "name": "James Young",
        "position": "CB",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 19
      },
      {
        "id": 1056,
        "name": "Richie Laryea",
        "position": "CB",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 31
      },
      {
        "id": 1057,
        "name": "Diab Yussuf",
        "position": "CB",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 32
      },
      {
        "id": 1058,
        "name": "Jonathan Osorio",
        "position": "CM",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 18
      },
      {
        "id": 1059,
        "name": "Taariq Adams",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 31
      },
      {
        "id": 1060,
        "name": "Liam Millar",
        "position": "CM",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 20
      },
      {
        "id": 1061,
        "name": "Stephen Eustáquio",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 19
      },
      {
        "id": 1062,
        "name": "Mark-Anthony Kaye",
        "position": "CM",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 24
      },
      {
        "id": 1063,
        "name": "Cyle Larin",
        "position": "ST",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 30
      },
      {
        "id": 1064,
        "name": "Liam Fraser",
        "position": "ST",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 26
      },
      {
        "id": 1065,
        "name": "Alphonso Davies",
        "position": "ST",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 35
      },
      {
        "id": 1066,
        "name": "Tesho Akindele",
        "position": "ST",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 33
      },
      {
        "id": 1067,
        "name": "Ian Harkes",
        "position": "ST",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Canada",
        "age": 21
      }
    ]
  },
  {
    "id": 6,
    "name": "UEFA Playoff Winner",
    "shortName": "UEFA PO",
    "tla": "TBD",
    "flag": "🏳️",
    "group": "B",
    "confederation": "UEFA",
    "fifaRanking": 99,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 7,
    "name": "Qatar",
    "shortName": "Qatar",
    "tla": "QAT",
    "flag": "🇶🇦",
    "group": "B",
    "confederation": "AFC",
    "fifaRanking": 34,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1163,
        "name": "Meshaal Barsham",
        "position": "GK",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 28
      },
      {
        "id": 1164,
        "name": "Ali Assadalla",
        "position": "GK",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 24
      },
      {
        "id": 1165,
        "name": "Saad Al-Sheeb",
        "position": "GK",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 31
      },
      {
        "id": 1166,
        "name": "Bassam Ramdi",
        "position": "CB",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 34
      },
      {
        "id": 1167,
        "name": "Pedro Miguel",
        "position": "CB",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 31
      },
      {
        "id": 1168,
        "name": "Tijmen Noorman",
        "position": "CB",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 18
      },
      {
        "id": 1169,
        "name": "Homam Ahmed",
        "position": "CB",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 34
      },
      {
        "id": 1170,
        "name": "Mahmoud Marmour",
        "position": "CB",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 22
      },
      {
        "id": 1171,
        "name": "Jasem Ibrahim",
        "position": "CB",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 23
      },
      {
        "id": 1172,
        "name": "Akram Afif",
        "position": "CM",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 25
      },
      {
        "id": 1173,
        "name": "Hassan Al-Haydos",
        "position": "CM",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 34
      },
      {
        "id": 1174,
        "name": "Abdulaziz Hatem",
        "position": "CM",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 21
      },
      {
        "id": 1175,
        "name": "Karim Boudiaf",
        "position": "CM",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 28
      },
      {
        "id": 1176,
        "name": "Ismail Mohammed",
        "position": "CM",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 28
      },
      {
        "id": 1177,
        "name": "Akram Afif",
        "position": "ST",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 19
      },
      {
        "id": 1178,
        "name": "Ahmed Alaaeldin",
        "position": "ST",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 22
      },
      {
        "id": 1179,
        "name": "Almoez Ali",
        "position": "ST",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 32
      },
      {
        "id": 1180,
        "name": "Josue Dichara",
        "position": "ST",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 25
      },
      {
        "id": 1181,
        "name": "Cristofer",
        "position": "ST",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Qatar",
        "age": 28
      }
    ]
  },
  {
    "id": 8,
    "name": "Switzerland",
    "shortName": "Switzerland",
    "tla": "SUI",
    "flag": "🇨🇭",
    "group": "B",
    "confederation": "UEFA",
    "fifaRanking": 19,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 9,
    "name": "Brazil",
    "shortName": "Brazil",
    "tla": "BRA",
    "flag": "🇧🇷",
    "group": "C",
    "confederation": "CONMEBOL",
    "fifaRanking": 5,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1023,
        "name": "Alisson",
        "position": "GK",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 23
      },
      {
        "id": 1024,
        "name": "Ederson",
        "position": "GK",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 20
      },
      {
        "id": 1025,
        "name": "Wehton",
        "position": "GK",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 34
      },
      {
        "id": 1026,
        "name": "Alexro",
        "position": "CB",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 32
      },
      {
        "id": 1027,
        "name": "Douglas",
        "position": "CB",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 30
      },
      {
        "id": 1028,
        "name": "Gabrielalha",
        "position": "CB",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 35
      },
      {
        "id": 1029,
        "name": "Ibane",
        "position": "CB",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 30
      },
      {
        "id": 1030,
        "name": "Leoira",
        "position": "CB",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 31
      },
      {
        "id": 1031,
        "name": "Quinhos",
        "position": "CB",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 26
      },
      {
        "id": 1032,
        "name": "Wesley",
        "position": "CB",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 20
      },
      {
        "id": 1033,
        "name": "Brunoimar",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 35
      },
      {
        "id": 1034,
        "name": "Casemiro",
        "position": "CM",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 20
      },
      {
        "id": 1035,
        "name": "Santos",
        "position": "CM",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 28
      },
      {
        "id": 1036,
        "name": "ABinho",
        "position": "CM",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 32
      },
      {
        "id": 1037,
        "name": "Lucas Paquetá",
        "position": "CM",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 28
      },
      {
        "id": 1038,
        "name": "Endrick",
        "position": "ST",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 22
      },
      {
        "id": 1039,
        "name": "Gabrielelli",
        "position": "ST",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 32
      },
      {
        "id": 1040,
        "name": "igo",
        "position": "ST",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 20
      },
      {
        "id": 1041,
        "name": "iz Hen",
        "position": "ST",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 18
      },
      {
        "id": 1042,
        "name": "Mat Cunha",
        "position": "ST",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 19
      },
      {
        "id": 1043,
        "name": "Ney Jr",
        "position": "ST",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 30
      },
      {
        "id": 1044,
        "name": "Raphinha",
        "position": "ST",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 25
      },
      {
        "id": 1045,
        "name": "Vinícius Jr",
        "position": "ST",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Brazil",
        "age": 19
      }
    ]
  },
  {
    "id": 10,
    "name": "Morocco",
    "shortName": "Morocco",
    "tla": "MAR",
    "flag": "🇲🇦",
    "group": "C",
    "confederation": "CAF",
    "fifaRanking": 12,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 2076,
        "name": "Yassine Bounou",
        "position": "GK",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 29
      },
      {
        "id": 2077,
        "name": "Muňir Mohamed",
        "position": "GK",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 19
      },
      {
        "id": 2078,
        "name": "Ahmed Reda",
        "position": "GK",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 33
      },
      {
        "id": 2079,
        "name": "Achraf Hakimi",
        "position": "CB",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 34
      },
      {
        "id": 2080,
        "name": "Robin Ny",
        "position": "CB",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 27
      },
      {
        "id": 2081,
        "name": "Sofyan Amrabat",
        "position": "CB",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 18
      },
      {
        "id": 2082,
        "name": "Nayef Aguerd",
        "position": "CB",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 29
      },
      {
        "id": 2083,
        "name": "Romain Saiss",
        "position": "CB",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 32
      },
      {
        "id": 2084,
        "name": "Samy Mmaee",
        "position": "CB",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 26
      },
      {
        "id": 2085,
        "name": "Hakim Ziyech",
        "position": "CM",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 31
      },
      {
        "id": 2086,
        "name": "Sofiane Boufal",
        "position": "CM",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 35
      },
      {
        "id": 2087,
        "name": "Aymen Barghash",
        "position": "CM",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 35
      },
      {
        "id": 2088,
        "name": "Karim El Ahmadi",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 32
      },
      {
        "id": 2089,
        "name": "Younes Belhanda",
        "position": "CM",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 26
      },
      {
        "id": 2090,
        "name": "Hakim Ziyech",
        "position": "ST",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 31
      },
      {
        "id": 2091,
        "name": "Achraf Hakimi",
        "position": "ST",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 25
      },
      {
        "id": 2092,
        "name": "Youssef En-Nesyri",
        "position": "ST",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 28
      },
      {
        "id": 2093,
        "name": "Hakim Ziyech",
        "position": "ST",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 28
      },
      {
        "id": 2094,
        "name": "Sofiane Boufal",
        "position": "ST",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Morocco",
        "age": 32
      }
    ]
  },
  {
    "id": 11,
    "name": "Haiti",
    "shortName": "Haiti",
    "tla": "HAI",
    "flag": "🇭🇹",
    "group": "C",
    "confederation": "CONCACAF",
    "fifaRanking": 90,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 12,
    "name": "Scotland",
    "shortName": "Scotland",
    "tla": "SCO",
    "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "group": "C",
    "confederation": "UEFA",
    "fifaRanking": 39,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 13,
    "name": "United States",
    "shortName": "USA",
    "tla": "USA",
    "flag": "🇺🇸",
    "group": "D",
    "confederation": "CONCACAF",
    "fifaRanking": 11,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 14,
    "name": "Paraguay",
    "shortName": "Paraguay",
    "tla": "PAR",
    "flag": "🇵🇾",
    "group": "D",
    "confederation": "CONMEBOL",
    "fifaRanking": 56,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 15,
    "name": "Australia",
    "shortName": "Australia",
    "tla": "AUS",
    "flag": "🇦🇺",
    "group": "D",
    "confederation": "AFC",
    "fifaRanking": 24,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1068,
        "name": "Matthew Ryan",
        "position": "GK",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 27
      },
      {
        "id": 1069,
        "name": "Andrew Redmayne",
        "position": "GK",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 18
      },
      {
        "id": 1070,
        "name": "Danny Vukovic",
        "position": "GK",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 21
      },
      {
        "id": 1071,
        "name": "Aziz Behich",
        "position": "CB",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 19
      },
      {
        "id": 1072,
        "name": "Miloš Degenek",
        "position": "CB",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 31
      },
      {
        "id": 1073,
        "name": "Harry Souttar",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 30
      },
      {
        "id": 1074,
        "name": "Kyeem Gordon",
        "position": "CB",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 28
      },
      {
        "id": 1075,
        "name": "Bailey Wright",
        "position": "CB",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 18
      },
      {
        "id": 1076,
        "name": "Fran Karačić",
        "position": "CB",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 34
      },
      {
        "id": 1077,
        "name": "Aaron Mooy",
        "position": "CM",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 20
      },
      {
        "id": 1078,
        "name": "Massimiliano Goodwin",
        "position": "CM",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 25
      },
      {
        "id": 1079,
        "name": "Aidi Smith",
        "position": "CM",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 18
      },
      {
        "id": 1080,
        "name": "Jackson Irvine",
        "position": "CM",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 32
      },
      {
        "id": 1081,
        "name": "Ryan O'Kelly",
        "position": "CM",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 20
      },
      {
        "id": 1082,
        "name": "Tim Cahill",
        "position": "ST",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 23
      },
      {
        "id": 1083,
        "name": "Jamie Maclaren",
        "position": "ST",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 33
      },
      {
        "id": 1084,
        "name": "Tom Rogic",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 35
      },
      {
        "id": 1085,
        "name": "Mathew Leckie",
        "position": "ST",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 27
      },
      {
        "id": 1086,
        "name": "Brett Holman",
        "position": "ST",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Australia",
        "age": 31
      }
    ]
  },
  {
    "id": 16,
    "name": "Türkiye",
    "shortName": "Türkiye",
    "tla": "TUR",
    "flag": "🇹🇷",
    "group": "D",
    "confederation": "UEFA",
    "fifaRanking": 40,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 17,
    "name": "Germany",
    "shortName": "Germany",
    "tla": "GER",
    "flag": "🇩🇪",
    "group": "E",
    "confederation": "UEFA",
    "fifaRanking": 16,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1067,
        "name": "Manuel Neuer",
        "position": "GK",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 21
      },
      {
        "id": 1068,
        "name": "Marc-André Ter Stegen",
        "position": "GK",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 18
      },
      {
        "id": 1069,
        "name": "Oliver BA",
        "position": "GK",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 18
      },
      {
        "id": 1070,
        "name": "Joshua Kimmich",
        "position": "CB",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 31
      },
      {
        "id": 1071,
        "name": "Antonio Rudiger",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 34
      },
      {
        "id": 1072,
        "name": "Niklas Süle",
        "position": "CB",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 24
      },
      {
        "id": 1073,
        "name": "David Raum",
        "position": "CB",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 31
      },
      {
        "id": 1074,
        "name": "Antonio Rodríguez",
        "position": "CB",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 30
      },
      {
        "id": 1075,
        "name": "Jeremie Frimpong",
        "position": "CB",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 20
      },
      {
        "id": 1076,
        "name": "Jamal Musiala",
        "position": "CM",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 20
      },
      {
        "id": 1077,
        "name": "Joshua Kimmich",
        "position": "CM",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 22
      },
      {
        "id": 1078,
        "name": "Ilkay Gündogan",
        "position": "CM",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 20
      },
      {
        "id": 1079,
        "name": "Toni Kroos",
        "position": "CM",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 31
      },
      {
        "id": 1080,
        "name": "Thomas Müller",
        "position": "CM",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 30
      },
      {
        "id": 1081,
        "name": "Serge Gnabry",
        "position": "CM",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 25
      },
      {
        "id": 1082,
        "name": "Kai Havertz",
        "position": "ST",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 28
      },
      {
        "id": 1083,
        "name": "Timo Werner",
        "position": "ST",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 31
      },
      {
        "id": 1084,
        "name": "Marco Reus",
        "position": "ST",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 20
      },
      {
        "id": 1085,
        "name": "Leroy Sané",
        "position": "ST",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 20
      },
      {
        "id": 1086,
        "name": "Florian Wirtz",
        "position": "ST",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Germany",
        "age": 30
      }
    ]
  },
  {
    "id": 18,
    "name": "Curaçao",
    "shortName": "Curaçao",
    "tla": "CUW",
    "flag": "🇨🇼",
    "group": "E",
    "confederation": "CONCACAF",
    "fifaRanking": 90,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 19,
    "name": "Côte d'Ivoire",
    "shortName": "Ivory Coast",
    "tla": "CIV",
    "flag": "🇨🇮",
    "group": "E",
    "confederation": "CAF",
    "fifaRanking": 38,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 2057,
        "name": "Sylvain Gbohouo",
        "position": "GK",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 35
      },
      {
        "id": 2058,
        "name": "Saihou Cissokho",
        "position": "GK",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 33
      },
      {
        "id": 2059,
        "name": "Benoit Koumbate",
        "position": "GK",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 21
      },
      {
        "id": 2060,
        "name": "Eric Bailly",
        "position": "CB",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 21
      },
      {
        "id": 2061,
        "name": "Serge Aurier",
        "position": "CB",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 26
      },
      {
        "id": 2062,
        "name": "Ousmane Anho",
        "position": "CB",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 33
      },
      {
        "id": 2063,
        "name": "Jean Michael Seri",
        "position": "CB",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 21
      },
      {
        "id": 2064,
        "name": "Junior Kala",
        "position": "CB",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 23
      },
      {
        "id": 2065,
        "name": "Kolo Toure",
        "position": "CB",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 21
      },
      {
        "id": 2066,
        "name": "Yaya Touré",
        "position": "CM",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 20
      },
      {
        "id": 2067,
        "name": "Cheik Tioté",
        "position": "CM",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 29
      },
      {
        "id": 2068,
        "name": "Sébastien Haller",
        "position": "CM",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 20
      },
      {
        "id": 2069,
        "name": "Wilfried Key",
        "position": "CM",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 20
      },
      {
        "id": 2070,
        "name": "Max Gradel",
        "position": "CM",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 25
      },
      {
        "id": 2071,
        "name": "Sébastien Haller",
        "position": "ST",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 24
      },
      {
        "id": 2072,
        "name": "Wilfried Key",
        "position": "ST",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 32
      },
      {
        "id": 2073,
        "name": "Max Gradel",
        "position": "ST",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 27
      },
      {
        "id": 2074,
        "name": "Nicolas Pépé",
        "position": "ST",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 30
      },
      {
        "id": 2075,
        "name": "Franck Kessié",
        "position": "ST",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Côte d'Ivoire",
        "age": 34
      }
    ]
  },
  {
    "id": 20,
    "name": "Ecuador",
    "shortName": "Ecuador",
    "tla": "ECU",
    "flag": "🇪🇨",
    "group": "E",
    "confederation": "CONMEBOL",
    "fifaRanking": 31,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 21,
    "name": "Netherlands",
    "shortName": "Netherlands",
    "tla": "NED",
    "flag": "🇳🇱",
    "group": "F",
    "confederation": "UEFA",
    "fifaRanking": 6,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1148,
        "name": "Andries Nomme",
        "position": "GK",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 31
      },
      {
        "id": 1149,
        "name": "Justin Bijlow",
        "position": "GK",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 30
      },
      {
        "id": 1150,
        "name": "Tim Krul",
        "position": "GK",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 18
      },
      {
        "id": 1151,
        "name": "Virgil van Dijk",
        "position": "CB",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 18
      },
      {
        "id": 1152,
        "name": "MaitLAND-De Ligt",
        "position": "CB",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 20
      },
      {
        "id": 1153,
        "name": "Daley Blind",
        "position": "CB",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 25
      },
      {
        "id": 1154,
        "name": "Nathan Aké",
        "position": "CB",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 33
      },
      {
        "id": 1155,
        "name": "Denzel Dumfries",
        "position": "CB",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 28
      },
      {
        "id": 1156,
        "name": "Steven Bo gers",
        "position": "CB",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 21
      },
      {
        "id": 1157,
        "name": "Frenkie de Jong",
        "position": "CM",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 27
      },
      {
        "id": 1158,
        "name": "Cody Gakpo",
        "position": "CM",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 20
      },
      {
        "id": 1159,
        "name": "Memphis Depay",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 32
      },
      {
        "id": 1160,
        "name": "Steven Bergwijn",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 34
      },
      {
        "id": 1161,
        "name": "Drius Kuyt",
        "position": "CM",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 32
      },
      {
        "id": 1162,
        "name": "Teun Koopmeiners",
        "position": "CM",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 25
      },
      {
        "id": 1163,
        "name": "Memphis Depay",
        "position": "ST",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 26
      },
      {
        "id": 1164,
        "name": "Cody Gakpo",
        "position": "ST",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 19
      },
      {
        "id": 1165,
        "name": "Wout Weghorst",
        "position": "ST",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 28
      },
      {
        "id": 1166,
        "name": "Vincent Janssen",
        "position": "ST",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 27
      },
      {
        "id": 1167,
        "name": "Daliah",
        "position": "ST",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Netherlands",
        "age": 27
      }
    ]
  },
  {
    "id": 22,
    "name": "Japan",
    "shortName": "Japan",
    "tla": "JPN",
    "flag": "🇯🇵",
    "group": "F",
    "confederation": "AFC",
    "fifaRanking": 18,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1087,
        "name": "Kosuke Nakamura",
        "position": "GK",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 22
      },
      {
        "id": 1088,
        "name": "Shunsuke Nakamura",
        "position": "GK",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 30
      },
      {
        "id": 1089,
        "name": "Daniel Schmidt",
        "position": "GK",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 22
      },
      {
        "id": 1090,
        "name": "Yutaka Genki",
        "position": "CB",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 34
      },
      {
        "id": 1091,
        "name": "Takehiro Tomiyasu",
        "position": "CB",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 22
      },
      {
        "id": 1092,
        "name": "Maya Yoshida",
        "position": "CB",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 18
      },
      {
        "id": 1093,
        "name": "Hiroki Sakai",
        "position": "CB",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 33
      },
      {
        "id": 1094,
        "name": "Yohei Toyoda",
        "position": "CB",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 28
      },
      {
        "id": 1095,
        "name": "Takefusa Kubo",
        "position": "CB",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 27
      },
      {
        "id": 1096,
        "name": "Takumi Minamino",
        "position": "CM",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 25
      },
      {
        "id": 1097,
        "name": "Wataru Endo",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 21
      },
      {
        "id": 1098,
        "name": "Genki Horiguchi",
        "position": "CM",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 19
      },
      {
        "id": 1099,
        "name": "Shinji Kagawa",
        "position": "CM",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 28
      },
      {
        "id": 1100,
        "name": "Yosuke Kashiwagi",
        "position": "CM",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 23
      },
      {
        "id": 1101,
        "name": "Keisuke Honda",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 21
      },
      {
        "id": 1102,
        "name": "Shinji Okazaki",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 21
      },
      {
        "id": 1103,
        "name": "Yuya Osako",
        "position": "ST",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 25
      },
      {
        "id": 1104,
        "name": "Takashi Inui",
        "position": "ST",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 29
      },
      {
        "id": 1105,
        "name": "Hotaru Yamaguchi",
        "position": "ST",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Japan",
        "age": 32
      }
    ]
  },
  {
    "id": 23,
    "name": "Sweden",
    "shortName": "Sweden",
    "tla": "SWE",
    "flag": "🇸🇪",
    "group": "F",
    "confederation": "UEFA",
    "fifaRanking": 26,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 24,
    "name": "Tunisia",
    "shortName": "Tunisia",
    "tla": "TUN",
    "flag": "🇹🇳",
    "group": "F",
    "confederation": "CAF",
    "fifaRanking": 41,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 2114,
        "name": "Mousa Amid",
        "position": "GK",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 26
      },
      {
        "id": 2115,
        "name": "Aymen Mahdou",
        "position": "GK",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 30
      },
      {
        "id": 2116,
        "name": "Farouk Ben Mustapha",
        "position": "GK",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 33
      },
      {
        "id": 2117,
        "name": "Yassine Meriah",
        "position": "CB",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 28
      },
      {
        "id": 2118,
        "name": "Ali Maaloul",
        "position": "CB",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 35
      },
      {
        "id": 2119,
        "name": "Youssef Msakni",
        "position": "CB",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 26
      },
      {
        "id": 2120,
        "name": "Hamza Rafia",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 26
      },
      {
        "id": 2121,
        "name": "Mohamed Drager",
        "position": "CB",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 30
      },
      {
        "id": 2122,
        "name": "Alaa Jessam",
        "position": "CB",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 28
      },
      {
        "id": 2123,
        "name": "Ghailen Chaaleli",
        "position": "CM",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 28
      },
      {
        "id": 2124,
        "name": "Youssef Msakni",
        "position": "CM",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 18
      },
      {
        "id": 2125,
        "name": "Aimen Majdoub",
        "position": "CM",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 25
      },
      {
        "id": 2126,
        "name": "Taha Yassine",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 20
      },
      {
        "id": 2127,
        "name": "Ferjani Sassi",
        "position": "CM",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 28
      },
      {
        "id": 2128,
        "name": "Wahbi Khazri",
        "position": "ST",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 18
      },
      {
        "id": 2129,
        "name": "Youssef Msakni",
        "position": "ST",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 20
      },
      {
        "id": 2130,
        "name": "Naïm Sliti",
        "position": "ST",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 18
      },
      {
        "id": 2131,
        "name": "Haron Dimasia",
        "position": "ST",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 18
      },
      {
        "id": 2132,
        "name": "Fakhreddine Ben Youssef",
        "position": "ST",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Tunisia",
        "age": 24
      }
    ]
  },
  {
    "id": 25,
    "name": "Belgium",
    "shortName": "Belgium",
    "tla": "BEL",
    "flag": "🇧🇪",
    "group": "G",
    "confederation": "UEFA",
    "fifaRanking": 3,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1000,
        "name": "Thaut Courtois",
        "position": "GK",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 18
      },
      {
        "id": 1001,
        "name": "Lammens",
        "position": "GK",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 29
      },
      {
        "id": 1002,
        "name": "Mike Penders",
        "position": "GK",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 19
      },
      {
        "id": 1003,
        "name": "Timothyagne",
        "position": "CB",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 28
      },
      {
        "id": 1004,
        "name": "De Maxim",
        "position": "CB",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 28
      },
      {
        "id": 1005,
        "name": "Deuyper Koni",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 35
      },
      {
        "id": 1006,
        "name": "Brandonchele",
        "position": "CB",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 27
      },
      {
        "id": 1007,
        "name": "Thomas Me",
        "position": "CB",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 30
      },
      {
        "id": 1008,
        "name": "Nathanoy",
        "position": "CB",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 20
      },
      {
        "id": 1009,
        "name": "aquinys",
        "position": "CB",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 34
      },
      {
        "id": 1010,
        "name": "Arthur Theate",
        "position": "CB",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 28
      },
      {
        "id": 1011,
        "name": "De Bruyne",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 26
      },
      {
        "id": 1012,
        "name": "Am Onana",
        "position": "CM",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 20
      },
      {
        "id": 1013,
        "name": "Nicolas Rin",
        "position": "CM",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 26
      },
      {
        "id": 1014,
        "name": "Tielemans",
        "position": "CM",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 30
      },
      {
        "id": 1015,
        "name": "Hansaken",
        "position": "CM",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 19
      },
      {
        "id": 1016,
        "name": "Witsel",
        "position": "CM",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 24
      },
      {
        "id": 1017,
        "name": "Charles Ketelaere",
        "position": "ST",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 19
      },
      {
        "id": 1018,
        "name": "Jeremy",
        "position": "ST",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 27
      },
      {
        "id": 1019,
        "name": "Mat Fernandez-P",
        "position": "ST",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 33
      },
      {
        "id": 1020,
        "name": "Romaku",
        "position": "ST",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 35
      },
      {
        "id": 1021,
        "name": "odi Lukeio",
        "position": "ST",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 18
      },
      {
        "id": 1022,
        "name": "ira",
        "position": "ST",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 29
      },
      {
        "id": 1023,
        "name": "Saemaek",
        "position": "ST",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 29
      },
      {
        "id": 1024,
        "name": "Leandro Trossard",
        "position": "ST",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Belgium",
        "age": 23
      }
    ]
  },
  {
    "id": 26,
    "name": "Egypt",
    "shortName": "Egypt",
    "tla": "EGY",
    "flag": "🇪🇬",
    "group": "G",
    "confederation": "CAF",
    "fifaRanking": 36,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 2019,
        "name": "Mohamed El Shenawy",
        "position": "GK",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 24
      },
      {
        "id": 2020,
        "name": "Ahmad Elmahsri",
        "position": "GK",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 27
      },
      {
        "id": 2021,
        "name": "Mohammed Abou Steit",
        "position": "GK",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 32
      },
      {
        "id": 2022,
        "name": "Ahmed Fathy",
        "position": "CB",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 30
      },
      {
        "id": 2023,
        "name": "Muhammad Abdel Shafi",
        "position": "CB",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 25
      },
      {
        "id": 2024,
        "name": "Ali Gabr",
        "position": "CB",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 23
      },
      {
        "id": 2025,
        "name": "Mahmoud Wahid",
        "position": "CB",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 34
      },
      {
        "id": 2026,
        "name": "Omar Kamel",
        "position": "CB",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 34
      },
      {
        "id": 2027,
        "name": "Hossam Hanani",
        "position": "CB",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 22
      },
      {
        "id": 2028,
        "name": "Mohamed Elneny",
        "position": "CM",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 21
      },
      {
        "id": 2029,
        "name": "Tamer Seyam",
        "position": "CM",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 33
      },
      {
        "id": 2030,
        "name": "Marwan Mohsen",
        "position": "CM",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 34
      },
      {
        "id": 2031,
        "name": "Amr Warda",
        "position": "CM",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 34
      },
      {
        "id": 2032,
        "name": "Ramadan Sobhi",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 29
      },
      {
        "id": 2033,
        "name": "Mohamed Salah",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 22
      },
      {
        "id": 2034,
        "name": "Marwan Hoskami",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 32
      },
      {
        "id": 2035,
        "name": "Nabil Dabour",
        "position": "ST",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 31
      },
      {
        "id": 2036,
        "name": "Said Ahmed",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 21
      },
      {
        "id": 2037,
        "name": "Sheri",
        "position": "ST",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Egypt",
        "age": 19
      }
    ]
  },
  {
    "id": 27,
    "name": "Iran",
    "shortName": "Iran",
    "tla": "IRN",
    "flag": "🇮🇷",
    "group": "G",
    "confederation": "AFC",
    "fifaRanking": 20,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1125,
        "name": "Alireza Jahanbakhsh",
        "position": "GK",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 23
      },
      {
        "id": 1126,
        "name": "Mohammad Alipour",
        "position": "GK",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 21
      },
      {
        "id": 1127,
        "name": "Rahim Nazim",
        "position": "GK",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 31
      },
      {
        "id": 1128,
        "name": "Morteza Pouraliganji",
        "position": "CB",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 28
      },
      {
        "id": 1129,
        "name": "Ramin Rezaeian",
        "position": "CB",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 30
      },
      {
        "id": 1130,
        "name": "Majid Hosseini",
        "position": "CB",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 22
      },
      {
        "id": 1131,
        "name": "Muhammad Khan",
        "position": "CB",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 26
      },
      {
        "id": 1132,
        "name": "Ehsan Pajouh",
        "position": "CB",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 34
      },
      {
        "id": 1133,
        "name": "Ali Gholizadeh",
        "position": "CB",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 20
      },
      {
        "id": 1134,
        "name": "Karim Ansarifard",
        "position": "CM",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 22
      },
      {
        "id": 1135,
        "name": "Ashkan Dejagah",
        "position": "CM",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 28
      },
      {
        "id": 1136,
        "name": "Omid Ebrahimi",
        "position": "CM",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 19
      },
      {
        "id": 1137,
        "name": "Vahdatollah Hanipour",
        "position": "CM",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 31
      },
      {
        "id": 1138,
        "name": "Serdar Azmoun",
        "position": "CM",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 32
      },
      {
        "id": 1139,
        "name": "Sardar Azmoun",
        "position": "ST",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 23
      },
      {
        "id": 1140,
        "name": "Ali Daei",
        "position": "ST",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 25
      },
      {
        "id": 1141,
        "name": "Mehdi Taremi",
        "position": "ST",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 25
      },
      {
        "id": 1142,
        "name": "Arash Afshin",
        "position": "ST",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 18
      },
      {
        "id": 1143,
        "name": "Reza Ghoochannejhad",
        "position": "ST",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iran",
        "age": 29
      }
    ]
  },
  {
    "id": 28,
    "name": "New Zealand",
    "shortName": "New Zealand",
    "tla": "NZL",
    "flag": "🇳🇿",
    "group": "G",
    "confederation": "OFC",
    "fifaRanking": 104,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 29,
    "name": "Spain",
    "shortName": "Spain",
    "tla": "ESP",
    "flag": "🇪🇸",
    "group": "H",
    "confederation": "UEFA",
    "fifaRanking": 8,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1087,
        "name": "David Raya",
        "position": "GK",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 25
      },
      {
        "id": 1088,
        "name": "Unai Simón",
        "position": "GK",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 35
      },
      {
        "id": 1089,
        "name": "Robert Sánchez",
        "position": "GK",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 33
      },
      {
        "id": 1090,
        "name": "Dani Carvajal",
        "position": "CB",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 31
      },
      {
        "id": 1091,
        "name": "Aymeric Laporte",
        "position": "CB",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 33
      },
      {
        "id": 1092,
        "name": "Nacho Fernández",
        "position": "CB",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 27
      },
      {
        "id": 1093,
        "name": "Robin Le Normand",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 29
      },
      {
        "id": 1094,
        "name": "César Azpilicueta",
        "position": "CB",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 24
      },
      {
        "id": 1095,
        "name": "Marc Cucurella",
        "position": "CB",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 22
      },
      {
        "id": 1096,
        "name": "Pedri González",
        "position": "CM",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 22
      },
      {
        "id": 1097,
        "name": "Gavi Rodríguez",
        "position": "CM",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 26
      },
      {
        "id": 1098,
        "name": "Frenkie De Jong",
        "position": "CM",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 26
      },
      {
        "id": 1099,
        "name": "Pablo Sarabia",
        "position": "CM",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 33
      },
      {
        "id": 1100,
        "name": "Mikel Oyarzabal",
        "position": "CM",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 23
      },
      {
        "id": 1101,
        "name": "Alejandro Gómez",
        "position": "CM",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 26
      },
      {
        "id": 1102,
        "name": "Antoni Gündo",
        "position": "ST",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 24
      },
      {
        "id": 1103,
        "name": "Lamine Yamal",
        "position": "ST",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 22
      },
      {
        "id": 1104,
        "name": "Nico Williams",
        "position": "ST",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 22
      },
      {
        "id": 1105,
        "name": "Álvaro Morata",
        "position": "ST",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 28
      },
      {
        "id": 1106,
        "name": "Joselu",
        "position": "ST",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Spain",
        "age": 29
      }
    ]
  },
  {
    "id": 30,
    "name": "Cape Verde",
    "shortName": "Cape Verde",
    "tla": "CPV",
    "flag": "🇨🇻",
    "group": "H",
    "confederation": "CAF",
    "fifaRanking": 65,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 2000,
        "name": "Notorious Silva",
        "position": "GK",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 27
      },
      {
        "id": 2001,
        "name": "João Silva",
        "position": "GK",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 27
      },
      {
        "id": 2002,
        "name": "Carlos Varela",
        "position": "GK",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 22
      },
      {
        "id": 2003,
        "name": "Andy Varela",
        "position": "CB",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 34
      },
      {
        "id": 2004,
        "name": "João Pereira",
        "position": "CB",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 18
      },
      {
        "id": 2005,
        "name": "Pedro Monteiro",
        "position": "CB",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 21
      },
      {
        "id": 2006,
        "name": "Carlos Semedo",
        "position": "CB",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 19
      },
      {
        "id": 2007,
        "name": "Jorge Andrade",
        "position": "CB",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 22
      },
      {
        "id": 2008,
        "name": "Luis Tavares",
        "position": "CB",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 19
      },
      {
        "id": 2009,
        "name": "Notorious Gomez",
        "position": "CM",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 33
      },
      {
        "id": 2010,
        "name": "André Silva",
        "position": "CM",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 21
      },
      {
        "id": 2011,
        "name": "Pedro Barbosa",
        "position": "CM",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 23
      },
      {
        "id": 2012,
        "name": "João Rodrigues",
        "position": "CM",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 30
      },
      {
        "id": 2013,
        "name": "Carlos Mendes",
        "position": "CM",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 30
      },
      {
        "id": 2014,
        "name": "Anderson Sila",
        "position": "ST",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 35
      },
      {
        "id": 2015,
        "name": "João Gomes",
        "position": "ST",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 35
      },
      {
        "id": 2016,
        "name": "Pedro Varela",
        "position": "ST",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 29
      },
      {
        "id": 2017,
        "name": "Luis Andrade",
        "position": "ST",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 20
      },
      {
        "id": 2018,
        "name": "Carlos Pereira",
        "position": "ST",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Cape Verde",
        "age": 34
      }
    ]
  },
  {
    "id": 31,
    "name": "Saudi Arabia",
    "shortName": "Saudi Arabia",
    "tla": "KSA",
    "flag": "🇸🇦",
    "group": "H",
    "confederation": "AFC",
    "fifaRanking": 53,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1144,
        "name": "Mohamed Al-Kueshy",
        "position": "GK",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 31
      },
      {
        "id": 1145,
        "name": "Yasser Al-Shahrani",
        "position": "GK",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 20
      },
      {
        "id": 1146,
        "name": "Saad Al-Nasser",
        "position": "GK",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 22
      },
      {
        "id": 1147,
        "name": "Ali Al-Bulaihi",
        "position": "CB",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 20
      },
      {
        "id": 1148,
        "name": "Reza Guhan",
        "position": "CB",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 21
      },
      {
        "id": 1149,
        "name": "Hassan Tambakti",
        "position": "CB",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 24
      },
      {
        "id": 1150,
        "name": "Salman Al-Faraj",
        "position": "CB",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 33
      },
      {
        "id": 1151,
        "name": "Abdullah Madu",
        "position": "CB",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 33
      },
      {
        "id": 1152,
        "name": "Yasser Shahran",
        "position": "CB",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 34
      },
      {
        "id": 1153,
        "name": "Salem Al-Dawsari",
        "position": "CM",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 29
      },
      {
        "id": 1154,
        "name": "Nawaf Al-Aqidi",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 27
      },
      {
        "id": 1155,
        "name": "Tawfiq Boshram",
        "position": "CM",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 34
      },
      {
        "id": 1156,
        "name": "Abdurahman Al-Kana",
        "position": "CM",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 27
      },
      {
        "id": 1157,
        "name": "Abdulmajeed Al-Sulaihe",
        "position": "CM",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 28
      },
      {
        "id": 1158,
        "name": "Salem Al-Dawsari",
        "position": "ST",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 32
      },
      {
        "id": 1159,
        "name": "Fahad Al-Muwallad",
        "position": "ST",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 25
      },
      {
        "id": 1160,
        "name": "Hamed Gutti",
        "position": "ST",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 29
      },
      {
        "id": 1161,
        "name": "Abdullah Hajwar",
        "position": "ST",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 27
      },
      {
        "id": 1162,
        "name": "Musab Al-Juhani",
        "position": "ST",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Saudi Arabia",
        "age": 27
      }
    ]
  },
  {
    "id": 32,
    "name": "Uruguay",
    "shortName": "Uruguay",
    "tla": "URU",
    "flag": "🇺🇾",
    "group": "H",
    "confederation": "CONMEBOL",
    "fifaRanking": 15,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1168,
        "name": "Sergio Rochetto",
        "position": "GK",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 23
      },
      {
        "id": 1169,
        "name": "José María Sul",
        "position": "GK",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 21
      },
      {
        "id": 1170,
        "name": "Martín Cáceres",
        "position": "GK",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 28
      },
      {
        "id": 1171,
        "name": "Diego Godín",
        "position": "CB",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 20
      },
      {
        "id": 1172,
        "name": "Guillermo Varela",
        "position": "CB",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 30
      },
      {
        "id": 1173,
        "name": "José María Giménez",
        "position": "CB",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 21
      },
      {
        "id": 1174,
        "name": "Matías Villas",
        "position": "CB",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 19
      },
      {
        "id": 1175,
        "name": "Rodrigo Bentancur",
        "position": "CB",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 30
      },
      {
        "id": 1176,
        "name": "Luis Suárez",
        "position": "CM",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 19
      },
      {
        "id": 1177,
        "name": "Rodrigo De Paul",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 29
      },
      {
        "id": 1178,
        "name": "Manuel Ugarte",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 20
      },
      {
        "id": 1179,
        "name": "alexis Sánchez",
        "position": "CM",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 24
      },
      {
        "id": 1180,
        "name": "Giorgian De Arrascaeta",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 29
      },
      {
        "id": 1181,
        "name": "Luis Suárez",
        "position": "ST",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 33
      },
      {
        "id": 1182,
        "name": "Darwin Núñez",
        "position": "ST",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 25
      },
      {
        "id": 1183,
        "name": "João Pedro",
        "position": "ST",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 27
      },
      {
        "id": 1184,
        "name": "Matías Rosario",
        "position": "ST",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 35
      },
      {
        "id": 1185,
        "name": "Nicolás López",
        "position": "ST",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uruguay",
        "age": 31
      }
    ]
  },
  {
    "id": 33,
    "name": "France",
    "shortName": "France",
    "tla": "FRA",
    "flag": "🇫🇷",
    "group": "I",
    "confederation": "UEFA",
    "fifaRanking": 2,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1046,
        "name": "Mike Maignan",
        "position": "GK",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 35
      },
      {
        "id": 1047,
        "name": "Hugo Lloris",
        "position": "GK",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 31
      },
      {
        "id": 1048,
        "name": "Romaine Sá",
        "position": "GK",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 35
      },
      {
        "id": 1049,
        "name": "Aur Tchouaméni",
        "position": "CB",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 31
      },
      {
        "id": 1050,
        "name": "Luis Hernandez",
        "position": "CB",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 23
      },
      {
        "id": 1051,
        "name": "Dayot Upame",
        "position": "CB",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 18
      },
      {
        "id": 1052,
        "name": "Ibrahima Konaté",
        "position": "CB",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 32
      },
      {
        "id": 1053,
        "name": "Jules Koundé",
        "position": "CB",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 26
      },
      {
        "id": 1054,
        "name": "William Saily",
        "position": "CB",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 35
      },
      {
        "id": 1055,
        "name": "Theo Hernández",
        "position": "CB",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 34
      },
      {
        "id": 1056,
        "name": "Antoine Griezmann",
        "position": "CM",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 33
      },
      {
        "id": 1057,
        "name": "Kylian Mbappé",
        "position": "CM",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 33
      },
      {
        "id": 1058,
        "name": "Ousmane Dembélé",
        "position": "CM",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 24
      },
      {
        "id": 1059,
        "name": "Adrien Ramy",
        "position": "CM",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 30
      },
      {
        "id": 1060,
        "name": "Mattéo Enzum",
        "position": "CM",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 29
      },
      {
        "id": 1061,
        "name": "Eduardo Camavinga",
        "position": "CM",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 32
      },
      {
        "id": 1062,
        "name": "Aurélien Tchouaméni",
        "position": "CM",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 26
      },
      {
        "id": 1063,
        "name": "Olivier Giroud",
        "position": "ST",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 18
      },
      {
        "id": 1064,
        "name": "Kingsley Coman",
        "position": "ST",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 20
      },
      {
        "id": 1065,
        "name": "Wisso Kolo",
        "position": "ST",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 21
      },
      {
        "id": 1066,
        "name": "Marcus Thuram",
        "position": "ST",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "France",
        "age": 29
      }
    ]
  },
  {
    "id": 34,
    "name": "Senegal",
    "shortName": "Senegal",
    "tla": "SEN",
    "flag": "🇸🇳",
    "group": "I",
    "confederation": "CAF",
    "fifaRanking": 17,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 2095,
        "name": "Khadim Ndiaye",
        "position": "GK",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 26
      },
      {
        "id": 2096,
        "name": "Pape Gueye",
        "position": "GK",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 35
      },
      {
        "id": 2097,
        "name": "Abdou Diallo",
        "position": "GK",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 33
      },
      {
        "id": 2098,
        "name": "Kalidou Koulibaly",
        "position": "CB",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 30
      },
      {
        "id": 2099,
        "name": "Idrissa Gana",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 22
      },
      {
        "id": 2100,
        "name": "Saliou Ciss",
        "position": "CB",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 18
      },
      {
        "id": 2101,
        "name": "Youssouf Sabaly",
        "position": "CB",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 32
      },
      {
        "id": 2102,
        "name": "Mohamed Camara",
        "position": "CB",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 18
      },
      {
        "id": 2103,
        "name": "Ismail Jak",
        "position": "CB",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 32
      },
      {
        "id": 2104,
        "name": "Sadio Mané",
        "position": "CM",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 29
      },
      {
        "id": 2105,
        "name": "Cheikhou Kouyate",
        "position": "CM",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 21
      },
      {
        "id": 2106,
        "name": "Idrissa Gana",
        "position": "CM",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 35
      },
      {
        "id": 2107,
        "name": "Pape Gueye",
        "position": "CM",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 27
      },
      {
        "id": 2108,
        "name": "Abdou Diallo",
        "position": "CM",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 34
      },
      {
        "id": 2109,
        "name": "Sadio Mané",
        "position": "ST",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 20
      },
      {
        "id": 2110,
        "name": "Fode Ballo-Touré",
        "position": "ST",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 25
      },
      {
        "id": 2111,
        "name": "Pierre-Guillaume",
        "position": "ST",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 33
      },
      {
        "id": 2112,
        "name": "Nicolas Jackson",
        "position": "ST",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 21
      },
      {
        "id": 2113,
        "name": "Bamba Dieng",
        "position": "ST",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Senegal",
        "age": 35
      }
    ]
  },
  {
    "id": 35,
    "name": "Iraq",
    "shortName": "Iraq",
    "tla": "IRQ",
    "flag": "🇮🇶",
    "group": "I",
    "confederation": "AFC",
    "fifaRanking": 58,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1182,
        "name": "Ali Al-Hakim",
        "position": "GK",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 29
      },
      {
        "id": 1183,
        "name": "Bashar Resan",
        "position": "GK",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 24
      },
      {
        "id": 1184,
        "name": "Mohammed Hameed",
        "position": "GK",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 24
      },
      {
        "id": 1185,
        "name": "Ibrahim Al-Janabi",
        "position": "CB",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 30
      },
      {
        "id": 1186,
        "name": "Mahmoud Mizher",
        "position": "CB",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 24
      },
      {
        "id": 1187,
        "name": "Saad Niaser",
        "position": "CB",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 34
      },
      {
        "id": 1188,
        "name": "Mustafa Naji",
        "position": "CB",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 22
      },
      {
        "id": 1189,
        "name": "Ali Adnan",
        "position": "CB",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 22
      },
      {
        "id": 1190,
        "name": "Mehdi Kamel",
        "position": "CB",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 34
      },
      {
        "id": 1191,
        "name": "Yaser Asprilla",
        "position": "CM",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 20
      },
      {
        "id": 1192,
        "name": "Omar Khabin",
        "position": "CM",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 26
      },
      {
        "id": 1193,
        "name": "Hussein Ali",
        "position": "CM",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 26
      },
      {
        "id": 1194,
        "name": "Ali Nawar",
        "position": "CM",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 23
      },
      {
        "id": 1195,
        "name": "Qusay Al-Saedi",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 27
      },
      {
        "id": 1196,
        "name": "Omar Kris",
        "position": "ST",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 21
      },
      {
        "id": 1197,
        "name": "Aเอส Al-Sayed",
        "position": "ST",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 22
      },
      {
        "id": 1198,
        "name": "Bashar Resan",
        "position": "ST",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 35
      },
      {
        "id": 1199,
        "name": "Muntadher Mohammed",
        "position": "ST",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 30
      },
      {
        "id": 1200,
        "name": "Amjad Al-Silawi",
        "position": "ST",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Iraq",
        "age": 30
      }
    ]
  },
  {
    "id": 36,
    "name": "Norway",
    "shortName": "Norway",
    "tla": "NOR",
    "flag": "🇳🇴",
    "group": "I",
    "confederation": "UEFA",
    "fifaRanking": 46,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 37,
    "name": "Argentina",
    "shortName": "Argentina",
    "tla": "ARG",
    "flag": "🇦🇷",
    "group": "J",
    "confederation": "CONMEBOL",
    "fifaRanking": 1,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1000,
        "name": "Emil Martínez",
        "position": "GK",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 30
      },
      {
        "id": 1001,
        "name": "Jerónimo Müller",
        "position": "GK",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 35
      },
      {
        "id": 1002,
        "name": "Juan Musso",
        "position": "GK",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 35
      },
      {
        "id": 1003,
        "name": "Leonardo Aceraldi",
        "position": "CB",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 30
      },
      {
        "id": 1004,
        "name": "Gonzalo Liaf",
        "position": "CB",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 31
      },
      {
        "id": 1005,
        "name": "Nicolás Martínez Cristian",
        "position": "CB",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 27
      },
      {
        "id": 1006,
        "name": "Lis Martínez",
        "position": "CB",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 22
      },
      {
        "id": 1007,
        "name": "Nahuel Molina",
        "position": "CB",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 28
      },
      {
        "id": 1008,
        "name": "Facundo Medina",
        "position": "CB",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 35
      },
      {
        "id": 1009,
        "name": "Cristian Azamendi",
        "position": "CB",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 30
      },
      {
        "id": 1010,
        "name": "Alejandro Pes",
        "position": "CM",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 19
      },
      {
        "id": 1011,
        "name": "Paul Bar",
        "position": "CM",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 26
      },
      {
        "id": 1012,
        "name": "Valentino Bar",
        "position": "CM",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 34
      },
      {
        "id": 1013,
        "name": "Giov Celso",
        "position": "CM",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 24
      },
      {
        "id": 1014,
        "name": "Exequ Palacios",
        "position": "CM",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 18
      },
      {
        "id": 1015,
        "name": "Alexis Mac Allister",
        "position": "CM",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 34
      },
      {
        "id": 1016,
        "name": "Enzo Fernández",
        "position": "CM",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 35
      },
      {
        "id": 1017,
        "name": "Julián Álvarez",
        "position": "ST",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 27
      },
      {
        "id": 1018,
        "name": "Lionel Messi",
        "position": "ST",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 31
      },
      {
        "id": 1019,
        "name": "Nicolas Thiago",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 20
      },
      {
        "id": 1020,
        "name": "Giuliano Paz",
        "position": "ST",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 28
      },
      {
        "id": 1021,
        "name": "Manuel López",
        "position": "ST",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 22
      },
      {
        "id": 1022,
        "name": "Lautaro Martínez",
        "position": "ST",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Argentina",
        "age": 27
      }
    ]
  },
  {
    "id": 38,
    "name": "Algeria",
    "shortName": "Algeria",
    "tla": "ALG",
    "flag": "🇩🇿",
    "group": "J",
    "confederation": "CAF",
    "fifaRanking": 43,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1025,
        "name": "Oama Ben",
        "position": "GK",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 22
      },
      {
        "id": 1026,
        "name": "Mel Masstil",
        "position": "GK",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 27
      },
      {
        "id": 1027,
        "name": "Luca Zidane",
        "position": "GK",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 25
      },
      {
        "id": 1028,
        "name": "Ach Abada",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 24
      },
      {
        "id": 1029,
        "name": "Rayan Nouri",
        "position": "CB",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 20
      },
      {
        "id": 1030,
        "name": "Zined Belaid",
        "position": "CB",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 28
      },
      {
        "id": 1031,
        "name": "Rafik Belghali",
        "position": "CB",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 29
      },
      {
        "id": 1032,
        "name": "Ramy Bbain",
        "position": "CB",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 20
      },
      {
        "id": 1033,
        "name": "Sam Cherg",
        "position": "CB",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 27
      },
      {
        "id": 1034,
        "name": "Jaou Hadjam Aissai",
        "position": "CB",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 32
      },
      {
        "id": 1035,
        "name": "Mohamed Amine Tougai",
        "position": "CB",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 26
      },
      {
        "id": 1036,
        "name": "Oussemouarabil Bent",
        "position": "CM",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 20
      },
      {
        "id": 1037,
        "name": "Ham Boui",
        "position": "CM",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 30
      },
      {
        "id": 1038,
        "name": "ares Cha",
        "position": "CM",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 31
      },
      {
        "id": 1039,
        "name": "Ibrahim",
        "position": "CM",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 22
      },
      {
        "id": 1040,
        "name": "Yine Titoui",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 32
      },
      {
        "id": 1041,
        "name": "iz Zerrouki",
        "position": "CM",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 28
      },
      {
        "id": 1042,
        "name": "Mohamedine Ama",
        "position": "ST",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 21
      },
      {
        "id": 1043,
        "name": "ir Benali",
        "position": "ST",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 33
      },
      {
        "id": 1044,
        "name": "il Bbina",
        "position": "ST",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 28
      },
      {
        "id": 1045,
        "name": "ares Ghjemis",
        "position": "ST",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 19
      },
      {
        "id": 1046,
        "name": "Amineiri",
        "position": "ST",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 18
      },
      {
        "id": 1047,
        "name": "ad Mah",
        "position": "ST",
        "number": 10,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 27
      },
      {
        "id": 1048,
        "name": "An Hadj Moussa",
        "position": "ST",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Algeria",
        "age": 28
      }
    ]
  },
  {
    "id": 39,
    "name": "Austria",
    "shortName": "Austria",
    "tla": "AUT",
    "flag": "🇦🇹",
    "group": "J",
    "confederation": "UEFA",
    "fifaRanking": 25,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 40,
    "name": "Jordan",
    "shortName": "Jordan",
    "tla": "JOR",
    "flag": "🇯🇴",
    "group": "J",
    "confederation": "AFC",
    "fifaRanking": 71,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1220,
        "name": "Ahmad Sharf",
        "position": "GK",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 35
      },
      {
        "id": 1221,
        "name": "Hassan Abdel-Fattah",
        "position": "GK",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 19
      },
      {
        "id": 1222,
        "name": "Muath Jaafar",
        "position": "GK",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 23
      },
      {
        "id": 1223,
        "name": "Yaser Hamed",
        "position": "CB",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 22
      },
      {
        "id": 1224,
        "name": "Basim Frangie",
        "position": "CB",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 35
      },
      {
        "id": 1225,
        "name": "Omar Hani",
        "position": "CB",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 26
      },
      {
        "id": 1226,
        "name": "Javad Nun",
        "position": "CB",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 28
      },
      {
        "id": 1227,
        "name": "Ammad Al-Enezi",
        "position": "CB",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 35
      },
      {
        "id": 1228,
        "name": "Khalil Caut",
        "position": "CB",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 29
      },
      {
        "id": 1229,
        "name": "Ali Olwan",
        "position": "CM",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 27
      },
      {
        "id": 1230,
        "name": "Hamza Rafia",
        "position": "CM",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 26
      },
      {
        "id": 1231,
        "name": "Mohammed Al-Dameer",
        "position": "CM",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 27
      },
      {
        "id": 1232,
        "name": "Saleh Al-Jerawi",
        "position": "CM",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 27
      },
      {
        "id": 1233,
        "name": "Yasir Abdullah",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 32
      },
      {
        "id": 1234,
        "name": "Ali Al-Bassam",
        "position": "ST",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 33
      },
      {
        "id": 1235,
        "name": "Hamza Rafia",
        "position": "ST",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 18
      },
      {
        "id": 1236,
        "name": "Mohammed Al-Dameer",
        "position": "ST",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 25
      },
      {
        "id": 1237,
        "name": "Oday Dabbagh",
        "position": "ST",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 28
      },
      {
        "id": 1238,
        "name": "Saleh Al-Sher",
        "position": "ST",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Jordan",
        "age": 21
      }
    ]
  },
  {
    "id": 41,
    "name": "Portugal",
    "shortName": "Portugal",
    "tla": "POR",
    "flag": "🇵🇹",
    "group": "K",
    "confederation": "UEFA",
    "fifaRanking": 6,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1128,
        "name": "Diogo Costa",
        "position": "GK",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 31
      },
      {
        "id": 1129,
        "name": "Rúben Dias",
        "position": "GK",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 28
      },
      {
        "id": 1130,
        "name": "João Palhinha",
        "position": "GK",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 18
      },
      {
        "id": 1131,
        "name": "Raphaël Guerreiro",
        "position": "CB",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 30
      },
      {
        "id": 1132,
        "name": "José Sá",
        "position": "CB",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 18
      },
      {
        "id": 1133,
        "name": "Nélson Semedo",
        "position": "CB",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 27
      },
      {
        "id": 1134,
        "name": "Diogo Leite",
        "position": "CB",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 22
      },
      {
        "id": 1135,
        "name": "Alex Grimaldo",
        "position": "CB",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 29
      },
      {
        "id": 1136,
        "name": "João Cancelo",
        "position": "CB",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 27
      },
      {
        "id": 1137,
        "name": "Bruno Fernandes",
        "position": "CM",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 31
      },
      {
        "id": 1138,
        "name": "Bernardo Silva",
        "position": "CM",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 35
      },
      {
        "id": 1139,
        "name": "Rúben Neves",
        "position": "CM",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 31
      },
      {
        "id": 1140,
        "name": "Mattéo Gonçalves",
        "position": "CM",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 28
      },
      {
        "id": 1141,
        "name": "Cristiano Ronaldo",
        "position": "CM",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 19
      },
      {
        "id": 1142,
        "name": "João Mário",
        "position": "CM",
        "number": 28,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 28
      },
      {
        "id": 1143,
        "name": "Rafael Leão",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 22
      },
      {
        "id": 1144,
        "name": "Pedro Neto",
        "position": "ST",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 30
      },
      {
        "id": 1145,
        "name": "Gonçalo Ramos",
        "position": "ST",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 31
      },
      {
        "id": 1146,
        "name": "Diogo Jota",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 26
      },
      {
        "id": 1147,
        "name": "Cristiano Ronaldo",
        "position": "ST",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Portugal",
        "age": 20
      }
    ]
  },
  {
    "id": 42,
    "name": "DR Congo",
    "shortName": "DR Congo",
    "tla": "COD",
    "flag": "🇨🇩",
    "group": "K",
    "confederation": "CAF",
    "fifaRanking": 63,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 43,
    "name": "Uzbekistan",
    "shortName": "Uzbekistan",
    "tla": "UZB",
    "flag": "🇺🇿",
    "group": "K",
    "confederation": "AFC",
    "fifaRanking": 66,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1201,
        "name": "Jasur Narziev",
        "position": "GK",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 19
      },
      {
        "id": 1202,
        "name": "Arsen Burutov",
        "position": "GK",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 32
      },
      {
        "id": 1203,
        "name": "Akmal Kobilov",
        "position": "GK",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 34
      },
      {
        "id": 1204,
        "name": "Sobir Khidoyrov",
        "position": "CB",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 31
      },
      {
        "id": 1205,
        "name": "coupon Barotov",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 25
      },
      {
        "id": 1206,
        "name": "Dilshod Sabirov",
        "position": "CB",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 25
      },
      {
        "id": 1207,
        "name": "aggression Bokrov",
        "position": "CB",
        "number": 20,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 30
      },
      {
        "id": 1208,
        "name": "Islamnuristic",
        "position": "CB",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 21
      },
      {
        "id": 1209,
        "name": "Malok Tarzi",
        "position": "CB",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 22
      },
      {
        "id": 1210,
        "name": "Eldor Shomurodov",
        "position": "CM",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 31
      },
      {
        "id": 1211,
        "name": "Alisher Tukhtaev",
        "position": "CM",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 34
      },
      {
        "id": 1212,
        "name": "Jamshid Boliev",
        "position": "CM",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 24
      },
      {
        "id": 1213,
        "name": "Viktor Dohalov",
        "position": "CM",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 34
      },
      {
        "id": 1214,
        "name": "Anzor Merzlikin",
        "position": "CM",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 29
      },
      {
        "id": 1215,
        "name": "Eldor Shomurodov",
        "position": "ST",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 31
      },
      {
        "id": 1216,
        "name": "Zulfugar Zainmetov",
        "position": "ST",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 21
      },
      {
        "id": 1217,
        "name": "Ratno Verazi",
        "position": "ST",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 26
      },
      {
        "id": 1218,
        "name": "Tursun Guliyev",
        "position": "ST",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 22
      },
      {
        "id": 1219,
        "name": "Bakhodir Khasanov",
        "position": "ST",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Uzbekistan",
        "age": 29
      }
    ]
  },
  {
    "id": 44,
    "name": "Colombia",
    "shortName": "Colombia",
    "tla": "COL",
    "flag": "🇨🇴",
    "group": "K",
    "confederation": "CONMEBOL",
    "fifaRanking": 14,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1186,
        "name": "José Fernando Cuadrado",
        "position": "GK",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 24
      },
      {
        "id": 1187,
        "name": "Óscar Cordéz",
        "position": "GK",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 27
      },
      {
        "id": 1188,
        "name": "Rafael Santab",
        "position": "GK",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 19
      },
      {
        "id": 1189,
        "name": "Santiago Arias",
        "position": "CB",
        "number": 12,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 30
      },
      {
        "id": 1190,
        "name": "F POLÍT",
        "position": "CB",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 19
      },
      {
        "id": 1191,
        "name": "casting",
        "position": "CB",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 28
      },
      {
        "id": 1192,
        "name": "Johan Mosquera",
        "position": "CB",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 34
      },
      {
        "id": 1193,
        "name": "Yerry Mina",
        "position": "CB",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 34
      },
      {
        "id": 1194,
        "name": "Dávinson Sánchez",
        "position": "CB",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 22
      },
      {
        "id": 1195,
        "name": "James Rodríguez",
        "position": "CM",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 23
      },
      {
        "id": 1196,
        "name": "Radamel Falcao",
        "position": "CM",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 34
      },
      {
        "id": 1197,
        "name": "Luis Díaz",
        "position": "CM",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 32
      },
      {
        "id": 1198,
        "name": "Wilmar Barrios",
        "position": "CM",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 21
      },
      {
        "id": 1199,
        "name": "Jeffren Pacheco",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 25
      },
      {
        "id": 1200,
        "name": "Luis Díaz",
        "position": "ST",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 22
      },
      {
        "id": 1201,
        "name": "Radamel Falcao",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 20
      },
      {
        "id": 1202,
        "name": "Miguel Borja",
        "position": "ST",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 18
      },
      {
        "id": 1203,
        "name": "Duván Zapata",
        "position": "ST",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 27
      },
      {
        "id": 1204,
        "name": "Teófilo Gutiérrez",
        "position": "ST",
        "number": 2,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Colombia",
        "age": 20
      }
    ]
  },
  {
    "id": 45,
    "name": "England",
    "shortName": "England",
    "tla": "ENG",
    "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "group": "L",
    "confederation": "UEFA",
    "fifaRanking": 4,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 1107,
        "name": "Harry Kane",
        "position": "GK",
        "number": 5,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 24
      },
      {
        "id": 1108,
        "name": "Jordan Pickford",
        "position": "GK",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 18
      },
      {
        "id": 1109,
        "name": "Nick Pope",
        "position": "GK",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 22
      },
      {
        "id": 1110,
        "name": "Kyle Walker",
        "position": "CB",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 27
      },
      {
        "id": 1111,
        "name": "John Stones",
        "position": "CB",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 34
      },
      {
        "id": 1112,
        "name": "Harry Maguire",
        "position": "CB",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 35
      },
      {
        "id": 1113,
        "name": "Luke Shaw",
        "position": "CB",
        "number": 1,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 29
      },
      {
        "id": 1114,
        "name": "Ben Chilwell",
        "position": "CB",
        "number": 3,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 24
      },
      {
        "id": 1115,
        "name": "Tyrone Mings",
        "position": "CB",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 18
      },
      {
        "id": 1116,
        "name": "Reece James",
        "position": "CB",
        "number": 21,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 25
      },
      {
        "id": 1117,
        "name": "Declan Rice",
        "position": "CM",
        "number": 26,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 26
      },
      {
        "id": 1118,
        "name": "Jude Bellingham",
        "position": "CM",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 30
      },
      {
        "id": 1119,
        "name": "Mason Mount",
        "position": "CM",
        "number": 18,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 27
      },
      {
        "id": 1120,
        "name": "Bukayo Saka",
        "position": "CM",
        "number": 9,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 18
      },
      {
        "id": 1121,
        "name": "James Maddison",
        "position": "CM",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 18
      },
      {
        "id": 1122,
        "name": "Conor Gallagher",
        "position": "CM",
        "number": 4,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 31
      },
      {
        "id": 1123,
        "name": "Harry Kane",
        "position": "ST",
        "number": 15,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 35
      },
      {
        "id": 1124,
        "name": "Raheem Sterling",
        "position": "ST",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 18
      },
      {
        "id": 1125,
        "name": "Iman Foden",
        "position": "ST",
        "number": 8,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 23
      },
      {
        "id": 1126,
        "name": "Ollie Watkins",
        "position": "ST",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 22
      },
      {
        "id": 1127,
        "name": "Callum Wilson",
        "position": "ST",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "England",
        "age": 29
      }
    ]
  },
  {
    "id": 46,
    "name": "Croatia",
    "shortName": "Croatia",
    "tla": "CRO",
    "flag": "🇭🇷",
    "group": "L",
    "confederation": "UEFA",
    "fifaRanking": 10,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  },
  {
    "id": 47,
    "name": "Ghana",
    "shortName": "Ghana",
    "tla": "GHA",
    "flag": "🇬🇭",
    "group": "L",
    "confederation": "CAF",
    "fifaRanking": 68,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": "",
    "squad": [
      {
        "id": 2038,
        "name": "Daniel Akpeyi",
        "position": "GK",
        "number": 24,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 33
      },
      {
        "id": 2039,
        "name": "Lawrence VT",
        "position": "GK",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 21
      },
      {
        "id": 2040,
        "name": "Samuel Ofori",
        "position": "GK",
        "number": 16,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 35
      },
      {
        "id": 2041,
        "name": "Jonathan Mensah",
        "position": "CB",
        "number": 27,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 27
      },
      {
        "id": 2042,
        "name": "Daniel Amartey",
        "position": "CB",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 23
      },
      {
        "id": 2043,
        "name": "Baba Rahman",
        "position": "CB",
        "number": 17,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 32
      },
      {
        "id": 2044,
        "name": "Harrison Afful",
        "position": "CB",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 25
      },
      {
        "id": 2045,
        "name": "Alex Idu",
        "position": "CB",
        "number": 7,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 34
      },
      {
        "id": 2046,
        "name": "Bernieussy",
        "position": "CB",
        "number": 11,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 34
      },
      {
        "id": 2047,
        "name": "Thomas Partey",
        "position": "CM",
        "number": 14,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 31
      },
      {
        "id": 2048,
        "name": "Andriy Yarmolenko",
        "position": "CM",
        "number": 13,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 30
      },
      {
        "id": 2049,
        "name": "Kevin Prince",
        "position": "CM",
        "number": 23,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 28
      },
      {
        "id": 2050,
        "name": "Mubarak Wakaso",
        "position": "CM",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 30
      },
      {
        "id": 2051,
        "name": "Salisu Mohammed",
        "position": "CM",
        "number": 29,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 24
      },
      {
        "id": 2052,
        "name": "Kevin Prince",
        "position": "ST",
        "number": 30,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 35
      },
      {
        "id": 2053,
        "name": "Asamoah Gyan",
        "position": "ST",
        "number": 25,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 32
      },
      {
        "id": 2054,
        "name": "Jordan Ayew",
        "position": "ST",
        "number": 22,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 31
      },
      {
        "id": 2055,
        "name": "Andre Ayew",
        "position": "ST",
        "number": 6,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 24
      },
      {
        "id": 2056,
        "name": "Thomas Partey",
        "position": "ST",
        "number": 19,
        "club": "TBD",
        "clubFlag": "🌍",
        "nationality": "Ghana",
        "age": 20
      }
    ]
  },
  {
    "id": 48,
    "name": "Panama",
    "shortName": "Panama",
    "tla": "PAN",
    "flag": "🇵🇦",
    "group": "L",
    "confederation": "CONCACAF",
    "fifaRanking": 44,
    "worldCupAppearances": 0,
    "worldCupWins": 0,
    "coach": "TBD",
    "kitPrimary": "#ffffff",
    "kitSecondary": "#000000",
    "crestUrl": ""
  }
];

export const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
