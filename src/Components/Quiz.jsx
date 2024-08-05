import React, { useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';

export default function Quiz() {
    const [current, setCurrent] = useState(0);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} next={setCurrent} />
        </div>
    )
}

const Box = ({ current, next }) => {
    const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState("");
    const saveHandler = () => {
        if (quizzes[current].correct === ans) {
            setCorrect(correct + 1);
        }
        setAns("");
        if ((current + 1) === quizzes.length) {
            setExit(true)
        } else {
            next(current + 1);
        }
    }
    return (
        <div className='w-[40%] shadow-lg rounded-sm overflow-hidden border-2 border-black font-Poppins font-semibold'>
            <div className='flex items-center gap-4'>   
            <div className='border-2 rounded-full bg-[#fcc822] border-black py-2 px-4 m-2'><div>{current + 1}</div></div>
            <div className=''>{quizzes[current].question}</div>
            </div>
            <div className='grid grid-cols-2'>
                <div  className={` ${ans === "a" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-700 cursor-pointer border-2 p-2 border-black m-1`} onClick={() => setAns("a")}>
                <div className='text-[10px]'>Option 1</div>
                <div>{quizzes[current].a}</div></div>

                <div  className={` ${ans === "b" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-700 cursor-pointer border-2 p-2 border-black m-1`} onClick={() => setAns("b")}>
                <div className='text-[10px]'>Option 2</div>
                <div>{quizzes[current].b}</div></div>

                <div  className={` ${ans === "c" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-700 cursor-pointer border-2 p-2 border-black m-1`} onClick={() => setAns("c")}>
                <div className='text-[10px]'>Option 3</div>
                <div>{quizzes[current].c}</div></div>

                <div  className={` ${ans === "d" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-700 cursor-pointer border-2 p-2 border-black m-1`} onClick={() => setAns("d")}>
                <div className='text-[10px]'>Option 4</div>
                <div>{quizzes[current].d}</div></div>
               
            </div>
            <div className='flex justify-between m-1'>
                <div className='cursor-pointer px-4 py-2  bg-orange-500 text-black' onClick={() => setAns("")}>Reset</div>
                <div className='cursor-pointer px-4 py-2 bg-green-500 text-black' onClick={saveHandler}>Save & Next</div>
                <div className='cursor-pointer px-4 py-2 bg-red-500 text-black' onClick={() => setExit(true)}>Exit</div>
            </div>
        </div>
    )
}