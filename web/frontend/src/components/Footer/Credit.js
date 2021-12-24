import styled from '@emotion/styled';

const CreditDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 7px 0 0 0;
`;

const LinkWrapper = styled.div`
    margin-right: 7px;
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
        </CreditDiv>
    );
};

export default Credit;