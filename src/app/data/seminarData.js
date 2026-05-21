export const seminarData = {
  en: {
    title: "Building Knowledge Landscapes Across the Digital Humanities",
    subtitle: [
      { text: "/DH.arc", styles: ["italic", "font-bold"] },
      { text: " and " },
      { text: "DHLab", styles: ["italic", "font-bold"] },
      { text: " in dialogue" },
    ],
    date: "November 5th-7th 2025",
    location: "Aula Affreschi, Via Zamboni 34, 40126 Bologna",
    introductoryText: [
      [
        { text: "Three days of " },
        { text: "seminars", styles: ["font-bold"] },
        { text: " and " },
        { text: "workshops", styles: ["font-bold"] },
        { text: ", exploring key research and " },
        { text: "practices", styles: ["font-bold"] },
        { text: " in " },
        { text: "Digital Humanities", styles: ["font-bold"] },
        {
          text: ", establishing a methodological exchange between two leading research centers, the ",
        },
        { text: "/DH.arc", styles: ["font-bold"] },
        { text: " (Bologna) and the " },
        { text: "DHLab", styles: ["font-bold"] },
        {
          text: " (Amsterdam). Designed for researchers, students, cultural heritage professionals, and information and knowledge engineers.",
        },
      ],
      [
        { text: "Attendance was " },
        { text: "free", styles: ["font-bold"] },
        { text: " and open to all." },
      ],
    ],
    registration: {
      buttonText: "View Collection on Figshare",
      doiUrl: "https://doi.org/10.6084/m9.figshare.c.8135426",
      doiLabel: "DOI: 10.6084/m9.figshare.c.8135426",
    },
    about: {
      title: "About",
      description: [
        // Paragrafo 1 (complesso, con corsivo)
        [
          {
            text: "The Building Knowledge Landscapes Across the Digital Humanities: /DH.arc & DHLab in Dialogue",
            styles: ["italic"],
          },
          {
            text: " was a three-day seminar dedicated to relevant topics such as Knowledge Organization, Representation, Visualization, and Extraction within Humanities and Cultural Heritage Domain. Throughout the seminar, particular emphasis was placed on examining approaches and practices adopted within the Digital Humanities to highlight how diverse perspectives can address similar challenges in the field.",
          },
        ],
        // Paragrafo 2 (complesso, con link e corsivo)
        [
          {
            text: "At the core of the initiative is the methodological exchange between two prominent Digital Humanities research centers: the ",
          },
          {
            text: "/DH.arc - Digital Humanities Research Center of the University of Bologna",
            styles: ["italic"],
            href: "https://site.unibo.it/dharc/en",
          },
          { text: " and the " },
          {
            text: "Digital Humanities Research Lab of Amsterdam",
            href: "https://dhlab.huc.knaw.nl/",
          },
          {
            text: ". The format alternated between contributions from local speakers and invited guests, creating spaces for open debates and discussions. This structure aimed to foster meaningful dialogue between international scholars while creating concrete opportunities for collaborative research development in DH. The  series concluded with interactive workshops designed to bridge theoretical frameworks with practical applications in DH research.",
          },
        ],
        // Paragrafo 3 (semplice, solo testo)
        "The initiative was open to researchers at any level, students, cultural heritage professionals, and information and knowledge engineers. The contributions presented reflected research at different stages of development, ranging from exploratory ideas and pilot studies to established tools and mature projects.",
        // Paragrafo 4 (semplice)
        "The first two days were dedicated to talks following a seminar-style format. Each day opened with a keynote introducing the main theme, delivered by the two leading figures of the partner research centers: Prof. Francesca Tomasi (/DH.arc, University of Bologna) and Dr. Marieke van Erp (DHLab, Amsterdam). Day one explored Knowledge Organization and Visualization, while day two focused on Knowledge Extraction and, more generally, on Knowledge Practices.",
        // Paragrafo 5 (semplice)
        "The third and final day was entirely dedicated to two practical workshops. The first workshop introduced methods of text annotation showing how to build specific datasets from textual data using RDF. The second workshop explored different technologies for extracting and analyzing reading experiences in online book reviews.",
        // Paragrafo 6 (complesso, con link e corsivo)
        [
          {
            text: "This seminar was organized by PhD students at the University of Bologna as part of the ",
          },
          {
            text: "BolDH - Bologna Digital Humanities ecosystem",
            href: "https://dharc-org.github.io/boldh/",
          },
          { text: " of the University of Bologna, in collaboration with the " },
          {
            text: "/DH.arc - Digital Humanities Research Center of the University of Bologna",
            styles: ["italic"],
            href: "https://site.unibo.it/dharc/en",
          },
          { text: " and the " },
          {
            text: "Digital Humanities Research Lab of Amsterdam",
            href: "https://dhlab.huc.knaw.nl/",
          },
          { text: "." },
        ],
      ],
    },
    scheduleLabels: {
      title: "Program",
    },
    footer: {
      fundingText: "This event was funded by Fondazione Carisbo through the Cultura e Rigenerazione 2025 program and by Alma Mater Studiorum - University of Bologna.",
      fundingLinkCarisbo: "https://fondazionecarisbo.it/bandi-e-iniziative/cultura-e-rigenerazione/",
      fundingLinkUnibo: "https://ficlit.unibo.it/it",
    },
    schedule: [
      {
        dayTitle: "Day 1",
        date: "November 5, 2025",
        sessions: [
          {
            sessionTitle: "Opening and Keynote",
            chair: "Keynote Chair: Paola Italia",
            events: [
              { time: "10:00 - 10:30", type: "welcome", title: "Welcome" },
              {
                time: "10:30 - 11:00",
                type: "keynote",
                title: "Keynote",
                speaker: "Prof. Francesca Tomasi",
                link: "https://youtu.be/DOs9q_umkhk?si=8buv6qq2qpUAl6zw",
              },
            ],
          },
          {
            sessionTitle: "SESSION I: KNOWLEDGE ORGANIZATION AND VISUALIZATION",
            chair: "Session Chair: Joris van Zundert",
            events: [
              {
                time: "11:00 - 11:20",
                type: "talk",
                title:
                  "Literary Constraints and Combinatory Structures: Towards a Semantic Model",
                speaker: "Enrica Bruno",
                affiliation: "/DH.arc",
                link: "https://youtu.be/rGw4VdOU9KU?si=IGV-SDXgR_Nt61Zq",
              },
              {
                time: "11:20 - 11:40",
                type: "talk",
                title: "Encoding documents as Graphs using Markup",
                speaker: "Ronald Haentjens Dekker",
                affiliation: "DHLab",
              },
              { time: "11:40 - 12:10", type: "break", title: "Coffee Break" },
              {
                time: "12:10 - 12:30",
                type: "talk",
                title:
                  "Copyright and Computation: Rethinking Gadda through Open Data and Visualization",
                speaker: "Lorenzo Sabatino, Martina Pensalfini",
                affiliation: "/DH.arc",
                link: "https://youtu.be/YhruOhJnGpo?si=3Fe1KeP1LdvpWEhL",
              },
              {
                time: "12:30 - 12:50",
                type: "talk",
                title:
                  "Analyzing semantic change through centuries in Cultural Heritage documents",
                speaker: "Jiaqi Zhu",
                affiliation: "DHLab",
                link: "https://youtu.be/PtpuZfFCFkg?si=JiOYDp3BId8w55BU"
              },
              { time: "12:50 - 13:00", type: "qa", title: "Q&A" },
              { time: "13:00 - 14:30", type: "lunch", title: "Lunch Break" },
            ],
          },
          {
            sessionTitle:
              "SESSION II: KNOWLEDGE ORGANIZATION AND VISUALIZATION II",
            chair: "Session Chair: Marijn Koolen",
            events: [
              {
                time: "14:30 - 14:50",
                type: "talk",
                title:
                  "From Words to Images: A Framework for Modeling Ekphrasis",
                speaker: "Maria Francesca Bocchi, Carlo Teo Pedretti",
                affiliation: "/DH.arc",
                link: "https://youtu.be/U96sWCa__cU?si=tHsT_S8cGpyXvkgp",
              },
              {
                time: "14:50 - 15:10",
                type: "talk",
                title:
                  "Visualizing the Humanities: a survey of visualization practices, narrativity, and critical approaches in Digital Humanities projects",
                speaker: "Tommaso Battisti",
                affiliation: "/DH.arc",
                link: "https://youtu.be/4N_N2VKJe7Q?si=dvwuyKYVGHtZOeic",
              },
              { time: "15:10 - 15:40", type: "break", title: "Coffee Break" },
              {
                time: "15:40 - 16:00",
                type: "talk",
                title:
                  "Experimenting a semi-automatic approach based on online surveys to formalize unstructured knowledge in linked data",
                speaker: "Arianna Moretti, Sebastian Barzaghi",
                affiliation: "/DH.arc",
                link: "https://youtu.be/_hN7kVfgum8?si=Of4ZL1BvIHwuL80f",
              },
              {
                time: "16:00 - 16:20",
                type: "talk",
                title:
                  "From Data to Meaning: Narrative Visualization for Critical Thinking in Semantic Web Learning",
                speaker: "Giulia Renda",
                affiliation: "/DH.arc",
                link: "https://youtu.be/3Cw34AObe1c?si=sypvsQB7nd8NVDKK"
              },
              {
                time: "16:20 - 16:40",
                type: "talk",
                title: "Representing Born-digital Archives: from File Systems to Knowledge Graphs ",
                speaker: "Lucia Giagnolini",
                affiliation: "/DH.arc",
                link: "https://youtu.be/oAUUmju0yTM?si=M-gO8996M1hPUGMd",
              },
            ],
          },
          {
            sessionTitle: "SESSION III: Open debate",
            chair: "Debate Chair: Paolo Bonora",
            events: [
              {
                time: "16:40 - 17:30",
                type: "qa",
                title: "Q&A and Final Discussion",
              },
              { time: "17:30", type: "conclusion", title: "Conclusion" },
            ],
          },
        ],
      },
      {
        dayTitle: "Day 2",
        date: "November 6, 2025",
        sessions: [
          {
            sessionTitle: "Opening and Keynote",
            chair: "Keynote Chair: Francesca Tomasi",
            events: [
              { time: "10:00 - 10:30", type: "welcome", title: "Welcome" },
              {
                time: "10:30 - 11:00",
                type: "keynote",
                title: "Keynote",
                speaker: "Marieke van Erp",
                link: "https://youtu.be/XYkspIz1Jmg?si=nzOvjAsdLVcnew8_",
              },
            ],
          },
          {
            sessionTitle: "SESSION I: KNOWLEDGE EXTRACTION",
            chair: "Session Chair: Fabio Vitali",
            events: [
              {
                time: "11:00 - 11:20",
                type: "talk",
                title:
                  "Hardships in Narratological Modeling and Literary Language Processing",
                speaker: "Joris van Zundert",
                affiliation: "DHLab",
                link: "https://youtu.be/sDZZVUDvUVI?si=kFMdN4L5UoM83F4s"
              },
              {
                time: "11:20 - 11:40",
                type: "talk",
                title:
                  "Knowledge Extraction of Digital Hermeneutics: the Case of the Van den vos Reynaerde",
                speaker: "Andrea Schimmenti",
                affiliation: "/DH.arc",
                link: "https://youtu.be/ssmYXxz9R-8?si=KIhpjp4cdCg6I3WT"
              },
              { time: "11:40 - 12:10", type: "break", title: "Break" },
              {
                time: "12:10 - 12:30",
                type: "talk",
                title:
                  "Formulaic language in historical political-administrative corpora",
                speaker: "Marijn Koolen",
                affiliation: "DHLab",
                link: "https://youtu.be/-kBG-bimu4c?si=vpAP2lPsvBi9iVRB"
              },
              {
                time: "12:30 - 12:50",
                type: "talk",
                title:
                  "Automatic Extraction and Diachronic Analysis of Olfactory Language",
                speaker: "Teresa Paccosi",
                affiliation: "DHLab",
                link: "https://youtu.be/I_Fn9p0gN2I?si=nCkH97gfhsbjOvpe"
              },
              { time: "12:50 - 13:00", type: "qa", title: "Q&A" },
              { time: "13:00 - 14:30", type: "lunch", title: "Lunch Break" },
            ],
          },
          {
            sessionTitle: "SESSION II: KNOWLEDGE PRACTICES",
            chair: "Session Chair: Ivan Heibi",
            events: [
              {
                time: "14:30 - 14:50",
                type: "talk",
                title:
                  "Understanding questions: natural language queries and knowledge graphs",
                speaker: "Remo Grillo",
                affiliation: "/DH.arc",
                link: "https://youtu.be/lP0rR8P-ntc?si=yzwW8dl7OlZN94se"
              },
              {
                time: "14:50 - 15:10",
                type: "talk",
                title:
                  "What’s on the plate? Dutch culinary trends from historical recipes",
                speaker: "Gauri Bhagwat",
                affiliation: "DHLab",
                link: "https://youtu.be/cpAU29DfLFY?si=1dME0YnFplpvtRBV"
              },
              { time: "15:10 - 15:40", type: "break", title: "Coffee Break" },
              {
                time: "15:40 - 16:00",
                type: "talk",
                title:
                  "Scholarly Primitives Revisited (again): Building a Taxonomy of Scholarly Digital Objects",
                speaker: "Laurent Fintoni",
                affiliation: "/DH.arc",
                link: "https://youtu.be/s2tOcAakuBw?si=VimRbBctCT5LfIG6" 
              },
              {
                time: "16:00 - 16:20",
                type: "talk",
                title:
                  "Tracing the Art Market: A Digital-Semantic Workflow for the Zeri Foundation’s Historical Auction Records (1879-1929)",
                speaker: "Valentina Rossetti, Valentina Pasqual",
                affiliation: "/DH.arc",
                link: "https://youtu.be/ED9BxIcvJgw?si=KvhnQe8Ewnik8JZf"
              },
            ],
          },
          {
            sessionTitle: "SESSION III: Open debate",
            chair: "Debate Chair: Teresa Paccosi",
            events: [
              {
                time: "16:20 - 17:30",
                type: "qa",
                title: "Q&A and Final Discussion",
              },
              { time: "17:30", type: "conclusion", title: "Conclusion" },
            ],
          },
        ],
      },
      {
        dayTitle: "Day 3",
        date: "November 7, 2025",
        sessions: [
          {
            sessionTitle: "Workshops' Day",
            events: [
              { time: "09:00 - 09:30", type: "welcome", title: "Welcome" },
              {
                time: "09:30 - 11:00",
                type: "workshop",
                title: "Workshop: Semantic Annotation with INCEpTION",
                speaker: "Curated by Teresa Paccosi",
              },
              { time: "11:00 - 11:30", type: "break", title: "Coffee Break" },
              {
                time: "11:30 - 13:00",
                type: "workshop",
                title:
                  "Workshop: Analyzing multilingual dataset of online book reviews",
                speaker: "Curated by Marijn Koolen, Joris van Zundert",
              },
              {
                time: "13:00 - 13:15",
                type: "conclusion",
                title: "Feedback and Conclusion",
              },
            ],
          },
        ],
      },
    ],
  },
  it: {
    title: "Costruire Paesaggi di Conoscenza nelle Digital Humanities",
    subtitle: [
      { text: "/DH.arc", styles: ["italic", "font-bold"] },
      { text: " e " },
      { text: "DHLab", styles: ["italic", "font-bold"] },
      { text: " in dialogo" },
    ],
    date: "5-7 Novembre 2025",
    location: "Aula Affreschi, Via Zamboni 34, 40126 Bologna",
    introductoryText: [
      [
        { text: "Tre giorni di " },
        { text: "seminari", styles: ["font-bold"] },
        { text: " e " },
        { text: "workshop", styles: ["font-bold"] },
        { text: ", esplorando ricerche e " },
        { text: "pratiche", styles: ["font-bold"] },
        { text: " chiave nelle " },
        { text: "Digital Humanities", styles: ["font-bold"] },
        {
          text: ", stabilendo uno scambio metodologico tra due importanti centri di ricerca, il ",
        },
        { text: "/DH.arc", styles: ["font-bold"] },
        { text: " (Bologna) e il " },
        { text: "DHLab", styles: ["font-bold"] },
        {
          text: " (Amsterdam). Progettato per ricercatori, studenti, professionisti del patrimonio culturale e ingegneri dell'informazione e della conoscenza.",
        },
      ],
      [
        { text: "La partecipazione era " },
        { text: "gratuita", styles: ["font-bold"] },
        { text: " e aperta a tutti." },
      ],
    ],
    registration: {
      buttonText: "Visualizza la Collezione su Figshare",
      doiUrl: "https://doi.org/10.6084/m9.figshare.c.8135426",
      doiLabel: "DOI: 10.6084/m9.figshare.c.8135426",
    },
    about: {
      title: "Informazioni",
      description: [
        // Paragrafo 1 (complesso, con corsivo)
        [
          {
            text: "The Building Knowledge Landscapes Across the Digital Humanities: /DH.arc & DHLab in Dialogue",
            styles: ["italic"],
          },
          {
            text: " è stato un seminario di tre giorni dedicato a temi rilevanti quali l'Organizzazione, la Rappresentazione, la Visualizzazione e l'Estrazione della Conoscenza nell'ambito delle discipline umanistiche e del patrimonio culturale. Durante il seminario, è stata posta particolare enfasi sull'esame degli approcci e delle pratiche adottate nelle Digital Humanities per evidenziare come prospettive diverse possano affrontare sfide simili nel settore.",
          },
        ],
        // Paragrafo 2 (complesso, con link e corsivo)
        [
          {
            text: "Al centro dell'iniziativa era lo scambio metodologico tra due importanti centri di ricerca di Digital Humanities: il ",
          },
          {
            text: "/DH.arc - Digital Humanities Research Center of the University of Bologna",
            styles: ["italic"],
            href: "https://site.unibo.it/dharc/it", // Link aggiornato alla versione italiana
          },
          { text: " e il " },
          {
            text: "Digital Humanities Research Lab of Amsterdam",
            href: "https://dhlab.huc.knaw.nl/",
          },
          {
            text: ". Il formato alternava contributi di relatori locali e ospiti invitati, creando spazi per dibattiti aperti e discussioni. Questa struttura mirava a promuovere un dialogo significativo tra studiosi internazionali, offrendo al contempo opportunità concrete per lo sviluppo di ricerche collaborative nelle DH. La serie si è conclusa con workshop interattivi pensati per unire i quadri teorici con le applicazioni pratiche nella ricerca DH.",
          },
        ],
        // Paragrafo 3 (semplice, solo testo)
        "L'iniziativa era aperta a ricercatori di ogni livello, studenti, professionisti del patrimonio culturale e ingegneri dell'informazione e della conoscenza. I contributi presentati hanno riflesso ricerche a diversi stadi di sviluppo, spaziando da idee esplorative e studi pilota a strumenti consolidati e progetti maturi.",
        // Paragrafo 4 (semplice)
        "I primi due giorni sono stati dedicati a interventi in stile seminariale. Ogni giornata si è aperta con un keynote che introduceva il tema principale, tenuto dalle due figure di spicco dei centri di ricerca partner: la Prof.ssa Francesca Tomasi (/DH.arc, Università di Bologna) e la Dott.ssa Marieke van Erp (DHLab, Amsterdam). La prima giornata ha esplorato l'Organizzazione e la Visualizzazione della Conoscenza, mentre la seconda si è concentrata sull'Estrazione della Conoscenza e, più in generale, sulle Pratiche di Conoscenza.",
        // Paragrafo 5 (semplice)
        "Il terzo e ultimo giorno è stato interamente dedicato a due workshop pratici. Il primo workshop ha introdotto metodi di annotazione del testo, mostrando come costruire specifici dataset da dati testuali usando RDF. Il secondo workshop ha esplorato diverse tecnologie per estrarre e analizzare le esperienze di lettura nelle recensioni di libri online.",
        // Paragrafo 6 (complesso, con link e corsivo)
        [
          {
            text: "Questo seminario è stato organizzato da dottorandi dell'Università di Bologna come parte del ",
          },
          {
            text: "BolDH - Bologna Digital Humanities ecosystem",
            href: "https://dharc-org.github.io/boldh/",
          },
          { text: " dell'Università di Bologna, in collaborazione con il " },
          {
            text: "/DH.arc - Digital Humanities Research Center of the University of Bologna",
            styles: ["italic"],
            href: "https://site.unibo.it/dharc/it", // Link aggiornato alla versione italiana
          },
          { text: " e il " },
          {
            text: "Digital Humanities Research Lab of Amsterdam",
            href: "https://dhlab.huc.knaw.nl/",
          },
          { text: "." },
        ],
      ],
    },
    scheduleLabels: {
      title: "Programma",
    },
    footer: {
      fundingText: "L'evento è finanziato da Fondazione Carisbo attraverso il bando Cultura e Rigenerazione 2025 e da Alma Mater Studiorum - Università di Bologna.",
      fundingLinkCarisbo: "https://fondazionecarisbo.it/bandi-e-iniziative/cultura-e-rigenerazione/",
      fundingLinkUnibo: "https://ficlit.unibo.it/it",
    },
    schedule: [
      {
        dayTitle: "Giorno 1",
        date: "5 Novembre 2025",
        sessions: [
          {
            sessionTitle: "Apertura e Keynote",
            chair: "Keynote Chair: Paola Italia",
            events: [
              { time: "10:00 - 10:30", type: "welcome", title: "Benvenuto" },
              {
                time: "10:30 - 11:00",
                type: "keynote",
                title: "Keynote",
                speaker: "Prof. Francesca Tomasi",
                link: "https://youtu.be/DOs9q_umkhk?si=8buv6qq2qpUAl6zw",
              },
            ],
          },
          {
            sessionTitle:
              "SESSIONE I: ORGANIZZAZIONE E VISUALIZZAZIONE DELLA CONOSCENZA",
            chair: "Session Chair: Joris van Zundert",
            events: [
              {
                time: "11:00 - 11:20",
                type: "talk",
                title:
                  "Literary Constraints and Combinatory Structures: Towards a Semantic Model",
                speaker: "Enrica Bruno",
                affiliation: "/DH.arc",
                link: "https://youtu.be/rGw4VdOU9KU?si=IGV-SDXgR_Nt61Zq"
              },
              {
                time: "11:20 - 11:40",
                type: "talk",
                title: "Encoding documents as graphs using markup",
                speaker: "Ronald Haentjens Dekker",
                affiliation: "DHLab",
              },
              { time: "11:40 - 12:10", type: "break", title: "Pausa Caffè" },
              {
                time: "12:10 - 12:30",
                type: "talk",
                title:
                  "Copyright and Computation: Rethinking Gadda through Open Data and Visualization",
                speaker: "Lorenzo Sabatino, Martina Pensalfini",
                affiliation: "/DH.arc",
                link: "https://youtu.be/YhruOhJnGpo?si=3Fe1KeP1LdvpWEhL"
              },
              {
                time: "12:30 - 12:50",
                type: "talk",
                title:
                  "Analyzing semantic change through centuries in Cultural Heritage documents",
                speaker: "Jiaqi Zhu",
                affiliation: "DHLab",
                link: "https://youtu.be/PtpuZfFCFkg?si=JiOYDp3BId8w55BU",
              },
              { time: "12:50 - 13:00", type: "qa", title: "Q&A" },
              { time: "13:00 - 14:30", type: "lunch", title: "Pausa Pranzo" },
            ],
          },
          {
            sessionTitle:
              "SESSIONE II: ORGANIZZAZIONE E VISUALIZZAZIONE DELLA CONOSCENZA II",
            chair: "Session Chair: Marijn Koolen",
            events: [
              {
                time: "14:30 - 14:50",
                type: "talk",
                title:
                  "From Words to Images: A Framework for Modeling Ekphrasis",
                speaker: "Maria Francesca Bocchi, Carlo Teo Pedretti",
                affiliation: "/DH.arc",
                link: "https://youtu.be/U96sWCa__cU?si=tHsT_S8cGpyXvkgp"
              },
              {
                time: "14:50 - 15:10",
                type: "talk",
                              title:
                  "Visualizing the Humanities: a survey of visualization practices, narrativity, and critical approaches in Digital Humanities projects",
                speaker: "Tommaso Battisti",
                affiliation: "/DH.arc",
                link: "https://youtu.be/4N_N2VKJe7Q?si=dvwuyKYVGHtZOeic"
              },
              { time: "15:10 - 15:40", type: "break", title: "Pausa Caffè" },
              {
                time: "15:40 - 16:00",
                type: "talk",
                title:
                  "Experimenting a semi-automatic approach based on online surveys to formalize unstructured knowledge in linked data",
                speaker: "Arianna Moretti, Sebastian Barzaghi",
                affiliation: "/DH.arc",
                link: "https://youtu.be/_hN7kVfgum8?si=Of4ZL1BvIHwuL80f",
              },
              {
                time: "16:00 - 16:20",
                type: "talk",
                title:
                  "From Data to Meaning: Narrative Visualization for Critical Thinking in Semantic Web Learning",
                speaker: "Giulia Renda",
                affiliation: "/DH.arc",
                link: "https://youtu.be/3Cw34AObe1c?si=sypvsQB7nd8NVDKK",
              },
              {
                time: "16:20 - 16:40",
                type: "talk",
                title: "Born Digital Archives",
                speaker: "Lucia Giagnolini",
                affiliation: "/DH.arc",
                link: "https://youtu.be/oAUUmju0yTM?si=M-gO8996M1hPUGMd",
              },
            ],
          },
          {
            sessionTitle: "SESSIONE III: Dibattito aperto",
            chair: "Debate Chair: Paolo Bonora",
            events: [
              {
                time: "16:40 - 17:30",
                type: "qa",
                title: "Domande e Discussione Finale",
              },
              { time: "17:30", type: "conclusion", title: "Conclusione" },
            ],
          },
        ],
      },
      {
        dayTitle: "Giorno 2",
        date: "6 Novembre 2025",
        sessions: [
          {
            sessionTitle: "Apertura e Keynote",
            chair: "Keynote Chair: Francesca Tomasi",
            events: [
              { time: "10:00 - 10:30", type: "welcome", title: "Benvenuto" },
              {
                time: "10:30 - 11:00",
                type: "keynote",
                title: "Keynote",
                speaker: "Marieke van Erp",
                link: "https://youtu.be/XYkspIz1Jmg?si=nzOvjAsdLVcnew8_"
              },
            ],
          },
          {
            sessionTitle: "SESSIONE I: ESTRAZIONE DELLA CONOSCENZA",
            chair: "Session Chair: Fabio Vitali",
            events: [
              {
                time: "11:00 - 11:20",
                type: "talk",
                title:
                  "Hardships in Narratological Modeling and Literary Language Processing",
                speaker: "Joris van Zundert",
                affiliation: "DHLab",
                link: "https://youtu.be/sDZZVUDvUVI?si=-vzogoQm72b6YPDu"
              },
              {
                time: "11:20 - 11:40",
                type: "talk",
                title:
                  "Knowledge Extraction of Digital Hermeneutics of the Van den vos Reynaerde",
                speaker: "Andrea Schimmenti",
                affiliation: "/DH.arc",
                link: "https://youtu.be/ssmYXxz9R-8?si=KIhpjp4cdCg6I3WT",
              },
              { time: "11:40 - 12:10", type: "break", title: "Pausa" },
              {
                time: "12:10 - 12:30",
                type: "talk",
                title:
                  "Formulaic language in historical political-administrative corpora",
                speaker: "Marijn Koolen",
                affiliation: "DHLab",
                link: "https://youtu.be/-kBG-bimu4c?si=8IgfSDIuJJh8QOTo"
              },
              {
                time: "12:30 - 12:50",
                type: "talk",
                title:
                  "Automatic Extraction and Diachronic Analysis of Olfactory Language",
                speaker: "Teresa Paccosi",
                affiliation: "DHLab",
                link: "https://youtu.be/I_Fn9p0gN2I?si=nCkH97gfhsbjOvpe",
              },
              { time: "12:50 - 13:00", type: "qa", title: "Q&A" },
              { time: "13:00 - 14:30", type: "lunch", title: "Pausa Pranzo" },
            ],
          },
          {
            sessionTitle: "SESSIONE II: PRATICHE DI CONOSCENZA",
            chair: "Session Chair: Ivan Heibi",
            events: [
              {
                time: "14:30 - 14:50",
                type: "talk",
                title:
                  "Understanding questions: natural language queries and knowledge graphs",
                speaker: "Remo Grillo",
                affiliation: "/DH.arc",
                link: "https://youtu.be/lP0rR8P-ntc?si=EeiNEY56Vdf8dYJB"
              },
              {
                time: "14:50 - 15:10",
                type: "talk",
                title:
                  "What’s on the plate? Dutch culinary trends from historical recipes",
                speaker: "Gauri Bhagwat",
                affiliation: "DHLab",
                link: "https://youtu.be/cpAU29DfLFY?si=1dME0YnFplpvtRBV",
              },
              { time: "15:10 - 15:40", type: "break", title: "Pausa Caffè" },
              {
                time: "15:40 - 16:00",
                type: "talk",
                title:
                  "Scholarly Primitives Revisited (again): Building a Taxonomy of Scholarly Digital Objects",
                speaker: "Laurent Fintoni",
                affiliation: "/DH.arc",
                link: "https://youtu.be/s2tOcAakuBw?si=bDdZfDJQpm1PJ9ft"
              },
              {
                time: "16:00 - 16:20",
                type: "talk",
                title:
                  "Tracing the Art Market: A Digital-Semantic Workflow for the Zeri Foundation’s Historical Auction Records (1879-1929)",
                speaker: "Valentina Rossetti, Valentina Pasqual",
                affiliation: "/DH.arc",
                link: "https://youtu.be/ED9BxIcvJgw?si=T3pCdSu8WsmDKrvv"
              },
            ],
          },
          {
            sessionTitle: "SESSIONE III: Dibattito aperto",
            chair: "Debate Chair: Teresa Paccosi",
            events: [
              {
                time: "16:20 - 17:30",
                type: "qa",
                title: "Domande e Discussione Finale",
              },
              { time: "17:30", type: "conclusion", title: "Conclusione" },
            ],
          },
        ],
      },
      {
        dayTitle: "Giorno 3",
        date: "7 Novembre 2025",
        sessions: [
          {
            sessionTitle: "Giornata dei Workshop",
            events: [
              { time: "09:00 - 09:30", type: "welcome", title: "Benvenuto" },
              {
                time: "09:30 - 11:00",
                type: "workshop",
                title: "Workshop: Semantic Annotation with INCEpTION",
                speaker: "A cura di Teresa Paccosi",
              },
              { time: "11:00 - 11:30", type: "break", title: "Pausa Caffè" },
              {
                time: "11:30 - 13:00",
                type: "workshop",
                title:
                  "Workshop: Analyzing multilingual dataset of online book reviews",
                speaker: "A cura di Marijn Koolen, Joris van Zundert",
              },
              {
                time: "13:00 - 13:15",
                type: "conclusion",
                title: "Feedback e Conclusione",
              },
            ],
          },
        ],
      },
    ],
  },
};
