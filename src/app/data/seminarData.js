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
        { text: "DHARC", styles: ["font-bold"] },
        { text: " (Bologna) and the " },
        { text: "DHLab", styles: ["font-bold"] },
        {
          text: " (Amsterdam). Designed for researchers, students, cultural heritage professionals, and information and knowledge engineers.",
        },
      ],
      [
        { text: "Attendance is " },
        { text: "free", styles: ["font-bold"] },
        { text: ", but " },
        { text: "spots are limited", styles: ["font-bold"] },
        { text: "." },
      ],
      // Paragrafo 3 (con grassetto, corsivo e link email)
      [
        { text: "Reserve your place " },
        { text: "via the form below ", styles: ["font-bold"] },
        { text: "or by contacting " },
        {
          text: "know.land.unibo@gmail.com",
          // styles: ["italic"],
          href: "mailto:know.land.unibo@gmail.com",
        },
        { text: "." },
      ],
      [
        {
          text: "The seminar will also be streamed online. Please note that registration via the form is required to receive the streaming link.",
          styles: ["font-small-caps"],
        },
      ],
    ],
    registration: {
      buttonText: "Register Now",
      formUrl: "https://forms.gle/37oYuBjWpFffnV7s6",
      closingDate: "The form closes October 20th.",
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
            text: " is a three-day seminar dedicated to relevant topics such as Knowledge Organization, Representation, Visualization, and Extraction within Humanities and Cultural Heritage Domain. Throughout the seminar, particular emphasis will be placed on examining approaches and practices adopted within the Digital Humanities to highlight how diverse perspectives can address similar challenges in the field.",
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
            text: ". The format alternates between contributions from local speakers and invited guests, creating spaces for open debates and discussions. This structure aims to foster meaningful dialogue between international scholars while creating concrete opportunities for collaborative research development in DH. The series concludes with interactive workshops designed to bridge theoretical frameworks with practical applications in DH research.",
          },
        ],
        // Paragrafo 3 (semplice, solo testo)
        "The initiative is open to researchers at any level, students, cultural heritage professionals, and information and knowledge engineers. The contributions presented will reflect research at different stages of development, ranging from exploratory ideas and pilot studies to established tools and mature projects.",
        // Paragrafo 4 (semplice)
        "The first two days will be dedicated to talks following a conference-style format. Each day will open with a keynote introducing the main theme, delivered by the two leading figures of the partner research centers: Prof. Francesca Tomasi (DH.ARC, University of Bologna) and Dr. Marieke van Erp (DHLab, Amsterdam). Day one will explore Knowledge Organisation and Visualisation, while day two will focus on Knowledge Extraction and, more generally, on Knowledge Practices.",
        // Paragrafo 5 (semplice)
        "The third and final day will be entirely dedicated to two practical workshops. The first workshop will introduce methods of text annotation showing how to build specific datasets from textual data using RDF. The second workshop will explore different technologies for extracting and analysing reading experiences in online book reviews.",
        // Paragrafo 6 (complesso, con link e corsivo)
        [
          {
            text: "This seminar is being organised by PhD students at the University of Bologna as part of the ",
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
      fundingText: "This event is funded by Fondazione Carisbo through the Cultura e Rigenerazione 2025 program and by Alma Mater Studiorum - University of Bologna.",
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
                affiliation: "DH.ARC",
              },
              {
                time: "11:20 - 11:40",
                type: "talk",
                title: "Encoding documents as graphs using markup",
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
                affiliation: "DH.ARC",
              },
              {
                time: "12:30 - 12:50",
                type: "talk",
                title:
                  "Analyzing semantic change through centuries in Cultural Heritage documents",
                speaker: "Jiaqi Zhu",
                affiliation: "DHLab",
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
                affiliation: "DH.ARC",
              },
              {
                time: "14:50 - 15:10",
                type: "talk",
                title:
                  "Tracing the Art Market: A Digital-Semantic Workflow for the Zeri Foundation’s Historical Auction Records (1879-1929)",
                speaker: "Valentina Rossetti, Valentina Pasqual",
                affiliation: "DH.ARC",
              },
              { time: "15:10 - 15:40", type: "break", title: "Coffee Break" },
              {
                time: "15:40 - 16:00",
                type: "talk",
                title:
                  "Experimenting a semi-automatic approach based on online surveys to formalise unstructured knowledge in linked data",
                speaker: "Arianna Moretti, Sebastian Barzaghi",
                affiliation: "DH.ARC",
              },
              {
                time: "16:00 - 16:20",
                type: "talk",
                title:
                  "From Data to Meaning: Narrative Visualization for Critical Thinking in Semantic Web Learning",
                speaker: "Giulia Renda",
                affiliation: "DH.ARC",
              },
              {
                time: "16:20 - 16:40",
                type: "talk",
                title: "Born Digital Archives",
                speaker: "Lucia Giagnolini",
                affiliation: "DH.ARC",
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
              },
              {
                time: "11:20 - 11:40",
                type: "talk",
                title:
                  "Knowledge Extraction of Digital Hermeneutics of the Van den vos Reynaerde",
                speaker: "Andrea Schimmenti",
                affiliation: "DH.ARC",
              },
              { time: "11:40 - 12:10", type: "break", title: "Break" },
              {
                time: "12:10 - 12:30",
                type: "talk",
                title:
                  "Formulaic language in historical political-administrative corpora",
                speaker: "Marijn Koolen",
                affiliation: "DHLab",
              },
              {
                time: "12:30 - 12:50",
                type: "talk",
                title:
                  "Automatic Extraction and Diachronic Analysis of Olfactory Language",
                speaker: "Teresa Paccosi",
                affiliation: "DHLab",
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
                affiliation: "DH.ARC",
              },
              {
                time: "14:50 - 15:10",
                type: "talk",
                title:
                  "Research in Action: Practical Approaches to Archival Data",
                speaker: "Gauri Bhagwat",
                affiliation: "DHLab",
              },
              { time: "15:10 - 15:40", type: "break", title: "Coffee Break" },
              {
                time: "15:40 - 16:00",
                type: "talk",
                title:
                  "Scholarly Primitives Revisited (again): Building a Taxonomy of Scholarly Digital Objects",
                speaker: "Laurent Fintoni",
                affiliation: "DH.ARC",
              },
              {
                time: "16:00 - 16:20",
                type: "talk",
                title:
                  "Visualizing the Humanities: a survey of visualization practices, narrativity, and critical approaches in Digital Humanities projects",
                speaker: "Tommaso Battisti",
                affiliation: "DH.ARC",
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
                  "Workshop: Analysing multilingual dataset of online book reviews",
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
        { text: "DHARC", styles: ["font-bold"] },
        { text: " (Bologna) e il " },
        { text: "DHLab", styles: ["font-bold"] },
        {
          text: " (Amsterdam). Progettato per ricercatori, studenti, professionisti del patrimonio culturale e ingegneri dell'informazione e della conoscenza.",
        },
      ],
      [
        { text: "La partecipazione è " },
        { text: "gratuita", styles: ["font-bold"] },
        { text: ", ma i " },
        { text: "posti sono limitati", styles: ["font-bold"] },
        { text: "." },
      ],
      // Paragrafo 3 (con grassetto, corsivo e link email)
      [
        { text: "Prenota il tuo posto " },
        { text: "tramite il modulo sottostante ", styles: ["font-bold"] },
        { text: "o contattando " },
        {
          text: "know.land.unibo@gmail.com",
          // styles: ["italic"],
          href: "mailto:know.land.unibo@gmail.com",
        },
        { text: "." },
      ],
      // Paragrafo 4 (in maiuscoletto)
      [
        {
          text: "Il seminario sarà trasmesso anche in streaming online. Si prega di notare che la registrazione tramite il modulo è necessaria per ricevere il link per lo streaming.",
          styles: ["font-small-caps"],
        },
      ],
    ],
    registration: {
      buttonText: "Registrati Ora",
      formUrl: "https://forms.gle/37oYuBjWpFffnV7s6", // <-- SOSTITUISCI CON IL TUO LINK REALE
      closingDate: "Il modulo chiude il 20 Ottobre.",
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
            text: " è un seminario di tre giorni dedicato a temi rilevanti quali l'Organizzazione, la Rappresentazione, la Visualizzazione e l'Estrazione della Conoscenza nell'ambito delle discipline umanistiche e del patrimonio culturale. Durante il seminario, verrà posta particolare enfasi sull'esame degli approcci e delle pratiche adottate nelle Digital Humanities per evidenziare come prospettive diverse possano affrontare sfide simili nel settore.",
          },
        ],
        // Paragrafo 2 (complesso, con link e corsivo)
        [
          {
            text: "Al centro dell'iniziativa c'è lo scambio metodologico tra due importanti centri di ricerca di Digital Humanities: il ",
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
            text: ". Il formato alterna contributi di relatori locali e ospiti invitati, creando spazi per dibattiti aperti e discussioni. Questa struttura mira a promuovere un dialogo significativo tra studiosi internazionali, offrendo al contempo opportunità concrete per lo sviluppo di ricerche collaborative nelle DH. La serie si conclude con workshop interattivi pensati per unire i quadri teorici con le applicazioni pratiche nella ricerca DH.",
          },
        ],
        // Paragrafo 3 (semplice, solo testo)
        "L'iniziativa è aperta a ricercatori di ogni livello, studenti, professionisti del patrimonio culturale e ingegneri dell'informazione e della conoscenza. I contributi presentati rifletteranno ricerche a diversi stadi di sviluppo, spaziando da idee esplorative e studi pilota a strumenti consolidati e progetti maturi.",
        // Paragrafo 4 (semplice)
        "I primi due giorni saranno dedicati a interventi in stile convegno. Ogni giornata si aprirà con un keynote che introdurrà il tema principale, tenuto dalle due figure di spicco dei centri di ricerca partner: la Prof.ssa Francesca Tomasi (DH.ARC, Università di Bologna) and la Dott.ssa Marieke van Erp (DHLab, Amsterdam). La prima giornata esplorerà l'Organizzazione e la Visualizzazione della Conoscenza, mentre la seconda si concentrerà sull'Estrazione della Conoscenza e, più in generale, sulle Pratiche di Conoscenza.",
        // Paragrafo 5 (semplice)
        "Il terzo e ultimo giorno sarà interamente dedicato a due workshop pratici. Il primo workshop introdurrà metodi di annotazione del testo, mostrando come costruire specifici dataset da dati testuali usando RDF. Il secondo workshop esplorerà diverse tecnologie per estrarre e analizzare le esperienze di lettura nelle recensioni di libri online.",
        // Paragrafo 6 (complesso, con link e corsivo)
        [
          {
            text: "Questo seminario è organizzato da dottorandi dell'Università di Bologna come parte del ",
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
                affiliation: "DH.ARC",
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
                affiliation: "DH.ARC",
              },
              {
                time: "12:30 - 12:50",
                type: "talk",
                title:
                  "Analyzing semantic change through centuries in Cultural Heritage documents",
                speaker: "Jiaqi Zhu",
                affiliation: "DHLab",
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
                affiliation: "DH.ARC",
              },
              {
                time: "14:50 - 15:10",
                type: "talk",
                title:
                  "Tracing the Art Market: A Digital-Semantic Workflow for the Zeri Foundation’s Historical Auction Records (1879-1929)",
                speaker: "Valentina Rossetti, Valentina Pasqual",
                affiliation: "DH.ARC",
              },
              { time: "15:10 - 15:40", type: "break", title: "Pausa Caffè" },
              {
                time: "15:40 - 16:00",
                type: "talk",
                title:
                  "Experimenting a semi-automatic approach based on online surveys to formalise unstructured knowledge in linked data",
                speaker: "Arianna Moretti, Sebastian Barzaghi",
                affiliation: "DH.ARC",
              },
              {
                time: "16:00 - 16:20",
                type: "talk",
                title:
                  "From Data to Meaning: Narrative Visualization for Critical Thinking in Semantic Web Learning",
                speaker: "Giulia Renda",
                affiliation: "DH.ARC",
              },
              {
                time: "16:20 - 16:40",
                type: "talk",
                title: "Born Digital Archives",
                speaker: "Lucia Giagnolini",
                affiliation: "DH.ARC",
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
              },
              {
                time: "11:20 - 11:40",
                type: "talk",
                title:
                  "Knowledge Extraction of Digital Hermeneutics of the Van den vos Reynaerde",
                speaker: "Andrea Schimmenti",
                affiliation: "DH.ARC",
              },
              { time: "11:40 - 12:10", type: "break", title: "Pausa" },
              {
                time: "12:10 - 12:30",
                type: "talk",
                title:
                  "Formulaic language in historical political-administrative corpora",
                speaker: "Marijn Koolen",
                affiliation: "DHLab",
              },
              {
                time: "12:30 - 12:50",
                type: "talk",
                title:
                  "Automatic Extraction and Diachronic Analysis of Olfactory Language",
                speaker: "Teresa Paccosi",
                affiliation: "DHLab",
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
                affiliation: "DH.ARC",
              },
              {
                time: "14:50 - 15:10",
                type: "talk",
                title:
                  "Research in Action: Practical Approaches to Archival Data",
                speaker: "Gauri Bhagwat",
                affiliation: "DHLab",
              },
              { time: "15:10 - 15:40", type: "break", title: "Pausa Caffè" },
              {
                time: "15:40 - 16:00",
                type: "talk",
                title:
                  "Scholarly Primitives Revisited (again): Building a Taxonomy of Scholarly Digital Objects",
                speaker: "Laurent Fintoni",
                affiliation: "DH.ARC",
              },
              {
                time: "16:00 - 16:20",
                type: "talk",
                title:
                  "Visualizing the Humanities: a survey of visualization practices, narrativity, and critical approaches in Digital Humanities projects",
                speaker: "Tommaso Battisti",
                affiliation: "DH.ARC",
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
                  "Workshop: Analysing multilingual dataset of online book reviews",
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
