import Menu from "./components/menu"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1d1d1d]">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13213.jpg-sEGecqdC7Fa14ruEilE3YMPJq4Cs2y.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10">
        <Menu />
      </div>
    </div>
  )
}

