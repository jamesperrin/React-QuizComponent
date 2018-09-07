import React, { Component } from 'react'
import QuizComponentButton from './QuizQuestionButton.js'

class QuizQuestion extends Component { 
    render() { 
        const { quiz_question } = this.props;

        return (
            <main>
                <section>
                    <p>
                        {/* // instructions text goes here */}
                        {quiz_question.instruction_text}
                    </p>
                </section>
                <section className='buttons'>
                    <ul>
                        {/* //quiz questions buttons logic goes here */}
                        <QuizComponentButton button_text={quiz_question.answer_options[0]} />
                    </ul>
                </section>
            </main>
        )
    }

}

export default QuizQuestion