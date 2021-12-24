import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const VerticalAlignDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
            img: <GitHubIcon />
        },

        {
            key: 'LinkedIn',
            to: links.linkedin,
            label: 'link to LinkedIn',
            img: <LinkedInIcon />
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