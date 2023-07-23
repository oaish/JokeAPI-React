import Container from "./Container";

export default function BoxContainer({type, children}) {
    return (
        <>
            <Container type="box-container box-flex">
                <Container type={type}>
                    {children}
                </Container>
            </Container>
        </>
    )
}