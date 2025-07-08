"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGoogle,
  FaEnvelope,
  FaComments,
  FaFacebookF,
  FaWpforms,
  FaEdit,
  FaBook,
  FaMicrosoft,
  FaAmazon,
  FaApple,
  FaTwitter,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {
  MessageCircle,
  Monitor,
  Search,
  Users,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Star,
  Menu,
  X,
  Briefcase,
  LifeBuoy,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoginModal } from "@/components/login-modal";

export default function HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCards, setOpenCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setOpenCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  const services = [
    {
      icon: Monitor,
      title: "Diseño Web",
      description:
        "Creamos sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
      features: [
        "Diseño responsive",
        "Optimización de velocidad",
        "Panel de administración",
      ],
    },
    {
      icon: Users,
      title: "Marketing Digital",
      description:
        "Estrategias personalizadas para aumentar tu alcance y atraer clientes a través de canales digitales.",
      features: [
        "Gestión de redes sociales",
        "Campañas publicitarias",
        "Email marketing",
      ],
    },
    {
      icon: Search,
      title: "Posicionamiento SEO",
      description:
        "Mejoramos la visibilidad de tu sitio web en Google para atraer más clientes potenciales.",
      features: [
        "Análisis de palabras clave",
        "Optimización on-page",
        "Reportes mensuales",
      ],
    },
    {
      icon: Smartphone,
      title: "Desarrollo de Apps",
      description:
        "Aplicaciones móviles a medida para mejorar la experiencia y fidelización de tus usuarios.",
      features: [
        "Apps iOS y Android",
        "Integración con sistemas",
        "Actualizaciones continuas",
      ],
    },
    {
      icon: Briefcase,
      title: "Consultoría TI",
      description:
        "Asesoramiento especializado para optimizar tus procesos tecnológicos y mejorar la eficiencia.",
      features: [
        "Diagnóstico tecnológico",
        "Planificación estratégica",
        "Gestión de proyectos",
      ],
    },
    {
      icon: LifeBuoy,
      title: "Soporte Técnico",
      description:
        "Servicio confiable para mantener tus sistemas funcionando sin interrupciones.",
      features: [
        "Atención Tickets",
        "Mantenimiento preventivo",
        "Resolución de incidencias",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white shadow-md font-[Montserrat]">
  <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-24">
      {/* Logo */}
      <div className="text-3xl sm:text-4xl font-extrabold text-gray-800">
        <span className="text-cyan-500">MP</span>Riquelme
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-4 text-sm sm:text-base font-medium text-gray-700">
        <button onClick={() => scrollToSection("home")} className="hover:text-cyan-600 transition">
          Inicio
        </button>
        <button onClick={() => scrollToSection("services")} className="hover:text-cyan-600 transition">
          Servicios
        </button>
        <button onClick={() => scrollToSection("about")} className="hover:text-cyan-600 transition">
          Nosotros
        </button>
        <button onClick={() => scrollToSection("projects")} className="hover:text-cyan-600 transition">
          Proyectos
        </button>
        <button onClick={() => scrollToSection("clients")} className="hover:text-cyan-600 transition">
          Clientes
        </button>
        <button onClick={() => scrollToSection("contact")} className="hover:text-cyan-600 transition">
          Contacto
        </button>
        <Button
          onClick={() => setIsLoginOpen(true)}
          className="ml-2 px-6 py-1 sm:py-2 text-lg bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow"
        >
          Acceso
        </Button>
      </nav>

      {/* Mobile menu toggle */}
      <div className="lg:hidden">
  <Button
    variant="ghost"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="w-16 h-16 p-0 flex items-center justify-center"
  >
   {isMobileMenuOpen ? (
  <X style={{ width: "30px", height: "30px" }} className="text-gray-700" />
) : (
  <Menu style={{ width: "30px", height: "30px" }} className="text-gray-700" />
)}
  </Button>
</div>
    </div>
  </div>

  {/* Mobile Navigation */}
  {isMobileMenuOpen && (
    <div className="lg:hidden w-full bg-white border-t shadow-md">
      <nav className="px-6 py-5 space-y-5 text-lg text-gray-800">
        <button onClick={() => scrollToSection("home")} className="block w-full text-left hover:text-cyan-600">
          Inicio
        </button>
        <button onClick={() => scrollToSection("services")} className="block w-full text-left hover:text-cyan-600">
          Servicios
        </button>
        <button onClick={() => scrollToSection("about")} className="block w-full text-left hover:text-cyan-600">
          Nosotros
        </button>
        <button onClick={() => scrollToSection("projects")} className="block w-full text-left hover:text-cyan-600">
          Proyectos
        </button>
        <button onClick={() => scrollToSection("clients")} className="block w-full text-left hover:text-cyan-600">
          Clientes
        </button>
        <button onClick={() => scrollToSection("contact")} className="block w-full text-left hover:text-cyan-600">
          Contacto
        </button>
        <Button
          onClick={() => {
            setIsLoginOpen(true);
            setIsMobileMenuOpen(false);
          }}
          className="w-40 mt-4 py-3 text-2xl bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow"
        >
          Acceso
        </Button>
      </nav>
    </div>
  )}
</header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.webp"
            alt="Workspace with laptops and devices"
            fill
            className="object-cover "
            priority
          />
          {/* Capa oscura encima de la imagen para contraste de texto */}
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </div>

        {/* Contenido centrado */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1
            className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-extrabold mb-8 leading-tight"
            style={{ fontFamily: '"Aventa Black", sans-serif' }}
          >
            Tu Aliado Tecnológico en el
            <br />
            <span className="text-cyan-400 font-extrabold">Mundo Digital</span>
          </h1>
          <p className="font-sans text-lg sm:text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Desarrollamos páginas web profesionales, personalizadas, totalmente
            adaptables y fáciles de gestionar por nuestros clientes.
            <br />
            <br />
            <span className="font-sans text-yellow-400 text-xl sm:text-xl">
              Contáctanos y transforma tu idea en una solución digital efectiva.
            </span>
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="bg-transparent border-4 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 text-lg sm:text-xl font-semibold w-full sm:w-auto"
            >
              COTIZA CON NOSOTROS
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-500 text-white px-10 py-5 text-lg sm:text-xl font-semibold w-full sm:w-auto"
            >
              NUESTROS SERVICIOS
            </Button>
          </div>
        </div>
      </section>
      {/* BARRA */}
      <section id="icon-bar" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center space-x-16">
            <FaGoogle className="w-16 h-16 text-gray-700 hover:text-cyan-600 transition-colors cursor-pointer" />
            <FaFacebookF className="w-16 h-16 text-gray-700 hover:text-cyan-600 transition-colors cursor-pointer" />
            <FaMicrosoft className="w-16 h-16 text-gray-700 hover:text-cyan-600 transition-colors cursor-pointer" />
            <FaAmazon className="w-16 h-16 text-gray-700 hover:text-cyan-600 transition-colors cursor-pointer" />
            <FaApple className="w-16 h-16 text-gray-700 hover:text-cyan-600 transition-colors cursor-pointer" />
            <FaTwitter className="w-16 h-16 text-gray-700 hover:text-cyan-600 transition-colors cursor-pointer" />
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-4">
          <div className="text-center mb-16 sm:mb-14">
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
              style={{ fontFamily: '"Aventa Black", sans-serif' }}
            >
              Nuestros servicios en Chile son
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-10">
            {services.map(({ icon: Icon, title, description, features }, i) => (
              <Card
                key={i}
                className="flex flex-row bg-transparent border-2 border-black/20 p-1 sm:p-1 hover:shadow-xl transition-shadow max-w-3xl mx-auto"
                style={{ minHeight: "220px" }}
              >
                <CardContent className="flex flex-row justify-between items-center w-full">
                  {/* Icono a la izquierda */}
                  <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-cyan-100 rounded-lg text-cyan-600 mr-8">
                    <Icon className="w-12 h-12 stroke-2" />
                  </div>

                  {/* Contenido texto a la derecha */}
                  <div className="flex flex-col flex-grow text-left">
                    <h3 className="font-montserrat text-2xl sm:text-2xl text-gray-800 mb-2 p-2">
                      {title}
                    </h3>
                    <p className="font-light text-gray-700 text-sm sm:text-base mb-3">
                      {description}
                    </p>

                    <div className="overflow-auto max-h-[150px] sm:max-h-none sm:overflow-visible pr-1">
                      <ul className="space-y-2 text-sm sm:text-base">
                        {features.map((feat, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section
        id="about"
        className="min-h-screen py-24 bg-white flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[600px]">
            {/* Texto lado izquierdo */}
            <div>
              <h2 className="font-aventa text-4xl sm:text-5xl font-extrabold text-black mb-6">
                Sobre Nosotros
              </h2>
              <p className="font-light text-lg sm:text-xl text-gray-700 mb-8 text-justify leading-relaxed">
                En MP Riquelme somos un equipo dedicado y comprometido con la
                excelencia en soluciones digitales. Con sólida experiencia en el
                sector, ayudamos a emprendedores y empresas a potenciar su
                presencia digital con proyectos modernos, adaptados a sus
                necesidades y enfocados en resultados concretos. Nuestra misión
                es impulsar tu crecimiento a través de innovación, diseño y
                tecnología de vanguardia.
              </p>
              <p className="font-light text-lg sm:text-xl text-gray-700 mb-10 text-justify leading-relaxed">
                Nos especializamos en crear plataformas que no solo se ven
                increíbles, sino que también generan resultados reales para
                nuestros clientes. Cada proyecto es único y lo desarrollamos
                pensando en las necesidades específicas de tu negocio.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-3">
                    120+
                  </div>
                  <div className="text-gray-600 text-base sm:text-lg">
                    Horas de Capacitación
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-3">
                    5+
                  </div>
                  <div className="text-gray-600 text-base sm:text-lg">
                    Asesorías Personalizadas
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen lado derecho */}
            <div className="relative w-full h-[600px] rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/nosotros.jpg"
                alt="Equipo MP Riquelme trabajando"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="projects" className="py-24 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="font-aventa text-4xl sm:text-5xl font-extrabold text-black mb-6">
              Nuestros sitios web incluyen
            </h2>
          </div>

          {/* Lista de funcionalidades centrada con 3 columnas */}
          <div className="font-sans grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-20 text-xl text-black text-center">
            <div className="flex flex-col items-center gap-2">
              <FaEnvelope className="text-red-500 w-7 h-7 mx-auto" />
              Correos Corporativos
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaComments className="text-green-600 w-7 h-7 mx-auto" />
              Chat en vivo
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaFacebookF className="text-indigo-600 w-7 h-7 mx-auto" />
              Enlace a redes sociales
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaWpforms className="text-purple-600 w-7 h-7 mx-auto" />
              Formulario de Contacto
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaEdit className="text-orange-500 w-7 h-7 mx-auto" />
              Sitio Autoadministrable
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaBook className="text-yellow-600 w-7 h-7 mx-auto" />
              Documentación de uso
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="flex flex-col w-full max-w-[480px] overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition duration-300 transform hover:scale-[1.02] bg-white"
              >
                <div className="w-full aspect-[3/2]">
                  <Image
                    src={`/portafolio${item}.jpg`}
                    alt={`Proyecto ${item}`}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover"
                    loading={item <= 2 ? "eager" : "lazy"}
                    quality={100}
                    placeholder="empty"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <CardContent className="p-6 flex flex-col justify-between flex-grow text-center">
                  <div>
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <h3 className="font-montserrat text-2xl sm:text-2xl font-bold text-gray-900">
                        Proyecto {item}
                      </h3>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <p className="font-light text-gray-600 text-base sm:text-lg">
                      Sitio web corporativo con diseño moderno y funcionalidades
                      avanzadas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="clients" className="py-16 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-aventa text-4xl sm:text-5xl font-extrabold text-black mb-6">
              Nuestros clientes dicen
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
            {[
              {
                name: "María González",
                company: "Inmobiliaria Santiago",
                text: "Excelente trabajo, muy profesionales y el sitio web superó nuestras expectativas.",
              },
              {
                name: "Carlos Rodríguez",
                company: "Constructor del Sur",
                text: "El equipo de MP Riquelme nos ayudó a modernizar nuestra presencia digital completamente.",
              },
              {
                name: "Ana Martínez",
                company: "Vendedora de autos",
                text: "Gracias a mi nuevo sitio web he aumentado mis ventas en un 60%. Muy recomendados.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-4 sm:p-6">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic text-sm sm:text-base">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="relative bg-gray-50"
        style={{
          backgroundImage: `url('contacto.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20 min-h-[600px]">
            <div className="flex-1 max-w-xl text-white flex flex-col justify-center">
              <h2 className="text-5xl font-extrabold mb-10 text-center lg:text-left leading-tight">
                Soluciones digitales para tu negocio
              </h2>
              <ul className="space-y-6 text-2xl">
                {[
                  "Diseños 100% a la medida",
                  "Equipo Profesional",
                  "Posicionamos tu web en Google",
                  "Convierte tus visitas en más clientes",
                ].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-7 h-7 text-cyan-400 mr-4 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 max-w-2xl bg-white rounded-xl shadow-xl p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                Haz crecer tu negocio, Cotiza AQUÍ!
              </h3>
              <form className="space-y-8 text-xl text-gray-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    placeholder="Nombre"
                    className="text-xl py-6 px-6 rounded-lg border border-gray-300"
                  />
                  <Input
                    placeholder="Apellido"
                    className="text-xl py-6 px-6 rounded-lg border border-gray-300"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="text-xl py-6 px-6 rounded-lg border border-gray-300"
                />
                <Input
                  placeholder="Teléfono"
                  className="text-xl py-6 px-6 rounded-lg border border-gray-300"
                />
                <Textarea
                  placeholder="Mensaje"
                  rows={5}
                  className="text-xl py-6 px-6 rounded-lg border border-gray-300 resize-none"
                />
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-2xl px-10 py-4 rounded-lg mx-auto mt-4 flex items-center justify-center">
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-14">
            {/* Marca */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold">
                  <span className="text-cyan-400">MP</span> Riquelme
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Soluciones Digitales Profesionales en Chile. Diseñamos y
                desarrollamos sitios web que generan impacto y resultados.
              </p>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Servicios</h3>
              <ul className="space-y-3 text-gray-400 text-lg">
                {[
                  "Diseño Web",
                  "Marketing Digital",
                  "SEO",
                  "Desarrollo de Apps",
                  "Consultoría TI",
                  "Soporte Técnico",
                ].map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-white transition-colors"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Empresa</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors"
                  >
                    Nosotros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="hover:text-white transition-colors"
                  >
                    Portafolio
                  </button>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contacto</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>mpriquelme.dev@gmail.com</li>
                <li>+56 9 8571 4993</li>
                <li>Chillán Viejo, Chile</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-base">
            <p>&copy; 2025 MP Riquelme. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-4 sm:right-4 z-[9999]">
        <a
          href="https://wa.me/56985714993"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cotiza por WhatsApp"
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 sm:w-14 sm:h-14 p-0 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          >
            <FaWhatsapp
              style={{ width: "80%", height: "80%", padding: 0, margin: 0 }}
            />
          </Button>
        </a>
      </div>
      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}
