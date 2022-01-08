import styled from '@emotion/styled';

import constants from '../constants';

const CreditDiv = styled.div`
    display: flex;
    justify-content: initial;
    padding: 7px 0 0 0;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        max-width: 10%;
    }
    
`;

const LinkWrapper = styled.div`
    margin-right: 7px;
    font-weight: ${constants.fontWeightSmall};
    font-size: ${constants.fontSizeMini};

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        font-size: ${constants.fontSizeMini};
    }
`;

const Credit = () => {
    return (
        <CreditDiv>
            <LinkWrapper>
                <a href='https://www.freepik.com/vectors/people'>People vector created by stories - www.freepik.com</a>
            </LinkWrapper>
            <span> {' | '} </span>
            <LinkWrapper>
                <a href='https://www.freepik.com/vectors/banner'>Banner vector created by katemangostar - www.freepik.com</a>   
            </LinkWrapper>
            <span> {' | '} </span>
            <LinkWrapper>
                <a href='https://www.freepik.com/vectors/technology'>Technology vector created by freepik - www.freepik.com</a>
            </LinkWrapper>
            <span> {' | '} </span>
            <LinkWrapper>
                <a href='https://www.freepik.com/vectors/people'>People vector created by pch.vector - www.freepik.com</a>
            </LinkWrapper>
        </CreditDiv>
    );
};

export default Credit;