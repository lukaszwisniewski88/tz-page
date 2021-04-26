import * as React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/react"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
      />
      <div tw="w-full lg:max-w-screen-lg m-auto text-sm min-h-screen flex flex-col justify-between">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

        <main tw="space-y-4">{children}</main>
        <footer css={tw`bg-black text-white text-xs font-thin font-serif p-6`}>
          © {new Date().getFullYear()}, Zbudowane przez
          {` `}
          <a tw="text-red-500" href="https://www.szery.net.pl/">
            Szery.net.pl
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
