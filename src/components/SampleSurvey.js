import React from 'react';
import { useState } from 'react';

const SampleSurvey = () => {
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const form = {
            question1,
            question2,
            question3
        }
        console.log(form)

        setQuestion1(()=>{console.log("onsubmit",question1)});
        setQuestion2("");
        setQuestion3("");
    }

    return (
            <form onSubmit={onSubmit}>
                <h2>Sample Survey</h2>
                <div>Multiple choice question (mcq) means use radio button inputs</div>
                <div>
                    <label htmlFor='answer1'>answer1</label>
                    <input id="q1answer1" type="radio" name="question1" value="q1answer1" onChange={e => setQuestion1(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='answer2'>answer2</label>
                    <input id="q1answer2" type="radio" name="question1" value="q1answer2" onChange={e => setQuestion1(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='answer3'>answer3</label>
                    <input id="q1answer3" type="radio" name="question1" value="q1answer3" onChange={e => setQuestion1(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="question2">Constructed response (cr) on a single-line means a standard text input: </label>
                    <input id="question2" type="text" value={question2} onChange={e => setQuestion2(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="question3">Constructed response (cr) with multiple lines means a text area: </label>
                    <textarea id="question3" value={question3} onChange={e => setQuestion3(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
    )
}

export default SampleSurvey;
