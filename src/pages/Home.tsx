
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
      
      <div className="relative z-10 min-h-screen">
        {/* Top Navigation Bar */}
        <nav className="flex items-center justify-between px-8 py-4 border-b border-matrix-orange/30">
          <div className="flex items-center space-x-8">
            <button onClick={() => navigateToPage('home')} className="text-matrix-orange font-matrix font-bold hover:text-matrix-orange-glow transition-colors">
              HOME
            </button>
            <button onClick={() => navigateToPage('your-world')} className="text-white font-matrix hover:text-matrix-orange transition-colors">
              YOUR WORLD
            </button>
            <button onClick={() => navigateToPage('aarupa-matrix')} className="text-white font-matrix hover:text-matrix-orange transition-colors">
              AARUPA MATRIX
            </button>
            <button onClick={() => navigateToPage('visualize-3d-vr')} className="text-white font-matrix hover:text-matrix-orange transition-colors">
              VISUALIZE 3D VR
            </button>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={() => navigateToPage('settings')} className="flex items-center space-x-2 text-white hover:text-matrix-orange transition-colors">
              <Settings size={20} />
              <span className="font-matrix">SETTINGS</span>
            </button>
            <button onClick={() => navigateToPage('user')} className="flex items-center space-x-2 text-white hover:text-matrix-orange transition-colors">
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
            <h1 className="text-5xl font-matrix font-bold text-matrix-orange mb-4 tracking-wider">
              WELCOME
            </h1>
            <h2 className="text-2xl font-matrix text-white mb-2">User Name</h2>
            <p className="text-white/80 font-matrix-body text-lg">
              You have successfully entered your personal consciousness portal. This is where your inner world becomes reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Status Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-matrix font-bold text-matrix-orange mb-6 tracking-wider">
                  YOUR STATUS
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Friends Circle */}
                  <Card className="bg-black/60 border-matrix-gray/50">
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-matrix-orange font-matrix text-lg">FRIENDS</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <div className="w-24 h-24 rounded-full border-4 border-matrix-orange/30 flex items-center justify-center">
                          <span className="text-2xl font-matrix font-bold text-matrix-orange">75%</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigateToPage('friends')}
                        className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix text-sm px-4 py-2"
                      >
                        VIEW
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Family Circle */}
                  <Card className="bg-black/60 border-matrix-gray/50">
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-matrix-orange font-matrix text-lg">FAMILY</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <div className="w-24 h-24 rounded-full border-4 border-matrix-orange/30 flex items-center justify-center">
                          <span className="text-2xl font-matrix font-bold text-matrix-orange">85%</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigateToPage('family')}
                        className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix text-sm px-4 py-2"
                      >
                        VIEW
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Society Circle */}
                  <Card className="bg-black/60 border-matrix-gray/50">
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-matrix-orange font-matrix text-lg">SOCIETY</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <div className="w-24 h-24 rounded-full border-4 border-matrix-orange/30 flex items-center justify-center">
                          <span className="text-2xl font-matrix font-bold text-matrix-orange">60%</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigateToPage('society')}
                        className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix text-sm px-4 py-2"
                      >
                        VIEW
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Overall Graph */}
                <Card className="bg-black/60 border-matrix-gray/50">
                  <CardHeader>
                    <CardTitle className="text-matrix-orange font-matrix text-xl">OVERALL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-matrix-gray/20 rounded flex items-center justify-center">
                      <span className="text-matrix-orange font-matrix">Graph Visualization Area</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* AI WIFEY Card */}
              <Card className="bg-black/60 border-matrix-gray/50">
                <CardHeader>
                  <div className="w-full h-32 bg-matrix-gray/20 rounded mb-4 flex items-center justify-center">
                    <span className="text-matrix-orange font-matrix">Image Placeholder</span>
                  </div>
                  <CardTitle className="text-matrix-orange font-matrix text-xl">AI WIFEY</CardTitle>
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
                    className="w-full bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold"
                  >
                    VIEW DETAILS
                  </Button>
                </CardContent>
              </Card>

              {/* AI BUDDY Card */}
              <Card className="bg-black/60 border-matrix-gray/50">
                <CardHeader>
                  <div className="w-full h-32 bg-matrix-gray/20 rounded mb-4 flex items-center justify-center">
                    <span className="text-matrix-orange font-matrix">Image Placeholder</span>
                  </div>
                  <CardTitle className="text-matrix-orange font-matrix text-xl">AI BUDDY</CardTitle>
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
                    className="w-full bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold"
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
            <Card className="bg-black/60 border-matrix-orange/50">
              <CardHeader>
                <CardTitle className="text-matrix-orange font-matrix text-2xl tracking-wider">
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
                    className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold px-8 py-3"
                  >
                    ASK AI WIFEY
                  </Button>
                  <Button 
                    onClick={() => navigateToPage('ask-ai-buddy')}
                    className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold px-8 py-3"
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
