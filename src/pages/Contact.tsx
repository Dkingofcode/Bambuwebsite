'use client';

//import { useState } from 'react';
import Navigation from '../components/Navigation';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function ContactsPage() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   projectDetails: '',
  //   budget: '',
  // });

  // const locations = [
  //   { name: 'London', description: 'Top Branding Agency In London' },
  //   { name: 'Istanbul', description: 'Top Branding Agency In Istanbul' },
  //   { name: 'Dubai', description: 'Top Branding Agency In Dubai' },
  // ];

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };

  return (
    <main>
      <Navigation />

      {/* Section 1: Hero with Locations */}
      {/* <section className="bg-[#1a3a3a] py-20 md:py-28">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-8">
                International <span className="text-[#E7B621]">Branding</span> Agency. All Branches.
              </h1>
            </div>
            <div className="flex justify-center">
              <img src="/SpinshweelICOn.png" alt="Branches" className="w-72 h-72 object-contain" />
            </div>
          </div>

          {/* Location Cards 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div key={location.name} className="bg-white rounded-2xl p-8">
                <h3 className="text-4xl font-poppins font-bold text-[#7fb3d5] mb-3">{location.name}</h3>
                <p className="text-gray-700 text-lg">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> 
      */}

      {/* Section 2: Two Contact Options
      <section className="bg-[#ededda] py-20 md:py-28">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Option 1: Calendly */}
            {/* <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#1a3a3a] mb-6">
                Option 1. Online Meeting with Our Team
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Book a consultation with our international branding agency team. Pick a time that works for you and meet us online. Use the Calendly widget below to book your spot.
              </p>
              <div className="bg-[#E7B621] rounded-2xl p-8 text-center">
                <p className="font-poppins font-bold text-[#1a3a3a] text-2xl mb-4">Select a Day</p>
                <div className="text-sm text-gray-700">
                  <div className="flex justify-between mb-4">
                    <span>&lt;</span>
                    <span className="font-bold">April 2026</span>
                    <span>&gt;</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-xs font-bold text-gray-600">
                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                      <div key={day}>{day}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}

            {/* Option 2: Contact Form Start */}
            {/* <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#1a3a3a] mb-6">
                Option 2. Contact Our Branding Agency
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Not ready for a call just yet? Fill out our quick form and tell us more about your branding project. We serve clients globally with offices in London, Dubai, and Istanbul.
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-lg font-bold text-[#1a3a3a] mb-3">What&apos;s your name?</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-6 py-3 rounded-xl border border-gray-300 bg-white text-[#1a3a3a] placeholder-gray-400 focus:outline-none focus:border-[#E7B621]"
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-[#1a3a3a] mb-3">What&apos;s your email?</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-6 py-3 rounded-xl border border-gray-300 bg-white text-[#1a3a3a] placeholder-gray-400 focus:outline-none focus:border-[#E7B621]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 3: Form Continuation */}
      {/* <section className="bg-[#ededda] py-20 md:py-28">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar & Timezone */}
            {/* <div>
              <p className="text-lg font-bold text-[#1a3a3a] mb-4">Time zone</p>
              <div className="bg-[#E7B621] rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-2 text-[#1a3a3a] font-bold text-lg">
                  <span>🌍</span>
                  <span>Pacific Time - US & Canada (10:21)</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <div className="flex justify-between mb-4">
                  <span className="text-sm font-bold text-gray-600">&lt;</span>
                  <span className="text-sm font-bold text-gray-600">27 28 29 30</span>
                  <span className="text-sm font-bold text-gray-600">&gt;</span>
                </div>
              </div>
            </div> */} 

            {/* Form Continuation */}
 
 {/*            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-bold text-[#1a3a3a] mb-3">
                  Please tell us a bit more about your project
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="What&apos;s the objective? Who&apos;s the audience? Dish out the details here..."
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 bg-white text-[#1a3a3a] placeholder-gray-400 focus:outline-none focus:border-[#E7B621] h-40 resize-none"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-[#1a3a3a] mb-3">What is your budget range?</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 rounded-xl border border-gray-300 bg-white text-[#1a3a3a] focus:outline-none focus:border-[#E7B621]"
                >
                  <option value="">Select</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="robot" className="w-5 h-5 rounded" />
                <label htmlFor="robot" className="text-gray-700">
                  I&apos;m not a robot
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#E7B621] text-[#1a3a3a] font-poppins font-bold text-lg rounded-full hover:bg-[#E0F77D] transition-colors"
              >
                Send project request
              </button>
            </form>
          </div>
        </div>
      </section> 
      */}

      {/* Contact Section */}
{/* <section className="bg-[#ededda] py-20 md:py-28">
  <div className="container-max">
    <div className="max-w-6xl mx-auto">

      {/* Heading 
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#1a3a3a] mb-6">
          Let&apos;s Build Something Exceptional
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
          Tell us about your brand, your goals, and your vision. Our international
          branding agency team will review your project and get back to you shortly.
        </p>
      </div>

      {/* SINGLE FORM 
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[32px] p-8 md:p-14 shadow-sm border border-gray-200"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE 
          <div className="space-y-8">

            {/* Name 
            <div>
              <label className="block text-lg font-semibold text-[#1a3a3a] mb-3">
                Your Name
              </label>

              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 bg-[#fafafa] text-[#1a3a3a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E7B621] transition-all"
              />
            </div>

            {/* Email 
            <div>
              <label className="block text-lg font-semibold text-[#1a3a3a] mb-3">
                Your Email
              </label>

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 bg-[#fafafa] text-[#1a3a3a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E7B621] transition-all"
              />
            </div>

            {/* Budget 
            <div>
              <label className="block text-lg font-semibold text-[#1a3a3a] mb-3">
                Budget Range
              </label>

              <select
                required
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 bg-[#fafafa] text-[#1a3a3a] focus:outline-none focus:ring-2 focus:ring-[#E7B621] transition-all"
              >
                <option value="">Select your budget</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>

            {/* Timezone Box 
            <div className="bg-[#E7B621] rounded-2xl p-6">
              <p className="text-[#1a3a3a] font-bold text-lg mb-2">
                🌍 International Team
              </p>

              <p className="text-[#1a3a3a]/80 leading-relaxed">
                We work with brands globally across London, Dubai, and Istanbul.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE 
          <div className="flex flex-col">

            {/* Project Details 
            <div className="flex-1">
              <label className="block text-lg font-semibold text-[#1a3a3a] mb-3">
                Tell Us About Your Project
              </label>

              <textarea
                required
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                placeholder="Describe your project goals, target audience, brand vision, timelines, challenges, and anything else you'd like us to know..."
                className="w-full h-[320px] px-6 py-5 rounded-2xl border border-gray-300 bg-[#fafafa] text-[#1a3a3a] placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#E7B621] transition-all"
              />
            </div>

            {/* Checkbox 
            <div className="flex items-center gap-3 mt-6">
              <input
                required
                type="checkbox"
                id="robot"
                className="w-5 h-5 rounded border-gray-300"
              />

              <label
                htmlFor="robot"
                className="text-gray-700 text-sm md:text-base"
              >
                I confirm that this inquiry is genuine.
              </label>
            </div>

            {/* Submit 
            <button
              type="submit"
              className="mt-8 w-full py-5 bg-[#1a3a3a] text-white font-poppins font-bold text-lg rounded-full hover:bg-[#244949] transition-all duration-300 hover:scale-[1.01]"
            >
              Send Project Request
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section> */}

      {/* Section 4: Offices Highlight */}
      <section className="bg-[#325432] py-20 md:py-28">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-12 text-center">
            Contact Our International Branding Agency
          </h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.name} className="bg-white rounded-2xl p-8">
                <h3 className="text-3xl font-poppins font-bold text-[#7fb3d5] mb-2">{location.name}</h3>
                <p className="text-gray-700">{location.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-[#325432] py-20 md:py-28">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src="/SpinshweelICOn.png" alt="Ready to work together" className="w-56 h-56 object-contain opacity-90" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-3">
                Interested in working
              </h2>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#E7B621] mb-8">
                together?
              </h2>
              <a
                href="#"
                className="inline-block px-10 py-4 bg-[#E7B621] text-[#1a3a3a] font-poppins font-bold text-lg rounded-full hover:bg-[#E0F77D] transition-colors"
              >
                Join the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </main>
  );
}
