import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import {
  pb16,
  pb32,
  pb8,
  pl8,
  pr8
} from '../../freestanding/utils/padding.module.css'
import * as styles from './jobs-list.module.css'

export interface PropTypes {
  id: string
  title: string
  description?: React.ReactElement
}

type Edge = {
  node: {
    id: string
    frontmatter: {
      title: string
      path: string
      description: string
      position: string
      location: string
    }
  }
}

const ArrowRight = () => (
  <i className="ph-arrow-right-bold themed-primary size16" />
)

const JobsList = ({ id, title, description }: PropTypes) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/jobs/" }
          frontmatter: { published: { ne: false } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              description
              position
              location
            }
          }
        }
      }
    }
  `)
  return (
    <div id={id} className={cn(styles.jobList)}>
      <Container fluid={true} justify={'center'} alignItems={'start'}>
        <Grid lg={6} md={8} sm={12} xs={12} className={styles.title}>
          <Container
            justify={'center'}
            className={cn('text-is-centered', pb32)}
          >
            <h2 className={cn('font-h1', pb32)}>{title}</h2>
            <p className={cn('font-p-large', pb32)}>{description}</p>
          </Container>
        </Grid>
        <Container alignItems={'stretch'} justify={'start'}>
          {(data.allMdx.edges as Edge[]).map(({ node }) => (
            <Grid
              key={node.id}
              lg={4}
              md={4}
              sm={6}
              xs={12}
              className={cn(styles.jobItem, styles.itemFlex)}
            >
              <Button style={'none'} to={node.frontmatter.path}>
                <Container
                  flexContainer={'column'}
                  justify={'start'}
                  alignItems={'start'}
                  className={cn(pb16, styles.minHeight)}
                >
                  <h5 className={cn('font-h5', pb8)}>
                    {node.frontmatter.title}
                  </h5>
                  <p className={cn('font-overline', pb8)}>
                    <span className={cn('is-themed-primary')}>&gt; </span>
                    {node.frontmatter.location}
                  </p>
                  <p className={cn('font-overline', pb16)}>
                    <span className={cn('is-themed-primary')}>&gt; </span>
                    {node.frontmatter.position}
                  </p>
                </Container>
                <Container>
                  <p
                    className={cn(
                      'font-p-small',
                      'is-secondary-text',
                      styles.minHeight,
                      pb16
                    )}
                  >
                    {node.frontmatter.description}
                  </p>
                </Container>
                <Container
                  flexContainer={'row'}
                  alignItems={'center'}
                  justify={'start'}
                  className={cn('is-themed-primary')}
                >
                  <p className={cn('font-link', pr8)}>Apply now</p>
                  <ArrowRight />
                </Container>
              </Button>
            </Grid>
          ))}
        </Container>
      </Container>
    </div>
  )
}

export default JobsList

/*
<Grid lg={12} md={12} sm={12} xs={12}>
  <Container alignItems={'stretch'} justify={'start'}>
  {(data.allMdx.edges as Edge[]).map(({ node }) => (
    <Grid
      key={node.id}
      lg={4}
      md={4}
      sm={6}
      xs={12}
      className={cn(styles.jobItem, styles.itemFlex)}
    >
      <Button
        style={'none'}
        to={node.frontmatter.path}
        className={cn(styles.jobItem)}
      >
        <Container
          justify={'space-between'}
          alignItems={'stretch'}
          flexContainer={'column'}
        >
          <Container
            flexContainer={'column'}
            justify={'start'}
            alignItems={'start'}
            className={cn(pb16, styles.minHeight)}
          >
            <h3 className={cn('font-h5', pb8)}>
              {node.frontmatter.title}
            </h3>
            <div
              className={cn(styles.jobDetails, 'is-secondary-text')}
            >
              <MapPinLine />
              <p
                className={cn(
                  'font-p-smaller',
                  'is-secondary-text',
                  pl8
                )}
              >
                          <span className={'is-semibold'}>
                            {node.frontmatter.location}
                          </span>
              </p>
            </div>
            <div className={cn(styles.jobDetails)}>
              <ClockClockwise />
              <p
                className={cn(
                  'font-p-smaller',
                  'is-secondary-text',
                  pl8
                )}
              >
                {node.frontmatter.position}
              </p>
            </div>
          </Container>
        </Container>
        <Container>
          <p className={cn('font-p-small', 'is-secondary-text')}>
            {node.frontmatter.description}{' '}
            <span className={'is-semibold'}>Learn more</span>
          </p>
        </Container>
      </Button>
    </Grid>
  ))}
</Container>
</Grid>*/
