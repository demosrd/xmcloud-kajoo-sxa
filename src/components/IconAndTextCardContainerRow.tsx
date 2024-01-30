/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './IconAndTextCardContainerRow.module.css'

const IconAndTextCardContainerRow = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Text
          text={props.fields.heading}
          tag="h2"
          className={` ${styles['text']} ${'header-module-heading'} `}
        />
        <RichText
          value={props.fields.copy}
          className={` ${styles['richtext']} ${'richtext-module-copy-rtf'} `}
        />
      </Container>
      <Container className={styles['container1']} />
      <Placeholder name="cards" rendering={props.rendering} />
    </Container>
  )
}

IconAndTextCardContainerRow.defaultProps = {
  fields: {
    copy: '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
    heading:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
}

IconAndTextCardContainerRow.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default IconAndTextCardContainerRow
