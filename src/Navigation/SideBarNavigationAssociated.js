import React from 'react'
import { NavigationReference } from './NavigationRefrence'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import TuneIcon from '@material-ui/icons/Tune'
import TableChartIcon from '@material-ui/icons/TableChart'

export const SideBarNavigationAssociated = {
  Targets: {
    url: NavigationReference.Targets.index,
    icon: <HighlightOffIcon />,
    children: {
      Strings: {},
      Arrays: {},
    },
  },
  Animations: {
    url: NavigationReference.Animations,
    icon: (
      <img
        src="https://img.icons8.com/ios/20/000000/play-property.png"
        alt="animations"
      />
    ),
    children: {
      width: {},
      height: {},
    },
  },
  Parameters: {
    url: NavigationReference.Parameters,
    icon: <TuneIcon />,
  },
  Properties: {
    url: NavigationReference.Properties,
    icon: <TableChartIcon />,
  },
  SVG: {
    url: NavigationReference.SVG,
    icon: (
      <img
        src="https://img.icons8.com/ios-glyphs/30/000000/--broken-heart--v2.png"
        alt="SVG"
      />
    ),
  },
}
