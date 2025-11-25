const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    review: "Absolutely love the quality! The fits are perfect and the fabric feels premium. Will definitely shop again.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    review: "Best online shopping experience. Fast delivery and the clothes look exactly like the pictures. Highly recommended!",
  },
  {
    id: 3,
    name: "Ananya Desai",
    review: "FES has become my go-to store for trendy pieces. Their collection is always on point and reasonably priced.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-0.5 bg-foreground mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-8 border border-border hover:shadow-elegant transition-all duration-300"
            >
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>
              <p className="font-semibold text-foreground">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
