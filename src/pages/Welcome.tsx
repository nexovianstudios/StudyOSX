import { useRef, useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import { signIn, signUp } from "../lib/auth";

export default function Welcome() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async () => {
    if (isLogin) {
      const { error } = await signIn(email, password);

      if (error) {
        alert(error.message);
        return;
      }

      setEmail("");
      setPassword("");
    } else {
      const { error } = await signUp(name, email, password);

      if (error) {
        alert(error.message);
        return;
      }

      alert("Account created! Please verify your email before logging in.");

      setName("");
      setEmail("");
      setPassword("");

      setIsLogin(true);
    }
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-x-hidden overflow-y-auto py-8 gap-6 lg:gap-0"
      onMouseMove={(e) => {
        if (window.innerWidth < 1024) return;
        if (!previewRef.current) return;

        const rotateY = ((e.clientX / window.innerWidth) - 0.5) * 4;
        const rotateX = (0.5 - (e.clientY / window.innerHeight)) * 4;

        previewRef.current.style.transform =
          `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }}
      onMouseLeave={() => {
        if (window.innerWidth < 1024) return;
        if (!previewRef.current) return;

        previewRef.current.style.transform =
          "perspective(1400px) rotateX(0deg) rotateY(0deg)";
      }}
    >
      <AnimatedBackground />

      {/* Top Branding — in normal flow on mobile/tablet, absolute-floating on desktop */}
      <div
        className="
          relative
          z-10
          text-center
          md:text-right
          md:self-end
          md:pr-2
          lg:absolute
          lg:top-8
          lg:right-10
          lg:pr-0
        "
      >
        <h1 className="font-display text-lg sm:text-xl font-bold gradient-text">
          StudyOS X
        </h1>

        <p className="font-display text-xs text-white/80 mt-1">
          Your Ultimate Study Workspace
        </p>

        <p className="font-display text-[11px] text-secondary-c leading-tight">
          Everything you need to prepare for
          <br />
          CBSE Class 10 — in one place.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-[2.2fr_0.8fr] gap-6 md:gap-8 lg:gap-14 items-center">

        {/* Login Card — shows first on mobile/tablet, right column on desktop */}
        <div className="glass rounded-3xl p-6 sm:p-8 lg:p-10 max-w-md mx-auto w-full order-1 lg:order-2">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
            Welcome Back
          </h2>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-4 p-4 rounded-xl bg-base-2 border border-white/10"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-4 rounded-xl bg-base-2 border border-white/10"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-4 rounded-xl bg-base-2 border border-white/10"
          />

          <button
            onClick={handleAuth}
            className="w-full p-4 rounded-xl bg-white text-black font-semibold hover:scale-[1.02] transition-all duration-200"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

          <p className="mt-6 text-center text-sm text-white/70">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              {isLogin ? "Create Account" : "Login"}
            </button>
          </p>
        </div>

        {/* Dashboard Preview — appears below login on mobile/tablet via scroll, left column on desktop */}
        <div
          ref={previewRef}
          className="glass rounded-3xl p-5 transition-transform duration-150 ease-out will-change-transform order-2 lg:order-1 w-full"
        >
          <img
            src="/dashboard-preview.png"
            alt="StudyOS X Dashboard"
            className="w-full h-auto max-h-[75vh] object-contain rounded-2xl shadow-2xl pointer-events-none select-none"
          />
        </div>

      </div>

      {/* Bottom Center Text — in normal flow on mobile/tablet, absolute-floating on desktop */}
      <div className="relative z-10 lg:absolute lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2 font-display text-[10px] sm:text-[11px] text-white/70 tracking-wide text-center px-4 mt-4 lg:mt-0">
        📚 Study Smarter
        <span className="mx-3 text-cyan-400">|</span>
        🎯 Stay Focused
        <span className="mx-3 text-cyan-400">|</span>
        🚀 Score Higher
      </div>
    </div>
  );
}	