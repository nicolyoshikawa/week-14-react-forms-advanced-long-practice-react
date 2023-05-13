import React from 'react';
// import { useState } from 'react';

const SampleSurvey = ({sample}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const form = {
        }
        console.log(form)
    }

    return (
            <form onSubmit={onSubmit}>
                <h2>Sample Survey</h2>
                    {sample.questions.map((el, i)=> <CreateQuestion key={el.i} question={el} id={i}/>)}
                    {/* {sample.questions.map((el, i)=> <CreateDiv key={el.i} question={el.stem} type={el.type} options={el.options}/>)} */}
                <button>Submit</button>
            </form>
    )
}

const CreateQuestion = ({key, question, id}) => {
    console.log(id);
    const type = question.type;
    const step = question.stem;
    console.log(type);
    if (type === 'mcq') {
        console.log("MCQ!");
        return (
            <McqOptions options={question.options} id={id}/>
        )
    } else if (type === 'cr') {
        const lines = question.lines;
        if (lines === 1) {
            console.log("single line CR");
        } else if (lines > 1) {
            console.log("multi line CR");
        }
    } else {
        console.log("huh");
    }
}

const McqOptions = ({options, id}) => {
    if (!options) {
        console.log("no options!");
    }
    for (let i = 0; i < options.length; i++) {
        console.log(options[i].text);
    }

    return (
        <div>
            {options.map((option, i) => {
                return (
                    <div>
                        <input type="radio" name={id} value={option.text}/> {option.text}
                    </div>
                )
            })}
        </div>
    )
}

const CreateCrSingle = () => {

}

const CreateCrMulti = () => {

}

const CreateDiv = ({question, type, options}) => {
    if (options) {
        console.log(options);
    }
    return (
        <>
            <label> {question} </label>
            <div> {type} </div>
            <div> {options} </div>
            {/* <div> {options} </div> */}
        </>
    )
}


export default SampleSurvey;
