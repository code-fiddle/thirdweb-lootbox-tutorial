import QuizGame from "../components/quiz-game";
import quizQuestions from "../lib/questions";

export function getStaticProps() {
  return {
    props: {
      title: "the SKUNK quiz!!",
    },
  };
}

export default function Home() {
  // Delete the correct answer fields before rendering!
  quizQuestions.forEach((q) => delete q.correctAnswerIndex);

  return <QuizGame questions={quizQuestions} />;
}
