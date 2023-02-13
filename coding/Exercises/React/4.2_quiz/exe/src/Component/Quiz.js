import QuizTitle from './Component/QuizTitle';
import Q2 from './Q2';
import Q1 from './Q1';


function Quiz() {
    return (
        <div className="quiz-container">
            <QuizTitle></QuizTitle>
            <Q1></Q1>
            <Q2></Q2>
        </div>
    )
}

export default Quiz;