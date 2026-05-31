'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  image: string;
  href: string;
  tags: string[];
}

const projects: Project[] = [
  { id: 1, title: 'TWENTY ZERO EIGHT', image: 'https://markaworks.com/wp-content/uploads/2026/02/lamama_presentation-04.webp', href: 'https://www.behance.net/gallery/224295313/TWENTY-ZERO-EIGHT', tags: ['Style', 'Fashion', 'Luxury', 'Lifestyle'] },
  { id: 2, title: 'ShopInverse', image: 'https://markaworks.com/wp-content/uploads/2026/01/featured.jpg', href: 'https://www.behance.net/gallery/224293491/SHOPINVERSE', tags: ['Home', 'Luxury', 'Fragrance', 'Shopping'] },
  { id: 3, title: 'The Modern Africa', image: 'https://markaworks.com/wp-content/uploads/2026/01/holme_cover-1.gif', href: 'https://www.behance.net/gallery/224294879/THE-MODERN-AFRICA', tags: ['Media', 'StoryTelling',] },
  { id: 4, title: 'LOKACIN', image: 'https://markaworks.com/wp-content/uploads/2026/01/bars_presentation_01.webp', href: 'https://www.behance.net/gallery/226158973/LOKACIN', tags: ['Luxury', 'Wristwatches'] },
  { id: 5, title: 'Orange Marketing', image: 'https://markaworks.com/wp-content/uploads/2026/01/barsUi01.webp', href: 'https://www.behance.net/gallery/224146707/ORANGE-MARKETING', tags: ['Digital Branding', 'Marketing strategy', 'Design Solutions'] },
  { id: 6, title: 'PMC LADY', image: 'https://markaworks.com/wp-content/uploads/2026/01/glpeptides01.jpg', href: 'https://www.behance.net/gallery/226851693/PMC-LADY', tags: ['Lifestyle', 'Women', 'Fashion'] },
  { id: 7, title: 'KOLO', image: 'https://markaworks.com/wp-content/uploads/2025/12/rauph_presentation_Artboard-1.jpg', href: 'https://www.behance.net/gallery/224465427/KOLO', tags: ['Digital wallet', 'Savings', 'Other'] },
  { id: 8, title: 'BLACKGIRL VITAMINS', image: 'https://markaworks.com/wp-content/uploads/2026/01/Rauphui_01.webp', href: 'https://www.behance.net/gallery/224295313/BLACKGIRL-VITAMINS-%28PROTEIN-SUPERFOODS%29', tags: ['Vitamins', 'Health', 'Supplements'] },
  { id: 9, title: 'Cookout', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ae0691239267949.6925cb3a5edb7.jpg', href: 'https://www.behance.net/gallery/224649173/COOKOUT', tags: ['StoryTelling', 'Media Publishing'] },  
];

const categories = [
  { name: 'View All', value: 'all', count: 114 },
  { name: 'Supplement', value: 'supplement', count: 30 },
  { name: 'Health', value: 'health', count: 29 },
  { name: 'Food and Beverage', value: 'food-and-beverage', count: 26 },
  { name: 'Coffee', value: 'coffee', count: 23 },
  { name: 'Beauty', value: 'beauty', count: 21 },
  { name: 'Home', value: 'home', count: 20 },
  { name: 'Luxury', value: 'luxury', count: 16 },
  { name: 'UI', value: 'ui', count: 12 },
  { name: 'Fragrance', value: 'fragrance', count: 12 },
];

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.tags.some(tag => tag.toLowerCase().includes(activeCategory.replace('-', ' ')));
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-[#325432] py-20 md:py-28">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12">
          <h2 className="heading-lg leading-tight mb-8">
            <span className="text-white">We build brands that stick </span>
            <span className="text-blue-400">strategically,</span>
            <span className="text-white"> </span>
            <span className="text-[#D4F157]">visually,</span>
            <span className="text-white"> </span>
            <span className="text-purple-400">emotionally.</span>
          </h2>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex gap-4 items-center">
              <a href="/projects/" className="px-6 py-2 bg-white text-[#1a3a3a] font-poppins font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                View all
              </a>

              {/* Categories Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-6 py-2 border border-white text-white font-poppins font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  Industries
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 left-0 bg-[#0f2a2a] border border-white/20 rounded-lg shadow-lg z-50 min-w-64">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => {
                          setActiveCategory(category.value);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-6 py-3 text-left flex justify-between items-center hover:bg-white/10 transition-all ${
                          activeCategory === category.value ? 'bg-[#D4F157] text-[#1a3a3a]' : 'text-white'
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm opacity-70">{category.count}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <input
                type="search"
                placeholder="Search projects by name, industry, or keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 px-4 py-2 bg-[#0f2a2a] border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4F157] transition-all"
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-2.5 text-white/50">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.href}
              className="group overflow-hidden rounded-lg"
              style={{
                transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video md:aspect-square bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-poppins font-semibold">View Project</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg font-poppins font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/10 text-white px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
