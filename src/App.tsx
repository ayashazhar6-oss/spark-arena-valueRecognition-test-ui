import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Leaderboard from './components/Leaderboard';
import ValueRecognition from './components/ValueRecognition';

function App() {
  const [activeTab, setActiveTab] = useState('value-recognition');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'leaderboard':
        return <Leaderboard />;
      case 'value-recognition':
        return <ValueRecognition />;
      case 'record-activity':
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center"><p className="text-xl text-gray-600">Record Activity - Coming Soon</p></div>;
      case 'my-activities':
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center"><p className="text-xl text-gray-600">My Activities - Coming Soon</p></div>;
      case 'news-feed':
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center"><p className="text-xl text-gray-600">News Feed - Coming Soon</p></div>;
      default:
        return <ValueRecognition />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderActiveTab()}
    </div>
  );
}

export default App;