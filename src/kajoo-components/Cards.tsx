/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Cards.module.css'

const Cards = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Text
              text="Our Culture"
              tag="span"
              className={` ${styles['text']} ${'header-h1'} `}
            />
            <Text
              text="Our company culture is built around global inclusivity and we know how to have fun (face-to-face and Zoom-to-Zoom)."
              tag="span"
              className={styles['text01']}
            />
          </Container>
        </Container>
        <Container className={styles['container03']}>
          <Container className={styles['container04']}>
            <Container className={styles['container05']}>
              <Text
                text="Company Parties"
                tag="span"
                className={styles['text02']}
              />
              <Text
                text="Holiday &amp; Summer Celebrations"
                tag="span"
                className={styles['text03']}
              />
            </Container>
            <Container
              bgImage="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/65329f5937a758f5fb24117f/assets/mP3_aN4vrLPE.jpeg"
              className={styles['container06']}
            >
              <Container
                bgImage="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/65329f5937a758f5fb24117f/assets/Vyn9NdVeJ5xN.jpeg"
                className={styles['container07']}
              />
            </Container>
          </Container>
          <Container className={styles['container08']}>
            <Container className={styles['container09']}>
              <Text
                text="Team Outings"
                tag="span"
                className={styles['text04']}
              />
              <Text
                text="Year-Round Social Activities"
                tag="span"
                className={styles['text05']}
              />
            </Container>
            <Container className={styles['container10']}>
              <Container
                bgImage="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/65329f5937a758f5fb24117f/assets/Jsa9DoOLNdJY.jpeg"
                className={styles['container11']}
              />
            </Container>
          </Container>
          <Container className={styles['container12']}>
            <Container className={styles['container13']}>
              <Text
                text="Office Lunches"
                tag="span"
                className={styles['text06']}
              />
              <Text
                text="Dig in at our Boston &amp; Quito Hubs"
                tag="span"
                className={styles['text07']}
              />
            </Container>
            <Container className={styles['container14']}>
              <Container
                bgImage="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/65329f5937a758f5fb24117f/assets/FWNEXoMW8YsC.jpeg"
                className={styles['container15']}
              />
            </Container>
          </Container>
          <Container className={styles['container16']}>
            <Container className={styles['container17']}>
              <Text
                text="Coffee Breaks"
                tag="span"
                className={styles['text08']}
              />
              <Text
                text="Virtual Knowledge-Share"
                tag="span"
                className={styles['text09']}
              />
            </Container>
            <Container className={styles['container18']}>
              <Container
                bgImage="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/65329f5937a758f5fb24117f/assets/V3dvLHuz74bO.jpeg"
                className={styles['container19']}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Cards.defaultProps = {
  fields: {},
  rootClassName: '',
}

Cards.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Cards
