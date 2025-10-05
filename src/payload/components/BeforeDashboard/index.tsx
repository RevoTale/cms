import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import './index.scss'
import { SeedButton } from './SeedButton'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>
          Welcome to your dashboard! <SeedButton />
        </h4>
      </Banner>
    </div>
  )
}

export default BeforeDashboard
