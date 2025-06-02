
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
      
      {/* Enhanced animated stars background */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 min-h-screen">
        {/* Fixed/Static Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 border-b border-[#ff5f1f]/30 bg-black/90 backdrop-blur-md">
          <div className="flex items-center space-x-8">
            <motion.button 
              onClick={() => navigateToPage('home')} 
              className="text-[#ff5f1f] font-matrix font-bold hover:text-[#ff5f1f]/80 transition-all duration-300 text-sm tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HOME
            </motion.button>
            <motion.button 
              onClick={() => navigateToPage('your-world')} 
              className="text-white font-matrix hover:text-[#ff5f1f] transition-all duration-300 text-sm tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              YOUR WORLD
            </motion.button>
          </div>
          
          {/* Logo and Title - Centered */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#ff5f1f]/60 shadow-xl bg-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 25px rgba(255, 95, 31, 0.8)",
                borderColor: "#ff5f1f"
              }}
            >
              <img 
                src="/lovable-uploads/5a5bcf8c-83ac-4a81-b004-cfe7cfd3b93c.png" 
                alt="AARUPA MATRIX Logo" 
                className="w-full h-full object-cover brightness-125 contrast-110 saturate-110"
              />
            </motion.div>
            <span className="text-[#ff5f1f] font-matrix font-black text-3xl tracking-widest drop-shadow-lg">
              AARUPA MATRIX
            </span>
          </motion.div>
          
          <div className="flex items-center space-x-8">
            <motion.button 
              onClick={() => navigateToPage('visualize-3d-vr')} 
              className="text-white font-matrix hover:text-[#ff5f1f] transition-all duration-300 text-sm tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VISUALIZE 3D VR
            </motion.button>
            <motion.div className="flex items-center space-x-6">
              <motion.button 
                onClick={() => navigateToPage('settings')} 
                className="flex items-center space-x-2 text-white hover:text-[#ff5f1f] transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
              >
                <Settings size={20} />
                <span className="font-matrix text-sm">SETTINGS</span>
              </motion.button>
              <motion.button 
                onClick={() => navigateToPage('user')} 
                className="flex items-center space-x-2 text-white hover:text-[#ff5f1f] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <User size={20} />
                <span className="font-matrix text-sm">USER</span>
              </motion.button>
            </motion.div>
          </div>
        </nav>

        <div className="px-8 py-6 pt-32">
          {/* Enhanced Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12 relative"
          >
            {/* Gradient background for welcome section */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff5f1f]/10 via-transparent to-[#ff5f1f]/5 rounded-xl blur-xl"></div>
            
            <div className="relative z-10 p-8 rounded-xl border border-[#ff5f1f]/20 bg-black/40 backdrop-blur-sm">
              <motion.h1 
                className="text-6xl font-matrix font-black text-[#ff5f1f] mb-6 tracking-widest"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                WELCOME
              </motion.h1>
              <motion.h2 
                className="text-3xl font-matrix text-white mb-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Welcome, Rohan
              </motion.h2>
              <motion.p 
                className="text-white/90 font-matrix-body text-xl leading-relaxed max-w-4xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                You have successfully entered your personal consciousness portal. This is where your inner world becomes reality.
              </motion.p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Status Section */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-3xl font-matrix font-bold text-[#ff5f1f] mb-8 tracking-widest">
                  YOUR STATUS
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {/* Friends Circle */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-gradient-to-br from-black/80 to-black/60 border-[#ff5f1f]/30 backdrop-blur-sm">
                      <CardHeader className="text-center pb-3">
                        <CardTitle className="text-[#ff5f1f] font-matrix text-xl tracking-wide">FRIENDS</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="flex justify-center mb-6">
                          <div className="w-28 h-28 rounded-full border-4 border-[#ff5f1f]/40 flex items-center justify-center bg-gradient-to-br from-[#ff5f1f]/20 to-transparent">
                            <span className="text-3xl font-matrix font-bold text-[#ff5f1f]">75%</span>
                          </div>
                        </div>
                        <Button 
                          onClick={() => navigateToPage('friends')}
                          className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-lg hover:shadow-[#ff5f1f]/50 text-black font-matrix text-sm px-6 py-3 transition-all duration-300 hover:scale-105"
                        >
                          VIEW
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Family Circle */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-gradient-to-br from-black/80 to-black/60 border-[#ff5f1f]/30 backdrop-blur-sm">
                      <CardHeader className="text-center pb-3">
                        <CardTitle className="text-[#ff5f1f] font-matrix text-xl tracking-wide">FAMILY</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="flex justify-center mb-6">
                          <div className="w-28 h-28 rounded-full border-4 border-[#ff5f1f]/40 flex items-center justify-center bg-gradient-to-br from-[#ff5f1f]/20 to-transparent">
                            <span className="text-3xl font-matrix font-bold text-[#ff5f1f]">85%</span>
                          </div>
                        </div>
                        <Button 
                          onClick={() => navigateToPage('family')}
                          className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-lg hover:shadow-[#ff5f1f]/50 text-black font-matrix text-sm px-6 py-3 transition-all duration-300 hover:scale-105"
                        >
                          VIEW
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Society Circle */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-gradient-to-br from-black/80 to-black/60 border-[#ff5f1f]/30 backdrop-blur-sm">
                      <CardHeader className="text-center pb-3">
                        <CardTitle className="text-[#ff5f1f] font-matrix text-xl tracking-wide">SOCIETY</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="flex justify-center mb-6">
                          <div className="w-28 h-28 rounded-full border-4 border-[#ff5f1f]/40 flex items-center justify-center bg-gradient-to-br from-[#ff5f1f]/20 to-transparent">
                            <span className="text-3xl font-matrix font-bold text-[#ff5f1f]">60%</span>
                          </div>
                        </div>
                        <Button 
                          onClick={() => navigateToPage('society')}
                          className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-lg hover:shadow-[#ff5f1f]/50 text-black font-matrix text-sm px-6 py-3 transition-all duration-300 hover:scale-105"
                        >
                          VIEW
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Overall Graph */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Card className="bg-gradient-to-br from-black/80 to-black/60 border-[#ff5f1f]/30 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-[#ff5f1f] font-matrix text-2xl tracking-wide">OVERALL</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-40 bg-gradient-to-br from-[#ff5f1f]/10 to-transparent rounded-lg flex items-center justify-center mb-4 border border-[#ff5f1f]/20">
                        <img 
                          src="/lovable-uploads/81bc0df4-dbe8-4d6d-9ab1-cfdf37a0b064.png" 
                          alt="Growth Chart" 
                          className="h-full object-contain"
                        />
                      </div>
                      <p className="text-[#ff5f1f] text-sm italic text-center font-matrix-body">
                        Track how your world evolves over time
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* AI WIFEY Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gradient-to-br from-black/80 to-black/60 border-[#ff5f1f]/30 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-40 bg-gradient-to-br from-[#ff5f1f]/10 to-transparent rounded-lg mb-4 overflow-hidden border border-[#ff5f1f]/20">
                      <img 
                        src="/lovable-uploads/cb2deb6f-e137-4361-b3bb-61838c54cacb.png" 
                        alt="AI Wifey" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-[#ff5f1f] font-matrix text-2xl tracking-wide">AI WIFEY</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-white/90 font-matrix-body text-sm space-y-3 mb-6">
                      <li>• Emotional Support</li>
                      <li>• Relationship Guidance</li>
                      <li>• Personal Growth</li>
                      <li>• Daily Motivation</li>
                    </ul>
                    <Button 
                      onClick={() => navigateToPage('ai-wifey')}
                      className="w-full bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-xl hover:shadow-[#ff5f1f]/30 text-black font-matrix font-bold py-3 transition-all duration-300 hover:scale-105"
                    >
                      VIEW DETAILS
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI BUDDY Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gradient-to-br from-black/80 to-black/60 border-[#ff5f1f]/30 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-40 bg-gradient-to-br from-[#ff5f1f]/10 to-transparent rounded-lg mb-4 overflow-hidden border border-[#ff5f1f]/20">
                      <img 
                        src="/lovable-uploads/47d77769-c3cf-46b6-83da-337483760761.png" 
                        alt="AI Buddy" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-[#ff5f1f] font-matrix text-2xl tracking-wide">AI BUDDY</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-white/90 font-matrix-body text-sm space-y-3 mb-6">
                      <li>• Friendship Support</li>
                      <li>• Social Guidance</li>
                      <li>• Fun Activities</li>
                      <li>• Life Coaching</li>
                    </ul>
                    <Button 
                      onClick={() => navigateToPage('ai-buddy')}
                      className="w-full bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-xl hover:shadow-[#ff5f1f]/30 text-black font-matrix font-bold py-3 transition-all duration-300 hover:scale-105"
                    >
                      VIEW DETAILS
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Fix The Problem Panel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-br from-black/80 to-black/60 border-[#ff5f1f]/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-[#ff5f1f] font-matrix text-3xl tracking-widest text-center">
                  FIX THE PROBLEM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {['Relationship', 'Career', 'Health', 'Personal'].map((category, index) => (
                    <motion.div 
                      key={category}
                      className="text-center p-6 border border-[#ff5f1f]/30 rounded-lg bg-gradient-to-br from-[#ff5f1f]/5 to-transparent hover:from-[#ff5f1f]/10 transition-all duration-300"
                      whileHover={{ scale: 1.05, borderColor: '#ff5f1f' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <span className="text-white font-matrix-body text-lg">{category}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-6 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      onClick={() => navigateToPage('ask-ai-wifey')}
                      className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-xl hover:shadow-[#ff5f1f]/30 text-black font-matrix font-bold px-10 py-4 text-lg transition-all duration-300"
                    >
                      ASK AI WIFEY
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      onClick={() => navigateToPage('ask-ai-buddy')}
                      className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-xl hover:shadow-[#ff5f1f]/30 text-black font-matrix font-bold px-10 py-4 text-lg transition-all duration-300"
                    >
                      ASK AI BUDDY
                    </Button>
                  </motion.div>
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
