import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Banner',
    displayName: 'Banner',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['headless-main'],
    contentResolver: '',
    fields: [
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/65329f5937a758f5fb24117f/assets/dI_hGuxr1Y6l.jpeg',
      },
      {
        name: 'Heading',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Work from Anywhere',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'At Verndale, we’re focused on working together no matter where you are. Whether in person at our Boston or Quito offices or online, collaboration is our top priority—not physical location.',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'View All Benefits',
      },
    ],
  })
}
