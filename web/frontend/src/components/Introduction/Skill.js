import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import constants from '../constants';

const StyledDiv = styled.div`
    text-align: justify;
    margin: 40px 150px 0 0;
    max-width: 50%;

    & ul {
        & li {
            list-style: none;
            font-size: ${constants.fontSizeSemi};
            margin: 20px 0 0 0;

            &:before {
                font-style: normal;
                font-weight: bold;
                content: '✓';
            }
        }
    }
`;

const SkillList = ({ strings }) => {
    return (
        <ul>
            {
                strings.map((string) => {
                    return (
                        <li key={string.key}>
                            {' ' + string.header + ': ' + string.description}
                        </li>
                    );
                })
            }       
        </ul>
    );
}


SkillList.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        header: PropTypes.string,
        description: PropTypes.string,
    })),
};

const Skill = ({ payload }) => {

    const strings = [
        { 
            key: payload.intro_skill_language_header,
            header: payload.intro_skill_language_header,
            description: payload.intro_skill_language_content,
        },

        { 
            key: payload.intro_skill_platform_header,
            header: payload.intro_skill_platform_header,
            description: payload.intro_skill_platform_content,
        },

        { 
            key: payload.intro_skill_software_header,
            header: payload.intro_skill_software_header,
            description: payload.intro_skill_software_content,
        },

        { 
            key: payload.intro_skill_library_header,
            header: payload.intro_skill_library_header,
            description: payload.intro_skill_library_content,
        },
    ]

    return (
        <StyledDiv>
            <SkillList strings={strings} />
        </StyledDiv>
    );
};

Skill.propTypes = {
    payload: PropTypes.object,
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload, 
});

export default connect(mapStateToProps)(Skill);