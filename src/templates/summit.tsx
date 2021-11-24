import cn from 'classnames'
import { graphql } from 'gatsby'
import React from 'react'

import Button from '../components/freestanding/button/button'
import Container from '../components/freestanding/containers/container'
import Grid from '../components/freestanding/containers/grid'
import YoutubeEmbed from '../components/layouts/embed/embed'
import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'
import DiversityStatement from '../components/layouts/summit/diversity-statement'
import {
  speakers as allSpeakers,
  Speaker
} from '../components/layouts/summit/speakers'
import * as content from '../page-content/events/content-summit-21'

import {
  pb16,
  pb32,
  pb64,
  pb8,
  pt32
} from '../components/freestanding/utils/padding.module.css'
import * as styles from '../components/layouts/summit/session-list.module.css'

export default function SummitTemplate(props: any) {
  const { mdx } = props.data
  const { frontmatter } = mdx
  const speakers = frontmatter.speakers.map(
    (speakerId: string) => allSpeakers[speakerId]
  )
  const youtubeId =
    new URL(frontmatter.youtubelink).searchParams.get('v') || 'yaMRzF9arDc'

  return (
    <Layout isEvent={true} theme={'info'}>
      <SEO
        description={frontmatter.seo?.description || frontmatter.description}
        title={frontmatter.seo?.title || frontmatter.title}
        keywords={frontmatter.seo?.keywords || ''}
        // canonical={frontmatter.seo?.canonical}
      />
      <Container className={cn(styles.sessionList)} alignItems={'start'}>
        <h1 className={cn(pb64)}>{frontmatter.title}</h1>
        <YoutubeEmbed embedId={youtubeId} />
        <p className={cn(pb32)}>{frontmatter.description}</p>
        <Button
          style={'filled'}
          to={frontmatter.presentationlink}
          openInNewWindow={true}
        >
          Download the Presentation
        </Button>
      </Container>
      <hr className={styles.divider} aria-hidden="true" />

      <Container flexContainer={'column'} alignItems={'stretch'}>
        {speakers.map((speaker: Speaker) => (
          <Grid lg={12} md={12} sm={12} xs={12} key={speaker.fullname}>
            <article className={styles.speakerCardLarge}>
              <Container className={styles.speakerCardDirection}>
                <Button
                  to={speaker.social}
                  openInNewWindow={true}
                  style="none"
                  className={styles.speakerInfo}
                >
                  <article>
                    <Container
                      key={speaker.social}
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
                <Container className={styles.speakerAbout}>
                  <p>{speaker.about}</p>
                </Container>
              </Container>
            </article>
          </Grid>
        ))}
      </Container>

      <hr className={styles.divider} aria-hidden="true" />
      <DiversityStatement {...content.diversityStatement} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        seo {
          title
          description
        }
        order
        title
        description
        speakers
        slug
        youtubelink
        presentationlink
      }
    }
  }
`
