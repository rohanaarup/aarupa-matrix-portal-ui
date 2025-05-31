
import { motion } from 'framer-motion';
import { MatrixBackground } from '@/components/MatrixBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Settings, Home as HomeIcon, Globe, Eye, Headphones } from 'lucide-react';

const Home = () => {
  const navigateToPage = (page: string) => {
    window.open(`/${page}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-matrix-black text-white relative overflow-hidden">
      <MatrixBackground />
      
      {/* Animated stars background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 min-h-screen">
        {/* Top Navigation Bar */}
        <nav className="flex items-center justify-between px-8 py-4 border-b border-matrix-orange/30">
          <div className="flex items-center space-x-8">
            <button onClick={() => navigateToPage('home')} className="text-matrix-orange font-matrix font-bold hover:text-[#ff5f1f] transition-colors">
              HOME
            </button>
            <button onClick={() => navigateToPage('your-world')} className="text-white font-matrix hover:text-[#ff5f1f] transition-colors">
              YOUR WORLD
            </button>
            <span className="text-[#ff5f1f] font-matrix font-bold text-lg tracking-wider">
              AARUPA MATRIX
            </span>
            <button onClick={() => navigateToPage('visualize-3d-vr')} className="text-white font-matrix hover:text-[#ff5f1f] transition-colors">
              VISUALIZE 3D VR
            </button>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={() => navigateToPage('settings')} className="flex items-center space-x-2 text-white hover:text-[#ff5f1f] transition-colors">
              <Settings size={20} />
              <span className="font-matrix">SETTINGS</span>
            </button>
            <button onClick={() => navigateToPage('user')} className="flex items-center space-x-2 text-white hover:text-[#ff5f1f] transition-colors">
              <User size={20} />
              <span className="font-matrix">USER</span>
            </button>
          </div>
        </nav>

        <div className="px-8 py-6">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl font-matrix font-bold text-[#ff5f1f] mb-4 tracking-wider">
              WELCOME
            </h1>
            <h2 className="text-2xl font-matrix text-white mb-2">Welcome, Rohan</h2>
            <p className="text-white/80 font-matrix-body text-lg">
              You have successfully entered your personal consciousness portal. This is where your inner world becomes reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Status Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-matrix font-bold text-[#ff5f1f] mb-6 tracking-wider">
                  YOUR STATUS
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Friends Circle */}
                  <Card className="bg-black/60 border-matrix-gray/50">
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-[#ff5f1f] font-matrix text-lg">FRIENDS</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 rounded-full border-4 border-[#ff5f1f]/30 flex items-center justify-center">
                          <span className="text-2xl font-matrix font-bold text-[#ff5f1f]">75%</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigateToPage('friends')}
                        className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-lg hover:shadow-[#ff5f1f]/50 text-black font-matrix text-sm px-4 py-2 transition-all duration-300"
                      >
                        VIEW
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Family Circle */}
                  <Card className="bg-black/60 border-matrix-gray/50">
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-[#ff5f1f] font-matrix text-lg">FAMILY</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 rounded-full border-4 border-[#ff5f1f]/30 flex items-center justify-center">
                          <span className="text-2xl font-matrix font-bold text-[#ff5f1f]">85%</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigateToPage('family')}
                        className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-lg hover:shadow-[#ff5f1f]/50 text-black font-matrix text-sm px-4 py-2 transition-all duration-300"
                      >
                        VIEW
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Society Circle */}
                  <Card className="bg-black/60 border-matrix-gray/50">
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-[#ff5f1f] font-matrix text-lg">SOCIETY</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 rounded-full border-4 border-[#ff5f1f]/30 flex items-center justify-center">
                          <span className="text-2xl font-matrix font-bold text-[#ff5f1f]">60%</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigateToPage('society')}
                        className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-lg hover:shadow-[#ff5f1f]/50 text-black font-matrix text-sm px-4 py-2 transition-all duration-300"
                      >
                        VIEW
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Overall Graph */}
                <Card className="bg-black/60 border-matrix-gray/50">
                  <CardHeader>
                    <CardTitle className="text-[#ff5f1f] font-matrix text-xl">OVERALL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-matrix-gray/20 rounded flex items-center justify-center mb-2">
                      <img 
                        src="/lovable-uploads/81bc0df4-dbe8-4d6d-9ab1-cfdf37a0b064.png" 
                        alt="Growth Chart" 
                        className="h-full object-contain"
                      />
                    </div>
                    <p className="text-[#ff5f1f] text-sm italic text-center">
                      Track how your world evolves over time
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* AI WIFEY Card */}
              <Card className="bg-black/60 border-matrix-gray/50">
                <CardHeader>
                  <div className="w-full h-32 bg-matrix-gray/20 rounded mb-4 overflow-hidden">
                    <img 
                      src="/lovable-uploads/cb2deb6f-e137-4361-b3bb-61838c54cacb.png" 
                      alt="AI Wifey" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-[#ff5f1f] font-matrix text-xl">AI WIFEY</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-white/80 font-matrix-body text-sm space-y-2 mb-4">
                    <li>• Emotional Support</li>
                    <li>• Relationship Guidance</li>
                    <li>• Personal Growth</li>
                    <li>• Daily Motivation</li>
                  </ul>
                  <Button 
                    onClick={() => navigateToPage('ai-wifey')}
                    className="w-full bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-lg hover:shadow-[#ff5f1f]/50 text-black font-matrix font-bold transition-all duration-300"
                  >
                    VIEW DETAILS
                  </Button>
                </CardContent>
              </Card>

              {/* AI BUDDY Card */}
              <Card className="bg-black/60 border-matrix-gray/50">
                <CardHeader>
                  <div className="w-full h-32 bg-matrix-gray/20 rounded mb-4 overflow-hidden">
                    <img 
                      src="/lovable-uploads/47d77769-c3cf-46b6-83da-337483760761.png" 
                      alt="AI Buddy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-[#ff5f1f] font-matrix text-xl">AI BUDDY</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-white/80 font-matrix-body text-sm space-y-2 mb-4">
                    <li>• Friendship Support</li>
                    <li>• Social Guidance</li>
                    <li>• Fun Activities</li>
                    <li>• Life Coaching</li>
                  </ul>
                  <Button 
                    onClick={() => navigateToPage('ai-buddy')}
                    className="w-full bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-lg hover:shadow-[#ff5f1f]/50 text-black font-matrix font-bold transition-all duration-300"
                  >
                    VIEW DETAILS
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Fix The Problem Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <Card className="bg-black/60 border-[#ff5f1f]/50">
              <CardHeader>
                <CardTitle className="text-[#ff5f1f] font-matrix text-2xl tracking-wider">
                  FIX THE PROBLEM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 border border-matrix-gray/30 rounded">
                    <span className="text-white font-matrix-body">Relationship</span>
                  </div>
                  <div className="text-center p-4 border border-matrix-gray/30 rounded">
                    <span className="text-white font-matrix-body">Career</span>
                  </div>
                  <div className="text-center p-4 border border-matrix-gray/30 rounded">
                    <span className="text-white font-matrix-body">Health</span>
                  </div>
                  <div className="text-center p-4 border border-matrix-gray/30 rounded">
                    <span className="text-white font-matrix-body">Personal</span>
                  </div>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={() => navigateToPage('ask-ai-wifey')}
                    className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-lg hover:shadow-[#ff5f1f]/50 text-black font-matrix font-bold px-8 py-3 transition-all duration-300"
                  >
                    ASK AI WIFEY
                  </Button>
                  <Button 
                    onClick={() => navigateToPage('ask-ai-buddy')}
                    className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-lg hover:shadow-[#ff5f1f]/50 text-black font-matrix font-bold px-8 py-3 transition-all duration-300"
                  >
                    ASK AI BUDDY
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
