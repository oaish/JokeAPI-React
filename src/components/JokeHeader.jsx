import BoxContainer from "./micro/BoxContainer";
import Container from "./micro/Container";
import TypeWriter from "typewriter-effect"
export default function JokeHeader({jokeText}) {
    return (
        <Container type="joke-sect box-flex">
            <BoxContainer type="jokes">
                <h1 className="joke">
                    <TypeWriter
                        options={{
                            autoStart: true,
                            delay: 50,
                            cursor: "_",
                            pauseFor: 1_000_000_000,
                            strings: [jokeText]
                        }}
                    />
                </h1>
            </BoxContainer>
        </Container>
    )
}