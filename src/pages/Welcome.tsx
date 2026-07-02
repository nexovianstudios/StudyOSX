export default function Welcome() {
  return (
    <div className="min-h-screen bg-base-0 flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-6xl font-bold gradient-text mb-4">
            StudyOS X
          </h1>

          <p className="text-xl text-secondary-c mb-8">
            AI Powered Learning Platform
          </p>

          <div className="glass rounded-3xl p-4">
            <img
              src="/dashboard-preview.png"
              alt="StudyOS X Dashboard"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="glass rounded-3xl p-10 max-w-md mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8">
            Welcome Back
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-4 rounded-xl bg-base-2 border border-white/10"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-4 rounded-xl bg-base-2 border border-white/10"
          />

          <button className="w-full p-4 rounded-xl bg-white text-black font-semibold">
            Login
          </button>
        </div>

      </div>
    </div>
  );
}