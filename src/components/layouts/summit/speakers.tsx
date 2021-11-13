import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export interface Speaker {
  fullname: string
  social: string
  title: string
  company: string
  about?: React.ReactElement
  speakerImage?: any
}

export const speakers: { [key: string]: Speaker } = {
  zepatrik: {
    fullname: 'Patrik Neu',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Patrik Neu"
        src="../../../images/events/summit/speakers/zepatrik.png"
      />
    ),
    social: 'https://github.com/zepatrik',
    title: 'Developer',
    company: 'Ory',
    about: (
      <>
        Patrik Neu is an open-source enthusiast and core maintainer at Ory. He
        is simultaneously pursuing a Master’s degree from TU Munich in Computer
        Science. He focuses on developing in Go and TypeScript and his passion
        project is Ory Keto, the very first implementation of Google's Zanzibar
        access control system. What gets Patrik excited? Security, automata, and
        functional programming. Also: biking, climbing rocks, and roaming the
        wilderness.
      </>
    )
  },
  aeneasr: {
    fullname: 'Aeneas Rekkas',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Aeneas Rekkas"
        src="../../../images/events/summit/speakers/aeneasr.png"
      />
    ),
    social: 'http://github.com/aeneasr',
    title: 'Co-founder & CTO',
    company: 'Ory',
    about: (
      <>
        Aeneas Rekkas is co-founder of Ory, where he plays a key leadership role
        in building the New Identity Stack for the 2020 decade alongside a team
        of exceptional developers. Earlier in his career, he co-founded Serlo
        Education e.V., a German non-profit NGO best described as a Wikipedia
        for educational resources. He is passionate about designing and
        architecting visionary open source and cloud software solutions. Also
        known as "hackerman", Aeneas maintains a lively presence in the open
        source realms of Github.
      </>
    )
  },
  tacurran: {
    fullname: 'Thomas Curran',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Thomas Curran"
        src="../../../images/events/summit/speakers/tacurran.png"
      />
    ),
    social: 'https://github.com/tacurran',
    title: 'Co-founder & CEO',
    company: 'Ory',
    about: (
      <>
        Thomas Curran is co-founder and board member at Ory. His main activities
        are software engineering, architecture, documentation, and company
        development. He started numerous software companies and worked at
        international tech and media companies. He graduated from Univ.
        Pennsylvania, and then held teaching and research positions at the
        Wharton School Analysis Center, and the Technical University Berlin.
        Thomas was involved with Ory Open Source from the outset. His first open
        source project was the GNU RCS port from Unix to Windows in 1986.
      </>
    )
  },
  roggia: {
    fullname: 'Christian Roggia',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Christian Roggia"
        src="../../../images/events/summit/speakers/roggia.png"
      />
    ),
    social: 'https://github.com/christian-roggia',
    title: 'CEO',
    company: 'Animeshon',
    about: (
      <>
        Christian Roggia is a DevOps Engineer specialized in Golang Backend
        development using state-of-the-art CI/CD pipelines and Microservices
        architecture. He is a contributor and former member of the Kubernetes
        and Helm projects, along with the Google Compute Engine Persistent Disk
        CSI Driver and the Envoy proxy.
      </>
    )
  },
  dadrus: {
    fullname: 'Dimitrij Drus',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Dimitrij Drus"
        src="../../../images/events/summit/speakers/dadrus.png"
      />
    ),
    social: 'https://github.com/dadrus',
    title: 'Senior Consultant',
    company: 'Innoq',
    about: (
      <>
        Dimitrij Drus is a Senior Consultant at INNOQ, a Germany-based
        technology consulting firm. His expertise centers on building
        distributed and embedded systems with a focus on security and
        availability.
      </>
    )
  },
  manraj: {
    fullname: 'Ashley Manraj',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Ashley Manraj"
        src="../../../images/events/summit/speakers/manraj.png"
      />
    ),
    social: 'https://ca.linkedin.com/in/ashley-manraj-6b4655a9',
    title: 'CTO',
    company: 'Pvotal',
    about: (
      <>
        Ashley Manraj is spearheading the technology and development methodology
        at Pvotal Technologies centered around event driven go gRPC
        microservices in the backend. In the front-end, we are leveraging
        Flutter cross-platform using the BloC pattern to interact with our
        backends in gRPC and gRPC-web. Everything orchestrated as code in GKE
        leveraging Ory Oathkeeper, Ory Keto, Concourse, Argo Suite.
      </>
    )
  },
  gen1us2k: {
    fullname: 'Andrew Minkin',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Andrew Minkin"
        src="../../../images/events/summit/speakers/gen1us2k.png"
      />
    ),
    social: 'https://github.com/gen1us2k',
    title: 'CTO',
    company: 'Self-employed',
    about: (
      <>
        Andrew Minkin is a former CTO and has experience of more than 15 years
        in coding, operations, and leadership. He can manage teams of sole
        contributors, can manage teams of managers and he has a lot of
        experience building robust and highly scalable systems.
      </>
    )
  },
  deshetti: {
    fullname: 'Sashi Deshetti',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Sashi Deshetti"
        src="../../../images/events/summit/speakers/deshetti.png"
      />
    ),
    social: 'https://www.linkedin.com/in/deshetti',
    title: 'CTO',
    company: 'Factly',
    about: (
      <>
        Shashi Deshetti is CTO and co-founder of Factly, one of India’s earliest
        fact-checking organizations, and is dedicated to making public data
        meaningful to the common man through various ways including data
        journalism. Through Factly Labs, Shashi and the team are working on
        various open-source solutions focused on journalism and research. Shashi
        is a technology leader with over 16 years of expertise in data science,
        machine learning, data engineering, conversational AI, DevOps, and
        enterprise architecture. He is a life-long advocate of open data and
        open-source tools. Shashi has worked with numerous multinational
        companies to implement state-of-the-art business processes, including
        PWC, Walmart, Fidelity, Wells Fargo, and more. )
      </>
    )
  },
  bmonkman: {
    fullname: 'Bill Monkman',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Bill Monkman"
        src="../../../images/events/summit/speakers/bmonkman.png"
      />
    ),
    social: 'https://github.com/bmonkman',
    title: 'Chief Architect',
    company: 'Commit',
    about: (
      <>
        Bill has been writing code professionally for about 20 years, mostly
        working on SaaS projects. He specializes in back-end code, distributed
        systems, and devops. He was Senior Staff Developer at Hootsuite, joining
        as one of the first developers and helping to grow the team and product
        for over 8 years. Recently he is Chief Architect at Commit - a
        remote-first developer community for startup engineers.
      </>
    )
  },
  tricky42: {
    fullname: 'Andreas Bucksteeg',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Andreas Bucksteeg"
        src="../../../images/events/summit/speakers/tricky42.png"
      />
    ),
    social: 'https://github.com/tricky42',
    title: 'Head of Engineering',
    company: 'Ory',
    about: (
      <>
        While studying at TU Munich in 1997, Andreas co-founded hybris Software
        with friends, and developed one of the leading eCommerce solutions at
        the time. When SAP acquired hybris in 2013, he took the role of VP of
        Technology and focused on building Cloud Native solutions. This evolved
        into Kyma and Luigi, two open source projects that are foundational to
        the SAP Cloud Platform. After leaving SAP in early 2020 Andreas now
        focuses on helping companies on their journey to the Cloud. At Ory he is
        now one of the leading architects of the Ory Cloud Architecture.
      </>
    )
  },
  rahman: {
    fullname: 'Akibur Rahman',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Akibur Rahman"
        src="../../../images/events/summit/speakers/rahman.png"
      />
    ),
    social: 'https://de.linkedin.com/in/akibur-rahman',
    title: 'System Architect',
    company: 'Padis',
    about: (
      <>
        With years of experience under his belt, Akibur is a skilled developer
        with expertise in both front-end and back-end software development. At
        Padis he works as a System Architect, helping them deliver seamless
        logistics and warehouse management solutions to customers. )
      </>
    )
  },
  tilmantheile: {
    fullname: 'Tilman Theile',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Tilman Theile"
        src="../../../images/events/summit/speakers/tilmantheile.png"
      />
    ),
    social: 'https://github.com/amorevino/',
    title: 'Founder',
    company: 'AMOREVINO',
    about: (
      <>
        Tilman, Co-Founder of AMOREVINO, is responsible for the wine club's
        service provisioning excellence as well as procurement and logistics.
        With his years of experience, he helps develop processes that re-shape
        supply chains in the wine industry and create fascinating consumer
        experiences. His favorite wines are syrahs.
      </>
    )
  },
  tommycurran: {
    fullname: 'Tommy Curran',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Tommy Curran"
        src="../../../images/events/summit/speakers/tommycurran.png"
      />
    ),
    social: 'https://github.com/amorevino/',
    title: 'Founder',
    company: 'AMOREVINO',
    about: (
      <>
        Tommy, Co-Founder of AMOREVINO, leads all digital marketing and software
        development activities at AMOREVINO. He is currently building the
        AMOREVINO platform that provides a new way for wine professionals to
        connect and engage with their audience. Tommy's favorite wine is a cool
        climate pinot noir.
      </>
    )
  },
  dirkriehle: {
    fullname: 'Prof. Dirk Riehle',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Professor Dirk Riehle"
        src="../../../images/events/summit/speakers/dirkriehle.png"
      />
    ),
    social: 'https://github.com/dirkriehle',
    title: ' Professor of Open Source Software',
    company: 'Friedrich-Alexander University of Erlangen-Nürnberg',
    about: (
      <>
        Prof. Dr. Dirk Riehle, M.B.A., is the Professor of Open Source Software
        at the Friedrich-Alexander University of Erlangen-Nürnberg. Before
        joining academia, Riehle led the Open Source Research Group at SAP Labs,
        LLC, in Palo Alto, California (Silicon Valley). Riehle founded the Open
        Symposium, now the international conference on open collaboration. He
        was also the lead architect of the first UML virtual machine. He is
        interested in open source and inner source software engineering, agile
        software development methods, complexity science and human
        collaboration, and software system architecture, design, and
        implementation. Prof. Riehle holds a Ph.D. in computer science from ETH
        Zürich and an M.B.A. from Stanford Graduate School of Business. He
        welcomes email at dirk@riehle.org, blogs at http://dirkriehle.com, and
        tweets as @dirkriehle.
      </>
    )
  },
  svrakitin: {
    fullname: 'Stepan Rakitin',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Stepan Rakitin"
        src="../../../images/events/summit/speakers/svrakitin.png"
      />
    ),
    social: 'https://github.com/svrakitin',
    title: 'Platform Engineer ',
    company: 'SumUp',
    about: (
      <>
        Stepan Rakitin is a seasoned software engineer with expertise in
        building data intensive apps and systems. He’s currently a platform
        engineer at SumUp, a leading fin-tech company that empowers small
        businesses with the digital financial tools they need to succeed. Today,
        SumUp’s card readers are used by more than 2 million users globally.
        Stepan specializes in backend engineering, distributed systems and
        DevOps. He has since put his software wizardy to work at a range of
        innovative companies including Revolut, HelloFresh, Anaconda, and now
        SumUp.
      </>
    )
  },
  sinclair: {
    fullname: 'Jakob Sinclair',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Jakob Sinclair"
        src="../../../images/events/summit/speakers/sinclair.png"
      />
    ),
    social: 'https://twitter.com/piratpartiet',
    title: 'IT-Expert',
    company: 'Piratpartiet',
    about: (
      <>
        Jakob Sinclair is a computer science student at Lund University in
        Sweden and an activist on behalf of the Pirate Party of Sweden, which he
        helps by providing his IT expertise. The Pirate Party is an
        international political movement advocating for strengthened individual
        privacy rights and increased government transparency in the evermore
        digital era that we live in.
      </>
    )
  },
  david972: {
    fullname: 'David Alexandre',
    speakerImage: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="David Alexandre"
        src="../../../images/events/summit/speakers/david972.png"
      />
    ),
    social: 'https://github.com/david972',
    title: 'CTO',
    company: 'Wildcard',
    about: (
      <>
        David Alexandre is co-founder and technical director at Wildcard
        (w6d.io), a hassle-free no-code platform that allows developers to
        easily deliver cloud-native apps by automating the definition of their
        integration and continuous deployment process. Alexandre has a
        Bachelor’s in IT and MBA in Entrepreneurship from EPITECH, one of
        Europe’s leading institutions of higher education in computer science.
      </>
    )
  }
}
