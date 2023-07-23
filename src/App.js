import Header from './components/Header'
import JokeHeader from './components/JokeHeader'
import InputSection from './components/InputSection'
import Container from "./components/micro/Container";
import {useEffect, useState} from "react";
import resolve from "./Resolve";
import axios from "axios";
import "./App.css"

function App() {
    const [url] = useState(resolve())
    const [joke, setJoke] = useState("")

    useEffect(() => {
        fetchData();
    }, [url]);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setJoke(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Container type="grid-pc">
            <Header/>
            <JokeHeader jokeText={joke}/>
            <InputSection/>
        </Container>
    );
}

export default App;
