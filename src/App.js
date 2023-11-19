import "./App.css";
import Counter from "./components/Counter";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Aplikacja licznika w ReactJS</h1>
            </header>
            <Counter counterInitValue={0} />
        </div>
    );
};

export default App;
