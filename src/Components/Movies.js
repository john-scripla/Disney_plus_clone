import React from 'react'
import styled from  'styled-components'


const Movies = () => {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://media.istockphoto.com/vectors/people-interacting-with-charts-and-analyzing-statistics-data-concept-vector-id1131479968"/>
                </Wrap>
                <Wrap>
                    <img src="https://media.istockphoto.com/vectors/people-interacting-with-charts-and-analyzing-statistics-data-concept-vector-id1131479968"/>
                </Wrap>
                <Wrap>
                    <img src="https://media.istockphoto.com/vectors/people-interacting-with-charts-and-analyzing-statistics-data-concept-vector-id1131479968"/>
                </Wrap>
                <Wrap>
                    <img src="https://media.istockphoto.com/vectors/people-interacting-with-charts-and-analyzing-statistics-data-concept-vector-id1131479968"/>
                </Wrap>
                <Wrap>
                    <img src="https://media.istockphoto.com/vectors/people-interacting-with-charts-and-analyzing-statistics-data-concept-vector-id1131479968"/>
                </Wrap>
                <Wrap>
                    <img src="https://media.istockphoto.com/vectors/people-interacting-with-charts-and-analyzing-statistics-data-concept-vector-id1131479968"/>
                </Wrap>
                <Wrap>
                    <img src="https://media.istockphoto.com/vectors/people-interacting-with-charts-and-analyzing-statistics-data-concept-vector-id1131479968"/>
                </Wrap>
                <Wrap>
                    <img src="https://media.istockphoto.com/vectors/people-interacting-with-charts-and-analyzing-statistics-data-concept-vector-id1131479968"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
display:grid;
grid-gap: 25px;
grid-template-columns: repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
border-radius:10px;
cursor:pointer;
overflow:hidden;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


img {
    width:100%;
    height:100%;
    object-fit:cover;
    
}

    &:hover {
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }
`
