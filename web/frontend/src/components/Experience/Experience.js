import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import constants from '../constants';
import gtriImg from '../../img/gtri.png';
import gtTimeImg from '../../img/gtTime.png';

const ExperienceMain = styled.main`
    margin: auto;
    padding: 150px 25px 25px 25px;
    min-height: ${constants.containerHeightMedium};

    .corporation-section {
    }

    .corporation-overview {
        text-transform: uppercase;
    }

    .side-section {
        margin-top: 50px;
    }

    .side-overview {
        text-transform: uppercase;
    }
`;

const StyledArticle = styled.article`

`

const StyledIcon = styled.img`
    width: 100px
`;
  
const StyledDiv = styled.div`
    display: block;
    max-height: 250px;
`;  

const StyledLineBreak = styled.hr`
    opacity: 0.6;
    margin-top: 50px;
`;

const HeaderDiv = styled.div`
    width: 200px;
`

const HeaderTextBox = ({ strings }) => {
    return (
        <StyledDiv>
            {
                strings.map((string) => (
                    <HeaderDiv key={string}>
                        {string}
                    </HeaderDiv>
                ))
            }
        </StyledDiv>
    );
};


const SummaryDiv = styled.div`
    width: 1000px;
`

const SummaryTextBox = ({ strings }) => {
    return (
        <StyledDiv>
            {
                strings.map((string) => (
                    <SummaryDiv key={string}>
                        {string}
                    </SummaryDiv>
                ))
            }
        </StyledDiv>
    );
};

const InnerTableContainer = styled.div`
    overflow-x: hidden !important;
    text-overflow: ellipsis !important;
    width: 100%;
`;

const StyledTable = styled.table`
    table-layout: auto;

    & th,
    & tr,
    & td {
        border-style:hidden;
    }
`;

const StyledTableBody = styled.tbody`

`;

const StyledTableRow = styled.tr`

`;

const ImageTableCell = styled.td`
    width: 100px;
`;

const ScaledTableCell = styled.td`
    padding-right: 20px !important;
`;

const ListTable = ({ strings }) => {
    return (
        <InnerTableContainer>
            <StyledArticle>
                <StyledTable aria-label="list table">
                    <StyledTableBody>
                        {
                            strings.map((row) => (
                                <StyledTableRow
                                key={row.img}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                >
                                <ImageTableCell>
                                    {row.img}
                                </ImageTableCell>
                                <ScaledTableCell>
                                    {row.desc}
                                </ScaledTableCell>
                                <ScaledTableCell>
                                    {row.role}
                                </ScaledTableCell>
                                </StyledTableRow>
                            ))
                        }
                    </StyledTableBody>
                </StyledTable>
            </StyledArticle>
        </InnerTableContainer>
    );
};

ListTable.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.node,
        desc: PropTypes.node,
        role: PropTypes.node,
    }))
};


const createData = (img, desc, role ) => {
    return { img, desc, role };
};


const Experience = ({ payload }) => {

    const corporationStrings = [
        createData (
            <a href='https://gtri.gatech.edu/'>
                <StyledIcon src={gtriImg} alt={'GTRI logo'} />
            </a>,
            <HeaderTextBox strings={[
                payload.exp_corporation_gtri_header,
                payload.exp_corporation_gtri_time_1,
                payload.exp_corporation_gtri_time_2,
            ]} />,
            <SummaryTextBox strings={[
                payload.exp_corporation_gtri_type,
                payload.exp_corporation_gtri_description_1,
                payload.exp_corporation_gtri_description_2,
                payload.exp_corporation_gtri_tools,
            ]} />,
        ),
    ];

    const sideStrings = [
        createData (
            <a href='https://play.google.com/store/apps/details?id=com.gttime.android'>
                <StyledIcon src={gtTimeImg} alt={'GT Time logo'} />
            </a>,
            <HeaderTextBox strings={[
                payload.exp_side_gttime_header,
                payload.exp_side_gttime_time_1,
                payload.exp_side_gttime_time_2,
            ]} />,
            <SummaryTextBox strings={[
                payload.exp_side_gttime_type,
                payload.exp_side_gttime_description_1,
                payload.exp_side_gttime_description_2,
                payload.exp_side_gttime_tools,
            ]} />,
        ),
    ]


    return (
        <ExperienceMain>
            <div className='corporation-section'>
                <div className='corporation-overview'>
                    <h2> {payload.experience_corporation_header} </h2>
                </div>
                <div className='corporation-description'>
                    <p> {payload.exp_description} </p>
                </div>
                <ListTable strings={corporationStrings} />
            </div>

            <div className='side-section'>
                <div className='side-overview'>
                    <h2> {payload.experience_personal_header} </h2>
                </div>
                <div className='side-description'>
                    <p> {payload.exp_description} </p>
                </div>
                <ListTable strings={sideStrings} />
            </div>
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