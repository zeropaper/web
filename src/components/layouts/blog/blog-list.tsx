import cn from 'classnames'
import {graphql, useStaticQuery} from 'gatsby'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import {AuthorName} from './blog-author'

import {
  pb16,
  pb64,
  pb8
} from '../../freestanding/utils/padding.module.css'
import * as styles from './blog-list.module.css'
import {GatsbyImage, getImage, IGatsbyImageData,} from "gatsby-plugin-image";

export interface PropTypes {
  id: string
  title: string
  featuredSmall: [string, string, string]
}

type Edge = {
  node: {
    id: string
    frontmatter: {
      publishedAt: string
      author: string
      path: string
      title: string
      teaser: string
      overline: string
      banner: IGatsbyImageData
    }
  }
}

const Post = ({node}: Edge) => {
  const image = getImage(node.frontmatter.banner)
  return (<Grid
      key={node.id}
      lg={4}
      md={4}
      sm={6}
      xs={12}
      className={cn(styles.blogItem, styles.itemFlex)}
    >
      <Button style={'none'} to={node.frontmatter.path}>
        {image ? (
          <GatsbyImage
            image={image}
            alt={node.frontmatter.title}/>) : null}
        <Container
          className={styles.blogText}
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
            <h2 className={cn('font-overline', pb16)}>
              <span className={cn('is-themed-primary')}>&gt; </span>
              {node.frontmatter.overline}
            </h2>
            <h3 className={cn('font-h5', pb8)}>
              {node.frontmatter.title}
            </h3>
          </Container>
          <Container justify={'start'} className={cn(pb16)}>
            <p className={cn('font-p-smaller')}>
              <AuthorName
                className={cn('font-p-smaller')}
                name={node.frontmatter.author}
              />{' '}
              - {node.frontmatter.publishedAt}
            </p>
          </Container>
        </Container>
      </Button>
    </Grid>
  )
}

const BlogList = ({id, title, featuredSmall}: PropTypes) => {
  const data = useStaticQuery(graphql`
    query {
      allPosts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/blog/" }
          frontmatter: { published: { ne: false } }
        }
        sort: { fields: [frontmatter___publishedAt], order: DESC }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              banner{
                childImageSharp {
                  gatsbyImageData(
                    blurredOptions: {width: 100}
                    placeholder: BLURRED
                    transformOptions: {cropFocus: CENTER}
                    aspectRatio: 1.8
                  )
                }
              }
              publishedAt(formatString: "MMMM DD, YYYY")
              author
              path
              title
              teaser
              overline
            }
          }
        }
      }
    }
  `)

  const [featuredPost, ...posts] = (data.allPosts.edges as Edge[])
  const filterFeaturedSmall = ({node: {frontmatter: {path}}}: Edge) => featuredSmall.indexOf(path) >= 0
  const featuredSmallPosts = posts.filter(filterFeaturedSmall)
  const nonFeaturedPosts = posts.filter((edge) => !filterFeaturedSmall(edge))

  return (
    <div id={id} className={cn(styles.blogList)}>
      <Container fluid={true} justify={'center'} alignItems={'start'}>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Container fluid={true} justify={'center'}>
            <Grid
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={cn('text-is-centered', pb64)}
            >
              <h1 className={'font-h1'}>{title}</h1>
            </Grid>
          </Container>
          <Container alignItems={'stretch'} justify={'start'}>
            <Post {...featuredPost} />
          </Container>
          <Container alignItems={'stretch'} justify={'start'}>
            {featuredSmallPosts.map((edge) => <Post {...edge} />)}
          </Container>
          <Container alignItems={'stretch'} justify={'start'}>
            {nonFeaturedPosts.map((edge) => <Post {...edge} />)}
          </Container>
        </Grid>
      </Container>
    </div>
  )
}

export default BlogList