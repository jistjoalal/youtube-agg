import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaHome, FaQuestion, FaTv } from 'react-icons/fa';

import InstallButton from './InstallButton';
import ToggleButton from './ToggleButton';

const withTooltip = Component => ({ sel, ...rest }) =>
  <Component
    className={`button-light ${sel ? 'active' : ''}`}
    data-toggle="tooltip"
    {...rest}
  />

const Anchor = ({ href, ...rest }) => 
  <a target="_blank" rel="noopener" href={href} {...rest} />

const TitleLink = withTooltip(Link);
const TitleA = withTooltip(Anchor);

export default TitleLinks = ({ title }) => {
  return (
    <div className="TitleLinks">

      <ToggleButton />

      <InstallButton />
      
      <TitleLink
        to="/"
        title="Home"
        sel={title == 'IDW'}
      >
        <FaHome  />
      </TitleLink>

      <TitleLink
        to="/channels"
        title="Channels"
        sel={title == 'IDW Channels'}
      >
        <FaTv />
      </TitleLink>

      <TitleLink
        to="/about"
        title="About"
        sel={title == 'About'}
      >
        <FaQuestion />
      </TitleLink>
      
      <TitleA
        href="https://github.com/jistjoalal/youtube-agg"
        title="Source Code"
      >
        <FaGithub />
      </TitleA>
    </div>
  );
}
