import { useState, useEffect } from 'react';
import { Github, Instagram, Youtube, Mail, MapPin, Gamepad2, Code, Cpu, Smartphone, Monitor, ChevronDown, ExternalLink, Star, Sparkles, Palette, Layers, Zap } from 'lucide-react';
import './App.css';

const pixelFont = "font-pixel";

// Floating Pixel Particles
const PixelParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
    size: 4 + Math.random() * 6,
    color: ['bg-purple-400/40', 'bg-pink-400/40', 'bg-cyan-400/40', 'bg-yellow-400/40'][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute ${p.color} animate-float-up`}
          style={{
            left: `${p.left}%`,
            bottom: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// 3D Rotating Game Controller
const RotatingController = () => (
  <div className="controller-3d-wrapper">
    <div className="controller-3d">
      <div className="controller-face front"><Gamepad2 className="w-16 h-16 text-white" /></div>
      <div className="controller-face back"><Code className="w-16 h-16 text-white" /></div>
      <div className="controller-face right"><Monitor className="w-16 h-16 text-white" /></div>
      <div className="controller-face left"><Smartphone className="w-16 h-16 text-white" /></div>
      <div className="controller-face top"><Star className="w-16 h-16 text-white" /></div>
      <div className="controller-face bottom"><Cpu className="w-16 h-16 text-white" /></div>
    </div>
  </div>
);

// Animated Pixel Character
const PixelCharacter = () => {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setFrame((f) => (f + 1) % 2), 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pixel-character-container">
      <div className={`pixel-character ${frame === 1 ? 'jump' : ''}`}>
        <div className="pixel-row">
          <div className="pixel purple" /><div className="pixel purple" /><div className="pixel purple" />
        </div>
        <div className="pixel-row">
          <div className="pixel cyan" /><div className="pixel pink" /><div className="pixel cyan" />
        </div>
        <div className="pixel-row">
          <div className="pixel purple" /><div className="pixel purple" /><div className="pixel purple" />
        </div>
        <div className="pixel-row">
          <div className="pixel" /><div className="pixel purple" /><div className="pixel" />
        </div>
        <div className="pixel-row">
          <div className="pixel cyan" /><div className="pixel" /><div className="pixel cyan" />
        </div>
      </div>
    </div>
  );
};

// Pixel Button
const PixelButton = ({ children, onClick, className = '' }: { children: React.ReactNode; onClick?: () => void; className?: string }) => (
  <button onClick={onClick} className={`pixel-btn ${className}`}>
    <span className="pixel-btn-content">{children}</span>
  </button>
);

// Skill Card
const SkillCard = ({ icon: Icon, title, level, color }: { icon: React.ElementType; title: string; level: number; color: string }) => (
  <div className={`skill-card ${color}`}>
    <div className="skill-card-corner tl" /><div className="skill-card-corner tr" />
    <div className="skill-card-corner bl" /><div className="skill-card-corner br" />
    <div className="skill-card-content">
      <Icon className="skill-icon" />
      <h3 className={`${pixelFont} skill-title`}>{title}</h3>
      <div className="skill-level">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`skill-bar ${i < level ? 'filled' : ''}`} />
        ))}
      </div>
    </div>
  </div>
);

// Game Card
const GameCard = ({ game }: { game: { title: string; description: string; platforms: string[]; status: string; tags: string[] } }) => (
  <div className="game-card">
    <div className="game-card-scanlines" />
    <div className="game-card-image">
      <div className="game-card-gradient"><Gamepad2 className="w-20 h-20 text-white/80" /></div>
      <div className={`game-status ${game.status === 'Released' ? 'released' : 'dev'}`}>{game.status}</div>
    </div>
    <div className="game-card-content">
      <h3 className={`${pixelFont} game-title`}>{game.title}</h3>
      <p className="game-description">{game.description}</p>
      <div className="game-platforms">
        {game.platforms.map((platform) => (
          <span key={platform} className={`${pixelFont} platform-tag`}>{platform}</span>
        ))}
      </div>
      <div className="game-tags">
        {game.tags.map((tag) => (<span key={tag} className="game-tag">{tag}</span>))}
      </div>
    </div>
  </div>
);

// Social Button
const SocialButton = ({ icon: Icon, href, label, color }: { icon: React.ElementType; href: string; label: string; color: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`social-btn ${color}`}>
    <Icon className="social-icon" />
    <span className={`${pixelFont} social-label`}>{label}</span>
    <ExternalLink className="social-external" />
  </a>
);

// Navigation
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className={`${pixelFont} nav-logo`}>
          <Gamepad2 className="nav-logo-icon" />
          <span className="nav-logo-text">GAME_DEV</span>
        </div>
        <div className="nav-links">
          {['about', 'skills', 'games', 'contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className={`${pixelFont} nav-link`}>{item}</button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Main App
function App() {
  const [typedText, setTypedText] = useState('');
  const fullText = "INDIE GAME DEVELOPER";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { icon: Gamepad2, title: 'Unity', level: 5, color: 'green' },
    { icon: Cpu, title: 'Unreal Engine', level: 4, color: 'blue' },
    { icon: Code, title: 'C#', level: 5, color: 'purple' },
    { icon: Code, title: 'C++', level: 4, color: 'pink' },
    { icon: Monitor, title: 'PC Games', level: 5, color: 'cyan' },
    { icon: Smartphone, title: 'Mobile Games', level: 4, color: 'orange' },
    { icon: Palette, title: 'Pixel Art', level: 4, color: 'yellow' },
    { icon: Layers, title: 'Game Design', level: 5, color: 'red' },
  ];

  // ═══════════════════════════════════════════════════════════════
  // GAMES ARRAY - ADD YOUR NEW GAMES HERE!
  // ═══════════════════════════════════════════════════════════════
  const games = [
    {
      title: 'MY FIRST GAME',
      description: 'An exciting adventure game featuring unique pixel art visuals and engaging gameplay mechanics. This marks my first step into indie game development!',
      platforms: ['PC', 'Mobile'],
      status: 'Released',
      tags: ['Adventure', 'Pixel Art', 'Indie'],
    },
    // ADD MORE GAMES BELOW - Just copy this template:
    // {
    //   title: 'YOUR GAME NAME',
    //   description: 'Your game description here...',
    //   platforms: ['PC', 'Mobile', 'Console'],
    //   status: 'Released', // or 'In Development'
    //   tags: ['Genre1', 'Genre2'],
    // },
  ];

  return (
    <div className="portfolio-container">
      <div className="bg-grid" />
      <PixelParticles />
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow" />
        <RotatingController />
        <h1 className={`${pixelFont} hero-title`}>
          <span className="hero-title-text">{typedText}</span>
          <span className="cursor-blink">_</span>
        </h1>
        <p className={`${pixelFont} hero-subtitle`}>CREATING WORLDS, ONE PIXEL AT A TIME</p>
        <p className="hero-platforms">
          <span className="platform-dot pc" /> PC
          <span className="platform-dot mobile" /> Mobile
          <span className="platform-dot console" /> Future Consoles
        </p>
        <PixelCharacter />
        <div className="hero-buttons">
          <PixelButton onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}>VIEW GAMES</PixelButton>
          <PixelButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="secondary">CONTACT ME</PixelButton>
        </div>
        <div className="scroll-indicator"><ChevronDown className="scroll-icon" /></div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <h2 className={`${pixelFont} section-title purple`}>{'<'} ABOUT ME {'>'}</h2>
          <div className="about-grid">
            <div className="about-avatar-wrapper">
              <div className="about-avatar">
                <div className="about-avatar-inner"><Gamepad2 className="about-avatar-icon" /></div>
              </div>
              <div className="avatar-pixel tl" /><div className="avatar-pixel tr" /><div className="avatar-pixel bl" />
            </div>
            <div className="about-content">
              <div className="bio-card">
                <div className="bio-header"><span className={`${pixelFont} bio-header-text`}>BIO.txt</span></div>
                <p className="bio-text">
                  Hey there! I'm an <span className="highlight purple">Indie Game Developer</span> passionate about creating immersive gaming experiences. I specialize in developing games for <span className="highlight cyan">PC</span> and <span className="highlight pink">Mobile</span> platforms, with plans to expand to <span className="highlight green">consoles</span> in the future.
                </p>
                <p className="bio-text">
                  My journey in game development combines technical expertise with creative vision. I love bringing unique ideas to life through code and design, creating games that players will remember.
                </p>
              </div>
              <div className="stats-grid">
                <div className="stat-card cyan"><div className={`${pixelFont} stat-number`}>1+</div><div className="stat-label">Games</div></div>
                <div className="stat-card pink"><div className={`${pixelFont} stat-number`}>2</div><div className="stat-label">Platforms</div></div>
                <div className="stat-card purple"><div className={`${pixelFont} stat-number`}>∞</div><div className="stat-label">Ideas</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <h2 className={`${pixelFont} section-title cyan`}>{'{'} SKILLS & TOOLS {'}'}</h2>
          <p className="section-subtitle">My arsenal for creating awesome games</p>
          <div className="skills-grid">
            {skills.map((skill) => (<SkillCard key={skill.title} {...skill} />))}
          </div>
          <div className="experience-card">
            <h3 className={`${pixelFont} experience-title`}><Star className="experience-icon" />EXPERIENCE LEVEL</h3>
            <div className="experience-bars">
              <div className="exp-bar-wrapper">
                <div className="exp-bar-header"><span className="exp-bar-label">Game Development</span><span className={`${pixelFont} exp-bar-level purple`}>INTERMEDIATE</span></div>
                <div className="exp-bar"><div className="exp-bar-fill purple" style={{ width: '75%' }} /></div>
              </div>
              <div className="exp-bar-wrapper">
                <div className="exp-bar-header"><span className="exp-bar-label">Programming</span><span className={`${pixelFont} exp-bar-level cyan`}>ADVANCED</span></div>
                <div className="exp-bar"><div className="exp-bar-fill cyan" style={{ width: '85%' }} /></div>
              </div>
              <div className="exp-bar-wrapper">
                <div className="exp-bar-header"><span className="exp-bar-label">Art & Design</span><span className={`${pixelFont} exp-bar-level green`}>GROWING</span></div>
                <div className="exp-bar"><div className="exp-bar-fill green" style={{ width: '55%' }} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="section games-section">
        <div className="section-container">
          <h2 className={`${pixelFont} section-title pink`}>[ MY GAMES ]</h2>
          <p className="section-subtitle">Adventures I've created</p>
          <div className="games-grid">
            {games.map((game, index) => (<GameCard key={index} game={game} />))}
            <div className="coming-soon-card">
              <Sparkles className="coming-soon-icon" />
              <p className={`${pixelFont} coming-soon-text`}>MORE GAMES<br />COMING SOON...</p>
            </div>
          </div>
          <div className="future-platforms">
            <p className={`${pixelFont} future-title`}>FUTURE PLATFORMS</p>
            <div className="future-icons">
              <div className="future-platform"><Monitor className="future-icon green" /><span>Xbox</span></div>
              <div className="future-platform"><Gamepad2 className="future-icon blue" /><span>PlayStation</span></div>
              <div className="future-platform"><Zap className="future-icon red" /><span>Nintendo</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className={`${pixelFont} section-title green`}>// CONTACT //</h2>
          <p className="section-subtitle">Let's create something awesome together!</p>
          <div className="contact-grid">
            <div className="social-links">
              <h3 className={`${pixelFont} contact-heading purple`}>FIND ME ON</h3>
              <SocialButton icon={Github} href="https://github.com/yourusername" label="GitHub" color="slate" />
              <SocialButton icon={Instagram} href="https://instagram.com/yourusername" label="Instagram" color="pink" />
              <SocialButton icon={Youtube} href="https://youtube.com/@yourusername" label="YouTube" color="red" />
            </div>
            <div className="contact-info">
              <h3 className={`${pixelFont} contact-heading cyan`}>GET IN TOUCH</h3>
              <div className="contact-card">
                <div className="contact-item"><Mail className="contact-item-icon cyan" /><span>your.email@example.com</span></div>
                <div className="contact-item"><MapPin className="contact-item-icon pink" /><span>Earth, Milky Way Galaxy</span></div>
                <div className="contact-divider" />
                <p className="contact-note">Open for collaborations, game jams, and exciting projects!</p>
              </div>
              <div className="collab-hint">
                <p className={`${pixelFont} collab-text`}>PRESS START TO COLLABORATE</p>
                <p className="collab-subtext">DM me on any platform!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Gamepad2 className="footer-icon" />
          <p className={`${pixelFont} footer-text`}>CRAFTED WITH PASSION & PIXELS</p>
          <p className="footer-copyright">© 2024 Game Dev Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
