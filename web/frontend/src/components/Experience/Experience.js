import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper
}   from '@mui/material';

import constants from '../constants';


const StyledExperience = styled.div`
    margin-top: 150px;
    margin-left: 250px;
    min-height: ${constants.containerHeightMedium};
    height: auto;

    .corporation-section {
        display: block;
    }

    .corporation-overview {
        max-width: 500px;
        text-transform: uppercase;
    }

    .side-section {
        display: block;
    }

    .side-overview {
        max-width: 500px;
        text-transform: uppercase;
    }
`;


const StyledIcon = styled.img`
    width: 50;
    height: 50;
`;
  
const StyledDiv = styled.div`
    display: block;
    max-width: 500px;
    max-height: 250px;
`;  

const TextBox = ({ strings }) => {
    return (
        <StyledDiv>
            {
                strings.map((string) => (
                    <div>{string}</div>
                ))
            }
        </StyledDiv>
    );
};

const Corporations = ({ strings }) => {
    return (
        <TableContainer sx={{ maxWidth: 600 }}>
            <Table sx={{ minWidth: 100 }} aria-label="corporations table">
                <TableBody>
                    {
                        strings.map((row) => (
                            <TableRow
                            key={row.img}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.img}
                            </TableCell>
                            <TableCell align="left">
                                <TextBox strings={row.desc}/>
                            </TableCell>
                            <TableCell align="left">
                                <TextBox strings={row.role}/>
                            </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};


const createData = (img, desc, role ) => {
    return { img, desc, role };
};


const Experience = ({ payload }) => {

    const strings = [
        createData (
            undefined, 
            [
                'dafdfa', 'dafdfa', 'dafdfa'
            ], 
            
            [
                'dafdfa', 'dafdfa', 'dafdfa'
            ]
        ),
    ];

    return (
        <StyledExperience>
            <div className='corporation-section'>
                <div className='corporation-overview'>
                    <h2> {'corporation project '} </h2>
                </div>
                <div className='corporation-description'>
                    <p> {'Followings are project that I successfully managed'} </p>
                </div>
                <Corporations strings={strings} />
            </div>

            <div className='side-section'>
                <div className='side-overview'>
                    <h2> {'side project '} </h2>
                </div>
                <div className='side-description'>
                    <p> {'Followings are project that I successfully managed'} </p>
                </div>
                <Corporations strings={strings} />
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