// Datos exhaustivos de animales marinos, clasificaciones y especies en peligro
window.OCEAN_DATA = {
  generalInfo: {
    title: "El Océano y la Vida Marina",
    subtitle: "El Corazón Azul del Planeta y Cuna de la Biodiversidad",
    source: "EcologíaVerde",
    leadParagraph: "Además de cubrir una extensión de más del 70% de la superficie de la Tierra, el océano es de especial importancia para la especie humana. Estas inmensas masas de agua albergan unas corrientes oceánicas que determinan las condiciones meteorológicas en el mundo y rigen la salud del planeta. Además, estas aguas albergan una increíble biodiversidad de la cual, aun a día de hoy, queda mucho por descubrir. La biodiversidad marina es un elemento fundamental para el desarrollo sostenible, tanto a nivel económico, social y ambiental, y deviene un sustento para la salud, el bienestar y la prosperidad para el ser humano."
  },

  stats: [
    { value: "+70%", label: "De la superficie de la Tierra cubierta por océanos", icon: "fa-earth-americas", color: "from-blue-400 to-cyan-500" },
    { value: "97%", label: "Del agua de todo el planeta corresponde a agua salada", icon: "fa-water", color: "from-cyan-400 to-teal-500" },
    { value: ">80%", label: "De los fondos marinos permanece inexplorado", icon: "fa-compass", color: "from-teal-400 to-emerald-500" },
    { value: "50-80%", label: "Del oxígeno que respiramos lo produce el fitoplancton marino", icon: "fa-lungs", color: "from-sky-400 to-blue-600" }
  ],

  importancePillars: [
    {
      title: "Regulación Meteorológica Global",
      description: "Las corrientes oceánicas actúan como una gigantesca cinta transportadora térmica global. Transportan agua cálida desde el ecuador hacia los polos y agua fría hacia los trópicos, regulando el clima y evitando temperaturas extremas en las zonas continentales habitadas.",
      icon: "fa-cloud-sun-rain",
      color: "bg-blue-500/10 border-blue-500/20 text-blue-400"
    },
    {
      title: "Sustento y Bienestar Humano",
      description: "Más de 3.000 millones de personas dependen de la biodiversidad marina y costera para su subsistencia y fuente proteica. La economía azul genera empleo en pesca responsable, acuicultura, turismo sostenible y biotecnología médica.",
      icon: "fa-hand-holding-heart",
      color: "bg-teal-500/10 border-teal-500/20 text-teal-400"
    },
    {
      title: "Sumidero de Carbono Esencial",
      description: "El océano absorbe aproximadamente el 30% del dióxido de carbono producido por los seres humanos y almacena 50 veces más carbono que la atmósfera terrestre, siendo la primera línea natural de defensa frente al cambio climático.",
      icon: "fa-leaf",
      color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
    },
    {
      title: "Incomparable Biodiversidad",
      description: "Alberga desde microorganismos unicelulares fotosintéticos invisibles al ojo humano hasta el animal más colosal que jamás ha habitado el planeta: la ballena azul. Millones de especies conviven en arrecifes, fosas abisales y aguas abiertas.",
      icon: "fa-fish-fins",
      color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
    }
  ],

  characteristics: [
    {
      title: "Osmorregulación y Salinidad",
      summary: "Vivir en agua salada requiere mantener el balance hídrico corporal constante.",
      detail: "Los peces marinos beben agua de mar constantemente y excretan el exceso de sales a través de células especializadas en sus branquias y riñones. Aves y reptiles marinos poseen glándulas de la sal para secretar salmuera concentrada.",
      icon: "fa-droplet"
    },
    {
      title: "Respiración Adaptativa",
      summary: "Sistemas biológicos diseñados para extraer oxígeno bajo el agua o emerger eficientemente.",
      detail: "La mayoría de invertebrados y peces utilizan branquias para captar el oxígeno disuelto en agua salada. Por contra, los mamíferos y reptiles marinos conservan respiración pulmonar, con una extraordinaria capacidad para ralentizar su ritmo cardíaco (bradicardia) durante inmersiones profundas.",
      icon: "fa-wind"
    },
    {
      title: "Hidrodinámica y Flotabilidad",
      summary: "Morfologías diseñadas para reducir la resistencia al avance en un medio denso.",
      detail: "Cuerpos fusiformes o aplanados, aletas propulsoras y vejiga natatoria en peces óseos para ajustar la profundidad. En tiburones, el gran hígado rico en escualeno (grasa de baja densidad) y un esqueleto cartilaginoso liviano les garantizan flotabilidad neutra.",
      icon: "fa-bolt"
    },
    {
      title: "Resistencia a la Presión y Temperatura",
      summary: "De aguas superficiales tropicales a fosas abisales heladas a miles de atmósferas.",
      detail: "En las profundidades oscuras, la presión aplastaría cualquier estructura con cavidades de gas. Por ello, la fauna bentónica y de zonas batiales carece de pulmones o vejigas natatorias, utilizando membranas celulares enriquecidas con ácidos grasos poliinsaturados y bioluminiscencia.",
      icon: "fa-gauge-high"
    }
  ],

  categories: [
    { id: "all", name: "Todos", count: 12 },
    { id: "mamiferos", name: "Mamíferos Marinos", count: 3 },
    { id: "peces", name: "Peces y Condrictios", count: 3 },
    { id: "reptiles", name: "Reptiles y Aves", count: 2 },
    { id: "invertebrados", name: "Invertebrados y Cnidarios", count: 4 }
  ],

  animals: [
    {
      id: "ballena-azul",
      name: "Ballena Azul",
      scientificName: "Balaenoptera musculus",
      category: "mamiferos",
      habitat: "Océanos abiertos, migra entre aguas polares y tropicales",
      diet: "Carnívoro filtrador (principalmente krill, hasta 4 toneladas al día)",
      size: "Hasta 30 metros de longitud y 190 toneladas",
      status: "En Peligro (EN)",
      statusColor: "red",
      isEndangered: true,
      image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800&q=80",
      description: "El animal más grande que ha existido en la Tierra, superando en masa a los mayores dinosaurios. Su corazón es del tamaño de un automóvil pequeño y su canto de baja frecuencia viaja cientos de kilómetros a través del océano.",
      curiosity: "La lengua de una ballena azul adulta puede pesar tanto como un elefante adulto."
    },
    {
      id: "vaquita-marina",
      name: "Vaquita Marina",
      scientificName: "Phocoena sinus",
      category: "mamiferos",
      habitat: "Norte del Golfo de California (México), endémica",
      diet: "Peces pequeños, calamares y crustáceos",
      size: "Aprox. 1.5 metros y 50 kg",
      status: "En Peligro Crítico (CR)",
      statusColor: "rose",
      isEndangered: true,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      description: "Es el cetáceo más pequeño y más amenazado del planeta. Su población actual se estima en menos de una decena de individuos debido a la captura incidental en redes de enmalle ilegales destinadas al pez totoaba.",
      curiosity: "Tiene círculos oscuros alrededor de los ojos y manchas negras en los labios que le dan un aspecto tierno y único."
    },
    {
      id: "delfin-mular",
      name: "Delfín Mular o Nariz de Botella",
      scientificName: "Tursiops truncatus",
      category: "mamiferos",
      habitat: "Aguas templadas y tropicales de todo el planeta",
      diet: "Peces bentónicos y pelágicos, calamares y crustáceos",
      size: "2 a 4 metros, 150 a 650 kg",
      status: "Preocupación Menor (LC)",
      statusColor: "emerald",
      isEndangered: false,
      image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=800&q=80",
      description: "Conocido por su alta inteligencia, compleja estructura social y capacidad de ecolocalización para navegar y cazar en cualquier tipo de visibilidad marina.",
      curiosity: "Poseen nombres vocales individuales: emiten silbidos distintivos con los que se identifican ante otros congéneres."
    },
    {
      id: "tiburon-blanco",
      name: "Gran Tiburón Blanco",
      scientificName: "Carcharodon carcharias",
      category: "peces",
      habitat: "Aguas costeras y pelágicas de zonas templadas del mundo",
      diet: "Focas, leones marinos, delfines, peces y carroña",
      size: "4 a 6.4 metros de longitud",
      status: "Vulnerable (VU)",
      statusColor: "amber",
      isEndangered: true,
      image: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=800&q=80",
      description: "Superdepredador icónico de esqueleto cartilaginoso. Posee las ampollas de Lorenzini, órganos sensoriales capaces de detectar los mínimos campos electromagnéticos generados por el latido cardíaco de sus presas.",
      curiosity: "Puede detectar una sola gota de sangre diluida en 100 litros de agua a kilómetros de distancia."
    },
    {
      id: "tiburon-martillo",
      name: "Tiburón Martillo Gigante",
      scientificName: "Sphyrna mokarran",
      category: "peces",
      habitat: "Aguas templadas y tropicales cálidas a nivel global",
      diet: "Rayas marinas, peces óseos, calamares y otros tiburones",
      size: "Hasta 6.1 metros",
      status: "En Peligro Crítico (CR)",
      statusColor: "rose",
      isEndangered: true,
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
      description: "Su característica cabeza en forma de 'T' (cefalofoil) le otorga una visión panorámica de 360 grados en el plano vertical y una capacidad superior para rastrear presas ocultas en la arena.",
      curiosity: "Su cabeza ancha aloja una mayor concentración de electrorreceptores que la de cualquier otro pez cartilaginoso."
    },
    {
      id: "pez-payaso",
      name: "Pez Payaso de Ocelos",
      scientificName: "Amphiprion ocellaris",
      category: "peces",
      habitat: "Arrecifes de coral del océano Índico y Pacífico",
      diet: "Omnívoro (algas, plancton y copépodos)",
      size: "7 a 11 cm",
      status: "Preocupación Menor (LC)",
      statusColor: "emerald",
      isEndangered: false,
      image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      description: "Famoso por su relación de mutualismo simbiótico con las anémonas de mar tóxicas: su capa de mucosa especial lo protege de los nematocistos urticantes de la anémona a cambio de protegerla y limpiarla.",
      curiosity: "Todos los peces payaso nacen machos y los individuos dominantes pueden transformarse en hembras fértiles (hermafroditismo secuencial)."
    },
    {
      id: "tortuga-laud",
      name: "Tortuga Laúd",
      scientificName: "Dermochelys coriacea",
      category: "reptiles",
      habitat: "Océanos abiertos templados y tropicales; bucea hasta 1.200 m",
      diet: "Gelatinívora (casi exclusivamente medusas)",
      size: "Hasta 2.2 metros y más de 700 kg",
      status: "Vulnerable (VU)",
      statusColor: "amber",
      isEndangered: true,
      image: "https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&w=800&q=80",
      description: "La tortuga más grande del mundo y único miembro vivo de su familia. En lugar de un caparazón óseo rígido, posee un escudo de piel coriácea flexible reforzado por diminutas placas óseas.",
      curiosity: "Puede sumergirse a más de 1.200 metros de profundidad, resistiendo presiones extremas y temperaturas gélidas gracias a un sistema contracorriente sanguíneo."
    },
    {
      id: "tortuga-carey",
      name: "Tortuga Carey",
      scientificName: "Eretmochelys imbricata",
      category: "reptiles",
      habitat: "Arrecifes coralinos tropicales en todo el mundo",
      diet: "Esponjas de mar, anémonas y medusas",
      size: "60 a 90 cm de caparazón, 60 a 80 kg",
      status: "En Peligro Crítico (CR)",
      statusColor: "rose",
      isEndangered: true,
      image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
      description: "Vital para el equilibrio de los arrecifes ya que al alimentarse de esponjas evita que asfixien a los corales pétreos. Ha sido diezmada históricamente para el comercio decorativo de su caparazón.",
      curiosity: "Su carne o grasa puede volverse tóxica al ingerir esponjas venenosas sin sufrir daño alguno."
    },
    {
      id: "pulpo-comun",
      name: "Pulpo Común",
      scientificName: "Octopus vulgaris",
      category: "invertebrados",
      habitat: "Fondos rocosos y praderas de posidonia de aguas templadas",
      diet: "Crustáceos, bivalvos y pequeños peces",
      size: "Brazos de hasta 1 metro de envergadura",
      status: "Preocupación Menor (LC)",
      statusColor: "emerald",
      isEndangered: false,
      image: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=800&q=80",
      description: "Cefalópodo dotado de una asombrosa inteligencia, tres corazones, sangre azul a base de cobre (hemocianina) y la facultad de cambiar de color y textura en milisegundos mediante cromatóforos.",
      curiosity: "Dos tercios de las neuronas de un pulpo no están en su cerebro, sino distribuidas de forma autónoma a lo largo de sus tentáculos."
    },
    {
      id: "medusa-melena-leon",
      name: "Medusa Melena de León Gigante",
      scientificName: "Cyanea capillata",
      category: "invertebrados",
      habitat: "Aguas frías del Ártico y Pacífico Norte",
      diet: "Zooplancton, peces pequeños y otras medusas",
      size: "Campana de más de 2 metros; tentáculos de hasta 37 metros",
      status: "No evaluado / Abundante",
      statusColor: "blue",
      isEndangered: false,
      image: "https://images.unsplash.com/photo-1544551763-92ab472cad5d?auto=format&fit=crop&w=800&q=80",
      description: "Uno de los animales más largos del reino animal. Sus tentáculos contienen millones de cnidocitos con toxinas que paralizan a sus presas en aguas gélidas.",
      curiosity: "Sus tentáculos pueden superar la longitud corporal de la mismísima ballena azul."
    },
    {
      id: "coral-cuerno-alce",
      name: "Coral Cuerno de Alce",
      scientificName: "Acropora palmata",
      category: "invertebrados",
      habitat: "Arrecifes someros del Caribe y Golfo de México",
      diet: "Simbiosis con zooxantelas y captura de zooplancton",
      size: "Colonias de más de 2 metros de altura y 4 de anchura",
      status: "En Peligro Crítico (CR)",
      statusColor: "rose",
      isEndangered: true,
      image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
      description: "Es uno de los corales constructores de arrecifes más importantes del Caribe. Sus colonias ramificadas forman barreras que amortiguan la fuerza destructiva de tormentas y huracanes costeros.",
      curiosity: "Se ha perdido más del 80% de su población en los últimos 40 años debido al calentamiento del agua, blanqueamiento y enfermedades."
    },
    {
      id: "estrella-mar",
      name: "Estrella de Mar Azul",
      scientificName: "Linckia laevigata",
      category: "invertebrados",
      habitat: "Aguas poco profundas de arrecifes del Indo-Pacífico",
      diet: "Detritos, bacterias superficiales y algas filamentosas",
      size: "Hasta 30 cm de diámetro",
      status: "Preocupación Menor (LC)",
      statusColor: "emerald",
      isEndangered: false,
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80",
      description: "Equinodermo de coloración azul cobalto brillante. Presenta simetría pentarradial, sistema vascular acuífero y una extraordinaria capacidad de autorregeneración corporal a partir de un solo brazo desgajado.",
      curiosity: "No tienen sangre ni cerebro; bombean directamente agua salada a través de su placa madrepórica para accionar sus cientos de pies ambulacrales."
    }
  ],

  endangeredSpecies: [
    {
      name: "Vaquita Marina",
      sci: "Phocoena sinus",
      iucn: "En Peligro Crítico (CR)",
      remaining: "< 10 individuos",
      threat: "Pesca ilegal con redes de enmalle dirigidas al pez totoaba.",
      urgentAction: "Patrullaje naval estricto y sustitución definitiva de artes de pesca destructivas."
    },
    {
      name: "Tortuga Carey",
      sci: "Eretmochelys imbricata",
      iucn: "En Peligro Crítico (CR)",
      remaining: "Declive superior al 80% en 3 generaciones",
      threat: "Comercio ilegal de caparazones, degradación de arrecifes coralinos y saqueo de nidos.",
      urgentAction: "Protección absoluta de playas de anidación y erradicación del mercado de carey."
    },
    {
      name: "Ballena Franca del Atlántico Norte",
      sci: "Eubalaena glacialis",
      iucn: "En Peligro Crítico (CR)",
      remaining: "~350 ejemplares",
      threat: "Colisiones con buques de carga comerciales y enredos letales en aparejos de pesca fijos.",
      urgentAction: "Límites obligatorios de velocidad para barcos y tecnología de pesca sin cuerdas verticales."
    },
    {
      name: "Foca Monje del Mediterráneo",
      sci: "Monachus monachus",
      iucn: "En Peligro (EN)",
      remaining: "< 700 ejemplares",
      threat: "Pérdida y urbanización de cuevas costeras, captura accidental y persecución histórica.",
      urgentAction: "Creación de santuarios marinos restringidos en Grecia, Turquía y costa atlántica africana."
    },
    {
      name: "Tiburón Martillo Gigante",
      sci: "Sphyrna mokarran",
      iucn: "En Peligro Crítico (CR)",
      remaining: "Declive poblacional global > 80%",
      threat: "Finning (aleteo de tiburón) y captura accidental de alta intensidad por palangres y redes.",
      urgentAction: "Prohibición estricta de desembarque de aletas y áreas marinas protegidas pelágicas."
    },
    {
      name: "Coral Cuerno de Alce",
      sci: "Acropora palmata",
      iucn: "En Peligro Crítico (CR)",
      remaining: "Reducción de más del 80-90% de cobertura histórica",
      threat: "Blanqueamiento por olas de calor marinas, acidificación del océano y polución urbana.",
      urgentAction: "Microfragmentación, viveros coralinos genéticamente resistentes y reducción drástica de emisiones de CO2."
    }
  ],

  conservationTips: [
    {
      icon: "fa-ban",
      title: "Elimina plásticos de un solo uso",
      desc: "Se calcula que más de 12 millones de toneladas de plástico entran al océano cada año, fragmentándose en microplásticos letales para toda la cadena trófica."
    },
    {
      icon: "fa-certificate",
      title: "Elige pesca sostenible certificada",
      desc: "Consume productos con sello MSC (Marine Stewardship Council) y evita especies sobreexplotadas o capturadas mediante arrastre de fondo."
    },
    {
      icon: "fa-sun",
      title: "Usa protector solar 'Reef Safe'",
      desc: "Filtros químicos como la oxibenzona y octinoxato blanquean y matan a los pólipos de coral, incluso en concentraciones de partes por billón."
    },
    {
      icon: "fa-bolt-lightning",
      title: "Reduce tu huella de carbono",
      desc: "Menos emisiones de CO2 frenan la acidificación del agua y previenen el colapso térmico que desestabiliza los arrecifes y corrientes marinas."
    }
  ]
};

