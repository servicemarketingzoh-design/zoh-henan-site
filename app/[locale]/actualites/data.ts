export type Actualite = {
  slug: string;
  titre: string;
  extrait: string;
  contenu: string;
  date: string;
  categorie: string;
  img: string;
  photos: string[];
  video?: string;
  hidden?: boolean;
};

export const actualites: Actualite[] = [
  {
    slug: "sici-2026",
    titre: "ZOH-HENAN remporte le Prix du Meilleur Projet Immobilier au SICI 2026",
    extrait: "Les 7 et 8 février 2026, ZOH-HENAN Immobilier a participé au Salon de l'Immobilier de Côte d'Ivoire et en est reparti avec la plus haute distinction : le Prix du Meilleur Projet Immobilier de l'année.",
    contenu: `Début février 2026, Abidjan vibrait au rythme de l'un des rendez-vous les plus attendus du monde immobilier en Afrique de l'Ouest : le Salon de l'Immobilier de Côte d'Ivoire, plus connu sous le nom de SICI. Organisé chaque année au Parc d'Exposition d'Abidjan, cet événement rassemble pendant deux jours les principaux acteurs du secteur — promoteurs, banques, investisseurs institutionnels, architectes, cabinets d'urbanisme et particuliers en quête de leur premier bien. Pour ZOH-HENAN Immobilier, cette édition 2026 allait rester gravée dans les mémoires.

Dès le matin du 7 février, l'équipe ZOH-HENAN s'installait dans ses quartiers au Parc d'Exposition avec une préparation minutieuse derrière elle. Visuels grand format de la Cité Prestige de Bingerville, plans de masse imprimés en haute résolution, maquettes volumiques des différents types de villas, vidéos immersives du chantier en cours, dossiers techniques complets — tout avait été pensé pour offrir aux visiteurs une expérience complète et convaincante. Le stand dégageait cette impression de sérieux et d'ambition qui caractérise ZOH-HENAN depuis ses débuts.

Les premières heures du Jour 1 ont rapidement confirmé l'intérêt du public. Des familles nombreuses à la recherche d'espace, des jeunes actifs souhaitant investir pour la première fois, des membres de la diaspora ivoirienne attirés par la sécurité juridique garantie par le Certificat de Mutation de Propriété Foncière (CMPF), des chefs d'entreprise cherchant à diversifier leur patrimoine — tous s'arrêtaient, posaient des questions, écoutaient. Les conseillers ZOH-HENAN répondaient méthodiquement, avec précision et passion. La journée s'est terminée sur une note de satisfaction générale, avec des dizaines de contacts qualifiés et plusieurs dossiers de réservation initiés.

Le Jour 2, 8 février, s'annonçait aussi chargé. L'engouement de la veille avait fait son chemin : certains visiteurs revenaient avec leur conjoint ou leurs parents, curieux d'en savoir davantage. Les échanges se sont approfondis. Des actes de réservation ont été signés directement sur le stand — preuve tangible que ZOH-HENAN avait su installer la confiance en quelques heures.

C'est dans ce contexte de succès que vint l'événement qui couronna cette édition du SICI : ZOH-HENAN Immobilier reçut officiellement le Prix du Meilleur Projet Immobilier 2026. Cette distinction, attribuée par un jury composé d'experts sectoriels indépendants, reconnaît l'excellence globale de la Cité Prestige de Bingerville — la qualité architecturale des villas, la solidité des agréments obtenus auprès du Ministère de l'Urbanisme et des Cadres de Vie, le sérieux du cadre juridique, le respect des engagements pris envers les clients, et la vision sociale portée par la direction depuis le premier jour.

Ce prix est bien plus qu'une récompense. C'est une validation nationale du travail accompli par des centaines de femmes et d'hommes qui bâtissent chaque jour, brique par brique, la Cité Prestige. C'est un signal fort envoyé au marché immobilier ivoirien : ZOH-HENAN Immobilier est là, solide, sérieux, et porteur d'une vision à long terme pour l'accès à la propriété en Côte d'Ivoire.

La Direction Générale tient à remercier chaleureusement toutes les équipes qui ont rendu cette participation possible, l'organisation du SICI pour la qualité de l'événement, et surtout les visiteurs, clients et partenaires qui ont accordé leur temps et leur confiance à notre stand. Cette distinction appartient à toute la famille ZOH-HENAN.`,
    date: "08 Février 2026",
    categorie: "Événement",
    img: "/images/actualites/sici-2026/0D9A9697.webp",
    photos: [
      "/images/actualites/sici-2026/0D9A9697.webp",
      "/images/actualites/sici-2026/0D9A9732.webp",
      "/images/actualites/sici-2026/0D9A9727.webp",
      "/images/actualites/sici-2026/0D9A9695.webp",
      "/images/actualites/sici-2026/0D9A9654.webp",
      "/images/actualites/sici-2026/0D9A9505.webp",
      "/images/actualites/sici-2026/0D9A9422.webp",
      "/images/actualites/sici-2026/0D9A9395.webp",
      "/images/actualites/sici-2026/0D9A9387.webp",
      "/images/actualites/sici-2026/0D9A9383.webp",
      "/images/actualites/sici-2026/0D9A9357.webp",
      "/images/actualites/sici-2026/0D9A9346.webp",
      "/images/actualites/sici-2026/0D9A9294.webp",
      "/images/actualites/sici-2026/0D9A9269.webp",
      "/images/actualites/sici-2026/0D9A9262.webp",
      "/images/actualites/sici-2026/0D9A9258.webp",
      "/images/actualites/sici-2026/0D9A9244.webp",
      "/images/actualites/sici-2026/0D9A9230.webp",
      "/images/actualites/sici-2026/0D9A9211.webp",
      "/images/actualites/sici-2026/0D9A9174.webp",
      "/images/actualites/sici-2026/0D9A9154.webp",
      "/images/actualites/sici-2026/0D9A9148.webp",
      "/images/actualites/sici-2026/0D9A9144.webp",
      "/images/actualites/sici-2026/0D9A9083.webp",
      "/images/actualites/sici-2026/0D9A9073.webp",
      "/images/actualites/sici-2026/0D9A9070.webp",
      "/images/actualites/sici-2026/0D9A9063.webp",
      "/images/actualites/sici-2026/0D9A9056.webp",
      "/images/actualites/sici-2026/0D9A9044.webp",
      "/images/actualites/sici-2026/0D9A8968.webp",
      "/images/actualites/sici-2026/0D9A8957.webp",
      "/images/actualites/sici-2026/0D9A8950.webp",
      "/images/actualites/sici-2026/0D9A8940.webp",
      "/images/actualites/sici-2026/0D9A8910.webp",
      "/images/actualites/sici-2026/0D9A8893.webp",
      "/images/actualites/sici-2026/0D9A8890.webp",
      "/images/actualites/sici-2026/0D9A8877.webp",
      "/images/actualites/sici-2026/0D9A8685.webp",
      "/images/actualites/sici-2026/IMG_8624.webp",
      "/images/actualites/sici-2026/IMG_8622.webp",
      "/images/actualites/sici-2026/IMG_8621.webp",
      "/images/actualites/sici-2026/IMG_8620.webp",
    ],
  },
  {
    slug: "pose-premiere-pierre-2eme-tranche-2026",
    titre: "Pose de la 1ère Pierre — 2ème Tranche de la Cité Prestige Bingerville",
    extrait: "Le 28 février 2026, ZOH-HENAN GUOJI a marqué une nouvelle étape historique avec la pose de la première pierre de la 2ème tranche de construction de la Cité Prestige, en présence des autorités, partenaires et invités d'honneur.",
    contenu: `Le 28 février 2026, la Cité Prestige Zoh-Henan de Bingerville a été le théâtre d'un moment symbolique et historique : la cérémonie de pose de la première pierre de la 2ème tranche de construction.

Dès 9h du matin, autorités locales, partenaires institutionnels, clients et invités d'honneur se sont réunis sur le site pour partager ce moment fort qui marque une nouvelle phase dans l'avancement de l'un des projets immobiliers les plus ambitieux de Côte d'Ivoire.

Ce geste symbolique — poser ensemble la première pierre — est bien plus qu'un acte protocolaire. Il représente la concrétisation d'une vision : offrir à des centaines de familles ivoiriennes un cadre de vie moderne, sécurisé et de qualité, à Bingerville. Il témoigne également de la solidité des fondations — humaines, financières et juridiques — sur lesquelles repose le projet Cité Prestige.

La Direction Générale de ZOH-HENAN GUOJI a tenu à remercier chaleureusement l'ensemble des partenaires, autorités et invités présents pour leur soutien et leur confiance tout au long de cette aventure. Une mention spéciale a été adressée à la BHCI — Banque de l'Habitat de Côte d'Ivoire — partenaire financier clé, dont l'engagement déterminant a rendu possible la réalisation de ce projet d'envergure.

La 2ème tranche de construction vient compléter et amplifier le travail déjà accompli lors de la première phase, qui a permis la livraison de plus de 120 villas à des familles ivoiriennes. Elle marque la continuité d'un projet de grande ampleur, pensé pour durer et pour transformer durablement le paysage immobilier ivoirien.

Avec plus de 619 villas planifiées sur 31 hectares entièrement aménagés — routes, espaces verts, écoles et infrastructures communautaires inclus — la Cité Prestige Zoh-Henan de Bingerville est aujourd'hui une référence incontournable de l'immobilier résidentiel en Côte d'Ivoire.

Ensemble, nous bâtissons l'avenir. Merci pour votre confiance.`,
    date: "28 Février 2026",
    categorie: "Événement",
    img: "/images/pose-premiere-pierre/644725423_122210347862352907_3947988256167180902_n.jpg",
    photos: [
      "/images/pose-premiere-pierre/644725423_122210347862352907_3947988256167180902_n.jpg",
      "/images/pose-premiere-pierre/647565124_122210348102352907_7643865022342908290_n.jpg",
      "/images/pose-premiere-pierre/645565397_122210348048352907_3053450330366026567_n.jpg",
      "/images/pose-premiere-pierre/644864771_122210348222352907_6310250879411127255_n.jpg",
      "/images/pose-premiere-pierre/645430164_122210348114352907_2826843988799340114_n.jpg",
      "/images/pose-premiere-pierre/645584907_122210348150352907_7279738926880204256_n.jpg",
      "/images/pose-premiere-pierre/645730119_122210347766352907_5035184963629765483_n.jpg",
      "/images/pose-premiere-pierre/644708085_122210347778352907_3718145542609171158_n.jpg",
      "/images/pose-premiere-pierre/645616125_122210348246352907_5032557506489678785_n.jpg",
      "/images/pose-premiere-pierre/645931858_122210347940352907_9212184106136525676_n.jpg",
      "/images/pose-premiere-pierre/646358189_122210348390352907_1228054326172129824_n.jpg",
      "/images/pose-premiere-pierre/647207178_122210347892352907_3988900477554870430_n.jpg",
      "/images/pose-premiere-pierre/646045295_122210347826352907_897202891254817266_n.jpg",
      "/images/pose-premiere-pierre/645489717_122210347850352907_3298105776634547751_n.jpg",
      "/images/pose-premiere-pierre/645468694_122210347838352907_8209842761060859698_n.jpg",
      "/images/pose-premiere-pierre/644934356_122210347874352907_1345325989948735977_n.jpg",
      "/images/pose-premiere-pierre/645689670_122210347928352907_4384305893315957321_n.jpg",
      "/images/pose-premiere-pierre/646752239_122210348324352907_5115353209566895087_n.jpg",
      "/images/pose-premiere-pierre/644764173_122210348138352907_4319039734650402534_n.jpg",
      "/images/pose-premiere-pierre/645382416_122210348000352907_57256726397247075_n.jpg",
    ],
  },
  {
    slug: "accord-partenariat-cnps",
    titre: "Signature d'un accord de partenariat avec la CNPS",
    extrait: "Un nouveau partenariat a été signé avec la Caisse Nationale de Prévoyance Sociale pour faciliter l'accès au logement des travailleurs ivoiriens.",
    contenu: `ZOH-HENAN GUOJI et la Caisse Nationale de Prévoyance Sociale (CNPS) ont signé un accord de partenariat stratégique visant à faciliter l'accès au logement pour les travailleurs ivoiriens affiliés à la CNPS.

Cet accord permet aux travailleurs du secteur formel de bénéficier de conditions de financement avantageuses pour l'acquisition d'une villa à la Cité Prestige de Bingerville. Des taux préférentiels et des modalités de remboursement adaptées ont été négociés pour rendre le rêve immobilier accessible au plus grand nombre.

Cette signature s'inscrit dans la vision de ZOH-HENAN GUOJI de démocratiser l'accès à la propriété en Côte d'Ivoire, en travaillant main dans la main avec les institutions de protection sociale.

La cérémonie de signature s'est tenue en présence des directions générales des deux institutions et de représentants du Ministère de la Construction.`,
    date: "02 Février 2026",
    categorie: "Actualité",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
    ],
    hidden: true,
  },
  {
    slug: "120-villas-livrees-cap-historique",
    titre: "120 villas livrées — Un cap historique pour ZOH-HENAN",
    extrait: "La société franchit un cap historique avec la livraison de sa 120ème villa à Bingerville, confirmant son rôle de leader immobilier en Côte d'Ivoire.",
    contenu: `ZOH-HENAN GUOJI a franchi un cap symbolique et historique avec la livraison officielle de sa 120ème villa à la Cité Prestige de Bingerville. Cet événement marque l'aboutissement de plusieurs années d'efforts, de rigueur et d'engagement envers nos clients.

La cérémonie de remise des clés s'est tenue en présence des fondateurs de la société, des familles bénéficiaires, et de représentants des cabinets partenaires (CAIE, Atelier Privé d'Urbanisme, Cabinet SYGMA).

Chaque villa livrée est accompagnée d'un Certificat de Mutation de Propriété Foncière (CMPF), garantissant à chaque propriétaire la pleine et entière propriété de son bien, dans la plus totale transparence juridique.

À cette occasion, le Directeur Général de ZOH-HENAN GUOJI a réaffirmé l'ambition de la société : livrer l'intégralité des 619 villas de la Cité Prestige dans les délais convenus, et lancer de nouveaux projets dans d'autres communes d'Abidjan.`,
    date: "10 Janvier 2026",
    categorie: "Projet",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    ],
    hidden: true,
  },
  {
    slug: "don-communaute-mbatto-bouake-2025",
    titre: "ZOH-HENAN au Cœur de M'batto : Une Journée de Solidarité et de Générosité à Bouaké",
    extrait: "Le 21 décembre 2025, ZOH-HENAN Immobilier était présent auprès de la communauté villageoise de M'batto à Bouaké pour une journée de partage et de dons, témoignant de l'ancrage profond de l'entreprise dans le tissu social ivoirien.",
    contenu: `Il est des journées qui ne se racontent pas seulement en chiffres ou en contrats signés. Le 21 décembre 2025, ZOH-HENAN Immobilier a vécu l'une de ces journées-là — une journée où les mains tendent plutôt qu'elles ne reçoivent, où la présence compte plus que le discours, et où la proximité avec les communautés prend tout son sens.

Ce dimanche 21 décembre, à quelques jours du réveillon, la communauté villageoise de M'batto, dans la région de Bouaké, a reçu la visite de l'équipe ZOH-HENAN. Venue en délégation officielle, accompagnée de collaborateurs volontaires et porteurs d'un message d'amitié sincère, la société a choisi de marquer la fin de l'année 2025 d'une manière qui lui ressemble : en allant vers ceux qui vivent souvent loin des projecteurs, mais au cœur de la Côte d'Ivoire profonde.

La communauté villageoise de M'batto est un symbole de la ruralité ivoirienne — ses habitants, ses anciens, ses familles nombreuses, ses enfants qui grandissent dans la poussière rouge et sous le soleil généreux du centre du pays. C'est une communauté qui travaille, qui espère, et qui garde vivantes les traditions et les valeurs d'un peuple fier. C'est à elle que ZOH-HENAN a souhaité témoigner son respect et sa solidarité en cette fin d'année.

Les dons remis ce jour-là ont été préparés avec soin, en tenant compte des besoins réels de la communauté. Des vivres en quantité significative — riz, huile, conserves — ont été distribués aux familles présentes. Des kits d'hygiène, du matériel scolaire pour les enfants du village, et d'autres contributions en nature ont été remis aux responsables de la communauté, en présence du chef du village et des notables qui ont accueilli la délégation ZOH-HENAN avec une chaleur et une hospitalité typiquement ivoiriennes.

Les discours ont été brefs, mais les mots ont porté loin. Le représentant de ZOH-HENAN Immobilier a rappelé, devant une assistance recueillie et attentive, que l'entreprise n'est pas seulement un promoteur immobilier : elle est une entreprise citoyenne, enracinée dans la réalité ivoirienne, attachée à toutes les couches de la société, et convaincue que la prospérité n'a de sens que si elle se partage. Construire des villas pour des familles à Bingerville, c'est bien. Mais soutenir des communautés rurales qui vivent parfois dans le dénuement, c'est tout aussi essentiel dans la vision portée par ZOH-HENAN depuis ses débuts.

Le chef du village a, en retour, remercié chaleureusement ZOH-HENAN au nom de toute la communauté. Ses mots, prononcés dans un mélange de français et de dioula, résumaient ce que tout le monde ressentait : la gratitude, certes, mais surtout la joie de ne pas être oublié. "Quand une grande entreprise vient jusque chez nous, cela veut dire que nous comptons", a-t-il dit, sous les applaudissements des habitants rassemblés.

Les enfants, eux, n'ont pas attendu la fin des discours pour exprimer leur joie. Les cris de bonheur, les sourires, les petites mains tendues vers les paquets de crayons et de cahiers — ces images resteront gravées dans la mémoire de tous ceux qui ont fait le déplacement ce jour-là.

Cette journée du 21 décembre 2025 à M'batto s'inscrit dans une démarche de responsabilité sociale que ZOH-HENAN Immobilier a choisi de porter avec cohérence et régularité. Bâtir la Côte d'Ivoire de demain, c'est aussi tisser des liens durables avec les communautés qui en sont les gardiens. C'est reconnaître que le développement immobilier et le développement humain sont indissociables. C'est agir, concrètement, pour que personne ne soit laissé au bord du chemin.

À la communauté villageoise de M'batto, à ses anciens, à ses femmes et à ses enfants : ZOH-HENAN vous remercie de votre accueil, de votre confiance et de votre hospitalité. Cette visite n'est pas la dernière. Les liens tissés ce jour-là sont faits pour durer.`,
    date: "21 Décembre 2025",
    categorie: "Responsabilité Sociale",
    img: "/images/m'batto bouake/IMG_1482.jpg",
    photos: [
      "/images/m'batto bouake/IMG_1585.jpg",
      "/images/m'batto bouake/IMG_1482.jpg",
      "/images/m'batto bouake/IMG_1522.jpg",
      "/images/m'batto bouake/IMG_1538.jpg",
      "/images/m'batto bouake/IMG_1540.jpg",
      "/images/m'batto bouake/IMG_1553.jpg",
      "/images/m'batto bouake/IMG_1444.jpg",
      "/images/m'batto bouake/IMG_1446.jpg",
      "/images/m'batto bouake/IMG_1457.jpg",
      "/images/m'batto bouake/IMG_1460.jpg",
      "/images/m'batto bouake/IMG_1465.jpg",
      "/images/m'batto bouake/IMG_1468.jpg",
      "/images/m'batto bouake/IMG_1408.jpg",
      "/images/m'batto bouake/IMG_1413.jpg",
      "/images/m'batto bouake/IMG_1415.jpg",
      "/images/m'batto bouake/IMG_1393.jpg",
      "/images/m'batto bouake/IMG_1400.jpg",
      "/images/m'batto bouake/IMG_1605.jpg",
      "/images/m'batto bouake/IMG_1613.jpg",
      "/images/m'batto bouake/IMG_1621.jpg",
      "/images/m'batto bouake/IMG_1633.jpg",
      "/images/m'batto bouake/IMG_1641.jpg",
    ],
  },
  {
    slug: "journees-immobilier-sgci-2025",
    titre: "ZOH-HENAN aux Journées de l'Immobilier de la Société Générale CI — Une Tournée à Travers Tout Abidjan",
    extrait: "De mai à juillet 2025, ZOH-HENAN Immobilier a participé aux Journées de l'Immobilier organisées par la Société Générale Côte d'Ivoire dans sept agences à travers Abidjan, allant à la rencontre des Ivoiriens là où ils vivent.",
    contenu: `Courant 2025, la Société Générale Côte d'Ivoire lançait une initiative originale et ambitieuse : organiser des "Journées de l'Immobilier" itinérantes dans sept de ses agences réparties aux quatre coins d'Abidjan. L'objectif était clair — rapprocher les clients bancaires des acteurs sérieux de l'immobilier local, créer des ponts concrets entre financement et acquisition, et démocratiser l'accès à la propriété pour les Ivoiriens actifs et bancarisés. ZOH-HENAN Immobilier, sélectionné parmi les promoteurs partenaires pour la solidité de son projet et la qualité de ses offres, a participé à l'intégralité de cette tournée entre mai et juillet 2025.

Les 26 et 27 mai, la tournée débutait au Plateau Dokui, dans le nord d'Abidjan. L'agence SGCI du quartier accueillait ses clients avec un dispositif soigné : espace conseil dédié, brochures, plans et visuels de la Cité Prestige. Dès les premières heures, le flux de visiteurs fut soutenu. Les conseillers ZOH-HENAN présentaient les différentes gammes de villas — du modèle SAPHIR 3 pièces au PRESTIGE 6 pièces — en détaillant les modalités de financement, les garanties légales et les délais de livraison. Les premiers rendez-vous de suivi furent pris avant la fin de la journée.

Les 28 et 30 mai, l'étape Ficgayo, dans l'ouest de la ville, révélait un autre profil de public : salariés du secteur privé, commerçants, jeunes actifs en début de carrière. La réalité géographique jouait en faveur du projet — Bingerville, accessible depuis l'autoroute du Nord, n'est qu'à une vingtaine de minutes du centre d'Abidjan. Beaucoup de visiteurs repartaient avec la conviction que la propriété était moins inaccessible qu'ils ne le croyaient.

Les 2 et 3 juin, l'agence Marine (Abidjan Sud) attirait un profil plus institutionnel : fonctionnaires, enseignants, professionnels de la santé. La stabilité de l'emploi public conjuguée aux offres de financement SGCI rendait l'acquisition d'une villa à la Cité Prestige particulièrement attractive. Les échanges étaient posés, documentés, professionnels — et plusieurs dossiers furent ouverts dès cette étape.

Les 26 et 27 juin marquèrent sans doute le moment fort de la tournée avec l'étape aux 2 Plateaux Vallons, quartier résidentiel emblématique d'Abidjan Est et haut lieu de la classe moyenne supérieure. Ici, les visiteurs étaient particulièrement exigeants et bien informés. Les questions portaient sur les rendements locatifs potentiels, la plus-value patrimoniale à terme, la qualité des finitions, la conformité aux normes de construction. C'est exactement pour ce public que la Cité Prestige a été conçue : une offre haut de gamme à un prix juste.

Les 30 juin et 1er juillet, l'étape au Siège de la SGCI (Abidjan Centre) prenait une dimension institutionnelle particulière. C'était l'occasion de renforcer les liens entre les équipes commerciales de ZOH-HENAN et les directions bancaires, d'explorer de nouvelles formules de co-financement et d'affiner les conditions préférentielles réservées aux clients SGCI souhaitant acquérir une villa à la Cité Prestige.

Les 3 et 4 juillet, l'agence Riviera Golf accueillait un public cosmopolite et aisé, composé de résidents de la Riviera et de la Cocody haut-standing. Les discussions dépassaient souvent le cadre de la première acquisition pour aborder la constitution d'un patrimoine immobilier ou l'investissement locatif dans la communauté ZOH-HENAN.

Enfin, les 7 et 8 juillet, la tournée se concluait à Bassam, la cité historique classée au patrimoine UNESCO et porte de la Comoé Sud. Grand-Bassam attire une communauté d'expatriés, de retraités et de cadres ivoiriens épris de calme et de qualité de vie. La proximité de la Cité Prestige de Bingerville avec cet environnement valorisé fut un argument décisif pour beaucoup.

Au total, cette tournée de 44 jours à travers sept agences SGCI a permis à ZOH-HENAN Immobilier de rencontrer des centaines de clients potentiels aux profils extrêmement diversifiés. Elle a confirmé une réalité que nous savions mais qui s'est trouvée ici magnifiquement illustrée : en Côte d'Ivoire, le désir de propriété est universel. Il traverse les quartiers, les générations, les catégories socioprofessionnelles. ZOH-HENAN Immobilier a pour mission d'y répondre, un foyer à la fois.`,
    date: "08 Juillet 2025",
    categorie: "Partenariat",
    img: "/images/actualites/journees-sgci-2025/cover.jpg",
    photos: [
      "/images/actualites/journees-sgci-2025/cover.jpg",
    ],
    hidden: true,
  },
  {
    slug: "ceremonie-independance-mbatto-bouake-2025",
    titre: "ZOH-HENAN à la Fête Nationale de M'batto : Un Défilé, une Fierté, une Communion",
    extrait: "Le 7 août 2025, ZOH-HENAN Immobilier était présent à la cérémonie officielle de la fête nationale à M'batto, Bouaké, marquée par un défilé impressionnant et une atmosphère de fête et de fierté nationale.",
    contenu: `Il y a des rendez-vous avec l'histoire qui se vivent debout, au soleil, avec la fierté plein le cœur et le drapeau dans les yeux. Le 7 août 2025, journée de la fête nationale de Côte d'Ivoire, ZOH-HENAN Immobilier était présent à M'batto, dans la région de Bouaké, pour partager avec la communauté villageoise l'un des moments les plus symboliques du calendrier républicain.

Le 7 août — date de l'indépendance de la Côte d'Ivoire depuis 1960 — est bien plus qu'un jour férié en Côte d'Ivoire. C'est un rendez-vous civique, une célébration de la souveraineté retrouvée, un hommage aux pionniers qui ont voulu bâtir un pays libre et debout en Afrique de l'Ouest. Dans les grandes villes comme dans les villages les plus reculés, la journée se vit avec solennité et joie mêlées. M'batto n'a pas dérogé à la règle.

Dès les premières heures de la matinée, le village s'était mis en branle. Les tenues officielles côtoyaient les boubous colorés, les enfants en uniformes scolaires formaient des rangs serrés sous l'œil attentif de leurs maîtres, et les anciens du village, assis à l'ombre des arbres, regardaient avec émotion les préparatifs s'organiser. Une scène à la fois ordinaire et extraordinaire — le quotidien de la Côte d'Ivoire profonde en train de s'habiller pour l'histoire.

La cérémonie officielle a débuté à la mi-matinée. Les autorités locales — chef de village, représentants de l'administration, responsables des associations — ont pris place sur l'estrade dressée pour l'occasion. Les drapeaux ivoiriens, orange, blanc et vert, flottaient au vent du harmattan encore présent en ce début d'août. L'hymne national a résonné dans l'air chaud de Bouaké, chanté à l'unisson par les habitants rassemblés. Un moment de grâce, de communion, où les différences s'effacent devant le sentiment partagé d'appartenir à une même nation.

Le temps fort de la matinée fut sans conteste le défilé. Soigneusement préparé pendant des semaines, il a rassemblé les élèves des différentes écoles de M'batto et des villages environnants, les associations de femmes, les groupes de jeunes, les forces de sécurité locales et les représentants des différents corps de métiers. Chaque groupe avançait avec une discipline et une tenue impeccables, au rythme des tam-tams et des fanfares qui donnaient à l'ensemble une allure de grand spectacle populaire.

La délégation de ZOH-HENAN Immobilier, accueillie en invitée d'honneur aux côtés des personnalités locales, a suivi le défilé avec une attention et une émotion sincères. Il y a quelque chose de profondément touchant dans ces moments où la grandeur nationale se joue à l'échelle d'un village — où un enfant en chemise blanche qui marche au pas devient, le temps d'un défilé, ambassadeur de tout un pays.

La présence de ZOH-HENAN à cet événement n'est pas le fruit du hasard. Elle témoigne d'une conviction profonde : une entreprise qui construit le pays ne peut pas se limiter aux seuls murs qu'elle élève. Elle doit aussi être présente dans les moments qui fondent l'identité collective, qui renforcent le sentiment d'appartenance, qui rappellent à chacun pourquoi il est important de bâtir, d'espérer et d'avancer ensemble. Le 7 août, ZOH-HENAN a fait sienne la fête nationale de M'batto. Et la communauté de M'batto a, en retour, adopté ZOH-HENAN comme l'une des siennes.

La cérémonie s'est conclue dans une atmosphère festive, avec des danses traditionnelles, des discours d'espoir portés par les jeunes générations, et des échanges chaleureux entre les délégués ZOH-HENAN et les habitants. Des liens se sont noués, des sourires se sont échangés, des engagements ont été renouvelés.

À toute la communauté de M'batto, à ses enfants qui ont défilé avec tant de cœur, à ses anciens qui gardent vivante la mémoire de l'indépendance : ZOH-HENAN vous dit merci. Merci pour votre accueil, merci pour votre fierté communicative, et merci de nous rappeler, à chaque rendez-vous comme celui-ci, pourquoi ce pays vaut la peine qu'on le bâtisse chaque jour avec soin, avec passion et avec amour.`,
    date: "07 Août 2025",
    categorie: "Vie d'entreprise",
    img: "/images/independance/DSC_9155.jpg",
    photos: [
      "/images/independance/DSC_9538-2.jpg",
      "/images/independance/DSC_9634.jpg",
      "/images/independance/DSC_9644.jpg",
      "/images/independance/DSC_9646.jpg",
      "/images/independance/DSC_9663.jpg",
      "/images/independance/DSC_9669-2.jpg",
      "/images/independance/DSC_9679.jpg",
      "/images/independance/DSC_9697.jpg",
      "/images/independance/DSC_9155.jpg",
      "/images/independance/DSC_9276.jpg",
      "/images/independance/DSC_9986.jpg",
      "/images/independance/DSC_0158.jpg",
      "/images/independance/DSC_0162.jpg",
      "/images/independance/DSC_0176-2.jpg",
      "/images/independance/DSC_0205.jpg",
      "/images/independance/DSC_0205-2.jpg",
      "/images/independance/DSC_0220.jpg",
      "/images/independance/DSC_0231.jpg",
      "/images/independance/DSC_0245.jpg",
      "/images/independance/DSC_0121.jpg",
      "/images/independance/DSC_9765.jpg",
      "/images/independance/DSC_9831.jpg",
      "/images/independance/DSC_9331.jpg",
    ],
  },
  {
    slug: "obtention-agrement-promoteur",
    titre: "ZOH-HENAN obtient son agrément Promoteur Immobilier",
    extrait: "Le Ministère de la Construction a officiellement délivré l'agrément Promoteur Immobilier à ZOH-HENAN GUOJI, une étape clé dans notre développement.",
    contenu: `ZOH-HENAN GUOJI a reçu des mains du Ministère de la Construction, du Logement et de l'Urbanisme son agrément officiel en tant que Promoteur Immobilier agréé de Côte d'Ivoire.

Cet agrément vient couronner plusieurs années de travail rigoureux, de conformité aux normes et de construction de la confiance avec les autorités ivoiriennes. Il confirme que ZOH-HENAN GUOJI répond à toutes les exigences légales et techniques requises pour exercer l'activité de promotion immobilière en Côte d'Ivoire.

Cet agrément s'ajoute à l'Arrêté de Concession Définitive (ACD) et au Certificat de Mutation de Propriété Foncière (CMPF) déjà obtenus, renforçant ainsi le cadre juridique solide qui protège nos clients et investisseurs.

La direction de ZOH-HENAN GUOJI tient à remercier les équipes du Ministère pour leur accompagnement tout au long du processus.`,
    date: "5 Septembre 2025",
    categorie: "Actualité",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
    ],
    hidden: true,
  },
  {
    slug: "salon-immobilier-8e-edition-2025",
    titre: "ZOH-HENAN au Salon de l'Immobilier — 8ème Édition : Deux Jours de Rencontres et de Succès",
    extrait: "Les 1er et 2 février 2025, ZOH-HENAN Immobilier participait à la 8ème édition du Salon de l'Immobilier au Parc des Expositions d'Abidjan. Deux journées intenses, des centaines de visiteurs et un succès retentissant pour nos équipes.",
    contenu: `Le Salon de l'Immobilier d'Abidjan est l'un des rendez-vous professionnels les plus structurants du secteur en Côte d'Ivoire et dans la sous-région. Chaque édition rassemble sous un même toit des promoteurs, des architectes, des établissements bancaires, des notaires et des particuliers en quête d'informations et d'opportunités. La 8ème édition, tenue les 1er et 2 février 2025 au Parc des Expositions d'Abidjan, promettait d'être un millésime exceptionnel — et elle tint toutes ses promesses.

Pour ZOH-HENAN Immobilier, cette participation représentait un moment stratégique. La Cité Prestige de Bingerville avait gagné en visibilité tout au long de l'année 2024. Il s'agissait désormais de transformer cette notoriété en rencontres concrètes, en échanges approfondis, en dossiers qualifiés. L'équipe avait travaillé pendant des semaines pour préparer le stand : visuels professionnels haute définition, démonstrations 3D, brochures détaillées, fiches techniques de chaque gamme de villa et un argumentaire rodé pour répondre à toutes les questions.

Le premier jour, dès l'ouverture des portes, le stand ZOH-HENAN attira immédiatement l'attention. Des familles entières s'arrêtèrent longuement devant les plans de masse de la Cité Prestige, impressionnées par l'envergure du projet — 619 villas sur 31 hectares viabilisés, avec routes intérieures, espaces verts et voiries entièrement réalisés. Des investisseurs posèrent des questions précises sur les rendements locatifs. Des membres de la diaspora ivoirienne furent rassurés par la solidité du dossier juridique : Arrêté de Concession Définitive, Certificat de Mutation de Propriété Foncière, agréments ministériels. Les conseillers enchaînèrent les rendez-vous sans jamais perdre en qualité d'écoute.

La fin de la première journée fut marquée par un constat unanime : véritable réussite. Les contacts pris, les questions reçues, l'intérêt manifeste du public — tout indiquait que ZOH-HENAN avait touché juste. Le salon n'était pas encore terminé que les premiers rendez-vous de suivi post-événement étaient déjà planifiés.

Le deuxième jour confirma et amplifia ce succès. Plusieurs visiteurs de la veille revinrent avec leurs proches pour approfondir les discussions entamées. Des actes de réservation furent signés directement sur le stand — signal fort de la confiance que ZOH-HENAN avait su installer en 48 heures à peine.

Au-delà des résultats commerciaux, cette 8ème édition du Salon de l'Immobilier a été l'occasion de rencontres humaines précieuses. Des familles qui partagent leur rêve d'un chez-soi. Des couples qui réalisent que la propriété n'est pas un luxe inaccessible. Des entrepreneurs qui voient dans la Cité Prestige une opportunité patrimoniale rare. Ce sont ces rencontres qui donnent tout leur sens au travail quotidien des équipes ZOH-HENAN.

Merci à toutes celles et ceux qui sont venus à notre rencontre au Parc des Expositions. Rendez-vous à la prochaine édition — avec encore plus de projets à vous présenter.`,
    date: "02 Février 2025",
    categorie: "Événement",
   img: "/images/actualites/salon-immobilier-2025/IMG_5056.webp",
photos: [
      "/images/actualites/salon-immobilier-2025/IMG_5587.webp",
"/images/actualites/salon-immobilier-2025/IMG_5577.webp",
"/images/actualites/salon-immobilier-2025/IMG_5575.webp",
"/images/actualites/salon-immobilier-2025/IMG_5542.webp",
"/images/actualites/salon-immobilier-2025/IMG_5530.webp",
"/images/actualites/salon-immobilier-2025/IMG_5524.webp",
"/images/actualites/salon-immobilier-2025/IMG_5517.webp",
"/images/actualites/salon-immobilier-2025/IMG_5500.webp",
"/images/actualites/salon-immobilier-2025/IMG_5375.webp",
"/images/actualites/salon-immobilier-2025/IMG_5362.webp",
"/images/actualites/salon-immobilier-2025/IMG_5347.webp",
"/images/actualites/salon-immobilier-2025/IMG_5166.webp",
"/images/actualites/salon-immobilier-2025/IMG_5140.webp",
"/images/actualites/salon-immobilier-2025/IMG_5150.webp",
"/images/actualites/salon-immobilier-2025/IMG_5108.webp",
"/images/actualites/salon-immobilier-2025/IMG_5075.webp",
"/images/actualites/salon-immobilier-2025/IMG_5080.webp",
"/images/actualites/salon-immobilier-2025/IMG_5071.webp",
"/images/actualites/salon-immobilier-2025/IMG_5056.webp",
"/images/actualites/salon-immobilier-2025/IMG_5778.webp",
"/images/actualites/salon-immobilier-2025/IMG_5747.webp",
"/images/actualites/salon-immobilier-2025/IMG_5685.webp",
"/images/actualites/salon-immobilier-2025/IMG_5696.webp",
"/images/actualites/salon-immobilier-2025/IMG_5701.webp",
"/images/actualites/salon-immobilier-2025/IMG_5675.webp",
"/images/actualites/salon-immobilier-2025/IMG_5653.webp",
"/images/actualites/salon-immobilier-2025/IMG_5643.webp",
    ],
  },
  {
    slug: "concert-nestor-david-2024",
    titre: "ZOH-HENAN au Concert de Frère Nestor David — Une Soirée de Grâce et de Partage",
    extrait: "Le dimanche 29 décembre 2024, ZOH-HENAN Immobilier était présent au concert exceptionnel d'adoration de Frère Nestor David. Une soirée de communion, de joie et d'échanges — ponctuée de bons de réduction exclusifs pour les participants.",
    contenu: `Le dimanche 29 décembre 2024, à quelques jours à peine de la nouvelle année, Abidjan vivait un moment musical et spirituel hors du commun. Frère Nestor David, l'une des figures les plus populaires du gospel et de la musique chrétienne en Côte d'Ivoire, donnait un concert exceptionnel d'adoration qui allait rassembler des milliers de fidèles et d'amoureux de la musique. ZOH-HENAN Immobilier était là.

La présence de ZOH-HENAN à cet événement n'est pas le fruit du hasard. Elle témoigne d'une conviction portée depuis les origines de l'entreprise : être présente dans la vie de ses clients, là où ils se trouvent, partager leurs moments de joie, de foi et de célébration. Le chant, la prière, la communion autour de valeurs communes — autant de réalités proches de celles qui guident ZOH-HENAN au quotidien : la confiance, la sincérité, l'engagement humain et la construction d'un avenir meilleur pour les familles ivoiriennes.

Frère Nestor David est une figure à part entière dans le paysage musical ivoirien. Ses œuvres traversent les confessions, les générations et les frontières géographiques. Il rassemble à chaque concert une foule diverse, unie par la musique et la foi. Ce dimanche 29 décembre, la salle était comble, l'atmosphère électrique et le programme d'une qualité exceptionnelle. Des morceaux puissants, une scène habitée, un public conquis dès les premières notes.

L'équipe ZOH-HENAN, déployée avec discrétion et professionnalisme, profita de la pause pour aller à la rencontre du public. L'occasion était idéale : des milliers de personnes rassemblées, dans un état d'esprit ouvert, heureux et réceptif. Des bons de réduction exclusifs furent distribués aux chanceux qui échangèrent avec nos conseillers — un geste de générosité et de reconnaissance envers une communauté fidèle, pour les remercier de leur confiance et les encourager à franchir le pas vers la propriété.

Les échanges furent nombreux et chaleureux. Certains participants connaissaient déjà ZOH-HENAN et la Cité Prestige de Bingerville. D'autres découvraient pour la première fois nos projets et repartaient avec de la documentation, des contacts et de la curiosité. Plusieurs d'entre eux furent recontactés dans les semaines suivantes et entamèrent leur démarche d'acquisition.

Cette soirée du 29 décembre restera comme un exemple de ce que ZOH-HENAN Immobilier cherche à incarner : une entreprise humaine, proche de son public, qui sait sortir des sentiers battus pour aller là où bat le cœur de la communauté ivoirienne. L'immobilier, c'est d'abord des familles. Et les familles, c'est d'abord des gens — avec leurs joies, leurs célébrations et leurs rêves. ZOH-HENAN est là pour les accompagner.

Merci à tous ceux qui ont échangé avec nous ce soir-là. Restez connectés — les surprises ne font que commencer.`,
    date: "29 Décembre 2024",
    categorie: "Vie d'entreprise",
    img: "/images/actualites/concert-nestor-david-2024/475267418_122154056876352907_8299280081389996389_n.jpg",
    photos: [
      "/images/actualites/concert-nestor-david-2024/475183841_122154056756352907_7299609166237097733_n.jpg",
      "/images/actualites/concert-nestor-david-2024/475267418_122154056876352907_8299280081389996389_n.jpg",
      "/images/actualites/concert-nestor-david-2024/475594688_122154056816352907_8460544103201414485_n.jpg",
      "/images/actualites/concert-nestor-david-2024/475360190_122154056420352907_8772355621899218781_n.jpg",
    ],
  },
  {
    slug: "journee-femme-2025",
    titre: "Le 8 Mars 2025 à ZOH-HENAN — Célébration de la Journée Internationale des Droits de la Femme",
    extrait: "Le 8 mars 2025, ZOH-HENAN Immobilier a célébré la Journée Internationale des Droits de la Femme avec ses collaboratrices dans une ambiance festive et chaleureuse.",
    contenu: `Le 8 mars 2025, ZOH-HENAN Immobilier a une nouvelle fois honoré la Journée Internationale des Droits de la Femme en célébrant toutes les femmes qui font la force de l'entreprise au quotidien.

Cette journée a été l'occasion de réunir collaboratrices, partenaires et amies autour d'un programme festif et chaleureux, dans l'esprit qui caractérise ZOH-HENAN : proximité, sincérité et reconnaissance.

Chez ZOH-HENAN Immobilier, les femmes occupent des positions clés à tous les niveaux de l'organisation. Cette édition 2025 a permis de réaffirmer les valeurs d'égalité, de respect et d'inclusion qui guident l'entreprise depuis ses débuts.

À toutes les femmes de ZOH-HENAN — collaboratrices, partenaires, clientes — merci pour votre engagement, votre talent et votre confiance. Vous êtes le cœur battant de cette aventure.`,
    date: "08 Mars 2025",
    categorie: "Vie d'entreprise",
    img: "/images/actualites/journee-femme-2025/IMG_1302.jpg",
    photos: [
      "/images/actualites/journee-femme-2025/IMG_1302.jpg",
      "/images/actualites/journee-femme-2025/IMG_1173.jpg",
      "/images/actualites/journee-femme-2025/IMG_1173-3.jpg",
      "/images/actualites/journee-femme-2025/IMG_1184.jpg",
      "/images/actualites/journee-femme-2025/IMG_1224.jpg",
      "/images/actualites/journee-femme-2025/IMG_1239.jpg",
      "/images/actualites/journee-femme-2025/IMG_1254.jpg",
      "/images/actualites/journee-femme-2025/IMG_1263.jpg",
      "/images/actualites/journee-femme-2025/IMG_1272.jpg",
      "/images/actualites/journee-femme-2025/IMG_1275.jpg",
      "/images/actualites/journee-femme-2025/IMG_1278.jpg",
      "/images/actualites/journee-femme-2025/IMG_1281.jpg",
      "/images/actualites/journee-femme-2025/IMG_1289.jpg",
      "/images/actualites/journee-femme-2025/IMG_1305.jpg",
      "/images/actualites/journee-femme-2025/IMG_1160.jpg",
    ],
  },
  {
    slug: "journee-femme-2024",
    titre: "Le 8 Mars à ZOH-HENAN — Célébration de la Journée Internationale des Droits de la Femme",
    extrait: "Le 8 mars 2024, ZOH-HENAN Immobilier a célébré la Journée Internationale des Droits de la Femme avec ses collaboratrices dans une ambiance festive et chaleureuse, baptisée « Moments ZOH! ».",
    contenu: `Il y a des journées qui marquent l'agenda international, mais qui ne prennent leur pleine dimension que lorsqu'elles sont vécues de l'intérieur, au sein d'une équipe, dans la chaleur d'un collectif soudé. Le 8 mars 2024, Journée Internationale des Droits de la Femme, ZOH-HENAN Immobilier a choisi de faire de cette date bien plus qu'un symbole : un véritable moment de fête, de reconnaissance et de joie partagée. L'événement a été baptisé « Moments ZOH! » — et le nom résume parfaitement l'atmosphère qui a régné ce jour-là.

ZOH-HENAN Immobilier a la particularité, rare dans le secteur immobilier en Côte d'Ivoire, d'être une entreprise où les femmes occupent des positions centrales à tous les niveaux de l'organisation. La Présidente du Conseil d'Administration — Chairwoman of the Board — incarne depuis les origines une vision sereine et ambitieuse du leadership féminin dans les affaires. À ses côtés, la Directrice Commerciale, la Directrice Marketing & Communication et de nombreuses collaboratrices à tous les échelons de la hiérarchie prouvent chaque jour que les femmes décident, agissent, innovent et inspirent chez ZOH-HENAN.

La célébration du 8 mars 2024 a donné lieu à un programme vibrant, pensé pour que chaque femme présente se sente valorisée, célébrée et aimée. Musique, témoignages, messages de reconnaissance de la direction, moments de partage informels, petites attentions — chaque détail a été soigné pour créer une atmosphère à la fois festive et sincère. Des images et vidéos ont immortalisé la journée, témoignant d'une énergie communicative et d'une bonne humeur générale qui ont traversé tous les bureaux.

Mais au-delà de la fête, le 8 mars 2024 a été l'occasion de réaffirmer les engagements profonds de ZOH-HENAN Immobilier en matière d'égalité professionnelle. Rémunération équitable, accès réel aux postes de responsabilité, accompagnement de la maternité, respect absolu de chaque collaboratrice dans son environnement de travail — ces engagements ne sont pas des déclarations d'intention. Ils sont incarnés au quotidien, bien avant que les hommages d'un 8 mars leur donnent un nom.

Être une femme chez ZOH-HENAN, c'est avoir accès aux mêmes ambitions que les hommes. C'est être écoutée, formée, soutenue et promue sur la base du mérite et de l'engagement. C'est évoluer dans une entreprise qui considère que la diversité n'est pas une contrainte à gérer, mais une force à cultiver.

À toutes les femmes de ZOH-HENAN Immobilier — collaboratrices, partenaires, clientes, amies — cette journée du 8 mars 2024 a envoyé un message simple, sincère et définitif : vous comptez. Vous êtes le cœur battant de cette aventure humaine et professionnelle. Hier, aujourd'hui et toujours.`,
    date: "08 Mars 2024",
    categorie: "Vie d'entreprise",
    img: "/images/actualites/journee-femme-2024/cover.jpg",
    photos: [
      "/images/actualites/journee-femme-2024/cover.jpg",
    ],
    hidden: true,
  },
];
