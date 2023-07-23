import CheckBox from './CheckBox'
import BoxContainer from "./micro/BoxContainer";
import H2Header from "./micro/H2Header";
import ToggleBtn from "./ToggleBtn";
import JokeButton from "./JokeButton";
import Container from "./micro/Container";
import BlackList from "./BlackList";
import Category from "./Category";


export default function InputSection() {
    return (
        <Container type="input-sect box-flex">
            <Container type="form">

                <BoxContainer type="boxy">
                    <JokeButton />
                </BoxContainer>

                <BoxContainer type="boxy">

                    <H2Header text="Category"/>
                    <Container type="groupbox form-category">
                        <Category/>
                    </Container>

                    <H2Header text="Blacklist"/>
                    <Container type="cb-container">
                        <BlackList/>
                    </Container>

                </BoxContainer>

            </Container>
        </Container>
    )
}