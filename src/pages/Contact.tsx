// 'use client';

// //import { useState } from 'react';
// import Navigation from '../components/Navigation';
// import FAQ from '../components/FAQ';
// import Footer from '../components/Footer';

// export default function ContactsPage() {
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

  // return (
  //   <main>
  //     <Navigation />

      {/* Section 1: Hero with Locations */}
      {/* <section className="bg-[#052F23] py-20 md:py-28">
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
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#052F23] mb-6">
                Option 1. Online Meeting with Our Team
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Book a consultation with our international branding agency team. Pick a time that works for you and meet us online. Use the Calendly widget below to book your spot.
              </p>
              <div className="bg-[#E7B621] rounded-2xl p-8 text-center">
                <p className="font-poppins font-bold text-[#052F23] text-2xl mb-4">Select a Day</p>
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
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#052F23] mb-6">
                Option 2. Contact Our Branding Agency
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Not ready for a call just yet? Fill out our quick form and tell us more about your branding project. We serve clients globally with offices in London, Dubai, and Istanbul.
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-lg font-bold text-[#052F23] mb-3">What&apos;s your name?</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-6 py-3 rounded-xl border border-gray-300 bg-white text-[#052F23] placeholder-gray-400 focus:outline-none focus:border-[#E7B621]"
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-[#052F23] mb-3">What&apos;s your email?</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-6 py-3 rounded-xl border border-gray-300 bg-white text-[#052F23] placeholder-gray-400 focus:outline-none focus:border-[#E7B621]"
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
              <p className="text-lg font-bold text-[#052F23] mb-4">Time zone</p>
              <div className="bg-[#E7B621] rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-2 text-[#052F23] font-bold text-lg">
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
                <label className="block text-lg font-bold text-[#052F23] mb-3">
                  Please tell us a bit more about your project
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="What&apos;s the objective? Who&apos;s the audience? Dish out the details here..."
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 bg-white text-[#052F23] placeholder-gray-400 focus:outline-none focus:border-[#E7B621] h-40 resize-none"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-[#052F23] mb-3">What is your budget range?</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 rounded-xl border border-gray-300 bg-white text-[#052F23] focus:outline-none focus:border-[#E7B621]"
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
                className="w-full py-4 bg-[#E7B621] text-[#052F23] font-poppins font-bold text-lg rounded-full hover:bg-[#E0F77D] transition-colors"
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
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#052F23] mb-6">
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
              <label className="block text-lg font-semibold text-[#052F23] mb-3">
                Your Name
              </label>

              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 bg-[#fafafa] text-[#052F23] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E7B621] transition-all"
              />
            </div>

            {/* Email 
            <div>
              <label className="block text-lg font-semibold text-[#052F23] mb-3">
                Your Email
              </label>

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 bg-[#fafafa] text-[#052F23] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E7B621] transition-all"
              />
            </div>

            {/* Budget 
            <div>
              <label className="block text-lg font-semibold text-[#052F23] mb-3">
                Budget Range
              </label>

              <select
                required
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 bg-[#fafafa] text-[#052F23] focus:outline-none focus:ring-2 focus:ring-[#E7B621] transition-all"
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
              <p className="text-[#052F23] font-bold text-lg mb-2">
                🌍 International Team
              </p>

              <p className="text-[#052F23]/80 leading-relaxed">
                We work with brands globally across London, Dubai, and Istanbul.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE 
          <div className="flex flex-col">

            {/* Project Details 
            <div className="flex-1">
              <label className="block text-lg font-semibold text-[#052F23] mb-3">
                Tell Us About Your Project
              </label>

              <textarea
                required
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                placeholder="Describe your project goals, target audience, brand vision, timelines, challenges, and anything else you'd like us to know..."
                className="w-full h-[320px] px-6 py-5 rounded-2xl border border-gray-300 bg-[#fafafa] text-[#052F23] placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#E7B621] transition-all"
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
              className="mt-8 w-full py-5 bg-[#052F23] text-white font-poppins font-bold text-lg rounded-full hover:bg-[#244949] transition-all duration-300 hover:scale-[1.01]"
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
      {/* <section className="bg-[#052F23] py-20 md:py-28">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-12 text-center">
            Contact Our International Branding Agency
          </h2> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.name} className="bg-white rounded-2xl p-8">
                <h3 className="text-3xl font-poppins font-bold text-[#7fb3d5] mb-2">{location.name}</h3>
                <p className="text-gray-700">{location.description}</p>
              </div>
            ))}
          </div> */}
        {/* </div>
      </section> */}

      {/* Section 5: CTA */}
      {/* <section className="bg-[#052F23] py-20 md:py-28">
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
                className="inline-block px-10 py-4 bg-[#E7B621] text-[#052F23] font-poppins font-bold text-lg rounded-full hover:bg-[#E0F77D] transition-colors"
              >
                Join the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <FAQ />

      <Footer />
    </main>
  );
}  */}









'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
//import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function BuildWithUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    needHelp: '',
    businessNow: '',
    hearAbout: '',
  });

  const [qualifications, setQualifications] = useState({
    projectType: '',
    timeline: '',
    investment: '',
    website: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQualificationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setQualifications({
      ...qualifications,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        needHelp: '',
        businessNow: '',
        hearAbout: '',
      });
      setQualifications({
        projectType: '',
        timeline: '',
        investment: '',
        website: '',
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#E1E1D5] py-20 md:py-32 lg:py-40">
        <div className="container-max max-w-7xl px-6 md:px-12">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-8 md:mb-10">
            <span className="text-[#052F23]">Tell us what you are building. </span>
            <br />
            <span className="text-[#D0D731]">We will help you shape what comes next.</span>
          </h1>

          {/* Yellow accent line */}
          <div className="w-20 md:w-24 h-1 bg-[#D0D731] mb-10 md:mb-12" />

          {/* Body Text */}
          <p className="text-base md:text-lg text-[#052F23] leading-relaxed max-w-3xl font-normal mb-10 md:mb-12">
            Whether you need a new identity, a sharper website, a campaign, production support, an AI workflow or a long term creative partner, start by telling us where the business is now and where you want it to go.
          </p>

          {/* CTA Button */}
          <a
            href="#form"
            className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#D0D731] text-[#052F23] font-poppins font-bold text-sm md:text-base transition-all duration-300 hover:bg-[#D4F157]"
          >
            LET US BUILD TOGETHER
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="bg-[#E1E1D5] py-20 md:py-32 lg:py-40">
        <div className="container-max max-w-7xl px-6 md:px-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form Fields */}
            <div className="bg-[#E1E1D5] rounded-2xl p-8 md:p-10">
              <div className="text-xs md:text-sm font-poppins font-bold text-gray-600 tracking-widest uppercase mb-8 md:mb-10">
                Contact Form Fields
              </div>

              <div className="space-y-6 md:space-y-8">
                {/* Name / Company */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-poppins font-bold text-[#052F23]">
                    Name / Company
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleContactChange}
                    placeholder="Your name and company"
                    className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:outline-none focus:border-[#D0D731] transition-colors text-[#052F23]"
                    required
                  />
                </div>

                {/* Email / Phone */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-poppins font-bold text-[#052F23]">
                    Email / Phone
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleContactChange}
                    placeholder="your@email.com or +1 (555) 000-0000"
                    className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:outline-none focus:border-[#D0D731] transition-colors text-[#052F23]"
                    required
                  />
                </div>

                {/* What do you need help with? */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-poppins font-bold text-[#052F23]">
                    What do you need help with?
                  </label>
                  <textarea
                    name="needHelp"
                    value={formData.needHelp}
                    onChange={handleContactChange}
                    placeholder="Strategy, branding, digital, marketing, production, AI support..."
                    rows={3}
                    className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:outline-none focus:border-[#D0D731] transition-colors text-[#052F23] resize-none"
                    required
                  />
                </div>

                {/* Where is the business now? */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-poppins font-bold text-[#052F23]">
                    Where is the business now?
                  </label>
                  <textarea
                    name="businessNow"
                    value={formData.businessNow}
                    onChange={handleContactChange}
                    placeholder="Current state, challenges, goals..."
                    rows={3}
                    className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:outline-none focus:border-[#D0D731] transition-colors text-[#052F23] resize-none"
                    required
                  />
                </div>

                {/* How did you hear about us? */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-poppins font-bold text-[#052F23]">
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleContactChange}
                    placeholder="Referral, social media, search, other..."
                    className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:outline-none focus:border-[#D0D731] transition-colors text-[#052F23]"
                  />
                </div>
              </div>
            </div>

            {/* Optional Qualification Fields */}
            <div className="border-2 border-gray-400 rounded-2xl p-8 md:p-10">
              <div className="text-xs md:text-sm font-poppins font-bold text-gray-600 tracking-widest uppercase mb-8 md:mb-10">
                Optional Qualification
              </div>

              <div className="space-y-6 md:space-y-8">
                {/* Project Type */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-poppins font-bold text-[#052F23]">
                    Project type
                  </label>
                  <input
                    type="text"
                    name="projectType"
                    value={qualifications.projectType}
                    onChange={handleQualificationChange}
                    placeholder="e.g., New brand, website redesign, campaign..."
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#D0D731] transition-colors text-[#052F23]"
                  />
                </div>

                {/* Preferred timeline */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-poppins font-bold text-[#052F23]">
                    Preferred timeline
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={qualifications.timeline}
                    onChange={handleQualificationChange}
                    placeholder="e.g., 3 months, 6 months, ASAP..."
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#D0D731] transition-colors text-[#052F23]"
                  />
                </div>

                {/* Estimated investment range */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-poppins font-bold text-[#052F23]">
                    Estimated investment range
                  </label>
                  <input
                    type="text"
                    name="investment"
                    value={qualifications.investment}
                    onChange={handleQualificationChange}
                    placeholder="Budget range..."
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#D0D731] transition-colors text-[#052F23]"
                  />
                </div>

                {/* Existing website or social link */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-poppins font-bold text-[#052F23]">
                    Existing website or social link
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={qualifications.website}
                    onChange={handleQualificationChange}
                    placeholder="https://..."
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#D0D731] transition-colors text-[#052F23]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-2">
              <div className='flex justify-center'>
              <button
                type="submit"
                className="w-1/2 px-8 py-4 bg-[#D0D731] text-[#052F23] font-poppins font-bold text-base transition-all duration-300 hover:bg-[#E0F77D] rounded"
              >
                {submitted ? 'Form submitted! Thank you.' : 'SEND MESSAGE'}
              </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <FAQ /> */}

      <Footer />
    </main>
  );
}
