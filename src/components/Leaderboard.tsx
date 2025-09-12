import React from 'react';
import { Trophy, Medal, Award, Users } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const backgroundPattern = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E`;

  const leaderboardData = [
    {
      rank: 1,
      name: "Kavindya Prasangika",
      points: 1791,
      level: "Evergreen",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      rank: 2,
      name: "Bashwara Undupitiya",
      points: 1335,
      level: "Evergreen",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      rank: 3,
      name: "Anne Mendis",
      points: 1170,
      level: "Evergreen",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      rank: 4,
      name: "Areeb Niyas",
      points: 935,
      level: "Oak",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      rank: 5,
      name: "Harsha Weerasinghe",
      points: 850,
      level: "Oak",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  const levels = [
    { name: "Acorn", range: "0 - 100", icon: "🌰", color: "from-green-400 to-green-600" },
    { name: "Seedling", range: "101 - 250", icon: "🌱", color: "from-green-500 to-green-700" },
    { name: "Sapling", range: "251 - 500", icon: "🌿", color: "from-emerald-500 to-emerald-700" },
    { name: "Oak", range: "501 - 999", icon: "🌳", color: "from-emerald-600 to-emerald-800" },
    { name: "Evergreen", range: "1000+", icon: "🌲", color: "from-green-700 to-green-900" }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-emerald-800/30"></div>
        <div className={`absolute inset-0 bg-[url('${backgroundPattern}')] bg-repeat`}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-12">
          <h1 className="text-6xl font-bold text-yellow-400 mb-4 tracking-wide">
            LEADERBOARD
          </h1>
          
          {/* Time Period Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 flex">
              <button className="px-6 py-2 rounded-full bg-green-500 text-white font-medium">
                Annually
              </button>
              <button className="px-6 py-2 rounded-full text-white/80 hover:text-white transition-colors">
                Quarterly
              </button>
              <button className="px-6 py-2 rounded-full text-white/80 hover:text-white transition-colors">
                Monthly
              </button>
              <button className="px-6 py-2 rounded-full text-white/80 hover:text-white transition-colors">
                All-Time
              </button>
            </div>
          </div>
        </div>

        {/* Top 3 Cards */}
        <div className="flex justify-center items-end gap-8 mb-12 px-4">
          {leaderboardData.slice(0, 3).map((employee, index) => (
            <div
              key={employee.rank}
              className={`relative bg-gradient-to-br ${
                index === 0 ? 'from-emerald-400 to-emerald-600 scale-110' :
                index === 1 ? 'from-emerald-500 to-emerald-700' :
                'from-emerald-600 to-emerald-800'
              } rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-xs`}
            >
              {/* Rank Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-800">
                  {employee.rank}
                </div>
              </div>

              {/* Avatar */}
              <div className="flex justify-center mb-4 mt-4">
                <div className="relative">
                  <img
                    src={employee.avatar}
                    alt={employee.name}
                    className="w-20 h-20 rounded-full border-4 border-white/30"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Employee Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{employee.name}</h3>
                <p className="text-2xl font-bold text-yellow-300 mb-2">{employee.points} pts</p>
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors mb-2">
                  View Activities
                </button>
                <p className="text-sm opacity-80">{employee.level}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Levels Section */}
        <div className="bg-white/95 backdrop-blur-sm mx-4 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Levels</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {levels.map((level, index) => (
              <div key={level.name} className="flex items-center gap-3">
                <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}>
                  {level.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{level.name}</p>
                  <p className="text-sm text-gray-600">{level.range}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-white/95 backdrop-blur-sm mx-4 rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Employee Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Level Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Score</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">View Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaderboardData.map((employee) => (
                  <tr key={employee.rank} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{employee.rank}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={employee.avatar}
                          alt={employee.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-900">{employee.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center">
                          <Trophy className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-gray-700">{employee.level}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{employee.points}</td>
                    <td className="px-6 py-4">
                      <button className="bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        View Activities
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;