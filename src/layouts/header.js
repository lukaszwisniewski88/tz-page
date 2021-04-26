import * as React from "react"
import tw, { css, styled } from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../components/logo"

const takeUp = css`
  ${tw`z-10`}
`
const wrapperStyle = css`
  ${tw`flex flex-col items-center relative p-4`}
`

const MenuButton = styled.a(({ primary }) => [
  tw`text-black font-extrabold uppercase bg-gray-300 p-2 rounded w-full hover:bg-opacity-80`,
  primary && tw`bg-gray-50`,
])
const Header = () => (
  <header css={wrapperStyle}>
    <StaticImage
      alt="background"
      css={tw`absolute top-0 left-0 w-full h-full z-0`}
      objectFit="cover"
      objectPosition="50% 0%"
      quality="90"
      src="../images/bg_hero.png"
    />
    <div css={takeUp}>
      <Logo />
    </div>
    <h1 tw="text-3xl text-white font-bold font-sans z-10 text-center leading-none p-4">
      Przewoźnik o ugruntowanej renomie
    </h1>
    <p tw=" invisible md:visible text-xl font-extralight z-10 text-white font-serif">
      Twoja przesyłka w dobrych rękach
    </p>
    <nav tw="flex flex-col space-y-4 justify-center items-center z-10 text-center p-4">
      <MenuButton href="#Flota">flota</MenuButton>
      <MenuButton href="#Projekty">projekty</MenuButton>
      <MenuButton href="#O nas">o nas</MenuButton>
      <MenuButton primary href="#Kontakt">
        kontakt
      </MenuButton>
    </nav>
  </header>
)

export default Header
