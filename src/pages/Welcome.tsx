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
	  className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
	  onMouseMove={(e) => {
		if (!previewRef.current) return;

		const rotateY = ((e.clientX / window.innerWidth) - 0.5) * 4;
		const rotateX = (0.5 - (e.clientY / window.innerHeight)) * 4;

		previewRef.current.style.transform =
		  `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	  }}
	  onMouseLeave={() => {
		if (!previewRef.current) return;

		previewRef.current.style.transform =
		  "perspective(1400px) rotateX(0deg) rotateY(0deg)";
	  }}
	>

		<AnimatedBackground />

		{/* Top Right Branding */}

		  {/* Top Right Branding */}
		  <div className="absolute top-8 right-10 text-right z-10">
			<h1 className="font-display text-xl font-bold gradient-text">
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

		  {/* Bottom Center Text */}
		  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 font-display text-[11px] text-white/70 tracking-wide whitespace-nowrap">
			📚 Study Smarter
			<span className="mx-3 text-cyan-400">|</span>
			🎯 Stay Focused
			<span className="mx-3 text-cyan-400">|</span>
			🚀 Score Higher
		  </div>

		  {/* Main Content */}
			<div className="max-w-[1800px] w-full grid lg:grid-cols-[2.2fr_0.8fr] gap-14 items-center">

			{/* Dashboard Preview */}
			<div
	  ref={previewRef}
	  className="glass rounded-3xl p-5 transition-transform duration-150 ease-out will-change-transform"
	>
			  <img
	  src="/dashboard-preview.png"
	  alt="StudyOS X Dashboard"
	  className="w-full rounded-2xl shadow-2xl pointer-events-none select-none"
	/>
			</div>

			{/* Login Card */}
			<div className="glass rounded-3xl p-10 max-w-sm mx-auto w-full">

			  <h2 className="font-display text-3xl font-bold mb-8">
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

		  </div>

		</div>
	  );
	}