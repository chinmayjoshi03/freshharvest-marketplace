import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20 px-4 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 font-display text-center">About FreshHarvest Market</h1>
          
          <div className="space-y-8 text-lg">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary font-display">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                FreshHarvest Market was born from a simple belief: everyone deserves access to fresh, 
                locally-sourced, organic produce. Founded in 2020, we've been connecting local farmers 
                with families who care about what they eat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary font-display">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to supporting sustainable farming practices while making it easy for 
                you to enjoy the freshest fruits, vegetables, dairy, and more. Every product we offer 
                is carefully selected from trusted local farms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary font-display">Why Choose Us?</h2>
              <ul className="space-y-4">
                {[
                  { icon: 'eco', text: '100% Organic & Locally Sourced' },
                  { icon: 'verified', text: 'Farm-to-Door Freshness Guaranteed' },
                  { icon: 'groups', text: 'Supporting Local Farmers & Communities' },
                  { icon: 'favorite', text: 'Passionate About Quality & Sustainability' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {item.icon}
                    </span>
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary font-display">Our Promise</h2>
              <p className="text-muted-foreground leading-relaxed">
                We promise to deliver only the freshest, highest-quality produce to your doorstep. 
                If you're not satisfied with any product, we'll make it right. Your health and 
                happiness are our top priorities.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
