import React from 'react'
import tw, {styled } from 'twin.macro'

const Wrapper = styled.section(({ reversed }) => [
    tw`border-4 border-black w-full flex flex-row`,
    reversed && tw`flex-row-reverse`
])
const images = [
    "../images/van1.png",
    "../images/van2.png",
    "../images/van3.png",
    "../images/van4.png",
]

function Section({title, children, image, alt, reversed}) {
    return (
        <Wrapper reversed={reversed}>
        <div tw="flex-1">
          <div tw="p-4 pt-8 text-center space-y-3.5">
                    <h3 tw="font-bold text-xl uppercase">{title }</h3>
            <p>
                        { children}
            </p>
          </div>
        </div>
                <img tw="flex-1 object-cover" src={image} alt={ alt}/>
            
      </Wrapper>
    )
}

export default Section