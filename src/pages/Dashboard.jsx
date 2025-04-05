import React from "react";
import { useLocation } from "react-router-dom";
import mbtiData from "../MBTI_16_Types.json";

const Dashboard = () => {
  const location = useLocation();
  const mbtiType = location.state?.mbtiType;

  const details = mbtiData.find((item) => item.type === mbtiType);

  if (!details) {
    return <div className="text-xl text-red-600">Invalid or missing MBTI type.</div>;
  }

  return (
    // 
    <div className="min-h-screen bg-white px-10 py-12">
  <h2 className="text-4xl font-bold text-green-700 mb-2">Your MBTI Type: {mbtiType}</h2>
  <h3 className="text-2xl text-gray-700 font-medium mb-10">{details.nickname}</h3>

  <div className="grid md:grid-cols-3 gap-10">
    {/* Personality Traits */}
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h4 className="text-xl font-semibold text-green-600 mb-4">Personality Traits</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
        {details.personality_traits.map((trait, index) => (
          <li key={index}>{trait}</li>
        ))}
      </ul>
    </div>

    {/* Personal Growth */}
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h4 className="text-xl font-semibold text-green-600 mb-4">Personal Growth</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
        {details.personal_growth.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>

    {/* Career Path */}
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h4 className="text-xl font-semibold text-green-600 mb-4">Career Paths</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
        {details.career_path.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
    </div>
  </div>
</div>

  );
};

export default Dashboard;
