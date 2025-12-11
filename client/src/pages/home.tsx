import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3, Users, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import logo from "@assets/growcapi_1765462120082.png";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Grow Capital" className="h-12 w-auto object-contain" />
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">About</a>
        <a href="#services" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">Services</a>
        <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">Portfolio</a>
        <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">Testimonials</a>
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6" asChild>
            <a href="#contact">Consultation</a>
        </Button>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-white overflow-hidden relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-orange-50/50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-primary leading-[1.1] mb-6 tracking-tight">
            Scale Your Sales.<br />
            <span className="text-gray-800">Strengthen Your Brand.</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-4 font-light leading-relaxed">
            Personal sales consulting that boosts conversions, builds trust, and turns prospects into loyal customers.
          </p>
          <p className="text-base text-orange-600 font-medium mb-10">
            Helping businesses close more deals through strategy, communication, and customer psychology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-purple-900/5 transition-all hover:scale-105" asChild>
            <a href="#contact">
              Start a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-gray-200 text-gray-600 hover:text-primary hover:border-primary/20 rounded-full px-8 h-12 text-base bg-white" asChild>
            <a href="#portfolio">View Portfolio</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-white relative">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl bg-gray-50 overflow-hidden relative border border-gray-100 shadow-xl shadow-gray-200/50">
             {/* Placeholder for professional headshot if user had one, using a subtle pattern/illustration for now or stock */}
             <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-300">
                <Users className="w-24 h-24 opacity-20" />
             </div>
             {/* Using a stock image approach as a placeholder since none provided */}
             <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Professional Sales Consultant"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
             />
          </div>
          {/* Decorative Arrow */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
             <TrendingUp className="w-8 h-8 text-accent" />
          </div>
        </div>

        <div>
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">About Me</span>
          <h2 className="text-4xl font-heading font-bold text-primary mb-6">About Your Sales Consultant</h2>
          
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
            <p>
              I am a performance-driven sales consultant who helps brands improve their sales systems, customer engagement, and lead-to-client conversion rates. With experience across multiple industries, I bring structured processes, emotional intelligence, and refined communication strategies to elevate sales outcomes.
            </p>
            
            <div className="space-y-4 pt-4">
              <h3 className="font-heading font-semibold text-primary text-xl">My approach:</h3>
              <ul className="space-y-3">
                {[
                  "Understand your customer",
                  "Identify your bottlenecks",
                  "Build a scalable sales strategy",
                  "Train your team to execute with confidence"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="pt-4 font-medium text-gray-800 border-l-4 border-accent pl-4">
              If you're looking to strengthen your sales pipeline and close deals consistently, you're in the right place.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Sales Funnel Optimization",
      description: "Improve your lead flow, conversion steps, and customer journey to maximize revenue from every prospect.",
      icon: <BarChart3 className="w-6 h-6 text-accent" />
    },
    {
      title: "Sales Strategy & Planning",
      description: "Custom strategies designed for your brand’s audience, business model, and long-term goals.",
      icon: <Target className="w-6 h-6 text-accent" />
    },
    {
      title: "Personal Sales Coaching",
      description: "1-on-1 coaching for founders and teams to improve confidence, persuasion, and consistency.",
      icon: <Users className="w-6 h-6 text-accent" />
    },
    {
      title: "Customer Communication Design",
      description: "Scripts, templates, and communication flows that increase replies, trust, and conversions.",
      icon: <MessageSquare className="w-6 h-6 text-accent" />
    },
    {
      title: "Brand Positioning & Messaging",
      description: "Messaging frameworks that differentiate your brand and influence buying decisions.",
      icon: <TrendingUp className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Services</span>
          <h2 className="text-4xl font-heading font-bold text-primary">What I Can Do for Your Business</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative group overflow-hidden rounded-xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45">
                   <ArrowRight className="w-5 h-5 text-accent" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const cases = [
    {
      metric: "42%",
      label: "Increase in Conversions",
      desc: "Optimized communication and follow-up systems."
    },
    {
      metric: "60%",
      label: "Reduction in Response Time",
      desc: "Through pipeline restructuring and automation."
    },
    {
      metric: "30-50%",
      label: "Improvement in Deal Closures",
      desc: "After implementing sales team communication training."
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Portfolio</span>
          <h2 className="text-4xl font-heading font-bold text-primary">Work That Delivered Results</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center group"
            >
              <div className="text-5xl font-bold text-accent mb-4 font-heading group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.metric}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.label}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Professional, clear, and extremely effective. Our sales doubled within two months.",
      author: "Founder",
      role: "Retail Brand"
    },
    {
      quote: "The strategies gave us clarity and direction. Best sales consulting experience.",
      author: "CEO",
      role: "SaaS Startup"
    },
    {
      quote: "He transformed our communication approach and it changed everything.",
      author: "Business Owner",
      role: ""
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Testimonials</span>
          <h2 className="text-4xl font-heading font-bold text-primary">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card key={index} className="bg-white border-none shadow-sm p-8 rounded-2xl">
              <div className="mb-6 text-accent">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.0547 14.3314 14.5469 14.9603 13.4766C15.6377 12.3594 16.5921 11.4375 17.8236 10.7109V11.2344C17.8236 13.2031 17.1068 14.8125 15.6732 16.0625C15.2161 16.4531 14.9603 17.0391 14.9603 17.8203V21H14.017ZM6.01719 21L6.01719 18C6.01719 16.0547 6.33138 14.5469 6.96031 13.4766C7.63766 12.3594 8.59212 11.4375 9.82361 10.7109V11.2344C9.82361 13.2031 9.10675 14.8125 7.67319 16.0625C7.21606 16.4531 6.96031 17.0391 6.96031 17.8203V21H6.01719ZM17.8236 3V7.32031C16.4173 7.97656 15.2699 8.94531 14.3813 10.2266C13.541 11.4297 13.0453 12.8672 12.894 14.5391H10.894C11.0664 12.2344 11.7508 10.1562 12.9472 8.30469C14.1921 6.39844 15.8177 4.63281 17.8236 3ZM9.82361 3V7.32031C8.41725 7.97656 7.26987 8.94531 6.38128 10.2266C5.541 11.4297 5.04531 12.8672 4.89404 14.5391H2.89404C3.06644 12.2344 3.75082 10.1562 4.94719 8.30469C6.19206 6.39844 7.81769 4.63281 9.82361 3Z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 text-lg italic leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-2">
                <div className="font-bold text-primary">{t.author}</div>
                {t.role && (
                   <>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-sm">{t.role}</span>
                   </>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  businessName: z.string().min(2, "Business name is required"),
  message: z.string().min(10, "Please provide more detail about how I can help"),
});

const Contact = () => {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: "",
            email: "",
            businessName: "",
            message: ""
        }
    });

    const onSubmit = (data: z.infer<typeof ContactSchema>) => {
        console.log("Form data", data);
        toast({
            title: "Request Sent",
            description: "Thanks for reaching out! I'll get back to you shortly.",
        });
        form.reset();
    };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 translate-x-1/3 -z-10" />

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Contact</span>
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Let’s Grow Your Sales</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            If you're ready to refine your sales strategy, strengthen customer trust, and grow your brand’s revenue — let’s talk.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john@company.com" {...field} className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    
                    <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Business Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Brand Ltd." {...field} className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">What do you need help with?</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Tell me about your current sales challenges..." className="min-h-[120px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14 text-lg font-medium shadow-lg shadow-purple-900/10">
                        Book Consultation <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </form>
            </Form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
    <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex items-center">
                <img src={logo} alt="Grow Capital" className="h-10 w-auto object-contain" />
            </div>
            <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} Grow Capital. All rights reserved.
            </div>
        </div>
    </footer>
)

// --- Page ---

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
