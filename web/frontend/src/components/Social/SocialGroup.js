import styled from '@emotion/styled';
import { 
    AiFillGithub,
    AiFillLinkedin
} from 'react-icons/ai';
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

const SocialGroup = () => {

    const SocialLinks = [
        {
            key: 'GitHub',
            to: 'https://github.com/cshim31/web',
            label: 'link to GitHub',
            img: <AiFillGithub />
        },

        {
            key: 'LinkedIn',
            to: 'https://www.linkedin.com/in/chanhuyng-shim-998456196/',
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

export default SocialGroup;