export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-4xl font-light text-black mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            We're here to help you.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Left: Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">
                Store Address
              </h3>
              <p className="text-gray-700 leading-relaxed">
                123 Fashion Street<br />
                Downtown District<br />
                City Name, State 12345
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">
                WhatsApp
              </h3>
              <a 
                href="https://wa.me/1234567890" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">
                Phone
              </h3>
              <a 
                href="tel:+1234567890" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">
                Email
              </h3>
              <a 
                href="mailto:hello@store.com" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                hello@store.com
              </a>
            </div>
          </div>

          {/* Right: Map Placeholder */}
          <div className="bg-gray-100 rounded-lg h-[400px] md:h-[500px] flex items-center justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7360.7066209612585!2d75.83246649252538!3d22.715105717561705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdbe2503e9fb%3A0x7541750db5eafbec!2sRamchandra%20Nagar%20Extention%2C%20Ramachandra%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1763911718755!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <a
            href="tel:+1234567890"
            className="bg-gray-900 text-white py-4 px-6 text-center font-medium hover:bg-gray-800 transition-colors"
          >
            Call Now
          </a>
          
          <a
            href="https://wa.me/1234567890"
            className="bg-gray-900 text-white py-4 px-6 text-center font-medium hover:bg-gray-800 transition-colors"
          >
            Message on WhatsApp
          </a>
          
          <a
            href="https://maps.google.com/?q=123+Fashion+Street"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white py-4 px-6 text-center font-medium hover:bg-gray-800 transition-colors"
          >
            Get Directions
          </a>
        </div>
      </section>
    </main>
  );
}
