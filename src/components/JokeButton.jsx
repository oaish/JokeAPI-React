import Container from "./micro/Container";

export default function JokeButton() {
    return (
        <Container type="box-flex box-btn">
            <Container type="btn-bg">
                <button type="submit" onClick={() => {
                    window.location.reload()
                }}>
                    Random Joke <span>»</span>
                </button>
            </Container>
        </Container>
    )
}