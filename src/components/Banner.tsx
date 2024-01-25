/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Banner.module.css'

const Banner = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container bgImage={props.fields.bgImage} className={styles['container']}>
        <Container className={styles['container1']}>
          <Text
            text={props.fields.Heading}
            tag="span"
            className={styles['text']}
          />
          <Text
            text={props.fields.text1}
            tag="span"
            className={styles['text1']}
          />
        </Container>
        <Container className={styles['container2']}>
          <Text
            text={props.fields.text2}
            tag="span"
            className={styles['text2']}
          />
        </Container>
      </Container>
    </Container>
  )
}

Banner.defaultProps = {
  fields: {
    bgImage:
      'https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/65329f5937a758f5fb24117f/assets/dI_hGuxr1Y6l.jpeg',
    text1:
      'At Verndale, we’re focused on working together no matter where you are. Whether in person at our Boston or Quito offices or online, collaboration is our top priority—not physical location.',
    text2: 'View All Benefits',
    Heading: 'Work from Anywhere',
  },
  rootClassName: '',
}

Banner.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Banner
