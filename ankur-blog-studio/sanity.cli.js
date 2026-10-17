import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'p5l1yo36',
    dataset: 'production'
  },
  deployment: {
    appId: 'd7sel4i2be2fh6vjhf7vu2wr',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
