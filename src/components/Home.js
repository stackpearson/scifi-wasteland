import styled from 'styled-components';
import adminTeam from '../assets/adminTeam.png';
import kermit from '../assets/kermit.jpg';

function Home() {
    const FlexContainer = styled.div`
        display: flex;
        margin: 10px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    `
    const FlexBox = styled.div`
        display: flex;
        padding: 10px;  
    `
    const KermitBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: .2em;
    `
    const Img = styled.img`
        display: block;
        margin: 0 auto;
        max-width: 550px;
        border-radius: 1em;
    `
    const TextBlock = styled.div`
        padding: 10px;
        border-radius: 10px;
        border-left: 1px solid white;
        border-right: 1px solid white;
        line-height: 1.25em;
        font-size: 13pt;
        max-width: 750px;
        min-width: 300px;
        text-align: center;
        margin: 0 auto;
    `

    const VideoContainer = styled.div`
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
        height: 0;
    `

    const VideoFrame = styled.iframe`
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    `
    return (<>
        <VideoContainer>
            <VideoFrame
                src="https://www.youtube.com/embed/vmSt3P93xws"
                title="True Tales of the Wasteland: Episode Two (A day to Die)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </VideoFrame>
        </VideoContainer>

        <FlexContainer>
            <FlexBox>
                <TextBlock>
                    <p>Join us on a desolate Chernarus staged in the distant future. An otherworldly catastrophe has transformed the once thriving civilization into a Sci-Fi Wasteland. The remnants of advanced technology and mysterious artifacts litter the barren landscapes, attracting daring adventurers and hardened survivors seeking fortune and survival.</p><br />
                    
                    <p>The server, aptly named Sci-Fi Wasteland, presents a relentless struggle for existence amidst the ruins and uncharted territories. Stranded players must contend not only with each other but also with the emergence of enigmatic extraterrestrial creatures that have laid claim to the planet. Armed with futuristic weaponry and equipped with scavenged power armor, the survivors embark on dangerous escapades, forming alliances and battling it out in this perilous and unpredictable world, where only the strong-willed and resourceful can endure and unlock the secrets of Kepler-IX.</p><br />
                    
                    The journey is not for the faint of heart, but space cadets from far and wide are welcome to test their skills.
                </TextBlock>

            </FlexBox>
            <FlexBox>
                <Img src={adminTeam} />    
            </FlexBox>

        </FlexContainer>
        <FlexContainer>
            <FlexBox>
                <KermitBox>
                    <h2>Rest In Peace Kermit</h2>
                    <Img src={kermit} />
                </KermitBox>
            </FlexBox>
            <FlexBox>
                <TextBlock>
                    <p>If you see this memorial at our Sci-Fi trader in the north, please take a moment to pay respects to our dear friend Kermit, who was taken from us far too soon in this life. Kermit was one of our founding members, this server wouldn't be where it is today without him. We love you buddy, things aren't the same without you. Keep the rubber side down up there until we meet again.</p>
                </TextBlock>
            </FlexBox>
        </FlexContainer>

    </>)
}

export default Home