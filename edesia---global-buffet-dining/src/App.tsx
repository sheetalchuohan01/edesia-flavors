import { motion } from "motion/react";
import { 
  Utensils, 
  Coffee, 
  IceCream, 
  Flame, 
  Globe, 
  Clock, 
  MapPin, 
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu as MenuIcon,
  ShoppingBag
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-brand-bg/80 backdrop-blur-md border-b border-brand-primary/10">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
        <Utensils className="text-brand-accent w-6 h-6" />
      </div>
      <span className="font-display text-2xl font-bold tracking-tighter">EDESIA</span>
    </div>
    <div className="hidden md:flex gap-8 font-display text-sm tracking-widest">
      <a href="#home" className="hover:text-brand-accent transition-colors">HOME</a>
      <a href="#about" className="hover:text-brand-accent transition-colors">ABOUT</a>
      <a href="#menu" className="hover:text-brand-accent transition-colors">MENU</a>
      <a href="#gallery" className="hover:text-brand-accent transition-colors">GALLERY</a>
      <a href="#contact" className="hover:text-brand-accent transition-colors">CONTACT</a>
    </div>
    <div className="flex items-center gap-4">
      <button className="hidden sm:flex items-center gap-2 font-display text-xs tracking-widest border-b border-brand-primary pb-1">
        RESERVE TABLE <ShoppingBag size={14} />
      </button>
      <MenuIcon className="md:hidden cursor-pointer" />
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2000" 
        alt="Edesia Buffet" 
        className="w-full h-full object-cover opacity-90"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-bg"></div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center px-4"
    >
      <span className="cursive text-brand-accent text-3xl md:text-5xl block mb-2">Goddess of Food</span>
      <h1 className="text-white text-7xl md:text-[12rem] leading-none mb-8 drop-shadow-2xl">GLOBAL</h1>
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="inline-block relative cursor-pointer"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 bg-brand-accent rounded-full flex flex-col items-center justify-center text-brand-primary font-display font-bold text-center p-4 border-4 border-white shadow-2xl">
          <span className="text-xs tracking-widest mb-1">RESERVE</span>
          <span className="text-xl leading-tight">YOUR TABLE</span>
        </div>
        <div className="absolute -top-4 -right-4 bg-white text-brand-primary px-3 py-1 rounded-full text-[10px] font-bold shadow-md">
          TODAY OFFER
        </div>
      </motion.div>
    </motion.div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-12 text-white/80 font-display text-[10px] tracking-[0.3em]">
      <span>BUFFET</span>
      <span>LIVE GRILLS</span>
      <span>DESSERTS</span>
    </div>
  </section>
);

const Categories = () => {
  const cats = [
    { icon: Utensils, label: "INDIAN" },
    { icon: Globe, label: "CONTINENTAL" },
    { icon: Coffee, label: "ASIAN" },
    { icon: Flame, label: "GRILLS" },
    { icon: IceCream, label: "DESSERTS" },
    { icon: Coffee, label: "BEVERAGES" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 md:grid-cols-6 gap-8">
        {cats.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
              <cat.icon className="text-brand-primary group-hover:text-white transition-colors" size={24} />
            </div>
            <span className="font-display text-xs tracking-widest font-bold">{cat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-brand-bg overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="rounded-full overflow-hidden aspect-square border-[16px] border-white shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
            alt="Edesia Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute -bottom-8 -right-8 bg-brand-accent text-white p-8 rounded-2xl shadow-xl max-w-[200px]">
          <h4 className="font-display text-2xl mb-2">AUTHENTIC</h4>
          <p className="text-xs leading-relaxed opacity-90">Experience the true essence of global culinary traditions.</p>
        </div>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-brand-accent font-display tracking-widest text-sm font-bold">BEST BUFFET IN NEW DELHI</span>
          <h2 className="text-5xl md:text-7xl leading-tight">A CELEBRATION OF GLOBAL FLAVORS.</h2>
        </div>
        <p className="text-brand-muted leading-relaxed max-w-lg">
          Named after the Roman Goddess of Food, Edesia at Crowne Plaza Okhla offers a premium dining journey. From the vibrant spices of North India to the delicate artistry of Japanese cuisine, every dish is a masterpiece.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">ABOUT RESTAURANT</button>
          <div className="flex items-center gap-4 px-6 py-3">
            <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center">
              <Phone className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="text-[10px] tracking-widest font-bold opacity-60">CALL US</p>
              <p className="font-display font-bold">+91 11 4122 3344</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-brand-primary/10">
          {[
            { icon: Clock, title: "FAST SERVICE", sub: "Within 20 minutes" },
            { icon: Utensils, title: "LIVE GRILLS", sub: "Fresh from fire" },
            { icon: Star, title: "PREMIUM DINING", sub: "Luxury experience" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <item.icon className="text-brand-accent" size={20} />
              </div>
              <h5 className="font-display text-[10px] font-bold tracking-widest">{item.title}</h5>
              <p className="text-[10px] opacity-60">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FeaturedProducts = () => {
  const products = [
    { name: "DAL MAKHANI", price: "₹850", rating: 5.0, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600" },
    { name: "PANEER TIKKA", price: "₹750", rating: 4.9, img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=600" },
    { name: "MURGH BIRYANI", price: "₹950", rating: 5.0, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600" },
    { name: "FRESH JALEBI", price: "₹450", rating: 4.8, img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600" },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-brand-accent font-display tracking-widest text-sm font-bold">OUR SIGNATURE</span>
            <h2 className="text-5xl md:text-7xl">CHEF SPECIALS</h2>
          </div>
          <button className="btn-outline">VIEW ALL MENU</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-6 border-4 border-brand-beige group-hover:border-brand-accent transition-colors">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Star className="text-yellow-400 fill-yellow-400" size={12} />
                  <span className="text-[10px] font-bold">{p.rating}</span>
                </div>
              </div>
              <div className="text-center space-y-1">
                <h4 className="font-display text-lg tracking-tight">{p.name}</h4>
                <p className="text-brand-accent font-bold">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-32 h-32 rounded-full bg-brand-primary text-white font-display text-xs tracking-[0.2em] flex items-center justify-center text-center p-4 border-4 border-brand-beige shadow-xl"
          >
            EXPLORE FULL MENU
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const ExclusiveMenu = () => {
  const items = [
    { name: "SPRING FLING PIZZA", price: "₹1200", desc: "Fresh seasonal vegetables with premium mozzarella.", tag: "NEW" },
    { name: "PANEER TIKKA PIZZA", price: "₹1100", desc: "Classic tandoori paneer with spicy makhani sauce.", tag: "HOT" },
    { name: "KORMA SPECIAL PIZZA", price: "₹1300", desc: "Rich korma base with succulent chicken chunks.", tag: null },
    { name: "HOT PASSION PIZZA", price: "₹1150", desc: "Spicy peri-peri chicken with jalapenos.", tag: "HOT" },
  ];
  return (
    <section id="menu" className="py-24 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-2 mb-16">
          <span className="text-brand-accent font-display tracking-widest text-sm font-bold">DELICIOUS MEALS</span>
          <h2 className="text-5xl md:text-7xl">EXCLUSIVE MENU</h2>
        </div>
        
        <div className="space-y-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-6 group cursor-pointer">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                <img 
                  src={`https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=200&sig=${i}`} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow border-b border-brand-primary/10 pb-4 group-hover:border-brand-accent transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-display text-xl tracking-tight">{item.name}</h4>
                    {item.tag && (
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full text-white ${item.tag === 'HOT' ? 'bg-red-500' : 'bg-green-500'}`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span className="font-display font-bold text-brand-accent">{item.price}</span>
                </div>
                <p className="text-xs text-brand-muted italic">Lorem ipsum has been the industry's standard dummy text.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="space-y-2 mb-16">
        <span className="text-brand-accent font-display tracking-widest text-sm font-bold">FOOD LOVERS</span>
        <h2 className="text-5xl md:text-7xl">SATISFIED CUSTOMERS</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-brand-primary/10 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-brand-primary/10 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="mt-12 relative">
            <div className="w-64 h-80 bg-brand-beige rounded-2xl rotate-3 absolute top-0 left-0 -z-10"></div>
            <div className="w-64 h-80 overflow-hidden rounded-2xl shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" 
                alt="Customer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                <span className="cursive text-brand-accent text-sm">Excellent</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(s => <Star key={s} className="text-brand-primary fill-brand-primary" size={16} />)}
          </div>
          <p className="text-2xl leading-relaxed italic text-brand-muted">
            "Excellent, delicious food, staff is highly professional. Edesia is an excellent place to have a global buffet. They also have a wonderful dessert section."
          </p>
          <div>
            <h4 className="font-display text-xl">ALEXANDER MOORE</h4>
            <p className="text-xs tracking-widest opacity-60">FOOD CRITIC</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    { title: "ALWAYS SERVE FRESH FOOD", desc: "Perfectly portioned ingredients." },
    { title: "WE HAVE POPULAR MASTERCHEF", desc: "The patient staff reflects the style." },
    { title: "DELICIOUS BUFFET RECIPES", desc: "Global flavors with authentic taste." },
    { title: "MAINTAINING THE QUALITY OF FOOD", desc: "Standardized food recipes for menu." },
    { title: "BEST LIVE MUSIC RESTAURANTS", desc: "Beautiful natural & serene ambience." },
    { title: "WONDERFUL DINING EXPERIENCE", desc: "A memorable dining atmosphere." },
  ];
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-2 mb-20">
          <span className="text-brand-accent font-display tracking-widest text-sm font-bold">WHY CHOOSE US?</span>
          <h2 className="text-5xl md:text-7xl">WE ARE KNOWN</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((f, i) => (
            <div key={i} className="flex gap-8 items-start group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-brand-accent transition-colors">
                <Utensils className="text-brand-primary group-hover:text-white" size={24} />
              </div>
              <div className="space-y-2 border-b border-brand-primary/10 pb-6 flex-grow">
                <h4 className="font-display text-lg tracking-tight">{f.title}</h4>
                <p className="text-xs text-brand-muted">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PromoBanners = () => (
  <section className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
      <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000" 
          alt="Promo 1" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-center items-start text-white">
          <span className="text-[10px] tracking-widest font-bold mb-2">MOST POPULAR</span>
          <h3 className="text-4xl mb-6">SPECIAL<br/>DELICIOUS</h3>
          <button className="text-xs font-bold border-b-2 border-white pb-1">ORDER NOW</button>
        </div>
        <div className="absolute top-6 right-6 w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary font-bold text-[10px] text-center p-2 leading-tight shadow-lg">
          FREE DRINKS
        </div>
      </div>
      
      <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000" 
          alt="Promo 2" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-center items-start text-white">
          <span className="text-[10px] tracking-widest font-bold mb-2">ORDER ₹2000+</span>
          <h3 className="text-4xl mb-6">FASTEST<br/>DELIVERY</h3>
          <button className="text-xs font-bold border-b-2 border-white pb-1">ORDER NOW</button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-brand-primary text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl mb-4">UNFORGETTABLE DINING EXPERIENCE +91 11 4122 3344</h2>
      </div>
      
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center">
            <Utensils className="text-brand-primary w-6 h-6" />
          </div>
          <span className="font-display text-3xl font-bold tracking-tighter">EDESIA</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full text-center">
          <div className="space-y-4">
            <h5 className="font-display text-sm tracking-widest font-bold">FIND OUR RESTAURANT</h5>
            <p className="text-xs opacity-60 leading-relaxed">Crowne Plaza Hotel, Okhla Phase 1,<br/>New Delhi, India 110020</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-display text-sm tracking-widest font-bold">OPENING HOURS</h5>
            <p className="text-xs opacity-60 leading-relaxed">Monday - Sunday<br/>7:00 AM to 11:30 PM</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-display text-sm tracking-widest font-bold">CONNECT WITH US</h5>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest font-bold">
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-accent">HOME</a>
          <a href="#" className="hover:text-brand-accent">ABOUT</a>
          <a href="#" className="hover:text-brand-accent">MENU</a>
          <a href="#" className="hover:text-brand-accent">CHEFS</a>
          <a href="#" className="hover:text-brand-accent">CONTACT</a>
        </div>
        <p className="opacity-40">© 2026 EDESIA. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <FeaturedProducts />
      <ExclusiveMenu />
      <Testimonials />
      <Features />
      <PromoBanners />
      <Footer />
    </div>
  );
}
