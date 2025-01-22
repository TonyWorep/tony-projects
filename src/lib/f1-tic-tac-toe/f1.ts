const worldChampions = [
  "Lewis Hamilton",
  "Michael Schumacher",
  "Juan Manuel Fangio",
  "Alain Prost",
  "Nelson Piquet",
  "Jackie Stewart",
  "Jim Clark",
  "Niki Lauda",
  "Mario Andretti",
  "Jack Brabham",
  "Emerson Fittipaldi",
  "Mika Hakkinen",
  "Keke Rosberg",
  "Sebastian Vettel",
  "Fernando Alonso",
  "Nigel Mansell",
  "Graham Hill",
  "James Hunt",
  "Ayrton Senna",
  "Kimi Raikkonen",
  "Max Verstappen",
  "Damon Hill",
  "Jochen Rindt",
  "Giuseppe Farina",
  "Alberto Ascari",
  "Mike Hawthorn",
  "Phil Hill",
  "John Surtees",
  "Jody Scheckter",
  "Jacques Villeneuve",
  "Nico Rosberg",
  "Jenson Button",
  "Denny Hulme",
];

const raceWinners = [
  "Max Verstappen",
  "George Russell",
  "Lewis Hamilton",
  "Lando Norris",
  "Oscar Piastri",
  "Charles Leclerc",
  "Carlos Sainz",
  "Sergio Perez",
  "Valtteri Bottas",
  "Daniel Ricciardo",
  "Esteban Ocon",
  "Pierre Gasly",
  "Sebastian Vettel",
  "Kimi Raikkonen",
  "Nico Rosberg",
  "Fernando Alonso",
  "Jenson Button",
  "Pastor Maldonado",
  "Mark Webber",
  "Rubens Barrichello",
  "Felipe Massa",
  "Robert Kubica",
  "Heikki Kovalainen",
  "Giancarlo Fisichella",
  "Michael Schumacher",
  "Juan Pablo Montoya",
  "Jarno Trulli",
  "David Coulthard",
  "Ralf Schumacher",
  "Mika Hakkinen",
  "Eddie Irvine",
  "Heinz-Harald Frentzen",
  "Johnny Herbert",
  "Damon Hill",
  "Jacques Villeneuve",
  "Olivier Panis",
  "Jean Alesi",
  "Gerhard Berger",
  "Nigel Mansell",
  "Alain Prost",
  "Ayrton Senna",
  "Nelson Piquet",
  "Riccardo Patrese",
  "Thierry Boutsen",
  "Alessandro Nannini",
  "Elio de Angelis",
  "Keke Rosberg",
  "Michele Alboreto",
  "Niki Lauda",
  "Rene Arnoux",
  "Patrick Tambay",
  "John Watson",
  "Didier Pironi",
  "Alan Jones",
  "Carlos Reutemann",
  "Gilles Villeneuve",
  "Jacques Laffite",
  "Jean-Pierre Jabouille",
  "Patrick Depailler",
  "Jody Scheckter",
  "Clay Regazzoni",
  "Mario Andretti",
  "Ronnie Peterson",
  "Gunnar Nilsson",
  "James Hunt",
  "Emerson Fittipaldi",
  "Jose Carlos Pace",
  "Jochen Mass",
  "Vittorio Brambilla",
  "Jackie Stewart",
  "Denny Hulme",
  "Peter Revson",
  "Jean-Pierre Beltoise",
  "Jacky Ickx",
  "Jo Siffert",
  "Peter Gethin",
  "Francois Cevert",
  "Jack Brabham",
  "Jochen Rindt",
  "Pedro Rodriguez",
  "Graham Hill",
  "Jim Clark",
  "Bruce McLaren",
  "Dan Gurney",
  "John Surtees",
  "Ludovico Scarfiotti",
  "Richie Ginther",
  "Lorenzo Bandini",
  "Stirling Moss",
  "Wolfgang von Trips",
  "Phil Hill",
  "Giancarlo Baghetti",
  "Robert Ireland",
  "Jim Rathmann",
  "Rodger Ward",
  "Jo Bonnier",
  "Tony Brooks",
  "Maurice Trintignant",
  "Jimmy Bryan",
  "Mike Hawthorn",
  "Peter Collins",
  "Juan Manuel Fangio",
  "Sam Hanks",
  "Luigi Musso",
  "Pat Flaherty",
  "Bob Sweikert",
  "Bill Vukovich",
  "Jose Froilan Gonzalez",
  "Alberto Ascari",
  "Giuseppe Farina",
  "Piero Taruffi",
  "Troy Ruttman",
  "Lee Wallard",
  "Luigi Fagioli",
  "Johnnie Parsons",
];

const ferrari = [
  "Andrea de Adamich",
  "Michele Alboreto",
  "Jean Alesi",
  "Cliff Allison",
  "Fernando Alonso",
  "Chris Amon",
  "Mario Andretti",
  "Rene Arnoux",
  "Alberto Ascari",
  "Luca Badoer",
  "Giancarlo Baghetti",
  "Lorenzo Bandini",
  "Rubens Barrichello",
  "Oliver Bearman",
  "Jean Behra",
  "Derek Bell",
  "Gerhard Berger",
  "Giovanni Bracco",
  "Ernesto Brambilla",
  "Tony Brooks",
  "Ivan Capelli",
  "Piero Carini",
  "Eugenio Castellotti",
  "Peter Collins",
  "Juan Manuel Fangio",
  "Giuseppe Farina",
  "Paul Frere",
  "Nanni Galli",
  "Olivier Gendebien",
  "Richie Ginther",
  "Ignazio Giunti",
  "Jose Frolian Gonzalez",
  "Dan Gurney",
  "Mike Hawthorn",
  "Phil Hill",
  "Jacky Ickx",
  "Eddie Irvine",
  "Stefan Johansson",
  "Nicola Larini",
  "Niki Lauda",
  "Charles Leclerc",
  "Umberto Maglioli",
  "Willy Mairesse",
  "Nigel Mansell",
  "Robert Manzon",
  "Felipe Massa",
  "Arturo Merzario",
  "Gianni Morbidelli",
  "Luigi Musso",
  "Mike Parkes",
  "Cesare Predisa",
  "Andre Pilette",
  "Didier Pironi",
  "Alfonso De Portago",
  "Alain Prost",
  "Kimi Raikkonen",
  "Clay Regazzoni",
  "Carlos Reutemann",
  "Pedro Rodriguez",
  "Ricaro Rodriguez",
  "Carlos Sainz",
  "Mika Salo",
  "Ludovico Scarfiotti",
  "Jody Scheckter",
  "Harry Schell",
  "Michael Schumacher",
  "Dorino Serafini",
  "Andre Simon",
  "Raymon Sommer",
  "John Surtees",
  "Patrick Tambay",
  "Piero Taruffi",
  "Maurice Trintignant",
  "Wolfgang von Trips",
  "Nino Vaccarella",
  "Sebastian Vettel",
  "Gilles Villeneuve",
  "Luigi Villoresi",
  "Jonathan Williams",
  "Lewis Hamilton",
];

const mclaren = [
  "Andrea de Adamich",
  "Philippe Alliot",
  "Fernando Alonso",
  "Michael Andretti",
  "Derek Bell",
  "Gerhard Berger",
  "Mark Blundell",
  "Martin Brundle",
  "Jenson Button",
  "Andre de Cesaris",
  "David Coulthard",
  "Emerson Fittipaldi",
  "Nanni Galli",
  "Peter Gethin",
  "Bruno Giacomelli",
  "Dan Gurney",
  "Mike Hailwood",
  "Mika Hakkinen",
  "Lewis Hamilton",
  "David Hobbs",
  "Denny Hulme",
  "James Hunt",
  "Jacky Ickx",
  "Stefan Johansson",
  "Heikki Kovalainen",
  "Niki Lauda",
  "Jan Magnussen",
  "Kevin Magnussen",
  "Nigel Mansell",
  "Jochen Mass",
  "Bruce McLaren",
  "Juan Pablo Montoya",
  "Lando Norris",
  "Jackie Oliver",
  "Sergio Perez",
  "Alain Prost",
  "Kimi Raikkonen",
  "Brian Redman",
  "Peter Revson",
  "Daniel Ricciardo",
  "Pedro de la Rosa",
  "Keke Rosberg",
  "Carlos Sainz",
  "Jody Scheckter",
  "Ayrton Senna",
  "Stephen South",
  "Patrick Tambay",
  "Stoffel Vandoorne",
  "Gilles Villeneuve",
  "John Watson",
  "Alexander Wurz",
];

const redBull = [
  "Alex Albon",
  "David Coulthard",
  "Robert Doornbos",
  "Pierre Gasly",
  "Christian Klien",
  "Daniil Kvyat",
  "Vitantonio Liuzzi",
  "Sergio Perez",
  "Daniel Ricciardo",
  "Max Verstappen",
  "Sebastian Vettel",
  "Mark Webber",
  "Luciano Burti",
  "Johnny Herbert",
  "Eddie Irvine",
  "Antonio Pizzonia",
  "Pedro de la Rosa",
  "Justin Wilson",
  "Rubens Barrichello",
  "Jan Magnussen",
  "Jos Verstappen",
];

const mercedes = [
  "Valtteri Bottas",
  "Juan Manuel Fangio",
  "Lewis Hamilton",
  "Hans Herrmann",
  "Karl Kling",
  "Hermann Lang",
  "Stirling Moss",
  "Nico Rosberg",
  "George Russell",
  "Michael Schumacher",
  "Andre Simon",
  "Piero Taruffi",
  "Jenson Button",
  "Rubens Barrichello",
  "Ronnie Bucknum",
  "Richie Ginther",
  "David Hobbs",
  "Jo Schlesser",
  "John Surtees",
  "Anthony Davidson",
  "Oliver Panis",
  "Mika Salo",
  "Takuma Sato",
  "Jacques Villeneuve",
  "Ricardo Zonta",
  "Michele Alboreto",
  "Jean Alesi",
  "Chris Amon",
  "Julian Bailey",
  "Stefan Bellof",
  "Ivan Capelli",
  "Andrea de Cesaris",
  "Francois Cevert",
  "Eddie Cheever",
  "Kevin Cogan",
  "Derek Daly",
  "Patrick Depailler",
  "Olivier Grouillard",
  "Hubert Hahne",
  "Brian Henton",
  "Johnny Herbert",
  "Jacky Ickx",
  "Jean-Pierre Jabouille",
  "Jean-Pierre Jarier",
  "Stefan Johansson",
  "Ukyo Katayama",
  "Michel Leclere",
  "Geoff Lees",
  "Stefano Modena",
  "Stefano Modena",
  "Satoru Nakajima",
  "Jonathan Palmer",
  "Ronnie Peterson",
  "Didier Pironi",
  "Peter Revson",
  "Ricardo Rosset",
  "Jody Scheckter",
  "Johnny Servoz-Gavin",
  "Jackie Stewart",
  "Philippe Streiff",
  "Danny Sullivan",
  "Toranosuke Takagi",
  "Gabriele Tarquini",
  "Mike Thackwell",
  "Jos Verstappen",
  "Ricardo Zunino",
];

const williams = [
  "Jack Aitken",
  "Alex Albon",
  "Chris Amon",
  "Mario Andretti",
  "Ian Ashley",
  "Rubens Barrichello",
  "Tom Belsø",
  "Valtteri Bottas",
  "Thierry Boutsen",
  "Tony Brise",
  "Martin Brundle",
  "Jenson Button",
  "Franco Colapinto",
  "David Coulthard",
  "Piers Courage",
  "Derek Daly",
  "Paul di Resta",
  "Heinz-Harald Frentzen",
  "Nanni Galli",
  "Howden Ganley",
  "Marc Gene",
  "Nick Heidfeld",
  "Damon Hill",
  "Nico Hulkenberg",
  "Jacky Ickx",
  "Jean Pierre Jabouille",
  "Max Jean",
  "Alan Jones",
  "Robert Kubica",
  "Jacques Laffite",
  "Nicholas Latifi",
  "Michel Leclere",
  "Gijs van Lennep",
  "Lella Lombardi",
  "Damien Magee",
  "Pastor Maldonado",
  "Nigel Mansell",
  "Felipe Massa",
  "Graham McRae",
  "Arturo Merzario",
  "Francois Migault",
  "Juan Pablo Montoya",
  "Kazuki Nakajima",
  "Patrick Neve",
  "Carlos Pace",
  "Jonathan Palmer",
  "Henri Pescarolo",
  "Nelson Piquet",
  "Antonio Pizzonia",
  "Alain Prost",
  "Brian Redman",
  "Clay Regazzoni",
  "Carlos Reutemann",
  "Keke Rosberg",
  "Nico Rosberg",
  "George Russell",
  "Logan Sargeant",
  "Ian Scheckter",
  "Jean-Louis Schlesser",
  "Ayrton Senna",
  "Bruno Senna",
  "Sergey Sirotkin",
  "Lance Stroll",
  "Jacques Villeneuve",
  "Jo Vonlanthen",
  "Nyck De Vries",
  "Mark Webber",
  "Alexander Wurz",
  "Alex Zanardi",
  "Renzo Zorzi",
];

const enstone = [
  "Fernando Alonso",
  "Jack Doohan",
  "Pierre Gasly",
  "Esteban Ocon",
  "Johnny Cecotto",
  "Teo Fabi",
  "Piercarlo Ghinzani",
  "Bruno Giacomelli",
  "Brian Henton",
  "Stefan Johansson",
  "Pierluigi Martini",
  "Ayrton Senna",
  "Derek Warwick",
  "Jean Alesi",
  "Gerhard Berger",
  "Thierry Boutsen",
  "Martin Brundle",
  "Jenson Button",
  "Giancarlo Fisichella",
  "Johnny Herbert",
  "JJ Lehto",
  "Roberto Moreno",
  "Alessandro Nannini",
  "Riccardo Patrese",
  "Nelson Piquet",
  "Emanuele Pirro",
  "Michael Schumacher",
  "Jos Verstappen",
  "Alexander Wurz",
  "Rene Arnoux",
  "Eddie Cheever",
  "Romain Grosjean",
  "Nick Heidfeld",
  "Francois Hesnault",
  "Nico Hulkenberg",
  "Jean-Pierre Jabouille",
  "Heikki Kovalainen",
  "Robert Kubica",
  "Kevin Magnussen",
  "Esteban Ocon",
  "Joylon Palmer",
  "Vitaly Petrov",
  "Nelson Piquet Jr",
  "Alain Prost",
  "Daniel Ricciardo",
  "Carlos Sainz",
  "Bruno Senna",
  "Philippe Streiff",
  "Patrick Tambay",
  "Jarno Trulli",
  "Jacques Villeneuve",
  "Kimi Raikkonen",
  "Pastor Maldonado",
  "Jerome d'Ambrosio",
];

const sauber = [
  "Jean Alesi",
  "Valtteri Bottas",
  "Jean-Christophe Boullion",
  "Andrea de Cesaris",
  "Pedro Diniz",
  "Marcus Ericsson",
  "Giancarlo Fisichella",
  "Norberto Fontana",
  "Heinz-Harald Frentzen",
  "Antonio Giovinazzi",
  "Esteban Gutierrez",
  "Nick Heidfeld",
  "Johnny Herbert",
  "Nico Hulkenberg",
  "Kamui Kobayashi",
  "Robert Kubica",
  "Nicola Larini",
  "Charles Leclerc",
  "JJ Lehto",
  "Felipe Massa",
  "Gianni Morbidelli",
  "Felipe Nasr",
  "Sergio Perez",
  "Kimi Raikkonen",
  "Pedro de la Rosa",
  "Mika Salo",
  "Adrian Sutil",
  "Sebastian Vettel",
  "Jacques Villeneuve",
  "Pascal Wehrlein",
  "Karl Wendlinger",
  "Zhou Guanyu",
  "Gabriel Bortoleto",
];

const haas = [
  "Oliver Bearman",
  "Pietro Fittipaldi",
  "Romain Grosjean",
  "Esteban Gutierrez",
  "Nico Hulkenberg",
  "Kevin Magnussen",
  "Nikita Mazepin",
  "Mick Schumacher",
  "Esteban Ocon",
];

const astonMartin = [
  "Fernando Alonso",
  "Nico Hulkenberg",
  "Roy Salvadori",
  "Carroll Shelby",
  "Lance Stroll",
  "Maurice Trintignant",
  "Sebastian Vettel",
  "Sergio Perez",
  "Paul di Resta",
  "Giancarlo Fisichella",
  "Vitantonio Liuzzi",
  "Esteban Ocon",
  "Adrian Sutil",
  "Markus Winkelhock",
  "Sakon Yamamoto",
  "Tiago Monterio",
  "Christijan Albers",
  "Jean Alesi",
  "Marco Apicella",
  "Rubens Barrichello",
  "Zsolt Baumgartner",
  "Thierry Boutsen",
  "Martin Brundle",
  "Ivan Capelli",
  "Andrea de Cesaris",
  "Ralph Firman",
  "Heinz-Harald Frentzen",
  "Bertrand Gachot",
  "Timo Glock",
  "Mauricio Gugelmin",
  "Nick Heidfeld",
  "Damon Hill",
  "Eddie Irvine",
  "Narain Karthikeyan",
  "Stefano Modena",
  "Roberto Moreno",
  "Emanuele  Naspetti",
  "Giorgio Pantano",
  "Takuma Sato",
  "Michael Schumacher",
  "Aguri Suzuki",
  "Jarno Trulli",
  "Alex Zanardi",
  "Ricardo Zonta",
];

const toroRosso = [
  "Alex Albon",
  "Jaime Alguersuari",
  "Sebastien Bourdais",
  "Sebastien Buemi",
  "Pierre Gasly",
  "Brendon Hartley",
  "Daniil Kvyat",
  "Vitantonio Liuzzi",
  "Daniel Ricciardo",
  "Carlos Sainz",
  "Scott Speed",
  "Jean-Eric Vergne",
  "Max Verstappen",
  "Sebastian Vettel",
  "Liam Lawson",
  "Nyck de Vries",
  "Isack Hadjar",
];

const hondaTeams = [
  "Jenson Button",
  "Rubens Barrichello",
  "Takuma Sato",
  "Ralf Schumacher",
  "Olivier Panis",
  "Christian Klien",
  "Alex Wurz",
];

const winnersWithoutTitles = [...worldChampions, ...raceWinners].filter(
  (driver) => !(worldChampions.includes(driver) && raceWinners.includes(driver))
);

const williams1990s = [
  "Damon Hill",
  "Jacques Villeneuve",
  "Alain Prost",
  "Nigel Mansell",
];

const raceStarts300 = [
  "Kimi Raikkonen",
  "Michael Schumacher",
  "Fernando Alonso",
  "Lewis Hamilton",
];

const multipleMonzaWinners = [
  "Ayrton Senna",
  "Michael Schumacher",
  "Lewis Hamilton",
];

const homeGPWinners = [
  "Lewis Hamilton",
  "Fernando Alonso",
  "Sebastian Vettel",
  "Charles Leclerc",
  "Max Verstappen",
];

const securedTitleFinalRace = [
  "Lewis Hamilton",
  "Michael Schumacher",
  "Fernando Alonso",
  "Max Verstappen",
];

const britishGPWinnersForBritishTeams = [
  "Lewis Hamilton",
  "Nigel Mansell",
  "David Coulthard",
];

const midSeasonDebuts = [
  "Carlos Sainz",
  "Daniel Ricciardo",
  "Sebastian Vettel",
];

const grandSlamAchievers = [
  "Jim Clark",
  "Ayrton Senna",
  "Lewis Hamilton",
  "Sebastian Vettel",
];

const reserveRoleDrivers = [
  "Robert Kubica",
  "Jenson Button",
  "Mick Schumacher",
];

const usa = [
  "Mario Andretti",
  "Michael Andretti",
  "Skip Barber",
  "Harry Blanchard",
  "Bob Bondurant",
  "Ronnie Bucknum",
  "Phil Cade",
  "Lloyd Casner",
  "Jay Chamberlain",
  "Eddie Cheever",
  "Kevin Cogan",
  "George Constantine",
  "Chuck Daigh",
  "John Edward Delane",
  "Frank Dochnal",
  "Mark Donohue",
  "Bob Drake",
  "Mike Fisher",
  "John Fitch",
  "George Follmer",
  "Fred Gamble",
  "Richie Ginther",
  "Masten Gregory",
  "Dan Gurney",
  "Jim Hall",
  "Walt Hansgen",
  "Phil Hill",
  "Gus Hutchison",
  "Tom Jones",
  "Bruce Kessler",
  "Pete Loevely",
  "Brett Lunger",
  "Herbert Mackay-Fraser",
  "Timmy Mayer",
  "Robert O'Brien",
  "Danny Ongais",
  "Roger Penske",
  "Sam Posey",
  "Bobby Rahal",
  "Lance Reventlow",
  "Peter Revson",
  "Alexander Rossi",
  "Lloyd Ruby",
  "Troy Rutman",
  "Bob Said",
  "Logan Sargeant",
  "Harry Schell",
  "Rob Schroeder",
  "Tony Settember",
  "Hap Sharp",
  "Carroll Shelby",
  "Scott Speed",
  "Danny Sullivan",
  "Alfonso Thiele",
  "Bobby Unser",
  "Fred Wacker",
  "Roger Ward",
];

const australia = [
  "David Brabham",
  "Gary Brabham",
  "Geoff Brabham",
  "Jack Brabham",
  "Warwick Brown",
  "Jack Doohan",
  "Paul England",
  "Frank Gardner",
  "Tony Gaze",
  "Paul Hawkins",
  "Alan Jones",
  "Ken Kavanagh",
  "Brian McGuire",
  "Larry Perkins",
  "Oscar Piastri",
  "Daniel Ricciardo",
  "Tim Schenken",
  "Vern Schuppan",
  "David Walker",
  "Mark Webber",
];

const austria = [
  "Gerhard Berger",
  "Hans Binder",
  "Harald Ertl",
  "Patrick Friesacher",
  "Jo Gartner",
  "Christian Klien",
  "Helmut Koinigg",
  "Niki Lauda",
  "Helmut Marko",
  "Karl Oppitzhauser",
  "Dieter Quester",
  "Roland Ratzenberger",
  "Jochen Rindt",
  "Otto Stuppacher",
  "Karl Wendlinger",
  "Alexander Wurz",
];

const belgium = [
  "Philippe Adams",
  "Georges Berger",
  "Lucien Bianchi",
  "Thierr Boutsen",
  "Alain de Chagny",
  "Johnny Claes",
  "Jerome d'Ambrosio",
  "Bernard de Dryver",
  "Paul Frere",
  "Bertrand Gachot",
  "Olivier Gendebien",
  "Christian Goethals",
  "Jacky Ickx",
  "Roger Laurent",
  "Arthur Legat",
  "Willy Mairesse",
  "Andre Milhoux",
  "Patrick Neve",
  "Andre Pilette",
  "Teddy Pilette",
  "Herve Regout",
  "Jacques Swaters",
  "Charles de Tornaco",
  "Eric van de Poele",
  "Stoffel Vandoorne",
];

const brazil = [
  "Rubens Barrichello",
  "Enrique Bernoldi",
  "Gino Bianco",
  "Luiz Bueno",
  "Luciano Burti",
  "Lucas di Grassi",
  "Pedro Diniz",
  "Wilson Fittipaldi Junior",
  "Christian Fittipaldi",
  "Emerson Fittipaldi",
  "Pietro Fittipaldi",
  "Mauricio Gugelmin",
  "Ingo Hoffmann",
  "Chico Landi",
  "Tarso Marques",
  "Felipe Massa",
  "Cristiano da Matta",
  "Roberto Moreno",
  "Felipe Nasr",
  "Fritz d'Orey",
  "Carlos Pace",
  "Nelson Piquet",
  "Nelson Piquet Jr",
  "Antonio Pizzonia",
  "Alex Ribeiro",
  "Ricardo Rosset",
  "Ayrton Senna",
  "Bruno Senna",
  "Chico Serra",
  "Hermano da Silva Ramos",
  "Ricardo Zonta",
];

export const categories: Record<string, string[]> = {
  "World Champions": worldChampions,
  "Race Winners": raceWinners,
  Ferrari: ferrari,
  McLaren: mclaren,
  RedBull: redBull,
  Mercedes: mercedes,
  Williams: williams,
  Enstone: enstone,
  Sauber: sauber,
  Haas: haas,
  "Aston Martin": astonMartin,
  "Toro Rosso": toroRosso,
  "Honda Teams": hondaTeams,
  "Winners without Titles": winnersWithoutTitles,
  "Williams 1990s": williams1990s,
  "300 Race Starts": raceStarts300,
  "Won Monza Multiple Times": multipleMonzaWinners,
  "Home GP Winners": homeGPWinners,
  "Secured Title in the Final Race": securedTitleFinalRace,
  "British GP Winners for British Team": britishGPWinnersForBritishTeams,
  "Mid Season Debuts": midSeasonDebuts,
  "Grand Slam Achievers": grandSlamAchievers,
  "Reserve Role Drivers": reserveRoleDrivers,
  "United States of America": usa,
  Australia: australia,
  Belgium: belgium,
  Brazil: brazil,
};

const allDrivers = [
  ...worldChampions,
  ...ferrari,
  ...mclaren,
  ...redBull,
  ...mercedes,
  ...williams,
  ...enstone,
  ...sauber,
  ...haas,
  ...astonMartin,
  ...toroRosso,
  ...hondaTeams,
  ...winnersWithoutTitles,
  ...williams1990s,
  ...raceStarts300,
  ...multipleMonzaWinners,
  ...homeGPWinners,
  ...securedTitleFinalRace,
  ...britishGPWinnersForBritishTeams,
  ...midSeasonDebuts,
  ...grandSlamAchievers,
  ...reserveRoleDrivers,
  ...usa,
  ...australia,
  ...belgium,
  ...brazil,
];

export const drivers = [...new Set(allDrivers)];
export const lastUpdated = "22.01.2025";
