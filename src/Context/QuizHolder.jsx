import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
    {
        "question": "What is the purpose of HTML in web development?",
        "a": "Styling web pages",
        "b": "Defining data structures",
        "c": " server-side logic",
        "d": "the structure of web pages",
        "correct": "d"
    },
    {
        "question": "What does CSS stand for in web development?",
        "a": "Computer Style Sheets",
        "b": "Creative Style System",
        "c": "Cascading Style Sheets",
        "d": "Colorful Style Scripts",
        "correct": "c"
    },
    {
        "question": "Which of the following is a popular front-end JavaScript framework?",
        "a": "Express.js",
        "b": "Vue.js",
        "c": "Django",
        "d": "Flask",
        "correct": "b"
    },
    {
        "question": "What is the purpose of a web server in web development?",
        "a": "Managing databases",
        "b": "Rendering user interfaces",
        "c": "Storing client-side scripts",
        "d": "HTTP requests and responses",
        "correct": "d"
    },
    {
        "question": "What is the role of AJAX in web development?",
        "a": "Asynchronous JavaScript and XML",
        "b": "Advanced JSON and XML",
        "c": "Automated JavaScript and XHTML",
        "d": "Asynchronous JSON and XHTML",
        "correct": "d"
    },
    {
        "question": "What does the term 'responsive design' refer to in web development?",
        "a": "Designing visually appealing websites",
        "b": "Creating mobile applications",
        "c": "Designing websites that adapt to different screen sizes",
        "d": "Implementing secure server configurations",
        "correct": "c"
    }
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    
    return (
        <QuizContext.Provider value={{
            start, exit,correct,setStart, setExit,setCorrect,quizzes
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };