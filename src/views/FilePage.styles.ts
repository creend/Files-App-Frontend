import styled, { css } from "styled-components";
import { VscFilePdf } from "react-icons/vsc";
import { MdImage } from "react-icons/md";
import { AiFillFolder } from "react-icons/ai";
import { Button } from "../components/Button/Button";

interface IconProps {
  alt: string;
}

const IconStyles = css`
  color: ${({ theme }) => theme.contrastColor};
  background-color: transparent;
  width: 270px;
  height: 270px;

  @media (max-width: 1050px) {
    width: 150px;
    height: 150px;
  } ;
`;

export const FileWrapper = styled.section`
  display: flex;
  margin: 70px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const InfoWrapper = styled.section``;

export const ButtonsWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const PdfIcon = styled(VscFilePdf)<IconProps>`
  ${IconStyles}
`;

export const ImgIcon = styled(MdImage)<IconProps>`
  ${IconStyles}
`;

export const OtherIcon = styled(AiFillFolder)<IconProps>`
  ${IconStyles}
`;

export const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  font-size: 2.75rem;
  color: ${({ theme }) => theme.contrastColor};
  @media (max-width: 1050px) {
    font-size: 2rem;
  } ;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 10px 5px;
  font-weight: 500;

  color: ${({ theme }) => theme.contrastColor};
  @media (max-width: 1050px) {
    font-size: 1.25rem;
  } ;
`;

export const DownloadButton = styled(Button)`
  text-decoration: none;
`;
