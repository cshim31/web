import styled from '@emotion/styled';
import { 
    AiFillGithub,
    AiFillLinkedin
} from 'react-icons/ai';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import constants from '../constants';

const VerticalAlignDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & a {
        color: ${constants.primaryTextColor};
        &:hover {
            color: ${constants.primaryTextColor};
            opacity: 0.6;
        }
    }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 12px;
  position: relative;

  &:hover {
      opacity: 0.6;
  }
`;

const ImageWrapper = ({ SocialLink }) => {
    return (
        <a 
            key={SocialLink.key}
            href={SocialLink.to}
            aria-label={SocialLink.label}
        >
            {SocialLink.img}
        </a>
    );
};


ImageWrapper.propTypes = {
    SocialLink: PropTypes.object,
}

const SocialGroup = ({ links }) => {

    const SocialLinks = [
        {
            key: 'GitHub',
            to: links.github,
            label: 'link to GitHub',
            img: <AiFillGithub />
        },

        {
            key: 'LinkedIn',
            to: links.linkedin,
            label: 'link to LinkedIn',
            img: <AiFillLinkedin />
        }
    ];

    return (
         <VerticalAlignDiv>
             {
                SocialLinks.map((SocialLink) => (
                <LogoContainer key={SocialLink.key}>
                    <ImageWrapper 
                        SocialLink={SocialLink}
                    />
                </LogoContainer>
                ))
             }
         </VerticalAlignDiv>
    );
};

SocialGroup.propTypes = {
    links: PropTypes.object
};

const mapStateToProps = (state) => ({

    links:  {
        github: state.metadata.payload.link_github,
        linkedin: state.metadata.payload.link_linkedin,
    },

});

export default connect(mapStateToProps)(SocialGroup);