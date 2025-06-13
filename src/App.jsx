import { Heart, Plane, Anchor, MapPin, Utensils, PartyPopper, Camera, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

function App() {
  const days = [
    {
      date: "22nd",
      title: "Arrival Day",
      theme: "Welcome to Italy",
      color: "from-amber-100 to-orange-100",
      textColor: "text-amber-900",
      icon: <Plane className="w-6 h-6" />,
      activities: [
        "Land at 17:45 ✈️",
        "Travel to villa and settle in! 🏡"
      ]
    },
    {
      date: "23rd",
      title: "The Last Splash",
      theme: "Dress up in something blue! 🩵🌊",
      color: "from-blue-100 to-cyan-100",
      textColor: "text-blue-900",
      icon: <Anchor className="w-6 h-6" />,
      activities: [
        "Breakfast at the villa 🥐",
        "Boat trip around the islands ⛵",
        "Themed dinner: the last splash 🩵🌊"
      ]
    },
    {
      date: "24th",
      title: "Love is in the Air",
      theme: "Dress up in reds and pinks for the day! ❤️💞",
      color: "from-pink-100 to-rose-100",
      textColor: "text-pink-900",
      icon: <Heart className="w-6 h-6" />,
      activities: [
        "Explore the town of Baveno - walk around, have lunch, see villas and gardens 🌸",
        "Pajama night (dress code-cute/pink PJs!) - face masks, games, cooking dinner together at the villa 💅🎮🍝"
      ]
    },
    {
      date: "25th",
      title: "Bridal Shower Day",
      theme: "Blush & Bows 🌷🎀👰‍♀️",
      color: "from-rose-100 to-pink-100",
      textColor: "text-rose-900",
      icon: <PartyPopper className="w-6 h-6" />,
      activities: [
        "Pool party, mocktail making 🍹🏊‍♀️",
        "Pizza making, dance practice 🍕💃",
        "Canvas painting 🎨",
        "Final dinner out: Golden Hour Glow 🌅💛",
        "Dress in the colours of the sunset - pinks, golds, oranges, yellows"
      ]
    },
    {
      date: "26th",
      title: "Farewell",
      theme: "Until we meet again... 😢",
      color: "from-purple-100 to-indigo-100",
      textColor: "text-purple-900",
      icon: <Camera className="w-6 h-6" />,
      activities: [
        "Fly back home 😢",
        "Memories to last forever 💕"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Header */}
      <header className="text-center py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 mb-4">
            Arooza's Final Fling
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            Italy Trip 22nd–26th 🇮🇹🤍✨
          </p>
          <div className="flex justify-center items-center gap-2 text-lg text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>Baveno, Italy</span>
          </div>
        </div>
      </header>

      {/* Timeline */}
      <main className="max-w-6xl mx-auto px-4 pb-12">
        <div className="space-y-8">
          {days.map((day, index) => (
            <div key={day.date} className="relative">
              {/* Timeline line */}
              {index < days.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-pink-300 to-rose-300 hidden md:block"></div>
              )}
              
              {/* Day card */}
              <div className={`bg-gradient-to-r ${day.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="p-6 md:p-8">
                  {/* Date badge */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
                      {day.icon}
                    </div>
                    <div>
                      <h2 className={`text-2xl md:text-3xl font-bold ${day.textColor}`}>
                        {day.date}
                      </h2>
                      <h3 className={`text-lg md:text-xl font-semibold ${day.textColor}`}>
                        {day.title}
                      </h3>
                    </div>
                  </div>

                  {/* Theme */}
                  <div className={`${day.textColor} text-sm md:text-base font-medium mb-4 p-3 bg-white/50 rounded-lg`}>
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    {day.theme}
                  </div>

                  {/* Activities */}
                  <div className="space-y-3">
                    {day.activities.map((activity, actIndex) => (
                      <div key={actIndex} className={`${day.textColor} flex items-start gap-3 p-3 bg-white/30 rounded-lg hover:bg-white/50 transition-colors duration-200`}>
                        <div className="w-2 h-2 bg-current rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base leading-relaxed">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer message */}
        <div className="text-center mt-16 p-8 bg-white/70 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Let's make memories that will last forever! 💕
          </h3>
          <p className="text-gray-600 text-lg">
            Here's to Arooza's amazing adventure in Italy! 🇮🇹✨
          </p>
          <div className="mt-6 flex justify-center">
            <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Ciao Bella! 💋
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

