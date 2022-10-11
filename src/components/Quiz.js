import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from 'react-icons/fa';
const Quiz = () => {
    const notify = () => toast("Correct Answer!");
    const notify2 = () => toast("Wrong Answer!");
    const notify3 = (ans) => toast(ans);
    const questions = useLoaderData().data.questions;
    console.log(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (correctAnswer, selectAnswer) => {
        if (correctAnswer === selectAnswer) {
            setScore(score + 1);
            notify();
        }
        else {
            notify2();
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    function getFinalText(text) {
        // Replace all <br /> tags with a CRLF
        const regX1 = /<br\s\/>/ig;
        const text2 = text.replace(regX1, String.fromCharCode(13));
        // Replace all remainging HTML tags with ""
        const regX2 = /(<([^>]+)>)/ig;
        const finalText = text2.replace(regX2, "");
        const final = finalText.replace(/&nbsp;/g, '');
        return final;
    }
    return (
        <div className='app1'>
            <div className='app2'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{getFinalText(questions[currentQuestion].question)}
                                <div><FaEye onClick={() => notify3(questions[currentQuestion].correctAnswer)} /></div></div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].options.map((answerOption) => (
                                <button className='btn' onClick={() => handleAnswerOptionClick(answerOption, questions[currentQuestion].correctAnswer)}>{answerOption}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <ToastContainer position="top-center" autoClose={1000} />
        </div>
    );
};

export default Quiz;