import '../styles/reset.css'
import '../styles/globals.css'
import React, { type ReactNode } from 'react'

import PropTypes from 'prop-types'

import { Dosis } from 'next/font/google'

const dosis = Dosis({
  weight: '400',
  subsets: ['latin'],
  style: ['normal']
})

export const metadata = {
  title: 'E-commerce Estelar',
  description: 'Desenvolvido por José leandro'
}

/**
 * RootLayout is a React component that sets up the layout of the page.
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - To be rendered within the layout.
 * @return {ReactElement} The rendered layout element.
 */

interface RootLayoutProps {
  children: ReactNode
}

function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="pt-BR">
      <head>
        {/* Link para atribuir a imagem do logo - <a target="_blank" href="https://icons8.com/icon/bfrmpYwcFZrk/forma-starburst">Forma Starburst</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        <link rel="icon" type="image/x-icon" href="/img/icons8-forma-starburst-48.png" />
      </head>
      <body className={dosis.className}>{children}</body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default RootLayout
