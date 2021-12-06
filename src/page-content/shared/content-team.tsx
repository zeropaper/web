import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../../components/freestanding/button/button'
import {
  PropTypes as TeamProps,
  SocialNetworks
} from '../../components/layouts/team/team'
import { PropTypes as TeamImgProps } from '../../components/layouts/team/team-image'

export const team: TeamProps = {
  id: 'shared.team',
  background: 'dark',
  title: (
    <>
      The best team <span className={'is-mute-text'}>for the job</span>
    </>
  ),
  text: (
    <>
      Our mission is to provide a common access control, authorization and
      identity infrastructure that manages IAM and the associated data created
      in cloud applications. And we've got just the right people for the job -{' '}
      <Button to={'/jobs'} style={'link-inline'}>
        join our team
      </Button>{' '}
      and find out why.
    </>
  ),
  team: [
    {
      name: 'Aeneas Rekkas',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/aeneasr'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/aeneasr'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Aeneas Rekkas"
          src="../../images/team/aeneas.png"
        />
      )
    },
    {
      name: 'Thomas Aidan Curran',
      position: 'Product',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/tacurran'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/thomasaidancurran/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Thomas Aidan Curran"
          src="../../images/team/thomas.png"
        />
      )
    },
    {
      name: 'Patrik Neu',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/zepatrik'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Patrik Neu"
          src="../../images/team/patrik.png"
        />
      )
    },
    {
      name: 'John Curran',
      position: 'Design',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/jfcurran'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="John Curran"
          src="../../images/team/john.png"
        />
      )
    },
    {
      name: 'Vincent Kraus',
      position: 'Developer Relations',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/vinckr'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Vincent Kraus"
          src="../../images/team/vincent.png"
        />
      )
    },
    {
      name: 'Andreas Bucksteeg',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/tricky42'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Andreas Bucksteeg"
          src="../../images/team/andreas.png"
        />
      )
    },
    {
      name: 'Piotr Mścichowski',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/piotrmsc'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/piotr-m%C5%9Bcichowski-93b458a4'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Piotr Mścichowski"
          src="../../images/team/piotr.png"
        />
      )
    },
    {
      name: 'Jakub Blaszczyk',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/Demonsthere'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/jakub-błaszczyk-31b786129/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Jakub Blaszczyk"
          src="../../images/team/jakub.png"
        />
      )
    },
    {
      name: 'Alano Terblanche',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/Benehiko'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Alano Terblanche"
          src="../../images/team/alano.png"
        />
      )
    },
    {
      name: 'Grant Zvolský',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/grantzvolsky'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Alano Terblanche"
          src="../../images/team/grant.png"
        />
      )
    },
    {
      name: 'Lee Atchison',
      position: 'Architecture',
      social: [
        {
          network: SocialNetworks.web,
          href: 'https://leeatchison.com/'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/leeatchison'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Lee Atchison"
          src="../../images/team/lee.png"
        />
      )
    },
    {
      name: 'Marney Kline',
      position: 'Digital Marketing',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/marneysof'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Marney Kline"
          src="../../images/team/marney.png"
        />
      )
    },
    {
      name: 'Tobias Sahl',
      position: 'Digital Marketing',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/blueacidfrog'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/tobias-sahl-8a553189/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Tobias Sahl"
          src="../../images/team/tobias.png"
        />
      )
    },
    {
      name: 'Michael Leyman',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/MicLeey'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Michael Leey"
          src="../../images/team/michael.png"
        />
      )
    }
  ]
}

export const community: TeamImgProps = {
  id: 'shared.community',
  slant: true,
  background: 'grey',
  title: (
    <>
      The best community <span className={'is-mute-text'}>in the world</span>
    </>
  ),
  text: (
    <>
      Ory is a community of collaborators, friends, and makers of wonderful
      software. The Ory Community works together to create useful products. We
      thank everyone involved - submitting new ideas, sending bug reports,
      writing feature requests, patching code, and sponsoring our work.
    </>
  ),
  img: (
    <img
      loading="lazy"
      alt="The Ory Community"
      className="responsive"
      src="https://opencollective.com/ory/contributors.svg?avatarHeight=24&width=1300&button=false&limit=1020"
    />
  )
}
