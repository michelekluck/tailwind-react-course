function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <div className="bg-blue-200 mb-10">
        <p className="text-xl font-semibold text-center text-green-500">Hello world</p>
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
