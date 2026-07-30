import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"

export default function Home() {
  const isLoggedIn = useSelector((state: RootState) => state.userSlice.isLoggedIn)

  return (
    <main className="min-h-[calc(100dvh-60px)] bg-[#06090f] text-white overflow-x-hidden">
      <section className="relative overflow-hidden px-6 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(234,179,8,0.16),_transparent_28%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8 text-center lg:text-left">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-slate-900/20 backdrop-blur-sm">
              Build fast, share faster
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Code Pencil is the modern playground for frontend developers.
              </h1>
              <p className="mx-auto max-w-xl text-base text-slate-300 sm:text-lg md:max-w-none lg:max-w-xl">
                Write code, compile instantly, save your work, and share live snippets with a smooth, polished editor experience.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Link to="/compiler" className="w-full sm:w-auto">
                <Button className="w-full rounded-full px-8 py-4 text-lg font-semibold shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30">
                  Start Coding
                </Button>
              </Link>
              {!isLoggedIn ? (
                <Link to="/login" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full rounded-full px-8 py-4 text-lg font-semibold border-gray-500 text-white hover:bg-white/10">
                    Login
                  </Button>
                </Link>
              ) : null}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex flex-col gap-3 rounded-3xl bg-slate-900/80 p-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex h-3 w-3 rounded-full bg-rose-400" />
              <span className="text-sm text-slate-300">Code Pencil Live Editor</span>
              <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="grid gap-5">
              <div className="rounded-3xl bg-[#0d1118] p-5 shadow-inner shadow-white/5 sm:p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
                  <span>index.js</span>
                  <span>JavaScript</span>
                </div>
                <div className="space-y-2 text-sm leading-6 text-slate-200">
                  <p><span className="text-emerald-400">const</span> message = <span className="text-amber-400">"Hello Code Pencil"</span>;</p>
                  <p><span className="text-sky-400">console</span>.<span className="text-rose-400">log</span>(message);</p>
                </div>
              </div>
              <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-5 text-slate-300 shadow-black/20 sm:p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Compile output</p>
                <div className="mt-4 rounded-3xl bg-slate-950/80 p-4 text-sm leading-6 text-slate-200 sm:p-5">
                  <p>✔ Code compiled successfully</p>
                  <p className="mt-2 text-slate-400">Preview the result instantly in your browser pane.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-12 text-center">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">What you can do</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Powerful features for every developer</h2>
            <p className="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg">
              Code Pencil combines instant compilation, code sharing, user authentication, and an elegant interface to help you build and ship ideas faster.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20">
              <p className="mb-4 text-3xl">⚡</p>
              <h3 className="text-2xl font-semibold text-white">Instant Compile</h3>
              <p className="mt-3 text-slate-400">
                Write code and see results immediately with the built-in compiler. No refresh needed, no delay.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20">
              <p className="mb-4 text-3xl">💾</p>
              <h3 className="text-2xl font-semibold text-white">Save & Share</h3>
              <p className="mt-3 text-slate-400">
                Save your snippets and load them later. Share friendly URLs with teammates or showcase your work.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20">
              <p className="mb-4 text-3xl">🔐</p>
              <h3 className="text-2xl font-semibold text-white">Secure account flow</h3>
              <p className="mt-3 text-slate-400">
                Register, login, and keep your code safe with user sessions and protected routes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
