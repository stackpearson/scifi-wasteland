import styled from 'styled-components';
import tempPhoto from '../assets/sifi_temp.jpg'

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
    return (<>
        <FlexContainer>
            <FlexBox>
                <TextBlock>
                    <p>Join us on a desolate Chernarus staged in the distant futuire. An otherworldly catastrophe has transformed the once thriving civilization into a Sci-Fi Wasteland. The remnants of advanced technology and mysterious artifacts litter the barren landscapes, attracting daring adventurers and hardened survivors seeking fortune and survival.</p><br />
                    
                    <p>The server, aptly named Sci-Fi Wasteland, presents a relentless struggle for existence amidst the ruins and uncharted territories. Stranded players must contend not only with each other but also with the emergence of enigmatic extraterrestrial creatures that have laid claim to the planet. Armed with futuristic weaponry and equipped with scavenged power armor, the survivors embark on dangerous escapades, forming alliances and battling it out in this perilous and unpredictable world, where only the strong-willed and resourceful can endure and unlock the secrets of Kepler-IX.</p><br />
                    
                    The journey is not for the faint of heart, but space cadets from far and wide are welcome to test their skills.
                </TextBlock>

            </FlexBox>
            <FlexBox>
                <img src={tempPhoto} />
            </FlexBox>

        </FlexContainer>

    </>)
}

export default Home