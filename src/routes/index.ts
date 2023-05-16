import hero from './hero'
import projects from './projects'
import contact from './contact'
import { type ReactElement } from 'react'

export interface Route {
  id: string
  label: string
  component: ReactElement
  url: string
  exact: boolean
}

export default [
  hero,
  projects,
  contact,
]
