import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import ContentVisual from '../../freestanding/content/content-visual'
import Molecule from '../../freestanding/molecule/molecule'
import Form, { PropTypes as FormPropTypes } from '../forms/forms'

import { pb48, pb32 } from '../../freestanding/utils/padding.module.css'
import * as styles from './hero-form.module.css'

export interface PropTypes {
  id: string
  title: string
  description: string
  image: React.ReactElement
  formProps: FormPropTypes
}

const HeroForm = ({ title, description, image, formProps, id }: PropTypes) => (
  <div id={id} className={cn(styles.heroForm)}>
    <Container fluid={true} alignItems={'center'}>
      <Grid lg={5} md={6} sm={12} xs={12} className={cn(pb32)}>
        <ContentText>
          <Molecule className={cn(pb48)}>
            <h1 className={cn('font-h1', pb32)}>{title}</h1>
            <p className={cn('font-p-large')}>{description}</p>
          </Molecule>
          <Form {...formProps} />
        </ContentText>
      </Grid>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <ContentVisual>{image}</ContentVisual>
      </Grid>
    </Container>
  </div>
)

export default HeroForm
