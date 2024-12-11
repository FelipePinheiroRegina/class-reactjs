/* eslint-disable */
import 'styled-components'
import { themes } from '../styles/themes'

type ThemeType = typeof themes

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}