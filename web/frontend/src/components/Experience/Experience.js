import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import constants from '../constants';
import gtriImg from '../../img/gtri.png';
import gtTimeImg from '../../img/gtTime.png';

const ExperienceMain = styled.main`
    min-height: ${constants.containerHeightMedium};
`;

const SectionBox = styled.div`
    position: relative;
    margin: 0 auto;
`;

const App = ({ items }) => {
    const AppExpansion = styled.div`
        padding: 20px 0px 125px;
    `;

    const AppBox = styled.ul`
        list-style: none;
    `;
    
    const AppList = styled.li`

    `;
    

    return (
        <AppExpansion>
            <AppBox>
                {
                    items.map((item) => (
                        <AppList>
                            <a href={item.to}>
                                <div>
                                    {item.img}
                                </div>
                                <div>
                                    {item.name}
                                    {item.content}
                                </div>
                            </a>
                        </AppList>
                    ))
                }
            </AppBox>
        </AppExpansion>
    )
}

const StyledIcon = styled.img`
    width: 70px;
    height: 70px;
`;

const createData = (img, name, content, to) => {
    return { img, name, content, to };
};


const Experience = ({ payload }) => {

    const appInfos = [
        createData (
            <StyledIcon src={gtriImg} alt={'GTRI logo'} />,
            <strong>
                {payload.exp_corporation_gtri_header}
            </strong>,
            <p>
                {payload.exp_corporation_gtri_description_1}
            </p>,
            <a href='https://gtri.gatech.edu/'/>
        ),

        createData (
            <StyledIcon src={gtTimeImg} alt={'GT Time logo'} />,
            <strong>
                {payload.exp_side_gttime_header}
            </strong>,
            <p>
                {payload.exp_side_gttime_description_1}
            </p>,
            <a href='https://play.google.com/store/apps/details?id=com.gttime.android'/>
        ),
    ];

    return (
        <ExperienceMain>
            <SectionBox>
                <App items={appInfos} />
            </SectionBox>
        </ExperienceMain>
    );
};

Experience.propTypes = {
    payload: PropTypes.object,
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload, 
});

export default connect(mapStateToProps)(Experience);