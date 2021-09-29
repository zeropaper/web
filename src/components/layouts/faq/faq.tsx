import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import { pb16, pb32, pb64 } from '../../freestanding/utils/padding.module.css'
import * as styles from './faq.module.css'

export interface FaqContent {
  question: string
  answer: React.ReactElement
}

export interface PropTypes {
  id: string
  background?: 'dark' | 'grey' | 'light-grey' | 'themed'
  slant?: boolean
  title: React.ReactElement
  description: React.ReactElement
  content: Array<FaqContent>
}

const Faq = ({
  id,
  background,
  slant,
  title,
  description,
  content
}: PropTypes) => {
  return (
    <div
      id={id}
      className={cn(
        styles.faq,
        {
          ['background-is-grey']: background === 'grey',
          ['background-is-dark']: background === 'dark',
          ['background-is-light-grey']: background === 'light-grey',
          ['background-is-themed']: background === 'themed'
        },
        { ['is-slanted-top-medium']: slant === true }
      )}
    >
      <Container fluid={true} justify={'center'} alignItems={'center'}>
        <Grid lg={6} md={8} sm={12} xs={12} className={styles.title}>
          <Container
            justify={'center'}
            className={cn('text-is-centered', pb32)}
          >
            <h2 className={cn('font-h1', pb32)}>{title}</h2>
            <p className={cn('font-p-large', pb32)}>{description}</p>
          </Container>
        </Grid>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Container alignItems={'start'} justify={'start'}>
            {content.map(({ answer, question }, index) => (
              <Grid
                key={index}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={styles.questions}
              >
                <Container
                  flexContainer={'row'}
                  alignItems={'start'}
                  className={cn(pb64)}
                >
                  <h3 className={cn('font-h3', pb16)}>{question}</h3>
                  <p className={cn('font-p', 'is-mute-text')}>{answer}</p>
                </Container>
              </Grid>
            ))}
          </Container>
        </Grid>
      </Container>
    </div>
  )
}

export default Faq
