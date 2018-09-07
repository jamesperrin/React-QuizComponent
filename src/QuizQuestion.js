import React, { Component } from 'react'

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
                        <li>
                            {quiz_question.answer_options[0]}
                        </li>
                    </ul>
                </section>
            </main>
        )
    }

}

export default QuizQuestion