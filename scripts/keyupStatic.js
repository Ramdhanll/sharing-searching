const pokemons = [
   {
      NAME: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
   },
   {
      NAME: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
   },
   {
      NAME: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
   },
   {
      NAME: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
   },
   {
      NAME: 'charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon/5/',
   },
   {
      NAME: 'charizard',
      url: 'https://pokeapi.co/api/v2/pokemon/6/',
   },
   {
      NAME: 'squirtle',
      url: 'https://pokeapi.co/api/v2/pokemon/7/',
   },
   {
      NAME: 'wartortle',
      url: 'https://pokeapi.co/api/v2/pokemon/8/',
   },
   {
      NAME: 'blastoise',
      url: 'https://pokeapi.co/api/v2/pokemon/9/',
   },
   {
      NAME: 'caterpie',
      url: 'https://pokeapi.co/api/v2/pokemon/10/',
   },
   {
      NAME: 'metapod',
      url: 'https://pokeapi.co/api/v2/pokemon/11/',
   },
   {
      NAME: 'butterfree',
      url: 'https://pokeapi.co/api/v2/pokemon/12/',
   },
   {
      NAME: 'weedle',
      url: 'https://pokeapi.co/api/v2/pokemon/13/',
   },
   {
      NAME: 'kakuna',
      url: 'https://pokeapi.co/api/v2/pokemon/14/',
   },
   {
      NAME: 'beedrill',
      url: 'https://pokeapi.co/api/v2/pokemon/15/',
   },
   {
      NAME: 'pidgey',
      url: 'https://pokeapi.co/api/v2/pokemon/16/',
   },
   {
      NAME: 'pidgeotto',
      url: 'https://pokeapi.co/api/v2/pokemon/17/',
   },
   {
      NAME: 'pidgeot',
      url: 'https://pokeapi.co/api/v2/pokemon/18/',
   },
   {
      NAME: 'rattata',
      url: 'https://pokeapi.co/api/v2/pokemon/19/',
   },
   {
      NAME: 'raticate',
      url: 'https://pokeapi.co/api/v2/pokemon/20/',
   },
   {
      NAME: 'spearow',
      url: 'https://pokeapi.co/api/v2/pokemon/21/',
   },
   {
      NAME: 'fearow',
      url: 'https://pokeapi.co/api/v2/pokemon/22/',
   },
   {
      NAME: 'ekans',
      url: 'https://pokeapi.co/api/v2/pokemon/23/',
   },
   {
      NAME: 'arbok',
      url: 'https://pokeapi.co/api/v2/pokemon/24/',
   },
   {
      NAME: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25/',
   },
   {
      NAME: 'raichu',
      url: 'https://pokeapi.co/api/v2/pokemon/26/',
   },
   {
      NAME: 'sandshrew',
      url: 'https://pokeapi.co/api/v2/pokemon/27/',
   },
   {
      NAME: 'sandslash',
      url: 'https://pokeapi.co/api/v2/pokemon/28/',
   },
   {
      NAME: 'nidoran-f',
      url: 'https://pokeapi.co/api/v2/pokemon/29/',
   },
   {
      NAME: 'nidorina',
      url: 'https://pokeapi.co/api/v2/pokemon/30/',
   },
   {
      NAME: 'nidoqueen',
      url: 'https://pokeapi.co/api/v2/pokemon/31/',
   },
   {
      NAME: 'nidoran-m',
      url: 'https://pokeapi.co/api/v2/pokemon/32/',
   },
   {
      NAME: 'nidorino',
      url: 'https://pokeapi.co/api/v2/pokemon/33/',
   },
   {
      NAME: 'nidoking',
      url: 'https://pokeapi.co/api/v2/pokemon/34/',
   },
   {
      NAME: 'clefairy',
      url: 'https://pokeapi.co/api/v2/pokemon/35/',
   },
   {
      NAME: 'clefable',
      url: 'https://pokeapi.co/api/v2/pokemon/36/',
   },
   {
      NAME: 'vulpix',
      url: 'https://pokeapi.co/api/v2/pokemon/37/',
   },
   {
      NAME: 'ninetales',
      url: 'https://pokeapi.co/api/v2/pokemon/38/',
   },
   {
      NAME: 'jigglypuff',
      url: 'https://pokeapi.co/api/v2/pokemon/39/',
   },
   {
      NAME: 'wigglytuff',
      url: 'https://pokeapi.co/api/v2/pokemon/40/',
   },
   {
      NAME: 'zubat',
      url: 'https://pokeapi.co/api/v2/pokemon/41/',
   },
   {
      NAME: 'golbat',
      url: 'https://pokeapi.co/api/v2/pokemon/42/',
   },
   {
      NAME: 'oddish',
      url: 'https://pokeapi.co/api/v2/pokemon/43/',
   },
   {
      NAME: 'gloom',
      url: 'https://pokeapi.co/api/v2/pokemon/44/',
   },
   {
      NAME: 'vileplume',
      url: 'https://pokeapi.co/api/v2/pokemon/45/',
   },
   {
      NAME: 'paras',
      url: 'https://pokeapi.co/api/v2/pokemon/46/',
   },
   {
      NAME: 'parasect',
      url: 'https://pokeapi.co/api/v2/pokemon/47/',
   },
   {
      NAME: 'venonat',
      url: 'https://pokeapi.co/api/v2/pokemon/48/',
   },
   {
      NAME: 'venomoth',
      url: 'https://pokeapi.co/api/v2/pokemon/49/',
   },
   {
      NAME: 'diglett',
      url: 'https://pokeapi.co/api/v2/pokemon/50/',
   },
   {
      NAME: 'dugtrio',
      url: 'https://pokeapi.co/api/v2/pokemon/51/',
   },
   {
      NAME: 'meowth',
      url: 'https://pokeapi.co/api/v2/pokemon/52/',
   },
   {
      NAME: 'persian',
      url: 'https://pokeapi.co/api/v2/pokemon/53/',
   },
   {
      NAME: 'psyduck',
      url: 'https://pokeapi.co/api/v2/pokemon/54/',
   },
   {
      NAME: 'golduck',
      url: 'https://pokeapi.co/api/v2/pokemon/55/',
   },
   {
      NAME: 'mankey',
      url: 'https://pokeapi.co/api/v2/pokemon/56/',
   },
   {
      NAME: 'primeape',
      url: 'https://pokeapi.co/api/v2/pokemon/57/',
   },
   {
      NAME: 'growlithe',
      url: 'https://pokeapi.co/api/v2/pokemon/58/',
   },
   {
      NAME: 'arcanine',
      url: 'https://pokeapi.co/api/v2/pokemon/59/',
   },
   {
      NAME: 'poliwag',
      url: 'https://pokeapi.co/api/v2/pokemon/60/',
   },
   {
      NAME: 'poliwhirl',
      url: 'https://pokeapi.co/api/v2/pokemon/61/',
   },
   {
      NAME: 'poliwrath',
      url: 'https://pokeapi.co/api/v2/pokemon/62/',
   },
   {
      NAME: 'abra',
      url: 'https://pokeapi.co/api/v2/pokemon/63/',
   },
   {
      NAME: 'kadabra',
      url: 'https://pokeapi.co/api/v2/pokemon/64/',
   },
   {
      NAME: 'alakazam',
      url: 'https://pokeapi.co/api/v2/pokemon/65/',
   },
   {
      NAME: 'machop',
      url: 'https://pokeapi.co/api/v2/pokemon/66/',
   },
   {
      NAME: 'machoke',
      url: 'https://pokeapi.co/api/v2/pokemon/67/',
   },
   {
      NAME: 'machamp',
      url: 'https://pokeapi.co/api/v2/pokemon/68/',
   },
   {
      NAME: 'bellsprout',
      url: 'https://pokeapi.co/api/v2/pokemon/69/',
   },
   {
      NAME: 'weepinbell',
      url: 'https://pokeapi.co/api/v2/pokemon/70/',
   },
   {
      NAME: 'victreebel',
      url: 'https://pokeapi.co/api/v2/pokemon/71/',
   },
   {
      NAME: 'tentacool',
      url: 'https://pokeapi.co/api/v2/pokemon/72/',
   },
   {
      NAME: 'tentacruel',
      url: 'https://pokeapi.co/api/v2/pokemon/73/',
   },
   {
      NAME: 'geodude',
      url: 'https://pokeapi.co/api/v2/pokemon/74/',
   },
   {
      NAME: 'graveler',
      url: 'https://pokeapi.co/api/v2/pokemon/75/',
   },
   {
      NAME: 'golem',
      url: 'https://pokeapi.co/api/v2/pokemon/76/',
   },
   {
      NAME: 'ponyta',
      url: 'https://pokeapi.co/api/v2/pokemon/77/',
   },
   {
      NAME: 'rapidash',
      url: 'https://pokeapi.co/api/v2/pokemon/78/',
   },
   {
      NAME: 'slowpoke',
      url: 'https://pokeapi.co/api/v2/pokemon/79/',
   },
   {
      NAME: 'slowbro',
      url: 'https://pokeapi.co/api/v2/pokemon/80/',
   },
   {
      NAME: 'magnemite',
      url: 'https://pokeapi.co/api/v2/pokemon/81/',
   },
   {
      NAME: 'magneton',
      url: 'https://pokeapi.co/api/v2/pokemon/82/',
   },
   {
      NAME: 'farfetchd',
      url: 'https://pokeapi.co/api/v2/pokemon/83/',
   },
   {
      NAME: 'doduo',
      url: 'https://pokeapi.co/api/v2/pokemon/84/',
   },
   {
      NAME: 'dodrio',
      url: 'https://pokeapi.co/api/v2/pokemon/85/',
   },
   {
      NAME: 'seel',
      url: 'https://pokeapi.co/api/v2/pokemon/86/',
   },
   {
      NAME: 'dewgong',
      url: 'https://pokeapi.co/api/v2/pokemon/87/',
   },
   {
      NAME: 'grimer',
      url: 'https://pokeapi.co/api/v2/pokemon/88/',
   },
   {
      NAME: 'muk',
      url: 'https://pokeapi.co/api/v2/pokemon/89/',
   },
   {
      NAME: 'shellder',
      url: 'https://pokeapi.co/api/v2/pokemon/90/',
   },
   {
      NAME: 'cloyster',
      url: 'https://pokeapi.co/api/v2/pokemon/91/',
   },
   {
      NAME: 'gastly',
      url: 'https://pokeapi.co/api/v2/pokemon/92/',
   },
   {
      NAME: 'haunter',
      url: 'https://pokeapi.co/api/v2/pokemon/93/',
   },
   {
      NAME: 'gengar',
      url: 'https://pokeapi.co/api/v2/pokemon/94/',
   },
   {
      NAME: 'onix',
      url: 'https://pokeapi.co/api/v2/pokemon/95/',
   },
   {
      NAME: 'drowzee',
      url: 'https://pokeapi.co/api/v2/pokemon/96/',
   },
   {
      NAME: 'hypno',
      url: 'https://pokeapi.co/api/v2/pokemon/97/',
   },
   {
      NAME: 'krabby',
      url: 'https://pokeapi.co/api/v2/pokemon/98/',
   },
   {
      NAME: 'kingler',
      url: 'https://pokeapi.co/api/v2/pokemon/99/',
   },
   {
      NAME: 'voltorb',
      url: 'https://pokeapi.co/api/v2/pokemon/100/',
   },
   {
      NAME: 'electrode',
      url: 'https://pokeapi.co/api/v2/pokemon/101/',
   },
   {
      NAME: 'exeggcute',
      url: 'https://pokeapi.co/api/v2/pokemon/102/',
   },
   {
      NAME: 'exeggutor',
      url: 'https://pokeapi.co/api/v2/pokemon/103/',
   },
   {
      NAME: 'cubone',
      url: 'https://pokeapi.co/api/v2/pokemon/104/',
   },
   {
      NAME: 'marowak',
      url: 'https://pokeapi.co/api/v2/pokemon/105/',
   },
   {
      NAME: 'hitmonlee',
      url: 'https://pokeapi.co/api/v2/pokemon/106/',
   },
   {
      NAME: 'hitmonchan',
      url: 'https://pokeapi.co/api/v2/pokemon/107/',
   },
   {
      NAME: 'lickitung',
      url: 'https://pokeapi.co/api/v2/pokemon/108/',
   },
   {
      NAME: 'koffing',
      url: 'https://pokeapi.co/api/v2/pokemon/109/',
   },
   {
      NAME: 'weezing',
      url: 'https://pokeapi.co/api/v2/pokemon/110/',
   },
   {
      NAME: 'rhyhorn',
      url: 'https://pokeapi.co/api/v2/pokemon/111/',
   },
   {
      NAME: 'rhydon',
      url: 'https://pokeapi.co/api/v2/pokemon/112/',
   },
   {
      NAME: 'chansey',
      url: 'https://pokeapi.co/api/v2/pokemon/113/',
   },
   {
      NAME: 'tangela',
      url: 'https://pokeapi.co/api/v2/pokemon/114/',
   },
   {
      NAME: 'kangaskhan',
      url: 'https://pokeapi.co/api/v2/pokemon/115/',
   },
   {
      NAME: 'horsea',
      url: 'https://pokeapi.co/api/v2/pokemon/116/',
   },
   {
      NAME: 'seadra',
      url: 'https://pokeapi.co/api/v2/pokemon/117/',
   },
   {
      NAME: 'goldeen',
      url: 'https://pokeapi.co/api/v2/pokemon/118/',
   },
   {
      NAME: 'seaking',
      url: 'https://pokeapi.co/api/v2/pokemon/119/',
   },
   {
      NAME: 'staryu',
      url: 'https://pokeapi.co/api/v2/pokemon/120/',
   },
   {
      NAME: 'starmie',
      url: 'https://pokeapi.co/api/v2/pokemon/121/',
   },
   {
      NAME: 'mr-mime',
      url: 'https://pokeapi.co/api/v2/pokemon/122/',
   },
   {
      NAME: 'scyther',
      url: 'https://pokeapi.co/api/v2/pokemon/123/',
   },
   {
      NAME: 'jynx',
      url: 'https://pokeapi.co/api/v2/pokemon/124/',
   },
   {
      NAME: 'electabuzz',
      url: 'https://pokeapi.co/api/v2/pokemon/125/',
   },
   {
      NAME: 'magmar',
      url: 'https://pokeapi.co/api/v2/pokemon/126/',
   },
   {
      NAME: 'pinsir',
      url: 'https://pokeapi.co/api/v2/pokemon/127/',
   },
   {
      NAME: 'tauros',
      url: 'https://pokeapi.co/api/v2/pokemon/128/',
   },
   {
      NAME: 'magikarp',
      url: 'https://pokeapi.co/api/v2/pokemon/129/',
   },
   {
      NAME: 'gyarados',
      url: 'https://pokeapi.co/api/v2/pokemon/130/',
   },
   {
      NAME: 'lapras',
      url: 'https://pokeapi.co/api/v2/pokemon/131/',
   },
   {
      NAME: 'ditto',
      url: 'https://pokeapi.co/api/v2/pokemon/132/',
   },
   {
      NAME: 'eevee',
      url: 'https://pokeapi.co/api/v2/pokemon/133/',
   },
   {
      NAME: 'vaporeon',
      url: 'https://pokeapi.co/api/v2/pokemon/134/',
   },
   {
      NAME: 'jolteon',
      url: 'https://pokeapi.co/api/v2/pokemon/135/',
   },
   {
      NAME: 'flareon',
      url: 'https://pokeapi.co/api/v2/pokemon/136/',
   },
   {
      NAME: 'porygon',
      url: 'https://pokeapi.co/api/v2/pokemon/137/',
   },
   {
      NAME: 'omanyte',
      url: 'https://pokeapi.co/api/v2/pokemon/138/',
   },
   {
      NAME: 'omastar',
      url: 'https://pokeapi.co/api/v2/pokemon/139/',
   },
   {
      NAME: 'kabuto',
      url: 'https://pokeapi.co/api/v2/pokemon/140/',
   },
   {
      NAME: 'kabutops',
      url: 'https://pokeapi.co/api/v2/pokemon/141/',
   },
   {
      NAME: 'aerodactyl',
      url: 'https://pokeapi.co/api/v2/pokemon/142/',
   },
   {
      NAME: 'snorlax',
      url: 'https://pokeapi.co/api/v2/pokemon/143/',
   },
   {
      NAME: 'articuno',
      url: 'https://pokeapi.co/api/v2/pokemon/144/',
   },
   {
      NAME: 'zapdos',
      url: 'https://pokeapi.co/api/v2/pokemon/145/',
   },
   {
      NAME: 'moltres',
      url: 'https://pokeapi.co/api/v2/pokemon/146/',
   },
   {
      NAME: 'dratini',
      url: 'https://pokeapi.co/api/v2/pokemon/147/',
   },
   {
      NAME: 'dragonair',
      url: 'https://pokeapi.co/api/v2/pokemon/148/',
   },
   {
      NAME: 'dragonite',
      url: 'https://pokeapi.co/api/v2/pokemon/149/',
   },
   {
      NAME: 'mewtwo',
      url: 'https://pokeapi.co/api/v2/pokemon/150/',
   },
   {
      NAME: 'mew',
      url: 'https://pokeapi.co/api/v2/pokemon/151/',
   },
   {
      NAME: 'chikorita',
      url: 'https://pokeapi.co/api/v2/pokemon/152/',
   },
   {
      NAME: 'bayleef',
      url: 'https://pokeapi.co/api/v2/pokemon/153/',
   },
   {
      NAME: 'meganium',
      url: 'https://pokeapi.co/api/v2/pokemon/154/',
   },
   {
      NAME: 'cyndaquil',
      url: 'https://pokeapi.co/api/v2/pokemon/155/',
   },
   {
      NAME: 'quilava',
      url: 'https://pokeapi.co/api/v2/pokemon/156/',
   },
   {
      NAME: 'typhlosion',
      url: 'https://pokeapi.co/api/v2/pokemon/157/',
   },
   {
      NAME: 'totodile',
      url: 'https://pokeapi.co/api/v2/pokemon/158/',
   },
   {
      NAME: 'croconaw',
      url: 'https://pokeapi.co/api/v2/pokemon/159/',
   },
   {
      NAME: 'feraligatr',
      url: 'https://pokeapi.co/api/v2/pokemon/160/',
   },
   {
      NAME: 'sentret',
      url: 'https://pokeapi.co/api/v2/pokemon/161/',
   },
   {
      NAME: 'furret',
      url: 'https://pokeapi.co/api/v2/pokemon/162/',
   },
   {
      NAME: 'hoothoot',
      url: 'https://pokeapi.co/api/v2/pokemon/163/',
   },
   {
      NAME: 'noctowl',
      url: 'https://pokeapi.co/api/v2/pokemon/164/',
   },
   {
      NAME: 'ledyba',
      url: 'https://pokeapi.co/api/v2/pokemon/165/',
   },
   {
      NAME: 'ledian',
      url: 'https://pokeapi.co/api/v2/pokemon/166/',
   },
   {
      NAME: 'spinarak',
      url: 'https://pokeapi.co/api/v2/pokemon/167/',
   },
   {
      NAME: 'ariados',
      url: 'https://pokeapi.co/api/v2/pokemon/168/',
   },
   {
      NAME: 'crobat',
      url: 'https://pokeapi.co/api/v2/pokemon/169/',
   },
   {
      NAME: 'chinchou',
      url: 'https://pokeapi.co/api/v2/pokemon/170/',
   },
   {
      NAME: 'lanturn',
      url: 'https://pokeapi.co/api/v2/pokemon/171/',
   },
   {
      NAME: 'pichu',
      url: 'https://pokeapi.co/api/v2/pokemon/172/',
   },
   {
      NAME: 'cleffa',
      url: 'https://pokeapi.co/api/v2/pokemon/173/',
   },
   {
      NAME: 'igglybuff',
      url: 'https://pokeapi.co/api/v2/pokemon/174/',
   },
   {
      NAME: 'togepi',
      url: 'https://pokeapi.co/api/v2/pokemon/175/',
   },
   {
      NAME: 'togetic',
      url: 'https://pokeapi.co/api/v2/pokemon/176/',
   },
   {
      NAME: 'natu',
      url: 'https://pokeapi.co/api/v2/pokemon/177/',
   },
   {
      NAME: 'xatu',
      url: 'https://pokeapi.co/api/v2/pokemon/178/',
   },
   {
      NAME: 'mareep',
      url: 'https://pokeapi.co/api/v2/pokemon/179/',
   },
   {
      NAME: 'flaaffy',
      url: 'https://pokeapi.co/api/v2/pokemon/180/',
   },
   {
      NAME: 'ampharos',
      url: 'https://pokeapi.co/api/v2/pokemon/181/',
   },
   {
      NAME: 'bellossom',
      url: 'https://pokeapi.co/api/v2/pokemon/182/',
   },
   {
      NAME: 'marill',
      url: 'https://pokeapi.co/api/v2/pokemon/183/',
   },
   {
      NAME: 'azumarill',
      url: 'https://pokeapi.co/api/v2/pokemon/184/',
   },
   {
      NAME: 'sudowoodo',
      url: 'https://pokeapi.co/api/v2/pokemon/185/',
   },
   {
      NAME: 'politoed',
      url: 'https://pokeapi.co/api/v2/pokemon/186/',
   },
   {
      NAME: 'hoppip',
      url: 'https://pokeapi.co/api/v2/pokemon/187/',
   },
   {
      NAME: 'skiploom',
      url: 'https://pokeapi.co/api/v2/pokemon/188/',
   },
   {
      NAME: 'jumpluff',
      url: 'https://pokeapi.co/api/v2/pokemon/189/',
   },
   {
      NAME: 'aipom',
      url: 'https://pokeapi.co/api/v2/pokemon/190/',
   },
   {
      NAME: 'sunkern',
      url: 'https://pokeapi.co/api/v2/pokemon/191/',
   },
   {
      NAME: 'sunflora',
      url: 'https://pokeapi.co/api/v2/pokemon/192/',
   },
   {
      NAME: 'yanma',
      url: 'https://pokeapi.co/api/v2/pokemon/193/',
   },
   {
      NAME: 'wooper',
      url: 'https://pokeapi.co/api/v2/pokemon/194/',
   },
   {
      NAME: 'quagsire',
      url: 'https://pokeapi.co/api/v2/pokemon/195/',
   },
   {
      NAME: 'espeon',
      url: 'https://pokeapi.co/api/v2/pokemon/196/',
   },
   {
      NAME: 'umbreon',
      url: 'https://pokeapi.co/api/v2/pokemon/197/',
   },
   {
      NAME: 'murkrow',
      url: 'https://pokeapi.co/api/v2/pokemon/198/',
   },
   {
      NAME: 'slowking',
      url: 'https://pokeapi.co/api/v2/pokemon/199/',
   },
   {
      NAME: 'misdreavus',
      url: 'https://pokeapi.co/api/v2/pokemon/200/',
   },
   {
      NAME: 'unown',
      url: 'https://pokeapi.co/api/v2/pokemon/201/',
   },
   {
      NAME: 'wobbuffet',
      url: 'https://pokeapi.co/api/v2/pokemon/202/',
   },
   {
      NAME: 'girafarig',
      url: 'https://pokeapi.co/api/v2/pokemon/203/',
   },
   {
      NAME: 'pineco',
      url: 'https://pokeapi.co/api/v2/pokemon/204/',
   },
   {
      NAME: 'forretress',
      url: 'https://pokeapi.co/api/v2/pokemon/205/',
   },
   {
      NAME: 'dunsparce',
      url: 'https://pokeapi.co/api/v2/pokemon/206/',
   },
   {
      NAME: 'gligar',
      url: 'https://pokeapi.co/api/v2/pokemon/207/',
   },
   {
      NAME: 'steelix',
      url: 'https://pokeapi.co/api/v2/pokemon/208/',
   },
   {
      NAME: 'snubbull',
      url: 'https://pokeapi.co/api/v2/pokemon/209/',
   },
   {
      NAME: 'granbull',
      url: 'https://pokeapi.co/api/v2/pokemon/210/',
   },
   {
      NAME: 'qwilfish',
      url: 'https://pokeapi.co/api/v2/pokemon/211/',
   },
   {
      NAME: 'scizor',
      url: 'https://pokeapi.co/api/v2/pokemon/212/',
   },
   {
      NAME: 'shuckle',
      url: 'https://pokeapi.co/api/v2/pokemon/213/',
   },
   {
      NAME: 'heracross',
      url: 'https://pokeapi.co/api/v2/pokemon/214/',
   },
   {
      NAME: 'sneasel',
      url: 'https://pokeapi.co/api/v2/pokemon/215/',
   },
   {
      NAME: 'teddiursa',
      url: 'https://pokeapi.co/api/v2/pokemon/216/',
   },
   {
      NAME: 'ursaring',
      url: 'https://pokeapi.co/api/v2/pokemon/217/',
   },
   {
      NAME: 'slugma',
      url: 'https://pokeapi.co/api/v2/pokemon/218/',
   },
   {
      NAME: 'magcargo',
      url: 'https://pokeapi.co/api/v2/pokemon/219/',
   },
   {
      NAME: 'swinub',
      url: 'https://pokeapi.co/api/v2/pokemon/220/',
   },
   {
      NAME: 'piloswine',
      url: 'https://pokeapi.co/api/v2/pokemon/221/',
   },
   {
      NAME: 'corsola',
      url: 'https://pokeapi.co/api/v2/pokemon/222/',
   },
   {
      NAME: 'remoraid',
      url: 'https://pokeapi.co/api/v2/pokemon/223/',
   },
   {
      NAME: 'octillery',
      url: 'https://pokeapi.co/api/v2/pokemon/224/',
   },
   {
      NAME: 'delibird',
      url: 'https://pokeapi.co/api/v2/pokemon/225/',
   },
   {
      NAME: 'mantine',
      url: 'https://pokeapi.co/api/v2/pokemon/226/',
   },
   {
      NAME: 'skarmory',
      url: 'https://pokeapi.co/api/v2/pokemon/227/',
   },
   {
      NAME: 'houndour',
      url: 'https://pokeapi.co/api/v2/pokemon/228/',
   },
   {
      NAME: 'houndoom',
      url: 'https://pokeapi.co/api/v2/pokemon/229/',
   },
   {
      NAME: 'kingdra',
      url: 'https://pokeapi.co/api/v2/pokemon/230/',
   },
   {
      NAME: 'phanpy',
      url: 'https://pokeapi.co/api/v2/pokemon/231/',
   },
   {
      NAME: 'donphan',
      url: 'https://pokeapi.co/api/v2/pokemon/232/',
   },
   {
      NAME: 'porygon2',
      url: 'https://pokeapi.co/api/v2/pokemon/233/',
   },
   {
      NAME: 'stantler',
      url: 'https://pokeapi.co/api/v2/pokemon/234/',
   },
   {
      NAME: 'smeargle',
      url: 'https://pokeapi.co/api/v2/pokemon/235/',
   },
   {
      NAME: 'tyrogue',
      url: 'https://pokeapi.co/api/v2/pokemon/236/',
   },
   {
      NAME: 'hitmontop',
      url: 'https://pokeapi.co/api/v2/pokemon/237/',
   },
   {
      NAME: 'smoochum',
      url: 'https://pokeapi.co/api/v2/pokemon/238/',
   },
   {
      NAME: 'elekid',
      url: 'https://pokeapi.co/api/v2/pokemon/239/',
   },
   {
      NAME: 'magby',
      url: 'https://pokeapi.co/api/v2/pokemon/240/',
   },
   {
      NAME: 'miltank',
      url: 'https://pokeapi.co/api/v2/pokemon/241/',
   },
   {
      NAME: 'blissey',
      url: 'https://pokeapi.co/api/v2/pokemon/242/',
   },
   {
      NAME: 'raikou',
      url: 'https://pokeapi.co/api/v2/pokemon/243/',
   },
   {
      NAME: 'entei',
      url: 'https://pokeapi.co/api/v2/pokemon/244/',
   },
   {
      NAME: 'suicune',
      url: 'https://pokeapi.co/api/v2/pokemon/245/',
   },
   {
      NAME: 'larvitar',
      url: 'https://pokeapi.co/api/v2/pokemon/246/',
   },
   {
      NAME: 'pupitar',
      url: 'https://pokeapi.co/api/v2/pokemon/247/',
   },
   {
      NAME: 'tyranitar',
      url: 'https://pokeapi.co/api/v2/pokemon/248/',
   },
   {
      NAME: 'lugia',
      url: 'https://pokeapi.co/api/v2/pokemon/249/',
   },
   {
      NAME: 'ho-oh',
      url: 'https://pokeapi.co/api/v2/pokemon/250/',
   },
   {
      NAME: 'celebi',
      url: 'https://pokeapi.co/api/v2/pokemon/251/',
   },
   {
      NAME: 'treecko',
      url: 'https://pokeapi.co/api/v2/pokemon/252/',
   },
   {
      NAME: 'grovyle',
      url: 'https://pokeapi.co/api/v2/pokemon/253/',
   },
   {
      NAME: 'sceptile',
      url: 'https://pokeapi.co/api/v2/pokemon/254/',
   },
   {
      NAME: 'torchic',
      url: 'https://pokeapi.co/api/v2/pokemon/255/',
   },
   {
      NAME: 'combusken',
      url: 'https://pokeapi.co/api/v2/pokemon/256/',
   },
   {
      NAME: 'blaziken',
      url: 'https://pokeapi.co/api/v2/pokemon/257/',
   },
   {
      NAME: 'mudkip',
      url: 'https://pokeapi.co/api/v2/pokemon/258/',
   },
   {
      NAME: 'marshtomp',
      url: 'https://pokeapi.co/api/v2/pokemon/259/',
   },
   {
      NAME: 'swampert',
      url: 'https://pokeapi.co/api/v2/pokemon/260/',
   },
   {
      NAME: 'poochyena',
      url: 'https://pokeapi.co/api/v2/pokemon/261/',
   },
   {
      NAME: 'mightyena',
      url: 'https://pokeapi.co/api/v2/pokemon/262/',
   },
   {
      NAME: 'zigzagoon',
      url: 'https://pokeapi.co/api/v2/pokemon/263/',
   },
   {
      NAME: 'linoone',
      url: 'https://pokeapi.co/api/v2/pokemon/264/',
   },
   {
      NAME: 'wurmple',
      url: 'https://pokeapi.co/api/v2/pokemon/265/',
   },
   {
      NAME: 'silcoon',
      url: 'https://pokeapi.co/api/v2/pokemon/266/',
   },
   {
      NAME: 'beautifly',
      url: 'https://pokeapi.co/api/v2/pokemon/267/',
   },
   {
      NAME: 'cascoon',
      url: 'https://pokeapi.co/api/v2/pokemon/268/',
   },
   {
      NAME: 'dustox',
      url: 'https://pokeapi.co/api/v2/pokemon/269/',
   },
   {
      NAME: 'lotad',
      url: 'https://pokeapi.co/api/v2/pokemon/270/',
   },
   {
      NAME: 'lombre',
      url: 'https://pokeapi.co/api/v2/pokemon/271/',
   },
   {
      NAME: 'ludicolo',
      url: 'https://pokeapi.co/api/v2/pokemon/272/',
   },
   {
      NAME: 'seedot',
      url: 'https://pokeapi.co/api/v2/pokemon/273/',
   },
   {
      NAME: 'nuzleaf',
      url: 'https://pokeapi.co/api/v2/pokemon/274/',
   },
   {
      NAME: 'shiftry',
      url: 'https://pokeapi.co/api/v2/pokemon/275/',
   },
   {
      NAME: 'taillow',
      url: 'https://pokeapi.co/api/v2/pokemon/276/',
   },
   {
      NAME: 'swellow',
      url: 'https://pokeapi.co/api/v2/pokemon/277/',
   },
   {
      NAME: 'wingull',
      url: 'https://pokeapi.co/api/v2/pokemon/278/',
   },
   {
      NAME: 'pelipper',
      url: 'https://pokeapi.co/api/v2/pokemon/279/',
   },
   {
      NAME: 'ralts',
      url: 'https://pokeapi.co/api/v2/pokemon/280/',
   },
   {
      NAME: 'kirlia',
      url: 'https://pokeapi.co/api/v2/pokemon/281/',
   },
   {
      NAME: 'gardevoir',
      url: 'https://pokeapi.co/api/v2/pokemon/282/',
   },
   {
      NAME: 'surskit',
      url: 'https://pokeapi.co/api/v2/pokemon/283/',
   },
   {
      NAME: 'masquerain',
      url: 'https://pokeapi.co/api/v2/pokemon/284/',
   },
   {
      NAME: 'shroomish',
      url: 'https://pokeapi.co/api/v2/pokemon/285/',
   },
   {
      NAME: 'breloom',
      url: 'https://pokeapi.co/api/v2/pokemon/286/',
   },
   {
      NAME: 'slakoth',
      url: 'https://pokeapi.co/api/v2/pokemon/287/',
   },
   {
      NAME: 'vigoroth',
      url: 'https://pokeapi.co/api/v2/pokemon/288/',
   },
   {
      NAME: 'slaking',
      url: 'https://pokeapi.co/api/v2/pokemon/289/',
   },
   {
      NAME: 'nincada',
      url: 'https://pokeapi.co/api/v2/pokemon/290/',
   },
   {
      NAME: 'ninjask',
      url: 'https://pokeapi.co/api/v2/pokemon/291/',
   },
   {
      NAME: 'shedinja',
      url: 'https://pokeapi.co/api/v2/pokemon/292/',
   },
   {
      NAME: 'whismur',
      url: 'https://pokeapi.co/api/v2/pokemon/293/',
   },
   {
      NAME: 'loudred',
      url: 'https://pokeapi.co/api/v2/pokemon/294/',
   },
   {
      NAME: 'exploud',
      url: 'https://pokeapi.co/api/v2/pokemon/295/',
   },
   {
      NAME: 'makuhita',
      url: 'https://pokeapi.co/api/v2/pokemon/296/',
   },
   {
      NAME: 'hariyama',
      url: 'https://pokeapi.co/api/v2/pokemon/297/',
   },
   {
      NAME: 'azurill',
      url: 'https://pokeapi.co/api/v2/pokemon/298/',
   },
   {
      NAME: 'nosepass',
      url: 'https://pokeapi.co/api/v2/pokemon/299/',
   },
   {
      NAME: 'skitty',
      url: 'https://pokeapi.co/api/v2/pokemon/300/',
   },
   {
      NAME: 'delcatty',
      url: 'https://pokeapi.co/api/v2/pokemon/301/',
   },
   {
      NAME: 'sableye',
      url: 'https://pokeapi.co/api/v2/pokemon/302/',
   },
   {
      NAME: 'mawile',
      url: 'https://pokeapi.co/api/v2/pokemon/303/',
   },
   {
      NAME: 'aron',
      url: 'https://pokeapi.co/api/v2/pokemon/304/',
   },
   {
      NAME: 'lairon',
      url: 'https://pokeapi.co/api/v2/pokemon/305/',
   },
   {
      NAME: 'aggron',
      url: 'https://pokeapi.co/api/v2/pokemon/306/',
   },
   {
      NAME: 'meditite',
      url: 'https://pokeapi.co/api/v2/pokemon/307/',
   },
   {
      NAME: 'medicham',
      url: 'https://pokeapi.co/api/v2/pokemon/308/',
   },
   {
      NAME: 'electrike',
      url: 'https://pokeapi.co/api/v2/pokemon/309/',
   },
   {
      NAME: 'manectric',
      url: 'https://pokeapi.co/api/v2/pokemon/310/',
   },
   {
      NAME: 'plusle',
      url: 'https://pokeapi.co/api/v2/pokemon/311/',
   },
   {
      NAME: 'minun',
      url: 'https://pokeapi.co/api/v2/pokemon/312/',
   },
   {
      NAME: 'volbeat',
      url: 'https://pokeapi.co/api/v2/pokemon/313/',
   },
   {
      NAME: 'illumise',
      url: 'https://pokeapi.co/api/v2/pokemon/314/',
   },
   {
      NAME: 'roselia',
      url: 'https://pokeapi.co/api/v2/pokemon/315/',
   },
   {
      NAME: 'gulpin',
      url: 'https://pokeapi.co/api/v2/pokemon/316/',
   },
   {
      NAME: 'swalot',
      url: 'https://pokeapi.co/api/v2/pokemon/317/',
   },
   {
      NAME: 'carvanha',
      url: 'https://pokeapi.co/api/v2/pokemon/318/',
   },
   {
      NAME: 'sharpedo',
      url: 'https://pokeapi.co/api/v2/pokemon/319/',
   },
   {
      NAME: 'wailmer',
      url: 'https://pokeapi.co/api/v2/pokemon/320/',
   },
   {
      NAME: 'wailord',
      url: 'https://pokeapi.co/api/v2/pokemon/321/',
   },
   {
      NAME: 'numel',
      url: 'https://pokeapi.co/api/v2/pokemon/322/',
   },
   {
      NAME: 'camerupt',
      url: 'https://pokeapi.co/api/v2/pokemon/323/',
   },
   {
      NAME: 'torkoal',
      url: 'https://pokeapi.co/api/v2/pokemon/324/',
   },
   {
      NAME: 'spoink',
      url: 'https://pokeapi.co/api/v2/pokemon/325/',
   },
   {
      NAME: 'grumpig',
      url: 'https://pokeapi.co/api/v2/pokemon/326/',
   },
   {
      NAME: 'spinda',
      url: 'https://pokeapi.co/api/v2/pokemon/327/',
   },
   {
      NAME: 'trapinch',
      url: 'https://pokeapi.co/api/v2/pokemon/328/',
   },
   {
      NAME: 'vibrava',
      url: 'https://pokeapi.co/api/v2/pokemon/329/',
   },
   {
      NAME: 'flygon',
      url: 'https://pokeapi.co/api/v2/pokemon/330/',
   },
   {
      NAME: 'cacnea',
      url: 'https://pokeapi.co/api/v2/pokemon/331/',
   },
   {
      NAME: 'cacturne',
      url: 'https://pokeapi.co/api/v2/pokemon/332/',
   },
   {
      NAME: 'swablu',
      url: 'https://pokeapi.co/api/v2/pokemon/333/',
   },
   {
      NAME: 'altaria',
      url: 'https://pokeapi.co/api/v2/pokemon/334/',
   },
   {
      NAME: 'zangoose',
      url: 'https://pokeapi.co/api/v2/pokemon/335/',
   },
   {
      NAME: 'seviper',
      url: 'https://pokeapi.co/api/v2/pokemon/336/',
   },
   {
      NAME: 'lunatone',
      url: 'https://pokeapi.co/api/v2/pokemon/337/',
   },
   {
      NAME: 'solrock',
      url: 'https://pokeapi.co/api/v2/pokemon/338/',
   },
   {
      NAME: 'barboach',
      url: 'https://pokeapi.co/api/v2/pokemon/339/',
   },
   {
      NAME: 'whiscash',
      url: 'https://pokeapi.co/api/v2/pokemon/340/',
   },
   {
      NAME: 'corphish',
      url: 'https://pokeapi.co/api/v2/pokemon/341/',
   },
   {
      NAME: 'crawdaunt',
      url: 'https://pokeapi.co/api/v2/pokemon/342/',
   },
   {
      NAME: 'baltoy',
      url: 'https://pokeapi.co/api/v2/pokemon/343/',
   },
   {
      NAME: 'claydol',
      url: 'https://pokeapi.co/api/v2/pokemon/344/',
   },
   {
      NAME: 'lileep',
      url: 'https://pokeapi.co/api/v2/pokemon/345/',
   },
   {
      NAME: 'cradily',
      url: 'https://pokeapi.co/api/v2/pokemon/346/',
   },
   {
      NAME: 'anorith',
      url: 'https://pokeapi.co/api/v2/pokemon/347/',
   },
   {
      NAME: 'armaldo',
      url: 'https://pokeapi.co/api/v2/pokemon/348/',
   },
   {
      NAME: 'feebas',
      url: 'https://pokeapi.co/api/v2/pokemon/349/',
   },
   {
      NAME: 'milotic',
      url: 'https://pokeapi.co/api/v2/pokemon/350/',
   },
   {
      NAME: 'castform',
      url: 'https://pokeapi.co/api/v2/pokemon/351/',
   },
   {
      NAME: 'kecleon',
      url: 'https://pokeapi.co/api/v2/pokemon/352/',
   },
   {
      NAME: 'shuppet',
      url: 'https://pokeapi.co/api/v2/pokemon/353/',
   },
   {
      NAME: 'banette',
      url: 'https://pokeapi.co/api/v2/pokemon/354/',
   },
   {
      NAME: 'duskull',
      url: 'https://pokeapi.co/api/v2/pokemon/355/',
   },
   {
      NAME: 'dusclops',
      url: 'https://pokeapi.co/api/v2/pokemon/356/',
   },
   {
      NAME: 'tropius',
      url: 'https://pokeapi.co/api/v2/pokemon/357/',
   },
   {
      NAME: 'chimecho',
      url: 'https://pokeapi.co/api/v2/pokemon/358/',
   },
   {
      NAME: 'absol',
      url: 'https://pokeapi.co/api/v2/pokemon/359/',
   },
   {
      NAME: 'wynaut',
      url: 'https://pokeapi.co/api/v2/pokemon/360/',
   },
   {
      NAME: 'snorunt',
      url: 'https://pokeapi.co/api/v2/pokemon/361/',
   },
   {
      NAME: 'glalie',
      url: 'https://pokeapi.co/api/v2/pokemon/362/',
   },
   {
      NAME: 'spheal',
      url: 'https://pokeapi.co/api/v2/pokemon/363/',
   },
   {
      NAME: 'sealeo',
      url: 'https://pokeapi.co/api/v2/pokemon/364/',
   },
   {
      NAME: 'walrein',
      url: 'https://pokeapi.co/api/v2/pokemon/365/',
   },
   {
      NAME: 'clamperl',
      url: 'https://pokeapi.co/api/v2/pokemon/366/',
   },
   {
      NAME: 'huntail',
      url: 'https://pokeapi.co/api/v2/pokemon/367/',
   },
   {
      NAME: 'gorebyss',
      url: 'https://pokeapi.co/api/v2/pokemon/368/',
   },
   {
      NAME: 'relicanth',
      url: 'https://pokeapi.co/api/v2/pokemon/369/',
   },
   {
      NAME: 'luvdisc',
      url: 'https://pokeapi.co/api/v2/pokemon/370/',
   },
   {
      NAME: 'bagon',
      url: 'https://pokeapi.co/api/v2/pokemon/371/',
   },
   {
      NAME: 'shelgon',
      url: 'https://pokeapi.co/api/v2/pokemon/372/',
   },
   {
      NAME: 'salamence',
      url: 'https://pokeapi.co/api/v2/pokemon/373/',
   },
   {
      NAME: 'beldum',
      url: 'https://pokeapi.co/api/v2/pokemon/374/',
   },
   {
      NAME: 'metang',
      url: 'https://pokeapi.co/api/v2/pokemon/375/',
   },
   {
      NAME: 'metagross',
      url: 'https://pokeapi.co/api/v2/pokemon/376/',
   },
   {
      NAME: 'regirock',
      url: 'https://pokeapi.co/api/v2/pokemon/377/',
   },
   {
      NAME: 'regice',
      url: 'https://pokeapi.co/api/v2/pokemon/378/',
   },
   {
      NAME: 'registeel',
      url: 'https://pokeapi.co/api/v2/pokemon/379/',
   },
   {
      NAME: 'latias',
      url: 'https://pokeapi.co/api/v2/pokemon/380/',
   },
   {
      NAME: 'latios',
      url: 'https://pokeapi.co/api/v2/pokemon/381/',
   },
   {
      NAME: 'kyogre',
      url: 'https://pokeapi.co/api/v2/pokemon/382/',
   },
   {
      NAME: 'groudon',
      url: 'https://pokeapi.co/api/v2/pokemon/383/',
   },
   {
      NAME: 'rayquaza',
      url: 'https://pokeapi.co/api/v2/pokemon/384/',
   },
   {
      NAME: 'jirachi',
      url: 'https://pokeapi.co/api/v2/pokemon/385/',
   },
   {
      NAME: 'deoxys-normal',
      url: 'https://pokeapi.co/api/v2/pokemon/386/',
   },
   {
      NAME: 'turtwig',
      url: 'https://pokeapi.co/api/v2/pokemon/387/',
   },
   {
      NAME: 'grotle',
      url: 'https://pokeapi.co/api/v2/pokemon/388/',
   },
   {
      NAME: 'torterra',
      url: 'https://pokeapi.co/api/v2/pokemon/389/',
   },
   {
      NAME: 'chimchar',
      url: 'https://pokeapi.co/api/v2/pokemon/390/',
   },
   {
      NAME: 'monferno',
      url: 'https://pokeapi.co/api/v2/pokemon/391/',
   },
   {
      NAME: 'infernape',
      url: 'https://pokeapi.co/api/v2/pokemon/392/',
   },
   {
      NAME: 'piplup',
      url: 'https://pokeapi.co/api/v2/pokemon/393/',
   },
   {
      NAME: 'prinplup',
      url: 'https://pokeapi.co/api/v2/pokemon/394/',
   },
   {
      NAME: 'empoleon',
      url: 'https://pokeapi.co/api/v2/pokemon/395/',
   },
   {
      NAME: 'starly',
      url: 'https://pokeapi.co/api/v2/pokemon/396/',
   },
   {
      NAME: 'staravia',
      url: 'https://pokeapi.co/api/v2/pokemon/397/',
   },
   {
      NAME: 'staraptor',
      url: 'https://pokeapi.co/api/v2/pokemon/398/',
   },
   {
      NAME: 'bidoof',
      url: 'https://pokeapi.co/api/v2/pokemon/399/',
   },
   {
      NAME: 'bibarel',
      url: 'https://pokeapi.co/api/v2/pokemon/400/',
   },
   {
      NAME: 'kricketot',
      url: 'https://pokeapi.co/api/v2/pokemon/401/',
   },
   {
      NAME: 'kricketune',
      url: 'https://pokeapi.co/api/v2/pokemon/402/',
   },
   {
      NAME: 'shinx',
      url: 'https://pokeapi.co/api/v2/pokemon/403/',
   },
   {
      NAME: 'luxio',
      url: 'https://pokeapi.co/api/v2/pokemon/404/',
   },
   {
      NAME: 'luxray',
      url: 'https://pokeapi.co/api/v2/pokemon/405/',
   },
   {
      NAME: 'budew',
      url: 'https://pokeapi.co/api/v2/pokemon/406/',
   },
   {
      NAME: 'roserade',
      url: 'https://pokeapi.co/api/v2/pokemon/407/',
   },
   {
      NAME: 'cranidos',
      url: 'https://pokeapi.co/api/v2/pokemon/408/',
   },
   {
      NAME: 'rampardos',
      url: 'https://pokeapi.co/api/v2/pokemon/409/',
   },
   {
      NAME: 'shieldon',
      url: 'https://pokeapi.co/api/v2/pokemon/410/',
   },
   {
      NAME: 'bastiodon',
      url: 'https://pokeapi.co/api/v2/pokemon/411/',
   },
   {
      NAME: 'burmy',
      url: 'https://pokeapi.co/api/v2/pokemon/412/',
   },
   {
      NAME: 'wormadam-plant',
      url: 'https://pokeapi.co/api/v2/pokemon/413/',
   },
   {
      NAME: 'mothim',
      url: 'https://pokeapi.co/api/v2/pokemon/414/',
   },
   {
      NAME: 'combee',
      url: 'https://pokeapi.co/api/v2/pokemon/415/',
   },
   {
      NAME: 'vespiquen',
      url: 'https://pokeapi.co/api/v2/pokemon/416/',
   },
   {
      NAME: 'pachirisu',
      url: 'https://pokeapi.co/api/v2/pokemon/417/',
   },
   {
      NAME: 'buizel',
      url: 'https://pokeapi.co/api/v2/pokemon/418/',
   },
   {
      NAME: 'floatzel',
      url: 'https://pokeapi.co/api/v2/pokemon/419/',
   },
   {
      NAME: 'cherubi',
      url: 'https://pokeapi.co/api/v2/pokemon/420/',
   },
   {
      NAME: 'cherrim',
      url: 'https://pokeapi.co/api/v2/pokemon/421/',
   },
   {
      NAME: 'shellos',
      url: 'https://pokeapi.co/api/v2/pokemon/422/',
   },
   {
      NAME: 'gastrodon',
      url: 'https://pokeapi.co/api/v2/pokemon/423/',
   },
   {
      NAME: 'ambipom',
      url: 'https://pokeapi.co/api/v2/pokemon/424/',
   },
   {
      NAME: 'drifloon',
      url: 'https://pokeapi.co/api/v2/pokemon/425/',
   },
   {
      NAME: 'drifblim',
      url: 'https://pokeapi.co/api/v2/pokemon/426/',
   },
   {
      NAME: 'buneary',
      url: 'https://pokeapi.co/api/v2/pokemon/427/',
   },
   {
      NAME: 'lopunny',
      url: 'https://pokeapi.co/api/v2/pokemon/428/',
   },
   {
      NAME: 'mismagius',
      url: 'https://pokeapi.co/api/v2/pokemon/429/',
   },
   {
      NAME: 'honchkrow',
      url: 'https://pokeapi.co/api/v2/pokemon/430/',
   },
   {
      NAME: 'glameow',
      url: 'https://pokeapi.co/api/v2/pokemon/431/',
   },
   {
      NAME: 'purugly',
      url: 'https://pokeapi.co/api/v2/pokemon/432/',
   },
   {
      NAME: 'chingling',
      url: 'https://pokeapi.co/api/v2/pokemon/433/',
   },
   {
      NAME: 'stunky',
      url: 'https://pokeapi.co/api/v2/pokemon/434/',
   },
   {
      NAME: 'skuntank',
      url: 'https://pokeapi.co/api/v2/pokemon/435/',
   },
   {
      NAME: 'bronzor',
      url: 'https://pokeapi.co/api/v2/pokemon/436/',
   },
   {
      NAME: 'bronzong',
      url: 'https://pokeapi.co/api/v2/pokemon/437/',
   },
   {
      NAME: 'bonsly',
      url: 'https://pokeapi.co/api/v2/pokemon/438/',
   },
   {
      NAME: 'mime-jr',
      url: 'https://pokeapi.co/api/v2/pokemon/439/',
   },
   {
      NAME: 'happiny',
      url: 'https://pokeapi.co/api/v2/pokemon/440/',
   },
   {
      NAME: 'chatot',
      url: 'https://pokeapi.co/api/v2/pokemon/441/',
   },
   {
      NAME: 'spiritomb',
      url: 'https://pokeapi.co/api/v2/pokemon/442/',
   },
   {
      NAME: 'gible',
      url: 'https://pokeapi.co/api/v2/pokemon/443/',
   },
   {
      NAME: 'gabite',
      url: 'https://pokeapi.co/api/v2/pokemon/444/',
   },
   {
      NAME: 'garchomp',
      url: 'https://pokeapi.co/api/v2/pokemon/445/',
   },
   {
      NAME: 'munchlax',
      url: 'https://pokeapi.co/api/v2/pokemon/446/',
   },
   {
      NAME: 'riolu',
      url: 'https://pokeapi.co/api/v2/pokemon/447/',
   },
   {
      NAME: 'lucario',
      url: 'https://pokeapi.co/api/v2/pokemon/448/',
   },
   {
      NAME: 'hippopotas',
      url: 'https://pokeapi.co/api/v2/pokemon/449/',
   },
   {
      NAME: 'hippowdon',
      url: 'https://pokeapi.co/api/v2/pokemon/450/',
   },
   {
      NAME: 'skorupi',
      url: 'https://pokeapi.co/api/v2/pokemon/451/',
   },
   {
      NAME: 'drapion',
      url: 'https://pokeapi.co/api/v2/pokemon/452/',
   },
   {
      NAME: 'croagunk',
      url: 'https://pokeapi.co/api/v2/pokemon/453/',
   },
   {
      NAME: 'toxicroak',
      url: 'https://pokeapi.co/api/v2/pokemon/454/',
   },
   {
      NAME: 'carnivine',
      url: 'https://pokeapi.co/api/v2/pokemon/455/',
   },
   {
      NAME: 'finneon',
      url: 'https://pokeapi.co/api/v2/pokemon/456/',
   },
   {
      NAME: 'lumineon',
      url: 'https://pokeapi.co/api/v2/pokemon/457/',
   },
   {
      NAME: 'mantyke',
      url: 'https://pokeapi.co/api/v2/pokemon/458/',
   },
   {
      NAME: 'snover',
      url: 'https://pokeapi.co/api/v2/pokemon/459/',
   },
   {
      NAME: 'abomasnow',
      url: 'https://pokeapi.co/api/v2/pokemon/460/',
   },
   {
      NAME: 'weavile',
      url: 'https://pokeapi.co/api/v2/pokemon/461/',
   },
   {
      NAME: 'magnezone',
      url: 'https://pokeapi.co/api/v2/pokemon/462/',
   },
   {
      NAME: 'lickilicky',
      url: 'https://pokeapi.co/api/v2/pokemon/463/',
   },
   {
      NAME: 'rhyperior',
      url: 'https://pokeapi.co/api/v2/pokemon/464/',
   },
   {
      NAME: 'tangrowth',
      url: 'https://pokeapi.co/api/v2/pokemon/465/',
   },
   {
      NAME: 'electivire',
      url: 'https://pokeapi.co/api/v2/pokemon/466/',
   },
   {
      NAME: 'magmortar',
      url: 'https://pokeapi.co/api/v2/pokemon/467/',
   },
   {
      NAME: 'togekiss',
      url: 'https://pokeapi.co/api/v2/pokemon/468/',
   },
   {
      NAME: 'yanmega',
      url: 'https://pokeapi.co/api/v2/pokemon/469/',
   },
   {
      NAME: 'leafeon',
      url: 'https://pokeapi.co/api/v2/pokemon/470/',
   },
   {
      NAME: 'glaceon',
      url: 'https://pokeapi.co/api/v2/pokemon/471/',
   },
   {
      NAME: 'gliscor',
      url: 'https://pokeapi.co/api/v2/pokemon/472/',
   },
   {
      NAME: 'mamoswine',
      url: 'https://pokeapi.co/api/v2/pokemon/473/',
   },
   {
      NAME: 'porygon-z',
      url: 'https://pokeapi.co/api/v2/pokemon/474/',
   },
   {
      NAME: 'gallade',
      url: 'https://pokeapi.co/api/v2/pokemon/475/',
   },
   {
      NAME: 'probopass',
      url: 'https://pokeapi.co/api/v2/pokemon/476/',
   },
   {
      NAME: 'dusknoir',
      url: 'https://pokeapi.co/api/v2/pokemon/477/',
   },
   {
      NAME: 'froslass',
      url: 'https://pokeapi.co/api/v2/pokemon/478/',
   },
   {
      NAME: 'rotom',
      url: 'https://pokeapi.co/api/v2/pokemon/479/',
   },
   {
      NAME: 'uxie',
      url: 'https://pokeapi.co/api/v2/pokemon/480/',
   },
   {
      NAME: 'mesprit',
      url: 'https://pokeapi.co/api/v2/pokemon/481/',
   },
   {
      NAME: 'azelf',
      url: 'https://pokeapi.co/api/v2/pokemon/482/',
   },
   {
      NAME: 'dialga',
      url: 'https://pokeapi.co/api/v2/pokemon/483/',
   },
   {
      NAME: 'palkia',
      url: 'https://pokeapi.co/api/v2/pokemon/484/',
   },
   {
      NAME: 'heatran',
      url: 'https://pokeapi.co/api/v2/pokemon/485/',
   },
   {
      NAME: 'regigigas',
      url: 'https://pokeapi.co/api/v2/pokemon/486/',
   },
   {
      NAME: 'giratina-altered',
      url: 'https://pokeapi.co/api/v2/pokemon/487/',
   },
   {
      NAME: 'cresselia',
      url: 'https://pokeapi.co/api/v2/pokemon/488/',
   },
   {
      NAME: 'phione',
      url: 'https://pokeapi.co/api/v2/pokemon/489/',
   },
   {
      NAME: 'manaphy',
      url: 'https://pokeapi.co/api/v2/pokemon/490/',
   },
   {
      NAME: 'darkrai',
      url: 'https://pokeapi.co/api/v2/pokemon/491/',
   },
   {
      NAME: 'shaymin-land',
      url: 'https://pokeapi.co/api/v2/pokemon/492/',
   },
   {
      NAME: 'arceus',
      url: 'https://pokeapi.co/api/v2/pokemon/493/',
   },
   {
      NAME: 'victini',
      url: 'https://pokeapi.co/api/v2/pokemon/494/',
   },
   {
      NAME: 'snivy',
      url: 'https://pokeapi.co/api/v2/pokemon/495/',
   },
   {
      NAME: 'servine',
      url: 'https://pokeapi.co/api/v2/pokemon/496/',
   },
   {
      NAME: 'serperior',
      url: 'https://pokeapi.co/api/v2/pokemon/497/',
   },
   {
      NAME: 'tepig',
      url: 'https://pokeapi.co/api/v2/pokemon/498/',
   },
   {
      NAME: 'pignite',
      url: 'https://pokeapi.co/api/v2/pokemon/499/',
   },
   {
      NAME: 'emboar',
      url: 'https://pokeapi.co/api/v2/pokemon/500/',
   },
   {
      NAME: 'oshawott',
      url: 'https://pokeapi.co/api/v2/pokemon/501/',
   },
   {
      NAME: 'dewott',
      url: 'https://pokeapi.co/api/v2/pokemon/502/',
   },
   {
      NAME: 'samurott',
      url: 'https://pokeapi.co/api/v2/pokemon/503/',
   },
   {
      NAME: 'patrat',
      url: 'https://pokeapi.co/api/v2/pokemon/504/',
   },
   {
      NAME: 'watchog',
      url: 'https://pokeapi.co/api/v2/pokemon/505/',
   },
   {
      NAME: 'lillipup',
      url: 'https://pokeapi.co/api/v2/pokemon/506/',
   },
   {
      NAME: 'herdier',
      url: 'https://pokeapi.co/api/v2/pokemon/507/',
   },
   {
      NAME: 'stoutland',
      url: 'https://pokeapi.co/api/v2/pokemon/508/',
   },
   {
      NAME: 'purrloin',
      url: 'https://pokeapi.co/api/v2/pokemon/509/',
   },
   {
      NAME: 'liepard',
      url: 'https://pokeapi.co/api/v2/pokemon/510/',
   },
   {
      NAME: 'pansage',
      url: 'https://pokeapi.co/api/v2/pokemon/511/',
   },
   {
      NAME: 'simisage',
      url: 'https://pokeapi.co/api/v2/pokemon/512/',
   },
   {
      NAME: 'pansear',
      url: 'https://pokeapi.co/api/v2/pokemon/513/',
   },
   {
      NAME: 'simisear',
      url: 'https://pokeapi.co/api/v2/pokemon/514/',
   },
   {
      NAME: 'panpour',
      url: 'https://pokeapi.co/api/v2/pokemon/515/',
   },
   {
      NAME: 'simipour',
      url: 'https://pokeapi.co/api/v2/pokemon/516/',
   },
   {
      NAME: 'munna',
      url: 'https://pokeapi.co/api/v2/pokemon/517/',
   },
   {
      NAME: 'musharna',
      url: 'https://pokeapi.co/api/v2/pokemon/518/',
   },
   {
      NAME: 'pidove',
      url: 'https://pokeapi.co/api/v2/pokemon/519/',
   },
   {
      NAME: 'tranquill',
      url: 'https://pokeapi.co/api/v2/pokemon/520/',
   },
   {
      NAME: 'unfezant',
      url: 'https://pokeapi.co/api/v2/pokemon/521/',
   },
   {
      NAME: 'blitzle',
      url: 'https://pokeapi.co/api/v2/pokemon/522/',
   },
   {
      NAME: 'zebstrika',
      url: 'https://pokeapi.co/api/v2/pokemon/523/',
   },
   {
      NAME: 'roggenrola',
      url: 'https://pokeapi.co/api/v2/pokemon/524/',
   },
   {
      NAME: 'boldore',
      url: 'https://pokeapi.co/api/v2/pokemon/525/',
   },
   {
      NAME: 'gigalith',
      url: 'https://pokeapi.co/api/v2/pokemon/526/',
   },
   {
      NAME: 'woobat',
      url: 'https://pokeapi.co/api/v2/pokemon/527/',
   },
   {
      NAME: 'swoobat',
      url: 'https://pokeapi.co/api/v2/pokemon/528/',
   },
   {
      NAME: 'drilbur',
      url: 'https://pokeapi.co/api/v2/pokemon/529/',
   },
   {
      NAME: 'excadrill',
      url: 'https://pokeapi.co/api/v2/pokemon/530/',
   },
   {
      NAME: 'audino',
      url: 'https://pokeapi.co/api/v2/pokemon/531/',
   },
   {
      NAME: 'timburr',
      url: 'https://pokeapi.co/api/v2/pokemon/532/',
   },
   {
      NAME: 'gurdurr',
      url: 'https://pokeapi.co/api/v2/pokemon/533/',
   },
   {
      NAME: 'conkeldurr',
      url: 'https://pokeapi.co/api/v2/pokemon/534/',
   },
   {
      NAME: 'tympole',
      url: 'https://pokeapi.co/api/v2/pokemon/535/',
   },
   {
      NAME: 'palpitoad',
      url: 'https://pokeapi.co/api/v2/pokemon/536/',
   },
   {
      NAME: 'seismitoad',
      url: 'https://pokeapi.co/api/v2/pokemon/537/',
   },
   {
      NAME: 'throh',
      url: 'https://pokeapi.co/api/v2/pokemon/538/',
   },
   {
      NAME: 'sawk',
      url: 'https://pokeapi.co/api/v2/pokemon/539/',
   },
   {
      NAME: 'sewaddle',
      url: 'https://pokeapi.co/api/v2/pokemon/540/',
   },
   {
      NAME: 'swadloon',
      url: 'https://pokeapi.co/api/v2/pokemon/541/',
   },
   {
      NAME: 'leavanny',
      url: 'https://pokeapi.co/api/v2/pokemon/542/',
   },
   {
      NAME: 'venipede',
      url: 'https://pokeapi.co/api/v2/pokemon/543/',
   },
   {
      NAME: 'whirlipede',
      url: 'https://pokeapi.co/api/v2/pokemon/544/',
   },
   {
      NAME: 'scolipede',
      url: 'https://pokeapi.co/api/v2/pokemon/545/',
   },
   {
      NAME: 'cottonee',
      url: 'https://pokeapi.co/api/v2/pokemon/546/',
   },
   {
      NAME: 'whimsicott',
      url: 'https://pokeapi.co/api/v2/pokemon/547/',
   },
   {
      NAME: 'petilil',
      url: 'https://pokeapi.co/api/v2/pokemon/548/',
   },
   {
      NAME: 'lilligant',
      url: 'https://pokeapi.co/api/v2/pokemon/549/',
   },
   {
      NAME: 'basculin-red-striped',
      url: 'https://pokeapi.co/api/v2/pokemon/550/',
   },
   {
      NAME: 'sandile',
      url: 'https://pokeapi.co/api/v2/pokemon/551/',
   },
   {
      NAME: 'krokorok',
      url: 'https://pokeapi.co/api/v2/pokemon/552/',
   },
   {
      NAME: 'krookodile',
      url: 'https://pokeapi.co/api/v2/pokemon/553/',
   },
   {
      NAME: 'darumaka',
      url: 'https://pokeapi.co/api/v2/pokemon/554/',
   },
   {
      NAME: 'darmanitan-standard',
      url: 'https://pokeapi.co/api/v2/pokemon/555/',
   },
   {
      NAME: 'maractus',
      url: 'https://pokeapi.co/api/v2/pokemon/556/',
   },
   {
      NAME: 'dwebble',
      url: 'https://pokeapi.co/api/v2/pokemon/557/',
   },
   {
      NAME: 'crustle',
      url: 'https://pokeapi.co/api/v2/pokemon/558/',
   },
   {
      NAME: 'scraggy',
      url: 'https://pokeapi.co/api/v2/pokemon/559/',
   },
   {
      NAME: 'scrafty',
      url: 'https://pokeapi.co/api/v2/pokemon/560/',
   },
   {
      NAME: 'sigilyph',
      url: 'https://pokeapi.co/api/v2/pokemon/561/',
   },
   {
      NAME: 'yamask',
      url: 'https://pokeapi.co/api/v2/pokemon/562/',
   },
   {
      NAME: 'cofagrigus',
      url: 'https://pokeapi.co/api/v2/pokemon/563/',
   },
   {
      NAME: 'tirtouga',
      url: 'https://pokeapi.co/api/v2/pokemon/564/',
   },
   {
      NAME: 'carracosta',
      url: 'https://pokeapi.co/api/v2/pokemon/565/',
   },
   {
      NAME: 'archen',
      url: 'https://pokeapi.co/api/v2/pokemon/566/',
   },
   {
      NAME: 'archeops',
      url: 'https://pokeapi.co/api/v2/pokemon/567/',
   },
   {
      NAME: 'trubbish',
      url: 'https://pokeapi.co/api/v2/pokemon/568/',
   },
   {
      NAME: 'garbodor',
      url: 'https://pokeapi.co/api/v2/pokemon/569/',
   },
   {
      NAME: 'zorua',
      url: 'https://pokeapi.co/api/v2/pokemon/570/',
   },
   {
      NAME: 'zoroark',
      url: 'https://pokeapi.co/api/v2/pokemon/571/',
   },
   {
      NAME: 'minccino',
      url: 'https://pokeapi.co/api/v2/pokemon/572/',
   },
   {
      NAME: 'cinccino',
      url: 'https://pokeapi.co/api/v2/pokemon/573/',
   },
   {
      NAME: 'gothita',
      url: 'https://pokeapi.co/api/v2/pokemon/574/',
   },
   {
      NAME: 'gothorita',
      url: 'https://pokeapi.co/api/v2/pokemon/575/',
   },
   {
      NAME: 'gothitelle',
      url: 'https://pokeapi.co/api/v2/pokemon/576/',
   },
   {
      NAME: 'solosis',
      url: 'https://pokeapi.co/api/v2/pokemon/577/',
   },
   {
      NAME: 'duosion',
      url: 'https://pokeapi.co/api/v2/pokemon/578/',
   },
   {
      NAME: 'reuniclus',
      url: 'https://pokeapi.co/api/v2/pokemon/579/',
   },
   {
      NAME: 'ducklett',
      url: 'https://pokeapi.co/api/v2/pokemon/580/',
   },
   {
      NAME: 'swanna',
      url: 'https://pokeapi.co/api/v2/pokemon/581/',
   },
   {
      NAME: 'vanillite',
      url: 'https://pokeapi.co/api/v2/pokemon/582/',
   },
   {
      NAME: 'vanillish',
      url: 'https://pokeapi.co/api/v2/pokemon/583/',
   },
   {
      NAME: 'vanilluxe',
      url: 'https://pokeapi.co/api/v2/pokemon/584/',
   },
   {
      NAME: 'deerling',
      url: 'https://pokeapi.co/api/v2/pokemon/585/',
   },
   {
      NAME: 'sawsbuck',
      url: 'https://pokeapi.co/api/v2/pokemon/586/',
   },
   {
      NAME: 'emolga',
      url: 'https://pokeapi.co/api/v2/pokemon/587/',
   },
   {
      NAME: 'karrablast',
      url: 'https://pokeapi.co/api/v2/pokemon/588/',
   },
   {
      NAME: 'escavalier',
      url: 'https://pokeapi.co/api/v2/pokemon/589/',
   },
   {
      NAME: 'foongus',
      url: 'https://pokeapi.co/api/v2/pokemon/590/',
   },
   {
      NAME: 'amoonguss',
      url: 'https://pokeapi.co/api/v2/pokemon/591/',
   },
   {
      NAME: 'frillish',
      url: 'https://pokeapi.co/api/v2/pokemon/592/',
   },
   {
      NAME: 'jellicent',
      url: 'https://pokeapi.co/api/v2/pokemon/593/',
   },
   {
      NAME: 'alomomola',
      url: 'https://pokeapi.co/api/v2/pokemon/594/',
   },
   {
      NAME: 'joltik',
      url: 'https://pokeapi.co/api/v2/pokemon/595/',
   },
   {
      NAME: 'galvantula',
      url: 'https://pokeapi.co/api/v2/pokemon/596/',
   },
   {
      NAME: 'ferroseed',
      url: 'https://pokeapi.co/api/v2/pokemon/597/',
   },
   {
      NAME: 'ferrothorn',
      url: 'https://pokeapi.co/api/v2/pokemon/598/',
   },
   {
      NAME: 'klink',
      url: 'https://pokeapi.co/api/v2/pokemon/599/',
   },
   {
      NAME: 'klang',
      url: 'https://pokeapi.co/api/v2/pokemon/600/',
   },
   {
      NAME: 'klinklang',
      url: 'https://pokeapi.co/api/v2/pokemon/601/',
   },
   {
      NAME: 'tynamo',
      url: 'https://pokeapi.co/api/v2/pokemon/602/',
   },
   {
      NAME: 'eelektrik',
      url: 'https://pokeapi.co/api/v2/pokemon/603/',
   },
   {
      NAME: 'eelektross',
      url: 'https://pokeapi.co/api/v2/pokemon/604/',
   },
   {
      NAME: 'elgyem',
      url: 'https://pokeapi.co/api/v2/pokemon/605/',
   },
   {
      NAME: 'beheeyem',
      url: 'https://pokeapi.co/api/v2/pokemon/606/',
   },
   {
      NAME: 'litwick',
      url: 'https://pokeapi.co/api/v2/pokemon/607/',
   },
   {
      NAME: 'lampent',
      url: 'https://pokeapi.co/api/v2/pokemon/608/',
   },
   {
      NAME: 'chandelure',
      url: 'https://pokeapi.co/api/v2/pokemon/609/',
   },
   {
      NAME: 'axew',
      url: 'https://pokeapi.co/api/v2/pokemon/610/',
   },
   {
      NAME: 'fraxure',
      url: 'https://pokeapi.co/api/v2/pokemon/611/',
   },
   {
      NAME: 'haxorus',
      url: 'https://pokeapi.co/api/v2/pokemon/612/',
   },
   {
      NAME: 'cubchoo',
      url: 'https://pokeapi.co/api/v2/pokemon/613/',
   },
   {
      NAME: 'beartic',
      url: 'https://pokeapi.co/api/v2/pokemon/614/',
   },
   {
      NAME: 'cryogonal',
      url: 'https://pokeapi.co/api/v2/pokemon/615/',
   },
   {
      NAME: 'shelmet',
      url: 'https://pokeapi.co/api/v2/pokemon/616/',
   },
   {
      NAME: 'accelgor',
      url: 'https://pokeapi.co/api/v2/pokemon/617/',
   },
   {
      NAME: 'stunfisk',
      url: 'https://pokeapi.co/api/v2/pokemon/618/',
   },
   {
      NAME: 'mienfoo',
      url: 'https://pokeapi.co/api/v2/pokemon/619/',
   },
   {
      NAME: 'mienshao',
      url: 'https://pokeapi.co/api/v2/pokemon/620/',
   },
   {
      NAME: 'druddigon',
      url: 'https://pokeapi.co/api/v2/pokemon/621/',
   },
   {
      NAME: 'golett',
      url: 'https://pokeapi.co/api/v2/pokemon/622/',
   },
   {
      NAME: 'golurk',
      url: 'https://pokeapi.co/api/v2/pokemon/623/',
   },
   {
      NAME: 'pawniard',
      url: 'https://pokeapi.co/api/v2/pokemon/624/',
   },
   {
      NAME: 'bisharp',
      url: 'https://pokeapi.co/api/v2/pokemon/625/',
   },
   {
      NAME: 'bouffalant',
      url: 'https://pokeapi.co/api/v2/pokemon/626/',
   },
   {
      NAME: 'rufflet',
      url: 'https://pokeapi.co/api/v2/pokemon/627/',
   },
   {
      NAME: 'braviary',
      url: 'https://pokeapi.co/api/v2/pokemon/628/',
   },
   {
      NAME: 'vullaby',
      url: 'https://pokeapi.co/api/v2/pokemon/629/',
   },
   {
      NAME: 'mandibuzz',
      url: 'https://pokeapi.co/api/v2/pokemon/630/',
   },
   {
      NAME: 'heatmor',
      url: 'https://pokeapi.co/api/v2/pokemon/631/',
   },
   {
      NAME: 'durant',
      url: 'https://pokeapi.co/api/v2/pokemon/632/',
   },
   {
      NAME: 'deino',
      url: 'https://pokeapi.co/api/v2/pokemon/633/',
   },
   {
      NAME: 'zweilous',
      url: 'https://pokeapi.co/api/v2/pokemon/634/',
   },
   {
      NAME: 'hydreigon',
      url: 'https://pokeapi.co/api/v2/pokemon/635/',
   },
   {
      NAME: 'larvesta',
      url: 'https://pokeapi.co/api/v2/pokemon/636/',
   },
   {
      NAME: 'volcarona',
      url: 'https://pokeapi.co/api/v2/pokemon/637/',
   },
   {
      NAME: 'cobalion',
      url: 'https://pokeapi.co/api/v2/pokemon/638/',
   },
   {
      NAME: 'terrakion',
      url: 'https://pokeapi.co/api/v2/pokemon/639/',
   },
   {
      NAME: 'virizion',
      url: 'https://pokeapi.co/api/v2/pokemon/640/',
   },
   {
      NAME: 'tornadus-incarnate',
      url: 'https://pokeapi.co/api/v2/pokemon/641/',
   },
   {
      NAME: 'thundurus-incarnate',
      url: 'https://pokeapi.co/api/v2/pokemon/642/',
   },
   {
      NAME: 'reshiram',
      url: 'https://pokeapi.co/api/v2/pokemon/643/',
   },
   {
      NAME: 'zekrom',
      url: 'https://pokeapi.co/api/v2/pokemon/644/',
   },
   {
      NAME: 'landorus-incarnate',
      url: 'https://pokeapi.co/api/v2/pokemon/645/',
   },
   {
      NAME: 'kyurem',
      url: 'https://pokeapi.co/api/v2/pokemon/646/',
   },
   {
      NAME: 'keldeo-ordinary',
      url: 'https://pokeapi.co/api/v2/pokemon/647/',
   },
   {
      NAME: 'meloetta-aria',
      url: 'https://pokeapi.co/api/v2/pokemon/648/',
   },
   {
      NAME: 'genesect',
      url: 'https://pokeapi.co/api/v2/pokemon/649/',
   },
   {
      NAME: 'chespin',
      url: 'https://pokeapi.co/api/v2/pokemon/650/',
   },
   {
      NAME: 'quilladin',
      url: 'https://pokeapi.co/api/v2/pokemon/651/',
   },
   {
      NAME: 'chesnaught',
      url: 'https://pokeapi.co/api/v2/pokemon/652/',
   },
   {
      NAME: 'fennekin',
      url: 'https://pokeapi.co/api/v2/pokemon/653/',
   },
   {
      NAME: 'braixen',
      url: 'https://pokeapi.co/api/v2/pokemon/654/',
   },
   {
      NAME: 'delphox',
      url: 'https://pokeapi.co/api/v2/pokemon/655/',
   },
   {
      NAME: 'froakie',
      url: 'https://pokeapi.co/api/v2/pokemon/656/',
   },
   {
      NAME: 'frogadier',
      url: 'https://pokeapi.co/api/v2/pokemon/657/',
   },
   {
      NAME: 'greninja',
      url: 'https://pokeapi.co/api/v2/pokemon/658/',
   },
   {
      NAME: 'bunnelby',
      url: 'https://pokeapi.co/api/v2/pokemon/659/',
   },
   {
      NAME: 'diggersby',
      url: 'https://pokeapi.co/api/v2/pokemon/660/',
   },
   {
      NAME: 'fletchling',
      url: 'https://pokeapi.co/api/v2/pokemon/661/',
   },
   {
      NAME: 'fletchinder',
      url: 'https://pokeapi.co/api/v2/pokemon/662/',
   },
   {
      NAME: 'talonflame',
      url: 'https://pokeapi.co/api/v2/pokemon/663/',
   },
   {
      NAME: 'scatterbug',
      url: 'https://pokeapi.co/api/v2/pokemon/664/',
   },
   {
      NAME: 'spewpa',
      url: 'https://pokeapi.co/api/v2/pokemon/665/',
   },
   {
      NAME: 'vivillon',
      url: 'https://pokeapi.co/api/v2/pokemon/666/',
   },
   {
      NAME: 'litleo',
      url: 'https://pokeapi.co/api/v2/pokemon/667/',
   },
   {
      NAME: 'pyroar',
      url: 'https://pokeapi.co/api/v2/pokemon/668/',
   },
   {
      NAME: 'flabebe',
      url: 'https://pokeapi.co/api/v2/pokemon/669/',
   },
   {
      NAME: 'floette',
      url: 'https://pokeapi.co/api/v2/pokemon/670/',
   },
   {
      NAME: 'florges',
      url: 'https://pokeapi.co/api/v2/pokemon/671/',
   },
   {
      NAME: 'skiddo',
      url: 'https://pokeapi.co/api/v2/pokemon/672/',
   },
   {
      NAME: 'gogoat',
      url: 'https://pokeapi.co/api/v2/pokemon/673/',
   },
   {
      NAME: 'pancham',
      url: 'https://pokeapi.co/api/v2/pokemon/674/',
   },
   {
      NAME: 'pangoro',
      url: 'https://pokeapi.co/api/v2/pokemon/675/',
   },
   {
      NAME: 'furfrou',
      url: 'https://pokeapi.co/api/v2/pokemon/676/',
   },
   {
      NAME: 'espurr',
      url: 'https://pokeapi.co/api/v2/pokemon/677/',
   },
   {
      NAME: 'meowstic-male',
      url: 'https://pokeapi.co/api/v2/pokemon/678/',
   },
   {
      NAME: 'honedge',
      url: 'https://pokeapi.co/api/v2/pokemon/679/',
   },
   {
      NAME: 'doublade',
      url: 'https://pokeapi.co/api/v2/pokemon/680/',
   },
   {
      NAME: 'aegislash-shield',
      url: 'https://pokeapi.co/api/v2/pokemon/681/',
   },
   {
      NAME: 'spritzee',
      url: 'https://pokeapi.co/api/v2/pokemon/682/',
   },
   {
      NAME: 'aromatisse',
      url: 'https://pokeapi.co/api/v2/pokemon/683/',
   },
   {
      NAME: 'swirlix',
      url: 'https://pokeapi.co/api/v2/pokemon/684/',
   },
   {
      NAME: 'slurpuff',
      url: 'https://pokeapi.co/api/v2/pokemon/685/',
   },
   {
      NAME: 'inkay',
      url: 'https://pokeapi.co/api/v2/pokemon/686/',
   },
   {
      NAME: 'malamar',
      url: 'https://pokeapi.co/api/v2/pokemon/687/',
   },
   {
      NAME: 'binacle',
      url: 'https://pokeapi.co/api/v2/pokemon/688/',
   },
   {
      NAME: 'barbaracle',
      url: 'https://pokeapi.co/api/v2/pokemon/689/',
   },
   {
      NAME: 'skrelp',
      url: 'https://pokeapi.co/api/v2/pokemon/690/',
   },
   {
      NAME: 'dragalge',
      url: 'https://pokeapi.co/api/v2/pokemon/691/',
   },
   {
      NAME: 'clauncher',
      url: 'https://pokeapi.co/api/v2/pokemon/692/',
   },
   {
      NAME: 'clawitzer',
      url: 'https://pokeapi.co/api/v2/pokemon/693/',
   },
   {
      NAME: 'helioptile',
      url: 'https://pokeapi.co/api/v2/pokemon/694/',
   },
   {
      NAME: 'heliolisk',
      url: 'https://pokeapi.co/api/v2/pokemon/695/',
   },
   {
      NAME: 'tyrunt',
      url: 'https://pokeapi.co/api/v2/pokemon/696/',
   },
   {
      NAME: 'tyrantrum',
      url: 'https://pokeapi.co/api/v2/pokemon/697/',
   },
   {
      NAME: 'amaura',
      url: 'https://pokeapi.co/api/v2/pokemon/698/',
   },
   {
      NAME: 'aurorus',
      url: 'https://pokeapi.co/api/v2/pokemon/699/',
   },
   {
      NAME: 'sylveon',
      url: 'https://pokeapi.co/api/v2/pokemon/700/',
   },
   {
      NAME: 'hawlucha',
      url: 'https://pokeapi.co/api/v2/pokemon/701/',
   },
   {
      NAME: 'dedenne',
      url: 'https://pokeapi.co/api/v2/pokemon/702/',
   },
   {
      NAME: 'carbink',
      url: 'https://pokeapi.co/api/v2/pokemon/703/',
   },
   {
      NAME: 'goomy',
      url: 'https://pokeapi.co/api/v2/pokemon/704/',
   },
   {
      NAME: 'sliggoo',
      url: 'https://pokeapi.co/api/v2/pokemon/705/',
   },
   {
      NAME: 'goodra',
      url: 'https://pokeapi.co/api/v2/pokemon/706/',
   },
   {
      NAME: 'klefki',
      url: 'https://pokeapi.co/api/v2/pokemon/707/',
   },
   {
      NAME: 'phantump',
      url: 'https://pokeapi.co/api/v2/pokemon/708/',
   },
   {
      NAME: 'trevenant',
      url: 'https://pokeapi.co/api/v2/pokemon/709/',
   },
   {
      NAME: 'pumpkaboo-average',
      url: 'https://pokeapi.co/api/v2/pokemon/710/',
   },
   {
      NAME: 'gourgeist-average',
      url: 'https://pokeapi.co/api/v2/pokemon/711/',
   },
   {
      NAME: 'bergmite',
      url: 'https://pokeapi.co/api/v2/pokemon/712/',
   },
   {
      NAME: 'avalugg',
      url: 'https://pokeapi.co/api/v2/pokemon/713/',
   },
   {
      NAME: 'noibat',
      url: 'https://pokeapi.co/api/v2/pokemon/714/',
   },
   {
      NAME: 'noivern',
      url: 'https://pokeapi.co/api/v2/pokemon/715/',
   },
   {
      NAME: 'xerneas',
      url: 'https://pokeapi.co/api/v2/pokemon/716/',
   },
   {
      NAME: 'yveltal',
      url: 'https://pokeapi.co/api/v2/pokemon/717/',
   },
   {
      NAME: 'zygarde-50',
      url: 'https://pokeapi.co/api/v2/pokemon/718/',
   },
   {
      NAME: 'diancie',
      url: 'https://pokeapi.co/api/v2/pokemon/719/',
   },
   {
      NAME: 'hoopa',
      url: 'https://pokeapi.co/api/v2/pokemon/720/',
   },
   {
      NAME: 'volcanion',
      url: 'https://pokeapi.co/api/v2/pokemon/721/',
   },
   {
      NAME: 'rowlet',
      url: 'https://pokeapi.co/api/v2/pokemon/722/',
   },
   {
      NAME: 'dartrix',
      url: 'https://pokeapi.co/api/v2/pokemon/723/',
   },
   {
      NAME: 'decidueye',
      url: 'https://pokeapi.co/api/v2/pokemon/724/',
   },
   {
      NAME: 'litten',
      url: 'https://pokeapi.co/api/v2/pokemon/725/',
   },
   {
      NAME: 'torracat',
      url: 'https://pokeapi.co/api/v2/pokemon/726/',
   },
   {
      NAME: 'incineroar',
      url: 'https://pokeapi.co/api/v2/pokemon/727/',
   },
   {
      NAME: 'popplio',
      url: 'https://pokeapi.co/api/v2/pokemon/728/',
   },
   {
      NAME: 'brionne',
      url: 'https://pokeapi.co/api/v2/pokemon/729/',
   },
   {
      NAME: 'primarina',
      url: 'https://pokeapi.co/api/v2/pokemon/730/',
   },
   {
      NAME: 'pikipek',
      url: 'https://pokeapi.co/api/v2/pokemon/731/',
   },
   {
      NAME: 'trumbeak',
      url: 'https://pokeapi.co/api/v2/pokemon/732/',
   },
   {
      NAME: 'toucannon',
      url: 'https://pokeapi.co/api/v2/pokemon/733/',
   },
   {
      NAME: 'yungoos',
      url: 'https://pokeapi.co/api/v2/pokemon/734/',
   },
   {
      NAME: 'gumshoos',
      url: 'https://pokeapi.co/api/v2/pokemon/735/',
   },
   {
      NAME: 'grubbin',
      url: 'https://pokeapi.co/api/v2/pokemon/736/',
   },
   {
      NAME: 'charjabug',
      url: 'https://pokeapi.co/api/v2/pokemon/737/',
   },
   {
      NAME: 'vikavolt',
      url: 'https://pokeapi.co/api/v2/pokemon/738/',
   },
   {
      NAME: 'crabrawler',
      url: 'https://pokeapi.co/api/v2/pokemon/739/',
   },
   {
      NAME: 'crabominable',
      url: 'https://pokeapi.co/api/v2/pokemon/740/',
   },
   {
      NAME: 'oricorio-baile',
      url: 'https://pokeapi.co/api/v2/pokemon/741/',
   },
   {
      NAME: 'cutiefly',
      url: 'https://pokeapi.co/api/v2/pokemon/742/',
   },
   {
      NAME: 'ribombee',
      url: 'https://pokeapi.co/api/v2/pokemon/743/',
   },
   {
      NAME: 'rockruff',
      url: 'https://pokeapi.co/api/v2/pokemon/744/',
   },
   {
      NAME: 'lycanroc-midday',
      url: 'https://pokeapi.co/api/v2/pokemon/745/',
   },
   {
      NAME: 'wishiwashi-solo',
      url: 'https://pokeapi.co/api/v2/pokemon/746/',
   },
   {
      NAME: 'mareanie',
      url: 'https://pokeapi.co/api/v2/pokemon/747/',
   },
   {
      NAME: 'toxapex',
      url: 'https://pokeapi.co/api/v2/pokemon/748/',
   },
   {
      NAME: 'mudbray',
      url: 'https://pokeapi.co/api/v2/pokemon/749/',
   },
   {
      NAME: 'mudsdale',
      url: 'https://pokeapi.co/api/v2/pokemon/750/',
   },
   {
      NAME: 'dewpider',
      url: 'https://pokeapi.co/api/v2/pokemon/751/',
   },
   {
      NAME: 'araquanid',
      url: 'https://pokeapi.co/api/v2/pokemon/752/',
   },
   {
      NAME: 'fomantis',
      url: 'https://pokeapi.co/api/v2/pokemon/753/',
   },
   {
      NAME: 'lurantis',
      url: 'https://pokeapi.co/api/v2/pokemon/754/',
   },
   {
      NAME: 'morelull',
      url: 'https://pokeapi.co/api/v2/pokemon/755/',
   },
   {
      NAME: 'shiinotic',
      url: 'https://pokeapi.co/api/v2/pokemon/756/',
   },
   {
      NAME: 'salandit',
      url: 'https://pokeapi.co/api/v2/pokemon/757/',
   },
   {
      NAME: 'salazzle',
      url: 'https://pokeapi.co/api/v2/pokemon/758/',
   },
   {
      NAME: 'stufful',
      url: 'https://pokeapi.co/api/v2/pokemon/759/',
   },
   {
      NAME: 'bewear',
      url: 'https://pokeapi.co/api/v2/pokemon/760/',
   },
   {
      NAME: 'bounsweet',
      url: 'https://pokeapi.co/api/v2/pokemon/761/',
   },
   {
      NAME: 'steenee',
      url: 'https://pokeapi.co/api/v2/pokemon/762/',
   },
   {
      NAME: 'tsareena',
      url: 'https://pokeapi.co/api/v2/pokemon/763/',
   },
   {
      NAME: 'comfey',
      url: 'https://pokeapi.co/api/v2/pokemon/764/',
   },
   {
      NAME: 'oranguru',
      url: 'https://pokeapi.co/api/v2/pokemon/765/',
   },
   {
      NAME: 'passimian',
      url: 'https://pokeapi.co/api/v2/pokemon/766/',
   },
   {
      NAME: 'wimpod',
      url: 'https://pokeapi.co/api/v2/pokemon/767/',
   },
   {
      NAME: 'golisopod',
      url: 'https://pokeapi.co/api/v2/pokemon/768/',
   },
   {
      NAME: 'sandygast',
      url: 'https://pokeapi.co/api/v2/pokemon/769/',
   },
   {
      NAME: 'palossand',
      url: 'https://pokeapi.co/api/v2/pokemon/770/',
   },
   {
      NAME: 'pyukumuku',
      url: 'https://pokeapi.co/api/v2/pokemon/771/',
   },
   {
      NAME: 'type-null',
      url: 'https://pokeapi.co/api/v2/pokemon/772/',
   },
   {
      NAME: 'silvally',
      url: 'https://pokeapi.co/api/v2/pokemon/773/',
   },
   {
      NAME: 'minior-red-meteor',
      url: 'https://pokeapi.co/api/v2/pokemon/774/',
   },
   {
      NAME: 'komala',
      url: 'https://pokeapi.co/api/v2/pokemon/775/',
   },
   {
      NAME: 'turtonator',
      url: 'https://pokeapi.co/api/v2/pokemon/776/',
   },
   {
      NAME: 'togedemaru',
      url: 'https://pokeapi.co/api/v2/pokemon/777/',
   },
   {
      NAME: 'mimikyu-disguised',
      url: 'https://pokeapi.co/api/v2/pokemon/778/',
   },
   {
      NAME: 'bruxish',
      url: 'https://pokeapi.co/api/v2/pokemon/779/',
   },
   {
      NAME: 'drampa',
      url: 'https://pokeapi.co/api/v2/pokemon/780/',
   },
   {
      NAME: 'dhelmise',
      url: 'https://pokeapi.co/api/v2/pokemon/781/',
   },
   {
      NAME: 'jangmo-o',
      url: 'https://pokeapi.co/api/v2/pokemon/782/',
   },
   {
      NAME: 'hakamo-o',
      url: 'https://pokeapi.co/api/v2/pokemon/783/',
   },
   {
      NAME: 'kommo-o',
      url: 'https://pokeapi.co/api/v2/pokemon/784/',
   },
   {
      NAME: 'tapu-koko',
      url: 'https://pokeapi.co/api/v2/pokemon/785/',
   },
   {
      NAME: 'tapu-lele',
      url: 'https://pokeapi.co/api/v2/pokemon/786/',
   },
   {
      NAME: 'tapu-bulu',
      url: 'https://pokeapi.co/api/v2/pokemon/787/',
   },
   {
      NAME: 'tapu-fini',
      url: 'https://pokeapi.co/api/v2/pokemon/788/',
   },
   {
      NAME: 'cosmog',
      url: 'https://pokeapi.co/api/v2/pokemon/789/',
   },
   {
      NAME: 'cosmoem',
      url: 'https://pokeapi.co/api/v2/pokemon/790/',
   },
   {
      NAME: 'solgaleo',
      url: 'https://pokeapi.co/api/v2/pokemon/791/',
   },
   {
      NAME: 'lunala',
      url: 'https://pokeapi.co/api/v2/pokemon/792/',
   },
   {
      NAME: 'nihilego',
      url: 'https://pokeapi.co/api/v2/pokemon/793/',
   },
   {
      NAME: 'buzzwole',
      url: 'https://pokeapi.co/api/v2/pokemon/794/',
   },
   {
      NAME: 'pheromosa',
      url: 'https://pokeapi.co/api/v2/pokemon/795/',
   },
   {
      NAME: 'xurkitree',
      url: 'https://pokeapi.co/api/v2/pokemon/796/',
   },
   {
      NAME: 'celesteela',
      url: 'https://pokeapi.co/api/v2/pokemon/797/',
   },
   {
      NAME: 'kartana',
      url: 'https://pokeapi.co/api/v2/pokemon/798/',
   },
   {
      NAME: 'guzzlord',
      url: 'https://pokeapi.co/api/v2/pokemon/799/',
   },
   {
      NAME: 'necrozma',
      url: 'https://pokeapi.co/api/v2/pokemon/800/',
   },
   {
      NAME: 'magearna',
      url: 'https://pokeapi.co/api/v2/pokemon/801/',
   },
   {
      NAME: 'marshadow',
      url: 'https://pokeapi.co/api/v2/pokemon/802/',
   },
   {
      NAME: 'poipole',
      url: 'https://pokeapi.co/api/v2/pokemon/803/',
   },
   {
      NAME: 'naganadel',
      url: 'https://pokeapi.co/api/v2/pokemon/804/',
   },
   {
      NAME: 'stakataka',
      url: 'https://pokeapi.co/api/v2/pokemon/805/',
   },
   {
      NAME: 'blacephalon',
      url: 'https://pokeapi.co/api/v2/pokemon/806/',
   },
   {
      NAME: 'zeraora',
      url: 'https://pokeapi.co/api/v2/pokemon/807/',
   },
   {
      NAME: 'meltan',
      url: 'https://pokeapi.co/api/v2/pokemon/808/',
   },
   {
      NAME: 'melmetal',
      url: 'https://pokeapi.co/api/v2/pokemon/809/',
   },
   {
      NAME: 'grookey',
      url: 'https://pokeapi.co/api/v2/pokemon/810/',
   },
   {
      NAME: 'thwackey',
      url: 'https://pokeapi.co/api/v2/pokemon/811/',
   },
   {
      NAME: 'rillaboom',
      url: 'https://pokeapi.co/api/v2/pokemon/812/',
   },
   {
      NAME: 'scorbunny',
      url: 'https://pokeapi.co/api/v2/pokemon/813/',
   },
   {
      NAME: 'raboot',
      url: 'https://pokeapi.co/api/v2/pokemon/814/',
   },
   {
      NAME: 'cinderace',
      url: 'https://pokeapi.co/api/v2/pokemon/815/',
   },
   {
      NAME: 'sobble',
      url: 'https://pokeapi.co/api/v2/pokemon/816/',
   },
   {
      NAME: 'drizzile',
      url: 'https://pokeapi.co/api/v2/pokemon/817/',
   },
   {
      NAME: 'inteleon',
      url: 'https://pokeapi.co/api/v2/pokemon/818/',
   },
   {
      NAME: 'skwovet',
      url: 'https://pokeapi.co/api/v2/pokemon/819/',
   },
   {
      NAME: 'greedent',
      url: 'https://pokeapi.co/api/v2/pokemon/820/',
   },
   {
      NAME: 'rookidee',
      url: 'https://pokeapi.co/api/v2/pokemon/821/',
   },
   {
      NAME: 'corvisquire',
      url: 'https://pokeapi.co/api/v2/pokemon/822/',
   },
   {
      NAME: 'corviknight',
      url: 'https://pokeapi.co/api/v2/pokemon/823/',
   },
   {
      NAME: 'blipbug',
      url: 'https://pokeapi.co/api/v2/pokemon/824/',
   },
   {
      NAME: 'dottler',
      url: 'https://pokeapi.co/api/v2/pokemon/825/',
   },
   {
      NAME: 'orbeetle',
      url: 'https://pokeapi.co/api/v2/pokemon/826/',
   },
   {
      NAME: 'nickit',
      url: 'https://pokeapi.co/api/v2/pokemon/827/',
   },
   {
      NAME: 'thievul',
      url: 'https://pokeapi.co/api/v2/pokemon/828/',
   },
   {
      NAME: 'gossifleur',
      url: 'https://pokeapi.co/api/v2/pokemon/829/',
   },
   {
      NAME: 'eldegoss',
      url: 'https://pokeapi.co/api/v2/pokemon/830/',
   },
   {
      NAME: 'wooloo',
      url: 'https://pokeapi.co/api/v2/pokemon/831/',
   },
   {
      NAME: 'dubwool',
      url: 'https://pokeapi.co/api/v2/pokemon/832/',
   },
   {
      NAME: 'chewtle',
      url: 'https://pokeapi.co/api/v2/pokemon/833/',
   },
   {
      NAME: 'drednaw',
      url: 'https://pokeapi.co/api/v2/pokemon/834/',
   },
   {
      NAME: 'yamper',
      url: 'https://pokeapi.co/api/v2/pokemon/835/',
   },
   {
      NAME: 'boltund',
      url: 'https://pokeapi.co/api/v2/pokemon/836/',
   },
   {
      NAME: 'rolycoly',
      url: 'https://pokeapi.co/api/v2/pokemon/837/',
   },
   {
      NAME: 'carkol',
      url: 'https://pokeapi.co/api/v2/pokemon/838/',
   },
   {
      NAME: 'coalossal',
      url: 'https://pokeapi.co/api/v2/pokemon/839/',
   },
   {
      NAME: 'applin',
      url: 'https://pokeapi.co/api/v2/pokemon/840/',
   },
   {
      NAME: 'flapple',
      url: 'https://pokeapi.co/api/v2/pokemon/841/',
   },
   {
      NAME: 'appletun',
      url: 'https://pokeapi.co/api/v2/pokemon/842/',
   },
   {
      NAME: 'silicobra',
      url: 'https://pokeapi.co/api/v2/pokemon/843/',
   },
   {
      NAME: 'sandaconda',
      url: 'https://pokeapi.co/api/v2/pokemon/844/',
   },
   {
      NAME: 'cramorant',
      url: 'https://pokeapi.co/api/v2/pokemon/845/',
   },
   {
      NAME: 'arrokuda',
      url: 'https://pokeapi.co/api/v2/pokemon/846/',
   },
   {
      NAME: 'barraskewda',
      url: 'https://pokeapi.co/api/v2/pokemon/847/',
   },
   {
      NAME: 'toxel',
      url: 'https://pokeapi.co/api/v2/pokemon/848/',
   },
   {
      NAME: 'toxtricity-amped',
      url: 'https://pokeapi.co/api/v2/pokemon/849/',
   },
   {
      NAME: 'sizzlipede',
      url: 'https://pokeapi.co/api/v2/pokemon/850/',
   },
   {
      NAME: 'centiskorch',
      url: 'https://pokeapi.co/api/v2/pokemon/851/',
   },
   {
      NAME: 'clobbopus',
      url: 'https://pokeapi.co/api/v2/pokemon/852/',
   },
   {
      NAME: 'grapploct',
      url: 'https://pokeapi.co/api/v2/pokemon/853/',
   },
   {
      NAME: 'sinistea',
      url: 'https://pokeapi.co/api/v2/pokemon/854/',
   },
   {
      NAME: 'polteageist',
      url: 'https://pokeapi.co/api/v2/pokemon/855/',
   },
   {
      NAME: 'hatenna',
      url: 'https://pokeapi.co/api/v2/pokemon/856/',
   },
   {
      NAME: 'hattrem',
      url: 'https://pokeapi.co/api/v2/pokemon/857/',
   },
   {
      NAME: 'hatterene',
      url: 'https://pokeapi.co/api/v2/pokemon/858/',
   },
   {
      NAME: 'impidimp',
      url: 'https://pokeapi.co/api/v2/pokemon/859/',
   },
   {
      NAME: 'morgrem',
      url: 'https://pokeapi.co/api/v2/pokemon/860/',
   },
   {
      NAME: 'grimmsnarl',
      url: 'https://pokeapi.co/api/v2/pokemon/861/',
   },
   {
      NAME: 'obstagoon',
      url: 'https://pokeapi.co/api/v2/pokemon/862/',
   },
   {
      NAME: 'perrserker',
      url: 'https://pokeapi.co/api/v2/pokemon/863/',
   },
   {
      NAME: 'cursola',
      url: 'https://pokeapi.co/api/v2/pokemon/864/',
   },
   {
      NAME: 'sirfetchd',
      url: 'https://pokeapi.co/api/v2/pokemon/865/',
   },
   {
      NAME: 'mr-rime',
      url: 'https://pokeapi.co/api/v2/pokemon/866/',
   },
   {
      NAME: 'runerigus',
      url: 'https://pokeapi.co/api/v2/pokemon/867/',
   },
   {
      NAME: 'milcery',
      url: 'https://pokeapi.co/api/v2/pokemon/868/',
   },
   {
      NAME: 'alcremie',
      url: 'https://pokeapi.co/api/v2/pokemon/869/',
   },
   {
      NAME: 'falinks',
      url: 'https://pokeapi.co/api/v2/pokemon/870/',
   },
   {
      NAME: 'pincurchin',
      url: 'https://pokeapi.co/api/v2/pokemon/871/',
   },
   {
      NAME: 'snom',
      url: 'https://pokeapi.co/api/v2/pokemon/872/',
   },
   {
      NAME: 'frosmoth',
      url: 'https://pokeapi.co/api/v2/pokemon/873/',
   },
   {
      NAME: 'stonjourner',
      url: 'https://pokeapi.co/api/v2/pokemon/874/',
   },
   {
      NAME: 'eiscue-ice',
      url: 'https://pokeapi.co/api/v2/pokemon/875/',
   },
   {
      NAME: 'indeedee-male',
      url: 'https://pokeapi.co/api/v2/pokemon/876/',
   },
   {
      NAME: 'morpeko-full-belly',
      url: 'https://pokeapi.co/api/v2/pokemon/877/',
   },
   {
      NAME: 'cufant',
      url: 'https://pokeapi.co/api/v2/pokemon/878/',
   },
   {
      NAME: 'copperajah',
      url: 'https://pokeapi.co/api/v2/pokemon/879/',
   },
   {
      NAME: 'dracozolt',
      url: 'https://pokeapi.co/api/v2/pokemon/880/',
   },
   {
      NAME: 'arctozolt',
      url: 'https://pokeapi.co/api/v2/pokemon/881/',
   },
   {
      NAME: 'dracovish',
      url: 'https://pokeapi.co/api/v2/pokemon/882/',
   },
   {
      NAME: 'arctovish',
      url: 'https://pokeapi.co/api/v2/pokemon/883/',
   },
   {
      NAME: 'duraludon',
      url: 'https://pokeapi.co/api/v2/pokemon/884/',
   },
   {
      NAME: 'dreepy',
      url: 'https://pokeapi.co/api/v2/pokemon/885/',
   },
   {
      NAME: 'drakloak',
      url: 'https://pokeapi.co/api/v2/pokemon/886/',
   },
   {
      NAME: 'dragapult',
      url: 'https://pokeapi.co/api/v2/pokemon/887/',
   },
   {
      NAME: 'zacian',
      url: 'https://pokeapi.co/api/v2/pokemon/888/',
   },
   {
      NAME: 'zamazenta',
      url: 'https://pokeapi.co/api/v2/pokemon/889/',
   },
   {
      NAME: 'eternatus',
      url: 'https://pokeapi.co/api/v2/pokemon/890/',
   },
   {
      NAME: 'kubfu',
      url: 'https://pokeapi.co/api/v2/pokemon/891/',
   },
   {
      NAME: 'urshifu-single-strike',
      url: 'https://pokeapi.co/api/v2/pokemon/892/',
   },
   {
      NAME: 'zarude',
      url: 'https://pokeapi.co/api/v2/pokemon/893/',
   },
   {
      NAME: 'regieleki',
      url: 'https://pokeapi.co/api/v2/pokemon/894/',
   },
   {
      NAME: 'regidrago',
      url: 'https://pokeapi.co/api/v2/pokemon/895/',
   },
   {
      NAME: 'glastrier',
      url: 'https://pokeapi.co/api/v2/pokemon/896/',
   },
   {
      NAME: 'spectrier',
      url: 'https://pokeapi.co/api/v2/pokemon/897/',
   },
   {
      NAME: 'calyrex',
      url: 'https://pokeapi.co/api/v2/pokemon/898/',
   },
   {
      NAME: 'wyrdeer',
      url: 'https://pokeapi.co/api/v2/pokemon/899/',
   },
   {
      NAME: 'kleavor',
      url: 'https://pokeapi.co/api/v2/pokemon/900/',
   },
   {
      NAME: 'ursaluna',
      url: 'https://pokeapi.co/api/v2/pokemon/901/',
   },
   {
      NAME: 'basculegion-male',
      url: 'https://pokeapi.co/api/v2/pokemon/902/',
   },
   {
      NAME: 'sneasler',
      url: 'https://pokeapi.co/api/v2/pokemon/903/',
   },
   {
      NAME: 'overqwil',
      url: 'https://pokeapi.co/api/v2/pokemon/904/',
   },
   {
      NAME: 'enamorus-incarnate',
      url: 'https://pokeapi.co/api/v2/pokemon/905/',
   },
   {
      NAME: 'sprigatito',
      url: 'https://pokeapi.co/api/v2/pokemon/906/',
   },
   {
      NAME: 'floragato',
      url: 'https://pokeapi.co/api/v2/pokemon/907/',
   },
   {
      NAME: 'meowscarada',
      url: 'https://pokeapi.co/api/v2/pokemon/908/',
   },
   {
      NAME: 'fuecoco',
      url: 'https://pokeapi.co/api/v2/pokemon/909/',
   },
   {
      NAME: 'crocalor',
      url: 'https://pokeapi.co/api/v2/pokemon/910/',
   },
   {
      NAME: 'skeledirge',
      url: 'https://pokeapi.co/api/v2/pokemon/911/',
   },
   {
      NAME: 'quaxly',
      url: 'https://pokeapi.co/api/v2/pokemon/912/',
   },
   {
      NAME: 'quaxwell',
      url: 'https://pokeapi.co/api/v2/pokemon/913/',
   },
   {
      NAME: 'quaquaval',
      url: 'https://pokeapi.co/api/v2/pokemon/914/',
   },
   {
      NAME: 'lechonk',
      url: 'https://pokeapi.co/api/v2/pokemon/915/',
   },
   {
      NAME: 'oinkologne',
      url: 'https://pokeapi.co/api/v2/pokemon/916/',
   },
   {
      NAME: 'tarountula',
      url: 'https://pokeapi.co/api/v2/pokemon/917/',
   },
   {
      NAME: 'spidops',
      url: 'https://pokeapi.co/api/v2/pokemon/918/',
   },
   {
      NAME: 'nymble',
      url: 'https://pokeapi.co/api/v2/pokemon/919/',
   },
   {
      NAME: 'lokix',
      url: 'https://pokeapi.co/api/v2/pokemon/920/',
   },
   {
      NAME: 'pawmi',
      url: 'https://pokeapi.co/api/v2/pokemon/921/',
   },
   {
      NAME: 'pawmo',
      url: 'https://pokeapi.co/api/v2/pokemon/922/',
   },
   {
      NAME: 'pawmot',
      url: 'https://pokeapi.co/api/v2/pokemon/923/',
   },
   {
      NAME: 'tandemaus',
      url: 'https://pokeapi.co/api/v2/pokemon/924/',
   },
   {
      NAME: 'maushold',
      url: 'https://pokeapi.co/api/v2/pokemon/925/',
   },
   {
      NAME: 'fidough',
      url: 'https://pokeapi.co/api/v2/pokemon/926/',
   },
   {
      NAME: 'dachsbun',
      url: 'https://pokeapi.co/api/v2/pokemon/927/',
   },
   {
      NAME: 'smoliv',
      url: 'https://pokeapi.co/api/v2/pokemon/928/',
   },
   {
      NAME: 'dolliv',
      url: 'https://pokeapi.co/api/v2/pokemon/929/',
   },
   {
      NAME: 'arboliva',
      url: 'https://pokeapi.co/api/v2/pokemon/930/',
   },
   {
      NAME: 'squawkabilly',
      url: 'https://pokeapi.co/api/v2/pokemon/931/',
   },
   {
      NAME: 'nacli',
      url: 'https://pokeapi.co/api/v2/pokemon/932/',
   },
   {
      NAME: 'naclstack',
      url: 'https://pokeapi.co/api/v2/pokemon/933/',
   },
   {
      NAME: 'garganacl',
      url: 'https://pokeapi.co/api/v2/pokemon/934/',
   },
   {
      NAME: 'charcadet',
      url: 'https://pokeapi.co/api/v2/pokemon/935/',
   },
   {
      NAME: 'armarouge',
      url: 'https://pokeapi.co/api/v2/pokemon/936/',
   },
   {
      NAME: 'ceruledge',
      url: 'https://pokeapi.co/api/v2/pokemon/937/',
   },
   {
      NAME: 'tadbulb',
      url: 'https://pokeapi.co/api/v2/pokemon/938/',
   },
   {
      NAME: 'bellibolt',
      url: 'https://pokeapi.co/api/v2/pokemon/939/',
   },
   {
      NAME: 'wattrel',
      url: 'https://pokeapi.co/api/v2/pokemon/940/',
   },
   {
      NAME: 'kilowattrel',
      url: 'https://pokeapi.co/api/v2/pokemon/941/',
   },
   {
      NAME: 'maschiff',
      url: 'https://pokeapi.co/api/v2/pokemon/942/',
   },
   {
      NAME: 'mabosstiff',
      url: 'https://pokeapi.co/api/v2/pokemon/943/',
   },
   {
      NAME: 'shroodle',
      url: 'https://pokeapi.co/api/v2/pokemon/944/',
   },
   {
      NAME: 'grafaiai',
      url: 'https://pokeapi.co/api/v2/pokemon/945/',
   },
   {
      NAME: 'bramblin',
      url: 'https://pokeapi.co/api/v2/pokemon/946/',
   },
   {
      NAME: 'brambleghast',
      url: 'https://pokeapi.co/api/v2/pokemon/947/',
   },
   {
      NAME: 'toedscool',
      url: 'https://pokeapi.co/api/v2/pokemon/948/',
   },
   {
      NAME: 'toedscruel',
      url: 'https://pokeapi.co/api/v2/pokemon/949/',
   },
   {
      NAME: 'klawf',
      url: 'https://pokeapi.co/api/v2/pokemon/950/',
   },
   {
      NAME: 'capsakid',
      url: 'https://pokeapi.co/api/v2/pokemon/951/',
   },
   {
      NAME: 'scovillain',
      url: 'https://pokeapi.co/api/v2/pokemon/952/',
   },
   {
      NAME: 'rellor',
      url: 'https://pokeapi.co/api/v2/pokemon/953/',
   },
   {
      NAME: 'rabsca',
      url: 'https://pokeapi.co/api/v2/pokemon/954/',
   },
   {
      NAME: 'flittle',
      url: 'https://pokeapi.co/api/v2/pokemon/955/',
   },
   {
      NAME: 'espathra',
      url: 'https://pokeapi.co/api/v2/pokemon/956/',
   },
   {
      NAME: 'tinkatink',
      url: 'https://pokeapi.co/api/v2/pokemon/957/',
   },
   {
      NAME: 'tinkatuff',
      url: 'https://pokeapi.co/api/v2/pokemon/958/',
   },
   {
      NAME: 'tinkaton',
      url: 'https://pokeapi.co/api/v2/pokemon/959/',
   },
   {
      NAME: 'wiglett',
      url: 'https://pokeapi.co/api/v2/pokemon/960/',
   },
   {
      NAME: 'wugtrio',
      url: 'https://pokeapi.co/api/v2/pokemon/961/',
   },
   {
      NAME: 'bombirdier',
      url: 'https://pokeapi.co/api/v2/pokemon/962/',
   },
   {
      NAME: 'finizen',
      url: 'https://pokeapi.co/api/v2/pokemon/963/',
   },
   {
      NAME: 'palafin',
      url: 'https://pokeapi.co/api/v2/pokemon/964/',
   },
   {
      NAME: 'varoom',
      url: 'https://pokeapi.co/api/v2/pokemon/965/',
   },
   {
      NAME: 'revavroom',
      url: 'https://pokeapi.co/api/v2/pokemon/966/',
   },
   {
      NAME: 'cyclizar',
      url: 'https://pokeapi.co/api/v2/pokemon/967/',
   },
   {
      NAME: 'orthworm',
      url: 'https://pokeapi.co/api/v2/pokemon/968/',
   },
   {
      NAME: 'glimmet',
      url: 'https://pokeapi.co/api/v2/pokemon/969/',
   },
   {
      NAME: 'glimmora',
      url: 'https://pokeapi.co/api/v2/pokemon/970/',
   },
   {
      NAME: 'greavard',
      url: 'https://pokeapi.co/api/v2/pokemon/971/',
   },
   {
      NAME: 'houndstone',
      url: 'https://pokeapi.co/api/v2/pokemon/972/',
   },
   {
      NAME: 'flamigo',
      url: 'https://pokeapi.co/api/v2/pokemon/973/',
   },
   {
      NAME: 'cetoddle',
      url: 'https://pokeapi.co/api/v2/pokemon/974/',
   },
   {
      NAME: 'cetitan',
      url: 'https://pokeapi.co/api/v2/pokemon/975/',
   },
   {
      NAME: 'veluza',
      url: 'https://pokeapi.co/api/v2/pokemon/976/',
   },
   {
      NAME: 'dondozo',
      url: 'https://pokeapi.co/api/v2/pokemon/977/',
   },
   {
      NAME: 'tatsugiri',
      url: 'https://pokeapi.co/api/v2/pokemon/978/',
   },
   {
      NAME: 'annihilape',
      url: 'https://pokeapi.co/api/v2/pokemon/979/',
   },
   {
      NAME: 'clodsire',
      url: 'https://pokeapi.co/api/v2/pokemon/980/',
   },
   {
      NAME: 'farigiraf',
      url: 'https://pokeapi.co/api/v2/pokemon/981/',
   },
   {
      NAME: 'dudunsparce',
      url: 'https://pokeapi.co/api/v2/pokemon/982/',
   },
   {
      NAME: 'kingambit',
      url: 'https://pokeapi.co/api/v2/pokemon/983/',
   },
   {
      NAME: 'great-tusk',
      url: 'https://pokeapi.co/api/v2/pokemon/984/',
   },
   {
      NAME: 'scream-tail',
      url: 'https://pokeapi.co/api/v2/pokemon/985/',
   },
   {
      NAME: 'brute-bonnet',
      url: 'https://pokeapi.co/api/v2/pokemon/986/',
   },
   {
      NAME: 'flutter-mane',
      url: 'https://pokeapi.co/api/v2/pokemon/987/',
   },
   {
      NAME: 'slither-wing',
      url: 'https://pokeapi.co/api/v2/pokemon/988/',
   },
   {
      NAME: 'sandy-shocks',
      url: 'https://pokeapi.co/api/v2/pokemon/989/',
   },
   {
      NAME: 'iron-treads',
      url: 'https://pokeapi.co/api/v2/pokemon/990/',
   },
   {
      NAME: 'iron-bundle',
      url: 'https://pokeapi.co/api/v2/pokemon/991/',
   },
   {
      NAME: 'iron-hands',
      url: 'https://pokeapi.co/api/v2/pokemon/992/',
   },
   {
      NAME: 'iron-jugulis',
      url: 'https://pokeapi.co/api/v2/pokemon/993/',
   },
   {
      NAME: 'iron-moth',
      url: 'https://pokeapi.co/api/v2/pokemon/994/',
   },
   {
      NAME: 'iron-thorns',
      url: 'https://pokeapi.co/api/v2/pokemon/995/',
   },
   {
      NAME: 'frigibax',
      url: 'https://pokeapi.co/api/v2/pokemon/996/',
   },
   {
      NAME: 'arctibax',
      url: 'https://pokeapi.co/api/v2/pokemon/997/',
   },
   {
      NAME: 'baxcalibur',
      url: 'https://pokeapi.co/api/v2/pokemon/998/',
   },
   {
      NAME: 'gimmighoul',
      url: 'https://pokeapi.co/api/v2/pokemon/999/',
   },
   {
      NAME: 'gholdengo',
      url: 'https://pokeapi.co/api/v2/pokemon/1000/',
   },
   {
      NAME: 'wo-chien',
      url: 'https://pokeapi.co/api/v2/pokemon/1001/',
   },
   {
      NAME: 'chien-pao',
      url: 'https://pokeapi.co/api/v2/pokemon/1002/',
   },
   {
      NAME: 'ting-lu',
      url: 'https://pokeapi.co/api/v2/pokemon/1003/',
   },
   {
      NAME: 'chi-yu',
      url: 'https://pokeapi.co/api/v2/pokemon/1004/',
   },
   {
      NAME: 'roaring-moon',
      url: 'https://pokeapi.co/api/v2/pokemon/1005/',
   },
   {
      NAME: 'iron-valiant',
      url: 'https://pokeapi.co/api/v2/pokemon/1006/',
   },
   {
      NAME: 'koraidon',
      url: 'https://pokeapi.co/api/v2/pokemon/1007/',
   },
   {
      NAME: 'miraidon',
      url: 'https://pokeapi.co/api/v2/pokemon/1008/',
   },
   {
      NAME: 'walking-wake',
      url: 'https://pokeapi.co/api/v2/pokemon/1009/',
   },
   {
      NAME: 'iron-leaves',
      url: 'https://pokeapi.co/api/v2/pokemon/1010/',
   },
   {
      NAME: 'deoxys-attack',
      url: 'https://pokeapi.co/api/v2/pokemon/10001/',
   },
   {
      NAME: 'deoxys-defense',
      url: 'https://pokeapi.co/api/v2/pokemon/10002/',
   },
   {
      NAME: 'deoxys-speed',
      url: 'https://pokeapi.co/api/v2/pokemon/10003/',
   },
   {
      NAME: 'wormadam-sandy',
      url: 'https://pokeapi.co/api/v2/pokemon/10004/',
   },
   {
      NAME: 'wormadam-trash',
      url: 'https://pokeapi.co/api/v2/pokemon/10005/',
   },
   {
      NAME: 'shaymin-sky',
      url: 'https://pokeapi.co/api/v2/pokemon/10006/',
   },
   {
      NAME: 'giratina-origin',
      url: 'https://pokeapi.co/api/v2/pokemon/10007/',
   },
   {
      NAME: 'rotom-heat',
      url: 'https://pokeapi.co/api/v2/pokemon/10008/',
   },
   {
      NAME: 'rotom-wash',
      url: 'https://pokeapi.co/api/v2/pokemon/10009/',
   },
   {
      NAME: 'rotom-frost',
      url: 'https://pokeapi.co/api/v2/pokemon/10010/',
   },
   {
      NAME: 'rotom-fan',
      url: 'https://pokeapi.co/api/v2/pokemon/10011/',
   },
   {
      NAME: 'rotom-mow',
      url: 'https://pokeapi.co/api/v2/pokemon/10012/',
   },
   {
      NAME: 'castform-sunny',
      url: 'https://pokeapi.co/api/v2/pokemon/10013/',
   },
   {
      NAME: 'castform-rainy',
      url: 'https://pokeapi.co/api/v2/pokemon/10014/',
   },
   {
      NAME: 'castform-snowy',
      url: 'https://pokeapi.co/api/v2/pokemon/10015/',
   },
   {
      NAME: 'basculin-blue-striped',
      url: 'https://pokeapi.co/api/v2/pokemon/10016/',
   },
   {
      NAME: 'darmanitan-zen',
      url: 'https://pokeapi.co/api/v2/pokemon/10017/',
   },
   {
      NAME: 'meloetta-pirouette',
      url: 'https://pokeapi.co/api/v2/pokemon/10018/',
   },
   {
      NAME: 'tornadus-therian',
      url: 'https://pokeapi.co/api/v2/pokemon/10019/',
   },
   {
      NAME: 'thundurus-therian',
      url: 'https://pokeapi.co/api/v2/pokemon/10020/',
   },
   {
      NAME: 'landorus-therian',
      url: 'https://pokeapi.co/api/v2/pokemon/10021/',
   },
   {
      NAME: 'kyurem-black',
      url: 'https://pokeapi.co/api/v2/pokemon/10022/',
   },
   {
      NAME: 'kyurem-white',
      url: 'https://pokeapi.co/api/v2/pokemon/10023/',
   },
   {
      NAME: 'keldeo-resolute',
      url: 'https://pokeapi.co/api/v2/pokemon/10024/',
   },
   {
      NAME: 'meowstic-female',
      url: 'https://pokeapi.co/api/v2/pokemon/10025/',
   },
   {
      NAME: 'aegislash-blade',
      url: 'https://pokeapi.co/api/v2/pokemon/10026/',
   },
   {
      NAME: 'pumpkaboo-small',
      url: 'https://pokeapi.co/api/v2/pokemon/10027/',
   },
   {
      NAME: 'pumpkaboo-large',
      url: 'https://pokeapi.co/api/v2/pokemon/10028/',
   },
   {
      NAME: 'pumpkaboo-super',
      url: 'https://pokeapi.co/api/v2/pokemon/10029/',
   },
   {
      NAME: 'gourgeist-small',
      url: 'https://pokeapi.co/api/v2/pokemon/10030/',
   },
   {
      NAME: 'gourgeist-large',
      url: 'https://pokeapi.co/api/v2/pokemon/10031/',
   },
   {
      NAME: 'gourgeist-super',
      url: 'https://pokeapi.co/api/v2/pokemon/10032/',
   },
   {
      NAME: 'venusaur-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10033/',
   },
   {
      NAME: 'charizard-mega-x',
      url: 'https://pokeapi.co/api/v2/pokemon/10034/',
   },
   {
      NAME: 'charizard-mega-y',
      url: 'https://pokeapi.co/api/v2/pokemon/10035/',
   },
   {
      NAME: 'blastoise-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10036/',
   },
   {
      NAME: 'alakazam-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10037/',
   },
   {
      NAME: 'gengar-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10038/',
   },
   {
      NAME: 'kangaskhan-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10039/',
   },
   {
      NAME: 'pinsir-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10040/',
   },
   {
      NAME: 'gyarados-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10041/',
   },
   {
      NAME: 'aerodactyl-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10042/',
   },
   {
      NAME: 'mewtwo-mega-x',
      url: 'https://pokeapi.co/api/v2/pokemon/10043/',
   },
   {
      NAME: 'mewtwo-mega-y',
      url: 'https://pokeapi.co/api/v2/pokemon/10044/',
   },
   {
      NAME: 'ampharos-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10045/',
   },
   {
      NAME: 'scizor-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10046/',
   },
   {
      NAME: 'heracross-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10047/',
   },
   {
      NAME: 'houndoom-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10048/',
   },
   {
      NAME: 'tyranitar-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10049/',
   },
   {
      NAME: 'blaziken-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10050/',
   },
   {
      NAME: 'gardevoir-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10051/',
   },
   {
      NAME: 'mawile-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10052/',
   },
   {
      NAME: 'aggron-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10053/',
   },
   {
      NAME: 'medicham-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10054/',
   },
   {
      NAME: 'manectric-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10055/',
   },
   {
      NAME: 'banette-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10056/',
   },
   {
      NAME: 'absol-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10057/',
   },
   {
      NAME: 'garchomp-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10058/',
   },
   {
      NAME: 'lucario-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10059/',
   },
   {
      NAME: 'abomasnow-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10060/',
   },
   {
      NAME: 'floette-eternal',
      url: 'https://pokeapi.co/api/v2/pokemon/10061/',
   },
   {
      NAME: 'latias-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10062/',
   },
   {
      NAME: 'latios-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10063/',
   },
   {
      NAME: 'swampert-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10064/',
   },
   {
      NAME: 'sceptile-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10065/',
   },
   {
      NAME: 'sableye-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10066/',
   },
   {
      NAME: 'altaria-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10067/',
   },
   {
      NAME: 'gallade-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10068/',
   },
   {
      NAME: 'audino-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10069/',
   },
   {
      NAME: 'sharpedo-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10070/',
   },
   {
      NAME: 'slowbro-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10071/',
   },
   {
      NAME: 'steelix-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10072/',
   },
   {
      NAME: 'pidgeot-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10073/',
   },
   {
      NAME: 'glalie-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10074/',
   },
   {
      NAME: 'diancie-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10075/',
   },
   {
      NAME: 'metagross-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10076/',
   },
   {
      NAME: 'kyogre-primal',
      url: 'https://pokeapi.co/api/v2/pokemon/10077/',
   },
   {
      NAME: 'groudon-primal',
      url: 'https://pokeapi.co/api/v2/pokemon/10078/',
   },
   {
      NAME: 'rayquaza-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10079/',
   },
   {
      NAME: 'pikachu-rock-star',
      url: 'https://pokeapi.co/api/v2/pokemon/10080/',
   },
   {
      NAME: 'pikachu-belle',
      url: 'https://pokeapi.co/api/v2/pokemon/10081/',
   },
   {
      NAME: 'pikachu-pop-star',
      url: 'https://pokeapi.co/api/v2/pokemon/10082/',
   },
   {
      NAME: 'pikachu-phd',
      url: 'https://pokeapi.co/api/v2/pokemon/10083/',
   },
   {
      NAME: 'pikachu-libre',
      url: 'https://pokeapi.co/api/v2/pokemon/10084/',
   },
   {
      NAME: 'pikachu-cosplay',
      url: 'https://pokeapi.co/api/v2/pokemon/10085/',
   },
   {
      NAME: 'hoopa-unbound',
      url: 'https://pokeapi.co/api/v2/pokemon/10086/',
   },
   {
      NAME: 'camerupt-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10087/',
   },
   {
      NAME: 'lopunny-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10088/',
   },
   {
      NAME: 'salamence-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10089/',
   },
   {
      NAME: 'beedrill-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10090/',
   },
   {
      NAME: 'rattata-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10091/',
   },
   {
      NAME: 'raticate-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10092/',
   },
   {
      NAME: 'raticate-totem-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10093/',
   },
   {
      NAME: 'pikachu-original-cap',
      url: 'https://pokeapi.co/api/v2/pokemon/10094/',
   },
   {
      NAME: 'pikachu-hoenn-cap',
      url: 'https://pokeapi.co/api/v2/pokemon/10095/',
   },
   {
      NAME: 'pikachu-sinnoh-cap',
      url: 'https://pokeapi.co/api/v2/pokemon/10096/',
   },
   {
      NAME: 'pikachu-unova-cap',
      url: 'https://pokeapi.co/api/v2/pokemon/10097/',
   },
   {
      NAME: 'pikachu-kalos-cap',
      url: 'https://pokeapi.co/api/v2/pokemon/10098/',
   },
   {
      NAME: 'pikachu-alola-cap',
      url: 'https://pokeapi.co/api/v2/pokemon/10099/',
   },
   {
      NAME: 'raichu-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10100/',
   },
   {
      NAME: 'sandshrew-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10101/',
   },
   {
      NAME: 'sandslash-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10102/',
   },
   {
      NAME: 'vulpix-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10103/',
   },
   {
      NAME: 'ninetales-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10104/',
   },
   {
      NAME: 'diglett-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10105/',
   },
   {
      NAME: 'dugtrio-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10106/',
   },
   {
      NAME: 'meowth-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10107/',
   },
   {
      NAME: 'persian-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10108/',
   },
   {
      NAME: 'geodude-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10109/',
   },
   {
      NAME: 'graveler-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10110/',
   },
   {
      NAME: 'golem-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10111/',
   },
   {
      NAME: 'grimer-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10112/',
   },
   {
      NAME: 'muk-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10113/',
   },
   {
      NAME: 'exeggutor-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10114/',
   },
   {
      NAME: 'marowak-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10115/',
   },
   {
      NAME: 'greninja-battle-bond',
      url: 'https://pokeapi.co/api/v2/pokemon/10116/',
   },
   {
      NAME: 'greninja-ash',
      url: 'https://pokeapi.co/api/v2/pokemon/10117/',
   },
   {
      NAME: 'zygarde-10-power-construct',
      url: 'https://pokeapi.co/api/v2/pokemon/10118/',
   },
   {
      NAME: 'zygarde-50-power-construct',
      url: 'https://pokeapi.co/api/v2/pokemon/10119/',
   },
   {
      NAME: 'zygarde-complete',
      url: 'https://pokeapi.co/api/v2/pokemon/10120/',
   },
   {
      NAME: 'gumshoos-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10121/',
   },
   {
      NAME: 'vikavolt-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10122/',
   },
   {
      NAME: 'oricorio-pom-pom',
      url: 'https://pokeapi.co/api/v2/pokemon/10123/',
   },
   {
      NAME: 'oricorio-pau',
      url: 'https://pokeapi.co/api/v2/pokemon/10124/',
   },
   {
      NAME: 'oricorio-sensu',
      url: 'https://pokeapi.co/api/v2/pokemon/10125/',
   },
   {
      NAME: 'lycanroc-midnight',
      url: 'https://pokeapi.co/api/v2/pokemon/10126/',
   },
   {
      NAME: 'wishiwashi-school',
      url: 'https://pokeapi.co/api/v2/pokemon/10127/',
   },
   {
      NAME: 'lurantis-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10128/',
   },
   {
      NAME: 'salazzle-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10129/',
   },
   {
      NAME: 'minior-orange-meteor',
      url: 'https://pokeapi.co/api/v2/pokemon/10130/',
   },
   {
      NAME: 'minior-yellow-meteor',
      url: 'https://pokeapi.co/api/v2/pokemon/10131/',
   },
   {
      NAME: 'minior-green-meteor',
      url: 'https://pokeapi.co/api/v2/pokemon/10132/',
   },
   {
      NAME: 'minior-blue-meteor',
      url: 'https://pokeapi.co/api/v2/pokemon/10133/',
   },
   {
      NAME: 'minior-indigo-meteor',
      url: 'https://pokeapi.co/api/v2/pokemon/10134/',
   },
   {
      NAME: 'minior-violet-meteor',
      url: 'https://pokeapi.co/api/v2/pokemon/10135/',
   },
   {
      NAME: 'minior-red',
      url: 'https://pokeapi.co/api/v2/pokemon/10136/',
   },
   {
      NAME: 'minior-orange',
      url: 'https://pokeapi.co/api/v2/pokemon/10137/',
   },
   {
      NAME: 'minior-yellow',
      url: 'https://pokeapi.co/api/v2/pokemon/10138/',
   },
   {
      NAME: 'minior-green',
      url: 'https://pokeapi.co/api/v2/pokemon/10139/',
   },
   {
      NAME: 'minior-blue',
      url: 'https://pokeapi.co/api/v2/pokemon/10140/',
   },
   {
      NAME: 'minior-indigo',
      url: 'https://pokeapi.co/api/v2/pokemon/10141/',
   },
   {
      NAME: 'minior-violet',
      url: 'https://pokeapi.co/api/v2/pokemon/10142/',
   },
   {
      NAME: 'mimikyu-busted',
      url: 'https://pokeapi.co/api/v2/pokemon/10143/',
   },
   {
      NAME: 'mimikyu-totem-disguised',
      url: 'https://pokeapi.co/api/v2/pokemon/10144/',
   },
   {
      NAME: 'mimikyu-totem-busted',
      url: 'https://pokeapi.co/api/v2/pokemon/10145/',
   },
   {
      NAME: 'kommo-o-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10146/',
   },
   {
      NAME: 'magearna-original',
      url: 'https://pokeapi.co/api/v2/pokemon/10147/',
   },
   {
      NAME: 'pikachu-partner-cap',
      url: 'https://pokeapi.co/api/v2/pokemon/10148/',
   },
   {
      NAME: 'marowak-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10149/',
   },
   {
      NAME: 'ribombee-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10150/',
   },
   {
      NAME: 'rockruff-own-tempo',
      url: 'https://pokeapi.co/api/v2/pokemon/10151/',
   },
   {
      NAME: 'lycanroc-dusk',
      url: 'https://pokeapi.co/api/v2/pokemon/10152/',
   },
   {
      NAME: 'araquanid-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10153/',
   },
   {
      NAME: 'togedemaru-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10154/',
   },
   {
      NAME: 'necrozma-dusk',
      url: 'https://pokeapi.co/api/v2/pokemon/10155/',
   },
   {
      NAME: 'necrozma-dawn',
      url: 'https://pokeapi.co/api/v2/pokemon/10156/',
   },
   {
      NAME: 'necrozma-ultra',
      url: 'https://pokeapi.co/api/v2/pokemon/10157/',
   },
   {
      NAME: 'pikachu-starter',
      url: 'https://pokeapi.co/api/v2/pokemon/10158/',
   },
   {
      NAME: 'eevee-starter',
      url: 'https://pokeapi.co/api/v2/pokemon/10159/',
   },
   {
      NAME: 'pikachu-world-cap',
      url: 'https://pokeapi.co/api/v2/pokemon/10160/',
   },
   {
      NAME: 'meowth-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10161/',
   },
   {
      NAME: 'ponyta-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10162/',
   },
   {
      NAME: 'rapidash-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10163/',
   },
   {
      NAME: 'slowpoke-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10164/',
   },
   {
      NAME: 'slowbro-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10165/',
   },
   {
      NAME: 'farfetchd-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10166/',
   },
   {
      NAME: 'weezing-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10167/',
   },
   {
      NAME: 'mr-mime-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10168/',
   },
   {
      NAME: 'articuno-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10169/',
   },
   {
      NAME: 'zapdos-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10170/',
   },
   {
      NAME: 'moltres-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10171/',
   },
   {
      NAME: 'slowking-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10172/',
   },
   {
      NAME: 'corsola-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10173/',
   },
   {
      NAME: 'zigzagoon-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10174/',
   },
   {
      NAME: 'linoone-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10175/',
   },
   {
      NAME: 'darumaka-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10176/',
   },
   {
      NAME: 'darmanitan-galar-standard',
      url: 'https://pokeapi.co/api/v2/pokemon/10177/',
   },
   {
      NAME: 'darmanitan-galar-zen',
      url: 'https://pokeapi.co/api/v2/pokemon/10178/',
   },
   {
      NAME: 'yamask-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10179/',
   },
   {
      NAME: 'stunfisk-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10180/',
   },
   {
      NAME: 'zygarde-10',
      url: 'https://pokeapi.co/api/v2/pokemon/10181/',
   },
   {
      NAME: 'cramorant-gulping',
      url: 'https://pokeapi.co/api/v2/pokemon/10182/',
   },
   {
      NAME: 'cramorant-gorging',
      url: 'https://pokeapi.co/api/v2/pokemon/10183/',
   },
   {
      NAME: 'toxtricity-low-key',
      url: 'https://pokeapi.co/api/v2/pokemon/10184/',
   },
   {
      NAME: 'eiscue-noice',
      url: 'https://pokeapi.co/api/v2/pokemon/10185/',
   },
   {
      NAME: 'indeedee-female',
      url: 'https://pokeapi.co/api/v2/pokemon/10186/',
   },
   {
      NAME: 'morpeko-hangry',
      url: 'https://pokeapi.co/api/v2/pokemon/10187/',
   },
   {
      NAME: 'zacian-crowned',
      url: 'https://pokeapi.co/api/v2/pokemon/10188/',
   },
   {
      NAME: 'zamazenta-crowned',
      url: 'https://pokeapi.co/api/v2/pokemon/10189/',
   },
   {
      NAME: 'eternatus-eternamax',
      url: 'https://pokeapi.co/api/v2/pokemon/10190/',
   },
   {
      NAME: 'urshifu-rapid-strike',
      url: 'https://pokeapi.co/api/v2/pokemon/10191/',
   },
   {
      NAME: 'zarude-dada',
      url: 'https://pokeapi.co/api/v2/pokemon/10192/',
   },
   {
      NAME: 'calyrex-ice',
      url: 'https://pokeapi.co/api/v2/pokemon/10193/',
   },
   {
      NAME: 'calyrex-shadow',
      url: 'https://pokeapi.co/api/v2/pokemon/10194/',
   },
   {
      NAME: 'venusaur-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10195/',
   },
   {
      NAME: 'charizard-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10196/',
   },
   {
      NAME: 'blastoise-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10197/',
   },
   {
      NAME: 'butterfree-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10198/',
   },
   {
      NAME: 'pikachu-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10199/',
   },
   {
      NAME: 'meowth-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10200/',
   },
   {
      NAME: 'machamp-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10201/',
   },
   {
      NAME: 'gengar-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10202/',
   },
   {
      NAME: 'kingler-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10203/',
   },
   {
      NAME: 'lapras-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10204/',
   },
   {
      NAME: 'eevee-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10205/',
   },
   {
      NAME: 'snorlax-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10206/',
   },
   {
      NAME: 'garbodor-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10207/',
   },
   {
      NAME: 'melmetal-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10208/',
   },
   {
      NAME: 'rillaboom-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10209/',
   },
   {
      NAME: 'cinderace-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10210/',
   },
   {
      NAME: 'inteleon-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10211/',
   },
   {
      NAME: 'corviknight-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10212/',
   },
   {
      NAME: 'orbeetle-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10213/',
   },
   {
      NAME: 'drednaw-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10214/',
   },
   {
      NAME: 'coalossal-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10215/',
   },
   {
      NAME: 'flapple-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10216/',
   },
   {
      NAME: 'appletun-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10217/',
   },
   {
      NAME: 'sandaconda-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10218/',
   },
   {
      NAME: 'toxtricity-amped-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10219/',
   },
   {
      NAME: 'centiskorch-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10220/',
   },
   {
      NAME: 'hatterene-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10221/',
   },
   {
      NAME: 'grimmsnarl-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10222/',
   },
   {
      NAME: 'alcremie-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10223/',
   },
   {
      NAME: 'copperajah-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10224/',
   },
   {
      NAME: 'duraludon-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10225/',
   },
   {
      NAME: 'urshifu-single-strike-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10226/',
   },
   {
      NAME: 'urshifu-rapid-strike-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10227/',
   },
   {
      NAME: 'toxtricity-low-key-gmax',
      url: 'https://pokeapi.co/api/v2/pokemon/10228/',
   },
   {
      NAME: 'growlithe-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10229/',
   },
   {
      NAME: 'arcanine-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10230/',
   },
   {
      NAME: 'voltorb-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10231/',
   },
   {
      NAME: 'electrode-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10232/',
   },
   {
      NAME: 'typhlosion-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10233/',
   },
   {
      NAME: 'qwilfish-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10234/',
   },
   {
      NAME: 'sneasel-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10235/',
   },
   {
      NAME: 'samurott-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10236/',
   },
   {
      NAME: 'lilligant-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10237/',
   },
   {
      NAME: 'zorua-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10238/',
   },
   {
      NAME: 'zoroark-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10239/',
   },
   {
      NAME: 'braviary-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10240/',
   },
   {
      NAME: 'sliggoo-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10241/',
   },
   {
      NAME: 'goodra-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10242/',
   },
   {
      NAME: 'avalugg-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10243/',
   },
   {
      NAME: 'decidueye-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10244/',
   },
   {
      NAME: 'dialga-origin',
      url: 'https://pokeapi.co/api/v2/pokemon/10245/',
   },
   {
      NAME: 'palkia-origin',
      url: 'https://pokeapi.co/api/v2/pokemon/10246/',
   },
   {
      NAME: 'basculin-white-striped',
      url: 'https://pokeapi.co/api/v2/pokemon/10247/',
   },
   {
      NAME: 'basculegion-female',
      url: 'https://pokeapi.co/api/v2/pokemon/10248/',
   },
   {
      NAME: 'enamorus-therian',
      url: 'https://pokeapi.co/api/v2/pokemon/10249/',
   },
   {
      NAME: 'tauros-paldea-combat-breed',
      url: 'https://pokeapi.co/api/v2/pokemon/10250/',
   },
   {
      NAME: 'tauros-paldea-blaze-breed',
      url: 'https://pokeapi.co/api/v2/pokemon/10251/',
   },
   {
      NAME: 'tauros-paldea-aqua-breed',
      url: 'https://pokeapi.co/api/v2/pokemon/10252/',
   },
   {
      NAME: 'wooper-paldea',
      url: 'https://pokeapi.co/api/v2/pokemon/10253/',
   },
   {
      NAME: 'oinkologne-female',
      url: 'https://pokeapi.co/api/v2/pokemon/10254/',
   },
   {
      NAME: 'dudunsparce-three-segment',
      url: 'https://pokeapi.co/api/v2/pokemon/10255/',
   },
   {
      NAME: 'palafin-hero',
      url: 'https://pokeapi.co/api/v2/pokemon/10256/',
   },
   {
      NAME: 'maushold-family-of-three',
      url: 'https://pokeapi.co/api/v2/pokemon/10257/',
   },
   {
      NAME: 'tatsugiri-droopy',
      url: 'https://pokeapi.co/api/v2/pokemon/10258/',
   },
   {
      NAME: 'tatsugiri-stretchy',
      url: 'https://pokeapi.co/api/v2/pokemon/10259/',
   },
   {
      NAME: 'squawkabilly-blue-plumage',
      url: 'https://pokeapi.co/api/v2/pokemon/10260/',
   },
   {
      NAME: 'squawkabilly-yellow-plumage',
      url: 'https://pokeapi.co/api/v2/pokemon/10261/',
   },
   {
      NAME: 'squawkabilly-white-plumage',
      url: 'https://pokeapi.co/api/v2/pokemon/10262/',
   },
   {
      NAME: 'gimmighoul-roaming',
      url: 'https://pokeapi.co/api/v2/pokemon/10263/',
   },
   {
      NAME: 'koraidon-limited-build',
      url: 'https://pokeapi.co/api/v2/pokemon/10264/',
   },
   {
      NAME: 'koraidon-sprinting-build',
      url: 'https://pokeapi.co/api/v2/pokemon/10265/',
   },
   {
      NAME: 'koraidon-swimming-build',
      url: 'https://pokeapi.co/api/v2/pokemon/10266/',
   },
   {
      NAME: 'koraidon-gliding-build',
      url: 'https://pokeapi.co/api/v2/pokemon/10267/',
   },
   {
      NAME: 'miraidon-low-power-mode',
      url: 'https://pokeapi.co/api/v2/pokemon/10268/',
   },
   {
      NAME: 'miraidon-drive-mode',
      url: 'https://pokeapi.co/api/v2/pokemon/10269/',
   },
   {
      NAME: 'miraidon-aquatic-mode',
      url: 'https://pokeapi.co/api/v2/pokemon/10270/',
   },
   {
      NAME: 'miraidon-glide-mode',
      url: 'https://pokeapi.co/api/v2/pokemon/10271/',
   },
]

// GET SELECTORS
const list = document.querySelector('.list')
const keyUp = document.querySelector('#txt-search')

// RENDER FIRST POKEMON
const documentReadyrenderListPokemons = () => {
   let boxs = ``

   pokemons.map((pokemon) => {
      const box = `<div class="box">
                  <p id="NAME-fruit">${pokemon.NAME}</p>
               </div>`
      boxs += box
   })

   list.insertAdjacentHTML('afterbegin', boxs)
}
documentReadyrenderListPokemons()

// LOGIC SEARCHING
keyUp.addEventListener('keyup', (event) => {
   console.log('running logic search')

   const value = event.target.value.toLowerCase()

   list.innerHTML = ''

   if (event.target.value == '') documentReadyrenderListPokemons()

   let boxs = ''

   pokemons.map((pokemon) => {
      if (pokemon.NAME.toLowerCase().includes(value)) {
         const box = `<div class="box">
                        <p id="NAME-fruit">${pokemon.NAME}</p>
                     </div>`
         boxs += box
      }
   })

   list.insertAdjacentHTML('afterbegin', boxs)
})
