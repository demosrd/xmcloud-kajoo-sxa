/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  RichText,
  Link,
} from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './IconAndTextCard.module.css'

const IconAndTextCard = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src={props.fields.icon}
        alt="default-kajoo-image"
        className={styles['image']}
      />
      <Container className={styles['container']}>
        <Text
          text={props.fields.heading}
          tag="span"
          className={` ${styles['text']} ${'paragraph-card-heading'} `}
        />
        <RichText
          value={props.fields.copy}
          className={` ${styles['richtext']} ${'paragraph-card-copy'} `}
        />
      </Container>
      <Container className={styles['container1']}>
        <Link
          href={props.fields.link}
          target="_blank"
          rel="noreferrer noopener"
          text="Optional Link"
          className={` ${styles['link']} ${'link-link'} `}
        />
        <Container className={styles['container2']}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNycgaGVpZ2h0PScxMycgdmlld0JveD0nMCAwIDcgMTMnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00zLjM0NDEyIDYuMjE0NzhMMC4zODI1MDkgOS4xNzYzOUMtMC4xMjc1MDIgOS42ODY0IC0wLjEyNzUwMiAxMC41MTI5IDAuMzgyNTA5IDExLjAyM0wxLjQxNzEyIDEyLjA1NzZMNi42ODQ3IDYuNzlDNy4xMDUxIDYuMzY5NTkgNy4xMDUxIDUuNjg3OTggNi42ODQ3IDUuMjY3NThMMS40MTcxMiAwTDAuMzgyNTA4IDEuMDM0NjFDLTAuMTI3NTAzIDEuNTQ0NjIgLTAuMTI3NTAzIDIuMzcxMTcgMC4zODI1MDggMi44ODExOEwzLjM0NDEyIDUuODQyOEMzLjUzMDExIDYuMDI4NzkgMy41MzAxMSA2LjAyODc5IDMuMzQ0MTIgNi4yMTQ3OFonIGZpbGw9J2JsYWNrJy8+Cjwvc3ZnPgo="
            alt="cornerframeI122"
            className={styles['image1']}
          />
        </Container>
      </Container>
    </Container>
  )
}

IconAndTextCard.defaultProps = {
  fields: {
    copy: '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
    link: '#',
    icon: 'https://app.kajoo.ai/icons/default-imag.svg',
    heading:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
}

IconAndTextCard.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default IconAndTextCard
