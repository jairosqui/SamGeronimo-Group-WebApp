// Single source of truth for all site copy. Components read T.key — never
// hardcode strings in JSX. Add a new key to BOTH es and en.

export const translations = {
  es: {
    meta: {
      home: {
        title: "SamGeronimo Group LLC | Consultoría en Estrategia y Operaciones",
        description:
          "SamGeronimo Group LLC ayuda a organizaciones a mejorar su desempeño mediante estrategia, optimización de procesos, gestión de KPI, experiencia del cliente y excelencia operacional.",
      },
      about: {
        title: "Sobre Nosotros | SamGeronimo Group LLC",
        description:
          "Conozca el enfoque de SamGeronimo Group LLC: pensamiento estratégico, excelencia operacional y crecimiento sostenible para organizaciones en expansión.",
      },
      services: {
        title: "Servicios | SamGeronimo Group LLC",
        description:
          "Estrategia empresarial, optimización de procesos, gestión de KPI, experiencia del cliente, estrategia de crecimiento y consultoría operacional.",
      },
      insights: {
        title: "Insights | SamGeronimo Group LLC",
        description:
          "Cómo SamGeronimo Group LLC convierte datos en mejores decisiones de negocio y experiencias de cliente que generan lealtad y crecimiento.",
      },
      faq: {
        title: "Preguntas Frecuentes | SamGeronimo Group LLC",
        description: "Respuestas a las preguntas más comunes sobre los servicios de consultoría de SamGeronimo Group LLC.",
      },
      contact: {
        title: "Contacto | SamGeronimo Group LLC",
        description: "Agende una consulta con SamGeronimo Group LLC y hable con nuestro equipo sobre su negocio.",
      },
    },
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      insights: "Insights",
      faq: "Preguntas",
      contact: "Contacto",
      cta: "Agenda una Consulta",
    },
    footer: {
      tagline:
        "Consultoría en estrategia y operaciones de negocio para organizaciones que buscan crecer de forma sostenible y medible.",
      descriptor: "BUSINESS CONSULTING",
      explore: "Explora",
      servicesTitle: "Servicios",
      contactTitle: "Contacto",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
      rights: "Todos los derechos reservados.",
    },
    bands: {
      about: { kicker: "SOBRE NOSOTROS", title: "Pensamiento Estratégico. Ejecución Real." },
      services: { kicker: "SERVICIOS", title: "Soluciones de Consultoría para Cada Etapa del Negocio" },
      insights: { kicker: "INSIGHTS", title: "Datos, Desempeño y Experiencia del Cliente" },
      faq: { kicker: "PREGUNTAS FRECUENTES", title: "Lo Que Nuestros Clientes Preguntan" },
      contact: { kicker: "CONTACTO", title: "Hablemos de Su Negocio" },
    },
    hero: {
      kicker: "BUSINESS STRATEGY & OPERATIONS",
      title: "Transformando la Estrategia en Resultados Medibles.",
      subtitle:
        "Ayudamos a las empresas a mejorar su estrategia, procesos, desempeño y experiencia del cliente para lograr un crecimiento sostenible y medible.",
      ctaPrimary: "Agenda una Consulta",
      ctaSecondary: "Explora Nuestros Servicios",
    },
    marquee: [
      "PROFESSIONAL SERVICES",
      "SMALL & MID-SIZED BUSINESSES",
      "SERVICE-BASED COMPANIES",
      "GROWING ORGANIZATIONS",
      "REVENUE GROWTH",
      "CUSTOMER RETENTION",
      "OPERATIONAL EFFICIENCY",
      "CUSTOMER SATISFACTION",
      "PROCESS PERFORMANCE",
    ],
    about: {
      kicker: "SOBRE NOSOTROS",
      title: "Pensamiento Estratégico. Excelencia Operacional. Crecimiento Sostenible.",
      text: "SamGeronimo Group LLC es una firma de consultoría empresarial enfocada en ayudar a las organizaciones a mejorar su desempeño a través de la estrategia, la optimización de procesos, el desarrollo de KPI, la experiencia del cliente y la excelencia operacional.",
    },
    services: {
      kicker: "SERVICIOS",
      title: "Cómo Ayudamos a Crecer a las Organizaciones",
      items: [
        {
          icon: "strategy",
          name: "Business Strategy",
          desc: "Planificación estratégica y dirección empresarial alineada con los objetivos de largo plazo de la organización.",
        },
        {
          icon: "process",
          name: "Process Optimization",
          desc: "Evaluación y rediseño de procesos para eliminar fricciones y aumentar la eficiencia operativa.",
        },
        {
          icon: "kpi",
          name: "KPI & Performance Management",
          desc: "Indicadores clave, seguimiento continuo y decisiones basadas en datos reales del negocio.",
        },
        {
          icon: "cx",
          name: "Customer Experience",
          desc: "Customer journey, satisfacción y retención diseñados para fortalecer la relación con el cliente.",
        },
        {
          icon: "growth",
          name: "Growth Strategy",
          desc: "Identificación de oportunidades y diseño de una expansión sostenible en el tiempo.",
        },
        {
          icon: "operations",
          name: "Operations Consulting",
          desc: "Eficiencia, ejecución y mejora operacional para fortalecer la base del negocio.",
        },
      ],
    },
    approach: {
      kicker: "NUESTRO ENFOQUE",
      title: "Un Método Claro, Paso a Paso",
      steps: [
        { n: "01", name: "Discover", desc: "Entendemos el negocio, sus retos actuales y sus objetivos de crecimiento." },
        { n: "02", name: "Analyze", desc: "Evaluamos procesos, desempeño y oportunidades de mejora dentro de la organización." },
        { n: "03", name: "Strategize", desc: "Diseñamos una estrategia clara y un roadmap accionable para el negocio." },
        { n: "04", name: "Optimize", desc: "Medimos resultados, mejoramos continuamente y escalamos lo que funciona." },
      ],
    },
    kpi: {
      kicker: "KPI & PERFORMANCE",
      title: "Convirtiendo los Datos en Mejores Decisiones de Negocio.",
      text: "Ayudamos a las organizaciones a definir y dar seguimiento a los indicadores que realmente importan para su crecimiento.",
      items: [
        { icon: "growth", name: "Revenue Growth" },
        { icon: "cx", name: "Customer Retention" },
        { icon: "operations", name: "Operational Efficiency" },
        { icon: "kpi", name: "Customer Satisfaction" },
        { icon: "process", name: "Process Performance" },
      ],
    },
    cx: {
      kicker: "CUSTOMER EXPERIENCE",
      title: "Experiencias de Cliente que Generan Lealtad y Crecimiento.",
      items: [
        "Customer Journey",
        "Service Processes",
        "Customer Satisfaction",
        "Retention",
        "Operational Touchpoints",
        "Service Standards",
      ],
    },
    operations: {
      kicker: "OPERATIONS",
      title: "Mejores Procesos. Operaciones Más Sólidas.",
      text: "Analizamos los flujos de trabajo de su organización, identificamos ineficiencias y diseñamos soluciones prácticas para mejorar la ejecución, la productividad y el desempeño general del negocio.",
    },
    industries: {
      kicker: "INDUSTRIAS",
      title: "Soluciones Diseñadas para Negocios en Crecimiento",
      items: ["Professional Services", "Small & Mid-Sized Businesses", "Service-Based Companies", "Growing Organizations"],
    },
    why: {
      kicker: "POR QUÉ SAMGERONIMO GROUP",
      title: "Un Enfoque Pensado para Resultados Reales",
      items: [
        { icon: "target", name: "Strategic Perspective", desc: "Soluciones alineadas con los objetivos reales de cada organización." },
        { icon: "kpi", name: "Data-Driven Approach", desc: "Métricas claras para tomar mejores decisiones de negocio." },
        { icon: "operations", name: "Operational Focus", desc: "Estrategias diseñadas para ejecutarse, no solo para presentarse." },
        { icon: "growth", name: "Sustainable Growth", desc: "Mejora de largo plazo, no soluciones temporales." },
      ],
    },
    ctaFinal: {
      title: "CONSTRUYAMOS UN NEGOCIO MÁS SÓLIDO, JUNTOS.",
      text: "Agende una consulta y descubra cómo podemos ayudar a su organización a crecer de forma estratégica y medible.",
      button: "Agenda una Consulta",
    },
    contact: {
      kicker: "CONTACTO",
      title: "Hablemos de Su Negocio",
      text: "Complete el formulario y nuestro equipo se pondrá en contacto para agendar una consulta.",
      companyName: "SamGeronimo Group LLC",
      companyTagline: "Business Strategy & Operations Consulting",
      address: "810 W College Blvd, Apt 102, Addison, IL 60101",
      phone: "(708) 476-2658",
      form: {
        name: "Nombre",
        company: "Empresa",
        email: "Email",
        phone: "Teléfono",
        service: "Servicio de interés",
        servicePlaceholder: "Seleccione un servicio",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
        success: "Gracias. Hemos recibido su mensaje y nos pondremos en contacto pronto.",
        error: "No se pudo enviar el mensaje. Por favor intente nuevamente.",
        captchaRequired: "Por favor confirme que no es un robot.",
      },
    },
    faq: {
      kicker: "PREGUNTAS FRECUENTES",
      title: "Lo Que Nuestros Clientes Preguntan",
      items: [
        {
          q: "¿Qué tipo de organizaciones trabajan con SamGeronimo Group?",
          a: "Trabajamos principalmente con empresas de servicios profesionales, negocios pequeños y medianos, y organizaciones en crecimiento que buscan mejorar su estrategia y sus operaciones.",
        },
        {
          q: "¿Cómo es el proceso de trabajo con la firma?",
          a: "Seguimos un método de cuatro etapas: Discover, Analyze, Strategize y Optimize. Cada proyecto comienza entendiendo a fondo el negocio antes de diseñar cualquier estrategia.",
        },
        {
          q: "¿Ofrecen consultoría en procesos y no solo en estrategia?",
          a: "Sí. Nuestro trabajo combina estrategia de negocio con optimización de procesos y consultoría operacional, para que las decisiones se traduzcan en ejecución real.",
        },
        {
          q: "¿Cómo miden el éxito de un proyecto?",
          a: "Definimos junto al cliente los KPI relevantes para su negocio —como eficiencia operacional, retención de clientes o desempeño de procesos— y damos seguimiento continuo a esos indicadores.",
        },
        {
          q: "¿Cómo puedo agendar una consulta inicial?",
          a: "Puede completar el formulario de contacto o escribirnos directamente a través de los datos de esta página. Nuestro equipo se pondrá en contacto para coordinar la conversación inicial.",
        },
      ],
    },
    langSwitcher: { es: "ES", en: "EN" },
  },

  en: {
    meta: {
      home: {
        title: "SamGeronimo Group LLC | Business Strategy & Operations Consulting",
        description:
          "SamGeronimo Group LLC helps organizations improve performance through strategy, process optimization, KPI development, customer experience and operational excellence.",
      },
      about: {
        title: "About Us | SamGeronimo Group LLC",
        description:
          "Learn about SamGeronimo Group LLC's approach: strategic thinking, operational excellence and sustainable growth for growing organizations.",
      },
      services: {
        title: "Services | SamGeronimo Group LLC",
        description:
          "Business strategy, process optimization, KPI & performance management, customer experience, growth strategy and operations consulting.",
      },
      insights: {
        title: "Insights | SamGeronimo Group LLC",
        description:
          "How SamGeronimo Group LLC turns data into better business decisions and customer experiences that drive loyalty and growth.",
      },
      faq: {
        title: "FAQ | SamGeronimo Group LLC",
        description: "Answers to the most common questions about SamGeronimo Group LLC's consulting services.",
      },
      contact: {
        title: "Contact | SamGeronimo Group LLC",
        description: "Schedule a consultation with SamGeronimo Group LLC and talk to our team about your business.",
      },
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      insights: "Insights",
      faq: "FAQ",
      contact: "Contact",
      cta: "Schedule a Consultation",
    },
    footer: {
      tagline:
        "Business strategy and operations consulting for organizations pursuing sustainable, measurable growth.",
      descriptor: "BUSINESS CONSULTING",
      explore: "Explore",
      servicesTitle: "Services",
      contactTitle: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      rights: "All rights reserved.",
    },
    bands: {
      about: { kicker: "ABOUT US", title: "Strategic Thinking. Real Execution." },
      services: { kicker: "SERVICES", title: "Consulting Solutions for Every Stage of Business" },
      insights: { kicker: "INSIGHTS", title: "Data, Performance and Customer Experience" },
      faq: { kicker: "FAQ", title: "What Our Clients Ask" },
      contact: { kicker: "CONTACT", title: "Let's Talk About Your Business" },
    },
    hero: {
      kicker: "BUSINESS STRATEGY & OPERATIONS",
      title: "Transforming Strategy Into Measurable Results.",
      subtitle:
        "We help businesses improve strategy, processes, performance and customer experience to achieve sustainable and measurable growth.",
      ctaPrimary: "Schedule a Consultation",
      ctaSecondary: "Explore Our Services",
    },
    marquee: [
      "PROFESSIONAL SERVICES",
      "SMALL & MID-SIZED BUSINESSES",
      "SERVICE-BASED COMPANIES",
      "GROWING ORGANIZATIONS",
      "REVENUE GROWTH",
      "CUSTOMER RETENTION",
      "OPERATIONAL EFFICIENCY",
      "CUSTOMER SATISFACTION",
      "PROCESS PERFORMANCE",
    ],
    about: {
      kicker: "ABOUT US",
      title: "Strategic Thinking. Operational Excellence. Sustainable Growth.",
      text: "SamGeronimo Group LLC is a business consulting firm focused on helping organizations improve performance through strategy, process optimization, KPI development, customer experience and operational excellence.",
    },
    services: {
      kicker: "SERVICES",
      title: "How We Help Organizations Grow",
      items: [
        {
          icon: "strategy",
          name: "Business Strategy",
          desc: "Strategic planning and business direction aligned with the organization's long-term goals.",
        },
        {
          icon: "process",
          name: "Process Optimization",
          desc: "Evaluation and redesign of processes to remove friction and increase operational efficiency.",
        },
        {
          icon: "kpi",
          name: "KPI & Performance Management",
          desc: "Key indicators, ongoing tracking and decisions grounded in real business data.",
        },
        {
          icon: "cx",
          name: "Customer Experience",
          desc: "Customer journey, satisfaction and retention designed to strengthen the customer relationship.",
        },
        {
          icon: "growth",
          name: "Growth Strategy",
          desc: "Identifying opportunities and designing sustainable expansion over time.",
        },
        {
          icon: "operations",
          name: "Operations Consulting",
          desc: "Efficiency, execution and operational improvement to strengthen the foundation of the business.",
        },
      ],
    },
    approach: {
      kicker: "OUR APPROACH",
      title: "A Clear, Step-by-Step Method",
      steps: [
        { n: "01", name: "Discover", desc: "We understand the business, its current challenges and its growth objectives." },
        { n: "02", name: "Analyze", desc: "We evaluate processes, performance and opportunities for improvement across the organization." },
        { n: "03", name: "Strategize", desc: "We design a clear strategy and an actionable roadmap for the business." },
        { n: "04", name: "Optimize", desc: "We measure results, continuously improve, and scale what works." },
      ],
    },
    kpi: {
      kicker: "KPI & PERFORMANCE",
      title: "Turning Data Into Better Business Decisions.",
      text: "We help organizations define and track the indicators that truly matter for their growth.",
      items: [
        { icon: "growth", name: "Revenue Growth" },
        { icon: "cx", name: "Customer Retention" },
        { icon: "operations", name: "Operational Efficiency" },
        { icon: "kpi", name: "Customer Satisfaction" },
        { icon: "process", name: "Process Performance" },
      ],
    },
    cx: {
      kicker: "CUSTOMER EXPERIENCE",
      title: "Customer Experiences That Drive Loyalty and Growth.",
      items: [
        "Customer Journey",
        "Service Processes",
        "Customer Satisfaction",
        "Retention",
        "Operational Touchpoints",
        "Service Standards",
      ],
    },
    operations: {
      kicker: "OPERATIONS",
      title: "Better Processes. Stronger Operations.",
      text: "We analyze your organization's workflows, identify inefficiencies and design practical solutions to improve execution, productivity and overall business performance.",
    },
    industries: {
      kicker: "INDUSTRIES",
      title: "Solutions Designed for Growing Businesses",
      items: ["Professional Services", "Small & Mid-Sized Businesses", "Service-Based Companies", "Growing Organizations"],
    },
    why: {
      kicker: "WHY SAMGERONIMO GROUP",
      title: "An Approach Built for Real Results",
      items: [
        { icon: "target", name: "Strategic Perspective", desc: "Solutions aligned with each organization's real objectives." },
        { icon: "kpi", name: "Data-Driven Approach", desc: "Clear metrics for better business decisions." },
        { icon: "operations", name: "Operational Focus", desc: "Strategies designed to be executed, not just presented." },
        { icon: "growth", name: "Sustainable Growth", desc: "Long-term improvement, not temporary fixes." },
      ],
    },
    ctaFinal: {
      title: "LET'S BUILD A STRONGER BUSINESS TOGETHER.",
      text: "Schedule a consultation and discover how we can help your organization grow strategically and measurably.",
      button: "Schedule a Consultation",
    },
    contact: {
      kicker: "CONTACT",
      title: "Let's Talk About Your Business",
      text: "Fill out the form and our team will reach out to schedule a consultation.",
      companyName: "SamGeronimo Group LLC",
      companyTagline: "Business Strategy & Operations Consulting",
      address: "810 W College Blvd, Apt 102, Addison, IL 60101",
      phone: "(708) 476-2658",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        service: "Service of Interest",
        servicePlaceholder: "Select a service",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
        success: "Thank you. We've received your message and will be in touch soon.",
        error: "The message could not be sent. Please try again.",
        captchaRequired: "Please confirm you're not a robot.",
      },
    },
    faq: {
      kicker: "FAQ",
      title: "What Our Clients Ask",
      items: [
        {
          q: "What kind of organizations do you work with?",
          a: "We primarily work with professional services firms, small and mid-sized businesses, and growing organizations looking to improve their strategy and operations.",
        },
        {
          q: "What does the process of working with the firm look like?",
          a: "We follow a four-stage method: Discover, Analyze, Strategize and Optimize. Every project starts with a deep understanding of the business before any strategy is designed.",
        },
        {
          q: "Do you offer process consulting, or only strategy?",
          a: "Yes. Our work combines business strategy with process optimization and operations consulting, so decisions translate into real execution.",
        },
        {
          q: "How do you measure the success of a project?",
          a: "We define the KPIs that matter for your business together with you — such as operational efficiency, customer retention or process performance — and track those indicators continuously.",
        },
        {
          q: "How can I schedule an initial consultation?",
          a: "You can fill out the contact form or reach out directly using the details on this page. Our team will get in touch to set up the initial conversation.",
        },
      ],
    },
    langSwitcher: { es: "ES", en: "EN" },
  },
};

export const SERVICE_KEYS = ["strategy", "process", "kpi", "cx", "growth", "operations"];

export const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "insights", href: "/insights" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
];
