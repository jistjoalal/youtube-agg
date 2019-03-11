import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaHome, FaQuestion, FaTv } from 'react-icons/fa';

const withTooltip = Component => ({ ...rest }) =>
  <Component
    className="btn btn-secondary"
    data-toggle="tooltip"
    {...rest}
  />

const Anchor = ({ ...rest }) => <a {...rest} />

const TitleLink = withTooltip(Link);
const TitleA = withTooltip(Anchor);

export default TitleLinks = ({ title }) =>
  <div>
    {title != "IDW" &&
      <TitleLink to="/" title="Home">
        <FaHome  />
      </TitleLink>
    }
    {title != "IDW Channels" &&
      <TitleLink to="/channels" title="Channels">
        <FaTv />
      </TitleLink>
    }
    {title != "About" &&
      <TitleLink to="/about" title="About">
        <FaQuestion />
      </TitleLink>
    }
    <TitleA
      target="blank"
      href="https://github.com/jistjoalal/youtube-agg"
      title="Source Code"
    >
      <FaGithub />
    </TitleA>
  </div>
  