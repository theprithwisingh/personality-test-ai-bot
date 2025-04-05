import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mbtiData from "../MBTI_16_Types.json";

const Dashboard = () => {
  const location = useLocation();
  const mbtiType = location.state?.mbtiType;
  const details = mbtiData.find((item) => item.type === mbtiType);

  const navigate = useNavigate();

//data passing to aibot page and navigate aibot
const goToAibot = () => {
    navigate("/Aibot");
  };

  if (!details) {
    return (
      <div className="text-xl text-red-600">Invalid or missing MBTI type.</div>
    );
  }

  return (
    //
    <div className="min-h-screen bg-white px-8 py-8    bg-gradient-to-br from-white via-green-50 to-white">
      <h2 className="text-4xl font-bold text-green-700 mb-2">
        Your MBTI Type: {mbtiType}
      </h2>
      <h3 className="text-2xl text-gray-700 font-medium mb-10">
        {details.nickname}
      </h3>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Personality Traits */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-green-600 mb-4">
            Personality Traits
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
            {details.personality_traits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>

        {/* Personal Growth */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-green-600 mb-4">
            Personal Growth
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
            {details.personal_growth.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Career Path */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-green-600 mb-4">
            Career Paths
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
            {details.career_path.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* AI bot INTEGRATION */}

      <div className="bg-gray-100 p-12 rounded-3xl shadow-2xl border border-green-100 mt-10">
        <h3 className="text-3xl font-bold text-green-800 mb-10 leading-tight tracking-tight">
          Meet Your AI Mentor for MBTI-Based Growth
        </h3>

        <div className="text-gray-800 text-lg mb-10 space-y-8">
          <p className="text-xl font-medium text-gray-700 leading-relaxed">
            Welcome to your intelligent companion for personal growth! This
            dashboard is powered by an advanced AI bot that understands your
            MBTI personality type and delivers meaningful guidance. Here's what
            you’ll explore:
          </p>

          <ul className="space-y-5 text-base ml-6">
            <li className="flex items-start gap-3">
              <span>
                <strong className="text-green-800">Curated Articles:</strong>{" "}
                Read powerful insights aligned with your mindset, emotions, and
                thought patterns.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span>
                <strong className="text-green-800">Growth Strategies:</strong>{" "}
                Daily psychological tools and personal development tips designed
                just for your personality type.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span>
                <strong className="text-green-800">Career Roadmaps:</strong>{" "}
                Discover roles, skills, and life paths that naturally align with
                who you are.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span>
                <strong className="text-green-800">Video Masterclasses:</strong>{" "}
                Watch short, powerful sessions tailored to how you learn and
                grow.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex justify-start">
          <button 
          onClick={goToAibot}
          className="bg-green-600 hover:bg-green-700 transition-all px-10 py-3 text-white rounded-2xl text-lg font-semibold shadow-lg">
            Talk with AI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
