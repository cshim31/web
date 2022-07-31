import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import constants from '../constants';

const ExperienceMain = styled.main`
    min-height: ${constants.containerHeightMedium};
`;

const SectionBox = styled.div`
    margin: 0px auto;
    width: 1200px;
`;

const App = ({ items }) => {
    const AppExpansion = styled.div`
        padding-top: 150px;
    `;

    const AppHeader = () => {

        const AppBar = styled.div`
            border-bottom: 1px solid ${constants.defaultSecondaryColor};
            font-family: ${constants.fontTopicStyle};
        `

        return (
            <AppBar>
                <h1>Project</h1>
            </AppBar>
            
        )
    }

    const AppBox = styled.ul`
        list-style: none;
        font-family: ${constants.fontContentStyle};
    `;
    
    const AppList = styled.li`
        border: 1px solid ${constants.defaultSecondaryColor};
        margin: 50px 25px 50px 25px;
        width: 200px;
        height: 250px;
        text-align: center;
        float: left;
        position: relative;

        & a {
            display: block;
            padding: 0px 25px 0px 25px;
            text-decoration: none;
            color: ${constants.defaultPrimaryTextColor};
            &:hover {
              transition: ${constants.defaultTransition};
            }
        }
    `;

    
    const AppInfo = styled.div`
    
    `;

    const AppIcon = styled.div`
        padding-top: 20px;
    `
    
    const AppName = styled.strong`
    
    `;

    const AppContent = styled.p`
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    `;

    return (
        <AppExpansion>
            <AppHeader />
            <AppBox>
                {
                    items.map((item) => (
                        <AppList key={item.key}>
                            <a href={item.to}>
                                <AppIcon>
                                    {item.img}
                                </AppIcon>
                                <AppInfo>
                                    <AppName>
                                        {item.name}
                                    </AppName>
                                    <AppContent>
                                        {item.content}
                                    </AppContent>
                                </AppInfo>
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

const createData = (key, img, name, content, to) => {
    return { key, img, name, content, to };
};


const Experience = ({ payload }) => {

    const appInfos = [
        createData (
            'gtri_1',
            <StyledIcon src='/images/gtri.png' alt={'GTRI logo'} />,
            payload.exp_corporation_gtri_header,
            payload.exp_corporation_gtri_description_1,
            'https://gtri.gatech.edu/'
        ),

        createData (
            'gtri_2',
            <StyledIcon src='/images/gtri.png' alt={'GTRI logo'} />,
            payload.exp_corporation_gtri_header,
            payload.exp_corporation_gtri_description_2,
            'https://gtri.gatech.edu/'
        ),

        createData (
            'gtri_3',
            <StyledIcon src='/images/gtri.png'  alt={'GTRI logo'} />,
            payload.exp_corporation_gtri_header,
            payload.exp_corporation_gtri_description_3,
            'https://gtri.gatech.edu/'
        ),

        createData (
            'gttime_1',
            <StyledIcon src={'/images/gtTime.png'} alt={'GT Time logo'} />,
            payload.exp_side_gttime_header,
            payload.exp_side_gttime_description_1,
            'https://play.google.com/store/apps/details?id=com.gttime.android'
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