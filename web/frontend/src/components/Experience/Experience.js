import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
}   from '@mui/material';

import constants from '../constants';
import gtriImg from '../../img/gtri.png';
import gtTimeImg from '../../img/gtTime.png';

const StyledExperience = styled.div`
    margin-top: 150px;
    min-height: ${constants.containerHeightMedium};
    height: auto;

    .corporation-section {
        display: block;
        margin-left: 250px;
    }

    .corporation-overview {
        text-transform: uppercase;
    }

    .side-section {
        display: block;
        margin-left: 250px;
        margin-top: 50px;
    }

    .side-overview {
        text-transform: uppercase;
    }
`;


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

const ListTable = ({ strings }) => {
    return (
        <TableContainer>
            <Table aria-label="list table">
                <TableBody>
                    {
                        strings.map((row) => (
                            <TableRow
                            key={row.img}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >
                            <TableCell component="th" scope="row" sx={{ 'width': 100}}>
                                {row.img}
                            </TableCell>
                            <TableCell align="left">
                                {row.desc}
                            </TableCell>
                            <TableCell align="left">
                                {row.role}
                            </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
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
        <StyledExperience>
            <div className='corporation-section'>
                <div className='corporation-overview'>
                    <h2> {payload.experience_corporation_header} </h2>
                </div>
                <div className='corporation-description'>
                    <p> {payload.exp_description} </p>
                </div>
                <ListTable strings={corporationStrings} />
            </div>

            <StyledLineBreak />

            <div className='side-section'>
                <div className='side-overview'>
                    <h2> {payload.experience_personal_header} </h2>
                </div>
                <div className='side-description'>
                    <p> {payload.exp_description} </p>
                </div>
                <ListTable strings={sideStrings} />
            </div>
        </StyledExperience>
    );
};

Experience.propTypes = {
    payload: PropTypes.object,
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload, 
});

export default connect(mapStateToProps)(Experience);