import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
    Card,
    CardContent 
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

import constants from '../constants';

const ExperienceContainer = styled.div`
    background-color: ${constants.defaultSecondaryColor} !important;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 50px 0 50px 0;
    & a {
        color: ${constants.defaultPrimaryColorSolid};
    }
`;

const StyledCard = styled(Card)`
    max-width: 25%;
    margin: 40px 20px 40px 0;
`;

const StyledHeader = styled.div`
    font: ${constants.fontStyleMedium};
`;

const StyledDescription = styled.p`
    font: ${constants.fontStyleSmall};
`;

const ExperienceGroup = ({ payload }) => {
    return (
        <ExperienceContainer>
            <StyledCard>
                <CardContent>
                    <LanguageIcon />
                    <StyledHeader>
                        {payload.experience_corporation_header}
                    </StyledHeader>
                    <StyledDescription>
                        {payload.experience_corporation_description}
                    </StyledDescription>
                </CardContent>
            </StyledCard>
            <StyledCard>
                <CardContent>
                    <LanguageIcon />
                    <StyledHeader>
                        {payload.experience_personal_header}
                    </StyledHeader>
                    <StyledDescription>
                        {payload.experience_personal_description}
                    </StyledDescription>
                </CardContent>
            </StyledCard>
        </ExperienceContainer>
    );
};

ExperienceGroup.propTypes = {
    payload: PropTypes.object,
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload,    
});

export default connect(mapStateToProps)(ExperienceGroup);