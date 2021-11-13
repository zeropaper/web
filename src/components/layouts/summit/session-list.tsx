import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import { Speaker, speakers } from './speakers'

import {
  pb16,
  pb32,
  pb64,
  pb8,
  pt32
} from '../../freestanding/utils/padding.module.css'
import * as styles from './session-list.module.css'

export interface PropTypes {
  id: string
  title: string
  intro: string | React.ReactElement
  sessionText: string | React.ReactElement
  speakerText: string | React.ReactElement
}

type Edge = {
  node: {
    id: string
    frontmatter: {
      title: string
      description: string
      banner: IGatsbyImageData
      speakers: string[]
      slug: string
      publishedAt: string
      order: number
      ready: boolean
    }
  }
}

const SessionList = ({
  id,
  title,
  intro,
  sessionText,
  speakerText
}: PropTypes) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/summit/" }
          frontmatter: { ready: { ne: false } }
        }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              seo {
                title
                description
              }
              order
              title
              description
              ready
              banner {
                childImageSharp {
                  gatsbyImageData(
                    blurredOptions: { width: 100 }
                    placeholder: BLURRED
                    transformOptions: { cropFocus: CENTER }
                    aspectRatio: 1.8
                  )
                }
              }
              speakers
              slug
            }
          }
        }
      }
    }
  `)

  const renderSessionCard = ({ node: { frontmatter } }: Edge) => {
    const speakersInfo = frontmatter.speakers.map((s) => speakers[s])
    const banner = getImage(frontmatter.banner)

    return (
      <Grid lg={6} md={6} sm={12} xs={12} className={styles.sessionCard}>
        <Button
          key={frontmatter.slug}
          to={`/summit/2021/${frontmatter.slug}`}
          style="none"
        >
          <article>
            {banner ? (
              <GatsbyImage image={banner} alt={frontmatter.title} />
            ) : null}
            <Container className={styles.sessionCardInformation}>
              <h3 className={cn(pb32, styles.sessionTitle)}>
                {frontmatter.title}
              </h3>
              <Container justify={'start'}>
                {speakersInfo.map((speaker: Speaker) => (
                  <Container
                    key={speaker.fullname}
                    className={cn(styles.speakerSocial, pb16)}
                  >
                    <Container
                      flexContainer={'row'}
                      justify={'start'}
                      alignItems={'center'}
                    >
                      {speaker.speakerImage}
                      <Container flexContainer={'column'} alignItems={'start'}>
                        <h6>{speaker.fullname}</h6>
                        <p className={'font-p-small'}>
                          {speaker.title} at {speaker.company}
                        </p>
                      </Container>
                    </Container>
                  </Container>
                ))}
              </Container>
            </Container>
          </article>
        </Button>
      </Grid>
    )
  }

  const renderSpeakerCard = (speakerId: string) => {
    const speaker = speakers[speakerId]
    return (
      <Grid lg={4} md={4} sm={6} xs={12} className={styles.speakerCard}>
        <Button
          key={speakerId}
          to={speaker.social}
          openInNewWindow={true}
          style="none"
        >
          <article>
            <Container
              key={speakerId}
              className={cn(styles.speakerSocial, pb16)}
            >
              <Container
                flexContainer={'column'}
                justify={'center'}
                alignItems={'center'}
              >
                {speaker.speakerImage}
                <Container
                  flexContainer={'column'}
                  alignItems={'center'}
                  className={cn('text-is-centered', pt32)}
                >
                  <h6 className={cn(pb8)}>{speaker.fullname}</h6>
                  <p className={cn('font-p-small', styles.speakerName)}>
                    {speaker.title} at {speaker.company}
                  </p>
                </Container>
              </Container>
            </Container>
          </article>
        </Button>
      </Grid>
    )
  }

  const $sessions = data.allMdx.edges.map(renderSessionCard)
  const $speakers = Object.keys(speakers).map(renderSpeakerCard)
  return (
    <div id={id} className={cn(styles.sessionList)}>
      <Container alignItems={'start'}>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Container alignItems="start">
            <div className={styles.introContainer}>
              <h1 className={'font-display'}>{title}</h1>
            </div>
            <p className={'font-p-display'}>{intro}</p>
          </Container>
          <hr className={styles.divider} aria-hidden="true" />
          <Container justify={'start'}>
            <Container className={cn(pb64)}>
              <h2 id="sessions" className={cn(pb32)}>
                Sessions
              </h2>
              <p>{sessionText}</p>
            </Container>
            <Container alignItems={'start'} justify={'start'}>
              {$sessions}
            </Container>
          </Container>
          <hr className={styles.divider} aria-hidden="true" />
          <Container justify={'start'}>
            <Container className={cn(pb64)}>
              <h2 id="speakers" className={cn(pb32)}>
                Speakers
              </h2>
              <p>{speakerText}</p>
            </Container>
            <Container alignItems={'start'} justify={'start'}>
              {$speakers}
            </Container>
          </Container>
          <hr className={styles.divider} aria-hidden="true" />
        </Grid>
      </Container>
    </div>
  )
}

export default SessionList
