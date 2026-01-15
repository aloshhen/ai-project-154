import { Shield, Target, Trophy, TrendingUp, Users, Calendar, Star, ChevronRight, Menu, X, ExternalLink, MessageSquare, Award, BarChart } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tournaments = [
    { name: 'ESL Pro League Season 19', date: '2024-03-15', prize: '$850,000', status: 'Live', teams: 24 },
    { name: 'BLAST Premier Spring', date: '2024-03-20', prize: '$425,000', status: 'Upcoming', teams: 16 },
    { name: 'IEM Katowice 2024', date: '2024-02-28', prize: '$1,000,000', status: 'Completed', teams: 24 },
    { name: 'PGL Major Copenhagen', date: '2024-04-10', prize: '$1,250,000', status: 'Upcoming', teams: 32 },
  ]

  const players = [
    { rank: 1, name: 's1mple', team: 'NAVI', rating: 1.32, kd: 1.45, country: 'UA' },
    { rank: 2, name: 'ZywOo', team: 'Vitality', rating: 1.29, kd: 1.41, country: 'FR' },
    { rank: 3, name: 'NiKo', team: 'G2', rating: 1.26, kd: 1.38, country: 'BA' },
    { rank: 4, name: 'dev1ce', team: 'Astralis', rating: 1.24, kd: 1.35, country: 'DK' },
    { rank: 5, name: 'm0NESY', team: 'G2', rating: 1.23, kd: 1.34, country: 'RU' },
  ]

  const guides = [
    { title: 'Advanced Smoke Lineups for Mirage', category: 'Tactics', difficulty: 'Expert', views: '45K' },
    { title: 'Mastering AWP Positioning in Competitive', category: 'Weapons', difficulty: 'Advanced', views: '38K' },
    { title: 'Economy Management for Pro Teams', category: 'Strategy', difficulty: 'Expert', views: '52K' },
  ]

  const news = [
    { title: 'New CS2 Update Brings Major Balance Changes', date: '2024-03-10', category: 'Updates' },
    { title: 'NAVI Wins ESL Pro League with Dominant Performance', date: '2024-03-08', category: 'Esports' },
    { title: 'Upcoming Major: Teams and Predictions', date: '2024-03-05', category: 'Analysis' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-xl z-50 border-b border-orange-500/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="w-10 h-10 text-orange-500" />
                <div className="absolute inset-0 blur-xl bg-orange-500/30"></div>
              </div>
              <div>
                <span className="text-3xl font-black text-white tracking-tighter">CS2</span>
                <span className="text-3xl font-black text-orange-500 tracking-tighter">PRO</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#guides" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Guides</a>
              <a href="#news" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">News</a>
              <a href="#tournaments" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Tournaments</a>
              <a href="#rankings" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Rankings</a>
              <a href="#discord" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Discord</a>
            </div>

            <button className="hidden md:block bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-6 py-2.5 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
              Join Community
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#guides" className="block text-gray-300 hover:text-orange-500 transition-colors font-semibold">Guides</a>
              <a href="#news" className="block text-gray-300 hover:text-orange-500 transition-colors font-semibold">News</a>
              <a href="#tournaments" className="block text-gray-300 hover:text-orange-500 transition-colors font-semibold">Tournaments</a>
              <a href="#rankings" className="block text-gray-300 hover:text-orange-500 transition-colors font-semibold">Rankings</a>
              <a href="#discord" className="block text-gray-300 hover:text-orange-500 transition-colors font-semibold">Discord</a>
            </div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80" 
            alt="CS2 Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950"></div>
        </div>
        
        <div className="relative z-10 container mx-auto text-center py-20">
          <div className="inline-block mb-6 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-orange-500 font-bold text-sm tracking-wide">PROFESSIONAL CS2 HUB</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            MASTER<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">COUNTER-STRIKE 2</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Expert guides, live tournament data, player rankings, and professional community for competitive CS2 players
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-orange-500/30">
              Explore Guides
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all backdrop-blur-sm border border-white/10 hover:border-orange-500/50">
              View Rankings
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20">
              <Trophy className="w-8 h-8 text-orange-500 mb-2 mx-auto" />
              <div className="text-3xl font-black text-white">150+</div>
              <div className="text-sm text-gray-400 font-semibold">Pro Guides</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20">
              <Users className="w-8 h-8 text-orange-500 mb-2 mx-auto" />
              <div className="text-3xl font-black text-white">50K+</div>
              <div className="text-sm text-gray-400 font-semibold">Community</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20">
              <Target className="w-8 h-8 text-orange-500 mb-2 mx-auto" />
              <div className="text-3xl font-black text-white">24/7</div>
              <div className="text-sm text-gray-400 font-semibold">Live Updates</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20">
              <Star className="w-8 h-8 text-orange-500 mb-2 mx-auto" />
              <div className="text-3xl font-black text-white">Top 500</div>
              <div className="text-sm text-gray-400 font-semibold">Players Tracked</div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section id="guides" className="py-20 px-6 bg-gradient-to-b from-transparent to-orange-950/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              Expert <span className="text-orange-500">Guides</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced tactics and strategies from professional players
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-bold rounded-full border border-orange-500/30">
                    {guide.category}
                  </span>
                  <span className="text-gray-500 text-sm font-semibold">{guide.views} views</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                  {guide.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-slate-800 text-gray-300 text-xs font-bold rounded-lg">
                    {guide.difficulty}
                  </span>
                  <ChevronRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
              View All Guides
            </button>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              Latest <span className="text-orange-500">News</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest CS2 developments and esports
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="h-48 bg-gradient-to-br from-orange-600/20 to-slate-900 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-orange-500/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-bold rounded-full border border-orange-500/30">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <button className="text-orange-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section id="tournaments" className="py-20 px-6 bg-gradient-to-b from-orange-950/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              Tournament <span className="text-orange-500">Schedule</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Live tracking of major CS2 tournaments worldwide
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm rounded-2xl border border-orange-500/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-950/80 border-b border-orange-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">Tournament</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">Prize Pool</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">Teams</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {tournaments.map((tournament, index) => (
                    <tr key={index} className="hover:bg-slate-900/50 transition-colors">
                      <td className="px-6 py-5 text-white font-semibold">{tournament.name}</td>
                      <td className="px-6 py-5 text-gray-400">{tournament.date}</td>
                      <td className="px-6 py-5 text-orange-500 font-bold">{tournament.prize}</td>
                      <td className="px-6 py-5 text-gray-400">{tournament.teams}</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          tournament.status === 'Live' ? 'bg-green-500/20 text-green-500 border border-green-500/30' :
                          tournament.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-500 border border-blue-500/30' :
                          'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>
                          {tournament.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* RANKINGS */}
      <section id="rankings" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              Player <span className="text-orange-500">Rankings</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Top professional players ranked by performance metrics
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm rounded-2xl border border-orange-500/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-950/80 border-b border-orange-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">Player</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">Team</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">K/D</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-500 uppercase tracking-wider">Country</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {players.map((player, index) => (
                    <tr key={index} className="hover:bg-slate-900/50 transition-colors">
                      <td className="px-6 py-5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black ${
                          player.rank === 1 ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' :
                          player.rank === 2 ? 'bg-gray-400/20 text-gray-400 border border-gray-400/30' :
                          player.rank === 3 ? 'bg-orange-700/20 text-orange-700 border border-orange-700/30' :
                          'bg-slate-800 text-gray-400'
                        }`}>
                          {player.rank}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-white font-bold text-lg">{player.name}</td>
                      <td className="px-6 py-5 text-gray-400 font-semibold">{player.team}</td>
                      <td className="px-6 py-5 text-orange-500 font-bold">{player.rating}</td>
                      <td className="px-6 py-5 text-green-500 font-semibold">{player.kd}</td>
                      <td className="px-6 py-5 text-gray-400">{player.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center gap-2 mx-auto">
              <BarChart className="w-5 h-5" />
              View Full Rankings
            </button>
          </div>
        </div>
      </section>

      {/* DISCORD CTA */}
      <section id="discord" className="py-20 px-6 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-orange-600/20 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-orange-500/30 p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
            <div className="relative z-10">
              <MessageSquare className="w-20 h-20 text-orange-500 mx-auto mb-6" />
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                Join Our <span className="text-orange-500">Discord</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Connect with 50,000+ professional CS2 players. Share strategies, find teammates, and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  Join Discord Server
                </button>
                <button className="bg-white/5 hover:bg-white/10 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all backdrop-blur-sm border border-white/10 hover:border-orange-500/50">
                  Learn More
                </button>
              </div>
              <div className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">50K+ Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">24/7 Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">Pro Players</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-orange-500/20 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-orange-500" />
                <div>
                  <span className="text-2xl font-black text-white tracking-tighter">CS2</span>
                  <span className="text-2xl font-black text-orange-500 tracking-tighter">PRO</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The ultimate hub for professional Counter-Strike 2 players.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#guides" className="hover:text-orange-500 transition-colors">Guides</a></li>
                <li><a href="#news" className="hover:text-orange-500 transition-colors">News</a></li>
                <li><a href="#tournaments" className="hover:text-orange-500 transition-colors">Tournaments</a></li>
                <li><a href="#rankings" className="hover:text-orange-500 transition-colors">Rankings</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#discord" className="hover:text-orange-500 transition-colors">Discord Server</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Team Finder</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-slate-900 hover:bg-orange-500/20 border border-orange-500/20 hover:border-orange-500/50 rounded-lg flex items-center justify-center transition-all">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-900 hover:bg-orange-500/20 border border-orange-500/20 hover:border-orange-500/50 rounded-lg flex items-center justify-center transition-all">
                  <Youtube className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-900 hover:bg-orange-500/20 border border-orange-500/20 hover:border-orange-500/50 rounded-lg flex items-center justify-center transition-all">
                  <MessageSquare className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 CS2 PRO. All rights reserved.
            </div>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App