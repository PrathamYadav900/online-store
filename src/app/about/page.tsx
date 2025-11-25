import Image from 'next/image';
import store from "@/assets/store_pic.jpg"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
            About Our Store
          </h2>
          <p className="text-gray-800 text-sm  md:text-base max-w-2xl mx-auto">
            Quality fashion for everyday living
          </p>
        </div>
      </section>

      {/* About Content - Two Column */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Story */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Our Story</h2>
            
            <p className="text-gray-700 leading-relaxed">
              We started as a small family-run boutique with a simple mission: to provide quality fashion 
              that everyone can afford. What began in our local community has grown into a trusted destination 
              for everyday essentials and seasonal favorites.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Every piece in our collection is carefully selected with you in mind. We believe great style 
              shouldn't come with a premium price tag, and that quality craftsmanship should be accessible 
              to everyone.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Today, we're proud to serve our community with the same values we started with: honesty, 
              quality, and affordability. Thank you for being part of our journey.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              From our family to yours, welcome to our store.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] md:h-[500px] bg-gray-100">
            <Image
              src={store}
              alt="Our store"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-12 md:mb-16">
            Why People Love Us
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Quality Products</h3>
              <p className="text-sm text-gray-600">
                Carefully curated pieces that last season after season
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Affordable Prices</h3>
              <p className="text-sm text-gray-600">
                Premium quality without the premium price tag
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">New Arrivals</h3>
              <p className="text-sm text-gray-600">
                Fresh styles updated weekly to keep your wardrobe current
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Trusted Locally</h3>
              <p className="text-sm text-gray-600">
                Family-run business serving our community with care
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
