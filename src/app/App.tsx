import { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import {
  Snowflake,
  AirVent,
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  Wrench,
  Droplet,
  Settings,
  ShieldCheck,
  Clock,
  Users,
  DollarSign,
} from 'lucide-react';

import { Header } from './components/Header';
import { SideDrawer } from './components/SideDrawer';
import { ProductCard } from './components/ProductCard';
import { ServiceCard } from './components/ServiceCard';
import { ReviewCard } from './components/ReviewCard';
import { Footer } from './components/Footer';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [brandFilter, setBrandFilter] = useState('All');
  const [capacityFilter, setCapacityFilter] = useState('All');

  const brands = ['All', 'LG', 'Samsung', 'Voltas', 'Daikin', 'Blue Star'];
  const capacities = ['All', '1 Ton', '1.5 Ton', '2 Ton'];

  const brandNewProducts = [
    {
      id: 1,
      brand: 'LG',
      capacity: '1.5 Ton',
      rating: 5,
      price: 35990,
      image: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      brand: 'Samsung',
      capacity: '1 Ton',
      rating: 5,
      price: 29990,
      image: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      brand: 'Voltas',
      capacity: '1.5 Ton',
      rating: 4,
      price: 32990,
      image: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      brand: 'Daikin',
      capacity: '2 Ton',
      rating: 5,
      price: 45990,
      image: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      brand: 'Blue Star',
      capacity: '1.5 Ton',
      rating: 4,
      price: 38990,
      image: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      brand: 'LG',
      capacity: '2 Ton',
      rating: 5,
      price: 42990,
      image: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400&h=300&fit=crop',
    },
  ];

  const refurbishedProducts = [
    {
      id: 7,
      brand: 'LG',
      capacity: '1.5 Ton',
      rating: 4,
      price: 18990,
      image: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400&h=300&fit=crop',
    },
    {
      id: 8,
      brand: 'Samsung',
      capacity: '1 Ton',
      rating: 4,
      price: 15990,
      image: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400&h=300&fit=crop',
    },
    {
      id: 9,
      brand: 'Voltas',
      capacity: '1.5 Ton',
      rating: 4,
      price: 17990,
      image: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400&h=300&fit=crop',
    },
    {
      id: 10,
      brand: 'Daikin',
      capacity: '2 Ton',
      rating: 5,
      price: 24990,
      image: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400&h=300&fit=crop',
    },
  ];

  const services = [
    { icon: Settings, name: 'General AC Service', price: '₹499' },
    { icon: Wrench, name: 'Deep Cleaning', price: '₹799' },
    { icon: Droplet, name: 'Gas Refilling', price: '₹2,500' },
    { icon: AirVent, name: 'AC Installation', price: '₹1,200' },
    { icon: Settings, name: 'AC Uninstallation', price: '₹800' },
    { icon: Settings, name: 'PCB Repair', price: 'Starts at ₹1,500' },
    { icon: ShieldCheck, name: 'Annual Maintenance Contract (AMC)', price: '₹3,999/year' },
  ];

  const reviews = [
    {
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop',
      rating: 5,
      review: 'Excellent service! The technicians were professional and fixed my AC within an hour. Highly recommended for AC repairs and maintenance.',
    },
    {
      name: 'Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=200&h=200&fit=crop',
      rating: 5,
      review: 'Bought a refurbished AC from COOLTECH and it works perfectly! Great value for money and the installation was smooth.',
    },
    {
      name: 'Anita Desai',
      image: 'https://images.unsplash.com/photo-1701463387028-3947648f1337?w=200&h=200&fit=crop',
      rating: 5,
      review: 'Very satisfied with their AMC service. Regular maintenance keeps my AC running efficiently. Professional team and affordable pricing!',
    },
  ];

  const filterProducts = (products: typeof brandNewProducts) => {
    return products.filter((product) => {
      const matchesBrand = brandFilter === 'All' || product.brand === brandFilter;
      const matchesCapacity = capacityFilter === 'All' || product.capacity === capacityFilter;
      return matchesBrand && matchesCapacity;
    });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1758980960373-2be749113338?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 to-blue-900/80"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Snowflake className="w-5 h-5 text-cyan-300" />
            <span className="text-white text-sm">Stay Cool All Summer</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Stay Cool with <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              COOLTECH SERVICES
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-cyan-100 mb-8"
          >
            Brand New ACs | Refurbished ACs | Expert Maintenance & Services
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all hover:scale-105">
              Explore ACs
            </button>
            <button className="bg-white text-sky-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all hover:scale-105">
              Book a Service
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand New AC Section */}
      <section id="brand-new-ac" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Brand New Air Conditioners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from top brands with the latest cooling technology
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-end mb-8">
            <div className="flex flex-wrap gap-2 items-center bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
              <span className="text-gray-600 text-sm">Brand:</span>
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setBrandFilter(brand)}
                  className={`px-3 py-1 rounded-md transition-all text-sm ${
                    brandFilter === brand
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 items-center bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
              <span className="text-gray-600 text-sm">Capacity:</span>
              {capacities.map((capacity) => (
                <button
                  key={capacity}
                  onClick={() => setCapacityFilter(capacity)}
                  className={`px-3 py-1 rounded-md transition-all text-sm ${
                    capacityFilter === capacity
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {capacity}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filterProducts(brandNewProducts).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Refurbished AC Section */}
      <section id="refurbished-ac" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Certified Refurbished ACs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quality-checked and certified ACs at amazing prices with warranty
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-end mb-8">
            <div className="flex flex-wrap gap-2 items-center bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
              <span className="text-gray-600 text-sm">Brand:</span>
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setBrandFilter(brand)}
                  className={`px-3 py-1 rounded-md transition-all text-sm ${
                    brandFilter === brand
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 items-center bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
              <span className="text-gray-600 text-sm">Capacity:</span>
              {capacities.map((capacity) => (
                <button
                  key={capacity}
                  onClick={() => setCapacityFilter(capacity)}
                  className={`px-3 py-1 rounded-md transition-all text-sm ${
                    capacityFilter === capacity
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {capacity}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filterProducts(refurbishedProducts).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} isRefurbished />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Maintenance & Services Section */}
      <section id="maintenance-&-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Maintenance & Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional AC services by certified technicians
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Customer Reviews
            </h2>
            <p className="text-gray-600">What our satisfied customers say about us</p>
          </motion.div>

          <Slider {...sliderSettings}>
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Slider>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              About COOLTECH SERVICES
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-12">
              COOLTECH SERVICES provides reliable air conditioning sales and expert maintenance
              with certified technicians and affordable pricing. We're committed to keeping you
              cool and comfortable all year round.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Experienced Technicians', desc: 'Certified professionals' },
              { icon: Clock, title: 'Fast Service', desc: 'Quick response time' },
              { icon: DollarSign, title: 'Affordable Pricing', desc: 'Best value for money' },
              { icon: ShieldCheck, title: 'Customer Satisfaction', desc: '100% guaranteed' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact COOLTECH SERVICES</h2>
            <p className="text-cyan-100 text-lg mb-12">
              Get in touch with us for sales, service, or support
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Phone, label: 'Call Us', value: '+91 98765 43210' },
                { icon: Mail, label: 'Email Us', value: 'info@cooltech.com' },
                { icon: Instagram, label: 'Instagram', value: '@cooltechservices' },
                { icon: MessageCircle, label: 'WhatsApp', value: '+91 98765 43210' },
              ].map((contact) => (
                <motion.div
                  key={contact.label}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <contact.icon className="w-8 h-8 mx-auto mb-3" />
                  <p className="text-sm text-cyan-200 mb-1">{contact.label}</p>
                  <p className="font-medium">{contact.value}</p>
                </motion.div>
              ))}
            </div>

            <button className="bg-white text-sky-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all hover:scale-105">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl z-40 hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  );
}