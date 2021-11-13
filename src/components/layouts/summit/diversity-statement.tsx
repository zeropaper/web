import cn from 'classnames'
import React from 'react'

import Grid from '../../freestanding/containers/grid'

import { pb32, pb64 } from '../../freestanding/utils/padding.module.css'
import * as styles from './diversity-statement.module.css'

export interface PropTypes {
  id: string
  title: string
  text: string | React.ReactElement
}

const DiversityStatement = ({ id, text, title }: PropTypes) => {
  return (
    <div className={cn(styles.container)} id={id}>
      <Grid lg={6} md={12} sm={12} xs={12} className={pb64}>
        <h3 className={pb32}>{title}</h3>
        <p>{text}</p>
      </Grid>
    </div>
  )
}

export default DiversityStatement
