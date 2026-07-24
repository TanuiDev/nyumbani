import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, Heart, Bookmark } from 'lucide-react'

type Property = {
  id: string
  title: string
  neighborhood: string
  type: 'Studio' | 'Bedsitter' | '1 Bedroom' | '2 Bedroom' | '3 Bedroom'
  bedrooms: number
  rent: number
  image: string
}

const properties: Property[] = [
  {
    id: '1',
    title: 'Cozy studio near town',
    neighborhood: 'Langas',
    type: 'Studio',
    bedrooms: 0,
    rent: 6500,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Bright bedsitter, quiet street',
    neighborhood: 'Kimumu',
    type: 'Bedsitter',
    bedrooms: 1,
    rent: 5800,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Modern 1BR with balcony',
    neighborhood: 'Elgon View',
    type: '1 Bedroom',
    bedrooms: 1,
    rent: 12000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Spacious 2BR family home',
    neighborhood: 'Pioneer',
    type: '2 Bedroom',
    bedrooms: 2,
    rent: 18000,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    title: 'Compact studio, campus-adjacent',
    neighborhood: 'Annex',
    type: 'Studio',
    bedrooms: 0,
    rent: 5200,
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    title: 'Gated 3BR with parking',
    neighborhood: 'Race Course',
    type: '3 Bedroom',
    bedrooms: 3,
    rent: 26000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    title: 'Sunny 1BR near hospital',
    neighborhood: 'Kapsoya',
    type: '1 Bedroom',
    bedrooms: 1,
    rent: 11000,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '8',
    title: 'Newly built bedsitter',
    neighborhood: 'Huruma',
    type: 'Bedsitter',
    bedrooms: 1,
    rent: 6000,
    image: 'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '9',
    title: 'Roomy 2BR, secure compound',
    neighborhood: 'West Indies',
    type: '2 Bedroom',
    bedrooms: 2,
    rent: 20000,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
  },
]

const neighborhoods = Array.from(new Set(properties.map((p) => p.neighborhood))).sort()
const types = Array.from(new Set(properties.map((p) => p.type)))
const MAX_RENT_CEILING = 30000

const Properties = () => {
  const [search, setSearch] = useState('')
  const [neighborhood, setNeighborhood] = useState('all')
  const [type, setType] = useState('all')
  const [bedrooms, setBedrooms] = useState('all')
  const [maxRent, setMaxRent] = useState(MAX_RENT_CEILING)
  const [saved, setSaved] = useState<Set<string>>(new Set())
  const [favorited, setFavorited] = useState<Set<string>>(new Set())

  const toggleSet = (setFn: React.Dispatch<React.SetStateAction<Set<string>>>, id: string) => {
    setFn((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const handleReset = () => {
    setSearch('')
    setNeighborhood('all')
    setType('all')
    setBedrooms('all')
    setMaxRent(MAX_RENT_CEILING)
  }

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesSearch =
        search.trim() === '' ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.neighborhood.toLowerCase().includes(search.toLowerCase())
      const matchesNeighborhood = neighborhood === 'all' || p.neighborhood === neighborhood
      const matchesType = type === 'all' || p.type === type
      const matchesBedrooms = bedrooms === 'all' || p.bedrooms === Number(bedrooms)
      const matchesRent = p.rent <= maxRent
      return matchesSearch && matchesNeighborhood && matchesType && matchesBedrooms && matchesRent
    })
  }, [search, neighborhood, type, bedrooms, maxRent])

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-12 px-3 sm:px-4 lg:px-2">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Rentals in Eldoret</h1>
          <p className="text-gray-600">
            {properties.length} homes across {neighborhoods.length} neighborhoods.
          </p>
        </div>

        {/* Filters */}
      
        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </div>
            <span className="text-sm text-gray-500">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
            <div className="relative md:col-span-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search title, area, amenity..."
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <select
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="all">All neighborhoods</option>
              {neighborhoods.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="all">Any type</option>
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="all">Any bedrooms</option>
              <option value="0">Studio / Bedsitter</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedroom</option>
              <option value="3">3 Bedroom</option>
            </select>
          </div>

          {/* Max rent row — stacks on mobile, single line on larger screens */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center justify-between sm:justify-start sm:gap-4 sm:flex-1">
            <span className="text-sm text-gray-600 whitespace-nowrap">Max rent</span>
              <input
                type="range"
                min={4000}
                max={MAX_RENT_CEILING}
                step={500}
                value={maxRent}
                onChange={(e) => setMaxRent(Number(e.target.value))}
                className="hidden sm:block flex-1 accent-orange-600 min-w-0"
              />
              <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                KSh {maxRent.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min={4000}
              max={MAX_RENT_CEILING}
              step={500}
              value={maxRent}
              onChange={(e) => setMaxRent(Number(e.target.value))}
              className="sm:hidden w-full accent-orange-600"
            />

            <button
              onClick={handleReset}
              className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors duration-200 self-start sm:self-auto whitespace-nowrap"
            >
              Reset
            </button>
          </div>
        </div>
        {/* Results grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No rentals match your filters. Try adjusting them.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-56">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 px-3 py-1 rounded-full">
                    {property.neighborhood}
                  </span>
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button
                      onClick={() => toggleSet(setFavorited, property.id)}
                      aria-label="Toggle favorite"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200"
                    >
                      <Heart
                        className={`w-4 h-4 ${favorited.has(property.id) ? 'fill-orange-600 text-orange-600' : 'text-gray-600'}`}
                      />
                    </button>
                    <button
                      onClick={() => toggleSet(setSaved, property.id)}
                      aria-label="Toggle saved"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200"
                    >
                      <Bookmark
                        className={`w-4 h-4 ${saved.has(property.id) ? 'fill-orange-600 text-orange-600' : 'text-gray-600'}`}
                      />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{property.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {property.type} · {property.neighborhood}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    KSh {property.rent.toLocaleString()}
                    <span className="text-sm font-normal text-gray-500"> / month</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Properties