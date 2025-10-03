import React, { useState, useEffect } from 'react';
import { ChevronLeft, Heart, Award, Users, Clock } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  photo: string;
  recognitionCount: number;
  level: string;
}

interface Recognition {
  id: string;
  appreciator: string;
  recipient: string;
  value: string;
  message: string;
  timestamp: Date;
}

interface ValueLeader {
  value: string;
  employee: Employee;
  count: number;
}

const backgroundPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E";

const ValueRecognition: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [recentActivity, setRecentActivity] = useState<Recognition[]>([]);
  const [valueLeaders, setValueLeaders] = useState<ValueLeader[]>([]);

  const coreValues = [
    { name: 'Entrepreneurial Mindset', icon: '💡', color: 'from-blue-500 to-indigo-600' },
    { name: 'Humor', icon: '😄', color: 'from-yellow-500 to-orange-600' },
    { name: 'Can-Do Attitude', icon: '💪', color: 'from-green-500 to-emerald-600' },
    { name: 'Excellence', icon: '⭐', color: 'from-purple-500 to-violet-600' },
    { name: 'Trusted Advisor', icon: '🤝', color: 'from-teal-500 to-cyan-600' },
    { name: 'Candor', icon: '💬', color: 'from-red-500 to-rose-600' },
    { name: 'Embrace Vulnerabilities', icon: '❤️', color: 'from-pink-500 to-rose-600' }
  ];

  // Mock data - in real app this would come from API
  useEffect(() => {
    const mockRecentActivity: Recognition[] = [
      {
        id: '1',
        appreciator: 'Sarah Johnson',
        recipient: 'Mike Chen',
        value: 'Excellence',
        message: 'Delivered an exceptional client presentation that secured our biggest deal this quarter!',
        timestamp: new Date(Date.now() - 1000 * 60 * 30)
      },
      {
        id: '2',
        appreciator: 'David Williams',
        recipient: 'Emily Rodriguez',
        value: 'Can-Do Attitude',
        message: 'Stepped up when the team needed help most and never said no to any challenge.',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2)
      },
      {
        id: '3',
        appreciator: 'Lisa Park',
        recipient: 'James Thompson',
        value: 'Humor',
        message: 'Your positive energy and jokes kept everyone motivated during our tough sprint!',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5)
      }
    ];

    const mockValueLeaders: ValueLeader[] = [
      {
        value: 'Humor',
        employee: { id: '1', name: 'Alex Rivera', photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=150&h=150&fit=crop&crop=face', recognitionCount: 15, level: 'Oak' },
        count: 15
      },
      {
        value: 'Entrepreneurial Mindset',
        employee: { id: '2', name: 'Priya Patel', photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face', recognitionCount: 18, level: 'Oak' },
        count: 18
      },
      {
        value: 'Can-Do Attitude',
        employee: { id: '3', name: 'Marcus Johnson', photo: 'https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?w=150&h=150&fit=crop&crop=face', recognitionCount: 12, level: 'Sapling' },
        count: 12
      },
      {
        value: 'Embrace Vulnerabilities',
        employee: { id: '4', name: 'Sofia Chen', photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=150&h=150&fit=crop&crop=face', recognitionCount: 14, level: 'Oak' },
        count: 14
      },
      {
        value: 'Trusted Advisor',
        employee: { id: '5', name: 'David Kim', photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=150&h=150&fit=crop&crop=face', recognitionCount: 16, level: 'Oak' },
        count: 16
      },
      {
        value: 'Candor',
        employee: { id: '6', name: 'Emma Wilson', photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=face', recognitionCount: 11, level: 'Sapling' },
        count: 11
      },
      {
        value: 'Excellence',
        employee: { id: '7', name: 'Ryan Torres', photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150&h=150&fit=crop&crop=face', recognitionCount: 13, level: 'Sapling' },
        count: 13
      }
    ];

    setRecentActivity(mockRecentActivity);
    setValueLeaders(mockValueLeaders);
  }, []);

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  const getValueRecognitions = (value: string) => {
    // Mock data for specific value recognitions
    return [
      {
        id: '1',
        appreciator: 'Team Lead Sarah',
        recipient: 'Alex Rivera',
        message: `Showed incredible ${value.toLowerCase()} by proposing innovative solutions to our client challenges.`,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3)
      },
      {
        id: '2',
        appreciator: 'Manager John',
        recipient: 'Alex Rivera',
        message: `Consistently demonstrates ${value.toLowerCase()} in every project delivery.`,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2)
      }
    ];
  };

  if (selectedValue) {
    const recognitions = getValueRecognitions(selectedValue);
    const valueInfo = coreValues.find(v => v.name === selectedValue);

    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-800 to-green-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-emerald-800/30"></div>
          <div className={`absolute inset-0 bg-[url('${backgroundPattern}')] bg-repeat`}></div>
        </div>

        <div className="relative z-10 p-6">
          {/* Back Button */}
          <button
            onClick={() => setSelectedValue(null)}
            className="flex items-center gap-2 text-white mb-6 hover:text-green-200 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Values Overview
          </button>

          {/* Value Header */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${valueInfo?.color} text-4xl mb-4 shadow-lg`}>
              {valueInfo?.icon}
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">{selectedValue}</h1>
            <p className="text-green-200 text-lg">All recognitions for this core value</p>
          </div>

          {/* Recognitions List */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
              <div className="space-y-4">
                {recognitions.map((recognition) => (
                  <div key={recognition.id} className="border-b border-gray-200 pb-4 last:border-b-0 hover:bg-gray-50 p-4 rounded-lg transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-semibold text-gray-800">{recognition.appreciator}</span>
                      <span className="text-gray-400">→</span>
                      <span className="font-semibold text-gray-800">{recognition.recipient}</span>
                      <span className="text-sm text-gray-500 ml-auto">{formatTimeAgo(recognition.timestamp)}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed pl-0">{recognition.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-800 to-green-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-emerald-800/30"></div>
        <div className={`absolute inset-0 bg-[url('${backgroundPattern}')] bg-repeat`}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4 tracking-wide">
            VALUE RECOGNITION
          </h1>
          <p className="text-green-200 text-xl">Celebrating our core values in action</p>
        </div>

        {/* Value Highlights Section */}
        <div className="px-6 mb-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-yellow-400" />
              Value Champions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueLeaders.map((leader, index) => (
                <div key={leader.value} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-1">
                      <img
                        src={leader.employee.photo}
                        alt={leader.employee.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{leader.employee.name}</h3>
                    <div className="inline-flex items-center gap-1 bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm mb-3">
                      <Award size={14} />
                      {leader.employee.level}
                    </div>
                    <p className="text-green-200 text-sm font-medium mb-2">{leader.value}</p>
                    <p className="text-white/70 text-xs">{leader.count} recognitions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="px-6 mb-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Clock className="text-green-400" />
              Recent Appreciations
            </h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-semibold text-gray-800">{activity.appreciator}</span>
                        <span className="text-gray-500">appreciated</span>
                        <span className="font-semibold text-gray-800">{activity.recipient}</span>
                        <span className="text-gray-500">for</span>
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {activity.value}
                        </span>
                        <span className="text-sm text-gray-500 ml-auto">{formatTimeAgo(activity.timestamp)}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed italic">"{activity.message}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Overview Section */}
        <div className="px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Users className="text-blue-400" />
              Core Values
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coreValues.map((value) => (
                <button
                  key={value.name}
                  onClick={() => setSelectedValue(value.name)}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20 hover:border-white/40 text-left"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-center">{value.name}</h3>
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                      <span>Click to explore</span>
                      <ChevronLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueRecognition;