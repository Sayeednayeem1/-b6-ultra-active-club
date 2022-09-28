import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-ans-section'>
            <h2>This is question Section</h2>
            <div>
                <h4>Q-1: How does React work?</h4>
                <p>Ans: React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div>
                <h4>Q-2: Difference between props and state?</h4>
                <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <div>
                <h4>Q-3: What are the uses of useEffect other then loading data?</h4>
                <p>Ans: What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default Question;