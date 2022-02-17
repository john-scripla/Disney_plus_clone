import React from 'react'
import styled from 'styled-components'

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://cdn.vox-cdn.com/thumbor/K_gXqgjL3uJ1H_NwYmRAFCR-syU=/0x0:4096x2304/920x613/filters:focal(1973x1175:2627x1829):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg"/>
            </Background>
            <ImageTitle>
                <img src="https://cdn.vox-cdn.com/thumbor/K_gXqgjL3uJ1H_NwYmRAFCR-syU=/0x0:4096x2304/920x613/filters:focal(1973x1175:2627x1829):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                <img src="/DISNEY_CLONE_CHALLENGE/images/play-icon-black.png"/>
                <span>PLAY</span>

                </PlayButton>
                <TrailerButton>
                <img src="/DISNEY_CLONE_CHALLENGE/images/play-icon-white.png"/>
                <span>Trailer</span>

                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="DISNEY_CLONE_CHALLENGE/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
            hey hey  hey hey hey hey hey  hey hey hey hey hey  hey hey hey hey hey  hey hey hey hey hey  hey hey hey 
            </SubTitle>
            <Description>
                hey hey  hey hey hey hey hey  hey hey hey hey hey  hey hey hey hey hey  hey hey hey hey hey  hey hey hey hey hey  hey hey hey 
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`

const Background = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity: 0.8;

img {
    width:100%;
    height: 100%;
    object-fit:cover;
}
`

const ImageTitle = styled.div`
height: 30vh;
min-height:170px;
width:35vh;
img {
    width:100%;
    height:100%;
    object-fit:contain;
}
`

const Controls = styled.div`
display:flex;
align-items: center;

`
const PlayButton = styled.button`
border-radius:4px;
font-size:15px;
padding:0px 24px;
margin-right:22px;
display:flex;
align-items:center;
height:56px;
background-color: rgb(249,249,249);
letter-spacing:1.8px;
cursor:pointer;
&:hover{
    background: rgb(198,198,198);

}

`
const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rbg(249,249,249);
text-transform:uppercase;
`
const AddButton = styled.button`
margin-right: 16px;
width:44px;
height:55px;
display: flex;
align-items:center;
justify-content:center;
border: 2px solid white;
background-color: rgba(0,0,0,0.6);
border-radius:50px;
cursor: pointer;
    span{
        font-size:30px;
        color:white;

    }
`
const GroupWatchButton = styled(AddButton)`
background: rgb(0,0,0);

`

const SubTitle = styled.div`
color: rgb(249,249,249);
font-size:15px;
min-height: 20px;
margin-top:26px;
`

const Description = styled.div`
line-height:1.4;
font-size: 20px;
padding-top:16px;
color: rgb(249,249,249);


`