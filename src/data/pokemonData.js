const pokemonData = [
  {
    id: 1,
    name: "Bulbizarre",
    type: ["Plante", "Poison"],
    description: "Un Pokémon avec une graine sur le dos qui grandit au fil du temps.",
    evolution: "Herbizarre",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    id: 2,
    name: "Herbizarre",
    type: ["Plante", "Poison"],
    description: "Le stade intermédiaire de Bulbizarre, avec une plante qui pousse sur son dos.",
    evolution: "Florizarre",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    id: 3,
    name: "Florizarre",
    type: ["Plante", "Poison"],
    description: "Un Pokémon adulte avec une fleur géante sur son dos.",
    evolution: "Aucune",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    id: 4,
    name: "Salamèche",
    type: ["Feu"],
    description: "Un Pokémon dont la flamme sur la queue indique sa santé.",
    evolution: "Reptincel",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    id: 5,
    name: "Reptincel",
    type: ["Feu"],
    description: "Un Pokémon en feu qui prépare sa transformation en Dracaufeu.",
    evolution: "Dracaufeu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    id: 6,
    name: "Dracaufeu",
    type: ["Feu", "Vol"],
    description: "Un Pokémon dragon cracheur de feu, craint par ses ennemis.",
    evolution: "Aucune",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    id: 7,
    name: "Carapuce",
    type: ["Eau"],
    description: "Un Pokémon de type eau avec une coquille dure sur son dos.",
    evolution: "Carabaffe",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    id: 8,
    name: "Carabaffe",
    type: ["Eau"],
    description: "Le stade intermédiaire de Carapuce, prêt à évoluer en Tortank.",
    evolution: "Tortank",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    id: 9,
    name: "Tortank",
    type: ["Eau"],
    description: "Un Pokémon avec une grande carapace et un puissant jet d'eau.",
    evolution: "Aucune",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
    id: 10,
    name: "Chenipan",
    type: ["Insecte"],
    description: "Un Pokémon très faible, qui évoluera en Chrysacier.",
    evolution: "Chrysacier",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },
  {
    id: 11,
    name: "Chrysacier",
    type: ["Insecte"],
    description: "Le stade intermédiaire de Chenipan avant de devenir Papilusion.",
    evolution: "Papilusion",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  },
  {
    id: 12,
    name: "Papilusion",
    type: ["Insecte", "Vol"],
    description: "Un Pokémon papillon coloré, avec de magnifiques ailes.",
    evolution: "Aucune",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },
    {
      id: 13,
      name: "Aspicot",
      type: ["Insecte", "Poison"],
      description: "Un petit Pokémon venimeux, il évolue en Coconfort.",
      evolution: "Coconfort",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    {
      id: 14,
      name: "Coconfort",
      type: ["Insecte", "Poison"],
      description: "Un Pokémon enroulé dans un cocon, il évoluera en Dardargnan.",
      evolution: "Dardargnan",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
    },
    {
      id: 15,
      name: "Dardargnan",
      type: ["Insecte", "Poison"],
      description: "Un Pokémon avec des dards pointus et des ailes puissantes.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
      id: 16,
      name: "Roucool",
      type: ["Normal", "Vol"],
      description: "Un petit oiseau qui peut s'envoler à grande vitesse.",
      evolution: "Roucoups",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    {
      id: 17,
      name: "Roucoups",
      type: ["Normal", "Vol"],
      description: "Un oiseau plus grand, avec une envergure d'ailes impressionnante.",
      evolution: "Roucarnage",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
    },
    {
      id: 18,
      name: "Roucarnage",
      type: ["Normal", "Vol"],
      description: "Un rapace redoutable et agressif, maître du ciel.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
    },
    {
      id: 19,
      name: "Rattata",
      type: ["Normal"],
      description: "Un petit rongeur rapide et agile.",
      evolution: "Rattatac",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
      id: 20,
      name: "Rattatac",
      type: ["Normal"],
      description: "Un rongeur plus fort et plus rapide, avec une agressivité accrue.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
    },
    {
      id: 21,
      name: "Piafabec",
      type: ["Normal", "Vol"],
      description: "Un petit oiseau qui utilise son bec pointu pour attaquer.",
      evolution: "Rapasdepic",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
    },
    {
      id: 22,
      name: "Rapasdepic",
      type: ["Normal", "Vol"],
      description: "Un oiseau aux plumes acérées, capable de couper tout sur son passage.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
    },
    {
      id: 23,
      name: "Abo",
      type: ["Poison"],
      description: "Un serpent venimeux et dangereux, très agile.",
      evolution: "Arbok",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
    },
    {
      id: 24,
      name: "Arbok",
      type: ["Poison"],
      description: "Un serpent géant capable d'attaque redoutable grâce à son venin.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    },
    {
      id: 25,
      name: "Pikachu",
      type: ["Électrique"],
      description: "Un Pokémon mignon et populaire qui génère de l'électricité.",
      evolution: "Raichu",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
      id: 26,
      name: "Raichu",
      type: ["Électrique"],
      description: "Un Pokémon rapide et puissant, générant des décharges électriques.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
    },
    {
      id: 27,
      name: "Sabelette",
      type: ["Sol"],
      description: "Un petit Pokémon fouisseur, toujours à la recherche de nourriture.",
      evolution: "Sablaireau",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
    },
    {
      id: 28,
      name: "Sablaireau",
      type: ["Sol"],
      description: "Un Pokémon puissant qui utilise ses griffes pour creuser sous terre.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
    },
    {
      id: 29,
      name: "Nidoran♀",
      type: ["Poison"],
      description: "Un Pokémon de petite taille avec des épines sur son dos.",
      evolution: "Nidorina",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
    },
    {
      id: 30,
      name: "Nidorina",
      type: ["Poison"],
      description: "Une évolution plus forte de Nidoran♀, avec des attaques plus puissantes.",
      evolution: "Nidoqueen",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
    },
    {
      id: 31,
      name: "Nidoqueen",
      type: ["Poison", "Sol"],
      description: "Un Pokémon robuste, avec des attaques puissantes et une grande défense.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
    },
    {
      id: 32,
      name: "Nidoran♂",
      type: ["Poison"],
      description: "Un Pokémon agressif avec des épines pointues.",
      evolution: "Nidorino",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
    },
    {
      id: 33,
      name: "Nidorino",
      type: ["Poison"],
      description: "Un Pokémon plus grand et plus puissant, prêt à évoluer en Nidoking.",
      evolution: "Nidoking",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
    },
    {
      id: 34,
      name: "Nidoking",
      type: ["Poison", "Sol"],
      description: "Un Pokémon monstrueux avec une force redoutable et une grande défense.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
    },
    {
      id: 35,
      name: "Mélofée",
      type: ["Fée"],
      description: "Un Pokémon doux et joyeux, connu pour sa capacité à chanter.",
      evolution: "Mélodelfe",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
    },
    {
      id: 36,
      name: "Mélodelfe",
      type: ["Fée"],
      description: "Un Pokémon élégant et magique, maîtrisant la magie des étoiles.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
    },
    {
      id: 37,
      name: "Goupix",
      type: ["Feu"],
      description: "Un petit Pokémon à la fourrure rousse, capable de créer des flammes.",
      evolution: "Feunard",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
    },
    {
      id: 38,
      name: "Feunard",
      type: ["Feu"],
      description: "Un Pokémon à neuf queues, capable de contrôler des flammes puissantes.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
    },
    {
      id: 39,
      name: "Rondoudou",
      type: ["Fée", "Normal"],
      description: "Un Pokémon rond qui chante pour endormir ses adversaires.",
      evolution: "Grodoudou",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    {
      id: 40,
      name: "Grodoudou",
      type: ["Fée", "Normal"],
      description: "Un Pokémon avec une voix puissante qui peut endormir tout un stade.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
    },
    {
      id: 41,
      name: "Nosferapti",
      type: ["Poison", "Vol"],
      description: "Un petit vampire qui se nourrit de sang et vit dans l'obscurité.",
      evolution: "Nosferalto",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
    },
    {
      id: 42,
      name: "Nosferalto",
      type: ["Poison", "Vol"],
      description: "Un vampire puissant qui peut voler et utiliser des attaques de poison.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
    },
    {
      id: 43,
      name: "Mystherbe",
      type: ["Plante", "Poison"],
      description: "Un Pokémon qui vit dans les forêts et utilise des spores toxiques.",
      evolution: "Ortide",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
    },
    {
      id: 44,
      name: "Ortide",
      type: ["Plante", "Poison"],
      description: "Un Pokémon qui utilise son odeur empoisonnée pour repousser ses ennemis.",
      evolution: "Rafflésia",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
    },
    {
      id: 45,
      name: "Rafflésia",
      type: ["Plante", "Poison"],
      description: "Un Pokémon avec une fleur géante sur son dos, capable de libérer des spores toxiques.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
    },
    {
      id: 46,
      name: "Paras",
      type: ["Insecte", "Plante"],
      description: "Un petit Pokémon avec des champignons sur son dos.",
      evolution: "Parasect",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
    },
    {
      id: 47,
      name: "Parasect",
      type: ["Insecte", "Plante"],
      description: "Un Pokémon avec des champignons géants, capable de libérer des spores toxiques.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
    },
    {
      id: 48,
      name: "Mimitoss",
      type: ["Insecte", "Spectre"],
      description: "Un Pokémon insaisissable qui se cache dans l'ombre.",
      evolution: "Aéromite",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
    },
    {
      id: 49,
      name: "Aéromite",
      type: ["Insecte", "Spectre"],
      description: "Un Pokémon aux pouvoirs invisibles, très difficile à attraper.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
    },
    {
      id: 50,
      name: "Taupiqueur",
      type: ["Sol"],
      description: "Un Pokémon fouisseur avec des griffes puissantes pour creuser sous terre.",
      evolution: "Triopikeur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
    },
    {
      id: 51,
      name: "Triopikeur",
      type: ["Sol"],
      description: "Un Pokémon qui utilise ses trois griffes pour creuser à une vitesse incroyable.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
    },
    {
      id: 52,
      name: "Miaouss",
      type: ["Normal"],
      description: "Un Pokémon malicieux qui aime voler des objets.",
      evolution: "Persian",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
    },
    {
      id: 53,
      name: "Persian",
      type: ["Normal"],
      description: "Un Pokémon élégant et rapide, souvent associé aux riches.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
    },
    {
      id: 54,
      name: "Psykokwak",
      type: ["Eau"],
      description: "Un Pokémon constamment en état de confusion.",
      evolution: "Akwakwak",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
    },
    {
      id: 55,
      name: "Akwakwak",
      type: ["Eau"],
      description: "Un Pokémon calme qui utilise sa puissance psychique pour attaquer.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
    },
    {
      id: 56,
      name: "Férosinge",
      type: ["Combat"],
      description: "Un Pokémon énergique qui adore se battre.",
      evolution: "Colossinge",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
    },
    {
      id: 57,
      name: "Colossinge",
      type: ["Combat"],
      description: "Un Pokémon fort et robuste, expert en arts martiaux.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
    },
    {
      id: 58,
      name: "Caninos",
      type: ["Feu"],
      description: "Un petit Pokémon semblable à un chien, capable de cracher des flammes.",
      evolution: "Arcanin",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
    },
    {
      id: 59,
      name: "Arcanin",
      type: ["Feu"],
      description: "Un majestueux Pokémon canin, réputé pour sa grande vitesse.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
    },
    {
      id: 60,
      name: "Ptitard",
      type: ["Eau"],
      description: "Un petit Pokémon ressemblant à un têtard, toujours en train de nager.",
      evolution: "Têtarte",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
    },
    {
      id: 61,
      name: "Têtarte",
      type: ["Eau"],
      description: "Un têtard qui commence à se développer, prêt à se transformer en Tartard.",
      evolution: "Tartard",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
    },
    {
      id: 62,
      name: "Tartard",
      type: ["Eau"],
      description: "Un Pokémon imposant, capable d'utiliser des attaques aquatiques puissantes.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
    },
    {
      id: 63,
      name: "Abra",
      type: ["Psy"],
      description: "Un Pokémon mystérieux qui utilise ses pouvoirs psychiques pour téléporter.",
      evolution: "Kadabra",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
    },
    {
      id: 64,
      name: "Kadabra",
      type: ["Psy"],
      description: "Un Pokémon psychique très intelligent, capable de manipuler la matière.",
      evolution: "Alakazam",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
    },
    {
      id: 65,
      name: "Alakazam",
      type: ["Psy"],
      description: "Un Pokémon ultra-intelligent, capable de télépathie et de manipulation mentale.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    },
    {
      id: 66,
      name: "Machoc",
      type: ["Combat"],
      description: "Un Pokémon robuste qui passe son temps à faire des exercices physiques.",
      evolution: "Machopeur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
    },
    {
      id: 67,
      name: "Machopeur",
      type: ["Combat"],
      description: "Un Pokémon fort et déterminé, qui vise à devenir le plus puissant.",
      evolution: "Mackogneur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
    },
    {
      id: 68,
      name: "Mackogneur",
      type: ["Combat"],
      description: "Un Pokémon extrêmement puissant et redouté dans les combats.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    },
    {
      id: 69,
      name: "Chétiflor",
      type: ["Plante"],
      description: "Un Pokémon fragile qui utilise ses pouvoirs pour se défendre.",
      evolution: "Boustiflor",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
    },
    {
      id: 70,
      name: "Boustiflor",
      type: ["Plante", "Poison"],
      description: "Un Pokémon qui utilise des spores toxiques pour se défendre.",
      evolution: "Empiflor",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
    },
    {
      id: 71,
      name: "Empiflor",
      type: ["Plante", "Poison"],
      description: "Un Pokémon hautement toxique, capable de projeter des spores dans l'air.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
    },
    {
      id: 72,
      name: "Tentacool",
      type: ["Eau", "Poison"],
      description: "Un Pokémon médusé avec des tentacules venimeux.",
      evolution: "Tentacruel",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
    },
    {
      id: 73,
      name: "Tentacruel",
      type: ["Eau", "Poison"],
      description: "Un Pokémon géant, redouté pour ses tentacules capables de paralyser.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
    },
    {
      id: 74,
      name: "Racaillou",
      type: ["Roche", "Sol"],
      description: "Un Pokémon rock qui passe son temps à se rouler sur le sol.",
      evolution: "Gravalanch",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
    },
    {
      id: 75,
      name: "Gravalanch",
      type: ["Roche", "Sol"],
      description: "Un Pokémon robuste qui utilise ses rochers comme boucliers.",
      evolution: "Grolem",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
    },
    {
      id: 76,
      name: "Grolem",
      type: ["Roche", "Sol"],
      description: "Un Pokémon extrêmement dur, capable de soulever des rochers géants.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
    },
    {
      id: 77,
      name: "Ponyta",
      type: ["Feu"],
      description: "Un Pokémon cheval avec une crinière de feu.",
      evolution: "Galopa",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
    },
    {
      id: 78,
      name: "Galopa",
      type: ["Feu"],
      description: "Un Pokémon majestueux et rapide avec des flammes dans la crinière.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
    },
    {
      id: 79,
      name: "Ramoloss",
      type: ["Eau", "Psy"],
      description: "Un Pokémon paresseux qui préfère rester dans l'eau.",
      evolution: "Flagadoss",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
    },
    {
      id: 80,
      name: "Flagadoss",
      type: ["Eau", "Psy"],
      description: "Un Pokémon avec une grande intelligence, qui utilise ses pouvoirs psychiques.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
    },
    {
      id: 81,
      name: "Magnéti",
      type: ["Électrik", "Acier"],
      description: "Un Pokémon magnétique qui peut attirer des objets métalliques.",
      evolution: "Magnéton",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
    },
    {
      id: 82,
      name: "Magnéton",
      type: ["Électrik", "Acier"],
      description: "Un Pokémon composé de plusieurs Magnéti, capable de générer des champs magnétiques puissants.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
    },
    {
      id: 83,
      name: "Canarticho",
      type: ["Vol", "Normal"],
      description: "Un Pokémon volatile, agile, avec un cri très perçant.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
    },
    {
      id: 84,
      name: "Doduo",
      type: ["Normal", "Vol"],
      description: "Un Pokémon avec deux têtes et deux corps qui se déplacent en même temps.",
      evolution: "Dodrio",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
    },
    {
      id: 85,
      name: "Dodrio",
      type: ["Normal", "Vol"],
      description: "Un Pokémon avec trois têtes et trois corps, chacun avec une personnalité différente.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
    },
    {
      id: 86,
      name: "Otaria",
      type: ["Eau"],
      description: "Un Pokémon de mer qui se déplace en nageant.",
      evolution: "Lamantine",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
    },
    {
      id: 87,
      name: "Lamantine",
      type: ["Eau", "Glace"],
      description: "Un Pokémon de mer majestueux, qui vit dans des eaux glacées.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
    },
    {
      id: 88,
      name: "Tadmorv",
      type: ["Poison"],
      description: "Un Pokémon composé de boue et de déchets qui se nourrit de substances toxiques.",
      evolution: "Grotadmorv",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
    },
    {
      id: 89,
      name: "Grotadmorv",
      type: ["Poison"],
      description: "Un Pokémon plus gros et plus dangereux que son évolution précédente.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
    },
    {
      id: 90,
      name: "Kokiyas",
      type: ["Eau"],
      description: "Un Pokémon coquillage qui peut produire des perles.",
      evolution: "Crustabri",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
    },
    {
      id: 91,
      name: "Crustabri",
      type: ["Eau", "Glace"],
      description: "Un Pokémon qui porte une carapace glacée et se défend avec ses pinces.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
    },
    {
      id: 92,
      name: "Fantominus",
      type: ["Spectre", "Poison"],
      description: "Un Pokémon qui se cache dans l'ombre et qui se nourrit de la peur.",
      evolution: "Spectrum",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
    },
    {
      id: 93,
      name: "Spectrum",
      type: ["Spectre", "Poison"],
      description: "Un Pokémon invisible capable de se déplacer à travers les murs.",
      evolution: "Ectoplasma",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
    },
    {
      id: 94,
      name: "Ectoplasma",
      type: ["Spectre", "Poison"],
      description: "Un Pokémon spectre puissant, capable de dévorer l'âme de ses ennemis.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
      id: 95,
      name: "Onix",
      type: ["Roche", "Sol"],
      description: "Un Pokémon serpent composé de pierres et de minéraux.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
    },
    {
      id: 96,
      name: "Soporifik",
      type: ["Psy"],
      description: "Un Pokémon qui peut plonger ses adversaires dans un profond sommeil.",
      evolution: "Hypnomade",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
    },
    {
      id: 97,
      name: "Hypnomade",
      type: ["Psy"],
      description: "Un Pokémon qui maîtrise le sommeil et la télékinésie.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
    },
    {
      id: 98,
      name: "Krabby",
      type: ["Eau"],
      description: "Un petit Pokémon qui vit dans des coquillages et adore se cacher.",
      evolution: "Krabboss",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
    },
    {
      id: 99,
      name: "Krabboss",
      type: ["Eau"],
      description: "Un Pokémon avec de puissantes pinces qui peuvent écraser tout sur leur passage.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
    },
    {
      id: 100,
      name: "Voltorbe",
      type: ["Électrik"],
      description: "Un Pokémon électrifié qui ressemble à une boule de feu.",
      evolution: "Électrode",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
    },
    {
      id: 101,
      name: "Électrode",
      type: ["Électrik"],
      description: "Un Pokémon sphérique qui peut générer des décharges électriques.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
    },
    {
      id: 102,
      name: "Nœunœuf",
      type: ["Plante", "Psy"],
      description: "Un œuf avec un noyau de plante à l'intérieur qui peut développer un esprit.",
      evolution: "Noadkoko",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
    },
    {
      id: 103,
      name: "Noadkoko",
      type: ["Plante", "Psy"],
      description: "Un Pokémon qui ressemble à un arbre avec plusieurs têtes.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
    },
    {
      id: 104,
      name: "Osselait",
      type: ["Sol"],
      description: "Un Pokémon qui porte des os sur sa tête et utilise sa grande force pour attaquer.",
      evolution: "Ossatueur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
    },
    {
      id: 105,
      name: "Ossatueur",
      type: ["Sol"],
      description: "Un Pokémon imposant avec un grand os qu'il utilise comme arme.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
    },
    {
      id: 106,
      name: "Kicklee",
      type: ["Combat"],
      description: "Un Pokémon agile, spécialisé dans les coups de pied rapides et puissants.",
      evolution: "Tygnon",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
    },
    {
      id: 107,
      name: "Tygnon",
      type: ["Combat"],
      description: "Un Pokémon avec des bras puissants et une grande force physique.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
    },
    {
      id: 108,
      name: "Excelangue",
      type: ["Normal"],
      description: "Un Pokémon long, avec une langue extensible qu'il utilise pour attraper des proies.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
    },
    {
      id: 109,
      name: "Smogo",
      type: ["Poison"],
      description: "Un Pokémon qui génère des gaz toxiques pour attaquer ses ennemis.",
      evolution: "Smogogon",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
    },
    {
      id: 110,
      name: "Smogogon",
      type: ["Poison"],
      description: "Un Pokémon encore plus dangereux que Smogo, capable de produire un nuage de gaz empoisonné.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
    },
    {
      id: 111,
      name: "Rhinocorne",
      type: ["Roche", "Sol"],
      description: "Un Pokémon fort et robuste qui utilise sa corne pour attaquer.",
      evolution: "Rhinoféros",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
    },
    {
      id: 112,
      name: "Rhinoféros",
      type: ["Roche", "Sol"],
      description: "Un Pokémon puissant, possédant une corne capable de détruire des obstacles.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
    },
    {
      id: 113,
      name: "Leveinard",
      type: ["Normal"],
      description: "Un Pokémon qui apporte du réconfort et de la chance aux autres avec son comportement bienveillant.",
      evolution: "Saquedeneu",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
    },
    {
      id: 114,
      name: "Saquedeneu",
      type: ["Normal"],
      description: "Un Pokémon rare qui protège ceux qu'il aime avec sa grande force.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
    },
    {
      id: 115,
      name: "Kangourex",
      type: ["Normal"],
      description: "Un Pokémon qui porte son petit dans sa poche ventrale et le protège.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
    },
    {
      id: 116,
      name: "Hypotrempe",
      type: ["Eau"],
      description: "Un Pokémon qui nage dans l'eau douce et qui évolue sous l'eau.",
      evolution: "Hypocéan",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
    },
    {
      id: 117,
      name: "Hypocéan",
      type: ["Eau"],
      description: "Un Pokémon énorme qui vit dans les profondeurs marines.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
    },
    {
      id: 118,
      name: "Poissirène",
      type: ["Eau"],
      description: "Un Pokémon agile qui nage rapidement dans l'eau.",
      evolution: "Poissoroy",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
    },
    {
      id: 119,
      name: "Poissoroy",
      type: ["Eau"],
      description: "Un Pokémon élégant, capable d'utiliser des attaques puissantes de type eau.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
    },
    {
      id: 120,
      name: "Stari",
      type: ["Eau"],
      description: "Un Pokémon qui se cache sous l'eau, et qui est toujours en mouvement.",
      evolution: "Staross",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
    },
    {
      id: 121,
      name: "Staross",
      type: ["Eau", "Psy"],
      description: "Un Pokémon de mer avec une gemme en son centre, capable de manipuler l'eau.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
    },
    {
      id: 122,
      name: "M. Mime",
      type: ["Psy", "Fée"],
      description: "Un Pokémon magicien qui peut créer des barrières psychiques.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    },
    {
      id: 123,
      name: "Insécateur",
      type: ["Insecte", "Vol"],
      description: "Un Pokémon rapide et tranchant, avec des pinces ressemblant à des ciseaux.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
    },
    {
      id: 124,
      name: "Lippoutou",
      type: ["Glace", "Psy"],
      description: "Un Pokémon qui crée une connexion psychique avec son dresseur.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
    },
    {
      id: 125,
      name: "Elektek",
      type: ["Électrik"],
      description: "Un Pokémon qui génère de l'électricité avec ses bras.",
      evolution: "Électhor",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
    },
    {
      id: 126,
      name: "Magmar",
      type: ["Feu"],
      description: "Un Pokémon avec une température corporelle extrêmement élevée, capable de cracher du feu.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
    },
    {
      id: 127,
      name: "Scarabrute",
      type: ["Insecte", "Combat"],
      description: "Un Pokémon avec des bras puissants qui peut casser des rochers.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
    },
    {
      id: 128,
      name: "Tauros",
      type: ["Normal"],
      description: "Un Pokémon féroce qui charge en utilisant sa grande puissance.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
    },
    {
      id: 129,
      name: "Magicarpe",
      type: ["Eau"],
      description: "Un Pokémon faible et inutile, mais il peut évoluer en un Pokémon puissant.",
      evolution: "Léviator",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
    },
    {
      id: 130,
      name: "Léviator",
      type: ["Eau", "Vol"],
      description: "Un Pokémon légendaire, connu pour sa puissance destructrice et son vol dans les airs.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    },
    {
      id: 131,
      name: "Lokhlass",
      type: ["Eau", "Glace"],
      description: "Un Pokémon rare et majestueux, qui nage dans les mers froides.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
    },
    {
      id: 132,
      name: "Métamorph",
      type: ["Normal"],
      description: "Un Pokémon mystérieux capable de se transformer en tout ce qu'il voit.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    },
    {
      id: 133,
      name: "Évoli",
      type: ["Normal"],
      description: "Un Pokémon mignon et adaptable, qui peut évoluer en plusieurs formes différentes.",
      evolution: "Aquali, Voltali, Pyroli, etc.",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    {
      id: 134,
      name: "Aquali",
      type: ["Eau"],
      description: "L'évolution aquatique d'Évoli, un Pokémon très agile dans l'eau.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
    },
    {
      id: 135,
      name: "Voltali",
      type: ["Électrik"],
      description: "L'évolution électrique d'Évoli, capable de générer une grande quantité d'électricité.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
    },
    {
      id: 136,
      name: "Pyroli",
      type: ["Feu"],
      description: "L'évolution de type feu d'Évoli, avec une crinière flamboyante.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
    },
    {
      id: 137,
      name: "Porygon",
      type: ["Normal"],
      description: "Un Pokémon artificiel conçu pour se déplacer à travers les réseaux informatiques.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
    },
    {
      id: 138,
      name: "Amonita",
      type: ["Eau", "Roche"],
      description: "Un Pokémon fossile qui a vécu à l'époque préhistorique.",
      evolution: "Amonistar",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
    },
    {
      id: 139,
      name: "Amonistar",
      type: ["Eau", "Roche"],
      description: "L'évolution d'Amonita, un Pokémon avec des tentacules en forme de coquilles.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
    },
    {
      id: 140,
      name: "Kabuto",
      type: ["Eau", "Roche"],
      description: "Un Pokémon fossile, ressemblant à un petit crabe avec une coquille dure.",
      evolution: "Kabutops",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
    },
    {
      id: 141,
      name: "Kabutops",
      type: ["Eau", "Roche"],
      description: "L'évolution de Kabuto, un Pokémon rapide et tranchant.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
    },
    {
      id: 142,
      name: "Ptéra",
      type: ["Vol", "Roche"],
      description: "Un Pokémon fossile qui vole dans le ciel, ses ailes ressemblent à celles des dinosaures.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
    },
    {
      id: 143,
      name: "Ronflex",
      type: ["Normal"],
      description: "Un Pokémon extrêmement paresseux qui dort toute la journée.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
    },
    {
      id: 144,
      name: "Artikodin",
      type: ["Glace", "Vol"],
      description: "L'un des trois oiseaux légendaires, capable de contrôler la glace.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
    },
    {
      id: 145,
      name: "Electhor",
      type: ["Électrik", "Vol"],
      description: "L'un des trois oiseaux légendaires, capable de contrôler l'électricité.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
    },
    {
      id: 146,
      name: "Sulfura",
      type: ["Feu", "Vol"],
      description: "L'un des trois oiseaux légendaires, capable de contrôler le feu.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
    },
    {
      id: 147,
      name: "Minidraco",
      type: ["Dragon"],
      description: "Un Pokémon dragon mignon, souvent vu aux côtés des Dresseurs.",
      evolution: "Draco",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
    },
    {
      id: 148,
      name: "Draco",
      type: ["Dragon"],
      description: "Un Pokémon de type dragon avec une grande puissance de vol.",
      evolution: "Dracolosse",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
    },
    {
      id: 149,
      name: "Dracolosse",
      type: ["Dragon", "Vol"],
      description: "Un Pokémon légendaire, majestueux et puissant, capable de voler à des vitesses incroyables.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    {
      id: 150,
      name: "Mewtwo",
      type: ["Psy"],
      description: "Un Pokémon génétiquement modifié, extrêmement puissant.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    {
      id: 151,
      name: "Mew",
      type: ["Psy"],
      description: "Un Pokémon mythique, capable d'apprendre tous les mouvements.",
      evolution: "Aucune",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    }
  ];
  
export default pokemonData;
