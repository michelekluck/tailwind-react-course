import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  return (
    <div className={`${theme} bg-slate-50 min-h-screen text-slate-900 dark:bg-background dark:text-primary`}>
      {/* Navbar */}
      <div className="flex items-center justify-between p-4">
        <div className="font-bold">Logo</div>

        {/* Desktop Navbar */}
        <div className="hidden sm:flex gap-2">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <button className="text-xl cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <button className="text-xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}>☰</button>

      </div>

      {/* Mobile Navbar */}
      {open && (
        <div className="flex flex-col items-center gap-2 text-slate-900 dark:bg-background dark:text-white p-4 sm:hidden">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <button className="text-xl cursor-pointer sm:hidden"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      )}

      <div className="bg-blue-200">
        <p className="text-xl font-semibold text-center text-green-500">Hello world</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 text-white dark:bg-background dark:text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-600">Feature One</div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Two</div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Three</div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Four</div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Five</div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Six</div>
      </div>
    </div>
  )
}

export default App

// tailwind styles:
// padding 1 = 0.25 rem
// padding 2 = 0.5 rem
// padding 5 -> 1.25 rem
// py - vertical padding | px - horizontal padding
// pl - padding left | pr - right | pb - bottom | pt - top
// m - margim | ml - margim left | mr - margim right ...
// min-h-screen = minimum height screen - elemento vai ter pelo menos a altura total do viewport (tela do navegador)
// height em pixel: h=[500px]
// flex-col | flex-row
// border = rounded-sm  | rounded-xl | rounded-full (circle)
// sm:grid-cols-2 -> aplique grid-cols-2 para todas as telas menos sm (small - mobile)
// md:grid-cols-3 -> aplique grid-cols-3 para telas MAIORES que md (medium) 