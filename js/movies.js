var myRuntime;
var myReleaseDate;

$(document).ready(function () {
    var movieObject = [
        {
            title: "3 Idiots",
            id: 0001,
            overview: "In the tradition of \"Ferris Bueller’s Day Off\" comes this refreshing comedy about a rebellious prankster with a crafty mind and a heart of gold. Rascal. Joker. Dreamer. Genius... You've never met a college student quite like \"Rancho.\" From the moment he arrives at India's most prestigious university, Rancho's outlandish schemes turn the campus upside down—along with the lives of his two newfound best friends. Together, they make life miserable for \"Virus,\" the school’s uptight and heartless dean. But when Rancho catches the eye of the dean's sexy daughter, Virus sets his sights on flunking out the \"3 idiots\" once and for all.",
            runtime: "2 hrs 50 mins",
            release_date: "December 23, 2009",
            wikipedia: "3_Idiots",
            trailer: "tE_7Oz-iH80",
            poster: "img/3_idiots.jpg",
            genre: ["Drama", "Comedy", "Romance"]
        },
        {
            title: "10 Cloverfield Lane",
            id: 0002,
            overview: 'After a car accident, Michelle awakens to find herself in a mysterious bunker with two men named Howard and Emmett. Howard offers her a pair of crutches to help her remain mobile with her leg injury sustained from the car crash and tells her to "get good on those" before leaving the bunker. She has been given the information that there has been an alien attack and the outside world is poisoned. However, Howard and Emmett\'s intentions soon become questionable and Michelle is faced with a question: Is it better in here or out there?',
            runtime: "1 hr 43 mins",
            release_date: "March 10, 2016",
            wikipedia: "10_Cloverfield_Lane",
            trailer: "saHzng8fxLs",
            poster: "img/10_cloverfield_lane.jpg",
            genre: ["Science Fiction"]
        },
        {
            title: "12 Angry Men",
            id: 0003,
            overview: "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
            runtime: "1 hr 36 mins",
            release_date: "March 25, 1957",
            wikipedia: "12_Angry_Men_(1957_film)",
            trailer: "2L4IhbF2WK0",
            poster: "img/12_angry_men.jpg",
            genre: ["Drama"]
        },
        {
            title: "25th Hour",
            id: 0004,
            overview: "The filmed adaptation from David Benioff's novel of the same name. Set in New York, a convicted drug dealer named Monty has one day left of freedom before he is sent to prison. Anger, blame, frustration, betrayal, guilt and loneliness are themes on this last day of friends, family, parties, saying goodbye, and setting things straight. A Spike Lee joint.",
            runtime: "2 hrs 15 mins",
            release_date: "December 16, 2002",
            wikipedia: "25th_Hour",
            trailer: "Kld8vLObZ3s",
            poster: "img/25th_hour.jpg",
            genre: ["Crime", "Drama"]
        },
        {
            title: "300",
            id: 0005,
            overview: "Based on Frank Miller's graphic novel, '300' is very loosely based the 480 B.C. Battle of Thermopylae, where the King of Sparta led his army against the advancing Persians; the battle is said to have inspired all of Greece to band together against the Persians, and helped usher in the world's first democracy.",
            runtime: "1 hr 57 mins",
            release_date: "December 09, 2006",
            wikipedia: "300_(film)",
            trailer: "UrIbxk7idYA",
            poster: "img/300.jpg",
            genre: ["Action", "Adventure", "War"]
        },
        {
            title: "A Christmas Story",
            id: 0006,
            overview: "The comic mishaps and adventures of a young boy named Ralph, trying to convince his parents, teachers, and Santa that a Red Ryder B.B. gun really is the perfect Christmas gift for the 1940s.",
            runtime: "1 hr 34 mins",
            release_date: "November 18, 1983",
            wikipedia: "A_Christmas_Story",
            trailer: "uvMLfSQrHKE",
            poster: "img/a_christmas_story.jpg",
            genre: ["Comedy", "Family"]
        },
        {
            title: "A Few Good Men",
            id: 0007,
            overview: "When cocky military lawyer Lt. Daniel Kaffee and his co-counsel, Lt. Cmdr. JoAnne Galloway, are assigned to a murder case, they uncover a hazing ritual that could implicate high-ranking officials such as shady Col. Nathan Jessep.",
            runtime: "2 hrs 18 mins",
            release_date: "December 11, 1992",
            wikipedia: "A_Few_Good_Men",
            trailer: "4AC0wWxadvc",
            poster: "img/a_few_good_men.jpg",
            genre: ["Drama"]
        },
        {
            title: "A Most Violent Year",
            id: 0008,
            overview: "A thriller set in New York City during the winter of 1981, statistically one of the most violent years in the city's history, and centered on a the lives of an immigrant and his family trying to expand their business and capitalize on opportunities as the rampant violence, decay, and corruption of the day drag them in and threaten to destroy all they have built.",
            runtime: "2 hrs 5 mins",
            release_date: "December 30, 2014",
            wikipedia: "A_Most_Violent_Year",
            trailer: "o87gG7ZlEAg",
            poster: "img/a_most_violent_year.jpg",
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            title: "A Serious Man",
            id: 0009,
            overview: "A Serious Man is the story of an ordinary man's search for clarity in a universe where Jefferson Airplane is on the radio and F-Troop is on TV. It is 1967, and Larry Gopnik, a physics professor at a quiet Midwestern university, has just been informed by his wife Judith that she is leaving him. She has fallen in love with one of his more pompous acquaintances Sy Ableman.",
            runtime: "1 hr 45 mins",
            release_date: "October 02, 2009",
            wikipedia: "A_Serious_Man",
            trailer: "mDKHWRbK2_Q",
            poster: "img/a_serious_man.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "A Touch of Sin",
            id: 0010,
            overview: "Four independent stories set in modern China about random acts of violence.",
            runtime: "2 hrs 13 mins",
            release_date: "October 4, 2013",
            wikipedia: "A_Touch_of_Sin",
            trailer: "VUJt_kf7uKQ",
            poster: "img/a_touch_of_sin.jpg",
            genre: ["Drama"]
        },
        {
            title: "A Very Harold & Kumar Christmas",
            id: 0011,
            overview: "Six years have elapsed since Guantanamo Bay, leaving Harold and Kumar estranged from one another with very different families, friends and lives. But when Kumar arrives on Harold's doorstep during the holiday season with a mysterious package in hand, he inadvertently burns down Harold's father-in-law's beloved Christmas tree. To fix the problem, Harold and Kumar embark on a mission through New York City to find the perfect Christmas tree, once again stumbling into trouble at every single turn.",
            runtime: "1 hr 48 mins",
            release_date: "November 4, 2011",
            wikipedia: "A_Very_Harold_&_Kumar_Christmas",
            trailer: "dZpFjWOCHAM",
            poster: "img/a_very_harold_and_kumar_christmas.jpg",
            genre: ["Comedy"]
        },
        {
            title: "Ad Astra",
            id: 0012,
            overview: "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
            runtime: "2 hrs 3 mins",
            release_date: "September 17, 2019",
            wikipedia: "Ad_Astra_(film)",
            trailer: "P6AaSMfXHbA",
            poster: "img/adastra.jpg",
            genre: ["Science Fiction", "Drama"]
        },
        {
            title: "Alexander",
            id: 0013,
            overview: "Alexander, the King of Macedonia, leads his legions against the giant Persian Empire. After defeating the Persians, he leads his army across the then known world, venturing farther than any westerner had ever gone, all the way to India.",
            runtime: "2 hrs 55 mins",
            release_date: "November 21, 2004",
            wikipedia: "Alexander_(2004_film)",
            trailer: "dywun4JdAQY",
            poster: "img/alexander.jpg",
            genre: ["War", "History", "Action", "Adventure", "Drama", "Romance"]
        },
        {
            title: "All Dogs Go to Heaven",
            id: 0014,
            overview: "When a casino owning dog named Charlie is murdered by his rival Carface, he finds himself in Heaven basically by default since all dogs go to heaven. However, since he wants to get back at his killer, he cons his way back to the living with the warning that doing that damns him to Hell. Once back, he teams with his old partner, Itchy to prep his retaliation. He also stumbles on to an orphan girl who can talk to the animals, thus allowing him to get the inside info on the races to ensure his wins to finance his plans. However, all the while, he is still haunted by nightmares on what's waiting for him on the other side unless he can prove that he is worthy of Heaven again.",
            runtime: "1 hr 39 mins",
            release_date: "November 17, 1989",
            wikipedia: "All_Dogs_Go_to_Heaven",
            trailer: "GUvk7NNmB64",
            poster: "img/all_dogs_go_to_heaven.jpg",
            genre: ["Drama", "Animation", "Family", "Comedy", "Fantasy"]
        },
        {
            title: "All Governments Lie: Truth, Deception, and the Spirit of I.F. Stone",
            id: 410205,
            overview: "Vancouver-based filmmaker and TV news veteran Fred Peabody explores the life and legacy of the maverick American journalist I.F. Stone, whose long one-man crusade against government deception lives on in the work of such contemporary filmmakers and journalists as Laura Poitras, Glenn Greenwald, David Corn, and Matt Taibbi.",
            runtime: "1 hr 31 mins",
            release_date: "November 04, 2016",
            wikipedia: "All_Governments_Lie:_Truth,_Deception_and_the_Spirit_of_I._F._Stone",
            trailer: "C_cKC0_sGu0",
            poster: "img/all_governments_lie.jpg",
            genre: ["Documentary"]
        },
        {
            title: "Alpha Dog",
            id: 0015,
            overview: "Johnny Truelove likes to see himself as tough. He's the son of an underworld figure and a drug dealer. Johnny also likes to get tough when things don't go his way. When Jake Mazursky fails to pay up for Johnny, things get worse for the Mazursky family, as Johnny and his 'gang' kidnap Jake's 15 year old brother and holds him hostage. Problem now is what to do with 'stolen boy?'",
            runtime: "2 hrs 2 mins",
            release_date: "January 27, 2006",
            wikipedia: "Alpha_Dog",
            trailer: "VPWjDJmbrak",
            poster: "img/alpha_dog.jpg",
            genre: ["Crime", "Drama"]
        },
        {
            title: "American Beauty",
            id: 0016,
            overview: "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
            runtime: "2 hrs 2 mins",
            release_date: "September 15, 1999",
            wikipedia: "American_Beauty_(1999_film)",
            trailer: "FfWnZthD9Tw",
            poster: "img/american_beauty.jpg",
            genre: ["Drama"]
        },
        {
            title: "American Gangster",
            id: 0017,
            overview: "Following the death of his employer and mentor, Bumpy Johnson, Frank Lucas establishes himself as the number one importer of heroin in the Harlem district of Manhattan. He does so by buying heroin directly from the source in South East Asia and he comes up with a unique way of importing the drugs into the United States. Based on a true story.",
            runtime: "2 hrs 37 mins",
            release_date: "November 02, 2007",
            wikipedia: "American_Gangster_(film)",
            trailer: "BV_nssS6Zkg",
            poster: "img/american_gangster.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "American History X",
            id: 0018,
            overview: "Derek Vineyard is paroled after serving 3 years in prison for killing two thugs who tried to break into/steal his truck. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
            runtime: "1 hr 59 mins",
            release_date: "October 30, 1998",
            wikipedia: "American_History_X",
            trailer: "LZGVcd5clgg",
            poster: "img/american_history_x.jpg",
            genre: ["Drama"]
        },
        {
            title: "American Psycho",
            id: 0019,
            overview: "A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.",
            runtime: "1 hr 42 mins",
            release_date: "April 13, 2000",
            wikipedia: "American_Psycho_(film)",
            trailer: "5YnGhW4UEhc",
            poster: "img/american_psycho.jpg",
            genre: ["Thriller", "Drama", "Crime"]
        },
        {
            title: "Anora",
            id: 1064213,
            overview: "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as his parents set out to get the marriage annulled.",
            runtime: "2 hrs 19 mins",
            release_date: "October 18, 2024",
            wikipedia: "Anora",
            trailer: "p1HxTmV5i7c",
            poster: "img/anora.jpg",
            genre: ["Drama", "Comedy", "Romance"]
        },
        {
            title: "Any Given Sunday",
            id: 0020,
            overview: "A star quarterback gets knocked out of the game and an unknown third stringer is called in to replace him. The unknown gives a stunning performance and forces the aging coach to reevaluate his game plans and life. A new co-owner/president adds to the pressure of winning. The new owner must prove her self in a male dominated world.",
            runtime: "2 hrs 43 mins",
            release_date: "December 16, 1999",
            wikipedia: "Any_Given_Sunday",
            trailer: "Q1DRD5Jvzis",
            poster: "img/any_given_sunday.jpg",
            genre: ["Drama"]
        },
        {
            title: "Apocalypse Now",
            id: 00211,
            overview: 'At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, "does not exist, nor will it ever exist." His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.',
            runtime: "2 hrs 27 mins",
            release_date: "August 15, 1979",
            wikipedia: "Apocalypse_Now",
            trailer: "FTjG-Aux_yQ",
            poster: "img/apocalypse_now.jpg",
            genre: ["Drama", "War"]
        },
        {
            title: "Aquaman",
            id: 0021,
            overview: "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
            runtime: "2 hrs 24 mins",
            release_date: "December 07, 2018",
            wikipedia: "Aquaman_(film)",
            trailer: "WDkg3h8PCVU",
            poster: "img/aquaman.jpg",
            genre: ["Action", "Adventure", "Fantasy", "Science Fiction"]
        },
        {
            title: "A.I. Artificial Intelligence",
            id: 0022,
            overview: "11-year-old David, the first android with human feelings, is adopted by the Swinton family to test his ability to function. However, before his 'testing' is complete, he leaves on an odyssey to understand the secret to his existence and be more human.",
            runtime: "2 hrs 26 mins",
            release_date: "June 29, 2001",
            wikipedia: "A.I._Artificial_Intelligence",
            trailer: "gqkCztN-Ra8",
            poster: "img/a_i.jpg",
            genre: ["Drama", "Science Fiction", "Adventure"]
        },
        {
            title: "Assassins",
            id: 9691,
            overview: "Assassin Robert Rath arrives at a funeral to kill a prominent mobster, only to witness a rival hired gun complete the job for him -- with grisly results. Horrified by the murder of innocent bystanders, Rath decides to take one last job and then return to civilian life. But finding his way out of the world of contract killing grows ever more dangerous as Rath falls for his female target and becomes a marked man himself.",
            runtime: "2 hrs 12 mins",
            release_date: "October 26, 1995",
            wikipedia: "Assassins_(1995_film)",
            trailer: "XCuD8Q_Y10Q",
            poster: "img/assassins.jpg",
            genre: ["Action", "Adventure", "Crime", "Thriller"]
        },
        {
            title: "Austin Powers: International Man of Mystery",
            id: 0023,
            overview: "As a swingin' fashion photographer by day and a groovy British superagent by night, Austin Powers is the '60s' most shagadelic spy, baby! But can he stop megalomaniac Dr. Evil after the bald villain freezes himself and unthaws in the '90s? With the help of sexy sidekick Vanessa Kensington, he just might.",
            runtime: "1 hr 34 mins",
            release_date: "May 02, 1997",
            wikipedia: "Austin_Powers:_International_Man_of_Mystery",
            trailer: "5vsANcS4Ml8",
            poster: "img/austin_powers_1.jpg",
            genre: ["Science Fiction", "Comedy", "Crime"]
        },
        {
            title: "Austin Powers: The Spy Who Shagged Me",
            id: 0024,
            overview: "When diabolical genius, Dr. Evil travels back in time to steal superspy Austin Powers's ‘mojo’, Austin must return to the swingin' '60s himself – with the help of American agent, Felicity Shagwell – to stop the dastardly plan. Once there, Austin faces off against Dr. Evil's army of minions and saves the world in his own unbelievably groovy way.",
            runtime: "1 hr 35 mins",
            release_date: "June 08, 1999",
            wikipedia: "Austin_Powers:_The_Spy_Who_Shagged_Me",
            trailer: "LGVjoLlgHbM",
            poster: "img/austin_powers_2.jpg",
            genre: ["Adventure", "Comedy", "Crime", "Science Fiction"]
        },
        {
            title: "Austin Powers: Goldmember",
            id: 0025,
            overview: "The world's most shagadelic spy continues his fight against Dr. Evil. This time, the diabolical doctor and his clone, Mini-Me, team up with a new foe -- '70s kingpin Goldmember. While pursuing the team of villains to stop them from world domination, Austin gets help from his dad and an old girlfriend.",
            runtime: "1 hr 34 mins",
            release_date: "July 26, 2002",
            wikipedia: "Austin_Powers_in_Goldmember",
            trailer: "XROEPkzyCRg",
            poster: "img/austin_powers_3.jpg",
            genre: ["Comedy", "Crime", "Science Fiction"]
        },
        {
            title: "Avatar",
            id: 0026,
            overview: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
            runtime: "2 hrs 42 mins",
            release_date: "December 10, 2009",
            wikipedia: "Avatar_(2009_film)",
            trailer: "5PSNL1qE6VY",
            poster: "img/avatar.jpg",
            genre: ["Action", "Adventure", "Fantasy", "Science Fiction"]
        },
        {
            title: "The Avengers",
            id: 0027,
            overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
            runtime: "2 hrs 23 mins",
            release_date: "April 25, 2012",
            wikipedia: "The_Avengers_(2012_film)",
            trailer: "eOrNdBpGMv8",
            poster: "img/the_avengers.jpg",
            genre: ["Science Fiction", "Action", "Adventure"]
        },
        {
            title: "Avengers: Age of Ultron",
            id: 0028,
            overview: "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
            runtime: "2 hrs 21 mins",
            release_date: "April 22, 2015",
            wikipedia: "Avengers:_Age_of_Ultron",
            trailer: "tmeOjFno6Do",
            poster: "img/avengers_age_of_ultron.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Avengers: Infinity War",
            id: 0029,
            overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            runtime: "2 hrs 29 mins",
            release_date: "April 25, 2018",
            wikipedia: "Avengers:_Infinity_War",
            trailer: "6ZfuNTqbHE8",
            poster: "img/avengers_infinity_war.jpg",
            genre: ["Action", "Adventure", "Fantasy"]
        },
        {
            title: "Avengers: Endgame",
            id: 0030,
            overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
            runtime: "3 hrs 01 mins",
            release_date: "April 24, 2019",
            wikipedia: "Avengers%3A_Endgame",
            trailer: "TcMBFSGVi1c",
            poster: "img/avengers_endgame.jpg",
            genre: ["Adventure", "Science Fiction", "Action"]
        },
        {
            title: "Baby Boy",
            id: 0031,
            overview: "The story of Jody, a misguided, 20-year-old African-American who is really just a baby boy finally forced-kicking and screaming to face the commitments of real life. Streetwise and jobless, he has not only fathered two children by two different women-Yvette and Peanut but still lives with his own mother. He can't seem to strike a balance or find direction in his chaotic life.",
            runtime: "2 hrs 10 mins",
            release_date: "June 27, 2001",
            wikipedia: "Baby_Boy_(film)",
            trailer: "vhe9MZi-lHk",
            poster: "img/baby_boy.jpg",
            genre: ["Crime", "Drama", "Romance"]
        },
        {
            title: "Back to the Future",
            id: 0032,
            overview: "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
            runtime: "1 hr 56 mins",
            release_date: "July 03, 1985",
            wikipedia: "Back_to_the_Future",
            trailer: "qvsgGtivCgs",
            poster: "img/back_to_the_future.jpg",
            genre: ["Adventure", "Comedy", "Science Fiction", "Family"]
        },
        {
            title: "Back to the Future Part II",
            id: 0033,
            overview: "Marty and Doc are at it again in this wacky sequel to the 1985 blockbuster as the time-traveling duo head to 2015 to nip some McFly family woes in the bud. But things go awry thanks to bully Biff Tannen and a pesky sports almanac. In a last-ditch attempt to set things straight, Marty finds himself bound for 1955 and face to face with his teenage parents -- again.",
            runtime: "1 hr 48 mins",
            release_date: "November 20, 1989",
            wikipedia: "Back_to_the_Future_Part_II",
            trailer: "MdENmefJRpw",
            poster: "img/back_to_the_future_2.jpg",
            genre: ["Adventure", "Comedy", "Family", "Science Fiction", "Action"]
        },
        {
            title: "Back to the Future Part III",
            id: 0034,
            overview: "The final installment of the Back to the Future trilogy finds Marty digging the trusty DeLorean out of a mineshaft and looking up Doc in the Wild West of 1885. But when their time machine breaks down, the travelers are stranded in a land of spurs. More problems arise when Doc falls for pretty schoolteacher Clara Clayton, and Marty tangles with Buford Tannen.",
            runtime: "1 hr 58 mins",
            release_date: "May 25, 1990",
            wikipedia: "Back_to_the_Future_Part_III",
            trailer: "EYkguxpqsrg",
            poster: "img/back_to_the_future_3.jpg",
            genre: ["Adventure", "Action", "Comedy", "Science Fiction", "Family"]
        },
        {
            title: "Bad Boys",
            id: 0035,
            overview: "Marcus Burnett is a hen-pecked family man. Mike Lowry is a foot-loose and fancy free ladies' man. Both are Miami policemen, and both have 72 hours to reclaim a consignment of drugs stolen from under their station's nose. To complicate matters, in order to get the assistance of the sole witness to a murder, they have to pretend to be each other.",
            runtime: "1 hr 59 mins",
            release_date: "April 7, 1995",
            wikipedia: "Bad_Boys_(1995_film)",
            trailer: "Xm12NSa8jsM",
            poster: "img/bad_boys.jpg",
            genre: ["Action", "Comedy", "Crime", "Thriller"]
        },
        {
            title: "Bad Boys II",
            id: 0036,
            overview: "Out-of-control, trash-talking buddy cops Marcus Burnett and Mike Lowrey of the Miami Narcotics Task Force reunite, and bullets fly, cars crash and laughs explode as they pursue a whacked-out drug lord from the streets of Miami to the barrios of Cuba. But the real fireworks result when Marcus discovers that playboy Mike is secretly romancing Marcus’ sexy sister.",
            runtime: "2 hrs 27 mins",
            release_date: "July 18, 2003",
            wikipedia: "Bad_Boys_II",
            trailer: "UTNcOwQ2lRw",
            poster: "img/bad_boys_II.jpg",
            genre: ["Adventure", "Action", "Comedy", "Thriller", "Crime"]
        },
        {
            title: "Bandits",
            id: 0037,
            overview: "Two bank robbers fall in love with the girl they've kidnapped.",
            runtime: "2 hrs 3 mins",
            release_date: "October 12, 2001",
            wikipedia: "Bandits_(2001_film)",
            trailer: "ymC0WLUF264",
            poster: "img/bandits.jpg",
            genre: ["Action", "Comedy", "Crime", "Romance"]
        },
        {
            title: "Batman",
            id: 0038,
            overview: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
            runtime: "2 hrs 6 mins",
            release_date: "June 23, 1989",
            wikipedia: "Batman_(1989_film)",
            trailer: "dgC9Q0uhX70",
            poster: "img/batman.jpg",
            genre: ["Fantasy", "Action"]
        },
        {
            title: "Batman Begins",
            id: 0039,
            overview: "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City. Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
            runtime: "2 hrs 20 mins",
            release_date: "June 14, 2005",
            wikipedia: "Batman_Begins",
            trailer: "neY2xVmOfUM",
            poster: "img/batman_begins.jpg",
            genre: ["Action", "Crime", "Drama"]
        },
        {
            title: "The Dark Knight",
            id: 0040,
            overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            runtime: "2 hrs 32 mins",
            release_date: "July 16, 2008",
            wikipedia: "The_Dark_Knight_(film)",
            trailer: "kmJLuwP3MbY",
            poster: "img/the_dark_knight.jpg",
            genre: ["Drama", "Action", "Crime", "Thriller"]
        },
        {
            title: "The Dark Knight Rises",
            id: 0041,
            overview: "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
            runtime: "2 hrs 45 mins",
            release_date: "July 16, 2012",
            wikipedia: "The_Dark_Knight_Rises",
            trailer: "7gFwvozMHR4",
            poster: "img/the_dark_knight_rises.jpg",
            genre: ["Action", "Crime", "Drama", "Thriller"]
        },
        {
            title: "The Batman",
            id: 0042,
            overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
            runtime: "2 hrs 57 mins",
            release_date: "March 1, 2022",
            wikipedia: "The_Batman_(film)",
            trailer: "mqqft2x_Aa4",
            poster: "img/the_batman.jpg",
            genre: ["Crime", "Mystery", "Thriller"]
        },
        {
            title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
            id: 0043,
            overview: "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
            runtime: "3 hrs 2 mins",
            release_date: "March 23, 2016",
            wikipedia: "Batman_v_Superman:_Dawn_of_Justice",
            trailer: "8AO19XY2rqc",
            poster: "img/batman_v_superman_dawn_of_justice.jpg",
            genre: ["Action", "Adventure", "Fantasy"]
        },
        {
            title: "Zack Snyder's Justice League",
            id: 0044,
            overview: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
            runtime: "4 hrs 2 mins",
            release_date: "March 18, 2021",
            wikipedia: "Zack_Snyder%27s_Justice_League",
            trailer: "vM-Bja2Gy04",
            poster: "img/zack_snyders_justice_league.jpg",
            genre: ["Action", "Adventure", "Fantasy", "Science Fiction"]
        },
        {
            title: "Before Sunrise",
            id: 0045,
            overview: "A dialogue marathon of a film, this fairytale love story of an American boy and French girl. During a day and a night together in Vienna their two hearts collide.",
            runtime: "1 hr 45 mins",
            release_date: "January 27, 1995",
            wikipedia: "Before_Sunrise",
            trailer: "6MUcuqbGTxc",
            poster: "img/before_sunrise.jpg",
            genre: ["Drama", "Romance"]
        },
        {
            title: "Before Sunset",
            id: 0046,
            overview: "Nine years ago two strangers met by chance and spent a night in Vienna that ended before sunrise. They are about to meet for the first time since. Now they have one afternoon to find out if they belong together.",
            runtime: "1 hr 20 mins",
            release_date: "February 10, 2004",
            wikipedia: "Before_Sunset",
            trailer: "oI3UuneLcyU",
            poster: "img/before_sunset.jpg",
            genre: ["Drama", "Romance"]
        },
        {
            title: "Before Midnight",
            id: 0047,
            overview: "We meet Jesse and Celine nine years on in Greece. Almost two decades have passed since their first meeting on that train bound for Vienna.",
            runtime: "1 hr 48 mins",
            release_date: "April 5, 2013",
            wikipedia: "Before_Midnight_(film)",
            trailer: "Kv6JWoVKlGY",
            poster: "img/before_midnight.jpg",
            genre: ["Drama", "Romance"]
        },
        {
            title: "Belly",
            id: 0048,
            overview: "Tommy Brown and Sincere are best friends as well as infamous and ruthless criminals and shot-callers in the hood. Respected by many but feared by all. As the police are closing in on them and new players are looking for a come up, will their reign last?",
            runtime: "1 hr 36 mins",
            release_date: "November 04, 1998",
            wikipedia: "Belly_(film)",
            trailer: "NGMfgDcwf3U",
            poster: "img/belly.jpg",
            genre: ["Crime", "Drama"]
        },
        {
            title: "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
            id: 0049,
            overview: "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
            runtime: "1 hr 49 mins",
            release_date: "February 05, 2020",
            wikipedia: "Birds_of_Prey_(2020_film)",
            trailer: "kGM4uYZzfu0",
            poster: "img/birds_of_prey.jpg",
            genre: ["Action", "Crime", "Comedy"]
        },
        {
            title: "Black and White",
            id: 0050,
            overview: "Rich Bower is an up-and-coming star in the hip-hop world. Everyone wants to be around him, including Raven and her fellow upper-class white high school friends. The growing appeal of black culture among white teens fascinates documentary filmmaker Sam Donager, who sets out to chronicle it with her husband, Terry. But before Bower was a rapper, he was a gangster, and his criminal past comes back to haunt him and all those around him.",
            runtime: "1 hr 38 mins",
            release_date: "September 04, 1999",
            wikipedia: "Black_and_White_(1999_drama_film)",
            trailer: "heLsk6jv_hk",
            poster: "img/black_and_white.jpg",
            genre: ["Drama"]
        },
        {
            title: "Black Widow",
            id: 0051,
            overview: "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
            runtime: "2 hrs 14 mins",
            release_date: "July 7, 2021",
            wikipedia: "Black_Widow_(2021_film)",
            trailer: "ybji16u608U",
            poster: "img/black_widow.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "BlacKkKlansman",
            id: 0052,
            overview: "Colorado Springs, late 1970s. Ron Stallworth, an African American police officer, and Flip Zimmerman, his Jewish colleague, run an undercover operation to infiltrate the Ku Klux Klan.",
            runtime: "2 hrs 15 mins",
            release_date: "July 30, 2018",
            wikipedia: "BlacKkKlansman",
            trailer: "fQNZhs0QKq0",
            poster: "img/blackkklansman.jpg",
            genre: ["Crime", "Drama", "History", "Comedy"]
        },
        {
            title: "Blade",
            id: 36647,
            overview: "The Daywalker known as \"Blade\" - a half-vampire, half-mortal man - becomes the protector of humanity against an underground army of vampires.",
            runtime: "2 hrs 1 min",
            release_date: "August 21, 1998",
            wikipedia: "Blade_(1998_film)",
            trailer: "kaU2A7KyOu4",
            poster: "img/blade.jpg",
            genre: ["Horror", "Action"]
        },
        {
            title: "Blade Runner",
            id: 0053,
            overview: "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
            runtime: "1 hr 57 mins",
            release_date: "June 25, 1982",
            wikipedia: "Blade_Runner",
            trailer: "W_9rhPDLHWk",
            poster: "img/blade_runner.jpg",
            genre: ["Science Fiction", "Drama", "Thriller"]
        },
        {
            title: "Blade Runner 2049",
            id: 0054,
            overview: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
            runtime: "2 hrs 43 mins",
            release_date: "October 4, 2017",
            wikipedia: "Blade_Runner_2049",
            trailer: "Mjiqa-PWGQY",
            poster: "img/blade_runner_2049.jpg",
            genre: ["Mystery", "Science Fiction", "Thriller"]
        },
        {
            title: "Bloodshot",
            id: 0055,
            overview: "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
            runtime: "1 hr 50 mins",
            release_date: "March 5, 2020",
            wikipedia: "Bloodshot_(film)",
            trailer: "vOUVVDWdXbo",
            poster: "img/bloodshot.jpg",
            genre: ["Action", "Science Fiction"]
        },
        {
            title: "Blow",
            id: 0056,
            overview: "A boy named George Jung grows up in a struggling family in the 1950's. His mother nags at her husband as he is trying to make a living for the family. It is finally revealed that George's father cannot make a living and the family goes bankrupt. George does not want the same thing to happen to him, and his friend Tuna, in the 1960's, suggests that he deal marijuana. He is a big hit in California in the 1960's, yet he goes to jail, where he finds out about the wonders of cocaine. As a result, when released, he gets rich by bringing cocaine to America. However, he soon pays the price.",
            runtime: "2 hrs 4 mins",
            release_date: "April 5, 2001",
            wikipedia: "Blow_(film)",
            trailer: "scWkP1GdnuU",
            poster: "img/blow.jpg",
            genre: ["Crime", "Drama"]
        },
        {
            title: "Bohemian Rhapsody",
            id: 424694,
            overview: "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
            runtime: "2 hrs 15 mins",
            release_date: "November 2, 2018",
            wikipedia: "Bohemian_Rhapsody_(film)",
            trailer: "mP0VHJYFOAU",
            poster: "img/bohemian_rhapsody.jpg",
            genre: ["Music", "Drama", "History"]
        },
        {
            title: "Boiler Room",
            id: 14181,
            overview: "A college dropout gets a job as a broker for a suburban investment firm, which puts him on the fast track to success, but the job might not be as legitimate as it sounds.",
            runtime: "1 hr 58 mins",
            release_date: "February 18, 2000",
            wikipedia: "Boiler_Room_(film)",
            trailer: "kgCLG4gCAvI",
            poster: "img/boiler_room.jpg",
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            title: "Boogie Nights",
            id: 4995,
            overview: "Set in 1977, back when sex was safe, pleasure was a business and business was booming, idealistic porn producer Jack Horner aspires to elevate his craft to an art form. Horner discovers Eddie Adams, a hot young talent working as a busboy in a nightclub, and welcomes him into the extended family of movie-makers, misfits and hangers-on that are always around. Adams' rise from nobody to a celebrity adult entertainer is meteoric, and soon the whole world seems to know his porn alter ego, \"Dirk Diggler\". Now, when disco and drugs are in vogue, fashion is in flux and the party never seems to stop, Adams' dreams of turning sex into stardom are about to collide with cold, hard reality.",
            runtime: "2 hrs 36 mins",
            release_date: "October 31, 1997",
            wikipedia: "Boogie_Nights",
            trailer: "pOk0fsMGyck",
            poster: "img/boogie_nights.jpg",
            genre: ["Drama"]
        },
        {
            title: "Brewster's Millions",
            id: 11064,
            overview: "Brewster, an aging minor-league baseball player, stands to inherit 300 million dollars if he can successfully spend 30 million dollars in 30 days without anything to show for it, and without telling anyone what he's up to... A task that's a lot harder than it sounds!",
            runtime: "1 hr 37 mins",
            release_date: "May 22, 1985",
            wikipedia: "Brewster's_Millions_(1985_film)",
            trailer: "vCoGAZJQGmU",
            poster: "img/brewsters_millions.jpg",
            genre: ["Comedy"]
        },
        {
            title: "Bridge of Spies",
            id: 296098,
            overview: "During the Cold War, the Soviet Union captures U.S. pilot Francis Gary Powers after shooting down his U-2 spy plane. Sentenced to 10 years in prison, Powers' only hope is New York lawyer James Donovan, recruited by a CIA operative to negotiate his release. Donovan boards a plane to Berlin, hoping to win the young man's freedom through a prisoner exchange. If all goes well, the Russians would get Rudolf Abel, the convicted spy who Donovan defended in court.",
            runtime: "2 hrs 21 mins",
            release_date: "October 16, 2015",
            wikipedia: "Bridge_of_Spies_(film)",
            trailer: "owhBnicLZt4",
            poster: "img/bridge_of_spies.jpg",
            genre: ["Thriller", "Drama"]
        },
        {
            title: "Bugsy",
            id: 10337,
            overview: "New York gangster Ben 'Bugsy' Siegel takes a brief business trip to Los Angeles. A sharp-dressing womanizer with a foul temper, Siegel doesn't hesitate to kill or maim anyone crossing him. In L.A. the life, the movies, and most of all strong-willed Virginia Hill detain him while his family wait back home. Then a trip to a run-down gambling joint at a spot in the desert known as Las Vegas gives him his big idea.",
            runtime: "2 hrs 14 mins",
            release_date: "December 10, 1991",
            wikipedia: "Bugsy",
            trailer: "Bs296PVx01E",
            poster: "img/bugsy.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "Burn After Reading",
            id: 4944,
            overview: "A comedic tale of espionage, when an ousted CIA official's memoir accidentally falls into the hands of two unwise gym employees intent on exploiting their find.",
            runtime: "1 hr 36 mins",
            release_date: "September 05, 2008",
            wikipedia: "Burn_After_Reading",
            trailer: "SVCHSiRWjJM",
            poster: "img/burn_after_reading.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "Butch Cassidy and the Sundance Kid",
            id: 642,
            overview: "In late 1890s Wyoming, Butch Cassidy is the affable, clever and talkative leader of the outlaw Hole in the Wall Gang. His closest companion is the laconic dead-shot 'Sundance Kid'. As the west rapidly becomes civilized, the law finally catches up to Butch, Sundance and their gang. Chased doggedly by a special posse, the two decide to make their way to South America in hopes of evading their pursuers once and for all.",
            runtime: "1 hr 50 mins",
            release_date: "September 23, 1969",
            wikipedia: "Butch_Cassidy_and_the_Sundance_Kid",
            trailer: "501Afs54cso",
            poster: "img/butch_cassidy_and_the_sundance_kid.jpg",
            genre: ["History", "Drama", "Western", "Crime"]
        },
        {
            title: "Caligula",
            id: 9453,
            overview: "The perversion behind imperial Rome, the epic story of Rome's mad Emporer. All the details of his cruel, bizarre reign are revealed right here: His unholy sexual passion for his sister, his marriage to Rome's most infamous prostitute, his fiendishly inventive means of disposing those who would oppose him, and more.",
            runtime: "2 hrs 26 mins",
            release_date: "February 1, 1980",
            wikipedia: "Caligula_(film)",
            trailer: "eKsuOWcT12c",
            poster: "img/caligula.jpg",
            genre: ["Drama", "History", "Romance"]
        },
        {
            title: "Captain Marvel",
            id: 299537,
            overview: "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
            runtime: "2 hrs 4 mins",
            release_date: "March 8, 2019",
            wikipedia: "Captain_Marvel_(film)",
            trailer: "Z1BCujX3pw8",
            poster: "img/captain_marvel.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Carlito's Way",
            id: 6075,
            overview: "A Puerto-Rican ex-con, just released from prison, pledges to stay away from drugs and violence despite the pressure around him and lead on to a better life outside of NYC.",
            runtime: "2 hrs 24 mins",
            release_date: "November 10, 1993",
            wikipedia: "Carlito%27s_Way",
            trailer: "0yehgqPtG3Y",
            poster: "img/carlitos_way.jpg",
            genre: ["Action", "Crime", "Drama", "Thriller"]
        },
        {
            title: "Carnage",
            id: 72113,
            overview: "After 11-year-old Zachary Cowan strikes his classmate across the face with a stick after an argument, the victim's parents invite Zachary's parents to their Brooklyn apartment to deal with the incident in a civilized manner.",
            runtime: "1 hr 20 mins",
            release_date: "September 16, 2011",
            wikipedia: "Carnage_(2011_film)",
            trailer: "ZPX6-4Bo7XU",
            poster: "img/carnage.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "Casablanca",
            id: 289,
            overview: "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
            runtime: "1 hr 42 mins",
            release_date: "November 26, 1942",
            wikipedia: "Casablanca_(film)",
            trailer: "BkL9l7qovsE",
            poster: "img/casablanca.jpg",
            genre: ["Drama", "Romance"]
        },
        {
            title: "Casino",
            id: 524,
            overview: "The life of the gambling paradise – Las Vegas – and its dark mafia underbelly.",
            runtime: "2 hrs 58 mins",
            release_date: "November 22, 1995",
            wikipedia: "Casino_(film)",
            trailer: "EJXDMwGWhoA",
            poster: "img/casino.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "Catch Me If You Can",
            id: 640,
            overview: "A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.",
            runtime: "2 hrs 21 mins",
            release_date: "December 25, 2002",
            wikipedia: "Catch_Me_If_You_Can",
            trailer: "71rDQ7z4eFg",
            poster: "img/catch_me_if_you_can.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "Chronicle",
            id: 76726,
            overview: "Three high school students make an incredible discovery, leading to their developing uncanny powers beyond their understanding. As they learn to control their abilities and use them to their advantage, their lives start to spin out of control, and their darker sides begin to take over.",
            runtime: "1 hr 24 mins",
            release_date: "February 2, 2012",
            wikipedia: "Chronicle_(film)",
            trailer: "xUepHoDYpdI",
            poster: "img/chronicle.jpg",
            genre: ["Science Fiction", "Drama", "Thriller"]
        },
        {
            title: "Citizen Jane:<BR>Battle for the City",
            id: 411013,
            overview: "Writer and urban activist Jane Jacobs fights to save historic New York City during the ruthless redevelopment era of urban planner Robert Moses in the 1960s.",
            runtime: "1 hr 32 mins",
            release_date: "April 21, 2017",
            wikipedia: "Jane_Jacobs",
            trailer: "hKjkjntspfA",
            poster: "img/citizen_jane_battle_for_the_city.jpg",
            genre: ["Documentary"]
        },
        {
            title: "Citizen Kane",
            id: 15,
            overview: "Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.",
            runtime: "1 hr 59 mins",
            release_date: "September 5, 1941",
            wikipedia: "Citizen_Kane",
            trailer: "8dxh3lwdOFw",
            poster: "img/citizen_kane.jpg",
            genre: ["Mystery", "Drama"]
        },
        {
            title: "City of Angels",
            id: 795,
            overview: "When guardian angel Seth -- who invisibly watches over the citizens of Los Angeles -- becomes captivated by Maggie, a strong-willed heart surgeon, he ponders trading in his pure, otherworldly existence for a mortal life with his beloved. The couple embarks on a tender but forbidden romance spanning heaven and Earth.",
            runtime: "1 hr 54 mins",
            release_date: "April 10, 1998",
            wikipedia: "City_of_Angels_(film)",
            trailer: "mwWL8cB2Ix8",
            poster: "img/city_of_angels.jpg",
            genre: ["Drama", "Fantasy", "Romance"]
        },
        {
            title: "Clockers",
            id: 20649,
            overview: "Strike is a young city drug pusher under the tutelage of drug lord Rodney Little. When a night manager at a fast-food restaurant is found with four bullets in his body, Strike’s older brother turns himself in as the killer. Det. Rocco Klein doesn’t buy the story, however, setting out to find the truth, and it seems that all the fingers point toward Strike & Rodney.",
            runtime: "2 hrs 8 mins",
            release_date: "September 15, 1995",
            wikipedia: "Clockers_(film)",
            trailer: "YsFUoioGePc",
            poster: "img/clockers.jpg",
            genre: ["Mystery", "Crime", "Drama"]
        },
        {
            title: "Close Encounters of the Third Kind",
            id: 840,
            overview: "After an encounter with UFOs, a line worker feels undeniably drawn to an isolated area in the wilderness where something spectacular is about to happen.",
            runtime: "2 hrs 15 mins",
            release_date: "November 16, 1977",
            wikipedia: "Close_Encounters_of_the_Third_Kind",
            trailer: "Fxp32VHaYdE",
            poster: "img/close_encounters_of_the_third_kind.jpg",
            genre: ["Science Fiction", "Drama"]
        },
        {
            title: "Cloud Atlas",
            id: 83542,
            overview: "A set of six nested stories spanning time between the 19th century and a distant post-apocalyptic future. Cloud Atlas explores how the actions and consequences of individual lives impact one another throughout the past, the present and the future. Action, mystery and romance weave through the story as one soul is shaped from a killer into a hero and a single act of kindness ripples across centuries to inspire a revolution in the distant future. Based on the award winning novel by David Mitchell. Directed by Tom Tykwer and the Wachowskis.",
            runtime: "2 hrs 52 mins",
            release_date: "October 26, 2012",
            wikipedia: "Cloud_Atlas_(film)",
            trailer: "ByehYal_cCs",
            poster: "img/cloud_atlas.jpg",
            genre: ["Drama", "Science Fiction"]
        },
        {
            title: "Cloverfield",
            id: 7191,
            overview: "Five young New Yorkers throw their friend a going-away party the night that a monster the size of a skyscraper descends upon the city. Told from the point of view of their video camera, the film is a document of their attempt to survive the most surreal, horrifying event of their lives.",
            runtime: "1 hr 25 mins",
            release_date: "January 15, 2008",
            wikipedia: "Cloverfield",
            trailer: "IvNkGm8mxiM",
            poster: "img/cloverfield.jpg",
            genre: ["Action", "Thriller", "Science Fiction"]
        },
        {
            title: "Collateral",
            id: 1538,
            overview: "Cab driver Max picks up a man who offers him $600 to drive him around. But the promise of easy money sours when Max realizes his fare is an assassin.",
            runtime: "2 hrs 0 mins",
            release_date: "August 4, 2004",
            wikipedia: "Collateral_(film)",
            trailer: "-JDf2zIFgO8",
            poster: "img/collateral.jpg",
            genre: ["Drama", "Crime", "Thriller"]
        },
        {
            title: "Contact",
            id: 686,
            overview: "Contact is a science fiction film about an encounter with alien intelligence. Based on the novel by Carl Sagan the film starred Jodie Foster as the one chosen scientist who must make some difficult decisions between her beliefs, the truth, and reality.",
            runtime: "2 hrs 30 mins",
            release_date: "July 11, 1997",
            wikipedia: "Contact_(1997_American_film)",
            trailer: "SRoj3jK37Vc",
            poster: "img/contact.jpg",
            genre: ["Drama", "Science Fiction", "Mystery"]
        },
        {
            title: "Cruel Intentions",
            id: 796,
            overview: "Slaking a thirst for dangerous games, Kathryn challenges her stepbrother, Sebastian, to deflower their headmaster's daughter before the summer ends. If he succeeds, the prize is the chance to bed Kathryn. But if he loses, Kathryn will claim his most prized possession.",
            runtime: "1 hr 37 mins",
            release_date: "March 05, 1999",
            wikipedia: "Cruel_Intentions",
            trailer: "SCFR2vpMIQU",
            poster: "img/cruel_intentions.jpg",
            genre: ["Drama", "Romance"]
        },
        {
            title: "Curb Your Enthusiasm",
            id: 4546,
            overview: "The off-kilter, unscripted comic vision of Larry David, who plays himself in a parallel universe in which he can't seem to do anything right, and, by his standards, neither can anyone else.",
            runtime: "30 mins",
            release_date: "October 15, 2000",
            wikipedia: "Curb_Your_Enthusiasm",
            trailer: "cOHqgEv1J04",
            poster: "img/curb_your_enthusiasm.jpg",
            genre: ["Comedy"]
        },
        {
            title: "Deadpool",
            id: 293660,
            overview: "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
            runtime: "1 hr 48 mins",
            release_date: "February 12, 2016",
            wikipedia: "Deadpool_(film)",
            trailer: "ONHBaC-pfsk",
            poster: "img/deadpool.jpg",
            genre: ["Action", "Adventure", "Comedy"]
        },
        {
            title: "Deadpool 2",
            id: 383498,
            overview: "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
            runtime: "2 hrs 0 mins",
            release_date: "May 10, 2018",
            wikipedia: "Deadpool_2",
            trailer: "D86RtevtfrA",
            poster: "img/deadpool_2.jpg",
            genre: ["Action", "Adventure", "Comedy"]
        },
        {
            title: "Death on the Nile",
            id: 505026,
            overview: "Belgian sleuth Hercule Poirot boards a glamorous river steamer with enough champagne to fill the Nile. But his Egyptian vacation turns into a thrilling search for a murderer when a picture-perfect couple’s idyllic honeymoon is tragically cut short.",
            runtime: "2 hrs 7 mins",
            release_date: "February 11, 2022",
            wikipedia: "Death_on_the_Nile_(2022_film)",
            trailer: "dZRqB0JLizw",
            poster: "img/death_on_the_nile.jpg",
            genre: ["Crime", "Drama", "Mystery", "Thriller"]
        },
        {
            title: "Death Proof",
            id: 1991,
            overview: "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
            runtime: "1 hr 53 mins",
            release_date: "May 21, 2007",
            wikipedia: "Death_Proof",
            trailer: "7mICGcg5-pM",
            poster: "img/death_proof.jpg",
            genre: ["Action", "Thriller"]
        },
        {
            title: "Death Row Chronicles",
            id: 77426,
            overview: "Death Row Chronicles is the story of the world's most dangerous record label could only be told in a definitive 6-part documentary series. While Death Row Records boasted the success of Snoop Dogg, 2Pac, and Dr. Dre forged by unmatched creativity, the chart-topping and record-breaking sales came at a bloody, controversial cost. Part true-crime murder mystery and part hip hop drama, this compelling docu-series will comb through mountains of misinformation, uncovering key evidence and witnesses who will reveal the truth about the bitter rivalries surrounding its legends. The limited series will also celebrate the groundbreaking music of Death Row, explain how it reflected society at the time, and how it influenced some of today's biggest hip hop artists. On the eve of the label's 25th anniversary, Death Row Chronicles offers an unflinching look at the label and its legacy.",
            runtime: "",
            release_date: "February 20, 2018",
            wikipedia: "Death_Row_Records",
            trailer: "r8cxohL93ok",
            poster: "img/death_row_chronicles.jpg",
            genre: ["Documentary", "Drama"]
        },
        {
            title: "Dick Tracy",
            id: 8592,
            overview: "The comic strip detective finds his life vastly complicated when Breathless Mahoney makes advances towards him while he is trying to battle Big Boy Caprice's united mob,",
            runtime: "1 hr 43 mins",
            release_date: "June 15, 1990",
            wikipedia: "Dick_Tracy_(1990_film)",
            trailer: "-4rzqSsqaqA",
            poster: "img/dick_tracy.jpg",
            genre: ["Adventure", "Action", "Comedy", "Thriller", "Crime"]
        },
        {
            title: "Die Hard",
            id: 1570,
            overview: "NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
            runtime: "2 hrs 11 mins",
            release_date: "July 15, 1988",
            wikipedia: "Die_Hard",
            trailer: "QIOX44m8ktc",
            poster: "img/die_hard.jpg",
            genre: ["Action", "Thriller"]
        },
        {
            title: "Die Hard 2",
            id: 1573,
            overview: "Off-duty cop John McClane is gripped with a feeling of déjà vu when, on a snowy Christmas Eve in the nation’s capital, terrorists seize a major international airport, holding thousands of holiday travelers hostage. Renegade military commandos led by a murderous rogue officer plot to rescue a drug lord from justice and are prepared for every contingency except one: McClane’s smart-mouthed heroics.",
            runtime: "2 hrs 4 mins",
            release_date: "July 2, 1990",
            wikipedia: "Die_Hard_2",
            trailer: "OyxfXQ4MGLQ",
            poster: "img/die_hard_2.jpg",
            genre: ["Action", "Thriller"]
        },
        {
            title: "Die Hard: With a Vengeance",
            id: 1572,
            overview: "New York detective John McClane is back and kicking bad-guy butt in the third installment of this action-packed series, which finds him teaming with civilian Zeus Carver to prevent the loss of innocent lives. McClane thought he'd seen it all, until a genius named Simon engages McClane, his new \"partner\" -- and his beloved city -- in a deadly game that demands their concentration.",
            runtime: "2 hrs 8 mins",
            release_date: "May 19, 1995",
            wikipedia: "Die_Hard_with_a_Vengeance",
            trailer: "rVeAlyuejKM",
            poster: "img/die_hard_with_a_vengeance.jpg",
            genre: ["Action", "Thriller"]
        },
        {
            title: "Dirty Dancing",
            id: 88,
            overview: "Expecting the usual tedium that accompanies a summer in the Catskills with her family, 17-year-old Frances 'Baby' Houseman is surprised to find herself stepping into the shoes of a professional hoofer – and unexpectedly falling in love.",
            runtime: "1 hr 40 mins",
            release_date: "August 21, 1987",
            wikipedia: "Dirty_Dancing",
            trailer: "eIcmQNy9FsM",
            poster: "img/dirty_dancing.jpg",
            genre: ["Drama", "Music", "Romance"]
        },
        {
            title: "District 9",
            id: 17654,
            overview: "Aliens land in South Africa and, with their ship totally disabled, have no way home. Years later, after living in a slum and wearing out their welcome the 'Non-Humans' are being moved to a new tent city overseen by Multi-National United (MNU).",
            runtime: "1 hr 52 mins",
            release_date: "August 05, 2009",
            wikipedia: "District_9",
            trailer: "DyLUwOcR5pk",
            poster: "img/district_9.jpg",
            genre: ["Action", "Thriller", "Science Fiction"]
        },
        {
            title: "Django Unchained",
            id: 68718,
            overview: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
            runtime: "2 hrs 45 mins",
            release_date: "December 25, 2012",
            wikipedia: "Django_Unchained",
            trailer: "_iH0UBYDI4g",
            poster: "img/django_unchained.jpg",
            genre: ["Drama", "Western"]
        },
        {
            title: "Dogma",
            id: 1832,
            overview: "The latest battle in the eternal war between Good and Evil has come to New Jersey in the late, late 20th Century. Angels, demons, apostles and prophets (of a sort) walk among the cynics and innocents of America and duke it out for the fate of humankind.",
            runtime: "2 hrs 10 mins",
            release_date: "November 12, 1999",
            wikipedia: "Dogma_(film)",
            trailer: "20CRw3XdETA",
            poster: "img/dogma.jpg",
            genre: ["Fantasy", "Comedy", "Adventure"]
        },
        {
            title: "Donnie Darko",
            id: 141,
            overview: "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.",
            runtime: "1 hr 53 mins",
            release_date: "January 18, 2001",
            wikipedia: "Donnie_Darko",
            trailer: "vijy4Oiawa8",
            poster: "img/donnie_darko.jpg",
            genre: ["Fantasy", "Drama", "Mystery"]
        },
        {
            title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
            id: 935,
            overview: 'Insane General Jack D. Ripper initiates a nuclear strike on the Soviet Union. As soon as the actions of General "Buck" Turgidson are discovered, a war room full of politicians, generals and a Russian diplomat all frantically try to stop the nuclear strike. Near the end is a scene that is probably the most uniquely unforgettable performance of Slim Pickens in his movie career. Peter Sellers plays multiple roles in this film.',
            runtime: "1 hr 35 mins",
            release_date: "January 29, 1964",
            wikipedia: "Dr._Strangelove",
            trailer: "71I4bdA7lDA",
            poster: "img/dr_strangelove.jpg",
            genre: ["Drama", "Comedy", "War"]
        },
        {
            title: "Duck Soup",
            id: 3063,
            overview: 'Rufus T. Firefly is named president/dictator of bankrupt Freedonia and declares war on neighboring Sylvania over the love of wealthy Mrs. Teasdale.',
            runtime: "1 hr 8 mins",
            release_date: "November 17, 1933",
            wikipedia: "Duck_Soup_(1933_film)",
            trailer: "9CEdb0sGfaI",
            poster: "img/duck_soup.jpg",
            genre: ["War", "Comedy", "Music"]
        },
        {
            title: "Dune",
            id: 438631,
            overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
            runtime: "2 hrs 35 mins",
            release_date: "October 22, 2021",
            wikipedia: "Dune_(2021_film)",
            trailer: "8g18jFHCLXk",
            poster: "img/dune.jpg",
            genre: ["Science Fiction", "Adventure"]
        },
        {
            title: "Dune: Part 2",
            id: 693134,
            overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
            runtime: "2 hrs 47 mins",
            release_date: "March 1, 2024",
            wikipedia: "Dune:_Part_Two",
            trailer: "Way9Dexny3w",
            poster: "img/dune_2.jpg",
            genre: ["Science Fiction", "Adventure"]
        },
        {
            title: "Dunkirk",
            id: 374720,
            overview: 'The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.',
            runtime: "1 hr 47 mins",
            release_date: "July 19, 2017",
            wikipedia: "Dunkirk_(2017_film)",
            trailer: "F-eMt3SrfFU",
            poster: "img/dunkirk.jpg",
            genre: ["Action", "Drama", "History", "Thriller", "War"]
        },
        {
            title: "E.T. the Extra-Terrestrial",
            id: 601,
            overview: "A science fiction fairytale about an extra-terrestrial who is left behind on Earth and is found by a young boy who befriends him. This heart-warming fantasy from Director Steven Spielberg became one of the most commercially successful films of all time.",
            runtime: "1 hr 55 mins",
            release_date: "April 03, 1982",
            wikipedia: "E.T._the_Extra-Terrestrial",
            trailer: "taMnCjzKgd8",
            poster: "img/et.jpg",
            genre: ["Science Fiction", "Adventure", "Family", "Fantasy"]
        },
        {
            title: "Edge of Tomorrow",
            id: 137113,
            overview: "Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
            runtime: "1 hr 53 mins",
            release_date: "May 27, 2014",
            wikipedia: "Edge_of_Tomorrow",
            trailer: "yUmSVcttXnI",
            poster: "img/edge_of_tomorrow.jpg",
            genre: ["Action", "Science Fiction"]
        },
        {
            title: "End of Watch",
            id: 77016,
            overview: "Two young officers are marked for death after confiscating a small cache of money and firearms from the members of a notorious cartel during a routine traffic stop.",
            runtime: "1 hr 49 mins",
            release_date: "September 20, 2012",
            wikipedia: "End_of_Watch",
            trailer: "9mQYxib26FM",
            poster: "img/end_of_watch.jpg",
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            title: "Eternal Sunshine of the Spotless Mind",
            id: 38,
            overview: "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
            runtime: "1 hr 48 mins",
            release_date: "March 19, 2004",
            wikipedia: "Eternal_Sunshine_of_the_Spotless_Mind",
            trailer: "07-QBnEkgXU",
            poster: "img/eternal_sunshine_of_the_spotless_mind.jpg",
            genre: ["Science Fiction", "Drama", "Romance"]
        },
        {
            title: "Everything Everywhere All At Once",
            id: 545611,
            overview: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
            runtime: "2 hrs 20 mins",
            release_date: "April 8, 2022",
            wikipedia: "Everything_Everywhere_All_at_Once",
            trailer: "wxN1T1uxQ2g",
            poster: "img/everything_everywhere_all_at_once.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Fahrenheit 9/11",
            id: 1777,
            overview: "Michael Moore's view on what happened to the United States after September 11; and how the Bush Administration allegedly used the tragic event to push forward its agenda for unjust wars in Afghanistan and Iraq.",
            runtime: "2 hrs 2 mins",
            release_date: "June 25, 2004",
            wikipedia: "Fahrenheit_9/11",
            trailer: "lQm4efsmVGA",
            poster: "img/fahrenheit_911.jpg",
            genre: ["Documentary"]
        },
        {
            title: "Fantastic Beasts and Where to Find Them",
            id: 259316,
            overview: "In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
            runtime: "2 hrs 13 mins",
            release_date: "November 16, 2016",
            wikipedia: "Fantastic_Beasts_and_Where_to_Find_Them_(film)",
            trailer: "YdgQj7xcDJo",
            poster: "img/fantastic_beasts_and_where_to_find_them.jpg",
            genre: ["Fantasy"]
        },
        {
            title: "Fantastic Beasts: The Crimes of Grindelwald",
            id: 435259,
            overview: "Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
            runtime: "2 hrs 14 mins",
            release_date: "November 14, 2018",
            wikipedia: "Fantastic_Beasts:_The_Crimes_of_Grindelwald",
            trailer: "vvFybpmyB9E",
            poster: "img/fantastic_beasts_the_crimes_of_grindelwald.jpg",
            genre: ["Family", "Fantasy", "Adventure"]
        },
        {
            title: "Fargo",
            id: 275,
            overview: "Jerry, a small-town Minnesota car salesman is bursting at the seams with debt... but he's got a plan. He's going to hire two thugs to kidnap his wife in a scheme to collect a hefty ransom from his wealthy father-in-law. It's going to be a snap and nobody's going to get hurt... until people start dying. Enter Police Chief Marge, a coffee-drinking, parka-wearing - and extremely pregnant - investigator who'll stop at nothing to get her man. And if you think her small-time investigative skills will give the crooks a run for their ransom... you betcha!",
            runtime: "1 hr 38 mins",
            release_date: "April 5, 1996",
            wikipedia: "Fargo_(film)",
            trailer: "h2tY82z3xXU",
            poster: "img/fargo.jpg",
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            title: "Fear and Loathing in Las Vegas",
            id: 1878,
            overview: "Raoul Duke and his attorney Dr. Gonzo drive a red convertible across the Mojave desert to Las Vegas with a suitcase full of drugs to cover a motorcycle race. As their consumption of drugs increases at an alarming rate, the stoned duo trash their hotel room and fear legal repercussions. Duke begins to drive back to L.A., but after an odd run-in with a cop, he returns to Sin City and continues his wild drug binge.",
            runtime: "1 hr 58 mins",
            release_date: "May 22, 1998",
            wikipedia: "Fear_and_Loathing_in_Las_Vegas_(film)",
            trailer: "Rx-EsbhLZLQ",
            poster: "img/fear_and_loathing_in_las_vegas.jpg",
            genre: ["Adventure", "Drama", "Comedy"]
        },
        {
            title: "Fed Up",
            id: 250657,
            overview: "Fed Up blows the lid off everything we thought we knew about food and weight loss, revealing a 30-year campaign by the food industry, aided by the U.S. government, to mislead and confuse the American public, resulting in one of the largest health epidemics in history.",
            runtime: "1 hr 32 mins",
            release_date: "May 09, 2014",
            wikipedia: "Fed_Up_(film)",
            trailer: "aCUbvOwwfWM",
            poster: "img/fed_up.jpg",
            genre: ["Documentary"]
        },
        {
            title: "Ferris Bueller's Day Off",
            id: 9377,
            overview: "After high school slacker Ferris Bueller successfully fakes an illness in order to skip school for the day, he goes on a series of adventures throughout Chicago with his girlfriend Sloane and best friend Cameron, all the while trying to outwit his wily school principal and fed-up sister.",
            runtime: "1 hr 43 mins",
            release_date: "June 11, 1986",
            wikipedia: "Ferris_Bueller%27s_Day_Off",
            trailer: "0ZDbKhkLxTs",
            poster: "img/ferris_buellers_day_off.jpg",
            genre: ["Comedy"]
        },
        {
            title: "Fight Club",
            id: 550,
            overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
            runtime: "2 hrs 19 mins",
            release_date: "October 15, 1999",
            wikipedia: "Fight_Club",
            trailer: "D3Yw9Yc1YmY",
            poster: "img/fight_club.jpg",
            genre: ["Drama"]
        },
        {
            title: "Ford v Ferrari",
            id: 359724,
            overview: "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
            runtime: "2 hrs 32 mins",
            release_date: "November 13, 2019",
            wikipedia: "Ford_v_Ferrari",
            trailer: "zyYgDtY2AMY",
            poster: "img/ford_v_ferrari.jpg",
            genre: ["Drama", "Action"]
        },
        {
            title: "Four Rooms",
            id: 5,
            overview: "Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who's in for the wildest New year's Eve of his life.",
            runtime: "1 hr 38 mins",
            release_date: "December 25, 1995",
            wikipedia: "Four_Rooms",
            trailer: "0hu12MP7b1U",
            poster: "img/four_rooms.jpg",
            genre: ["Crime", "Comedy"]
        },
        {
            title: "Free Solo",
            id: 515042,
            overview: "Follow Alex Honnold as he attempts to become the first person to ever free solo climb Yosemite's 3,000 foot high El Capitan wall. With no ropes or safety gear, this would arguably be the greatest feat in rock climbing history.",
            runtime: "1 hr 36 mins",
            release_date: "October 12, 2018",
            wikipedia: "Free_Solo",
            trailer: "urRVZ4SW7WU",
            poster: "img/free_solo.jpg",
            genre: ["Documentary"]
        },
        {
            title: "Friday",
            id: 10634,
            overview: "Craig and Smokey are two guys in Los Angeles hanging out on their porch on a Friday afternoon, smoking and drinking, looking for something to do.",
            runtime: "1 hr 31 mins",
            release_date: "April 26, 1995",
            wikipedia: "Friday_(1995_film)",
            trailer: "umvFBoLOOgo",
            poster: "img/friday.jpg",
            genre: ["Comedy"]
        },
        {
            title: "Fun With Dick and Jane",
            id: 7552,
            overview: "After Dick Harper loses his job at Globodyne in an Enron-esque collapse, he and his wife, Jane, turn to crime in order to handle the massive debt they now face. Two intelligent people, Dick and Jane actually get pretty good at robbing people and even enjoy it -- but they have second thoughts when they're reminded that crime can hurt innocent people. When the couple hears that Globodyne boss Jack McCallister actually swindled the company, they plot revenge.",
            runtime: "1 hr 30 mins",
            release_date: "December 21, 2005",
            wikipedia: "Fun_with_Dick_and_Jane_(2005_film)",
            trailer: "ldbkr2eN6qk",
            poster: "img/fun_with_dick_and_jane.jpg",
            genre: ["Comedy"]
        },
        {
            title: "Gangs of New York",
            id: 3131,
            overview: "It's 1863. America was born in the streets. Amsterdam Vallon returns to the Five Points of America to seek vengeance against the psychotic gangland kingpin, Bill the Butcher, who murdered his father years earlier. With an eager pickpocket by his side and a whole new army, Vallon fights his way to seek vengeance on the Butcher and restore peace in the area.",
            runtime: "2 hrs 47 mins",
            release_date: "December 14, 2002",
            wikipedia: "Gangs_of_New_York",
            trailer: "x5YmI2PW9R8",
            poster: "img/gangs_of_new_york.jpg",
            genre: ["Drama", "History", "Crime"]
        },
        {
            title: "Generation Iron",
            id: 207021,
            overview: "Generation Iron - examines the professional sport of bodybuilding today and gives the audience front row access to the lives of the top 7 bodybuilders in the sport as they train to compete in the world's most premiere bodybuilding stage - Mr. Olympia.",
            runtime: "1 hr 46 mins",
            release_date: "September 20, 2013",
            wikipedia: "Generation_Iron",
            trailer: "up304E9dKbQ",
            poster: "img/generation_iron.jpg",
            genre: ["Documentary"]
        },
        {
            title: "Ghost in the Shell",
            id: 315837,
            overview: "In the near future, Major is the first of her kind: a human saved from a terrible crash, then cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
            runtime: "1 hr 47 mins",
            release_date: "March 29, 2017",
            wikipedia: "Ghost_in_the_Shell_(2017_film)",
            trailer: "G4VmJcZR0Yg",
            poster: "img/ghost_in_the_shell.jpg",
            genre: ["Action", "Crime", "Drama", "Mystery", "Science Fiction", "Thriller"]
        },
        {
            title: "Ghostbusters",
            id: 620,
            overview: 'After losing their academic posts at a prestigious university, a team of parapsychologists goes into business as proton-pack-toting "ghostbusters" who exterminate ghouls, hobgoblins and supernatural pests of all stripes. An ad campaign pays off when a knockout cellist hires the squad to purge her swanky digs of demons that appear to be living in her refrigerator.',
            runtime: "1 hr 47 mins",
            release_date: "June 8, 1984",
            wikipedia: "Ghostbusters",
            trailer: "wQAljlSmjC8",
            poster: "img/ghostbusters.jpg",
            genre: ["Comedy", "Fantasy"]
        },
        {
            title: "Ghostbusters II",
            id: 2978,
            overview: "Five years after they defeated Gozer, the Ghostbusters are out of business. When Dana begins to have ghost problems again, the boys come out of retirement to aid her and hopefully save New York City from a new paranormal threat.",
            runtime: "1 hr 48 mins",
            release_date: "June 16, 1989",
            wikipedia: "Ghostbusters_II",
            trailer: "weIqC-oUGmA",
            poster: "img/ghostbusters_II.jpg",
            genre: ["Comedy", "Fantasy"]
        },
        {
            title: "Giant",
            id: 1712,
            overview: "Sprawling epic covering the life of a Texas cattle rancher and his family and associates.",
            runtime: "3 hrs 21 mins",
            release_date: "October 10, 1956",
            wikipedia: "Giant_(1956_film)",
            trailer: "elMP6PqGBo0",
            poster: "img/giant.jpg",
            genre: ["Action", "Drama", "Western"]
        },
        {
            title: "Gladiator",
            id: 98,
            overview: "In the year 180, the death of Emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals, as well as a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is sentenced to execution. He escapes but is captured by slave traders. Renamed \"Spaniard\" and forced to become a gladiator, Maximus must battle to the death against other men for the amusement of paying audiences.",
            runtime: "2 hr 50 mins",
            release_date: "May 5, 2000",
            wikipedia: "Gladiator_(2000_film)",
            trailer: "TcYIqlBihW4",
            poster: "img/gladiator.jpg",
            genre: ["Action", "Drama", "Adventure"]
        },
        {
            title: "Going Clear: Scientology And The Prison Of Belief",
            id: 318224,
            overview: "GOING CLEAR intimately profiles eight former members of the Church of Scientology, shining a light on how they attract true believers and the things they do in the name of religion.",
            runtime: "1 hr 59 mins",
            release_date: "January 25, 2015",
            wikipedia: "Going_Clear_(film)",
            trailer: "ixgd38EZIR0",
            poster: "img/going_clear_scientology_and_the_prison_of_belief.jpg",
            genre: ["Documentary"]
        },
        {
            title: "Gone Girl",
            id: 210577,
            overview: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
            runtime: "2 hrs 25 mins",
            release_date: "October 01, 2014",
            wikipedia: "Gone_Girl_(film)",
            trailer: "2-_-1nJf8Vg",
            poster: "img/gone_girl.jpg",
            genre: ["Mystery", "Thriller", "Drama"]
        },
        {
            title: "Good Will Hunting",
            id: 489,
            overview: "Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.",
            runtime: "2 hrs 6 mins",
            release_date: "December 5, 1997",
            wikipedia: "Good_Will_Hunting",
            trailer: "PaZVjZEFkRs",
            poster: "img/good_will_hunting.jpg",
            genre: ["Drama"]
        },
        {
            title: "Goodfellas",
            id: 769,
            overview: "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
            runtime: "2 hrs 25 mins",
            release_date: "September 12, 1990",
            wikipedia: "Goodfellas",
            trailer: "2ilzidi_J8Q",
            poster: "img/goodfellas.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "Gotti",
            id: 14786,
            overview: "John Gotti, the head of a small New York mafia crew breaks a few of the old family rules. He rises to become the head of the Gambino family and the most well-known mafia boss in America. Life is good, but suspicion creeps in, and greed, rule-breaking and his high public profile all threaten to topple him.",
            runtime: "1 hrs 56 mins",
            release_date: "August 17, 1996",
            wikipedia: "Gotti_(1996_film)",
            trailer: "XfvA6g7vWI0",
            poster: "img/gotti.jpg",
            genre: ["TV Movie", "Drama", "Crime"]
        },
        {
            title: "Grosse Pointe Blank",
            id: 9434,
            overview: "Martin Blank is a freelance hitman who starts to develop a conscience, which causes him to muff a couple of routine assignments. On the advice of his secretary and his psychiatrist, he attends his 10th year High School reunion in Grosse Pointe, Michigan.",
            runtime: "1 hr 47 mins",
            release_date: "April 11, 1997",
            wikipedia: "Grosse_Pointe_Blank",
            trailer: "iF7t91gbSf8",
            poster: "img/grosse_pointe_blank.jpg",
            genre: ["Action", "Comedy", "Thriller", "Romance"]
        },
        {
            title: "Groundhog Day",
            id: 137,
            overview: "A narcissistic TV weatherman, along with his attractive-but-distant producer and mawkish cameraman, is sent to report on Groundhog Day in the small town of Punxsutawney, where he finds himself repeating the same day over and over.",
            runtime: "1 hr 41 mins",
            release_date: "February 11, 1993",
            wikipedia: "Groundhog_Day_(film)",
            trailer: "tSVeDx9fk60",
            poster: "img/groundhog_day.jpg",
            genre: ["Romance", "Fantasy", "Drama", "Comedy"]
        },
        {
            title: "Half Baked",
            id: 9490,
            overview: "Three lovable party buds try to bail their friend out of jail. But just when the guys have mastered a plan, everything comes dangerously close to going up in smoke.",
            runtime: "1 hr 22 mins",
            release_date: "January 16, 1998",
            wikipedia: "Half_Baked",
            trailer: "HMhUnO2u6qI",
            poster: "img/half_baked.jpg",
            genre: ["Comedy", "Crime"]
        },
        {
            title: "Hannibal",
            id: 9740,
            overview: "After having successfully eluded the authorities for years, Hannibal peacefully lives in Italy in disguise as an art scholar. Trouble strikes again when he's discovered leaving a deserving few dead in the process. He returns to America to make contact with now disgraced Agent Clarice Starling, who is suffering the wrath of a malicious FBI rival as well as the media.",
            runtime: "2 hrs 11 mins",
            release_date: "February 8, 2001",
            wikipedia: "Hannibal_(2001_film)",
            trailer: "Lr3OavheNu0",
            poster: "img/hannibal.jpg",
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            id: 671,
            overview: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
            runtime: "2 hrs 32 mins",
            release_date: "November 16, 2001",
            wikipedia: "Harry_Potter_and_the_Philosopher%27s_Stone_(film)",
            trailer: "PbdM1db3JbY",
            poster: "img/hp_sorcerers_stone.jpg",
            genre: ["Adventure", "Fantasy", "Family"]
        },
        {
            title: "Harry Potter and the Chamber of Secrets",
            id: 672,
            overview: "Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.",
            runtime: "2 hrs 41 mins",
            release_date: "November 13, 2002",
            wikipedia: "Harry_Potter_and_the_Chamber_of_Secrets_(film)",
            trailer: "jBltxS8HfQ4",
            poster: "img/hp_chamber_of_secrets.jpg",
            genre: ["Adventure", "Fantasy", "Family"]
        },
        {
            title: "Harry Potter and the Prisoner of Azkaban",
            id: 673,
            overview: "Harry, Ron and Hermione return to Hogwarts for another magic-filled year. Harry comes face to face with danger yet again, this time in the form of escaped convict, Sirius Black – and turns to sympathetic Professor Lupin for help.",
            runtime: "2 hrs 21 mins",
            release_date: "May 31, 2004",
            wikipedia: "Harry_Potter_and_the_Prisoner_of_Azkaban_(film)",
            trailer: "R69laoH02xg",
            poster: "img/hp_prisoner_of_azkaban.jpg",
            genre: ["Adventure", "Fantasy", "Family"]
        },
        {
            title: "Harry Potter and the Goblet of Fire",
            id: 674,
            overview: "Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.",
            runtime: "2 hrs 37 mins",
            release_date: "November 05, 2005",
            wikipedia: "Harry_Potter_and_the_Goblet_of_Fire_(film)",
            trailer: "PFWAOnvMd1Q",
            poster: "img/hp_goblet_of_fire.jpg",
            genre: ["Adventure", "Fantasy", "Family"]
        },
        {
            title: "Harry Potter and the Order of the Phoenix",
            id: 675,
            overview: "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students – dubbed 'Dumbledore's Army' – to defend themselves against the dark arts.",
            runtime: "2 hrs 18 mins",
            release_date: "June 28, 2007",
            wikipedia: "Harry_Potter_and_the_Order_of_the_Phoenix_(film)",
            trailer: "WIj9DYJ5EKk",
            poster: "img/hp_order_of_the_phoenix.jpg",
            genre: ["Adventure", "Fantasy", "Family", "Mystery"]
        },
        {
            title: "Harry Potter and the Half-Blood Prince",
            id: 767,
            overview: "As Harry begins his sixth year at Hogwarts, he discovers an old book marked as 'Property of the Half-Blood Prince', and begins to learn more about Lord Voldemort's dark past.",
            runtime: "2 hrs 33 mins",
            release_date: "July 07, 2009",
            wikipedia: "Harry_Potter_and_the_Half-Blood_Prince_(film)",
            trailer: "tAiy66Xrsz4",
            poster: "img/hp_half-blood_prince.jpg",
            genre: ["Adventure", "Fantasy", "Family"]
        },
        {
            title: "Harry Potter and the Deathly Hallows: Part 1",
            id: 12444,
            overview: "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
            runtime: "2 hrs 26 mins",
            release_date: "October 17, 2010",
            wikipedia: "Harry_Potter_and_the_Deathly_Hallows_–_Part_1",
            trailer: "MxqsmsA8y5k",
            poster: "img/hp_deathly_hallows_1.jpg",
            genre: ["Adventure", "Fantasy", "Family"]
        },
        {
            title: "Harry Potter and the Deathly Hallows: Part 2",
            id: 12445,
            overview: "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
            runtime: "2 hrs 10 mins",
            release_date: "July 07, 2011",
            wikipedia: "Harry_Potter_and_the_Deathly_Hallows_–_Part_2",
            trailer: "mObK5XD8udk",
            poster: "img/hp_deathly_hallows_2.jpg",
            genre: ["Adventure", "Fantasy"]
        },
        {
            title: "He Got Game",
            id: 9469,
            overview: "A basketball player's father must try to convince him to go to a college so he can get a shorter sentence.",
            runtime: "2 hrs 16 mins",
            release_date: "May 01, 1998",
            wikipedia: "He_Got_Game",
            trailer: "njLUPZr4DeU",
            poster: "img/he_got_game.jpg",
            genre: ["Drama"]
        },
        {
            title: "Heat",
            id: 949,
            overview: "Obsessive master thief, Neil McCauley leads a top-notch crew on various daring heists throughout Los Angeles while determined detective, Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication of the other even though they are aware their cat-and-mouse game may end in violence.",
            runtime: "2 hrs 50 mins",
            release_date: "December 15, 1995",
            wikipedia: "Heat_(1995_film)",
            trailer: "2GfZl4kuVNI",
            poster: "img/heat.jpg",
            genre: ["Action", "Crime", "Drama", "Thriller"]
        },
        {
            title: "Hero",
            id: 79,
            overview: "One man defeated three assassins who sought to murder the most powerful warlord in pre-unified China.",
            runtime: "1 hr 39 mins",
            release_date: "December 19, 2002",
            wikipedia: "Hero_(2002_film)",
            trailer: "_USDk5jaGek",
            poster: "img/hero.jpg",
            genre: ["Drama", "Adventure", "Action", "History"]
        },
        {
            title: "Home Alone",
            id: 771,
            overview: "Eight-year-old Kevin McCallister makes the most of the situation after his family unwittingly leaves him behind when they go on Christmas vacation. But when a pair of bungling burglars set their sights on Kevin's house, the plucky kid stands ready to defend his territory. By planting booby traps galore, adorably mischievous Kevin stands his ground as his frantic mother attempts to race home before.",
            runtime: "1 hr 43 mins",
            release_date: "November 09, 1990",
            wikipedia: "Home_Alone",
            trailer: "owU3lMxd6jI",
            poster: "img/home_alone.jpg",
            genre: ["Comedy", "Family"]
        },
        {
            title: "Home Alone 2: Lost in New York",
            id: 772,
            overview: "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card—despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he's determined to foil their plans to rob a toy store on Christmas eve.",
            runtime: "2 hrs 0 mins",
            release_date: "November 19, 1992",
            wikipedia: "Home_Alone_2:_Lost_in_New_York",
            trailer: "k0kJieJ1k6k",
            poster: "img/home_alone_2.jpg",
            genre: ["Comedy", "Family", "Adventure", "Crime"]
        },
        {
            title: "Honey, I Shrunk the Kids",
            id: 9354,
            overview: "The scientist father of a teenage girl and boy accidentally shrinks his and two other neighborhood teens to the size of insects. Now the teens must fight diminutive dangers as the father searches for them.",
            runtime: "1 hr 33 mins",
            release_date: "June 23, 1989",
            wikipedia: "Honey,_I_Shrunk_the_Kids",
            trailer: "_av5kqcMVm4",
            poster: "img/honey_i_shrunk_the_kids.jpg",
            genre: ["Adventure", "Comedy", "Family", "Science Fiction"]
        },
        {
            title: "House of 1000 Corpses",
            id: 2662,
            overview: "Two teenage couples traveling across the backwoods of Texas searching for urban legends of serial killers end up as prisoners of a bizarre and sadistic backwater family of serial killers.",
            runtime: "1 hr 29 mins",
            release_date: "April 11, 2003",
            wikipedia: "House_of_1000_Corpses",
            trailer: "xbRRD-cD7h4",
            poster: "img/house_of_1000_corpses.jpg",
            genre: ["Horror"]
        },
        {
            title: "How To Train Your Dragon",
            id: 10191,
            overview: "As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father",
            runtime: "1 hr 38 mins",
            release_date: "March 05, 2010",
            wikipedia: "How_to_Train_Your_Dragon_(film)",
            trailer: "IT_ufPxiXl8",
            poster: "img/how_to_train_your_dragon.jpg",
            genre: ["Fantasy", "Adventure", "Animation", "Family"]
        },
        {
            title: "How To Train Your Dragon 2",
            id: 82702,
            overview: "The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging each other to dragon races (the island's new favorite contact sport), the now inseparable pair journey through the skies, charting unmapped territories and exploring new worlds. When one of their adventures leads to the discovery of a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
            runtime: "1 hr 42 mins",
            release_date: "June 12, 2014",
            wikipedia: "How_to_Train_Your_Dragon_2",
            trailer: "WCWJL6D1SZA",
            poster: "img/how_to_train_your_dragon_2.jpg",
            genre: ["Fantasy", "Action", "Adventure", "Animation", "Comedy", "Family"]
        },
        {
            title: "Hudson Hawk",
            id: 9292,
            overview: "Eddie Hawkins, called Hudson Hawk has just been released from ten years of prison and is planning to spend the rest of his life honestly. But then the crazy Mayflower couple blackmail him to steal some of the works of Leonardo da Vinci. If he refuses, they threaten to kill his friend Tommy.",
            runtime: "1 hr 40 mins",
            release_date: "May 23, 1991",
            wikipedia: "Hudson_Hawk",
            trailer: "pG2m8Ykvmxs",
            poster: "img/hudson_hawk.jpg",
            genre: ["Action", "Adventure", "Comedy"]
        },
        {
            title: "In Too Deep",
            id: 22314,
            overview: "A fearless cop is taking on a ruthless crimelord. He knew the risks. He just didn't know how far he would have to go.",
            runtime: "1 hr 37 mins",
            release_date: "August 25, 1999",
            wikipedia: "In_Too_Deep_(1999_film)",
            trailer: "wAt9dRIM9kc",
            poster: "img/in_too_deep.jpg",
            genre: ["Drama", "Action", "Thriller", "Crime"]
        },
        {
            title: "Inception",
            id: 27205,
            overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
            runtime: "2 hrs 28 mins",
            release_date: "July 14, 2010",
            wikipedia: "Inception",
            trailer: "Jvurpf91omw",
            poster: "img/inception.jpg",
            genre: ["Action", "Thriller", "Science Fiction", "Mystery", "Adventure"]
        },
        {
            title: "Inglourious Basterds",
            id: 16869,
            overview: 'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as "The Basterds" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.',
            runtime: "2 hrs 33 mins",
            release_date: "August 18, 2009",
            wikipedia: "Inglourious_Basterds",
            trailer: "KnrRy6kSFF0",
            poster: "img/inglourious_basterds.jpg",
            genre: ["Drama", "Action", "Thriller", "War"]
        },
        {
            title: "Inside Man",
            id: 388,
            overview: "Bank robber Dalton Russell enters a Manhattan bank, locks the doors and takes hostages, working methodically and without haste. Detective Frazier is assigned to negotiate, but his mind is occupied with the corruption charges he is facing. With an army of police surrounding the bank, the thief, the cop and a high-profile 'fixer' enter high-stakes negotiations.",
            runtime: "2 hrs 9 mins",
            release_date: "March 23, 2006",
            wikipedia: "Inside_Man",
            trailer: "FSH-dbbiroI",
            poster: "img/inside_man.jpg",
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            title: "Interview with the Vampire",
            id: 628,
            overview: "A vampire relates his epic life story of love, betrayal, loneliness, and dark hunger to an over-curious reporter.",
            runtime: "2 hrs 3 mins",
            release_date: "November 11, 1994",
            wikipedia: "Interview_with_the_Vampire_(film)",
            trailer: "sCmYN6TLd8A",
            poster: "img/interview_with_the_vampire.jpg",
            genre: ["Horror", "Drama", "Fantasy"]
        },
        {
            title: "Iron Man",
            id: 1726,
            overview: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
            runtime: "2 hrs 6 mins",
            release_date: "May 2, 2008",
            wikipedia: "Iron_Man_(2008_film)",
            trailer: "8ugaeA-nMTc",
            poster: "img/iron_man.jpg",
            genre: ["Action", "Science Fiction", "Adventure"]
        },
        {
            title: "Iron Man 2",
            id: 10138,
            overview: "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
            runtime: "2 hrs 4 mins",
            release_date: "May 7, 2010",
            wikipedia: "Iron_Man_2",
            trailer: "wKtcmiifycU",
            poster: "img/iron_man_2.jpg",
            genre: ["Adventure", "Action", "Science Fiction"]
        },
        {
            title: "Iron Man 3",
            id: 68721,
            overview: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
            runtime: "2 hrs 10 mins",
            release_date: "May 3, 2013",
            wikipedia: "Iron_Man_3",
            trailer: "oYSD2VQagc4",
            poster: "img/iron_man_3.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Irresistible",
            id: 595148,
            overview: "A Democratic political consultant helps a retired Marine colonel run for mayor in a small, conservative Wisconsin town.",
            runtime: "1 hr 41 mins",
            release_date: "June 26, 2020",
            wikipedia: "Irresistible_(2020_film)",
            trailer: "0vhaAoSm1NY",
            poster: "img/irresistible.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "Jackie Brown",
            id: 184,
            overview: "Jackie Brown is a flight attendant who gets caught in the middle of smuggling cash into the country for her gunrunner boss. When the cops try to use Jackie to get to her boss, she hatches a plan — with help from a bail bondsman — to keep the money for herself.",
            runtime: "2 hrs 34 mins",
            release_date: "April 10, 1997",
            wikipedia: "Jackie_Brown",
            trailer: "G7HkBDNZV7s",
            poster: "img/jackie_brown.jpg",
            genre: ["Crime", "Thriller", "Drama"]
        },
        {
            title: "Dr. No",
            id: 646,
            overview: "In the film that launched the James Bond saga, Agent 007 (Sean Connery) battles mysterious Dr. No, a scientific genius bent on destroying the U.S. space program. As the countdown to disaster begins, Bond must go to Jamaica, where he encounters beautiful Honey Ryder (Ursula Andress), to confront a megalomaniacal villain in his massive island headquarters.",
            runtime: "1 hr 50 mins",
            release_date: "October 04, 1962",
            wikipedia: "Dr._No_(film)",
            trailer: "Npd0Lk6Fo0g",
            poster: "img/dr_no.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "From Russia With Love",
            id: 657,
            overview: "Agent 007 is back in the second installment of the James Bond series, this time battling a secret crime organization known as SPECTRE. Russians Rosa Klebb and Kronsteen are out to snatch a decoding device known as the Lektor, using the ravishing Tatiana to lure Bond into helping them. Bond willingly travels to meet Tatiana in Istanbul, where he must rely on his wits to escape with his life in a series of deadly encounters with the enemy",
            runtime: "1 hr 55 mins",
            release_date: "October 11, 1963",
            wikipedia: "From_Russia_with_Love_(film)",
            trailer: "t9AeIdMQqR8",
            poster: "img/from_russia_with_love.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Goldfinger",
            id: 658,
            overview: "Special agent 007 (Sean Connery) comes face to face with one of the most notorious villains of all time, and now he must outwit and outgun the powerful tycoon to prevent him from cashing in on a devious scheme to raid Fort Knox -- and obliterate the world's economy.",
            runtime: "1 hr 50 mins",
            release_date: "September 17, 1964",
            wikipedia: "Goldfinger_(film)",
            trailer: "MA65V-oLKa8",
            poster: "img/goldfinger.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Thunderball",
            id: 660,
            overview: "A criminal organization has obtained two nuclear bombs and are asking for a 100 million pound ransom in the form of diamonds in seven days or they will use the weapons. The secret service sends James Bond to the Bahamas to once again save the world.",
            runtime: "2 hrs 10 mins",
            release_date: "December 16, 1965",
            wikipedia: "Thunderball_(film)",
            trailer: "7JowkFmI1Fo",
            poster: "img/thunderball.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Casino Royale",
            id: 12208,
            overview: "Sir James Bond is called back out of retirement to stop SMERSH. In order to trick SMERSH, James thinks up the ultimate plan - that every agent will be named 'James Bond'. One of the Bonds, whose real name is Evelyn Tremble is sent to take on Le Chiffre in a game of baccarat, but all the Bonds get more than they can handle.",
            runtime: "2 hrs 11 mins",
            release_date: "April 13, 1967",
            wikipedia: "Casino_Royale_(1967_film)",
            trailer: "cE9q9cp6rH0",
            poster: "img/casino_royale_1967.jpg",
            genre: ["Adventure", "Action", "Comedy"]
        },
        {
            title: "You Only Live Twice",
            id: 667,
            overview: "A mysterious space craft kidnaps a Russian and American space capsule and brings the world on the verge of another World War. James Bond investigates the case in Japan and meets with his archenemy Blofeld. The fifth film from the legendary James Bond series starring Sean Connery as the British super agent.",
            runtime: "1 hr 57 mins",
            release_date: "June 12, 1967",
            wikipedia: "You_Only_Live_Twice_(film)",
            trailer: "-gGiYrS2Y1k",
            poster: "img/you_only_live_twice.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "On Her Majesty's Secret Service",
            id: 668,
            overview: "James Bond tracks archnemesis Ernst Blofeld to a mountaintop retreat where he's training an army of beautiful but lethal women. Along the way, Bond falls for Italian contessa Tracy Draco -- and marries her in order to get closer to Blofeld. Meanwhile, he locates Blofeld in the Alps and embarks on a classic ski chase.",
            runtime: "2 hrs 22 mins",
            release_date: "December 12, 1969",
            wikipedia: "On_Her_Majesty%27s_Secret_Service_(film)",
            trailer: "dOLq5Rg9N-c",
            poster: "img/on_her_majestys_secret_service.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Diamonds Are Forever",
            id: 681,
            overview: "Diamonds are stolen only to be sold again in the international market. James Bond infiltrates a smuggling mission to find out who’s guilty. The mission takes him to Las Vegas where Bond meets his archenemy Blofeld.",
            runtime: "2 hrs 0 mins",
            release_date: "December 13, 1971",
            wikipedia: "Diamonds_Are_Forever_(film)",
            trailer: "9yOamj4mlnE",
            poster: "img/dimonds_are_forever.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Live And Let Die",
            id: 253,
            overview: "James Bond must investigate a mysterious murder case of a British agent in New Orleans. Soon he finds himself up against a gangster boss named Mr. Big.",
            runtime: "2 hrs 1 mins",
            release_date: "July 05, 1973",
            wikipedia: "Live_and_Let_Die_(film)",
            trailer: "KTzsm9-XWQo",
            poster: "img/live_and_let_die.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "The Man With The Golden Gun",
            id: 682,
            overview: "A golden bullet has 007 engraved on it as it smashes into the secret service headquarters. The bullet came from the professional killer Scaramanga who has yet to miss a target and James Bond begins a mission to try and stop him.",
            runtime: "2 hrs 5 mins",
            release_date: "December 01, 1974",
            wikipedia: "The_Man_with_the_Golden_Gun_(film)",
            trailer: "gF5fr3Zhi7E",
            poster: "img/the_man_with_the_golden_gun.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "The Spy Who Loved Me",
            id: 691,
            overview: "Russian and British submarines with nuclear missiles on board both vanish from sight without a trace. England and Russia both blame each other as James Bond tries to solve the riddle of the disappearing ships. But the KGB also has an agent on the case.",
            runtime: "2 hrs 5 mins",
            release_date: "July 07, 1977",
            wikipedia: "The_Spy_Who_Loved_Me_(film)",
            trailer: "UBxG_TJvYTg",
            poster: "img/the_spy_who_loved_me.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Moonraker",
            id: 698,
            overview: "During the transportation of a Space Shuttle a Boeing 747 crashes in the Atlantic Ocean yet when they go to look for the destroyed shuttle it is not there. James Bond investigates the missing mission space shuttle and soon learns that the shuttles owner Hugo Drax wants to kill all of mankind.",
            runtime: "2 hrs 6 mins",
            release_date: "June 26, 1979",
            wikipedia: "Moonraker_(film)",
            trailer: "KFOOjYU16KE",
            poster: "img/moonraker.jpg",
            genre: ["Adventure", "Action", "Thriller", "Science Fiction"]
        },
        {
            title: "For Your Eyes Only",
            id: 699,
            overview: "A British spy ship has sunk and on board was a hi-tech encryption device. James Bond is sent to find the device that holds British launching instructions before the enemy Soviets get to it first.",
            runtime: "2 hrs 7 mins",
            release_date: "June 23, 1981",
            wikipedia: "For_Your_Eyes_Only_(film)",
            trailer: "e0iF8TCk4Fw",
            poster: "img/for_your_eyes_only.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Octopussy",
            id: 700,
            overview: "James Bond is sent to investigate after a fellow “00” agent is found dead with a priceless Farberge egg. James bond follows the mystery and uncovers a smuggling scandal and a Russian General who wants to provoke a new World War.",
            runtime: "2 hrs 11 mins",
            release_date: "June 05, 1983",
            wikipedia: "Octopussy",
            trailer: "IwHbCvXMbS8",
            poster: "img/octopussy.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Never Say Never Again",
            id: 36670,
            overview: "James Bond returns as the secret agent 007 one more time to battle the evil organization SPECTRE. Bond must defeat Largo, who has stolen two atomic warheads for nuclear blackmail. But Bond has an ally in Largo's girlfriend, the willowy Domino, who falls for Bond and seeks revenge. This is the last time for Sean Connery as Her Majesty's Secret Agent 007.",
            runtime: "2 hrs 14 mins",
            release_date: "October 07, 1983",
            wikipedia: "Never_Say_Never_Again",
            trailer: "JDEzoYm25o8",
            poster: "img/never_say_never_again.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "A View To A Kill",
            id: 707,
            overview: "A newly developed microchip designed by Zorin Industries for the British Government that can survive the electromagnetic radiation caused by a nuclear explosion has landed in the hands of the KGB. James Bond must find out how and why. His suspicions soon lead him to big industry leader Max Zorin.",
            runtime: "2 hrs 11 mins",
            release_date: "May 24, 1985",
            wikipedia: "A_View_to_a_Kill",
            trailer: "buOK9kJIJA4",
            poster: "img/a_view_to_a_kill.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "The Living Daylights",
            id: 708,
            overview: "James Bond helps a Russian General escape into the west. He soon finds out that the KGB wants to kill him for helping the General. A little while later the General is kidnapped from the Secret Service leading 007 to be suspicious.",
            runtime: "2 hrs 10 mins",
            release_date: "June 29, 1987",
            wikipedia: "The_Living_Daylights",
            trailer: "IXAVKJTIM1E",
            poster: "img/the_living_daylights.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "License to Kill",
            id: 709,
            overview: "James Bond and his American colleague Felix Leiter arrest the drug lord Sanchez who succeeds in escaping and takes revenge on Felix and his wife. Bond knows but just one thing: revenge.",
            runtime: "2 hrs 13 mins",
            release_date: "July 07, 1989",
            wikipedia: "Licence_to_Kill",
            trailer: "quHQAuO0lkg",
            poster: "img/licence_to_kill.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Goldeneye",
            id: 710,
            overview: "James Bond must unmask the mysterious head of the Janus Syndicate and prevent the leader from utilizing the GoldenEye weapons system to inflict devastating revenge on Britain.",
            runtime: "2 hrs 10 mins",
            release_date: "November 16, 1995",
            wikipedia: "GoldenEye",
            trailer: "lcOqUE0u1LM",
            poster: "img/goldeneye.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Tomorrow Never Dies",
            id: 714,
            overview: "A deranged media mogul is staging international incidents to pit the world's superpowers against each other. Now 007 must take on this evil mastermind in an adrenaline-charged battle to end his reign of terror and prevent global pandemonium.",
            runtime: "1 hr 59 mins",
            release_date: "December 11, 1997",
            wikipedia: "Tomorrow_Never_Dies",
            trailer: "4veFLrEcWlA",
            poster: "img/tomorrow_never_dies.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "The World Is Not Enough",
            id: 36643,
            overview: "Greed, revenge, world dominance and high-tech terrorism – it's all in a day's work for Bond, who's on a mission to a protect beautiful oil heiress from a notorious terrorist. In a race against time that culminates in a dramatic submarine showdown, Bond works to defuse the international power struggle that has the world's oil supply hanging in the balance.",
            runtime: "2 hrs 8 mins",
            release_date: "November 08, 1999",
            wikipedia: "The_World_Is_Not_Enough",
            trailer: "9nH1DwQP2Xs",
            poster: "img/the_world_is_not_enough.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Die Another Day",
            id: 36669,
            overview: "Bond takes on a North Korean leader who undergoes DNA replacement procedures that allow him to assume different identities. American agent, Jinx Johnson assists Bond in his attempt to thwart the villain's plans to exploit a satellite that is powered by solar energy.",
            runtime: "2 hrs 13 mins",
            release_date: "November 17, 2002",
            wikipedia: "Die_Another_Day",
            trailer: "VSzixW0KQcc",
            poster: "img/die_another_day.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Casino Royale",
            id: 36557,
            overview: "Le Chiffre, a banker to the world's terrorists, is scheduled to participate in a high-stakes poker game in Montenegro, where he intends to use his winnings to establish his financial grip on the terrorist market. M sends Bond – on his maiden mission as a 00 Agent – to attend this game and prevent Le Chiffre from winning. With the help of Vesper Lynd and Felix Leiter, Bond enters the most important poker game in his already dangerous career.",
            runtime: "2 hrs 24 mins",
            release_date: "November 14, 2006",
            wikipedia: "Casino_Royale_(2006_film)",
            trailer: "xK7PbujRUOk",
            poster: "img/casino_royale_2006.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Quantum of Solace",
            id: 10764,
            overview: "Quantum of Solace continues the adventures of James Bond after Casino Royale. Betrayed by Vesper, the woman he loved, 007 fights the urge to make his latest mission personal. Pursuing his determination to uncover the truth, Bond and M interrogate Mr. White, who reveals that the organization that blackmailed Vesper is far more complex and dangerous than anyone had imagined.",
            runtime: "1 hr 46 mins",
            release_date: "October 30, 2008",
            wikipedia: "Quantum_of_Solace",
            trailer: "f6acw690AqQ",
            poster: "img/quantum_of_solace.jpg",
            genre: ["Adventure", "Action", "Thriller", "Crime"]
        },
        {
            title: "Skyfall",
            id: 37724,
            overview: "When Bond's latest assignment goes gravely wrong and agents around the world are exposed, MI6 is attacked forcing M to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory, the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows - aided only by field agent, Eve - following a trail to the mysterious Silva, whose lethal and hidden motives have yet to reveal themselves.",
            runtime: "2 hrs 23 mins",
            release_date: "October 25, 2012",
            wikipedia: "Skyfall",
            trailer: "6kw1UVovByw",
            poster: "img/skyfall.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Spectre",
            id: 206647,
            overview: "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
            runtime: "2 hrs 28 mins",
            release_date: "October 26, 2015",
            wikipedia: "Spectre_(2015_film)",
            trailer: "ujmoYyEyDP8",
            poster: "img/spectre.jpg",
            genre: ["Adventure", "Action", "Crime"]
        },
        {
            title: "No Time To Die",
            id: 370172,
            overview: "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
            runtime: "2 hrs 43 mins",
            release_date: "October 8, 2021",
            wikipedia: "No_Time_to_Die",
            trailer: "BIhNsAtPbPI",
            poster: "img/no_time_to_die.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Jarhead",
            id: 25,
            overview: "Jarhead is a film about a US Marine Anthony Swofford’s experience in the Gulf War. After putting up with an arduous boot camp, Swafford and his unit are sent to the Persian Gulf where they are earger to fight but are forced to stay back from the action. Meanwhile Swofford gets news of his girlfriend is cheating on him. Desperately he wants to kill someone and finally put his training to use.",
            runtime: "2 hrs 5 mins",
            release_date: "November 04, 2005",
            wikipedia: "Jarhead_(film)",
            trailer: "-aBP-c28_1M",
            poster: "img/jarhead.jpg",
            genre: ["Drama", "War"]
        },
        {
            title: "JFK (Director's Cut)",
            id: 820,
            overview: "Follows the investigation into the assassination of President John F. Kennedy led by New Orleans district attorney Jim Garrison.",
            runtime: "3 hr 26 mins",
            release_date: "December 20, 1991",
            wikipedia: "JFK_(film)",
            trailer: "w16bYZ-4nmE",
            poster: "img/jfk.jpg",
            genre: ["Drama", "Thriller", "History"]
        },
        {
            title: "JFK Revisited: Through the Looking Glass",
            id: 836486,
            overview: "Thirty years after his film JFK, filmmaker Oliver Stone takes viewers on a journey though recently declassified evidence in the assassination of President Kennedy - the most consequential American murder mystery of the twentieth century. Joined by Oscar-winning narrators Whoopi Goldberg and Donald Sutherland, as well as a distinguished team of forensics, medical and ballistics experts, historians, and witnesses, Stone presents compelling evidence that in the Kennedy case “conspiracy theory” is now “conspiracy fact.”",
            runtime: "1 hr 58 mins",
            release_date: "November 12, 2021",
            wikipedia: "JFK_Revisited:_Through_the_Looking_Glass",
            trailer: "65yEb1J1ybo",
            poster: "img/jfk_revisited.jpg",
            genre: ["Documentary"]
        },
        {
            title: "John Wick",
            id: 404609,
            overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
            runtime: "1 hr 41 mins",
            release_date: "October 22, 2014",
            wikipedia: "John_Wick_(film)",
            trailer: "2AUmvWm5ZDQ",
            poster: "img/john_wick.jpg",
            genre: ["Action", "Thriller"]
        },
        {
            title: "John Wick: Chapter 2",
            id: 16806,
            overview: "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
            runtime: "2 hrs 02 mins",
            release_date: "February 08, 2017",
            wikipedia: "John_Wick:_Chapter_2",
            trailer: "XGk2EfbD_Ps",
            poster: "img/john_wick_chapter_2.jpg",
            genre: ["Thriller", "Action", "Crime"]
        },
        {
            title: "John Wick: Chapter 4",
            id: 603692,
            overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
            runtime: "2 hrs 50 mins",
            release_date: "March 24, 2023",
            wikipedia: "John_Wick:_Chapter_4",
            trailer: "qEVUtrk8_B4",
            poster: "img/john_wick_chapter_4.jpg",
            genre: ["Thriller", "Action", "Crime"]
        },
        {
            title: "Johnny Dangerously",
            id: 16806,
            overview: "Set in the 1930s, an honest, goodhearted man is forced to turn to a life of crime to finance his neurotic mother's skyrocketing medical bills.",
            runtime: "1 hr 30 mins",
            release_date: "December 21, 1984",
            wikipedia: "Johnny_Dangerously",
            trailer: "_WEPlSPwWu8",
            poster: "img/johnny_dangerously.jpg",
            genre: ["Action", "Comedy", "Thriller", "Crime"]
        },
        {
            title: "Joker",
            id: 475557,
            overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            runtime: "2 hrs 2 mins",
            release_date: "October 2, 2019",
            wikipedia: "Joker_(2019_film)",
            trailer: "t433PEQGErc",
            poster: "img/joker.jpg",
            genre: ["Crime", "Thriller", "Drama"]
        },
        {
            title: "Jumanji: Welcome to the Jungle",
            id: 353486,
            overview: "The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
            runtime: "1 hr 59 mins",
            release_date: "December 09, 2017",
            wikipedia: "Jumanji:_Welcome_to_the_Jungle",
            trailer: "2QKg5SZ_35I",
            poster: "img/jumanji_welcome_to_the_jungle.jpg",
            genre: ["Action", "Adventure", "Comedy", "Fantasy"]
        },
        {
            title: "Jumanji: The Next Level",
            id: 512200,
            overview: "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
            runtime: "2 hrs 3 mins",
            release_date: "December 4, 2019",
            wikipedia: "Jumanji:_The_Next_Level",
            trailer: "rBxcF-r9Ibs",
            poster: "img/jumanji_the_next_level.jpg",
            genre: ["Adventure", "Comedy", "Fantasy"]
        },
        {
            title: "Jungle Cruise",
            id: 451048,
            overview: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.",
            runtime: "2 hrs 7 mins",
            release_date: "July 30, 2021",
            wikipedia: "Jungle_Cruise_(film)",
            trailer: "hJZ82pwwJqA",
            poster: "img/jungle_cruise.jpg",
            genre: ["Action", "Adventure", "Fantasy"]
        },
        {
            title: "Kill Bill: Vol. 1",
            id: 24,
            overview: "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.",
            runtime: "1 hr 51 mins",
            release_date: "October 10, 2003",
            wikipedia: "Kill_Bill:_Volume_1",
            trailer: "7kSuas6mRpk",
            poster: "img/kill_bill_vol_1.jpg",
            genre: ["Action", "Crime"]
        },
        {
            title: "Kill Bill: Vol. 2",
            id: 393,
            overview: "The Bride unwaveringly continues on her roaring rampage of revenge against the band of assassins who had tried to kill her and her unborn child. She visits each of her former associates one-by-one, checking off the victims on her Death List Five until there's nothing left to do … but kill Bill.",
            runtime: "2 hrs 16 mins",
            release_date: "April 16, 2004",
            wikipedia: "Kill_Bill:_Volume_2",
            trailer: "WTt8cCIvGYI",
            poster: "img/kill_bill_vol_2.jpg",
            genre: ["Action", "Crime", "Thriller"]
        },
        {
            title: "Kim Dotcom: Caught in the Web",
            id: 438471,
            overview: "The larger-than-life story of Kim Dotcom, the \"most wanted man online\", is extraordinary enough, but the battle between Dotcom and the US Government and entertainment industry – being fought in New Zealand – is one that goes to the heart of ownership, privacy and piracy in the digital age.",
            runtime: "1 hr 48 mins",
            release_date: "March 13, 2017",
            wikipedia: "Kim_Dotcom",
            trailer: "M8iTRn8GUWc",
            poster: "img/kim_dotcom_caught_in_the_web.jpg",
            genre: ["Documentary"]
        },
        {
            title: "King of New York",
            id: 9558,
            overview: "A former drug lord returns from prison determined to wipe out all his competition and distribute the profits of his operations to New York's poor and lower classes in this stylish and ultra violent modern twist on Robin Hood.",
            runtime: "1 hr 43 mins",
            release_date: "July 18, 1990",
            wikipedia: "King_of_New_York",
            trailer: "iBUc1Mo0_ew",
            poster: "img/king_of_new_york.jpg",
            genre: ["Thriller", "Crime"]
        },
        {
            title: "Knight of Cups",
            id: 86835,
            overview: "Rick is a screenwriter living in Los Angeles. While successful in his career, his life feels empty. Haunted and confused, he finds temporary solace in the decadent Hollywood excess that defines his existence. Women provide a distraction to his daily pain, and every encounter brings him closer to finding his place in the world.",
            runtime: "1 hr 58 mins",
            release_date: "February 08, 2015",
            wikipedia: "Knight_of_Cups_(film)",
            trailer: "bC-3rnv_b3o",
            poster: "img/knight_of_cups.jpg",
            genre: ["Romance", "Drama"]
        },
        {
            title: "La Femme Nikita",
            id: 9322,
            overview: "A beautiful felon, sentenced to life in prison for the murder of a policeman, is given a second chance - as a secret political assassin controlled by the government.",
            runtime: "1 hr 55 mins",
            release_date: "February 21, 1990",
            wikipedia: "Nikita_(film)",
            trailer: "OuiUONDY3A4",
            poster: "img/la_femme_nikita.jpg",
            genre: ["Action", "Thriller"]
        },
        {
            title: "La La Land",
            id: 313369,
            overview: "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
            runtime: "2 hrs 09 mins",
            release_date: "November 29, 2016",
            wikipedia: "La_La_Land_(film)",
            trailer: "0pdqf4P9MB8",
            poster: "img/la_la_land.jpg",
            genre: ["Comedy", "Drama", "Romance"]
        },
        {
            title: "Last Action Hero",
            id: 9593,
            overview: "Danny is obsessed with a fictional movie character action hero Jack Slater. When a magical ticket transports him into Jack's latest adventure, Danny finds himself in a world where movie magic and reality collide. Now it's up to Danny to save the life of his hero and new friend.",
            runtime: "2 hrs 10 mins",
            release_date: "June 18, 1993",
            wikipedia: "Last_Action_Hero",
            trailer: "OJw8o49CNZI",
            poster: "img/last_action_hero.jpg",
            genre: ["Adventure", "Fantasy", "Action", "Comedy", "Family"]
        },
        {
            title: "Legend",
            id: 276907,
            overview: "Suave, charming and volatile, Reggie Kray and his unstable twin brother Ronnie start to leave their mark on the London underworld in the 1960s. Using violence to get what they want, the siblings orchestrate robberies and murders while running nightclubs and protection rackets. With police Detective Leonard \"Nipper\" Read hot on their heels, the brothers continue their rapid rise to power and achieve tabloid notoriety.",
            runtime: "2 hrs 12 mins",
            release_date: "November 20, 2015",
            wikipedia: "Legend_(2015_film)",
            trailer: "WVHlrfzLjd4",
            poster: "img/legend.jpg",
            genre: ["Crime", "Thriller"]
        },
        {
            title: "Leon: The Professional",
            id: 101,
            overview: "Leon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Leon's footsteps.",
            runtime: "1 hr 50 mins",
            release_date: "September 14, 1994",
            wikipedia: "Léon:_The_Professional",
            trailer: "aNQqoExfQsg",
            poster: "img/leon.jpg",
            genre: ["Thriller", "Crime", "Drama"]
        },
        {
            title: "Liar Liar",
            id: 1624,
            overview: "Fletcher Reede is a fast-talking attorney and habitual liar. When his son Max blows out the candles on his fifth birthday he has just one wish - that his dad will stop lying for 24 hours. When Max's wish comes true, Fletcher discovers that his mouth has suddenly become his biggest liability.",
            runtime: "1 hr 26 mins",
            release_date: "March 21, 1997",
            wikipedia: "Liar_Liar",
            trailer: "C1no75lpOiw",
            poster: "img/liar_liar.jpg",
            genre: ["Comedy"]
        },
        {
            title: "Limitless",
            id: 51876,
            overview: 'A paranoia-fueled action thriller about an unsuccessful writer whose life is transformed by a top-secret "smart drug" that allows him to use 100% of his brain and become a perfect version of himself. His enhanced abilities soon attract shadowy forces that threaten his new life in this darkly comic and provocative film.',
            runtime: "1 hr 45 mins",
            release_date: "March 08, 2011",
            wikipedia: "Limitless_(film)",
            trailer: "4TLppsfzQH8",
            poster: "img/limitless.jpg",
            genre: ["Thriller", "Mystery", "Science Fiction"]
        },
        {
            title: "Little Caesar",
            id: 27899,
            overview: "A small-time hood shoots his way to the top, but how long can he stay there?",
            runtime: "1 hr 19 mins",
            release_date: "January 9, 1931",
            wikipedia: "Little_Caesar_(film)",
            trailer: "qfcHKhp8YE4",
            poster: "img/little_caesar.jpg",
            genre: ["Drama", "Action", "Crime"]
        },
        {
            title: "Lo and Behold: Reveries of the Connected World",
            id: 360030,
            overview: "Werner Herzog's exploration of the Internet and the connected world.",
            runtime: "1 hr 38 mins",
            release_date: "March 4, 2016",
            wikipedia: "Lo_and_Behold%2C_Reveries_of_the_Connected_World",
            trailer: "Zc1tZ8JsZvg",
            poster: "img/lo_and_behold_reveries_of_the_connected_world.jpg",
            genre: ["Documentary"]
        },
        {
            title: "Logan",
            id: 263115,
            overview: "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
            runtime: "2 hrs 17 mins",
            release_date: "February 28, 2017",
            wikipedia: "Logan_(2017_film)",
            trailer: "Div0iP65aZo",
            poster: "img/logan.jpg",
            genre: ["Action", "Drama", "Science Fiction"]
        },
        {
            title: "Logan Lucky",
            id: 399170,
            overview: "Trying to reverse a family curse, brothers Jimmy and Clyde Logan set out to execute an elaborate robbery during the legendary Coca-Cola 600 race at the Charlotte Motor Speedway.",
            runtime: "1 hr 59 mins",
            release_date: "August 17, 2017",
            wikipedia: "Logan_Lucky",
            trailer: "EsQHkdMqD6g",
            poster: "img/logan_lucky.jpg",
            genre: ["Action", "Crime", "Comedy"]
        },
        {
            title: "Looper",
            id: 59967,
            overview: "In the futuristic action thriller Looper, time travel will be invented but it will be illegal and only available on the black market. When the mob wants to get rid of someone, they will send their target 30 years into the past where a looper, a hired gun, like Joe is waiting to mop up. Joe is getting rich and life is good until the day the mob decides to close the loop, sending back Joe's future self for assassination.",
            runtime: "1 hr 58 mins",
            release_date: "September 26, 2012",
            wikipedia: "Looper_(film)",
            trailer: "0uIWGOKW5OM",
            poster: "img/looper.jpg",
            genre: ["Action", "Thriller", "Science Fiction"]
        },
        {
            title: "Lord of the Rings: The Fellowship of the Ring",
            id: 120,
            overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
            runtime: "2 hrs 58 mins",
            release_date: "December 18, 2001",
            wikipedia: "The_Lord_of_the_Rings:_The_Fellowship_of_the_Ring",
            trailer: "_e8QGuG50ro",
            poster: "img/lotr_1.jpg",
            genre: ["Adventure", "Fantasy", "Action"]
        },
        {
            title: "Lord of the Rings: The Two Towers",
            id: 121,
            overview: "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
            runtime: "2 hrs 59 mins",
            release_date: "December 18, 2002",
            wikipedia: "The_Lord_of_the_Rings:_The_Two_Towers",
            trailer: "hYcw5ksV8YQ",
            poster: "img/lotr_2.jpg",
            genre: ["Adventure", "Fantasy", "Action"]
        },
        {
            title: "Lord of the Rings: The Return of the King",
            id: 122,
            overview: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
            runtime: "3 hrs 21 mins",
            release_date: "December 01, 2003",
            wikipedia: "The_Lord_of_the_Rings:_The_Return_of_the_King",
            trailer: "y2rYRu8UW8M",
            poster: "img/lotr_3.jpg",
            genre: ["Adventure", "Fantasy", "Action"]
        },
        {
            title: "Lord of War",
            id: 1830,
            overview: "Yuri Orlov is a globetrotting arms dealer and, through some of the deadliest war zones, he struggles to stay one step ahead of a relentless Interpol agent, his business rivals and even some of his customers who include many of the world's most notorious dictators. Finally, he must also face his own conscience.",
            runtime: "2 hrs 2 mins",
            release_date: "September 16, 2005",
            wikipedia: "Lord_of_War",
            trailer: "Ej83QvHuiNI",
            poster: "img/lord_of_war.jpg",
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            title: "Love and Monsters",
            id: 590223,
            overview: "Seven years since the Monsterpocalypse began, Joel Dawson has been living underground in order to survive. But after reconnecting over radio with his high school girlfriend Aimee, Joel decides to venture out to reunite with her, despite all the dangerous monsters that stand in his way.",
            runtime: "1 hr 49 mins",
            release_date: "October 16, 2020",
            wikipedia: "Love_and_Monsters_(film)",
            trailer: "YZhI4aHAgP0",
            poster: "img/love_and_monsters.jpg",
            genre: ["Comedy", "Action", "Adventure", "Fantasy"]
        },
        {
            title: "Loving Vincent",
            id: 339877,
            overview: "The film brings the paintings of Vincent van Gogh to life to tell his remarkable story. Every one of the 65,000 frames of the film is an oil-painting hand-painted by 125 professional oil-painters who travelled from all across the world to the Loving Vincent studios in Poland and Greece to be a part of the production. As remarkable as Vincent’s brilliant paintings are his passionate and ill-fated life and mysterious death.",
            runtime: "1 hr 35 mins",
            release_date: "June 22, 2017",
            wikipedia: "Loving_Vincent",
            trailer: "2ZX7OANSoAg",
            poster: "img/loving_vincent.jpg",
            genre: ["Animation", "Drama", "Mystery"]
        },
        {
            title: "Lucy",
            id: 240832,
            overview: "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
            runtime: "1 hr 29 mins",
            release_date: "July 14, 2014",
            wikipedia: "Lucy_(2014_film)",
            trailer: "bN7ksFEVO9U",
            poster: "img/lucy.jpg",
            genre: ["Action", "Science Fiction"]
        },
        {
            title: "Mad Max: Fury Road",
            id: 76341,
            overview: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
            runtime: "2 hrs 0 mins",
            release_date: "May 13, 2015",
            wikipedia: "Mad_Max:_Fury_Road",
            trailer: "hEJnMQG9ev8",
            poster: "img/mad_max_fury_road.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Thriller"]
        },
        {
            title: "Malcolm X",
            id: 1883,
            overview: "The biopic of the controversial and influential Black Nationalist leader.",
            runtime: "3 hrs 22 mins",
            release_date: "November 18, 1992",
            wikipedia: "Malcolm_X_(1992_film)",
            trailer: "sx4sEvhYeVE",
            poster: "img/malcolm_x.jpg",
            genre: ["Drama", "History"]
        },
        {
            title: "Maleficent",
            id: 102651,
            overview: "The untold story of Disney's most iconic villain from the 1959 classic 'Sleeping Beauty'. A beautiful, pure-hearted young woman, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land. Maleficent rises to be the land's fiercest protector, but she ultimately suffers a ruthless betrayal – an act that begins to turn her heart into stone. Bent on revenge, Maleficent faces an epic battle with the invading King's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom - and to Maleficent's true happiness as well.",
            runtime: "1 hr 37 mins",
            release_date: "May 28, 2014",
            wikipedia: "Maleficent_(film)",
            trailer: "w-XO4XiRop0",
            poster: "img/maleficent.jpg",
            genre: ["Fantasy", "Adventure", "Action", "Family", "Romance"]
        },
        {
            title: "Man on Fire",
            id: 9509,
            overview: "Jaded ex-CIA operative John Creasy reluctantly accepts a job as the bodyguard for a 10-year-old girl in Mexico City. They clash at first, but eventually bond, and when she's kidnapped he's consumed by fury and will stop at nothing to save her life.",
            runtime: "2 hrs 26 mins",
            release_date: "April 23, 2004",
            wikipedia: "Man_on_Fire_(2004_film)",
            trailer: "eDDh50B6kA4",
            poster: "img/man_on_fire.jpg",
            genre: ["Action", "Drama", "Thriller"]
        },
        {
            title: "Match Point",
            id: 116,
            overview: "Match Point is Woody Allen’s satire of the British High Society and the ambition of a young tennis instructor to enter into it. Yet when he must decide between two women - one assuring him his place in high society, and the other that would bring him far from it - palms start to sweat and a dark psychological match in his head begins.",
            runtime: "2 hrs 4 mins",
            release_date: "October 26, 2005",
            wikipedia: "Match_Point",
            trailer: "w9dRrsKRwgA",
            poster: "img/match_point.jpg",
            genre: ["Drama", "Thriller", "Crime", "Romance"]
        },
        {
            title: "Maverick",
            id: 9359,
            overview: "Maverick is a gambler who would rather con someone than fight them. He needs an additional three thousand dollars in order to enter a Winner Take All poker game that begins in a few days. He tries to win some, tries to collect a few debts, and recover a little loot for the reward. He joins forces with a woman gambler with a marvelous southern accent as the two both try and enter the game.",
            runtime: "2 hrs 7 mins",
            release_date: "May 20, 1994",
            wikipedia: "Maverick_(film)",
            trailer: "507KAlpplHw",
            poster: "img/maverick.jpg",
            genre: ["Action", "Adventure", "Comedy", "Drama", "Western"]
        },
        {
            title: "Mayweather vs. Pacquiao",
            id: 329648,
            overview: "Floyd Mayweather, Jr. vs. Manny Pacquiao, billed as The Fight of the Century, Battle for Greatness or Legacy, was a professional boxing match between the eight-division world champion Manny Pacquiao and undefeated, five-division world champion Floyd Mayweather, Jr. The fight took place on May 2, 2015 at the MGM Grand Garden Arena in Las Vegas, Nevada.",
            runtime: "1 hr 15 mins",
            release_date: "May 02, 2015",
            wikipedia: "Floyd_Mayweather_Jr._vs._Manny_Pacquiao",
            trailer: "zG5lbBwHYSM",
            poster: "img/mayweather_v_pacquiao.jpg",
            genre: []
        },
        {
            title: "Meet Joe Black",
            id: 297,
            overview: "When the grim reaper comes to collect the soul of megamogul Bill Parrish, he arrives with a proposition: Host him for a \"vacation\" among the living in trade for a few more days of existence. Parrish agrees, and using the pseudonym Joe Black, Death begins taking part in Parrish's daily agenda and falls in love with the man's daughter. Yet when Black's holiday is over, so is Parrish's life.",
            runtime: "2 hr 58 mins",
            release_date: "November 12, 1998",
            wikipedia: "Meet_Joe_Black",
            trailer: "LwCz8SDI00c",
            poster: "img/meet_joe_black.jpg",
            genre: ["Fantasy", "Drama", "Mystery"]
        },
        {
            title: "Men In Black",
            id: 607,
            overview: "Men in Black follows the exploits of agents Kay and Jay, members of a top-secret organization established to monitor and police alien activity on Earth. The two Men in Black find themselves in the middle of the deadly plot by an intergalactic terrorist who has arrived on Earth to assassinate two ambassadors from opposing galaxies. In order to prevent worlds from colliding, the MiB must track down the terrorist and prevent the destruction of Earth. It's just another typical day for the Men in Black.",
            runtime: "1 hr 38 mins",
            release_date: "July 01, 1997",
            wikipedia: "Men_in_Black_(1997_film)",
            trailer: "1Q4mhYF9aQQ",
            poster: "img/men_in_black.jpg",
            genre: ["Action", "Adventure", "Comedy", "Science Fiction"]
        },
        {
            title: "Men In Black II",
            id: 608,
            overview: "Kay and Jay reunite to provide our best, last and only line of defense against a sinister seductress who levels the toughest challenge yet to the MIB's untarnished mission statement – protecting Earth from the scum of the universe. It's been four years since the alien-seeking agents averted an intergalactic disaster of epic proportions. Now it's a race against the clock as Jay must convince Kay – who not only has absolutely no memory of his time spent with the MIB, but is also the only living person left with the expertise to save the galaxy – to reunite with the MIB before the earth submits to ultimate destruction.",
            runtime: "1 hr 28 mins",
            release_date: "July 03, 2002",
            wikipedia: "Men_in_Black_II",
            trailer: "p4NJHqoojOU",
            poster: "img/men_in_black_2.jpg",
            genre: ["Action", "Adventure", "Comedy", "Science Fiction"]
        },
        {
            title: "Men In Black 3",
            id: 41154,
            overview: "Agents J (Will Smith) and K (Tommy Lee Jones) are back...in time. J has seen some inexplicable things in his 15 years with the Men in Black, but nothing, not even aliens, perplexes him as much as his wry, reticent partner. But when K's life and the fate of the planet are put at stake, Agent J will have to travel back in time to put things right. J discovers that there are secrets to the universe that K never told him - secrets that will reveal themselves as he teams up with the young Agent K (Josh Brolin) to save his partner, the agency, and the future of humankind.",
            runtime: "1 hr 46 mins",
            release_date: "May 23, 2012",
            wikipedia: "Men_in_Black_3",
            trailer: "IyaFEBI_L24",
            poster: "img/men_in_black_3.jpg",
            genre: ["Action", "Comedy", "Science Fiction"]
        },
        {
            title: "Menace II Society",
            id: 9516,
            overview: "Menace II Society is a coming of age tale detailing the summer after its protagonist Caine (Tyrin Turner) graduates from high school. This is Caine's story, which details real life in today's tough inner city.",
            runtime: "1 hr 37 mins",
            release_date: "May 26, 1993",
            wikipedia: "Menace_II_Society",
            trailer: "gqSBltlvh28",
            poster: "img/menace_II_society.jpg",
            genre: ["Drama", "Action", "Crime"]
        },
        {
            title: "Michael Clayton",
            id: 4566,
            overview: "A law firm brings in its 'fixer' to remedy the situation after a lawyer has a breakdown while representing a chemical company that he knows is guilty in a multi-billion dollar class action suit.",
            runtime: "1 hr 59 mins",
            release_date: "September 28, 2007",
            wikipedia: "Michael_Clayton_(film)",
            trailer: "5kJRYBhG43Q",
            poster: "img/michael_clayton.jpg",
            genre: ["Drama", "Mystery", "Crime"]
        },
        {
            title: "Midnight Express",
            id: 11327,
            overview: "Billy Hayes is caught attempting to smuggle drugs out of Turkey. The Turkish courts decide to make an example of him, sentencing him to more than 30 years in prison. Hayes has two opportunities for release: the appeals made by his lawyer, his family, and the American government, or the \"Midnight Express\".",
            runtime: "2 hrs 1 min",
            release_date: "October 6, 1978",
            wikipedia: "Midnight_Express_(film)",
            trailer: "lhuutAnXBzQ",
            poster: "img/midnight_express.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "Midnight in Paris",
            id: 59436,
            overview: "A romantic comedy about a family traveling to the French capital for business. The party includes a young engaged couple forced to confront the illusion that a life different from their own is better.",
            runtime: "1 hrs 34 mins",
            release_date: "May 11, 2011",
            wikipedia: "Midnight_in_Paris",
            trailer: "FAfR8omt-CY",
            poster: "img/midnight_in_paris.jpg",
            genre: ["Fantasy", "Comedy", "Romance"]
        },
        {
            title: "Minority Report",
            id: 180,
            overview: "John Anderton is a top 'Precrime' cop in the late-21st century, when technology can predict crimes before they're committed. But Anderton becomes the quarry when another investigator targets him for a murder charge.",
            runtime: "2 hrs 25 mins",
            release_date: "June 20, 2002",
            wikipedia: "Minority_Report_(film)",
            trailer: "lG7DGMgfOb8",
            poster: "img/minority_report.jpg",
            genre: ["Action", "Thriller", "Science Fiction", "Mystery"]
        },
        {
            title: "Miracle on 34th Street",
            id: 10510,
            overview: "Six-year-old Susan Walker has doubts about childhood's most enduring miracle—Santa Claus. Her mother told her the secret about Santa a long time ago, but, after meeting a special department store Santa who's convinced he's the real thing, Susan is given the most precious gift of all—something to believe in.",
            runtime: "1 hr 54 mins",
            release_date: "November 18, 1994",
            wikipedia: "Miracle_on_34th_Street_(1994_film)",
            trailer: "leDD6Y-Nyqg",
            poster: "img/miracle_on 34th_street.jpg",
            genre: ["Fantasy", "Drama", "Family"]
        },
        {
            title: "Miss Sloane",
            id: 376290,
            overview: "An ambitious lobbyist faces off against the powerful gun lobby in an attempt to pass gun control legislation.",
            runtime: "2 hrs 12 mins",
            release_date: "November 25, 2016",
            wikipedia: "Miss_Sloane",
            trailer: "5k8KaMdPYTY",
            poster: "img/miss_sloane.jpg",
            genre: ["Drama", "Thriller"]
        },
        {
            title: "Mission: Impossible",
            id: 954,
            overview: "When Ethan Hunt, the leader of a crack espionage team whose perilous operation has gone awry with no explanation, discovers that a mole has penetrated the CIA, he's surprised to learn that he's the No. 1 suspect. To clear his name, Hunt now must ferret out the real double agent and, in the process, even the score.",
            runtime: "1 hr 50 mins",
            release_date: "May 21, 1996",
            wikipedia: "Mission:_Impossible_(film)",
            trailer: "vadCbBuUM0E",
            poster: "img/mission_impossible.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Mission: Impossible III",
            id: 956,
            overview: "Retired from active duty to train new IMF agents, Ethan Hunt is called back into action to confront sadistic arms dealer, Owen Davian. Hunt must try to protect his girlfriend while working with his new team to complete the mission.",
            runtime: "2 hrs 6 mins",
            release_date: "May 03, 2006",
            wikipedia: "Mission:_Impossible_III",
            trailer: "rl2bysiyltg",
            poster: "img/mission_impossible_3.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Mission: Impossible - Rogue Nation",
            id: 177677,
            overview: "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
            runtime: "2 hrs 11 mins",
            release_date: "July 23, 2015",
            wikipedia: "Mission:_Impossible_–_Rogue_Nation",
            trailer: "gOW_azQbOjw",
            poster: "img/mission_impossible_rogue_nation.jpg",
            genre: ["Adventure", "Action", "Thriller"]
        },
        {
            title: "Mission: Impossible - Fallout",
            id: 353081,
            overview: "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
            runtime: "2 hrs 28 mins",
            release_date: "July 13, 2018",
            wikipedia: "Mission:_Impossible_–_Fallout",
            trailer: "wb49-oV0F78",
            poster: "img/mission_impossible_fallout.jpg",
            genre: ["Action"]
        },
        {
            title: "Mobsters",
            id: 21219,
            overview: "The story of a group of friends in turn of the century New York, from their early days as street hoods to their rise in the world of organized crime...",
            runtime: "1 hr 44 mins",
            release_date: "July 26, 1991",
            wikipedia: "Mobsters",
            trailer: "IVRHM-BHd4A",
            poster: "img/mobsters.jpg",
            genre: ["Drama", "Action", "Thriller", "Crime"]
        },
        {
            title: "Modern Times",
            id: 3082,
            overview: "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
            runtime: "1 hr 27 mins",
            release_date: "February 5, 1936",
            wikipedia: "Modern_Times_(film)",
            trailer: "2B3HGY_zLKk",
            poster: "img/modern_times.jpg",
            genre: ["Drama", "Comedy"]
        },
        {
            title: "Moneyball",
            id: 60308,
            overview: "The story of Oakland Athletics general manager Billy Beane's successful attempt to put together a baseball team on a budget, by employing computer-generated analysis to draft his players.",
            runtime: "2 hrs 14 mins",
            release_date: "September 23, 2011",
            wikipedia: "Moneyball_(film)",
            trailer: "-4QPVo0UIzc",
            poster: "img/moneyball.jpg",
            genre: ["Drama"]
        },
        {
            title: "Moon",
            id: 17431,
            overview: "With only three weeks left in his three year contract, Sam Bell is getting anxious to finally return to Earth. He is the only occupant of a Moon-based manufacturing facility along with his computer and assistant, GERTY. The long period of time alone however has resulted in him talking to himself for the most part, or to his plants. Direct communication with Earth is not possible due to a long-standing communication malfunction but he does get an occasional message from his wife Tess. When he has an accident however, he wakens to find that he is not alone. He also comes to realize that his world is not what he thought it was.",
            runtime: "1 hr 37 mins",
            release_date: "June 12, 2009",
            wikipedia: "Moon_(film)",
            trailer: "twuScTcDP_Q",
            poster: "img/moon.jpg",
            genre: ["Science Fiction", "Drama"]
        },
        {
            title: "Mr. & Mrs. Smith",
            id: 787,
            overview: "After five (or six) years of vanilla-wedded bliss, ordinary suburbanites John and Jane Smith are stuck in a huge rut. Unbeknownst to each other, they are both coolly lethal, highly-paid assassins working for rival organisations. When they discover they're each other's next target, their secret lives collide in a spicy, explosive mix of wicked comedy, pent-up passion, nonstop action and high-tech weaponry.",
            runtime: "2 hrs 0 mins",
            release_date: "June 07, 2005",
            wikipedia: "Mr._%26_Mrs._Smith_(2005_film)",
            trailer: "TWB_icm5M38",
            poster: "img/mr_and_mrs_smith.jpg",
            genre: ["Action", "Comedy", "Drama", "Thriller"]
        },
        {
            title: "Mulan",
            id: 337401,
            overview: "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
            runtime: "1 hr 55 mins",
            release_date: "September 4, 2020",
            wikipedia: "Mulan_(2020_film)",
            trailer: "KK8FHdFluOQ",
            poster: "img/mulan.jpg",
            genre: ["Adventure", "Fantasy", "Drama"]
        },
        {
            title: "Munich",
            id: 612,
            overview: "During the 1972 Olympic Games in Munich, eleven Israeli athletes are taken hostage and murdered by a Palestinian terrorist group known as Black September. In retaliation, the Israeli government recruits a group of Mossad agents to track down and execute those responsible for the attack.",
            runtime: "2 hrs 44 mins",
            release_date: "December 23, 2005",
            wikipedia: "Munich_(2005_film)",
            trailer: "OuT_uh0CAf8",
            poster: "img/munich.jpg",
            genre: ["Drama", "Action", "History", "Thriller"]
        },
        {
            title: "My Cousin Vinny",
            id: 10377,
            overview: "Two carefree pals traveling through Alabama are mistakenly arrested, and charged with murder. Fortunately, one of them has a cousin who's a lawyer - Vincent Gambini, a former auto mechanic from Brooklyn who just passed his bar exam after his sixth try. When he arrives with his leather-clad girlfriend, to try his first case, it's a real shock - for him and the Deep South!",
            runtime: "2 hrs 0 mins",
            release_date: "March 13, 1992",
            wikipedia: "My_Cousin_Vinny",
            trailer: "SL4HdaZXuOw",
            poster: "img/my_cousin_vinny.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "Mystic River",
            id: 322,
            overview: "The lives of three men who were childhood friends are shattered when one of them has a family tragedy.",
            runtime: "2 hrs 18 mins",
            release_date: "October 7, 2003",
            wikipedia: "Mystic_River_(film)",
            trailer: "W7NktJhrRYQ",
            poster: "img/mystic_river.jpg",
            genre: ["Thriller", "Crime", "Drama", "Mystery"]
        },
        {
            title: "National Lampoon's Christmas Vacation",
            id: 5825,
            overview: "It's Christmastime, and the Griswolds are preparing for a family seasonal celebration. But things never run smoothly for Clark, his wife Ellen, and their two kids. Clark's continual bad luck is worsened by his obnoxious family guests, but he manages to keep going, knowing that his Christmas bonus is due soon.",
            runtime: "1 hr 37 mins",
            release_date: "December 1, 1989",
            wikipedia: "National_Lampoon%27s_Christmas_Vacation",
            trailer: "tLVd4ipC5Lc",
            poster: "img/national_lampoons_christmas_vacation.jpg",
            genre: ["Comedy"]
        },
        {
            title: "Natural Born Killers",
            id: 241,
            overview: "Two victims of traumatized childhoods become lovers and psychopathic serial murderers irresponsibly glorified by the mass media.",
            runtime: "1 hr 59 mins",
            release_date: "August 25, 1994",
            wikipedia: "Natural_Born_Killers",
            trailer: "XpLKNclOtLg",
            poster: "img/natural_born_killers.jpg",
            genre: ["Crime", "Thriller", "Drama"]
        },
        {
            title: "New Jack City",
            id: 10952,
            overview: "A gangster, Nino, is in the Cash Money Brothers, making a million dollars every week selling crack. A cop, Scotty, discovers that the only way to infiltrate the gang is to become a dealer himself.",
            runtime: "1 hr 37 mins",
            release_date: "March 8, 1991",
            wikipedia: "New_Jack_City",
            trailer: "pumf6m7d14w",
            poster: "img/new_jack_city.jpg",
            genre: ["Thriller", "Crime", "Drama"]
        },
        {
            title: "Nine 1/2 Weeks",
            id: 10068,
            overview: "An erotic story about a woman, the assistant of an art gallery, who gets involved in an impersonal affair with a man. She barely knows about his life, only about the sex games they play, so the relationship begins to get complicated.",
            runtime: "1 hr 57 mins",
            release_date: "February 14, 1986",
            wikipedia: "9½_Weeks",
            trailer: "F8PdMLKjAcQ",
            poster: "img/nine_half_weeks.jpg",
            genre: ["Drama", "Romance"]
        },
        {
            title: "No Country for Old Men",
            id: 6977,
            overview: "Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. The roles of prey and predator blur as the violent pursuit of money and justice collide.",
            runtime: "2 hrs 2 mins",
            release_date: "November 8, 2007",
            wikipedia: "No_Country_for_Old_Men_(film)",
            trailer: "38A__WT3-o0",
            poster: "img/no_country_for_old_men.jpg",
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            title: "North by Northwest",
            id: 213,
            overview: "Advertising man Roger Thornhill is mistaken for a spy, triggering a deadly cross-country chase.",
            runtime: "2 hrs 16 mins",
            release_date: "July 8, 1959",
            wikipedia: "North_by_Northwest",
            trailer: "Fx0QuZJVTFE",
            poster: "img/north_by_northwest.jpg",
            genre: ["Mystery", "Thriller"]
        },
        {
            title: "Nuclear Now",
            id: 1004685,
            overview: "With unprecedented access to the nuclear industry in France, Russia, and the United States, Nuclear Now explores the possibility for the global community to overcome the challenges of climate change and energy poverty to reach a brighter future through the power of nuclear energy. Beneath our feet, Uranium atoms in the Earth’s crust hold incredibly concentrated energy. Science unlocked this energy in the mid-20th century, first for bombs and then to power submarines. The United States led the effort to generate electricity from this new source. Yet in the mid-20th century as societies began the transition to nuclear power and away from fossil fuels, a long-term PR campaign to scare the public began, funded in part by coal and oil interests.",
            runtime: "1 hr 46 mins",
            release_date: "April 28, 2023",
            wikipedia: "Nuclear_Now",
            trailer: "4c5RPk8FlIk",
            poster: "img/nuclear_now.jpg",
            genre: ["Documentary"]
        },
        {
            title: "O Brother, Where Art Thou?",
            id: 134,
            overview: "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. On their journey they come across many comical characters and incredible situations. Based upon Homer's 'Odyssey'.",
            runtime: "1 hr 46 mins",
            release_date: "August 30, 2000",
            wikipedia: "O_Brother,_Where_Art_Thou%3F",
            trailer: "G7nNDKrTrag",
            poster: "img/o_brother_where_art_thou.jpg",
            genre: ["Action", "Adventure", "Comedy"]
        },
        {
            title: "Ocean's Eleven",
            id: 161,
            overview: "Less than 24 hours into his parole, charismatic thief Danny Ocean is already rolling out his next plan: In one night, Danny's hand-picked crew of specialists will attempt to steal more than $150 million from three Las Vegas casinos. But to score the cash, Danny risks his chances of reconciling with ex-wife, Tess.",
            runtime: "1 hr 56 mins",
            release_date: "December 07, 2001",
            wikipedia: "Ocean%27s_Eleven",
            trailer: "imm6OR605UI",
            poster: "img/oceans_11.jpg",
            genre: ["Thriller", "Crime"]
        },
        {
            title: "Ocean's Twelve",
            id: 163,
            overview: "Danny Ocean reunites with his old flame and the rest of his merry band of thieves in carrying out three huge heists in Rome, Paris and Amsterdam – but a Europol agent is hot on their heels.",
            runtime: "2 hrs 5 mins",
            release_date: "December 09, 2004",
            wikipedia: "Ocean%27s_Twelve",
            trailer: "YqcQv3dt_hY",
            poster: "img/oceans_12.jpg",
            genre: ["Thriller", "Crime"]
        },
        {
            title: "Ocean's Thirteen",
            id: 298,
            overview: "Danny Ocean's team of criminals are back and are composing a plan more personal than ever. When ruthless casino owner Willy Bank double-crosses Reuben Tishkoff, causing a heart attack, Danny Ocean vows that him and his team will do anything to bring Willy Bank and everything he's got down. Even if it includes hiring help from one of their own enemies, Terry Benedict.",
            runtime: "2 hrs 2 mins",
            release_date: "June 07, 2007",
            wikipedia: "Ocean%27s_Thirteen",
            trailer: "YsqZosCj-qw",
            poster: "img/oceans_13.jpg",
            genre: ["Crime", "Thriller"]
        },
        {
            title: "Office Space",
            id: 1542,
            overview: "Three office workers strike back at their evil employers by hatching a hapless attempt to embezzle money.",
            runtime: "1 hr 29 mins",
            release_date: "February 19, 1999",
            wikipedia: "Office_Space",
            trailer: "G_wiXgRWrIU",
            poster: "img/office_space.jpg",
            genre: ["Comedy", "Crime"]
        },
        {
            title: "Oldboy",
            id: 670,
            overview: "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate businessman seeks revenge on his captors.",
            runtime: "2 hrs 0 mins",
            release_date: "January 01, 2003",
            wikipedia: "Oldboy_(2003_film)",
            trailer: "w4UUGIIZxFU",
            poster: "img/oldboy.jpg",
            genre: ["Drama", "Thriller", "Mystery", "Action"]
        },
        {
            title: "On the Run Tour: Beyonce and Jay Z",
            id: 293187,
            overview: 'Beyonce and Jay Z perform live in Paris at Stade de France during their 2014 "On the Run Tour."',
            runtime: "2 hrs 35 mins",
            release_date: "September 20, 2014",
            wikipedia: "On_the_Run_Tour_(Beyoncé_and_Jay_Z)",
            trailer: "Hrbm36aGBKQ",
            poster: "img/on_the_run.jpg",
            genre: ["Documentary", "Music"]
        },
        {
            title: "Once Upon a Time… in Hollywood",
            id: 6463,
            overview: "Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…",
            runtime: "2 hrs 42 mins",
            release_date: "July 25, 2019",
            wikipedia: "Once_Upon_a_Time_in_Hollywood",
            trailer: "ELeMaP8EPAA",
            poster: "img/once_upon_a_time_in_hollywood.jpg",
            genre: ["Comedy", "Drama", "Thriller"]
        },
        {
            title: "Other People's Money",
            id: 6463,
            overview: 'A corporate raider threatens a hostile take-over of a "mom and pop" company. The patriarch of the company enlists the help of his wife\'s daughter, who is a lawyer, to try and protect the company. The raider is enamoured of her, and enjoys the thrust and parry of legal manoeuvring as he tries to win her heart. Written by Ed Sutton.',
            runtime: "1 hr 43 mins",
            release_date: "October 18, 1991",
            wikipedia: "Other_People%27s_Money",
            trailer: "oOTlqs_j4IE",
            poster: "img/other_peoples_money.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "Out of Sight",
            id: 1389,
            overview: "Meet Jack Foley, a smooth criminal who bends the law and is determined to make one last heist. Karen Sisco is a federal marshal who chooses all the right moves … and all the wrong guys. Now they're willing to risk it all to find out if there's more between them than just the law. Variety hails Out of Sight as \"a sly, sexy, vastly entertaining film.\"",
            runtime: "2 hrs 3 mins",
            release_date: "June 26, 1998",
            wikipedia: "Out_of_Sight",
            trailer: "A_GOrRyhABg",
            poster: "img/out_of_sight.jpg",
            genre: ["Romance", "Comedy", "Crime"]
        },
        {
            title: "Parasite",
            id: 496243,
            overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            runtime: "2 hrs 13 mins",
            release_date: "May 30, 2019",
            wikipedia: "Parasite_(2019_film)",
            trailer: "5xH0HfJHsaY",
            poster: "img/parasite.jpg",
            genre: ["Comedy", "Thriller", "Drama"]
        },
        {
            title: "Patton",
            id: 11202,
            overview: "\"Patton\" tells the tale of General George S. Patton, famous tank commander of World War II. The film begins with patton's career in North Africa and progresses through the invasion of Germany and the fall of the Third Reich. Side plots also speak of Patton's numerous faults such his temper and habit towards insubordination.",
            runtime: "2 hrs 52 mins",
            release_date: "January 25, 1970",
            wikipedia: "Patton_(film)",
            trailer: "EBaUt_g0tNU",
            poster: "img/patton.jpg",
            genre: ["Drama", "History", "War"]
        },
        {
            title: "Pirates",
            id: 00100,
            overview: "This electrifying, swashbuckling sex-adventure takes you on a humorous and mystical journey through haunted seas and deep into the abyss of our most lustful desires. The biggest epic in the history of adult films.",
            runtime: "2 hrs 9 mins",
            release_date: "September 26, 2005",
            wikipedia: "Pirates_(2005_film)",
            trailer: "",
            poster: "img/pirates.jpg",
            genre: ["Adventure", "Action", "Fantasy", "Adult"]
        },
        {
            title: "Pirates II: Stagnetti's Revenge",
            id: 00200,
            overview: "Pirate hunter Captain Edward Reynolds and his blond first mate, Jules Steel, return where they are recruited by a shady governor general to find a darkly sinister Chinese empress pirate, named Xifing, and her group of Arab cutthroats, whom are trying to resurrect the late Victor Stagnetti, the world's most feared pirate, from the grave to bring on world domination. When Jules is captured and enslaved by the Xifi hi must rely on his sword-fighting ally, Olivia, to take on the supernatural forces at work surrounding the lethal Xifing.",
            runtime: "2 hrs 18 mins",
            release_date: "September 27, 2008",
            wikipedia: "Pirates_II:_Stagnetti%27s_Revenge",
            trailer: "",
            poster: "img/pirates_II.jpg",
            genre: ["Adventure", "Action", "Fantasy", "Adult"]
        },
        {
            title: "Rise of the Planet of the Apes",
            id: 61791,
            overview: "Scientist Will Rodman is determined to find a cure for Alzheimer's, the disease which has slowly consumed his father. Will feels certain he is close to a breakthrough and tests his latest serum on apes, noticing dramatic increases in intelligence and brain activity in the primate subjects – especially Caesar, his pet chimpanzee.",
            runtime: "1 hr 45 mins",
            release_date: "August 03, 2011",
            wikipedia: "Rise_of_the_Planet_of_the_Apes",
            trailer: "EbCoDf44oCE",
            poster: "img/rise_of_the_planet_of_the_apes.jpg",
            genre: ["Science Fiction", "Action", "Drama", "Thriller"]
        },
        {
            title: "Dawn of the Planet of the Apes",
            id: 119450,
            overview: "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
            runtime: "2 hrs 10 mins",
            release_date: "June 26, 2014",
            wikipedia: "Dawn_of_the_Planet_of_the_Apes",
            trailer: "3sHMCRaS3ao",
            poster: "img/dawn_of_the_planet_of_the_apes.jpg",
            genre: ["Science Fiction", "Action", "Drama", "Thriller"]
        },
        {
            title: "War for the Planet of the Apes",
            id: 281338,
            overview: "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.",
            runtime: "2 hrs 20 mins",
            release_date: "July 11, 2017",
            wikipedia: "War_for_the_Planet_of_the_Apes",
            trailer: "qxjPjPzQ1iU",
            poster: "img/war_for_the_planet_of_the_apes.jpg",
            genre: ["Drama", "Science Fiction", "War"]
        },
        {
            title: "Pleasantville",
            id: 2657,
            overview: "Geeky teenager David and his popular twin sister, Jennifer, get sucked into the black-and-white world of a 1950s TV sitcom called \"Pleasantville,\" and find a world where everything is peachy keen all the time. But when Jennifer's modern attitude disrupts Pleasantville's peaceful but boring routine, she literally brings color into its life.",
            runtime: "2 hrs 4 mins",
            release_date: "September 17, 1998",
            wikipedia: "Pleasantville_(film)",
            trailer: "v9EHRObUQqY",
            poster: "img/pleasantville.jpg",
            genre: ["Fantasy", "Drama", "Comedy"]
        },
        {
            title: "Point Break",
            id: 1089,
            overview: "In Los Angeles, a gang of bank robbers call themselves The Ex-Presidents commit their crimes while wearing masks of Reagan, Carter, Nixon and Johnson. The F.B.I. believes that the members of the gang could be surfers and send young agent Johnny Utah undercover at the beach to mix with the surfers and gather information.",
            runtime: "2 hrs 0 mins",
            release_date: "January 31, 1991",
            wikipedia: "Point_Break",
            trailer: "jcDD2-s4vWA",
            poster: "img/point_break.jpg",
            genre: ["Action", "Thriller", "Crime"]
        },
        {
            title: "Popstar: Never Stop Never Stopping",
            id: 341012,
            overview: "When his new album fails to sell records, pop/rap superstar Conner4real goes into a major tailspin and watches his celebrity high life begin to collapse. He'll try anything to bounce back, anything except reuniting with his old rap group The Style Boyz.",
            runtime: "1 hr 26 mins",
            release_date: "June 3, 2016",
            wikipedia: "Popstar:_Never_Stop_Never_Stopping",
            trailer: "Qnj9Dvl2fQE",
            poster: "img/popstar.jpg",
            genre: ["Comedy", "Music"]
        },
        {
            title: "Predator",
            id: 106,
            overview: "Dutch and his group of commandos are hired by the CIA to rescue downed airmen from guerillas in a Central American jungle. The mission goes well but as they return they find that something is hunting them. Nearly invisible, it blends in with the forest, taking trophies from the bodies of its victims as it goes along. Occasionally seeing through its eyes, the audience sees it is an intelligent alien hunter, hunting them for sport, killing them off one at a time.",
            runtime: "1 hr 47 mins",
            release_date: "June 11, 1987",
            wikipedia: "Predator_(film)",
            trailer: "K9AT3tQGbIk",
            poster: "img/predator.jpg",
            genre: ["Science Fiction", "Action", "Adventure", "Thriller"]
        },
        {
            title: "Predestination",
            id: 206487,
            overview: "Predestination chronicles the life of a Temporal Agent sent on an intricate series of time-travel journeys designed to prevent future killers from committing their crimes. Now, on his final assignment, the Agent must stop the one criminal that has eluded him throughout time and prevent a devastating attack in which thousands of lives will be lost.",
            runtime: "1 hr 37 mins",
            release_date: "August 28, 2014",
            wikipedia: "Predestination_(film)",
            trailer: "NfFO_ebkuKU",
            poster: "img/predestination.jpg",
            genre: ["Science Fiction", "Thriller"]
        },
        {
            title: "Primer",
            id: 14337,
            overview: "Friends/fledgling entrepreneurs invent a device in their garage that reduces the apparent mass of any object placed inside it, but they accidentally discover that it has some highly unexpected capabilities -- ones that could enable them to do and to have seemingly anything they want. Taking advantage of this unique opportunity is the first challenge they face. Dealing with the consequences is the next.",
            runtime: "1 hr 17 mins",
            release_date: "October 08, 2004",
            wikipedia: "Primer_(film)",
            trailer: "fqx32xkATrY",
            poster: "img/primer.jpg",
            genre: ["Science Fiction", "Drama", "Thriller"]
        },
        {
            title: "Prometheus",
            id: 70981,
            overview: "A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.",
            runtime: "2 hrs 4 mins",
            release_date: "May 30, 2012",
            wikipedia: "Prometheus_(2012_film)",
            trailer: "HHcHYisZFLU",
            poster: "img/prometheus.jpg",
            genre: ["Science Fiction", "Adventure", "Mystery"]
        },
        {
            title: "Promising Young Woman",
            id: 582014,
            overview: "A young woman, traumatized by a tragic event in her past, seeks out vengeance against those who crossed her path.",
            runtime: "1 hr 54 mins",
            release_date: "December 25, 2020",
            wikipedia: "Promising_Young_Woman",
            trailer: "7i5kiFDunk8",
            poster: "img/promising_young_woman.jpg",
            genre: ["Thriller", "Crime", "Drama"]
        },
        {
            title: "Public Enemies",
            id: 11322,
            overview: "Depression-era bank robber John Dillinger's charm and audacity endear him to much of America's downtrodden public, but he's also a thorn in the side of J. Edgar Hoover and the fledgling FBI. Desperate to capture the elusive outlaw, Hoover makes Dillinger his first Public Enemy Number One and assigns his top agent, Melvin Purvis, the task of bringing him in dead or alive.",
            runtime: "2 hrs 20 mins",
            release_date: "July 01, 2009",
            wikipedia: "Public_Enemies_(2009_film)",
            trailer: "Ee92mDZu_PI",
            poster: "img/public_enemies.jpg",
            genre: ["History", "Crime", "Drama"]
        },
        {
            title: "Pulp Fiction",
            id: 680,
            overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
            runtime: "2 hrs 34 mins",
            release_date: "October 08, 1994",
            wikipedia: "Pulp_Fiction",
            trailer: "s7EdQ4FqbhY",
            poster: "img/pulp_fiction.jpg",
            genre: ["Thriller", "Crime"]
        },
        {
            title: "Pumping Iron",
            id: 5205,
            overview: "Pumping Iron is a 1977 documentary film about the run-up to the 1975 Mr. Olympia bodybuilding competition. The film focuses on Arnold Schwarzenegger and his competitors, Lou Ferrigno and Franco Columbu. The documentary was co-directed by Robert Fiore and George Butler. It was based on the book of the same name by Charles Gaines and George Butler (Simon and Schuster, 1974).",
            runtime: "1 hr 25 mins",
            release_date: "January 18, 1977",
            wikipedia: "Pumping_Iron",
            trailer: "e1vprTwGQ4M",
            poster: "img/pumping_iron.jpg",
            genre: ["Documentary"]
        },
        {
            title: "Ralph Breaks the Internet",
            id: 404368,
            overview: 'Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope\'s video game, "Sugar Rush." In way over their heads, Ralph and Vanellope rely on the citizens of the internet -- the netizens -- to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.',
            runtime: "1 hr 52 mins",
            release_date: "November 20, 2018",
            wikipedia: "Ralph_Breaks_the_Internet",
            trailer: "_BcYBFC6zfY",
            poster: "img/ralph_breaks_the_internet.jpg",
            genre: ["Family", "Animation", "Comedy", "Fantasy"]
        },
        {
            title: "Ready Player One",
            id: 333339,
            overview: "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
            runtime: "2 hrs 20 mins",
            release_date: "March 29, 2018",
            wikipedia: "Ready_Player_One_(film)",
            trailer: "1hrwbc5qCZ4",
            poster: "img/ready_player_one.jpg",
            genre: ["Adventure", "Action", "Science Fiction"]
        },
        {
            title: "Requiem For A Dream",
            id: 641,
            overview: "The hopes and dreams of four ambitious people are shattered when their drug addictions begin spiraling out of control. A look into addiction and how it overcomes the mind and body.",
            runtime: "1 hr 42 mins",
            release_date: "October 27, 2000",
            wikipedia: "Requiem_for_a_Dream",
            trailer: "WvfUkvl51t8",
            poster: "img/requiem_for_a_dream.jpg",
            genre: ["Drama"]
        },
        {
            title: "Reservoir Dogs",
            id: 500,
            overview: "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
            runtime: "1 hr 39 mins",
            release_date: "June 25, 1992",
            wikipedia: "Reservoir_Dogs",
            trailer: "NWEPVQnR42c",
            poster: "img/reservoir_dogs.jpg",
            genre: ["Crime", "Thriller"]
        },
        {
            title: "Revealing Ukraine",
            id: 616914,
            overview: '"Revealing Ukraine" by Igor Lopatonok continues investigations on of the ongoing Ukrainian crisis following "Ukraine on Fire". In addition, it analyzes the current political backstage and its dangerous potential for the world.',
            runtime: "1 hr 33 mins",
            release_date: "July 4, 2019",
            wikipedia: "Igor_Lopatonok",
            trailer: "xq_hlbmjnQc",
            poster: "img/revealing_ukraine.jpg",
            genre: ["Documentary"]
        },
        {
            title: "Road to Perdition",
            id: 4147,
            overview: "Mike Sullivan works as a hit man for crime boss John Rooney. Sullivan views Rooney as a father figure, however after his son is witness to a killing, Mike Sullivan finds himself on the run in attempt to save the life of his son and at the same time looking for revenge on those who wronged him.",
            runtime: "1 hr 57 mins",
            release_date: "July 12, 2002",
            wikipedia: "Road_to_Perdition",
            trailer: "atCI995PnA4",
            poster: "img/road_to_perdition.jpg",
            genre: ["Thriller", "Crime", "Drama"]
        },
        {
            title: "Romeo + Juliet",
            id: 454,
            overview: "In director Baz Luhrmann's contemporary take on William Shakespeare's classic tragedy, the Montagues and Capulets have moved their ongoing feud to the sweltering suburb of Verona Beach, where Romeo and Juliet fall in love and secretly wed. Though the film is visually modern, the bard's dialogue remains.",
            runtime: "2 hrs 0 mins",
            release_date: "October 31, 1996",
            wikipedia: "Romeo_%2B_Juliet",
            trailer: "4VBsi0VxiLg",
            poster: "img/romeo_and_juliet.jpg",
            genre: ["Drama", "Romance"]
        },
        {
            title: "Savages",
            id: 82525,
            overview: "Pot growers Ben and Chon face off against the Mexican drug cartel who kidnapped their shared girlfriend.",
            runtime: "2 hrs 11 mins",
            release_date: "July 06, 2012",
            wikipedia: "Savages_(2012_film)",
            trailer: "8imzQaoEwsA",
            poster: "img/savages.jpg",
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            title: "Saving Private Ryan",
            id: 857,
            overview: "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
            runtime: "2 hrs 49 mins",
            release_date: "July 24, 1998",
            wikipedia: "Saving_Private_Ryan",
            trailer: "9CiW_DgxCnQ",
            poster: "img/saving_private_ryan.jpg",
            genre: ["Drama", "History", "War"]
        },
        {
            title: "Scarface",
            id: 111,
            overview: "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
            runtime: "2 hrs 50 mins",
            release_date: "December 08, 1983",
            wikipedia: "Scarface_(1983_film)",
            trailer: "Q5kUTf-HBsE",
            poster: "img/scarface.jpg",
            genre: ["Action", "Crime", "Drama", "Thriller"]
        },
        {
            title: "Scent of a Woman",
            id: 9475,
            overview: "Charlie Simms (Chris O'Donnell) is a student at a private preparatory school who comes from a poor family. To earn the money for his flight home to Gresham, Oregon for Christmas, Charlie takes a job over Thanksgiving looking after retired U.S. Army officer Lieutenant Colonel Frank Slade (Al Pacino), a cantankerous middle-aged man who lives with his niece and her family.",
            runtime: "2 hrs 37 mins",
            release_date: "December 23, 1992",
            wikipedia: "Scent_of_a_Woman_(1992_film)",
            trailer: "EaDz45LF9MM",
            poster: "img/scent_of_a_woman.jpg",
            genre: ["Drama"]
        },
        {
            title: "Se7en",
            id: 807,
            overview: 'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
            runtime: "2 hrs 7 mins",
            release_date: "September 22, 1995",
            wikipedia: "Seven_(1995_film)",
            trailer: "SpKbZ_3zlb0",
            poster: "img/seven.jpg",
            genre: ["Crime", "Mystery", "Thriller"]
        },
        {
            title: "Searching",
            id: 489999,
            overview: "After David Kim's 16-year-old daughter goes missing, a local investigation is opened and a detective is assigned to the case. But 37 hours later and without a single lead, David decides to search the one place no one has looked yet, where all secrets are kept today: his daughter's laptop.",
            runtime: "1 hr 43 mins",
            release_date: "August 24, 2018",
            wikipedia: "Searching_(film)",
            trailer: "3Ro9ebQxEOY",
            poster: "img/searching.jpg",
            genre: ["Thriller", "Mystery", "Drama"]
        },
        {
            title: "Secretary",
            id: 11013,
            overview: "A young woman, recently released from a mental hospital, gets a job as a secretary to a demanding lawyer, where their employer-employee relationship turns into a sexual, sadomasochistic one.",
            runtime: "1 hr 44 mins",
            release_date: "January 11, 2002",
            wikipedia: "Secretary_(2002_film)",
            trailer: "AFma24S-Uvw",
            poster: "img/secretary.jpg",
            genre: ["Comedy", "Drama", "Romance"]
        },
        {
            title: "Seven Samurai",
            id: 346,
            overview: "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. A giant battle occurs when 40 bandits attack the village.",
            runtime: "3 hrs 27 mins",
            release_date: "April 26, 1954",
            wikipedia: "Seven_Samurai",
            trailer: "7mw6LyyoeGE",
            poster: "img/seven_samurai.jpg",
            genre: ["Action", "Drama"]
        },
        {
            title: "Shazam! Fury of the Gods",
            id: 594767,
            overview: "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
            runtime: "2 hrs 10 mins",
            release_date: "March 17, 2023",
            wikipedia: "Shazam!_Fury_of_the_Gods",
            trailer: "Zi88i4CpHe4",
            poster: "img/shazam!_2.jpg",
            genre: ["Comedy", "Action", "Fantasy"]
        },
        {
            title: "Shot Caller",
            id: 339692,
            overview: "A newly released prison gangster is forced by the leaders of his gang to orchestrate a major crime with a brutal rival gang on the streets of Southern California.",
            runtime: "2 hrs 1 mins",
            release_date: "July 13, 2017",
            wikipedia: "Shot_Caller_(film)",
            trailer: "QQxjyRr9k2E",
            poster: "img/shot_caller.jpg",
            genre: ["Drama", "Crime", "Thriller"]
        },
        {
            title: "Showgirls",
            id: 10802,
            overview: "A young drifter named Nomi arrives in Las Vegas to become a dancer. When she catches the eye of Cristal, the main attraction at the Stardust stage show, Nomi is on the brink of realizing her dreams. But as she bumps and grinds her way to the top, Nomi realizes that there is only room for one starlet on the marquee... and that either she or Cristal will have to take a fall!",
            runtime: "2 hrs 11 mins",
            release_date: "September 22, 1995",
            wikipedia: "Showgirls",
            trailer: "PJpPuA7nsGM",
            poster: "img/showgirls.jpg",
            genre: ["Drama"]
        },
        {
            title: "Sicario",
            id: 273481,
            overview: "A young female FBI agent joins a secret CIA operation to take down a Mexican cartel boss, a job that ends up pushing her ethical and moral values to the limit.",
            runtime: "2 hrs 1 mins",
            release_date: "September 17, 2015",
            wikipedia: "Sicario_(2015_film)",
            trailer: "7XLQ1bkSLDo",
            poster: "img/sicario.jpg",
            genre: ["Action", "Crime", "Drama", "Mystery", "Thriller"]
        },
        {
            title: "Sisu",
            id: 840326,
            overview: "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
            runtime: "1 hr 31 mins",
            release_date: "April 28, 2023",
            wikipedia: "Sisu_(film)",
            trailer: "d2k4QAItiSA",
            poster: "img/sisu.jpg",
            genre: ["Action", "War", "Western"]
        },
        {
            title: "Sleepless in Seattle",
            id: 858,
            overview: "When Sam Baldwin's wife dies, he is left to bring up his eight-year-old son Jonah alone, and decides to move to Seattle to make a new start. On Christmas Eve, Jonah rings a radio phone-in with his Christmas wish to find a new wife for his dad. Meanwhile in Baltimore, journalist Annie Reed, who is having doubts about her own relationship, is listening in.",
            runtime: "1 hr 45 mins",
            release_date: "June 24, 1993",
            wikipedia: "Sleepless_in_Seattle",
            trailer: "-Lj2U-cmyek",
            poster: "img/sleepless_in_seattle.jpg",
            genre: ["Comedy", "Drama", "Romance"]
        },
        {
            title: "Snowden",
            id: 302401,
            overview: "CIA employee Edward Snowden leaks thousands of classified documents to the press.",
            runtime: "2 hrs 14 mins",
            release_date: "September 15, 2016",
            wikipedia: "Snowden_(film)",
            trailer: "QlSAiI3xMh4",
            poster: "img/snowden.jpg",
            genre: ["Drama", "Thriller"]
        },
        {
            title: "Solo: A Star Wars Story",
            id: 348350,
            overview: "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
            runtime: "2 hrs 15 mins",
            release_date: "May 15, 2018",
            wikipedia: "Solo:_A_Star_Wars_Story",
            trailer: "jPEYpryMp2s",
            poster: "img/solo_a_star_wars_story.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Soul",
            id: 508442,
            overview: "Joe Gardner is a middle school teacher with a love for jazz music. After a successful audition at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
            runtime: "1 hr 41 mins",
            release_date: "December 25, 2020",
            wikipedia: "Soul_(2020_film0",
            trailer: "xOsLIiBStEs",
            poster: "img/soul.jpg",
            genre: ["Animation", "Comedy", "Fantasy", "Family"]
        },
        {
            title: "Source Code",
            id: 45612,
            overview: "Decorated soldier Captain Colter Stevens wakes up in the body of an unknown man, discovering he's involved in a mission to find the bomber of a Chicago commuter train. He learns he's part of a top-secret experimental program that enables him to experience the final 8 minutes of another person's life. Colter re-lives the train incident over and over again, gathering more clues each time. But can he discover who is responsible for the attack before the next one happens?",
            runtime: "1 hr 33 mins",
            release_date: "March 30, 2011",
            wikipedia: "Source_Code",
            trailer: "NkTrG-gpIzE",
            poster: "img/source_code.jpg",
            genre: ["Thriller", "Science Fiction", "Mystery"]
        },
        {
            title: "South Park: Bigger, Longer & Uncut",
            id: 9473,
            overview: 'When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced "corrupted", and their parents pressure the United States to wage war against Canada.',
            runtime: "1 hr 21 mins",
            release_date: "June 30, 1999",
            wikipedia: "South_Park:_Bigger,_Longer_%26_Uncut",
            trailer: "PbMl6DjhJ1I",
            poster: "img/south_park_bigger_longer_and_uncut.jpg",
            genre: ["Animation", "Comedy", "Music"]
        },
        {
            title: "Space Jam",
            id: 2300,
            overview: "Swackhammer, an evil alien theme park owner, needs a new attraction at Moron Mountain. When his gang, the Nerdlucks, heads to Earth to kidnap Bugs Bunny and the Looney Tunes, Bugs challenges them to a basketball game to determine their fate. The aliens agree, but they steal the powers of NBA basketball players, including Larry Bird and Charles Barkley -- so Bugs gets some help from superstar Michael Jordan.",
            runtime: "1 hr 28 mins",
            release_date: "November 15, 1996",
            wikipedia: "Space_Jam",
            trailer: "oKNy-MWjkcU",
            poster: "img/space_jam.jpg",
            genre: ["Animation", "Comedy", "Family"]
        },
        {
            title: "Spaceballs",
            id: 957,
            overview: 'When the nefarious Dark Helmet hatches a plan to snatch Princess Vespa and steal her planet\'s air, space-bum-for-hire Lone Starr and his clueless sidekick fly to the rescue. Along the way, they meet Yogurt, who puts Lone Starr wise to the power of "The Schwartz." Can he master it in time to save the day?',
            runtime: "1 hr 36 mins",
            release_date: "June 24, 1987",
            wikipedia: "Spaceballs",
            trailer: "kGIM_yNzeUo",
            poster: "img/spaceballs.jpg",
            genre: ["Comedy", "Science Fiction"]
        },
        {
            title: "Spaced Invaders",
            id: 34086,
            overview: "A crew of Martians overhears a radio broadcast of Orson Welles' \"War of the Worlds\" coming from Earth, and, thinking the Martian fleet is attacking Earth, they land their broken-down ship in a backwater mid-American town. As luck would have it, they land on Halloween and get mistaken for trick-or-treaters. Comedy ensues as the Martians try to get taken seriously.",
            runtime: "1 hr 40 mins",
            release_date: "April 27, 1990",
            wikipedia: "Spaced_Invaders",
            trailer: "pK9hWU_7DNk",
            poster: "img/spaced_invaders.jpg",
            genre: ["Comedy", "Family", "Science Fiction"]
        },
        {
            title: "Speed",
            id: 1637,
            overview: "Los Angeles SWAT cop Jack Traven is up against bomb expert Howard Payne, who's after major ransom money. First it's a rigged elevator in a very tall building. Then it's a rigged bus--if it slows, it will blow, bad enough any day, but a nightmare in LA traffic. And that's still not the end.",
            runtime: "1 hr 56 mins",
            release_date: "June 9, 1994",
            wikipedia: "Speed_(1994_film)",
            trailer: "8piqd2BWeGI",
            poster: "img/speed.jpg",
            genre: ["Action", "Adventure", "Crime"]
        },
        {
            title: "Spirited Away",
            id: 129,
            overview: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
            runtime: "2 hrs 5 mins",
            release_date: "July 20, 2001",
            wikipedia: "Spirited_Away",
            trailer: "ByXuk9QqQkk",
            poster: "img/spirited_away.jpg",
            genre: ["Animation", "Family", "Fantasy"]
        },
        {
            title: "Spring Breakers",
            id: 122081,
            overview: "After four college girls rob a restaurant to fund their spring break in Florida, they get entangled with a weird dude with his own criminal agenda.",
            runtime: "1 hr 34 mins",
            release_date: "January 24, 2013",
            wikipedia: "Spring_Breakers",
            trailer: "imDML4om8z8",
            poster: "img/spring_breakers.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "Star Trek: The Motion Picture",
            id: 152,
            overview: "When a destructive space entity is spotted approaching Earth, Admiral Kirk resumes command of the Starship Enterprise in order to intercept, examine, and hopefully stop it.",
            runtime: "2 hrs 12 mins",
            release_date: "December 06, 1979",
            wikipedia: "Star_Trek:_The_Motion_Picture",
            trailer: "3nkegWQe1ZM",
            poster: "img/star_trek_the_motion_picture.jpg",
            genre: ["Science Fiction", "Adventure", "Mystery"]
        },
        {
            title: "Star Trek II: The Wrath of Khan",
            id: 154,
            overview: "Admiral James T. Kirk is feeling old; the prospect of accompanying his old ship the Enterprise on a two week cadet cruise is not making him feel any younger. But the training cruise becomes a a life or death struggle when Khan escapes from years of exile and captures the power of creation itself.",
            runtime: "1 hr 53 mins",
            release_date: "June 03, 1982",
            wikipedia: "Star_Trek_II:_The_Wrath_of_Khan",
            trailer: "vOIYaRb6XpQ",
            poster: "img/star_trek_II.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Thriller"]
        },
        {
            title: "Star Trek III: The Search for Spock",
            id: 157,
            overview: "Admiral Kirk and his bridge crew risk their careers stealing the decommissioned Enterprise to return to the restricted Genesis planet to recover Spock's body.",
            runtime: "1 hr 45 mins",
            release_date: "May 31, 1984",
            wikipedia: "Star_Trek_III:_The_Search_for_Spock",
            trailer: "4wzG1u4zStM",
            poster: "img/star_trek_III.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Thriller"]
        },
        {
            title: "Star Trek IV: The Voyage Home",
            id: 168,
            overview: "Fugitives of the Federation for their daring rescue of Spock from the doomed Genesis Planet, Admiral Kirk (William Shatner) and his crew begin their journey home to face justice for their actions. But as they near Earth, they find it at the mercy of a mysterious alien presence whose signals are slowly destroying the planet. In a desperate attempt to answer the call of the probe, Kirk and his crew race back to the late twentieth century. However they soon find the world they once knew to be more alien than anything they've encountered in the far reaches of the galaxy!",
            runtime: "1 hr 59 mins",
            release_date: "November 25, 1986",
            wikipedia: "Star_Trek_IV:_The_Voyage_Home",
            trailer: "VW7neKZFKE0",
            poster: "img/star_trek_IV.jpg",
            genre: ["Adventure", "Science Fiction"]
        },
        {
            title: "Star Trek V: The Final Frontier",
            id: 172,
            overview: "Capt. Kirk and his crew must deal with Mr. Spock's half brother who kidnaps three diplomats and hijacks the Enterprise in his obsessive search for God.",
            runtime: "1 hr 47 mins",
            release_date: "June 09, 1989",
            wikipedia: "Star_Trek_V:_The_Final_Frontier",
            trailer: "1SRHdflGz_A",
            poster: "img/star_trek_V.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Thriller"]
        },
        {
            title: "Star Trek VI: The Undiscovered Country",
            id: 174,
            overview: "On the eve of retirement, Kirk and McCoy are charged with assassinating the Klingon High Chancellor and imprisoned. The Enterprise crew must help them escape to thwart a conspiracy aimed at sabotaging the last best hope for peace.",
            runtime: "1 hr 53 mins",
            release_date: "December 05, 1991",
            wikipedia: "Star_Trek_VI:_The_Undiscovered_Country",
            trailer: "qCcf9FBsNVo",
            poster: "img/star_trek_VI.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Thriller"]
        },
        {
            title: "Star Trek: Generations",
            id: 193,
            overview: "Captain Jean-Luc Picard and the crew of the Enterprise-D find themselves at odds with the renegade scientist Soran who is destroying entire star systems. Only one man can help Picard stop Soran's scheme...and he's been dead for seventy-eight years.",
            runtime: "1 hr 58 mins",
            release_date: "November 17, 1994",
            wikipedia: "Star_Trek_Generations",
            trailer: "MUieGh1fHSI",
            poster: "img/star_trek_generations.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Thriller"]
        },
        {
            title: "Star Trek: First Contact",
            id: 199,
            overview: "The Borg, a relentless race of cyborgs, are on a direct course for Earth. Violating orders to stay away from the battle, Captain Picard and the crew of the newly-commissioned USS Enterprise E pursue the Borg back in time to prevent the invaders from changing Federation history and assimilating the galaxy.",
            runtime: "1 hr 51 mins",
            release_date: "November 21, 1996",
            wikipedia: "Star_Trek:_First_Contact",
            trailer: "YQ1eiEvefKI",
            poster: "img/star_trek_first_contact.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Thriller"]
        },
        {
            title: "Star Trek: Insurrection",
            id: 200,
            overview: 'When an alien race and factions within Starfleet attempt to take over a planet that has "regenerative" properties, it falls upon Captain Picard and the crew of the Enterprise to defend the planet\'s people as well as the very ideals upon which the Federation itself was founded.',
            runtime: "1 hr 43 mins",
            release_date: "December 10, 1998",
            wikipedia: "Star_Trek:_Insurrection",
            trailer: "N1XmtdMZdL8",
            poster: "img/star_trek_insurrection.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Thriller"]
        },
        {
            title: "Star Trek: Nemesis",
            id: 201,
            overview: "En route to the honeymoon of William Riker to Deanna Troi on her home planet of Betazed, Captain Jean-Luc Picard and the crew of the U.S.S. Enterprise receives word from Starfleet that a coup has resulted in the installation of a new Romulan political leader, Shinzon, who claims to seek peace with the human-backed United Federation of Planets. Once in enemy territory, the captain and his crew make a startling discovery: Shinzon is human, a slave from the Romulan sister planet of Remus, and has a secret, shocking relationship to Picard himself.",
            runtime: "1 hr 57 mins",
            release_date: "December 13, 2002",
            wikipedia: "Star_Trek:_Nemesis",
            trailer: "KFUjGFpW7OI",
            poster: "img/star_trek_nemesis.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Thriller"]
        },
        {
            title: "Star Trek",
            id: 13475,
            overview: "The fate of the galaxy rests in the hands of bitter rivals. One, James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The other, Spock, a Vulcan, was raised in a logic-based society that rejects all emotion. As fiery instinct clashes with calm reason, their unlikely but powerful partnership is the only thing capable of leading their crew through unimaginable danger, boldly going where no one has gone before. The human adventure has begun again.",
            runtime: "2 hrs 7 mins",
            release_date: "May 06, 2009",
            wikipedia: "Star_Trek_(film)",
            trailer: "pKFUZ10Wmbw",
            poster: "img/star_trek.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Star Trek Into Darkness",
            id: 54138,
            overview: "When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis. With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction. As our heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.",
            runtime: "2 hrs 12 mins",
            release_date: "May 05, 2013",
            wikipedia: "Star_Trek_Into_Darkness",
            trailer: "mdgRx94W5ko",
            poster: "img/star_trek_into_darkness.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Star Trek Beyond",
            id: 188927,
            overview: "The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test.",
            runtime: "2 hrs 2 mins",
            release_date: "July 07, 2016",
            wikipedia: "Star_Trek_Beyond",
            trailer: "XRVD32rnzOw",
            poster: "img/star_trek_beyond.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Star Wars: Episode I - The Phantom Menace",
            id: 1893,
            overview: "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
            runtime: "2 hrs 16 mins",
            release_date: "May 19, 1999",
            wikipedia: "Star_Wars:_Episode_I_–_The_Phantom_Menace",
            trailer: "qJZ846YkK78",
            poster: "img/star_wars_1.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Star Wars: Episode II - Attack of the Clones",
            id: 1894,
            overview: "Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.",
            runtime: "2 hrs 22 mins",
            release_date: "May 15, 2002",
            wikipedia: "Star_Wars:_Episode_II_–_Attack_of_the_Clones",
            trailer: "CO2OLQ2kiq8",
            poster: "img/star_wars_2.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Star Wars: Episode III - Revenge of the Sith",
            id: 1895,
            overview: "Years after the onset of the Clone Wars, the noble Jedi Knights lead a massive clone army into a galaxy-wide battle against the Separatists. When the sinister Sith unveil a thousand-year-old plot to rule the galaxy, the Republic crumbles and from its ashes rises the evil Galactic Empire. Jedi hero Anakin Skywalker is seduced by the dark side of the Force to become the Emperor's new apprentice – Darth Vader. The Jedi are decimated, as Obi-Wan Kenobi and Jedi Master Yoda are forced into hiding. The only hope for the galaxy are Anakin's own offspring – the twin children born in secrecy who will grow up to become heroes.",
            runtime: "2 hrs 20 mins",
            release_date: "May 17, 2005",
            wikipedia: "Star_Wars:_Episode_III_–_Revenge_of_the_Sith",
            trailer: "5UnjrG_N8hU",
            poster: "img/star_wars_3.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Star Wars",
            id: 11,
            overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
            runtime: "2 hrs 1 mins",
            release_date: "May 25, 1977",
            wikipedia: "Star_Wars_(film)",
            trailer: "oVxcQQXXxGQ",
            poster: "img/star_wars_4.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "The Empire Strikes Back",
            id: 1891,
            overview: "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
            runtime: "2 hrs 4 mins",
            release_date: "May 17, 1980",
            wikipedia: "The_Empire_Strikes_Back",
            trailer: "mrCCSN3LkUI",
            poster: "img/star_wars_5.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Return of the Jedi",
            id: 1892,
            overview: "As Rebel leaders map their strategy for an all-out attack on the Emperor's newer, bigger Death Star. Han Solo remains frozen in the cavernous desert fortress of Jabba the Hutt, the most loathsome outlaw in the universe, who is also keeping Princess Leia as a slave girl. Now a master of the Force, Luke Skywalker rescues his friends, but he cannot become a true Jedi Knight until he wages his own crucial battle against Darth Vader, who has sworn to win Luke over to the dark side of the Force.",
            runtime: "2 hrs 15 mins",
            release_date: "May 23, 1983",
            wikipedia: "Return_of_the_Jedi",
            trailer: "3Ocn-_ZCPSg",
            poster: "img/star_wars_6.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Star Wars: The Force Awakens",
            id: 140607,
            overview: "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
            runtime: "2 hrs 16 mins",
            release_date: "December 15, 2015",
            wikipedia: "Star_Wars:_The_Force_Awakens",
            trailer: "sGbxmsDFVnE",
            poster: "img/star_wars_7.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Fantasy"]
        },
        {
            title: "Star Wars: The Last Jedi",
            id: 181808,
            overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
            runtime: "2 hrs 32 mins",
            release_date: "December 13, 2017",
            wikipedia: "Star_Wars%3A_The_Last_Jedi",
            trailer: "Q0CbN8sfihY",
            poster: "img/star_wars_8.jpg",
            genre: ["Action", "Fantasy", "Adventure", "Science Fiction"]
        },
        {
            title: "Star Wars: The Rise of Skywalker",
            id: 181812,
            overview: "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
            runtime: "2 hrs 22 mins",
            release_date: "December 18, 2019",
            wikipedia: "Star_Wars:_The_Rise_of_Skywalker",
            trailer: "8Qn_spdM5Zg",
            poster: "img/star_wars_9.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Straight Outta Compton",
            id: 277216,
            overview: "In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music. Taking us back to where it all began, Straight Outta Compton tells the true story of how these cultural rebels—armed only with their lyrics, swagger, bravado and raw talent—stood up to the authorities that meant to keep them down and formed the world’s most dangerous group, N.W.A. And as they spoke the truth that no one had before and exposed life in the hood, their voice ignited a social revolution that is still reverberating today.",
            runtime: "2 hrs 27 mins",
            release_date: "August 13, 2015",
            wikipedia: "Straight_Outta_Compton_(film)",
            trailer: "-F5WcFPDzko",
            poster: "img/straight_outta_compton.jpg",
            genre: ["Drama", "Music"]
        },
        {
            title: "Stranger by the Lake (L'Inconnu du lac)",
            id: 186992,
            overview: "Summertime. A cruising spot for men, tucked away on the shores of a lake. Franck falls in love with Michel, an attractive, potent and lethally dangerous man. Franck knows this but wants to live out his passion anyway.",
            runtime: "1 hr 37 mins",
            release_date: "December 20, 2013",
            wikipedia: "Stranger_by_the_Lake",
            trailer: "PgcEGKn7waI",
            poster: "img/stranger_by_the_lake.jpg",
            genre: ["Drama", "Thriller"]
        },
        {
            title: "Super Troopers",
            id: 39939,
            overview: "Five bored, occasionally high and always ineffective Vermont state troopers must prove their worth to the governor or lose their jobs. After stumbling on a drug ring, they plan to make a bust, but a rival police force is out to steal the glory.",
            runtime: "1 hr 40 mins",
            release_date: "January 18, 2001",
            wikipedia: "Super_Troopers",
            trailer: "v4AE-ZoZarc",
            poster: "img/super_troopers.jpg",
            genre: ["Comedy", "Crime", "Mystery"]
        },
        {
            title: "Superman",
            id: 1924,
            overview: "Mild-mannered Clark Kent works as a reporter at the Daily Planet alongside his crush, Lois Lane − who's in love with Superman. Clark must summon his superhero alter ego when the nefarious Lex Luthor launches a plan to take over the world.",
            runtime: "2 hrs 23 mins",
            release_date: "December 13, 1978",
            wikipedia: "Superman_(1978_film)",
            trailer: "grO4OcJ6cgY",
            poster: "img/superman.jpg",
            genre: ["Action", "Adventure", "Fantasy", "Science Fiction"]
        },
        {
            title: "Superman II: The Richard Donner Cut",
            id: 429486,
            overview: "Kryptonian villain General Zod (Terence Stamp) and his henchmen are accidentally freed from their outer-space imprisonment and threaten Earth with destruction, just as Superman (Christopher Reeve) decides to renounce his superpowers for his new love, Lois Lane (Margot Kidder). This alternate version of the film is based on footage shot by director Richard Donner before being replaced on the project, and it includes material not seen in the film's original 1980 release.",
            runtime: "1 hr 56 mins",
            release_date: "November 28, 2006",
            wikipedia: "Superman_II:_The_Richard_Donner_Cut",
            trailer: "X2Et2k3kXxk",
            poster: "img/superman_2.jpg",
            genre: ["Fantasy", "Romance", "Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Swing Time",
            id: 20325,
            overview: "Lucky is tricked into missing his wedding to Margaret by the other members of Pop's magic and dance act, and has to make $25000 to be allowed to marry her. He and Pop go to New York where they run into Penny, a dancing instructor. She and Lucky form a successful dance partnership, but romance is blighted (till the end of the film at least!) by his old attachment to Margaret and hers for Ricardo, the band leader who won't play for them to dance together.",
            runtime: "1 hr 43 mins",
            release_date: "August 27, 1936",
            wikipedia: "Swing_Time_(film)",
            trailer: "b_usa_VQLGs",
            poster: "img/swing_time.jpg",
            genre: ["Comedy", "Music", "Romance"]
        },
        {
            title: "Syriana",
            id: 231,
            overview: "The Middle Eastern oil industry is the backdrop of this tense drama, which weaves together numerous story lines. Bennett Holiday is an American lawyer in charge of facilitating a dubious merger of oil companies, while Bryan Woodman, a Switzerland-based energy analyst, experiences both personal tragedy and opportunity during a visit with Arabian royalty. Meanwhile, veteran CIA agent Bob Barnes uncovers an assassination plot with unsettling origins.",
            runtime: "2 hrs 8 mins",
            release_date: "November 23, 2005",
            wikipedia: "Syriana",
            trailer: "bTa2PTcycyI",
            poster: "img/syriana.jpg",
            genre: ["Drama", "Thriller"]
        },
        {
            title: "Taken",
            id: 8681,
            overview: "While vacationing with a friend in Paris, an American girl is kidnapped by a gang of human traffickers intent on selling her into forced prostitution. Working against the clock, her ex-spy father must pull out all the stops to save her. But with his best years possibly behind him, the job may be more than he can handle.",
            runtime: "1 hr 34 mins",
            release_date: "January 01, 2009",
            wikipedia: "Taken_(film)",
            trailer: "XK9zL0ze9O4",
            poster: "img/taken.jpg",
            genre: ["Action", "Thriller"]
        },
        {
            title: "Taxi Driver",
            id: 103,
            overview: "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feed his urge for violent action, attempting to save a preadolescent prostitute in the process.",
            runtime: "1 hr 54 mins",
            release_date: "February 9, 1976",
            wikipedia: "Taxi_Driver",
            trailer: "44gB58YS53A",
            poster: "img/taxi_driver.jpg",
            genre: ["Crime", "Drama"]
        },
        {
            title: "Teenage Mutant Ninja Turtles",
            id: 1498,
            overview: "A quartet of mutated humanoid turtles clash with an uprising criminal gang of ninjas.",
            runtime: "1 hr 33 mins",
            release_date: "March 30, 1990",
            wikipedia: "Teenage_Mutant_Ninja_Turtles_(1990_film)",
            trailer: "FMJPwRWaZBI",
            poster: "img/teenage_mutant_ninja_turtles.jpg",
            genre: ["Science Fiction", "Action", "Adventure", "Comedy", "Family"]
        },
        {
            title: "Tenet",
            id: 577922,
            overview: "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
            runtime: "2 hrs 30 mins",
            release_date: "September 3, 2020",
            wikipedia: "Tenet_(film)",
            trailer: "LdOM0x0XDMo",
            poster: "img/tenet.jpg",
            genre: ["Action", "Thriller", "Science Fiction"]
        },
        {
            title: "Terminator 2: Judgment Day",
            id: 280,
            overview: "Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.",
            runtime: "2 hrs 17 mins",
            release_date: "July 01, 1991",
            wikipedia: "Terminator_2:_Judgment_Day",
            trailer: "-W8CegO_Ixw",
            poster: "img/terminator_2.jpg",
            genre: ["Action", "Thriller", "Science Fiction"]
        },
        {
            title: "Thank You For Smoking",
            id: 9388,
            overview: "The chief spokesperson and lobbyist Nick Naylor is the Vice-President of the Academy of Tobacco Studies. He is talented in speaking and spins argument to defend the cigarette industry in the most difficult situations. His best friends are Polly Bailey that works in the Moderation Council in alcohol business, and Bobby Jay Bliss of the gun business own advisory group SAFETY. They frequently meet each other in a bar and they self-entitle the Mod Squad a.k.a. Merchants of Death, disputing which industry has killed more people. Nick's greatest enemy is Vermont's Senator Ortolan Finistirre, who defends in the Senate the use a skull and crossed bones in the cigarette packs. Nick's son Joey Naylor lives with his mother, and has the chance to know his father in a business trip. When the ambitious reporter Heather Holloway betrays Nick disclosing confidences he had in bed with her, his life turns upside-down. But Nick is good in what he does for the mortgage.",
            runtime: "1 hr 32 mins",
            release_date: "September 05, 2005",
            wikipedia: "Thank_You_for_Smoking",
            trailer: "Df32RijORLo",
            poster: "img/thank_you_for_smoking.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "The Abyss",
            id: 2756,
            overview: "A civilian oil rig crew is recruited to conduct a search and rescue effort when a nuclear submarine mysteriously sinks. One diver soon finds himself on a spectacular odyssey 25,000 feet below the ocean's surface where he confronts a mysterious force that has the power to change the world or destroy it.",
            runtime: "2 hrs 19 mins",
            release_date: "August 08, 1989",
            wikipedia: "The_Abyss",
            trailer: "WYPcLYPoaxo",
            poster: "img/the_abyss.jpg",
            genre: ["Adventure", "Action", "Thriller", "Science Fiction"]
        },
        {
            title: "The Accountant",
            id: 302946,
            overview: "As a math savant uncooks the books for a new client, the Treasury Department closes in on his activities and the body count starts to rise.",
            runtime: "2 hrs 8 mins",
            release_date: "October 14, 2016",
            wikipedia: "The_Accountant_(2016_film)",
            trailer: "aNGhnNMSopI",
            poster: "img/the_accountant.jpg",
            genre: ["Crime", "Thriller", "Drama"]
        },
        {
            title: "The Addams Family",
            id: 2907,
            overview: "Uncle Fester has been missing for 25 years. An evil doctor finds out and introduces a fake Fester in an attempt to get the Adams Family's money. The youngest daughter has some doubts about the new uncle Fester, but the fake uncle adapts very well to the strange family. Can the doctor carry out her evil plans and take over the Adams Family's fortune?",
            runtime: "1 hr 39 mins",
            release_date: "November 22, 1991",
            wikipedia: "The_Addams_Family_(1991_film)",
            trailer: "vypvqaXTtx4",
            poster: "img/the_addams_family.jpg",
            genre: ["Comedy", "Fantasy"]
        },
        {
            title: "Addams Family Values",
            id: 2758,
            overview: 'Siblings Wednesday and Pugsley Addams will stop at nothing to get rid of Pubert, the new baby boy adored by parents Gomez and Morticia. Things go from bad to worse when the new "black widow" nanny, Debbie Jellinsky, launches her plan to add Fester to her collection of dead husbands.',
            runtime: "1 hr 34 mins",
            release_date: "November 19, 1993",
            wikipedia: "Addams_Family_Values",
            trailer: "jVlPzTPLC4M",
            poster: "img/addams_family_values.jpg",
            genre: ["Comedy", "Family", "Fantasy"]
        },
        {
            title: "The Addiction",
            id: 34996,
            overview: "A vampiric doctoral student tries to follow the philosophy of a nocturnal comrade and control her thirst for blood.",
            runtime: "1 hr 22 mins",
            release_date: "January 10, 1995",
            wikipedia: "The_Addiction",
            trailer: "b5gWXUuse3Q",
            poster: "img/the_addiction.jpg",
            genre: ["Drama", "Horror"]
        },
        {
            title: "The Adventures of Tintin",
            id: 17578,
            overview: "Intrepid young reporter, Tintin and his loyal dog, Snowy are thrust into a world of high adventure when they discover a ship carrying an explosive secret. As Tintin is drawn into a centuries-old mystery, Ivan Ivanovitch Sakharine suspects him of stealing a priceless treasure. Tintin and Snowy, with the help of salty, cantankerous Captain Haddock and bumbling detectives, Thompson & Thomson, travel half the world, one step ahead of their enemies as Tintin endeavors to find The Unicorn, a sunken ship that may hold a vast fortune, but also an ancient curse.",
            runtime: "1 hr 47 mins",
            release_date: "October 25, 2011",
            wikipedia: "The_Adventures_of_Tintin_(film)",
            trailer: "fE5IQybGRPc",
            poster: "img/the_adventures_of_tintin.jpg",
            genre: ["Adventure", "Animation", "Mystery"]
        },
        {
            title: "The Big Lebowski",
            id: 115,
            overview: "Jeffrey 'The Dude' Lebowski, a Los Angeles slacker who only wants to bowl and drink White Russians, is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged into a strange series of events involving nihilists, adult film producers, ferrets, errant toes, and large sums of money.",
            runtime: "1 hr 57 mins",
            release_date: "March 6, 1998",
            wikipedia: "The_Big_Lebowski",
            trailer: "go0oBF4Y",
            poster: "img/the_big_lebowski.jpg",
            genre: ["Comedy", "Crime"]
        },
        {
            title: "The Big Short",
            id: 318846,
            overview: "The men who made millions from a global economic meltdown.",
            runtime: "2 hrs 10 mins",
            release_date: "December 11, 2015",
            wikipedia: "The_Big_Short_(film)",
            trailer: "vgqG3ITMv1Q",
            poster: "img/the_big_short.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "The Bodyguard",
            id: 619,
            overview: "A former Secret Service agent grudgingly takes an assignment to protect a pop idol who's threatened by a crazed fan. At first, the safety-obsessed bodyguard and the self-indulgent diva totally clash. But before long, all that tension sparks fireworks of another sort, and the love-averse tough guy is torn between duty and romance.",
            runtime: "2 hrs 9 mins",
            release_date: "October 25, 1992",
            wikipedia: "The_Bodyguard_(1992_film)",
            trailer: "00Kvyw7AEKU",
            poster: "img/the_bodyguard.jpg",
            genre: ["Thriller", "Action", "Drama", "Music", "Romance"]
        },
        {
            title: "The Bourne Identity",
            id: 2501,
            overview: "Wounded to the brink of death and suffering from amnesia, Jason Bourne is rescued at sea by a fisherman. With nothing to go on but a Swiss bank account number, he starts to reconstruct his life, but finds that many people he encounters want him dead. However, Bourne realizes that he has the combat and mental skills of a world-class spy – but who does he work for?",
            runtime: "1 hr 59 mins",
            release_date: "June 14, 2002",
            wikipedia: "The_Bourne_Identity_(2002_film)",
            trailer: "2tqK_3mKQUw",
            poster: "img/the_bourne_identity.jpg",
            genre: ["Action", "Drama", "Mystery", "Thriller"]
        },
        {
            title: "The Bourne Supremacy",
            id: 2502,
            overview: "When a CIA operation to purchase classified Russian documents is blown by a rival agent, who then shows up in the sleepy seaside village where Bourne and Marie have been living. The pair run for their lives and Bourne, who promised retaliation should anyone from his former life attempt contact, is forced to once again take up his life as a trained assassin to survive.",
            runtime: "1 hr 48 mins",
            release_date: "July 23, 2004",
            wikipedia: "The_Bourne_Supremacy_(film)",
            trailer: "Y-HqyyfBbSo",
            poster: "img/the_bourne_supremacy.jpg",
            genre: ["Action", "Drama", "Thriller"]
        },
        {
            title: "The Bourne Ultimatum",
            id: 2503,
            overview: "Bourne is brought out of hiding once again by reporter Simon Ross who is trying to unveil Operation Blackbriar, an upgrade to Project Treadstone, in a series of newspaper columns. Information from the reporter stirs a new set of memories, and Bourne must finally uncover his dark past while dodging The Company's best efforts to eradicate him.",
            runtime: "1 hr 55 mins",
            release_date: "August 03, 2007",
            wikipedia: "The_Bourne_Ultimatum_(film)",
            trailer: "ZT2ZxjUjSo0",
            poster: "img/the_bourne_ultimatum.jpg",
            genre: ["Action", "Drama", "Mystery", "Thriller"]
        },
        {
            title: "Jason Bourne",
            id: 324668,
            overview: "The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.",
            runtime: "2 hrs 3 mins",
            release_date: "July 27, 2016",
            wikipedia: "Jason_Bourne_(film)",
            trailer: "F4gJsKZvqE4",
            poster: "img/jason_bourne.jpg",
            genre: ["Action", "Thriller"]
        },
        {
            title: "The Breakfast Club",
            id: 2108,
            overview: "Five high school students from different walks of life endure a Saturday detention under a power-hungry principal. The disparate group includes rebel John, princess Claire, outcast Allison, brainy Brian and Andrew, the jock. Each has a chance to tell his or her story, making the others see them a little differently -- and when the day ends, they question whether school will ever be the same.",
            runtime: "1 hr 38 mins",
            release_date: "February 15, 1985",
            wikipedia: "The_Breakfast_Club",
            trailer: "BSXBvor47Zs",
            poster: "img/the_breakfast_club.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "The Cell",
            id: 8843,
            overview: "A psychotherapist journeys inside a comatose serial killer in the hopes of saving his latest victim.",
            runtime: "1 hr 47 mins",
            release_date: "August 17, 2000",
            wikipedia: "The_Cell_(film)",
            trailer: "eIpy4p_yMV0",
            poster: "img/the_cell.jpg",
            genre: ["Horror", "Science Fiction", "Thriller"]
        },
        {
            title: "The Defiant Ones",
            id: 445713,
            overview: "A four-part documentary series that tells the stories of Jimmy Iovine and Dr. Dre -- one the son of a Brooklyn longshoreman, the other straight out of Compton - -- and their improbable partnership and surprising leading roles in a series of transformative events in contemporary culture.",
            runtime: "4 hrs 24 mins",
            release_date: "July 05, 2017",
            wikipedia: "The_Defiant_Ones_(TV_series)",
            trailer: "wP7b8xaWmG0",
            poster: "img/the_defiant_ones.jpg",
            genre: ["Documentary"]
        },
        {
            title: "The Departed",
            id: 1422,
            overview: "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
            runtime: "2 hrs 31 mins",
            release_date: "October 05, 2006",
            wikipedia: "The_Departed",
            trailer: "auYbpnEwBBg",
            poster: "img/the_departed.jpg",
            genre: ["Drama", "Thriller", "Crime"]
        },
        {
            title: "The Distinguished Gentleman",
            id: 10411,
            overview: "A Florida con man uses the passing of the long time Congressman from his district who he just happens to share a name with, to get elected to his version of paradise, Congress, where the money flows from lobbyists. But soon he learns the nature of the game and decides to fight back the only way he knows how, with a con.",
            runtime: "1 hr 52 mins",
            release_date: "December 04, 1992",
            wikipedia: "The_Distinguished_Gentleman",
            trailer: "SfOSA34yjuI",
            poster: "img/the_distinguished_gentleman.jpg",
            genre: ["Comedy"]
        },
        {
            title: "The Equalizer",
            id: 156022,
            overview: "McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
            runtime: "2 hrs 12 mins",
            release_date: "September 26, 2014",
            wikipedia: "The_Equalizer_(film)",
            trailer: "VjctHUEmutw",
            poster: "img/the_equalizer.jpg",
            genre: ["Thriller", "Action", "Crime"]
        },
        {
            title: "The Equalizer 2",
            id: 345887,
            overview: "Robert McCall, who serves an unflinching justice for the exploited and oppressed, embarks on a relentless, globe-trotting quest for vengeance when a long-time girl friend is murdered.",
            runtime: "2 hrs 1 mins",
            release_date: "July 20, 2018",
            wikipedia: "The_Equalizer_2",
            trailer: "HyNJ3UrGk_I",
            poster: "img/the_equalizer_2.jpg",
            genre: ["Action", "Thriller", "Crime"]
        },
        {
            title: "The Eyes of Tammy Faye",
            id: 601470,
            overview: "In the 1970s and ’80s, Tammy Faye and Jim Bakker rose from humble beginnings to create the world’s largest religious broadcasting network and a theme park, and were revered for their message of love, acceptance, and prosperity.",
            runtime: "2 hrs 6 mins",
            release_date: "January 27, 2022",
            wikipedia: "The_Eyes_of_Tammy_Faye_(2021_film)",
            trailer: "eMMLRnXPPJk",
            poster: "img/the_eyes_of_tammy_faye.jpg",
            genre: ["Drama", "History"]
        },
        {
            title: "The Family Man",
            id: 5994,
            overview: "Jack's lavish, fast-paced lifestyle changes one Christmas night when he stumbles into a grocery store holdup and disarms the gunman. The next morning he wakes up in bed lying next to Kate, his college sweetheart he left in order to pursue his career, and to the horrifying discovery that his former life no longer exists. As he stumbles through this alternate suburban universe, Jack finds himself at a crossroad where he must choose between his high-power career and the woman he loves.",
            runtime: "2 hrs 5 mins",
            release_date: "December 12, 2000",
            wikipedia: "The_Family_Man",
            trailer: "OnouJoQs52c",
            poster: "img/the_family_man.jpg",
            genre: ["Comedy", "Drama", "Romance", "Fantasy"]
        },
        {
            title: "The Fan",
            id: 9566,
            overview: "When the San Francisco Giants pay centerfielder Bobby Rayburn $40 million to lead their team to the World Series, no one is happier or more supportive than #1 fan Gil Renard. So when Rayburn becomes mired in the worst slump of his career, the obsessed Renard decides to stop at nothing to help his idol regain his former glory... not even murder.",
            runtime: "1 hr 56 mins",
            release_date: "August 15, 1996",
            wikipedia: "The_Fan_(1996_film)",
            trailer: "OJhwzOqqdqU",
            poster: "img/the_fan.jpg",
            genre: ["Drama", "Mystery", "Thriller"]
        },
        {
            title: "The Firm",
            id: 37233,
            overview: "Mitch McDeere is a young man with a promising future in Law. About to sit his Bar exam, he is approached by 'The Firm' and made an offer he doesn't refuse. Seduced by the money and gifts showered on him, he is totally oblivious to the more sinister side of his company. Then, two Associates are murdered. The FBI contact him, asking him for information and suddenly his life is ruined. He has a choice - work with the FBI, or stay with the Firm. Either way he will lose his life as he knows it. Mitch figures the only way out is to follow his own plan...",
            runtime: "2 hrs 35 mins",
            release_date: "June 30, 1993",
            wikipedia: "The_Firm_(1993_film)",
            trailer: "FX3AXA3icR0",
            poster: "img/the_firm.jpg",
            genre: ["Drama", "Mystery", "Thriller"]
        },
        {
            title: "The Founder",
            id: 310307,
            overview: "The true story of how Ray Kroc, a salesman from Illinois, met Mac and Dick McDonald, who were running a burger operation in 1950s Southern California. Kroc was impressed by the brothers’ speedy system of making the food and saw franchise potential. He maneuvered himself into a position to be able to pull the company from the brothers and create a billion-dollar empire.",
            runtime: "1 hr 55 mins",
            release_date: "November 24, 2016",
            wikipedia: "The_Founder",
            trailer: "AX2uz2XYkbo",
            poster: "img/the_founder.jpg",
            genre: ["Drama", "History"]
        },
        {
            title: "The Gentlemen",
            id: 522627,
            overview: "American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that he’s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
            runtime: "1 hr 53 mins",
            release_date: "January 01, 2020",
            wikipedia: "The_Gentlemen_(2019_film)",
            trailer: "Ify9S7hj480",
            poster: "img/the_gentlemen.jpg",
            genre: ["Action", "Crime", "Comedy"]
        },
        {
            title: "The Girl With The Dragon Tattoo",
            id: 65754,
            overview: "This English-language adaptation of the Swedish novel by Stieg Larsson follows a disgraced journalist, Mikael Blomkvist, as he investigates the disappearance of a weary patriarch's niece from 40 years ago. He is aided by the pierced, tattooed, punk computer hacker named Lisbeth Salander. As they work together in the investigation, Blomkvist and Salander uncover immense corruption beyond anything they have ever imagined.",
            runtime: "2 hrs 38 mins",
            release_date: "December 14, 2011",
            wikipedia: "The_Girl_with_the_Dragon_Tattoo_(2011_film)",
            trailer: "DqQe3OrsMKI",
            poster: "img/the_girl_with_the_dragon_tattoo.jpg",
            genre: ["Thriller", "Crime", "Mystery", "Drama"]
        },
        {
            title: "The Godfather",
            id: 238,
            overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            runtime: "2 hrs 55 mins",
            release_date: "March 14, 1972",
            wikipedia: "The_Godfather",
            trailer: "fBNpSRtfIUA",
            poster: "img/the_godfather.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "The Godfather: Part II",
            id: 240,
            overview: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            runtime: "3 hrs 20 mins",
            release_date: "December 20, 1974",
            wikipedia: "The_Godfather_Part_II",
            trailer: "9O1Iy9od7-A",
            poster: "img/the_godfather_II.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "The Godfather Coda: The Death of Michael Corleone",
            id: 994576,
            overview: "Francis Ford Coppola brings a definitive new edit and restoration of the final film in his epic Godfather trilogy - Mario Puzo's The Godfather, Coda: The Death of Michael Corleone.",
            runtime: "2 hrs 38 mins",
            release_date: "December 4, 2020",
            wikipedia: "The_Godfather_Part_III",
            trailer: "nWxDwvLhkDw",
            poster: "img/the_godfather_III.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "The Gold Rush",
            id: 962,
            overview: "A lone prospector ventures into Alaska looking for gold. He soon gets mixed up with some burly characters, falls in love with the beautiful Georgia, and tries to win her heart with his singular charm.",
            runtime: "1 hr 29 mins",
            release_date: "August 15, 1925",
            wikipedia: "The_Gold_Rush",
            trailer: "kDlEvaKBkhU",
            poster: "img/the_gold_rush.jpg",
            genre: ["Adventure", "Comedy", "Drama"]
        },
        {
            title: "The Grand Budapest Hotel",
            id: 120467,
            overview: "The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.",
            runtime: "1 hr 39 mins",
            release_date: "February 26, 2014",
            wikipedia: "The_Grand_Budapest_Hotel",
            trailer: "1Fg5iWmQjwk",
            poster: "img/the_grand_budapest_hotel.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "The Great Beauty",
            id: 179144,
            overview: "Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.",
            runtime: "2 hrs 22 mins",
            release_date: "May 21, 2013",
            wikipedia: "The_Great_Beauty",
            trailer: "Dyt430YkQn0",
            poster: "img/the_great_beauty.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "The Great Gatsby",
            id: 64682,
            overview: "An adaptation of F. Scott Fitzgerald's Long Island-set novel, where Midwesterner Nick Carraway is lured into the lavish world of his neighbor, Jay Gatsby. Soon enough, however, Carraway will see through the cracks of Gatsby's nouveau riche existence, where obsession, madness, and tragedy await.",
            runtime: "2 hrs 23 mins",
            release_date: "May 10, 2013",
            wikipedia: "The_Great_Gatsby_(2013_film)",
            trailer: "ozkOhXmijtk",
            poster: "img/the_great_gatsby.jpg",
            genre: ["Drama", "Romance"]
        },
        {
            title: "The Hangover",
            id: 18785,
            overview: "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – who's supposed to be tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to the church on time.",
            runtime: "1 hr 40 mins",
            release_date: "June 2, 2009",
            wikipedia: "The_Hangover",
            trailer: "tcdUhdOlz9M",
            poster: "img/the_hangover.jpg",
            genre: ["Comedy"]
        },
        {
            title: "The Hangover Part II",
            id: 45243,
            overview: "The Hangover crew heads to Thailand for Stu's wedding. After the disaster of a bachelor party in Las Vegas last year, Stu is playing it safe with a mellow pre-wedding brunch. However, nothing goes as planned and Bangkok is the perfect setting for another adventure with the rowdy group.",
            runtime: "1 hr 42 mins",
            release_date: "May 25, 2011",
            wikipedia: "The_Hangover_Part_II",
            trailer: "ohF5ZO_zOYU",
            poster: "img/the_hangover_part_ii.jpg",
            genre: ["Comedy"]
        },
        {
            title: "The Hangover Part III",
            id: 109439,
            overview: "This time, there's no wedding. No bachelor party. What could go wrong, right? But when the Wolfpack hits the road, all bets are off.",
            runtime: "1 hr 40 mins",
            release_date: "May 23, 2015",
            wikipedia: "The_Hangover_Part_III",
            trailer: "96TelFMZwHc",
            poster: "img/the_hangover_part_iii.jpg",
            genre: ["Comedy"]
        },
        {
            title: "The Hateful Eight",
            id: 273248,
            overview: "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
            runtime: "3 hrs 8 mins",
            release_date: "December 25, 2015",
            wikipedia: "The_Hateful_Eight",
            trailer: "nIOmotayDMY",
            poster: "img/the_hateful_eight.jpg",
            genre: ["Drama", "Mystery", "Western"]
        },
        {
            title: "The Incredibles",
            id: 468222,
            overview: "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
            runtime: "1 hr 55 mins",
            release_date: "November 05, 2004",
            wikipedia: "The_Incredibles",
            trailer: "SOKY7XyOHTA",
            poster: "img/the_incredibles.jpg",
            genre: ["Action", "Adventure", "Animation", "Family"]
        },
        {
            title: "Incredibles 2",
            id: 468222,
            overview: "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.",
            runtime: "1 hr 58 mins",
            release_date: "June 14, 2018",
            wikipedia: "Incredibles_2",
            trailer: "i5qOzqD9Rms",
            poster: "img/incredibles_2.jpg",
            genre: ["Action", "Adventure", "Animation", "Family"]
        },
        {
            title: "The Interview",
            id: 228967,
            overview: 'Dave Skylark and his producer Aaron Rapoport run the celebrity tabloid show "Skylark Tonight". When they land an interview with a surprise fan, North Korean dictator Kim Jong-un, they are recruited by the CIA to turn their trip to Pyongyang into an assassination mission.',
            runtime: "1 hr 52 mins",
            release_date: "December 25, 2014",
            wikipedia: "The_Interview",
            trailer: "9oVzgybbU3M",
            poster: "img/the_interview.jpg",
            genre: ["Action", "Comedy"]
        },
        {
            title: "The Last Duel",
            id: 617653,
            overview: "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.",
            runtime: "2 hrs 33 mins",
            release_date: "October 15, 2021",
            wikipedia: "The_Last_Duel_(2021_film)",
            trailer: "mgygUwPJvYk",
            poster: "img/the_last_duel.jpg",
            genre: ["Action", "Drama", "History"]
        },
        {
            title: "The Lego Batman Movie",
            id: 324849,
            overview: "In the irreverent spirit of fun that made “The Lego Movie” a worldwide phenomenon, the self-described leading man of that ensemble—Lego Batman—stars in his own big-screen adventure. But there are big changes brewing in Gotham, and if he wants to save the city from The Joker’s hostile takeover, Batman may have to drop the lone vigilante thing, try to work with others and maybe, just maybe, learn to lighten up.",
            runtime: "1 hr 44 mins",
            release_date: "February 08, 2017",
            wikipedia: "The_Lego_Batman_Movie",
            trailer: "iMdQXYQ_MD8",
            poster: "img/the_lego_batman_movie.jpg",
            genre: ["Action", "Animation", "Comedy", "Family", "Fantasy"]
        },
        {
            title: "The Lego Movie",
            id: 137106,
            overview: "An ordinary Lego mini-figure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil Lego tyrant from gluing the universe together.",
            runtime: "1 hr 40 mins",
            release_date: "February 06, 2014",
            wikipedia: "The_Lego_Movie",
            trailer: "fZ_JOBCLF-I",
            poster: "img/the_lego_movie.jpg",
            genre: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"]
        },
        {
            title: "The Lego Movie 2: The Second Part",
            id: 280217,
            overview: "It's been five years since everything was awesome and the citizens are facing a huge new threat: LEGO DUPLO® invaders from outer space, wrecking everything faster than they can rebuild.",
            runtime: "1 hr 46 mins",
            release_date: "January 26, 2019",
            wikipedia: "The_Lego_Movie_2:_The_Second_Part",
            trailer: "cksYkEzUa7k",
            poster: "img/the_lego_movie_2.jpg",
            genre: ["Action", "Adventure", "Animation", "Comedy", "Family", "Science Fiction", "Fantasy"]
        },
        {
            title: "The Life Aquatic With Steve Zissou",
            id: 421,
            overview: "Wes Anderson’s incisive quirky comedy build up stars complex characters like in ‘The Royal Tenenbaums’ with Bill Murray on in the leading role. An ocean adventure documentary film maker Zissou is put in all imaginable life situations and a tough life crisis as he attempts to make a new film about capturing the creature that caused him pain.",
            runtime: "1 hr 59 mins",
            release_date: "December 10, 2004",
            wikipedia: "The_Life_Aquatic_with_Steve_Zissou",
            trailer: "aZVxCNwBqXI",
            poster: "img/the_life_aquatic_with_steve_zissou.jpg",
            genre: ["Adventure", "Comedy", "Drama"]
        },
        {
            title: "The Maltese Falcon",
            id: 963,
            overview: "A private detective takes on a case that involves him with three eccentric criminals, a gorgeous liar, and their quest for a priceless statuette.",
            runtime: "1 hr 40 mins",
            release_date: "November 18, 1941",
            wikipedia: "The_Maltese_Falcon_(1941_film)",
            trailer: "3a9YU1SVbSE",
            poster: "img/the_maltese_falcon.jpg",
            genre: ["Mystery", "Crime", "Thriller"]
        },
        {
            title: "The Many Adventures of Winnie the Pooh",
            id: 250480,
            overview: "Whether we’re young or forever young at heart, the Hundred Acre Wood calls to that place in each of us that still believes in magic. Join pals Pooh, Piglet, Kanga, Roo, Owl, Rabbit, Tigger and Christopher Robin as they enjoy their days together and sing their way through adventures.",
            runtime: "1 hr 14 mins",
            release_date: "March 1, 1977",
            wikipedia: "The_Many_Adventures_of_Winnie_the_Pooh",
            trailer: "fcaWHNs8-QQ",
            poster: "img/the_many_adventures_of_winnie_the_pooh.jpg",
            genre: ["Animation", "Family"]
        },
        {
            title: "The Many Saints of Newark",
            id: 524369,
            overview: "Young Anthony Soprano is growing up in one of the most tumultuous eras in Newark, N.J., history, becoming a man just as rival gangsters start to rise up and challenge the all-powerful DiMeo crime family. Caught up in the changing times is the uncle he idolizes, Dickie Moltisanti, whose influence over his nephew will help shape the impressionable teenager into the all-powerful mob boss, Tony Soprano.",
            runtime: "2 hrs 0 mins",
            release_date: "October 1, 2021",
            wikipedia: "The_Many_Saints_of_Newark",
            trailer: "dHa95iy2lF0",
            poster: "img/the_many_saints_of_newark.jpg",
            genre: ["Crime", "Drama"]
        },
        {
            title: "The Matrix",
            id: 603,
            overview: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
            runtime: "2 hrs 16 mins",
            release_date: "March 30, 1999",
            wikipedia: "The_Matrix",
            trailer: "m8e-FF8MsqU",
            poster: "img/the_matrix.jpg",
            genre: ["Action", "Science Fiction"]
        },
        {
            title: "The Matrix Reloaded",
            id: 604,
            overview: "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source. Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
            runtime: "2 hrs 18 mins",
            release_date: "May 15, 2003",
            wikipedia: "The_Matrix_Reloaded",
            trailer: "zsgrsiZoymA",
            poster: "img/the_matrix_reloaded.jpg",
            genre: ["Adventure", "Action", "Thriller", "Science Fiction"]
        },
        {
            title: "The Animatrix",
            id: 55931,
            overview: "Straight from the creators of the groundbreaking Matrix trilogy, this collection of short animated films from the world's leading anime directors fuses computer graphics and Japanese anime to provide the background of the Matrix universe and the conflict between man and machines. The shorts include Final Flight of the Osiris, The Second Renaissance, Kid's Story, Program, World Record, Beyond, A Detective Story and Matriculated.",
            runtime: "1 hr 42 mins",
            release_date: "May 31, 2003",
            wikipedia: "The_Animatrix",
            trailer: "dqi_v6vhRE4",
            poster: "img/the_animatrix.jpg",
            genre: ["Animation", "Science Fiction"]
        },
        {
            title: "The Matrix Revolutions",
            id: 605,
            overview: "The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.",
            runtime: "2 hrs 9 mins",
            release_date: "November 05, 2003",
            wikipedia: "The_Matrix_Revolutions",
            trailer: "Kw3IQpnVtvo",
            poster: "img/the_matrix_revolutions.jpg",
            genre: ["Adventure", "Action", "Thriller", "Science Fiction"]
        },
        {
            title: "The Matrix Resurrections",
            id: 624860,
            overview: "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
            runtime: "2 hrs 27 mins",
            release_date: "December 22, 2021",
            wikipedia: "The_Matrix_Resurrections",
            trailer: "9ix7TUGVYIo",
            poster: "img/the_matrix_resurrections.jpg",
            genre: ["Science Fiction", "Action", "Adventure"]
        },
        {
            title: "The Merchant of Venice",
            id: 11162,
            overview: "In 16th century Venice, when a merchant must default on a large loan from an abused Jewish moneylender for a friend with romantic ambitions, the bitterly vengeful creditor demands a gruesome payment instead.",
            runtime: "2 hrs 18 mins",
            release_date: "September 3, 2004",
            wikipedia: "The_Merchant_of_Venice_(2004_film)",
            trailer: "su0-zDsppTU",
            poster: "img/the_merchant_of_venice.jpg",
            genre: ["Drama", "Romance"]
        },
        {
            title: "The Nightmare Before Christmas",
            id: 9479,
            overview: "Tired of scaring humans every October 31 with the same old bag of tricks, Jack Skellington, the spindly king of Halloween Town, kidnaps Santa Claus and plans to deliver shrunken heads and other ghoulish gifts to children on Christmas morning. But as Christmas approaches, Jack's rag-doll girlfriend, Sally, tries to foil his misguided plans.",
            runtime: "1 hr 16 mins",
            release_date: "October 9, 1993",
            wikipedia: "The_Nightmare_Before_Christmas",
            trailer: "wr6N_hZyBCk",
            poster: "img/the_nightmare_before_christmas.jpg",
            genre: ["Fantasy", "Animation", "Family"]
        },
        {
            title: "The Passion of the Christ",
            id: 615,
            overview: "A graphic portrayal of the last twelve hours of Jesus of Nazareth's life.",
            runtime: "2 hrs 1 mins",
            release_date: "February 25, 2004",
            wikipedia: "The_Passion_of_the_Christ",
            trailer: "4Aif1qEB_JU",
            poster: "img/the_passion_of_the_christ.jpg",
            genre: ["Drama"]
        },
        {
            title: "The Philadelphia Story",
            id: 981,
            overview: "Philadelphia heiress Tracy Lord throws out her playboy husband C.K. Dexter Haven shortly after their marriage. Two years later, Tracy is about to marry respectable George Kittredge whilst Dexter has been working for \"Spy\" magazine. Dexter arrives at the Lord mansion the day before the wedding with journalist Mike Connor and photographer Liz Imbrie, determined to spoil things.",
            runtime: "1 hr 52 mins",
            release_date: "December 5, 1940",
            wikipedia: "The_Philadelphia_Story_(film)",
            trailer: "oCfuPPR7wnQ",
            poster: "img/the_philadelphia_story.jpg",
            genre: ["Comedy", "Romance"]
        },
        {
            title: "The Prestige",
            id: 1124,
            overview: "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
            runtime: "2 hrs 10 mins",
            release_date: "October 19, 2006",
            wikipedia: "The_Prestige_(film)",
            trailer: "ijXruSzfGEc",
            poster: "img/the_prestige.jpg",
            genre: ["Drama", "Mystery", "Thriller"]
        },
        {
            title: "The Putin Interviews",
            id: 461805,
            overview: "Academy Award-winning filmmaker Oliver Stone interviews the Russian president Vladimir Putin about divisive issues related to the US-Russia relations.",
            runtime: "4 hrs 0 mins",
            release_date: "June 12, 2017",
            wikipedia: "The_Putin_Interviews",
            trailer: "BrBoj760aD8",
            poster: "img/the_putin_interviews.jpg",
            genre: []
        },
        {
            title: "The Quick and the Dead",
            id: 12106,
            overview: "A mysterious woman comes to compete in a quick-draw elimination tournament, in a town taken over by a notorious gunman.",
            runtime: "1 hr 47 mins",
            release_date: "February 9, 1995",
            wikipedia: "The_Quick_and_the_Dead_(1995_film)",
            trailer: "NfRrEUz62Lw",
            poster: "img/the_quick_and_the_dead.jpg",
            genre: ["Action", "Western"]
        },
        {
            title: "The Red Pill",
            id: 366696,
            overview: "A feminist filmmaker follows the Men's Rights Movement and begins to question her own beliefs. A look at gender politics.",
            runtime: "1 hr 57 mins",
            release_date: "October 07, 2016",
            wikipedia: "The_Red_Pill",
            trailer: "wLzeakKC6fE",
            poster: "img/the_red_pill.jpg",
            genre: ["Documentary"]
        },
        {
            title: "The Replacement Killers",
            id: 11702,
            overview: "Hired assassin John Lee is asked by Chinatown crime boss Terence Wei to murder the young son of policeman Stan Zedkov. Lee has the boy in his sights, but his conscience gets the better of him, and he spares the child's life. Afraid that Wei will take revenge on his family in China, Lee seeks out expert forger Meg Coburn to obtain the passport he needs to get out of the country, but a band of replacement killers is soon on his trail.",
            runtime: "1 hr 27 mins",
            release_date: "February 06, 1998",
            wikipedia: "The_Replacement_Killers",
            trailer: "LHFDWd8VMkM",
            poster: "img/the_replacement_killers.jpg",
            genre: ["Action", "Drama", "Crime", "Thriller"]
        },
        {
            title: "The Rocketeer",
            id: 10249,
            overview: "Straight from the pages of a pulp comic from a past era, the Rocketeer recreates 1930s Hollywood, complete with gangsters, Nazi spies, and the growth of the Age of Aviation. Young pilot Cliff Secord stumbles on a top secret rocket-pack and with the help of his mechanic/mentor, Peevy, he attempts to save his girl and stop the Nazis as The Rocketeer.",
            runtime: "1 hrs 48 mins",
            release_date: "June 21, 1991",
            wikipedia: "The_Rocketeer_(film)",
            trailer: "Gi0Et31E7s4",
            poster: "img/the_rocketeer.jpg",
            genre: ["Action", "Adventure", "Science Fiction", "Family"]
        },
        {
            title: "The Shawshank Redemption",
            id: 278,
            overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            runtime: "2 hrs 22 mins",
            release_date: "September 23, 1994",
            wikipedia: "The_Shawshank_Redemption",
            trailer: "6hB3S9bIaco",
            poster: "img/the_shawshank_redemption.jpg",
            genre: ["Drama", "Crime"]
        },
        {
            title: "The Shining",
            id: 694,
            overview: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
            runtime: "2 hrs 24 mins",
            release_date: "May 22, 1980",
            wikipedia: "The_Shining_(film)",
            trailer: "S014oGZiSdI",
            poster: "img/the_shining.jpg",
            genre: ["Horror", "Thriller"]
        },
        {
            title: "The Simpsons Movie",
            id: 35,
            overview: "After Homer accidentally pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons are declared fugitives.",
            runtime: "1 hr 27 mins",
            release_date: "July 25, 2007",
            wikipedia: "The_Simpsons_Movie",
            trailer: "XPG0MqIcby8",
            poster: "img/the_simpsons_movie.jpg",
            genre: ["Animation", "Comedy", "Family"]
        },
        {
            title: "The Social Network",
            id: 37799,
            overview: "On a fall night in 2003, Harvard undergrad and computer programming genius Mark Zuckerberg sits down at his computer and heatedly begins working on a new idea. In a fury of blogging and programming, what begins in his dorm room as a small site among friends soon becomes a global social network and a revolution in communication. A mere six years and 500 million friends later, Mark Zuckerberg is the youngest billionaire in history... but for this entrepreneur, success leads to both personal and legal complications.",
            runtime: "2 hrs 0 mins",
            release_date: "September 30, 2010",
            wikipedia: "The_Social_Network",
            trailer: "lB95KLmpLR4",
            poster: "img/the_social_network.jpg",
            genre: ["Drama"]
        },
        {
            title: "The Thin Man",
            id: 3529,
            overview: "After a four year absence, detective Nick Charles returns to New York with his wife Nora and their dog Asta. He's approached by a woman whose inventor father is suspected of murdering her step-mother. Nick isn't all that keen on resuming his former profession but is egged-on and assisted by Nora.",
            runtime: "1 hr 33 mins",
            release_date: "May 25, 1934",
            wikipedia: "The_Thin_Man_(film)",
            trailer: "nSNJ-8ouQEM",
            poster: "img/the_thin_man.jpg",
            genre: ["Comedy", "Crime", "Mystery"]
        },
        {
            title: "After The Thin Man",
            id: 14588,
            overview: "Nora's cousin Selma asks Nick to find her unfaithful missing husband. The husband is soon located, then a series of murders follow. Can Nick get to the bottom of things?",
            runtime: "1 hr 52 mins",
            release_date: "December 25, 1936",
            wikipedia: "After_the_Thin_Man",
            trailer: "sZuTCnxTXcI",
            poster: "img/after_the_thin_man.jpg",
            genre: ["Comedy", "Crime", "Mystery", "Romance"]
        },
        {
            title: "The Thin Red Line",
            id: 8741,
            overview: "Based on the graphic novel by James Jones, The Thin Red Line tells the story of a group of men, an Army Rifle company called C-for-Charlie, who change, suffer, and ultimately make essential discoveries about themselves during the fierce World War II battle of Guadalcanal. It follows their journey, from the surprise of an unopposed landing, through the bloody and exhausting battles that follow, to the ultimate departure of those who survived. A powerful frontline cast - including Sean Penn, Nick Nolte, Woody Harrelson and George Clooney - explodes into action in this hauntingly realistic view of military and moral chaos in the Pacific during World War II.",
            runtime: "2 hrs 50 mins",
            release_date: "December 25, 1998",
            wikipedia: "The_Thin_Red_Line_(1998_film)",
            trailer: "mKl5_OxKBn8",
            poster: "img/the_thin_red_line.jpg",
            genre: ["Drama", "History", "War"]
        },
        {
            title: "The Town",
            id: 23168,
            overview: "Doug MacRay is a longtime thief, who, smarter than the rest of his crew, is looking for his chance to exit the game. When a bank job leads to the group kidnapping an attractive branch manager, he takes on the role of monitoring her – but their burgeoning relationship threatens to unveil the identities of Doug and his crew to the FBI Agent who is on their case.",
            runtime: "2 hrs 5 mins",
            release_date: "September 15, 2010",
            wikipedia: "The_Town_(2010_film)",
            trailer: "uAjECYnrYks",
            poster: "img/the_town.jpg",
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            title: "The Truman Show",
            id: 37165,
            overview: 'Truman Burbank is the star of "The Truman Show", a 24-hour-a-day "reality" TV show that broadcasts every aspect of his life -- live and in color -- without his knowledge. His entire life has been an unending soap opera for consumption by the rest of the world. And everyone he knows -- including his wife and his best friend -- is really an actor, paid to be part of his life.',
            runtime: "1 hr 43 mins",
            release_date: "June 04, 1998",
            wikipedia: "The_Truman_Show",
            trailer: "c3gI9ms8Fdc",
            poster: "img/the_truman_show.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "The Untold History Of The United States",
            id: 189215,
            overview: "Oliver Stone charts the history of the United States from the Second World War to the present.",
            runtime: "9 hr 45 mins",
            release_date: "November 11, 2012",
            wikipedia: "The_Untold_History_of_the_United_States",
            trailer: "lKDf2QW983o",
            poster: "img/the_untold_history_of_the_united_states.jpg",
            genre: ["Documentary", "History"]
        },
        {
            title: "The Usual Suspects",
            id: 629,
            overview: "Held in an L.A. interrogation room, Verbal Kint attempts to convince the feds that a mythic crime lord, Keyser Soze, not only exists, but was also responsible for drawing him and his four partners into a multi-million dollar heist that ended with an explosion in San Pedro harbor – leaving few survivors. Verbal lures his interrogators with an incredible story of the crime lord's almost supernatural prowess.",
            runtime: "1 hr 46 mins",
            release_date: "July 19, 1995",
            wikipedia: "The_Usual_Suspects",
            trailer: "oiXdPolca5w",
            poster: "img/the_usual_suspects.jpg",
            genre: ["Drama", "Crime", "Thriller"]
        },
        {
            title: "The Wizard of Lies",
            id: 363992,
            overview: "A look behind the scenes at Bernie Madoff's massive Ponzi scheme, how it was perpetrated on the public and the trail of destruction it left in its wake, both for the victims and Madoff's family.",
            runtime: "2 hrs 13 mins",
            release_date: "May 20, 2017",
            wikipedia: "The_Wizard_of_Lies",
            trailer: "jo_CYCumZgI",
            poster: "img/the_wizard_of_lies.jpg",
            genre: ["Crime", "Drama", "History", "TV Movie"]
        },
        {
            title: "The Wolf of Wall Street",
            id: 106646,
            overview: "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
            runtime: "3 hrs 0 mins",
            release_date: "December 25, 2013",
            wikipedia: "The_Wolf_of_Wall_Street_(2013_film)",
            trailer: "iszwuX1AK6A",
            poster: "img/the_wolf_of_wall_street.jpg",
            genre: ["Crime", "Drama", "Comedy"]
        },
        {
            title: "Thelma & Louise",
            id: 1541,
            overview: "Whilst on a short weekend getaway, Louise shoots a man who had tried to rape Thelma. Due to the incriminating circumstances, they make a run for it and thus a cross country chase ensues for the two fugitives. Along the way, both women rediscover the strength of their friendship and surprising aspects of their personalities and self-strengths in the trying times.",
            runtime: "2 hrs 10 mins",
            release_date: "May 24, 1991",
            wikipedia: "Thelma_%26_Louise",
            trailer: "PRr0HY9MPZ0",
            poster: "img/thelma_and_louise.jpg",
            genre: ["Drama", "Thriller", "Crime", "Adventure"]
        },
        {
            title: "There Will Be Blood",
            id: 7345,
            overview: "When ruthless oil prospector, Daniel Plainview learns of oil-rich land in California that can be bought cheaply, he moves his operation there and begins manipulating and exploiting the local landowners into selling him their property. Using his young adopted son to project the image of a caring family man, Plainview gains the cooperation of almost all the locals with lofty promises to build schools and cultivate the land to make their community flourish. Over time, Plainview's gradual accumulation of wealth and power causes his true self to surface, and he begins to slowly alienate himself from everyone in his life.",
            runtime: "2 hrs 38 mins",
            release_date: "December 28, 2007",
            wikipedia: "There_Will_Be_Blood",
            trailer: "FeSLPELpMeM",
            poster: "img/there_will_be_blood.jpg",
            genre: ["Drama"]
        },
        {
            title: "Titanic",
            id: 597,
            overview: "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
            runtime: "3 hrs 14 mins",
            release_date: "November 18, 1997",
            wikipedia: "Titanic_(1997_film)",
            trailer: "2e-eXJ6HgkQ",
            poster: "img/titanic.jpg",
            genre: ["Drama", "Romance", "Thriller"]
        },
        {
            title: "To Catch a Thief",
            id: 381,
            overview: "A delightful Hitchcock film about an ex-burglar who must catch a thief who’s been copying this style before he gets accused of the wrong crimes. His time is running out as the police are close behind him yet he finds time for a little romance of course. A classic masterpiece starring Grace Kelly and Cary Grant.",
            runtime: "1 hr 46 mins",
            release_date: "August 3, 1955",
            wikipedia: "To_Catch_a_Thief",
            trailer: "t5Vs5anuc4U",
            poster: "img/to_catch_a_thief.jpg",
            genre: ["Crime", "Drama", "Mystery", "Romance", "Thriller"]
        },
        {
            title: "To Kill A Mockingbird",
            id: 595,
            overview: "In a small Alabama town in the 1930s, scrupulously honest and highly respected lawyer, Atticus Finch puts his career on the line when he agrees to represent Tom Robinson, a black man accused of rape. The trial and the events surrounding it are seen through the eyes of Finch's six-year-old daughter, Scout. While Robinson's trial gives the movie its momentum, there are plenty of anecdotal occurrences before and after the court date: Scout's ever-strengthening bond with older brother, Jem, her friendship with precocious young Dill Harris, her father's no-nonsense reactions to such life-and-death crises as a rampaging mad dog, and especially Scout's reactions to, and relationship with, Boo Radley, the reclusive 'village idiot' who turns out to be her salvation when she is attacked by a venomous bigot.",
            runtime: "2 hrs 9 mins",
            release_date: "December 25, 1962",
            wikipedia: "To_Kill_a_Mockingbird_(film)",
            trailer: "KR7loA_oziY",
            poster: "img/to_kill_a_mockingbird.jpg",
            genre: ["Crime", "Drama"]
        },
        {
            title: "Top Gun",
            id: 744,
            overview: "For Lieutenant Pete 'Maverick' Mitchell and his friend and co-pilot Nick 'Goose' Bradshaw, being accepted into an elite training school for fighter pilots is a dream come true. But a tragedy, as well as personal demons, will threaten Pete's dreams of becoming an ace pilot.",
            runtime: "1 hr 50 mins",
            release_date: "May 16, 1986",
            wikipedia: "Top_Gun",
            trailer: "xa_z57UatDY",
            poster: "img/top_gun.jpg",
            genre: ["Action", "Drama"]
        },
        {
            title: "Top Gun: Maverick",
            id: 361743,
            overview: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
            runtime: "2 hrs 11 mins",
            release_date: "May 27, 2022",
            wikipedia: "Top_Gun:_Maverick",
            trailer: "giXco2jaZ_4",
            poster: "img/top_gun_maverick.jpg",
            genre: ["Action", "Drama"]
        },
        {
            title: "Total Recall",
            id: 861,
            overview: "Construction worker Douglas Quaid discovers a memory chip in his brain during a virtual-reality trip. He also finds that his past has been invented to conceal a plot of planetary domination. Soon, he's off to Mars to find out who he is and who planted the chip.",
            runtime: "1 hr 53 mins",
            release_date: "June 01, 1990",
            wikipedia: "Total_Recall_(1990_film)",
            trailer: "2DwNb-ZGVjE",
            poster: "img/total_recall.jpg",
            genre: ["Action", "Adventure", "Science Fiction"]
        },
        {
            title: "Training Day",
            id: 2034,
            overview: "On his first day on the job as a narcotics officer, a rookie cop works with a rogue detective who isn't what he appears.",
            runtime: "2 hrs 2 mins",
            release_date: "October 05, 2001",
            wikipedia: "Training_Day",
            trailer: "DXPJqRtkDP0",
            poster: "img/training_day.jpg",
            genre: ["Action", "Crime", "Drama", "Thriller"]
        },
        {
            title: "Tropic Thunder",
            id: 7446,
            overview: "Vietnam veteran 'Four Leaf' Tayback's memoir, Tropic Thunder, is being made into a film, but Director Damien Cockburn can’t control the cast of prima donnas. Behind schedule and over budget, Cockburn is ordered by a studio executive to get filming back on track, or risk its cancellation. On Tayback's advice, Cockburn drops the actors into the middle of the jungle to film the remaining scenes but, unbeknownst to the actors and production, the group have been dropped in the middle of the Golden Triangle, the home of heroin-producing gangs.",
            runtime: "1 hr 47 mins",
            release_date: "August 9, 2008",
            wikipedia: "Tropic_Thunder",
            trailer: "T-6YhRZowgc",
            poster: "img/tropic_thunder.jpg",
            genre: ["Action", "Comedy"]
        },
        {
            title: "True Lies",
            id: 36955,
            overview: "Harry Tasker is a secret agent for the United States Government. For years, he has kept his job from his wife, but is forced to reveal his identity and try to stop nuclear terrorists when he and his wife are kidnapped by them.",
            runtime: "2 hrs 21 mins",
            release_date: "July 14, 1994",
            wikipedia: "True_Lies",
            trailer: "3B7HG8_xbDw",
            poster: "img/true_lies.jpg",
            genre: ["Action", "Thriller"]
        },
        {
            title: "True Romance",
            id: 319,
            overview: "Clarence marries hooker Alabama, steals cocaine from her pimp, and tries to sell it in Hollywood, while the owners of the coke try to reclaim it.",
            runtime: "2 hrs 0 mins",
            release_date: "September 9, 1993",
            wikipedia: "True_Romance",
            trailer: "_wNYNDzKpuQ",
            poster: "img/true_romance.jpg",
            genre: ["Action", "Crime", "Romance"]
        },
        {
            title: "Tulsa King",
            id: 153312,
            overview: "Just after he is released from prison after 25 years, New York mafia capo Dwight “The General” Manfredi is unceremoniously exiled by his boss to set up shop in Tulsa, Okla. Realizing that his mob family may not have his best interests in mind, Dwight slowly builds a “crew” from a group of unlikely characters, to help him establish a new criminal empire in a place that to him might as well be another planet.",
            runtime: "40 mins",
            release_date: "November 13, 2022",
            wikipedia: "U8aTTyYfVOE",
            trailer: "Tulsa_King",
            poster: "img/tulsa_king.jpg",
            genre: ["Crime", "Drama"]
        },
        {
            title: "Uncut Gems",
            id: 473033,
            overview: "A charismatic New York City jeweler always on the lookout for the next big score makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides in his relentless pursuit of the ultimate win.",
            runtime: "2 hrs 6 mins",
            release_date: "November 14, 2019",
            wikipedia: "Uncut_Gems",
            trailer: "vTfJp2Ts9X8",
            poster: "img/uncut_gems.jpg",
            genre: ["Crime", "Thriller", "Drama", "Comedy"]
        },
        {
            title: "Under Siege",
            id: 8845,
            overview: "Disgruntled ex-CIA operative Strannix, his assistant Krill and their group of terrorists seize the battleship with nuclear blackmail in mind. They've planned for every contingency but ignore the ship's cook, former Navy SEAL Casey Ryback -- an error that could be fatal.",
            runtime: "1 hr 43 mins",
            release_date: "October 09, 1992",
            wikipedia: "Under_Siege",
            trailer: "JO1sXQ8DpYc",
            poster: "img/under_siege.jpg",
            genre: ["Action", "Thriller"]
        },
        {
            title: "Unforgiven",
            id: 33,
            overview: "William Munny is a retired, once-ruthless killer turned gentle widower and hog farmer. To help support his two motherless children, he accepts one last bounty-hunter mission to find the men who brutalized a prostitute. Joined by his former partner and a cocky greenhorn, he takes on a corrupt sheriff.",
            runtime: "2 hrs 11 mins",
            release_date: "August 07, 1992",
            wikipedia: "Unforgiven",
            trailer: "ftTX4FoBWlE",
            poster: "img/unforgiven.jpg",
            genre: ["Western"]
        },
        {
            title: "Vanilla Sky",
            id: 1903,
            overview: "David Aames (Tom Cruise) has it all: wealth, good looks and gorgeous women on his arm. But just as he begins falling for the warmhearted Sofia (Penelope Cruz), his face is horribly disfigured in a car accident. That's just the beginning of his troubles as the lines between illusion and reality, between life and death, are blurred.",
            runtime: "2 hrs 16 mins",
            release_date: "December 10, 2001",
            wikipedia: "Vanilla_Sky",
            trailer: "BOFHvI5Rob8",
            poster: "img/vanilla_sky.jpg",
            genre: ["Drama", "Mystery", "Romance", "Science Fiction", "Thriller"]
        },
        {
            title: "Vertigo",
            id: 426,
            overview: "A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
            runtime: "2 hrs 8 mins",
            release_date: "May 9, 1958",
            wikipedia: "Vertigo_(film)",
            trailer: "Z5jvQwwHQNY",
            poster: "img/vertigo.jpg",
            genre: ["Mystery", "Romance", "Thriller"]
        },
        {
            title: "Vice",
            id: 429197,
            overview: "George W. Bush picks Dick Cheney, the CEO of Halliburton Co., to be his Republican running mate in the 2000 presidential election. No stranger to politics, Cheney's impressive résumé includes stints as White House chief of staff, House Minority Whip and defense secretary. When Bush wins by a narrow margin, Cheney begins to use his newfound power to help reshape the country and the world.",
            runtime: "2 hrs 12 mins",
            release_date: "December 25, 2018",
            wikipedia: "Vice_(2018_film)",
            trailer: "aSGFt6w0wok",
            poster: "img/vice.jpg",
            genre: ["Drama", "History", "Comedy"]
        },
        {
            title: "Wag the Dog",
            id: 586,
            overview: "During the final weeks of a presidential race, the President is accused of sexual misconduct. To distract the public until the election, the President's adviser hires a Hollywood producer to help him stage a fake war.",
            runtime: "1 hr 37 mins",
            release_date: "December 25, 1997",
            wikipedia: "Wag_the_Dog",
            trailer: "CNo0BicRM8k",
            poster: "img/wag_the_dog.jpg",
            genre: ["Comedy", "Drama"]
        },
        {
            title: "Wall Street",
            id: 10673,
            overview: "A young and impatient stockbroker is willing to do anything to get to the top, including trading on illegal inside information taken through a ruthless and greedy corporate raider whom takes the youth under his wing.",
            runtime: "2 hrs 6 mins",
            release_date: "December 10, 1987",
            wikipedia: "Wall_Street_(1987_film)",
            trailer: "2KqKHuPa2J8",
            poster: "img/wall_street.jpg",
            genre: ["Crime", "Drama"]
        },
        {
            title: "Wall Street: Money Never Sleeps",
            id: 33909,
            overview: "As the global economy teeters on the brink of disaster, a young Wall Street trader partners with disgraced former Wall Street corporate raider Gordon Gekko on a two tiered mission: To alert the financial community to the coming doom, and to find out who was responsible for the death of the young trader's mentor.",
            runtime: "2 hrs 13 mins",
            release_date: "September 02, 2010",
            wikipedia: "Wall_Street:_Money_Never_Sleeps",
            trailer: "q7j8leLG8fc",
            poster: "img/wall_street_2.jpg",
            genre: ["Crime", "Drama"]
        },
        {
            title: "WALL·E",
            id: 10681,
            overview: "WALL·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALL·E thinks he's finally found a friend and stows away on the ship when it leaves.",
            runtime: "1 hr 38 mins",
            release_date: "June 22, 2008",
            wikipedia: "WALL-E",
            trailer: "8-_9n5DtKOc",
            poster: "img/wall-e.jpg",
            genre: ["Animation", "Family"]
        },
        {
            title: "War Dogs",
            id: 308266,
            overview: "Based on the true story of two young men, David Packouz and Efraim Diveroli, who won a $300 million contract from the Pentagon to arm America's allies in Afghanistan.",
            runtime: "1 hr 54 mins",
            release_date: "August 17, 2016",
            wikipedia: "War_Dogs_(2016_film)",
            trailer: "Rwh9c_E3dJk",
            poster: "img/war_dogs.jpg",
            genre: ["Comedy", "Crime", "Drama"]
        },
        {
            title: "Watchmen",
            id: 13183,
            overview: "In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated. The reunited heroes set out to prevent their own destruction, but in doing so uncover a sinister plot that puts all of humanity in grave danger.",
            runtime: "2 hrs 43 mins",
            release_date: "March 05, 2009",
            wikipedia: "Watchmen_(film)",
            trailer: "PVgUZ2NSzBo",
            poster: "img/watchmen.jpg",
            genre: ["Action", "Mystery", "Science Fiction"]
        },
        {
            title: "WeWork: or The Making and Breaking of a $47 Billion Unicorn",
            id: 795622,
            overview: "Explore the rise and fall of one of the biggest corporate flameouts and venture capitalist bubbles in recent years – the story of WeWork, and its hippie-messianic leader Adam Neumann.",
            runtime: "1 hr 44 mins",
            release_date: "March 17, 2021",
            wikipedia: "WeWork:_Or_the_Making_and_Breaking_of_a_$47_Billion_Unicorn",
            trailer: "HVAESeO7dgc",
            poster: "img/wework.jpg",
            genre: ["Documentary"]
        },
        {
            title: "When Harry Met Sally",
            id: 639,
            overview: "During their travel from Chicago to New York, Harry and Sally debate whether or not sex ruins a friendship between a man and a woman. Eleven years later, and they're still no closer to finding the answer.",
            runtime: "1 hr 36 mins",
            release_date: "July 21, 1989",
            wikipedia: "When_Harry_Met_Sally...",
            trailer: "vmSpCLefjnw",
            poster: "img/when_harry_met_sally.jpg",
            genre: ["Comedy", "Romance", "Drama"]
        },
        {
            title: "Whiplash",
            id: 244786,
            overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
            runtime: "1 hr 47 mins",
            release_date: "October 15, 2014",
            wikipedia: "Whiplash_(2014_film)",
            trailer: "7d_jQycdQGo",
            poster: "img/whiplash.jpg",
            genre: ["Drama", "Music"]
        },
        {
            title: "Yi Yi",
            id: 25538,
            overview: "Each member of a family in Taipei asks hard questions about life's meaning as they live through everyday quandaries.",
            runtime: "2 hr 53 mins",
            release_date: "September 20, 2000",
            wikipedia: "Yi_Yi",
            trailer: "8F6tSorwYqw",
            poster: "img/yi_yi.jpg",
            genre: ["Drama", "Romance"]
        },
        {
            title: "Your Name",
            id: 372058,
            overview: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
            runtime: "1 hr 46 mins",
            release_date: "August 26, 2016",
            wikipedia: "Your_Name",
            trailer: "o4-URMnBOPU",
            poster: "img/your_name.jpg",
            genre: ["Romance", "Animation", "Drama"]
        },
        {
            title: "Zero Dark Thirty",
            id: 97630,
            overview: "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L. Team 6 in May, 2011.",
            runtime: "2 hrs 37 mins",
            release_date: "December 19, 2012",
            wikipedia: "Zero_Dark_Thirty",
            trailer: "EYFhFYoDAo4",
            poster: "img/zero_dark_thirty.jpg",
            genre: ["Thriller", "Drama", "History"]
        },
        {
            title: "Zootopia",
            id: 269149,
            overview: "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
            runtime: "1 hr 48 mins",
            release_date: "February 11, 2016",
            wikipedia: "Zootopia",
            trailer: "jWM0ct-OLsM",
            poster: "img/zootopia.jpg",
            genre: ["Animation", "Adventure", "Family", "Comedy"]
        }
    ];
    window.movieObject = movieObject;

    lazyload();

    $.when.apply($, movieObject.forEach(function (item) {
        var myPsudoRuntime = item.runtime.split(" ");
        var a = myPsudoRuntime[0];
        var b = myPsudoRuntime[2];
        myRuntime = +a * 60 + +b;

        var myPsudoReleaseDate = item.release_date.split(" ");
        var monthtbl = {
            January: 1,
            February: 2,
            March: 3,
            April: 4,
            May: 5,
            June: 6,
            July: 7,
            August: 8,
            September: 9,
            October: 10,
            November: 11,
            December: 12
        };

        var monthNumber = monthtbl[myPsudoReleaseDate[0]];

        var dayNumber = myPsudoReleaseDate[1];
        dayNumber = +dayNumber.slice(0, -1);

        var yearNumber = +myPsudoReleaseDate[2];

        var myReleaseDate = monthNumber * 30 + dayNumber + yearNumber * 365;

        var genreFilter = "";
        item.genre.map(function (element) {
            genreFilter = genreFilter + " " + element.toLowerCase();
        });

        var genreList = item.genre.map(function (element) {
            return " " + element;
        });

        $(".container-fluid").append(
            '<div ontouchstart="this.classList.toggle("hover");" class="flip-container' +
            genreFilter +
            '"><div class="flipper" ><div class="front"><img class="poster lazyload" src="' +
            item.poster +
            '" alt="" /></div><div class="back"><ul><li class="original_title">' +
            item.title +
            '</li><li class="overview">' +
            item.overview +
            '</li><li class="genre"><b>Genre:</b> ' +
            genreList +
            '</li><li class="runtime"><b>Runtime:</b> ' +
            item.runtime +
            '</li><li class="psudo-runtime">' +
            myRuntime +
            '</li><li class="release_date"><b>Release date:</b> ' +
            item.release_date +
            '</li><li class="psudo-release_date">' +
            myReleaseDate +
            '</li><li class="wikipedia"><a class="aWikipedia" href="https://en.wikipedia.org/wiki/' +
            item.wikipedia +
            '" target="_blank"><i class="fa fa-wikipedia-w" aria-hidden="true"></i> Wikipedia</a></li><li class="trailer"><a class="aTrailer" href="https://www.youtube.com/embed/' +
            item.trailer +
            '" data-featherlight="iframe"><i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i> Watch Trailer</a></li></ul></div></div></div>'
        );
        $(".aTrailer").featherlight();

    })).then(function () {
        isotope();
    }); //movieObject.forEach
}); //document.ready--end


function isotope() {
    var $grid = $(".container-fluid").isotope({
        itemSelector: ".flip-container",
        masonry: {
            columnWidth: ".flip-container",
            isFitWidth: true,
            layoutMode: 'fitRows'
        },
        getSortData: {
            titleAscending: ".original_title",
            titleDescending: ".original_title",
            lengthShort: ".psudo-runtime parseInt",
            lengthLong: ".psudo-runtime parseInt",
            releaseNew: ".psudo-release_date parseInt",
            releaseOld: ".psudo-release_date parseInt"
        },
        sortAscending: {
            titleAscending: true,
            titleDescending: false,
            lengthShort: true,
            lengthLong: false,
            releaseNew: false,
            releaseOld: true
        }
    });

    //Sort dropdown
    $("select.sort").on("change", function () {
        var optionSort = $(this).find("option:selected");
        var sortValue = optionSort.attr("data-sort-value");
        console.log(sortValue);
        $grid.isotope({
            sortBy: sortValue
        });
        $(".searchTerm").val("");
    });

    //Filter dropdown
    $("select.filter").on("change", function () {
        var optionFilter = $(this).find("option:selected");
        var filterValue = optionFilter.attr("data-filter");
        console.log(filterValue);
        $grid.isotope({
            filter: filterValue
        });
        $(".searchTerm").val("");
    });

    //Filter counter
    $(".controls select.filter option").each(function () {
        var filterName = $(this).text();
        var filterNameCounter = $grid.data('isotope').filteredItems.filter(function (obj) {
            return obj.element.className.indexOf(filterName.toLocaleLowerCase()) != -1;
        });
        //console.log(filterNameCounter);
        $(this).text(filterName + ' (' + filterNameCounter.length + ')');
    });

    $(".controls select.filter option:first-child").text('All Genre' + ' (' + $grid.data('isotope').filteredItems.length + ')');


    var qsRegex;

    function searchFilter() {
        qsRegex = new RegExp($quicksearch.val(), "gi");
        $grid.isotope({
            filter: function () {
                return qsRegex ?
                    $(this).find(".original_title").text().match(qsRegex) :
                    true;
            }
        });
    }

    // use value of search field to filter
    var $quicksearch = $(".searchTerm").keyup(debounce(searchFilter));

    //Debounce so filtering doesn't happen every millisecond
    function debounce(fn, threshold) {
        var timeout;
        return function debounced() {
            if (timeout) {
                clearTimeout(timeout);
            }
            function delayed() {
                fn();
                timeout = null;
            }
            timeout = setTimeout(delayed, threshold || 100);
        };
    }
} //Function isotope
