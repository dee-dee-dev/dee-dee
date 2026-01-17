import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import '../css/main.css'; // Add this line

export default function Home() {
  const chatMessagesRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const deedeResponses = [
    "Ooooh! That's so cool! What does THIS do? 🎀",
    "Hehe! I love pushing buttons! Press it again! 🩰",
    "Dexter would be SO mad if he saw this! 😆",
    "Ballet time! *twirls* What were we talking about? 💃",
    "This is way more fun than Dexter's boring experiments! ✨",
    "Can I touch it? Can I? Can I? Pleeeease? 🙏",
    "You know what would make this better? GLITTER! ✨✨✨",
    "Dexter says I'm not supposed to be in here... but I am! 😝",
    "Let's dance! La la la la la! 🎵",
    "What's this button do? What's THAT button do?! 🔘"
  ];

  // Initialize with first message
  useEffect(() => {
    setMessages([{ text: "Ooooh! Hi there! 👋 I'm Dee Dee! What does THIS button do?! 🎀", isUser: false }]);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate Dee Dee response after random delay
    setTimeout(() => {
      const randomResponse = deedeResponses[Math.floor(Math.random() * deedeResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <Head>
        <title>DeeDeeChat - Chat with Dee Dee from Dexter's Lab! 🩰✨</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.cdnfonts.com/css/baby-kruffy" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/data-70" rel="stylesheet" />
      </Head>

      <div className="antialiased font-geist bg-dark-primary text-white overflow-x-hidden">
        {/* Grid Overlay Background */}
        <div className="grid-overlay">
          <div className="grid-inner">
            <div className="grid-line-v"></div>
            <div className="grid-line-v hidden md:block"></div>
            <div className="grid-line-v hidden lg:block"></div>
            <div className="grid-line-v"></div>
          </div>
        </div>

        {/* Lab Background */}
        <div className="lab-background"></div>

        {/* Top Navigation */}
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-fade-in-down">
          <div className="flex gap-3 items-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="nav-pill group">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-xs font-medium tracking-wider">COLLAB ON GIT</span>
              <div className="beam-border"></div>
            </a>

            <a href="#newsletter" 
               className="nav-pill group">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="text-xs font-medium tracking-wider">JOIN MAIL LIST</span>
              <div className="beam-border"></div>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="nav-pill group">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="text-xs font-medium tracking-wider">JOIN X</span>
              <div className="beam-border"></div>
            </a>
          </div>
        </nav>

        {/* Hero Section with Integrated Chat */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up stagger-1">
              {/* Status Indicator */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                </div>
                <span className="text-xs font-mono text-pink-400 uppercase tracking-widest">Dee Dee is Online</span>
              </div>

              {/* Hero Headline */}
              <h1 className="hero-headline mb-6">
                Chat with Dee Dee<br/>
                <span className="text-gradient-pink">from Dexter's Lab!</span>
                <span className="text-6xl md:text-8xl ml-4">🩰✨</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                Experience the chaos and fun of Dee Dee's personality in an AI-powered chat. 
                <span className="text-pink-400">What does this button do?</span>
              </p>
            </div>

            {/* Chat Container */}
            <div className="chat-container animate-fade-in-up stagger-2 max-w-4xl mx-auto">
              <div className="chat-header">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-2xl">
                    🩰
                  </div>
                  <div>
                    <div className="font-semibold text-white">Dee Dee</div>
                    <div className="text-xs text-neutral-400 font-mono">Dexter's Lab AI</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-neutral-400">Active</span>
                </div>
              </div>

              <div className="chat-messages" ref={chatMessagesRef}>
                {messages.map((msg, idx) => (
                  <div key={idx} className={`chat-message ${msg.isUser ? 'chat-message-sent' : 'chat-message-received'}`}>
                    <div className={`message-bubble ${msg.isUser ? 'message-bubble-sent' : 'message-bubble-received'}`}>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="chat-message chat-message-received">
                    <div className="message-bubble message-bubble-received">
                      <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="chat-input-container">
                <input 
                  type="text" 
                  className="chat-input" 
                  placeholder="Type a message to Dee Dee..."
                  autoComplete="off"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button className="chat-send-button" onClick={sendMessage}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="relative py-24 border-t border-white/5 bg-dark-secondary">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text */}
              <div className="animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                  What is <span className="text-pink-400">DeeDeeChat?</span>
                </h2>
                <div className="space-y-6 text-neutral-300 leading-relaxed">
                  <p className="text-lg">
                    Remember Dee Dee from Dexter's Laboratory? The energetic, curious, ballet-dancing sister who always found a way into Dexter's secret lab?
                  </p>
                  <p>
                    Now you can chat with her! Our AI captures Dee Dee's playful personality, her catchphrases, and that irresistible urge to press every button she sees.
                  </p>
                  <p className="text-pink-400 font-medium">
                    It's nostalgia meets cutting-edge AI. Pure fun, zero rules, maximum chaos! 🎀
                  </p>
                </div>
              </div>

              {/* Right Side - Features */}
              <div className="space-y-4 animate-fade-in-right">
                <div className="feature-card">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon bg-pink-500/10 text-pink-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Authentic Personality</h3>
                      <p className="text-sm text-neutral-400">Trained on episodes to capture Dee Dee's unique voice, energy, and catchphrases</p>
                    </div>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon bg-purple-500/10 text-purple-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Instant Responses</h3>
                      <p className="text-sm text-neutral-400">Lightning-fast AI replies that keep the conversation flowing naturally</p>
                    </div>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon bg-yellow-500/10 text-yellow-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Pure Nostalgia</h3>
                      <p className="text-sm text-neutral-400">Relive your favorite 90s cartoon with interactive AI technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 border-t border-white/5">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Join the <span className="text-pink-400">DeeDee Community</span>
              </h2>
              <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
                Get exclusive access, vote on new features, and be part of the most chaotic AI community on the internet.
              </p>

              {/* Big Red Button */}
              <a href="#" className="cta-button group">
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  <span className="font-display font-bold text-2xl tracking-tight">BUY $DD</span>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </a>

              <p className="text-sm text-neutral-500 mt-8 font-mono">
                Token contract: 0x1234...5678 • Built on Ethereum
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="relative py-20 border-t border-white/5 bg-dark-secondary">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Stay Updated</h3>
            <p className="text-neutral-400 mb-8">Get notified about new features, updates, and Dee Dee shenanigans!</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="newsletter-input flex-1"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 border-t border-white/5">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🩰</span>
                <span className="font-display font-bold text-xl">DeeDeeChat</span>
              </div>
              
              <div className="flex gap-6 text-sm text-neutral-400">
                <a href="#" className="hover:text-pink-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-pink-400 transition-colors">Terms</a>
                <a href="#" className="hover:text-pink-400 transition-colors">Contact</a>
              </div>
              
              <p className="text-xs text-neutral-500 font-mono">
                © 2026 DeeDeeChat • Made with chaos
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
