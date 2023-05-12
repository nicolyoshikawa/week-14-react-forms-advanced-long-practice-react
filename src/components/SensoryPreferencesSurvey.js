import React from 'react';
import { useState } from 'react';

const SensoryPreferencesSurvey = () => {
    const [question1, setQuestion1] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();

        const form = {
            question1
        }
        console.log(form)
    }

    return (
        <>
            <h2>Sensory Preferences Survey</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='question1'>Question 1</label>
                    <input id="question1" type="radio" name="multichoice" value={""} onChange={e => setQuestion1(e.target.value)}/>
                </div>
            </form>
        </>
    )
}

export default SensoryPreferencesSurvey;
