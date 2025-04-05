import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

const questions = [
    { text: "You find it easy to connect with people you have just met.", dimension: "EI" },
    { text: "You enjoy exploring creative solutions to problems more than following set rules or procedures.", dimension: "SN" },
    { text: "You prioritize facts over people’s feelings when determining a course of action.", dimension: "TF" },
    { text: "You prefer sticking to a daily schedule rather than allowing your day to unfold naturally.", dimension: "JP" },
    { text: "You regularly make new friends.", dimension: "EI" },
    { text: "You usually stay calm, even under a lot of pressure.", dimension: "JP" },
    { text: "People’s stories and emotions speak louder to you than numbers or data.", dimension: "TF" },
    { text: "You prefer to do your chores before allowing yourself to relax.", dimension: "JP" },
    { text: "You enjoy solitary hobbies or activities more than group ones.", dimension: "EI" },
    { text: "You like to use organizing tools like schedules and lists.", dimension: "JP" }
];

const pointsMap = {
  "Strongly Agree": 3,
  "Agree": 2,
  "Slightly Agree": 1,
  "Neutral": 0,
  "Slightly Disagree": -1,
  "Disagree": -2,
  "Strongly Disagree": -3,
};

const MBTIQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [showResult, setShowResult] = useState(false);
  const answers = Object.keys(pointsMap);

  const handleAnswer = (answer) => {
    const points = pointsMap[answer];
    const { dimension } = questions[currentQuestion];

    setScores((prev) => ({
      ...prev,
      [dimension[0]]: points >= 0 ? prev[dimension[0]] + points : prev[dimension[0]],
      [dimension[1]]: points < 0 ? prev[dimension[1]] + Math.abs(points) : prev[dimension[1]],
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getMBTIType = () => {
    return (
      (scores.E >= scores.I ? "E" : "I") +
      (scores.N >= scores.S ? "N" : "S") +
      (scores.T >= scores.F ? "T" : "F") +
      (scores.J >= scores.P ? "J" : "P")
    );
  };
//navigate to DashBorad
const navigate = useNavigate();

//data passing to dashboard and navigate
const goToDashboard = () => {
    navigate("/Dashboard", { state: { mbtiType: getMBTIType() } });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg w-full text-center">
        {!showResult ? (
          <>
            <p className="text-gray-500 text-sm mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">
              {questions[currentQuestion].text}
            </h2>

            <div className="mt-6 flex flex-col gap-3">
              {answers.map((answer) => (
                <button
                  key={answer}
                  onClick={() => handleAnswer(answer)}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-green-600 hover:text-white transition w-full"
                >
                  {answer}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-green-600">Your MBTI Type: {getMBTIType()}</h2>
            <p className="mt-4 text-gray-700">You can now explore more about your personality type.</p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
                setShowResult(false);
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition mt-6"
            >
              Retake Test
            </button>
            <button
            onClick={goToDashboard}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition mt-6 ml-4"
            >
            Go to Insight Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MBTIQuiz;
