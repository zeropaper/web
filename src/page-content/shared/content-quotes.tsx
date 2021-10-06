import React from 'react'

import { PropTypes as QuoteProps } from '../../components/layouts/quotes/quotes'

export const sharedQuotes: QuoteProps = {
  background: 'dark',
  slant: true,
  id: 'shared.quotes',
  quotes: [
    {
      big: true,
      description: (
        <>
          We like using Ory because it’s API first design made it super easy to
          integrate with the rest of our stack.
        </>
      ),
      person: `Paul Harman`,
      jobTitle: `Engineering Manager, Sainsbury’s Tech`
    },
    {
      description: (
        <>
          With Ory, I can build custom and secure ID infrastructure and APIs
          that fit perfectly into my client's ever-evolving cloud environments.
        </>
      ),
      person: `Ken Adler`,
      jobTitle: `Identity & Infosec, Thoughtworks`
    },
    {
      description: (
        <>
          We needed an Auth System that would work with modern setups. Ory fit
          the bill perfectly and just works.
        </>
      ),
      person: `Steff Kelsey`,
      jobTitle: `VP of Engineering. Blues Inc.`
    }
  ]
}

export const kratosQuotes: QuoteProps = {
  id: 'kratos.quotes',
  background: 'dark',
  slant: true,
  quotes: [
    {
      big: true,
      description: (
        <>
          We chose the Ory Stack to develop an internal IAM. Ory is ideal
          because we could customize it exactly how we needed to and could build
          a flexible system for authorizing user actions.
        </>
      ),
      person: `Dimitriy Gaevskiy`,
      jobTitle: `Software Architect, Tinkoff Group`
    },
    {
      description: (
        <>
          We needed an Auth System that would work with modern setups. Ory fit
          the bill perfectly and just works.
        </>
      ),
      person: `Steff Kelsey`,
      jobTitle: `VP of Engineering. Blues Inc.`
    },
    {
      description: (
        <>
          Ory made it simple to add stable, secure user management and access
          control to our systems. No more reinventing the wheel!
        </>
      ),
      person: `Bill Monkman`,
      jobTitle: `Chief Architect, Commit`
    }
  ]
}

export const ketoQuotes: QuoteProps = {
  id: 'keto.quotes',
  background: 'dark',
  slant: true,
  quotes: [
    {
      big: true,
      description: (
        <>
          Ory components consider all modern technical aspects and it was a
          perfect fit for our system. Integration was easy and we are able to
          customize based on our requirements.
        </>
      ),
      person: `Akibur Rahman`,
      jobTitle: `System Architect, Padis GmbH`
    },
    {
      description: (
        <>
          With Ory, I can build custom and secure ID infrastructure and APIs
          that fit perfectly into my client's ever-evolving cloud environments.
        </>
      ),
      person: `Ken Adler`,
      jobTitle: `Identity & Infosec, Thoughtworks`
    },
    {
      description: (
        <>
          At Factly, we were looking for a lightweight alternative to Keycloak
          that would meet all our IAM needs across multiple applications. Ory,
          written in Golang was the best option out there which was simple and
          performant.
        </>
      ),
      person: `Shashi Deshetti`,
      jobTitle: `CoFounder, factly  `
    }
  ]
}

export const hydraQuotes: QuoteProps = {
  id: 'hydra.quotes',
  background: 'dark',
  slant: true,
  quotes: [
    {
      big: true,
      description: (
        <>
          At Sainsbury’s Tech, we needed a feature-complete OAuth provider which
          can operate securely at scale and Ory Hydra fit the bill perfectly.
        </>
      ),
      person: `Paul Harman`,
      jobTitle: `Engineering Manager, Sainsbury’s Tech`
    },
    {
      description: (
        <>
          We rely on Ory to be our OAuth provider and it fits perfectly into our
          infrastructure, is hardened, and aligns with our principles. Ory is a
          great fit for us.
        </>
      ),
      person: `Benjamin Kristensen`,
      jobTitle: `Senior Software Engineer, Enode`
    },
    {
      description: (
        <>
          At Discogs we use Ory to handle authentication and authorization for
          over 8 million music enthusiasts across our applications. It allows us
          to focus on building the largest music database and marketplace,
          rather than reinvent the wheel.
        </>
      ),
      person: `Corey Burmeister`,
      jobTitle: `Author, Discogs`
    }
  ]
}

export const oathkeeperQuotes: QuoteProps = {
  id: 'oathkeeper.quotes',
  background: 'dark',
  slant: true,
  quotes: [
    {
      big: true,
      description: (
        <>
          With Ory, I can build custom and secure ID infrastructure and APIs
          that fit perfectly into my client's ever-evolving cloud environments.
        </>
      ),
      person: `Ken Adler`,
      jobTitle: `Identity & Infosec, Thoughtworks`
    },
    {
      description: (
        <>
          Ory made it simple to add stable, secure user management and access
          control to our systems. No more reinventing the wheel!
        </>
      ),
      person: `Bill Monkman`,
      jobTitle: `Chief Architect, Commit`
    },
    {
      description: (
        <>
          We enjoy using Ory because of the simplicity to integrate thanks to
          its modularity, its active and vocal developer base, and the extent
          and ease by which Ory tools can be configured.
        </>
      ),
      person: `Matt Brown`,
      jobTitle: `Bioinformatician, Dante Labs`
    }
  ]
}
