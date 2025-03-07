// Sample player data (replace with your actual data)
const players = {
    1: { Position: '2B', Player_Name: 'Xorge Garbanzo', Card_Image_URL: 'https://i.imgur.com/gWsgma6.png' },
    2: { Position: 'SP', Player_Name: 'Colby Koffman', Card_Image_URL: 'https://i.imgur.com/3mC9nKI.png' },
    3: { Position: '2B', Player_Name: 'Dee Fernandez', Card_Image_URL: 'https://i.imgur.com/MfzxvrL.png' },
    4: { Position: 'SP', Player_Name: 'Steven Slothsburg', Card_Image_URL: 'https://i.imgur.com/nSMDzbX.png' },
    5: { Position: 'RP', Player_Name: 'Fridjtof Nansen', Card_Image_URL: 'https://i.imgur.com/IJOR656.png' },
    6: { Position: 'RP', Player_Name: 'Leonidas Longpipe', Card_Image_URL: 'https://i.imgur.com/rBueKAa.png' },
    7: { Position: 'RP', Player_Name: 'Thorne Belfour', Card_Image_URL: 'https://i.imgur.com/y8bQlbI.png' },
    8: { Position: 'RP', Player_Name: 'Pedro Martini', Card_Image_URL: 'https://i.imgur.com/OUpho1I.png' },
    9: { Position: 'RF', Player_Name: 'Dazen Guile', Card_Image_URL: 'https://i.imgur.com/EPQ4enC.png' },
    10: { Position: 'SS', Player_Name: 'Marc Southworth', Card_Image_URL: 'https://i.imgur.com/midlRg5.png' },
    11: { Position: '2B', Player_Name: 'Scottie Stirling', Card_Image_URL: 'https://i.imgur.com/ToAmwVF.png' },
    12: { Position: 'SS', Player_Name: 'Arya Harper', Card_Image_URL: 'https://i.imgur.com/vZh44Qw.png' },
    13: { Position: '2B', Player_Name: 'Sebastian O\'Tage', Card_Image_URL: 'https://i.imgur.com/CLLz1Ae.png' },
    14: { Position: 'SP', Player_Name: 'Artemis Aria', Card_Image_URL: 'https://i.imgur.com/crkt7l9.png' },
    15: { Position: 'LF', Player_Name: 'Tedford Woofington Jr.', Card_Image_URL: 'https://i.imgur.com/5xvsFX5.png' },
    16: { Position: 'SS', Player_Name: 'Criss Angel', Card_Image_URL: 'https://i.imgur.com/uLi31vl.png' },
    17: { Position: 'C', Player_Name: 'Alaskan Bull-Worm', Card_Image_URL: 'https://i.imgur.com/EM2cOSt.png' },
    18: { Position: 'SP', Player_Name: 'Kim Ji-Woo', Card_Image_URL: 'https://i.imgur.com/OfLSWvi.png' },
    19: { Position: 'SP', Player_Name: 'Toby Ziegler', Card_Image_URL: 'https://i.imgur.com/tYpxePP.png' },
    20: { Position: '2B', Player_Name: 'Dee Fernandez', Card_Image_URL: 'https://i.imgur.com/AQv7Qi7.png' },
    21: { Position: 'SP', Player_Name: 'Steven Slothsburg', Card_Image_URL: 'https://i.imgur.com/qOLoeJr.png' },
    22: { Position: 'SS', Player_Name: 'Ichiban Sokudo', Card_Image_URL: 'https://i.imgur.com/UkXmrj3.png' },
    23: { Position: '1B', Player_Name: 'Ted Giannoulas', Card_Image_URL: 'https://i.imgur.com/5ymMLkV.png' },
    24: { Position: '1B', Player_Name: 'Troy Murphy', Card_Image_URL: 'https://i.imgur.com/3N6vNyK.png' },
    25: { Position: 'CF', Player_Name: 'Nash deVille', Card_Image_URL: 'https://i.imgur.com/tJKGV4i.png' },
    26: { Position: '2B', Player_Name: 'Bass Reeves', Card_Image_URL: 'https://i.imgur.com/NDEjKQj.png' },
    27: { Position: 'SP', Player_Name: 'Wombat Jones', Card_Image_URL: 'https://i.imgur.com/07JbxHh.png' },
    28: { Position: 'C', Player_Name: 'Ashley Joanna Williams', Card_Image_URL: 'https://i.imgur.com/mfneuej.png' },
    29: { Position: 'RF', Player_Name: 'Bradley Wellerman', Card_Image_URL: 'https://i.imgur.com/1KqSa58.png' },
    30: { Position: 'LF', Player_Name: 'Sir Poe', Card_Image_URL: 'https://i.imgur.com/szUk7Ae.png' },
    31: { Position: 'CF', Player_Name: 'A Starting Pitcher', Card_Image_URL: 'https://i.imgur.com/UlKycR2.png' },
    32: { Position: 'LF', Player_Name: 'Carl Beaty Jr.', Card_Image_URL: 'https://i.imgur.com/ZGdL9xq.png' },
    33: { Position: 'SP', Player_Name: 'Usada Pekora', Card_Image_URL: 'https://i.imgur.com/Fd4cWot.png' },
    34: { Position: 'CF', Player_Name: 'Tyler Detherage', Card_Image_URL: 'https://i.imgur.com/s3V0Fop.png' },
    35: { Position: 'SP', Player_Name: 'Brian Eshleman Jr.', Card_Image_URL: 'https://i.imgur.com/I8NuFs1.png' },
    36: { Position: 'SP', Player_Name: 'Ichabod Kranepool', Card_Image_URL: 'https://i.imgur.com/aMyoBOB.png' },
    37: { Position: 'SP', Player_Name: 'Korrin Abernathy Jr.', Card_Image_URL: 'https://i.imgur.com/7pw06GS.png' },
    38: { Position: 'SP', Player_Name: 'Benjamin Abenduct', Card_Image_URL: 'https://i.imgur.com/jWucJd7.png' },
    39: { Position: 'SP', Player_Name: 'Joe Kelly', Card_Image_URL: 'https://i.imgur.com/m8oZffz.png' },
    40: { Position: 'SS', Player_Name: 'Beau Nappeteat', Card_Image_URL: 'https://i.imgur.com/EseqGw6.png' },
    41: { Position: '2B', Player_Name: 'Shane Ziegler', Card_Image_URL: 'https://i.imgur.com/SJQvF5y.png' },
    42: { Position: 'CF', Player_Name: 'Shrimp McDaniel', Card_Image_URL: 'https://i.imgur.com/WWIXdTw.png' },
    43: { Position: 'SP', Player_Name: 'Center Fielder', Card_Image_URL: 'https://i.imgur.com/cilXYl0.png' },
    44: { Position: '2B', Player_Name: 'Xorge Garbanzo', Card_Image_URL: 'https://i.imgur.com/aMMa1PB.png' },
    45: { Position: 'SP', Player_Name: 'Robert Green', Card_Image_URL: 'https://i.imgur.com/0kbopBM.png' },
    46: { Position: 'LF', Player_Name: 'Yvonne Escence', Card_Image_URL: 'https://i.imgur.com/rYBiOrw.png' },
    47: { Position: 'CF', Player_Name: 'Razmataz Buckshank', Card_Image_URL: 'https://i.imgur.com/cm0Vn1Z.png' },
    48: { Position: 'SS', Player_Name: 'Don Marcus', Card_Image_URL: 'https://i.imgur.com/cG6IYfm.png' },
    49: { Position: '3B', Player_Name: 'Jefferson Steelflex', Card_Image_URL: 'https://i.imgur.com/kLt40fn.png' },
    50: { Position: '1B', Player_Name: 'Kerry Keli', Card_Image_URL: 'https://i.imgur.com/1pVzCPF.png' },
    51: { Position: '3B', Player_Name: 'Sting Eucliffe', Card_Image_URL: 'https://i.imgur.com/IjSB4il.png' },
    52: { Position: '1B', Player_Name: 'UnrulyRowdyDiamonds AreClearNotCloudy', Card_Image_URL: 'https://i.imgur.com/CftM19K.png' },
    53: { Position: '1B', Player_Name: 'Danny Burgers', Card_Image_URL: 'https://i.imgur.com/z1OxVeU.png' },
    54: { Position: 'C', Player_Name: 'Leonidas Ruiz', Card_Image_URL: 'https://i.imgur.com/yreLV20.png' },
    55: { Position: '1B', Player_Name: 'Feka Ohi Kau', Card_Image_URL: 'https://i.imgur.com/e06jCp9.png' },
    56: { Position: 'SP', Player_Name: 'Lanky Schramm', Card_Image_URL: 'https://i.imgur.com/ubMX5rJ.png' },
    57: { Position: 'SP', Player_Name: 'Luna José Rodríguez Ortiz', Card_Image_URL: 'https://i.imgur.com/IZD1ry8.png' },
    58: { Position: 'SP', Player_Name: 'Sloppy Joe', Card_Image_URL: 'https://i.imgur.com/Txy1pW1.png' },
    59: { Position: 'SP', Player_Name: 'Professor Farnsworth', Card_Image_URL: 'https://i.imgur.com/h2aXALe.png' },
    60: { Position: '2B', Player_Name: 'Enrique von Caliente', Card_Image_URL: 'https://i.imgur.com/0Tz2y6U.png' },
    61: { Position: 'RP', Player_Name: 'Calvin Ball', Card_Image_URL: 'https://i.imgur.com/q5Zl2Ch.png' },
    62: { Position: '3B', Player_Name: 'Tommy Callahan', Card_Image_URL: 'https://i.imgur.com/kPeJFaX.png' },
    63: { Position: 'SP', Player_Name: 'Fridtjof Nansen', Card_Image_URL: 'https://i.imgur.com/JtPJGtR.png' },
    64: { Position: 'SS', Player_Name: 'Yeti Taz', Card_Image_URL: 'https://i.imgur.com/Hb9BuSW.png' },
    65: { Position: 'SS', Player_Name: 'Brooks Walker', Card_Image_URL: 'https://i.imgur.com/6nE3GHK.png' },
    66: { Position: 'CF', Player_Name: 'Kayden Trantow', Card_Image_URL: 'https://i.imgur.com/CI07qcf.png' },
    67: { Position: '3B', Player_Name: 'Abigail Mills', Card_Image_URL: 'https://i.imgur.com/gAdbDP5.png' },
    68: { Position: 'C', Player_Name: 'Gabriel Katcher-Scudder', Card_Image_URL: 'https://i.imgur.com/xizDrnF.png' },
    69: { Position: 'SP', Player_Name: 'Brigham Irons', Card_Image_URL: 'https://i.imgur.com/xsjcMfC.png' },
    70: { Position: 'SP', Player_Name: 'Retsnomekalyag Kove', Card_Image_URL: 'https://i.imgur.com/gqqICFB.png' },
    71: { Position: 'SS', Player_Name: 'Julian O\'Sullivan Jr.', Card_Image_URL: 'https://i.imgur.com/tPIWO02.png' },
    72: { Position: 'RP', Player_Name: 'GOAT TANK', Card_Image_URL: 'https://i.imgur.com/uxQMglT.png' },
    73: { Position: 'C', Player_Name: 'Avada Kedavra', Card_Image_URL: 'https://i.imgur.com/qVIpSBS.png' },
    74: { Position: '1B', Player_Name: 'Dimpley Splorger', Card_Image_URL: 'https://i.imgur.com/ItzAPp8.png' },
    75: { Position: 'LF', Player_Name: 'Smalls', Card_Image_URL: 'https://i.imgur.com/I84l6No.png' },
    76: { Position: 'CF', Player_Name: 'Rhyno Legg', Card_Image_URL: 'https://i.imgur.com/VPhhjC6.png' },
    77: { Position: '3B', Player_Name: 'Daniel Plainview', Card_Image_URL: 'https://i.imgur.com/XpzRF7K.png' },
    78: { Position: 'SP', Player_Name: 'Dizzy Stoner', Card_Image_URL: 'https://i.imgur.com/ovTHHOM.png' },
    79: { Position: 'RP', Player_Name: 'The Phantom', Card_Image_URL: 'https://i.imgur.com/9ES2gKS.png' },
    80: { Position: 'C', Player_Name: 'Steve Duke', Card_Image_URL: 'https://i.imgur.com/yTYTE7c.png' },
    81: { Position: 'RF', Player_Name: 'Enderman', Card_Image_URL: 'https://i.imgur.com/Zb2UShn.png' },
    82: { Position: 'SP', Player_Name: 'Ren Toltraid', Card_Image_URL: 'https://i.imgur.com/YdR07ou.png' },
    83: { Position: 'LF', Player_Name: 'Philip Alou', Card_Image_URL: 'https://i.imgur.com/nfDX0j3.png' },
    84: { Position: 'CF', Player_Name: 'Justin Fern', Card_Image_URL: 'https://i.imgur.com/3Kmd9Ld.png' },
    85: { Position: 'CF', Player_Name: 'Nolan Tegge', Card_Image_URL: 'https://i.imgur.com/n53y5am.png' },
    86: { Position: 'RP', Player_Name: 'Thorne Belfour', Card_Image_URL: 'https://i.imgur.com/ppRwF9L.png' },
    87: { Position: '2B', Player_Name: 'Videl Valor Jr.', Card_Image_URL: 'https://i.imgur.com/qPvqDxY.png' },
    88: { Position: 'RF', Player_Name: 'Hayden Andrews Jr.', Card_Image_URL: 'https://i.imgur.com/RJMDnUi.png' },
    89: { Position: 'CF', Player_Name: 'Aaron Henry', Card_Image_URL: 'https://i.imgur.com/DeN8t4M.png' },
    90: { Position: 'SP', Player_Name: 'Strider', Card_Image_URL: 'https://i.imgur.com/NLVo8NS.png' },
    91: { Position: 'SP', Player_Name: 'Colby Koffman', Card_Image_URL: 'https://i.imgur.com/0mFUgQn.png' },
    92: { Position: 'SP', Player_Name: 'Ray Xavier', Card_Image_URL: 'https://i.imgur.com/6my9Dvx.png' },
    93: { Position: 'SS', Player_Name: 'Steven Strange', Card_Image_URL: 'https://i.imgur.com/Tw2Ub05.png' },
    94: { Position: 'SP', Player_Name: 'Always A. Bummus', Card_Image_URL: 'https://i.imgur.com/c2aMJzY.png' },
    95: { Position: '3B', Player_Name: 'Murphy LeSwift', Card_Image_URL: 'https://i.imgur.com/490toGN.png' },
    96: { Position: 'SP', Player_Name: 'Cash Considerations', Card_Image_URL: 'https://i.imgur.com/MOrBIJL.png' },
    97: { Position: 'RF', Player_Name: 'Yneas Kove', Card_Image_URL: 'https://i.imgur.com/5ui6lq5.png' },
    98: { Position: 'SS', Player_Name: 'Literal Flamingo', Card_Image_URL: 'https://i.imgur.com/dezg64Z.png' },
    99: { Position: 'SP', Player_Name: 'Johnny Tatum', Card_Image_URL: 'https://i.imgur.com/wsXae19.png' },
    100: { Position: 'SP', Player_Name: 'Andy Beans', Card_Image_URL: 'https://i.imgur.com/yXVVQVw.png' },
    101: { Position: 'CF', Player_Name: 'Sean Carrcrash', Card_Image_URL: 'https://i.imgur.com/nzwoCD4.png' },
    102: { Position: '2B', Player_Name: 'Harry Callahan', Card_Image_URL: 'https://i.imgur.com/BkqqWEb.png' },
    103: { Position: 'SP', Player_Name: 'J.C. Swishman', Card_Image_URL: 'https://i.imgur.com/iKaFiVK.png' },
    104: { Position: 'RF', Player_Name: 'Udo Bonga', Card_Image_URL: 'https://i.imgur.com/2zUI8xc.png' },
    105: { Position: 'SS', Player_Name: 'Pee Wee Rhys', Card_Image_URL: 'https://i.imgur.com/pwO7uo6.png' },
    106: { Position: 'SP', Player_Name: 'PDub Woods', Card_Image_URL: 'https://i.imgur.com/XtNnpJJ.png' },
    107: { Position: 'LF', Player_Name: 'Sobert Randberg', Card_Image_URL: 'https://i.imgur.com/t4Jmxqz.png' },
    108: { Position: 'RF', Player_Name: 'Lawn Gnomes', Card_Image_URL: 'https://i.imgur.com/b4tIw5A.png' },
    109: { Position: 'C', Player_Name: 'Chazz Lamborghini', Card_Image_URL: 'https://i.imgur.com/PeomuYm.png' },
    110: { Position: 'SS', Player_Name: 'Xander Azza', Card_Image_URL: 'https://i.imgur.com/Lq6Vpv0.png' },
    111: { Position: 'C', Player_Name: 'Sha Dynasty', Card_Image_URL: 'https://i.imgur.com/f5cUe0y.png' },
    112: { Position: 'C', Player_Name: 'Scott McNeilly', Card_Image_URL: 'https://i.imgur.com/GKn9CW3.png' },
    113: { Position: 'SP', Player_Name: 'Valorant Arcanum', Card_Image_URL: 'https://i.imgur.com/2g6crvs.png' },
    114: { Position: 'CF', Player_Name: 'Dan Johnston', Card_Image_URL: 'https://i.imgur.com/DzLtvZg.png' },
    115: { Position: '2B', Player_Name: 'Chadwick McGillicuddy', Card_Image_URL: 'https://i.imgur.com/IWwdOgR.png' },
    116: { Position: '3B', Player_Name: 'McLovin Jr.', Card_Image_URL: 'https://i.imgur.com/lLtupJF.png' },
    117: { Position: 'SP', Player_Name: 'Mike Boss III', Card_Image_URL: 'https://i.imgur.com/QdKAL8J.png' },
    118: { Position: '1B', Player_Name: 'Barry Allen', Card_Image_URL: 'https://i.imgur.com/LTkG5yk.png' },
    119: { Position: 'RP', Player_Name: 'Ransom Jones', Card_Image_URL: 'https://i.imgur.com/qesK5QY.png' },
    120: { Position: 'SP', Player_Name: 'Maurice Bernard', Card_Image_URL: 'https://i.imgur.com/cIXeyo4.png' },
    121: { Position: '3B', Player_Name: 'Jimmy Arenado', Card_Image_URL: 'https://i.imgur.com/zHsuxdY.png' },
    122: { Position: 'SP', Player_Name: 'Joe Random', Card_Image_URL: 'https://i.imgur.com/oghR9X8.png' },
    123: { Position: '3B', Player_Name: 'Pierre Phillip', Card_Image_URL: 'https://i.imgur.com/2YvimLP.png' },
    124: { Position: 'LF', Player_Name: 'Biff Slamous', Card_Image_URL: 'https://i.imgur.com/omVYgfO.png' },
    125: { Position: '2B', Player_Name: 'Mo Love', Card_Image_URL: 'https://i.imgur.com/lKHMr79.png' },
    126: { Position: 'SP', Player_Name: 'Xavier Pruitt', Card_Image_URL: 'https://i.imgur.com/U7Awaiu.png' },
    127: { Position: 'CF', Player_Name: 'Damien Thriller', Card_Image_URL: 'https://i.imgur.com/O7olH8I.png' },
    128: { Position: 'LF', Player_Name: 'Goren Emes', Card_Image_URL: 'https://i.imgur.com/DN4y35d.png' },
    129: { Position: 'SP', Player_Name: 'Shohei Ohtani', Card_Image_URL: 'https://i.imgur.com/wvFdtJK.png' },
    130: { Position: 'CF', Player_Name: 'Bartholomew Brown', Card_Image_URL: 'https://i.imgur.com/h2QsHEt.png' },
    131: { Position: 'SP', Player_Name: 'Zach Mulder', Card_Image_URL: 'https://i.imgur.com/w0I7Cal.png' },
    132: { Position: 'SP', Player_Name: 'Aaron Ford', Card_Image_URL: 'https://i.imgur.com/1usiVlP.png' },
    133: { Position: '2B', Player_Name: 'Jerry Mander', Card_Image_URL: 'https://i.imgur.com/9aGzB1u.png' },
    134: { Position: 'SP', Player_Name: 'Starburns Glorbenspeel', Card_Image_URL: 'https://i.imgur.com/4mTYTqq.png' },
    135: { Position: 'LF', Player_Name: 'Martinez Momspooner', Card_Image_URL: 'https://i.imgur.com/mKZ3OOw.png' },
    136: { Position: 'SP', Player_Name: 'Darren Clapp', Card_Image_URL: 'https://i.imgur.com/0rzmf3U.png' },
    137: { Position: 'CF', Player_Name: 'J.C. Tomlin', Card_Image_URL: 'https://i.imgur.com/INePLfG.png' },
    138: { Position: 'CF', Player_Name: 'Chef Gagne', Card_Image_URL: 'https://i.imgur.com/tolIrz9.png' },
    139: { Position: 'SP', Player_Name: 'Fenrir Lyken', Card_Image_URL: 'https://i.imgur.com/h0dzIk6.png' },
    140: { Position: '1B', Player_Name: 'Trex Dan', Card_Image_URL: 'https://i.imgur.com/FlBmMEf.png' },
    141: { Position: 'LF', Player_Name: 'Supercalifragilisticexpialidocious Snek', Card_Image_URL: 'https://i.imgur.com/XRhP5pl.png' },
    142: { Position: 'SP', Player_Name: 'Billy TheKid', Card_Image_URL: 'https://i.imgur.com/lG7aBUo.png' },
    143: { Position: 'LF', Player_Name: 'Kurtis McKenzie', Card_Image_URL: 'https://i.imgur.com/6Jkljid.png' },
    144: { Position: 'CF', Player_Name: 'Ethan Shadow', Card_Image_URL: 'https://i.imgur.com/PY5H3Tc.png' },
    145: { Position: 'SP', Player_Name: 'Hercules Mulligan', Card_Image_URL: 'https://i.imgur.com/WeKNCWy.png' },
    146: { Position: '2B', Player_Name: 'Dustin Becker', Card_Image_URL: 'https://i.imgur.com/QMxpuKf.png' },
    147: { Position: 'SP', Player_Name: 'Jihmih Beniko', Card_Image_URL: 'https://i.imgur.com/Xf7wNXB.png' },
    148: { Position: 'RP', Player_Name: 'Swingand Amiss', Card_Image_URL: 'https://i.imgur.com/AKkJgoh.png' },
    149: { Position: 'SP', Player_Name: 'Chris Cash', Card_Image_URL: 'https://i.imgur.com/vPyYsul.png' },
    150: { Position: 'SP', Player_Name: 'Baron Samedi', Card_Image_URL: 'https://i.imgur.com/frACHMV.png' },
    151: { Position: '2B', Player_Name: 'Itsumi Meo', Card_Image_URL: 'https://i.imgur.com/e3aLzNV.png' },
    152: { Position: 'SP', Player_Name: 'Femini Nomenon', Card_Image_URL: 'https://i.imgur.com/NSV9wRh.png' },
    153: { Position: 'SS', Player_Name: 'Otijomyzarc Kove', Card_Image_URL: 'https://i.imgur.com/hVmesiy.png' },
    154: { Position: 'SS', Player_Name: 'Hulk Savage', Card_Image_URL: 'https://i.imgur.com/btAmvZ2.png' },
    155: { Position: 'CF', Player_Name: 'Calvin Coolcrab', Card_Image_URL: 'https://i.imgur.com/sK8Zfj4.png' },
    156: { Position: '2B', Player_Name: 'Cod Rarew', Card_Image_URL: 'https://i.imgur.com/ro1kEFP.png' },
    157: { Position: 'C', Player_Name: 'Jeff Hopkins', Card_Image_URL: 'https://i.imgur.com/jVVxGnN.png' },
    158: { Position: 'SP', Player_Name: 'Sebastian Telfair', Card_Image_URL: 'https://i.imgur.com/iKOqC9b.png' },
    159: { Position: 'RP', Player_Name: 'Roquefort Cotswald', Card_Image_URL: 'https://i.imgur.com/zOOnZqz.png' },
    160: { Position: 'SP', Player_Name: 'Joey Moose Jr.', Card_Image_URL: 'https://i.imgur.com/hlrLM7U.png' },
    161: { Position: 'RP', Player_Name: 'Jay Blanco', Card_Image_URL: 'https://i.imgur.com/1CZmujF.png' },
    162: { Position: 'SS', Player_Name: 'Nolan Windsor Jr.', Card_Image_URL: 'https://i.imgur.com/9GEmF3O.png' },
    163: { Position: 'RP', Player_Name: 'M4XX V3L0', Card_Image_URL: 'https://i.imgur.com/FJt06Az.png' },
    164: { Position: 'DH', Player_Name: 'Xicoyotl Montalbán', Card_Image_URL: 'https://i.imgur.com/HRTDiEj.png' },
    165: { Position: 'RP', Player_Name: 'Iceman', Card_Image_URL: 'https://i.imgur.com/ch8ud73.png' },
    166: { Position: 'RP', Player_Name: 'Guy Roussy', Card_Image_URL: 'https://i.imgur.com/khqv3jS.png' },
    167: { Position: 'RP', Player_Name: 'Siegmeyer of Catarina', Card_Image_URL: 'https://i.imgur.com/CD8h7xT.png' },
    168: { Position: '3B', Player_Name: 'Commander Warsmoke', Card_Image_URL: 'https://i.imgur.com/GvaqkQH.png' },
    169: { Position: 'SP', Player_Name: 'Mejiro McQueen', Card_Image_URL: 'https://i.imgur.com/Y9uytg1.png' },
    170: { Position: 'SP', Player_Name: 'Dash Jackson', Card_Image_URL: 'https://i.imgur.com/Y099N8u.png' },
    171: { Position: 'RP', Player_Name: 'Calm Chicken', Card_Image_URL: 'https://i.imgur.com/gZDeLVl.png' },
    172: { Position: '3B', Player_Name: 'Danger Dollarson', Card_Image_URL: 'https://i.imgur.com/npafldN.png' },
    173: { Position: 'SP', Player_Name: 'Franklin Judge Cruiser', Card_Image_URL: 'https://i.imgur.com/7cfqWkG.png' },
    174: { Position: 'SP', Player_Name: 'Yeet Aball', Card_Image_URL: 'https://i.imgur.com/1oskT90.png' },
    175: { Position: 'C', Player_Name: 'Rob Littleton', Card_Image_URL: 'https://i.imgur.com/yPkL07P.png' },
    176: { Position: 'SP', Player_Name: 'Indiana Polis', Card_Image_URL: 'https://i.imgur.com/L3P72EQ.png' },
    177: { Position: 'SS', Player_Name: 'Odin CheekiSon', Card_Image_URL: 'https://i.imgur.com/KAMLezt.png' },
    178: { Position: 'SP', Player_Name: 'Aria Bluesky', Card_Image_URL: 'https://i.imgur.com/SY2mQqr.png' },
    179: { Position: '3B', Player_Name: 'Ashton Lansdell', Card_Image_URL: 'https://i.imgur.com/MkrpnKU.png' },
    180: { Position: 'SP', Player_Name: 'Holly Sheet', Card_Image_URL: 'https://i.imgur.com/CWS3ELt.png' },
    181: { Position: 'RP', Player_Name: 'Alejandro Abasi', Card_Image_URL: 'https://i.imgur.com/CTbGGf7.png' },
    182: { Position: 'RP', Player_Name: 'Ryan Lee', Card_Image_URL: 'https://i.imgur.com/BbFgiFV.png' },
    183: { Position: 'SP', Player_Name: 'Quant Tsimicalis Jr.', Card_Image_URL: 'https://i.imgur.com/0VuGQmW.png' },
    184: { Position: '1B', Player_Name: 'Moe Scatoes', Card_Image_URL: 'https://i.imgur.com/sTsl5G0.png' },
    185: { Position: 'SS', Player_Name: 'Holden Jamm', Card_Image_URL: 'https://i.imgur.com/TBaRLgp.png' },
    186: { Position: 'C', Player_Name: 'Satchel O\'Richards', Card_Image_URL: 'https://i.imgur.com/GJP8Ipx.png' },
    187: { Position: 'RP', Player_Name: 'Katsuki Bakugo', Card_Image_URL: 'https://i.imgur.com/wihU9m7.png' },
    188: { Position: 'RP', Player_Name: 'Wade Cilliams Jr.', Card_Image_URL: 'https://i.imgur.com/ZBRXKXI.png' },
    189: { Position: 'CF', Player_Name: 'Akshay Hrishikesh', Card_Image_URL: 'https://i.imgur.com/2ZDdtmW.png' },
    190: { Position: 'RP', Player_Name: 'J.Y. Park', Card_Image_URL: 'https://i.imgur.com/PS0YkpW.png' },
    191: { Position: '1B', Player_Name: 'Peter Dawson III', Card_Image_URL: 'https://i.imgur.com/NNnBdCC.png' },
    192: { Position: '1B', Player_Name: 'Nico Hernandez', Card_Image_URL: 'https://i.imgur.com/uDCULG8.png' },
    193: { Position: '2B', Player_Name: 'David Doug', Card_Image_URL: 'https://i.imgur.com/BFWe4ZB.png' },
    194: { Position: 'SP', Player_Name: 'Clay Homes', Card_Image_URL: 'https://i.imgur.com/vrCj9GX.png' },
    195: { Position: 'CF', Player_Name: 'Revan Shan', Card_Image_URL: 'https://i.imgur.com/z36rrCQ.png' },
    196: { Position: 'RP', Player_Name: 'Bandit Keith', Card_Image_URL: 'https://i.imgur.com/2yORg3k.png' },
    197: { Position: 'RP', Player_Name: 'Romeo McFlourish', Card_Image_URL: 'https://i.imgur.com/BPuiupk.png' },
    198: { Position: '2B', Player_Name: 'Lew Williams', Card_Image_URL: 'https://i.imgur.com/e56TtJW.png' },
    199: { Position: 'RP', Player_Name: 'Redd Rockman', Card_Image_URL: 'https://i.imgur.com/iqSHhbS.png' },
    200: { Position: 'SP', Player_Name: 'Juicy Jumbo', Card_Image_URL: 'https://i.imgur.com/LoVLEac.png' },
    201: { Position: '1B', Player_Name: 'Leon Rosenthal', Card_Image_URL: 'https://i.imgur.com/lvOWc6o.png' },
    202: { Position: 'LF', Player_Name: 'Matsui Hidari', Card_Image_URL: 'https://i.imgur.com/UtgPD1Z.png' },
    203: { Position: 'SS', Player_Name: 'Malcolm Kell', Card_Image_URL: 'https://i.imgur.com/5rQkbht.png' },
    204: { Position: 'SP', Player_Name: 'Frosty Steele', Card_Image_URL: 'https://i.imgur.com/VVRrmxz.png' },
    205: { Position: 'SS', Player_Name: 'Beckett Brooks', Card_Image_URL: 'https://i.imgur.com/3wbJiwq.png' },
    206: { Position: 'RP', Player_Name: 'Frigg Delling', Card_Image_URL: 'https://i.imgur.com/vri0gE4.png' },
    207: { Position: 'SP', Player_Name: 'Luther MacIntosh', Card_Image_URL: 'https://i.imgur.com/KPysXEc.png' },
    208: { Position: 'SP', Player_Name: 'Nova Montagne', Card_Image_URL: 'https://i.imgur.com/mggk1Vw.png' },
    209: { Position: 'RP', Player_Name: 'James Filtipaldi', Card_Image_URL: 'https://i.imgur.com/VYvMZqn.png' },
    210: { Position: 'RF', Player_Name: 'Bambi No', Card_Image_URL: 'https://i.imgur.com/f6rVKS1.png' },
    211: { Position: 'SS', Player_Name: 'Chauncey Ingram', Card_Image_URL: 'https://i.imgur.com/WuzZHQw.png' },
    212: { Position: 'SP', Player_Name: 'Lucas Winnolito', Card_Image_URL: 'https://i.imgur.com/ODNY8Cw.png' },
    213: { Position: 'SP', Player_Name: 'Rotgut Whiskey', Card_Image_URL: 'https://i.imgur.com/uaooSuB.png' },
    214: { Position: 'SP', Player_Name: 'Jose McForty-Three', Card_Image_URL: 'https://i.imgur.com/AjJdrz1.png' },
    215: { Position: 'C', Player_Name: 'Mengie Brolina', Card_Image_URL: 'https://i.imgur.com/EoYr3HG.png' },
    216: { Position: 'SP', Player_Name: 'Alessio', Card_Image_URL: 'https://i.imgur.com/amRI3Si.png' },
    217: { Position: 'SP', Player_Name: 'Kelvin Gauzeman', Card_Image_URL: 'https://i.imgur.com/6VIkq4A.png' },
    218: { Position: 'RP', Player_Name: 'Tim Westbrook', Card_Image_URL: 'https://i.imgur.com/wwX4cHi.png' },
    219: { Position: 'LF', Player_Name: 'Manny Alou', Card_Image_URL: 'https://i.imgur.com/TEoO2Kx.png' },
    220: { Position: 'SP', Player_Name: 'Pass', Card_Image_URL: 'https://i.imgur.com/onhN6DX.png' },
    221: { Position: 'RP', Player_Name: 'John Cowgill', Card_Image_URL: 'https://i.imgur.com/L7kqj3E.png' },
    222: { Position: 'RP', Player_Name: 'Capsaicin Shrub', Card_Image_URL: 'https://i.imgur.com/BF2KQtx.png' },
    223: { Position: 'SP', Player_Name: 'Ivy de Vries', Card_Image_URL: 'https://i.imgur.com/LqxG4Yn.png' },
    224: { Position: 'CF', Player_Name: 'Victor Cortez', Card_Image_URL: 'https://i.imgur.com/OhWbY7I.png' },
    225: { Position: 'SP', Player_Name: 'PK-VS', Card_Image_URL: 'https://i.imgur.com/dDoGqF2.png' },
    226: { Position: 'SP', Player_Name: 'Nathaniel Foot', Card_Image_URL: 'https://i.imgur.com/v9KrfH4.png' },
    227: { Position: '1B', Player_Name: 'Alpha Nerd', Card_Image_URL: 'https://i.imgur.com/amBXrpm.png' },
    228: { Position: 'SP', Player_Name: 'Mac John', Card_Image_URL: 'https://i.imgur.com/OlHiZVK.png' },
    229: { Position: 'RP', Player_Name: 'Remy Lebeau', Card_Image_URL: 'https://i.imgur.com/Xc3Ok82.png' },
    230: { Position: '1B', Player_Name: 'Barker Bubbs', Card_Image_URL: 'https://i.imgur.com/gwXDhmO.png' },
    231: { Position: 'CF', Player_Name: 'Jazzy Thompson', Card_Image_URL: 'https://i.imgur.com/IsJHpF9.png' },
    232: { Position: 'C', Player_Name: 'Aaron Rhysand III', Card_Image_URL: 'https://i.imgur.com/4hv16NJ.png' },
    233: { Position: 'SS', Player_Name: 'Honk Shue', Card_Image_URL: 'https://i.imgur.com/UhdeGiJ.png' },
    234: { Position: 'RP', Player_Name: 'Nathan Abel', Card_Image_URL: 'https://i.imgur.com/x6XvyAW.png' },
    235: { Position: '3B', Player_Name: 'Manuel Bang', Card_Image_URL: 'https://i.imgur.com/42OY7hj.png' },
    236: { Position: 'RF', Player_Name: 'Crazy Tomato II', Card_Image_URL: 'https://i.imgur.com/F0dYFuq.png' },
    237: { Position: '1B', Player_Name: 'Stuart', Card_Image_URL: 'https://i.imgur.com/AQaJXWa.png' },
    238: { Position: 'C', Player_Name: 'BIG RED ROCK EATER', Card_Image_URL: 'https://i.imgur.com/0ROs8zG.png' },
    239: { Position: 'CF', Player_Name: 'Tonk Mato', Card_Image_URL: 'https://i.imgur.com/oGGuZwL.png' },
    240: { Position: 'RP', Player_Name: 'Kenny DeNunez', Card_Image_URL: 'https://i.imgur.com/1V4Ed52.png' },
    241: { Position: 'RP', Player_Name: 'Pedro Martini', Card_Image_URL: 'https://i.imgur.com/Enqn31d.png' },
    242: { Position: 'SP', Player_Name: 'Roman Melgar', Card_Image_URL: 'https://i.imgur.com/xcAFocP.png' },
    243: { Position: 'SP', Player_Name: 'Martin Khan', Card_Image_URL: 'https://i.imgur.com/B49sA1n.png' },
    244: { Position: 'RP', Player_Name: 'Ello Emmell', Card_Image_URL: 'https://i.imgur.com/WGCEfS7.png' },
    245: { Position: 'C', Player_Name: 'Waxillium Summers', Card_Image_URL: 'https://i.imgur.com/0p6mEUW.png' },
    246: { Position: 'SP', Player_Name: 'Keepa Secret', Card_Image_URL: 'https://i.imgur.com/kr8EoDf.png' },
    247: { Position: 'SP', Player_Name: 'Goaty McGoatFace', Card_Image_URL: 'https://i.imgur.com/3mQWU9l.png' },
    248: { Position: 'C', Player_Name: 'Brian Payne', Card_Image_URL: 'https://i.imgur.com/3jP5jSq.png' },
    249: { Position: 'CF', Player_Name: 'Cassius Considerations', Card_Image_URL: 'https://i.imgur.com/Nl6fXRt.png' },
    250: { Position: 'RP', Player_Name: 'Leonidas Longpipe', Card_Image_URL: 'https://i.imgur.com/nPBqMxg.png' },
    251: { Position: 'RP', Player_Name: 'Akio De Los Santos', Card_Image_URL: 'https://i.imgur.com/fpa51LF.png' },
    252: { Position: 'RP', Player_Name: 'Chicken Noods', Card_Image_URL: 'https://i.imgur.com/O9cjbg6.png' },
    253: { Position: 'SP', Player_Name: 'LeSean Maximus Marbondalenny Pitchlord', Card_Image_URL: 'https://i.imgur.com/objM2Ow.png' },
    254: { Position: 'RP', Player_Name: 'Minerva Madson', Card_Image_URL: 'https://i.imgur.com/k7IXsUq.png' },
    255: { Position: '1B', Player_Name: 'Walker Texas-Ranger', Card_Image_URL: 'https://i.imgur.com/YWbt1la.png' },
    256: { Position: 'SP', Player_Name: 'Alfonso Bonso', Card_Image_URL: 'https://i.imgur.com/VM7hDLA.png' },
    257: { Position: '1B', Player_Name: 'OneDog PowerBatLittleBark', Card_Image_URL: 'https://i.imgur.com/Bo3vLqm.png' },
    258: { Position: 'RP', Player_Name: 'Anne Dieu-le-Veut', Card_Image_URL: 'https://i.imgur.com/LnIL13H.png' },
    259: { Position: 'RP', Player_Name: 'Chuck Nasty', Card_Image_URL: 'https://i.imgur.com/mqdDGwU.png' },
    260: { Position: 'C', Player_Name: 'Rodrigo Wallach', Card_Image_URL: 'https://i.imgur.com/GGu686S.png' },
    261: { Position: 'SP', Player_Name: 'Taylor Adkins', Card_Image_URL: 'https://i.imgur.com/rbdTsFR.png' },
    262: { Position: 'SS', Player_Name: 'Ozzy Boudreaux', Card_Image_URL: 'https://i.imgur.com/yQ5RsEL.png' },
    263: { Position: 'RP', Player_Name: 'Bubba Blaze', Card_Image_URL: 'https://i.imgur.com/d8RWaKi.png' },
    264: { Position: 'SP', Player_Name: 'Cy Duck', Card_Image_URL: 'https://i.imgur.com/suvMeLP.png' },
    265: { Position: 'SP', Player_Name: 'Maximillion Porter', Card_Image_URL: 'https://i.imgur.com/xvFyKj1.png' },
    266: { Position: 'SP', Player_Name: 'Sigandi Legend', Card_Image_URL: 'https://i.imgur.com/nuJiKH0.png' },
    267: { Position: '1B', Player_Name: 'Link Althouse', Card_Image_URL: 'https://i.imgur.com/C5fMCek.png' },
    268: { Position: 'RP', Player_Name: 'Ryan Stryker Jr.', Card_Image_URL: 'https://i.imgur.com/hUoXA94.png' },
    269: { Position: 'SS', Player_Name: 'Summuh Dog', Card_Image_URL: 'https://i.imgur.com/wM5QXeF.png' },
    270: { Position: 'SP', Player_Name: 'Artemis Aria', Card_Image_URL: 'https://i.imgur.com/lblBygp.png' },
    271: { Position: 'SP', Player_Name: 'Darren Clapp', Card_Image_URL: 'https://i.imgur.com/8vnoDWo.png' },
    272: { Position: 'SP', Player_Name: 'Sloppy Joe', Card_Image_URL: 'https://i.imgur.com/n6ch8Ur.png' },
    273: { Position: 'SP', Player_Name: 'Colby Koffman', Card_Image_URL: 'https://i.imgur.com/2OAqgsh.png' },
    274: { Position: 'SP', Player_Name: 'Roman Melgar', Card_Image_URL: 'https://i.imgur.com/hTwbheZ.png' },
    275: { Position: 'SP', Player_Name: 'Johnny Tatum', Card_Image_URL: 'https://i.imgur.com/lS3Ism0.png' },
    276: { Position: 'SP', Player_Name: 'Fridtjof Nansen', Card_Image_URL: 'https://i.imgur.com/HtKoJjh.png' },
    277: { Position: 'SP', Player_Name: 'Holly Sheet', Card_Image_URL: 'https://i.imgur.com/Isq9iEA.png' },
    278: { Position: 'RP', Player_Name: 'M4XX V3L0', Card_Image_URL: 'https://i.imgur.com/kRXbCsH.png' },
    279: { Position: 'RP', Player_Name: 'Tim Westbrook', Card_Image_URL: 'https://i.imgur.com/jibsGD2.png' },
    280: { Position: 'RP', Player_Name: 'Frigg Delling', Card_Image_URL: 'https://i.imgur.com/MkCH7Av.png' },
    281: { Position: 'C', Player_Name: 'Jeff Hopkins', Card_Image_URL: 'https://i.imgur.com/eNWe2DZ.png' },
    282: { Position: 'C', Player_Name: 'Scott McNeily', Card_Image_URL: 'https://i.imgur.com/VdXwbLW.png' },
    283: { Position: '2B', Player_Name: 'Sebastian O\'Tage', Card_Image_URL: 'https://i.imgur.com/3koIe8W.png' },
    284: { Position: 'C', Player_Name: 'Tedford WoofingtonJr.', Card_Image_URL: 'https://i.imgur.com/IpbVKlE.png' },
    285: { Position: '1B', Player_Name: 'Barry Allen', Card_Image_URL: 'https://i.imgur.com/WhAgt7A.png' },
    286: { Position: 'CF', Player_Name: 'Tyler Detherage', Card_Image_URL: 'https://i.imgur.com/fZhcit1.png' },
    287: { Position: '2B', Player_Name: 'Xorge Garbanzo', Card_Image_URL: 'https://i.imgur.com/PRqnFYB.png' },
    288: { Position: 'SS', Player_Name: 'Yeti Taz', Card_Image_URL: 'https://i.imgur.com/SWeLgRR.png' },
    289: { Position: '2B', Player_Name: 'Enrique von Caliente', Card_Image_URL: 'https://i.imgur.com/W6iAIb5.png' },
    290: { Position: 'SS', Player_Name: 'Don Marcus', Card_Image_URL: 'https://i.imgur.com/vHYntpt.png' },
    291: { Position: '1B', Player_Name: 'Dimpley Splorger', Card_Image_URL: 'https://i.imgur.com/VoptQ6U.png' },
    292: { Position: 'LF', Player_Name: 'Carl Beaty Jr.', Card_Image_URL: 'https://i.imgur.com/omdfDUk.png' },
    293: { Position: 'LF', Player_Name: 'Kurtis McKenzie', Card_Image_URL: 'https://i.imgur.com/njeBd8S.png' },
    294: { Position: 'SS', Player_Name: 'Criss Angel', Card_Image_URL: 'https://i.imgur.com/GCDyBcC.png' },
    295: { Position: 'CF', Player_Name: 'Aaron Henry', Card_Image_URL: 'https://i.imgur.com/Oj2vgi8.png' },
    296: { Position: 'CF', Player_Name: 'Kayden Trantow', Card_Image_URL: 'https://i.imgur.com/MHJjXVo.png' },
    297: { Position: 'CF', Player_Name: 'A Starting Pitcher', Card_Image_URL: 'https://i.imgur.com/Y9o6hpP.png' },
    298: { Position: '1B', Player_Name: 'Danny Burgers', Card_Image_URL: 'https://i.imgur.com/qddrTUp.png' },
    299: { Position: 'C', Player_Name: 'Sha Dynasty', Card_Image_URL: 'https://i.imgur.com/k1bNBaL.png' },
    300: { Position: 'SP', Player_Name: 'Always A. Bummus', Card_Image_URL: 'https://i.imgur.com/0SUqrAp.png' },
    301: { Position: 'SP', Player_Name: 'Brian Eshleman Jr.', Card_Image_URL: 'https://i.imgur.com/pFTP1iB.png' },
    302: { Position: 'SP', Player_Name: 'Center Fielder', Card_Image_URL: 'https://i.imgur.com/NSQVfjV.png' },
    303: { Position: 'SP', Player_Name: 'Fenrir Lyken', Card_Image_URL: 'https://i.imgur.com/83hXbNo.png' },
    304: { Position: 'SP', Player_Name: 'Jose McForty-Three', Card_Image_URL: 'https://i.imgur.com/kdBzOif.png' },
    305: { Position: 'SP', Player_Name: 'J.C. Swishman', Card_Image_URL: 'https://i.imgur.com/nmabtQK.png' },
    306: { Position: 'RP', Player_Name: 'Thorne Belfour', Card_Image_URL: 'https://i.imgur.com/XQweoNS.png' },
    307: { Position: 'RP', Player_Name: 'Calm Chicken', Card_Image_URL: 'https://i.imgur.com/JClhBBG.png' },
    308: { Position: 'SP', Player_Name: 'Nathaniel Foot', Card_Image_URL: 'https://i.imgur.com/OY6FBLN.png' },
    309: { Position: 'RP', Player_Name: 'Pedro Martini', Card_Image_URL: 'https://i.imgur.com/kOPutzF.png' },
    310: { Position: 'SP', Player_Name: 'Ray Xavier', Card_Image_URL: 'https://i.imgur.com/jItdcGs.png' },
    311: { Position: 'C', Player_Name: 'Gabriel Katcher-Scudder', Card_Image_URL: 'https://i.imgur.com/CRDTkEA.png' },
    312: { Position: '2B', Player_Name: 'Chadwick McGillicuddy', Card_Image_URL: 'https://i.imgur.com/r47MriE.png' },
    313: { Position: 'C', Player_Name: 'Leonidas Ruiz', Card_Image_URL: 'https://i.imgur.com/xN7yqFi.png' },
    314: { Position: 'CF', Player_Name: 'Sean Carrcrash', Card_Image_URL: 'https://i.imgur.com/1HYQyq4.png' },
    315: { Position: '1B', Player_Name: 'Ted Giannoulis', Card_Image_URL: 'https://i.imgur.com/wreBqor.png' },
    316: { Position: '2B', Player_Name: 'Mo Love', Card_Image_URL: 'https://i.imgur.com/mkVpcqT.png' },
    317: { Position: '2B', Player_Name: 'Dee Fernandez', Card_Image_URL: 'https://i.imgur.com/A1GlKht.png' },
    318: { Position: 'RF', Player_Name: 'Yneas Kove', Card_Image_URL: 'https://i.imgur.com/pvwO5Iw.png' },
    319: { Position: '2B', Player_Name: 'Scottie Stirling', Card_Image_URL: 'https://i.imgur.com/VsY9xu7.png' },
    320: { Position: '3B', Player_Name: 'Sting Eucliffe', Card_Image_URL: 'https://i.imgur.com/YhnQpXJ.png' },
    321: { Position: '1B', Player_Name: 'Feka Ohi Kau', Card_Image_URL: 'https://i.imgur.com/GwyNVzV.png' },
    322: { Position: '3B', Player_Name: 'Daniel Plainview', Card_Image_URL: 'https://i.imgur.com/l7E9Oin.png' },
    323: { Position: '3B', Player_Name: 'Manuel Bang', Card_Image_URL: 'https://i.imgur.com/6Qt3uq1.png' },
    324: { Position: 'RF', Player_Name: 'Bradley Wellerman', Card_Image_URL: 'https://i.imgur.com/TNvyODY.png' },
    325: { Position: 'LF', Player_Name: 'Yvonne Escence', Card_Image_URL: 'https://i.imgur.com/Z1pR3pJ.png' },
    326: { Position: '3B', Player_Name: 'Jefferson Steelflex', Card_Image_URL: 'https://i.imgur.com/LOqU30J.png' },
    327: { Position: '1B', Player_Name: 'Troy Murphy', Card_Image_URL: 'https://i.imgur.com/lRUMs44.png' },
    328: { Position: 'SS', Player_Name: 'Marc Southworth', Card_Image_URL: 'https://i.imgur.com/U0XnmDq.png' },
    329: { Position: 'CF', Player_Name: 'Bob Katter', Card_Image_URL: 'https://i.imgur.com/KljjEUl.png' },
    330: { Position: '1B', Player_Name: 'Zak Johnson III', Card_Image_URL: 'https://i.imgur.com/aKBt4ba.png' },
    331: { Position: '2B', Player_Name: 'AJ Boucher', Card_Image_URL: 'https://i.imgur.com/WMNbqCC.png' },
    332: { Position: '3B', Player_Name: 'Austen Webb', Card_Image_URL: 'https://i.imgur.com/A4nqQOw.png' },
    333: { Position: '1B', Player_Name: 'Ryan Dinger', Card_Image_URL: 'https://i.imgur.com/ePNH2Xq.png' },
    334: { Position: 'CF', Player_Name: 'Edward Mackinlay', Card_Image_URL: 'https://i.imgur.com/zEkoEKs.png' },
    335: { Position: 'LF', Player_Name: 'Chase Hunter', Card_Image_URL: 'https://i.imgur.com/h6o7y6Y.png' },
    336: { Position: 'SP', Player_Name: 'Harold Smith', Card_Image_URL: 'https://i.imgur.com/lRPodBa.png' },
    337: { Position: '2B', Player_Name: 'Sidney Hughes', Card_Image_URL: 'https://i.imgur.com/7syKTjT.png' },
    338: { Position: 'SP', Player_Name: 'Ian Rubbish', Card_Image_URL: 'https://i.imgur.com/QZotHR5.png' },
    339: { Position: 'SP', Player_Name: 'Biggus Tittious Smittious', Card_Image_URL: 'https://i.imgur.com/byTg4PO.png' },
    340: { Position: 'RP', Player_Name: 'Hiccup Horrendous Haddock III', Card_Image_URL: 'https://i.imgur.com/W2Zz9dR.png' },
    341: { Position: '3B', Player_Name: 'Jim Hawkins', Card_Image_URL: 'https://i.imgur.com/isuYL8K.png' },
    342: { Position: 'SP', Player_Name: 'Ryan Alvarez', Card_Image_URL: 'https://i.imgur.com/jCRWuWq.png' },
    343: { Position: 'LF', Player_Name: 'Chuck Slamson', Card_Image_URL: 'https://i.imgur.com/SHsvWIo.png' },
    344: { Position: 'SP', Player_Name: 'Oilohnroc Yttef', Card_Image_URL: 'https://i.imgur.com/GqPQXWl.png' },
    345: { Position: 'RF', Player_Name: 'Jennie B Pink', Card_Image_URL: 'https://i.imgur.com/f1Yhteg.png' },
    346: { Position: 'SP', Player_Name: 'Michael Dion II', Card_Image_URL: 'https://i.imgur.com/QqtcsYK.png' },
    347: { Position: '1B', Player_Name: 'Gnome Child', Card_Image_URL: 'https://i.imgur.com/3FeRroU.png' },
    348: { Position: 'SP', Player_Name: 'Flop Quads', Card_Image_URL: 'https://i.imgur.com/dNmfvY2.png' },
    349: { Position: 'SP', Player_Name: 'Thor Lore', Card_Image_URL: 'https://i.imgur.com/2bBXBYo.png' },
    350: { Position: 'SP', Player_Name: 'Cornelius George-Braxton', Card_Image_URL: 'https://i.imgur.com/ks54xSU.png' },
    351: { Position: 'SP', Player_Name: 'Warren Peace', Card_Image_URL: 'https://i.imgur.com/hMIiOU6.png' }
};

// Sample round data (replace with your actual data)
const roundData = {
    1: {
        cards: [1, 2, 3, 4, 9, 14],
        picks: 1,
        gradient: { color1: '#ff0000', color2: '#ffd700' } // Red to Gold
    },
    2: {
        cards: [5, 6, 7, 8, 61, 72],
        picks: 1,
        gradient: { color1: '#0000ff', color2: '#00ffff' } // Blue to Cyan
    },
    3: {
        cards: [10, 11, 12, 13, 15, 16, 17],
        picks: 1,
        gradient: { color1: '#00ff00', color2: '#ffff00' } // Green to Yellow
    },
    4: {
        cards: Array.from({ length: 20 }, (_, i) => 18 + i),
        picks: 2,
        gradient: { color1: '#800080', color2: '#ee82ee' } // Purple to Violet
    },
    5: {
        cards: Array.from({ length: 60 }, (_, i) => 270 + i),
        picks: 2,
        position_filter: ['RP', 'SP'],
        gradient: { color1: '#ffa500', color2: '#ff4500' } // Orange to Red-Orange
    },
    6: {
        cards: Array.from({ length: 60 }, (_, i) => 270 + i),
        picks: 2,
        position_filter: ['1B', '2B', '3B', 'SS', 'C', 'LF', 'CF', 'RF', 'DH'],
        gradient: { color1: '#4682b4', color2: '#b0c4de' } // Steel Blue to Light Steel Blue
    },
    7: {
        cards: Array.from({ length: 37 }, (_, i) => 38 + i),
        picks: 2,
        exclude: [61, 72],
        gradient: { color1: '#008080', color2: '#afeeee' } // Teal to Pale Turquoise
    },
    8: {
        cards: Array.from({ length: 73 }, (_, i) => 75 + i),
        picks: 2,
        position_filter: ['RP', 'SP'],
        gradient: { color1: '#ff69b4', color2: '#db7093' } // Hot Pink to Pale Violet Red
    },
    9: {
        cards: Array.from({ length: 73 }, (_, i) => 75 + i),
        picks: 2,
        position_filter: ['1B', '2B', '3B', 'SS', 'C', 'LF', 'CF', 'RF', 'DH'],
        gradient: { color1: '#a0522d', color2: '#d2b48c' } // Sienna to Tan
    },
    10: {
        cards: Array.from({ length: 122 }, (_, i) => 148 + i),
        picks: 2,
        position_filter: ['RP', 'SP'],
        gradient: { color1: '#7cfc00', color2: '#32cd32' } // Lawn Green to Lime Green
    },
    11: {
        cards: Array.from({ length: 122 }, (_, i) => 148 + i),
        picks: 2,
        position_filter: ['1B', '2B', '3B', 'SS', 'C', 'LF', 'CF', 'RF', 'DH'],
        gradient: { color1: '#dc143c', color2: '#ff4500' } // Crimson to Orange Red
    },
    12: {
        cards: Array.from({ length: 22 }, (_, i) => 330 + i),
        picks: 1,
        gradient: { color1: '#9932cc', color2: '#ba55d3' } // Dark Orchid to Medium Orchid
    }
};


let batterCount = 0;
let pitcherCount = 0;
let benchCount = 0;
let picksMade = 0;
let currentRound = 1;

const roundCardsDiv = document.getElementById('round-cards');
const draftHistoryList = document.getElementById('draft-history-list');

// Function to shuffle array and return a sub-array of specified size
function getRandomSubarray(arr, size) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.error('Invalid input array for getRandomSubarray');
        return [];
    }
    const shuffled = [...arr]; // Create a copy to avoid modifying original array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled.slice(0, size);
}

// Notification messages for each round
const roundNotifications = {
    1: 'MVP, PoY & Top Gold',
    2: 'RPoY, RoY & Top Silver RP',
    3: 'Diamonds',
    4: 'Golds',
    5: 'All-Star Pitchers',
    6: 'All-Star Batters',
    7: 'Silvers (except RP)',
    8: 'Bronze Pitchers',
    9: 'Bronze Batters',
    10: 'Iron Pitchers',
    11: 'Iron Batters',
    12: 'Future Legends'
};

// Function to display cards for the current round
function displayRoundCards(roundNumber) {
    if (typeof roundNumber !== 'number' || roundNumber <= 0) {
        console.error('Invalid round number');
        return;
    }

    roundCardsDiv.innerHTML = ''; // Clear existing cards

    const roundInfo = roundData[roundNumber];

    if (!roundInfo) {
        alert('Draft complete!');
        return;
    }

    let availableCards = roundInfo.cards;

    // Filter cards based on position if position_filter is present
    if (roundInfo.position_filter && Array.isArray(roundInfo.position_filter) && roundInfo.position_filter.length > 0) {
        availableCards = availableCards.filter(cardId => {
            const player = players[cardId];
            return player && roundInfo.position_filter.includes(player.Position);
        });
    }

    if (!Array.isArray(availableCards)) {
        console.error('Available cards is not an array');
        return;
    }

    const totalPossibleCards = roundInfo.cards.length;
    const cardCountText = availableCards.length < 6
        ? `Displaying ${availableCards.length} of ${totalPossibleCards} possible cards`
        : `Displaying 6 of ${totalPossibleCards} possible cards`;

    if (availableCards.length > 6) {
        availableCards = getRandomSubarray(availableCards, 6);
    }

    availableCards.forEach(cardId => {
        const player = players[cardId];
        if (player) {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');

            // Set CSS variables for gradient
            cardDiv.style.setProperty('--gradient-color1', roundInfo.gradient.color1);
            cardDiv.style.setProperty('--gradient-color2', roundInfo.gradient.color2);

            cardDiv.innerHTML = `
                <div class="card-image-container">
                    <img src="${player.Card_Image_URL}" alt="${player.Player_Name}">
                </div>
                <p>${player.Player_Name} (${player.Position})</p>
                <button onclick="draftCard(${cardId})">Draft</button>
            `;
            roundCardsDiv.appendChild(cardDiv);
        }
    });

    document.getElementById('card-count').innerHTML = `<em>${cardCountText}</em>`;

    // Display notification
    const notificationText = roundNotifications[roundNumber] || '';
    const notificationArea = document.getElementById('notification-area');
    notificationArea.innerHTML = `<div class="notification-box" style="background: linear-gradient(45deg, ${roundInfo.gradient.color1}, ${roundInfo.gradient.color2});">${notificationText}</div>`;

    updateDraftInfo();
}

// Function to handle drafting a card
function draftCard(cardId) {
    if (typeof cardId !== 'number' || cardId <= 0) {
        console.error('Invalid card ID');
        return;
    }

    const player = players[cardId];

    if (!player) {
        console.error('Player not found');
        return;
    }

    let listId;
    let prefix;

    if ((player.Position === 'SP' || player.Position === 'RP') && pitcherCount < 7) {
        listId = 'pitchers-list';
        prefix = 'P';
        pitcherCount++;
    } else if (player.Position !== 'SP' && player.Position !== 'RP' && batterCount < 9) {
        listId = 'batters-list';
        prefix = 'H';
        batterCount++;
    } else if (benchCount < 4) {
        listId = 'bench-list';
        prefix = 'B';
        benchCount++;
    } else {
        alert('All draft slots are full!');
        return;
    }

    const list = document.getElementById(listId);

    if (!list) {
        console.error('List element not found');
        return;
    }

    const listItems = list.getElementsByTagName('li');

    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent === `${prefix} - `) {
            listItems[i].textContent = `${prefix} - ${player.Player_Name} (${player.Position})`;
            break;
        }
    }

    // Remove the drafted card from display
    const cardElement = document.querySelector(`[onclick="draftCard(${cardId})"]`);

    if (cardElement && cardElement.parentNode) {
        cardElement.parentNode.remove();
    }

    // Remove drafted card from available cards
    if (roundData[currentRound] && Array.isArray(roundData[currentRound].cards)) {
        roundData[currentRound].cards = roundData[currentRound].cards.filter(id => id !== cardId);
    } else {
        console.error('Invalid round data or cards array');
        return;
    }

    picksMade++;

    if (roundData[currentRound] && picksMade >= roundData[currentRound].picks) {
        // Move to the next round
        currentRound++;
        picksMade = 0;
    }

    updateDraftInfo();
    displayRoundCards(currentRound);
}

// Function to update draft information
function updateDraftInfo() {
    const roundInfo = roundData[currentRound];

    if (roundInfo) {
        // Update picks left
        const picksLeftElement = document.getElementById('picks-left');
        if (picksLeftElement) {
            picksLeftElement.textContent = roundInfo.picks - picksMade;
        }

        // Update round number display
        const roundNumberElement = document.getElementById('round-number');
        if (roundNumberElement) {
            roundNumberElement.textContent = currentRound;
        }

        // Update main heading
        const mainHeading = document.querySelector('#draft-info h2');
        if (mainHeading) {
            mainHeading.innerHTML = `Round: <span id="round-number">${currentRound}</span>`;
        }
    }
}

// Initial display of cards
displayRoundCards(currentRound);
