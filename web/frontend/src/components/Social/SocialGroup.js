import styled from '@emotion/styled';
import { IoLogoGithub } from '@react-icons/all-files/io/IoLogoGithub';
import { IoLogoLinkedin } from '@react-icons/all-files/io/IoLogoLinkedin';
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
  margin: 0 12px;
  position: relative;
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

const SocialGroup = () => {

    const SocialLinks = [
        {
            key: 'GitHub',
            to: 'https://github.com/cshim31/web',
            label: 'link to GitHub',
            img: <IoLogoGithub />
        },

        {
            key: 'LinkedIn',
            to: 'https://www.linkedin.com/in/chanhuyng-shim-998456196/',
            label: 'link to LinkedIn',
            img: <IoLogoLinkedin />
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

export default SocialGroup;