import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const Wrapper = styled.section(({ reversed }) => [
  tw`border-4 border-black w-full flex flex-row`,
  reversed && tw`flex-row-reverse`,
]);

function Section({
  title, children, image, alt, reversed,
}) {
  return (
    <Wrapper id={title} reversed={reversed}>
      <div tw="flex-1">
        <div tw="p-4 pt-8 text-center space-y-3.5">
          <h3 tw="font-bold text-xl uppercase">{title}</h3>
          <p>{children}</p>
        </div>
      </div>
      <div tw="flex-1">
        <img tw="object-cover" src={image} alt={alt} />
      </div>
    </Wrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  reversed: PropTypes.bool.isRequired,
};
export default Section;
