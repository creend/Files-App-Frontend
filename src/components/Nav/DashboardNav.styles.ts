import { HiPresentationChartLine } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { MdImage, MdOutlineKeyboardBackspace } from 'react-icons/md';
import { VscFilePdf } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface NavLinkProps {
  activeClassName: string;
}

interface IconProps {
  alt: string;
}

const IconStyles = css`
  color: #191919;
  padding: 10px;
  background-color: transparent;
  width: 60px;
  border-radius: 17px;
  height: 60px;
  margin: 10px 5px 10px 15px;
  @media (max-width: 650px) {
    width: 60px;
    height: 60px;
    margin: 0;
  }
  @media (max-width: 385px) {
    width: 45px;
    height: 45px;
  }
  @media (max-width: 345px) {
    width: 40px;
    height: 40px;
  }
`;

export const DashboardNavigation = styled.nav`
  background-color: #fff;
  position: fixed;
  left: 0;
  z-index: 5;
  top: 0;
  padding: 100px 0;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 650px) {
    width: 100%;
    height: 100px;
    padding: 0;
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: 335px) {
    flex-wrap: wrap;
    /* height: 150px; */
  }
`;

export const StyledNavLink = styled(NavLink)<NavLinkProps>`
  font-size: 1.25rem;
  text-decoration: none;
  text-align: center;
  width: 80%;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.${(props) => props.activeClassName} {
    background-color: #191919;
    & > svg {
      color: white;
    }
    & > p {
      color: white;
    }
  }
  @media (max-width: 650px) {
    width: auto;
    justify-content: center;
  }
`;

export const StyledBackLink = styled(StyledNavLink)`
  background-color: #48cae4;
  & > p,
  & > svg {
    color: #fff;
  }
  @media (max-width: 650px) {
    margin-top: 0;
  }
`;

export const Paragraph = styled.p`
  color: #191919;
  font-weight: 500;
  @media (max-width: 650px) {
    display: none;
  }
`;

export const PdfIcon = styled(VscFilePdf)<IconProps>`
  ${IconStyles}
`;

export const ImgIcon = styled(MdImage)<IconProps>`
  ${IconStyles}
`;

export const PptxIcon = styled(HiPresentationChartLine)<IconProps>`
  ${IconStyles}
`;

export const UserIcon = styled(FaUserCircle)<IconProps>`
  ${IconStyles}
`;

export const GoBackIcon = styled(MdOutlineKeyboardBackspace)<IconProps>`
  ${IconStyles}
`;
