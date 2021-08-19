import React, { ImgHTMLAttributes } from "react";
import styled from "styled-components";
import Paragraph from "../typography/Paragraph";

interface IProperties extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
}

const StyledContainer = styled.div`
  width: 16rem;
  height: 24rem;
  text-align: center;
`;

const Thumbnail: React.FC<IProperties> = ({ src, ...properties }) => {
  if (!src)
    return (
      <StyledContainer id="thumbnail">
        <Paragraph>No cover</Paragraph>
      </StyledContainer>
    );

  return <img id="thumbnail" {...properties} src={src} alt="" />;
};

export default Thumbnail;
