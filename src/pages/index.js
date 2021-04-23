import React from 'react'
import tw from 'twin.macro'
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
  

  <>
    <Seo title="Strona Głowna" lang="pl" description="TZ Transport przewoźnik na którym można polegać, przesyłki drobnicowe, oraz ekspresowe" />
      <section id="flota" tw="border-4 border-black w-full flex flex-row">
        <div tw="flex-1">
          <div tw="p-4 pt-8 text-center space-y-3.5">
            <h3 tw="font-bold text-xl uppercase">Flota</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, ipsum? Eligendi quod ratione tempora voluptatem quas, vitae quibusdam omnis aspernatur?
            </p>

          </div>
        </div>
        <StaticImage src="../images/van1.png" alt="człowiek z paczką" tw="flex-1" objectFit="cover"/>
      </section>
      <section id="projekty" tw="border-4 border-black w-full flex flex-row-reverse">
        <div tw="flex-1">
          <div tw="p-4 pt-8 text-center space-y-3.5">
            <h3 tw="font-bold text-xl uppercase">Projekty</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, ipsum? Eligendi quod ratione tempora voluptatem quas, vitae quibusdam omnis aspernatur?
            </p>

          </div>
        </div>
        <StaticImage src="../images/van2.png" alt="człowiek z paczką" tw="flex-1" objectFit="cover"/>
      </section>
      <section id="onas" tw="border-4 border-black w-full flex flex-row">
        <div tw="flex-1">
          <div tw="p-4 pt-8 text-center space-y-3.5">
            <h3 tw="font-bold text-xl uppercase">O nas</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, ipsum? Eligendi quod ratione tempora voluptatem quas, vitae quibusdam omnis aspernatur?
            </p>

          </div>
        </div>
        <StaticImage src="../images/van3.png" alt="człowiek z paczką" tw="flex-1" objectFit="cover"/>
      </section>
  </>
)}

export default IndexPage
