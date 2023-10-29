import { useState } from "react";
import data from "./data";
import Questions from "./Questions";
function App() {
    const [open, setopen] = useState(0);
    return (
        <main className="center my-4">
            <article className="center">
                <h2 className="title mb-2">Qestions</h2>
                <div className="underline bg-dark mb-3"></div>
                {data.map((question) => {
                    return <Questions key={question.id} {...question} />;
                })}
            </article>
        </main>
    );
}

export default App;
