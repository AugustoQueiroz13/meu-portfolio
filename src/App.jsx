import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { SiJavascript, SiCplusplus, SiFigma, SiCoreldraw, SiDjango } from 'react-icons/si';
import {
  FaPython, FaReact, FaNodeJs, FaAws, FaLinux, FaDatabase, FaGitAlt,
  FaMicrochip, FaServer, FaNetworkWired, FaGithub, FaLinkedin, FaEnvelope,
  FaExternalLinkAlt, FaLaptopCode, FaRobot, FaGlobe, FaBookOpen,
  FaGraduationCap, FaBolt, FaTrophy, FaCertificate,
  FaCompass, FaChevronDown, FaPalette, FaAmazon, FaShoppingCart,
  FaChalkboardTeacher, FaClipboardCheck, FaAddressCard, FaMusic,
  FaDocker, FaSync, FaBars, FaTimes
} from 'react-icons/fa';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('pt');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detectar secao ativa para highlight no nav
      const sections = ['sobre', 'projetos', 'formacao', 'outras-atuacoes', 'reconhecimentos', 'contato'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao clicar fora
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Dicionario de Traducoes
  const t = {
    pt: {
      nav: ['Sobre', 'Projetos', 'Formação', 'Outras Atuações', 'Reconhecimentos', 'Contato'],
      navIds: ['sobre', 'projetos', 'formacao', 'outras-atuacoes', 'reconhecimentos', 'contato'],
      heroIntro: "Olá, meu nome é",
      heroDesc: "Sou especialista em Engenharia da Computação, Desenvolvedor Full-Stack e Educador. Meu foco é criar soluções tecnológicas eficientes, explorar a ciência de dados e formar novos talentos em tecnologia.",
      heroSequence: [
        'Eu construo sistemas para a web', 1500,
        'Eu desenvolvo hardware e IoT', 1500,
        'Eu ensino robótica e programação', 1500,
        'Eu exploro dados e IA', 1500,
        'Eu monto redes e infraestruturas', 1500,
      ],
      sobreTitulo: "Sobre mim",
      sobreP1: "Trabalho na interseção entre o <span class=\"text-blue-400 font-semibold\">desenvolvimento de software</span>, a <span class=\"text-blue-400 font-semibold\">engenharia da computação</span> e a <span class=\"text-blue-400 font-semibold\">educação</span>. Tenho facilidade em transitar do <span class=\"text-blue-400 font-semibold\">código front-end e back-end até o hardware físico</span>, resolvendo problemas complexos com código limpo e eficiente.",
      sobreP2: "Já atuei com TI na iniciativa privada, no setor público e no terceiro setor. Essa vivência me deu uma visão ampla sobre como aplicar a tecnologia em diferentes cenários. Além da programação, possuo experiência prática em <span class=\"text-blue-400 font-semibold\">design gráfico</span> e <span class=\"text-blue-400 font-semibold\">UX/UI</span>, dominando ferramentas para a criação de <span class=\"text-blue-400 font-semibold\">arte final em materiais impressos e digitais</span>. Hoje, divido meu tempo entre construir soluções digitais e liderar iniciativas educacionais, ensinando <span class=\"text-blue-400 font-semibold\">robótica e programação</span>.",
      sobreP3: "Acredito muito no poder da tecnologia na educação. Sou <span class=\"text-blue-400 font-semibold\">autor de materiais didáticos</span> onde ensino sobre tecnologia, e dedico parte do meu tempo como <span class=\"text-blue-400 font-semibold\">Squad Leader no Code Club Brasil</span>, além de atuar ativamente no Movimento Escoteiro e como músico percussionista.",
      projetosTitulo: "Alguns trabalhos",
      formacaoTitulo: "Formação Acadêmica",
      atuacoesTitulo: "Outras Atuações",
      reconhecimentosTitulo: "Reconhecimentos",
      premiosTitulo: "Prêmios e Certificações",
      publicacoesTitulo: "Publicações e Artigos",
      contatoSub: "O que vem a seguir?",
      contatoTitulo: "Entre em Contato",
      contatoDesc: "Seja para discutir uma oportunidade, trocar ideias sobre tecnologia ou conversar sobre iniciativas educacionais, minha caixa de entrada está sempre aberta.",
      btnContato: "Diga Olá",
      rodape: "Desenvolvido por Augusto Queiroz."
    },
    en: {
      nav: ['About', 'Projects', 'Education', 'Other Roles', 'Recognitions', 'Contact'],
      navIds: ['sobre', 'projetos', 'formacao', 'outras-atuacoes', 'reconhecimentos', 'contato'],
      heroIntro: "Hi, my name is",
      heroDesc: "I am a Computer Engineering specialist, Full-Stack Developer, and Educator. My focus is on creating efficient technological solutions, exploring data science, and training new tech talent.",
      heroSequence: [
        'I build web systems', 1500,
        'I develop hardware and IoT', 1500,
        'I teach robotics and programming', 1500,
        'I explore data and AI', 1500,
        'I set up networks and infrastructure', 1500,
      ],
      sobreTitulo: "About me",
      sobreP1: "I work at the intersection of <span class=\"text-blue-400 font-semibold\">software development</span>, <span class=\"text-blue-400 font-semibold\">computer engineering</span>, and <span class=\"text-blue-400 font-semibold\">education</span>. I easily navigate from <span class=\"text-blue-400 font-semibold\">front-end and back-end code to physical hardware</span>, solving complex problems with clean and efficient code.",
      sobreP2: "I have worked with IT in the private sector, public sector, and non-profits. This experience gave me a broad view of how to apply technology in different scenarios. Besides programming, I have practical experience in <span class=\"text-blue-400 font-semibold\">graphic design</span> and <span class=\"text-blue-400 font-semibold\">UX/UI</span>, mastering tools for creating <span class=\"text-blue-400 font-semibold\">final artwork for print and digital materials</span>. Today, I split my time between building digital solutions and leading educational initiatives, teaching <span class=\"text-blue-400 font-semibold\">robotics and programming</span>.",
      sobreP3: "I strongly believe in the power of technology in education. I am the <span class=\"text-blue-400 font-semibold\">author of educational materials</span> where I teach technology, and I dedicate part of my time as a <span class=\"text-blue-400 font-semibold\">Squad Leader at Code Club Brasil</span>, besides being actively involved in the Scout Movement and as a percussionist.",
      projetosTitulo: "Some of my work",
      formacaoTitulo: "Academic Background",
      atuacoesTitulo: "Other Roles",
      reconhecimentosTitulo: "Recognitions",
      premiosTitulo: "Awards & Certifications",
      publicacoesTitulo: "Publications & Articles",
      contatoSub: "What's next?",
      contatoTitulo: "Get In Touch",
      contatoDesc: "Whether it's to discuss an opportunity, exchange ideas about technology, or talk about educational initiatives, my inbox is always open.",
      btnContato: "Say Hello",
      rodape: "Developed by Augusto Queiroz."
    }
  };

  const projetos = [
    {
      titulo: "SRPA Software",
      tipo: lang === 'pt' ? "Plataforma SaaS" : "SaaS Platform",
      descricao: lang === 'pt' ? "Sistema de gestão empresarial multi-tenant comercializado como SaaS. Cada empresa cliente possui dados isolados por accessKey e companyId, garantindo segurança e escalabilidade." : "Multi-tenant enterprise management system sold as SaaS. Each client company has isolated data via accessKey and companyId, ensuring security and scalability.",
      techs: ["Next.js 14", "TypeScript", "MongoDB", "Tailwind CSS", "Vercel", "Supabase"],
      link: "https://www.srpa.com.br/plataforma",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/srpa.jpg",
      icone: <FaLaptopCode className="text-blue-400" size={20} />
    },
    {
      titulo: lang === 'pt' ? "Bolsa Futuro Digital" : "Digital Future Grant",
      tipo: lang === 'pt' ? "Plataforma de Portfólio" : "Portfolio Platform",
      descricao: lang === 'pt' ? "Página desenvolvida para orientar os projetos finais do programa Bolsa Futuro Digital, projeto de âmbito nacional no qual atuei como instrutor e product owner, destacando os trabalhos apresentados pelos alunos em aplicações de tecnologias emergentes no ensino baseadas na OSD 4." : "Page developed for the Digital Future Grant program, highlighting practical projects and applications of emerging technologies in education.",
      techs: ["HTML", "CSS", "JavaScript"],
      link: "https://augustoqueiroz13.github.io/projetofinalbfdpetropolis/",
      imagem: "https://www.hardware.org.br/capacitacao/bfd/rs/inscricao/site_themes/theme_0001/images/site.png",
      icone: <FaGraduationCap className="text-blue-400" size={20} />
    },
    {
      titulo: "Nascente Pequena",
      tipo: lang === 'pt' ? "Site Institucional" : "Institutional Website",
      descricao: lang === 'pt' ? "Site institucional da Associação Cultural Nascente Pequena, focado em dar visibilidade a projetos sociais, oficinas e iniciativas de desenvolvimento comunitário." : "Institutional website for the Nascente Pequena Cultural Association, focused on giving visibility to social projects, workshops, and community development initiatives.",
      techs: ["Web", "Design UI/UX", "Frontend", "Node.js"],
      link: "https://www.nascentepequena.org.br",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/nascentepequena.jpg",
      icone: <FaGlobe className="text-blue-400" size={20} />
    },
    {
      titulo: lang === 'pt' ? "Céu da Águia Dourada" : "Golden Eagle Sky",
      tipo: lang === 'pt' ? "Plataforma Institucional" : "Institutional Platform",
      descricao: lang === 'pt' ? "Página responsiva desenvolvida para o templo neo-xamânico. Projetada com foco nas informações do local para frequentadores e visitantes." : "Responsive page developed for the neo-shamanic temple. Designed with a focus on providing local information for attendees and visitors.",
      techs: ["WordPress", "Web Design", "CMS"],
      link: "https://www.ceudaaguiadourada.com.br",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/ceudaaguiadourada.jpg",
      icone: <FaGlobe className="text-blue-400" size={20} />
    },
    {
      titulo: lang === 'pt' ? "Jogos Olímpicos Rio 2016" : "Rio 2016 Olympic Games",
      tipo: lang === 'pt' ? "Suporte e Infraestrutura" : "Support & Infrastructure",
      descricao: lang === 'pt' ? "Atuação técnica como Analista de Redes, Server Specialist, Analista de Suporte e Deployment no comitê dos Jogos Olímpicos Rio 2016 pela Atos, garantindo o funcionamento da infraestrutura de TI do maior evento esportivo do mundo." : "Technical role as Network Analyst, Server Specialist, Support Analyst, and Deployment at the Rio 2016 Olympic Games committee via Atos, ensuring the IT infrastructure of the world's largest sporting event.",
      techs: ["Infraestrutura", "Redes", "Suporte"],
      link: "https://www.youtube.com/watch?v=mjO3CaCKXVc",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/rio2016.jfif",
      icone: <FaNetworkWired className="text-blue-400" size={20} />
    },
    {
      titulo: "Curso de Robótica ACNP",
      tipo: lang === 'pt' ? "Ambiente Virtual" : "Virtual Environment",
      descricao: lang === 'pt' ? "Plataforma E-learning dedicada ao ensino prático de robótica educacional, com módulos interativos para lógica de programação, Robótica Educacional e cultura maker." : "E-learning platform dedicated to the practical teaching of educational robotics, with interactive modules for programming logic, Educational Robotics, and maker culture.",
      techs: ["E-learning", "Plataforma", "Web", "React", "Node.js"],
      link: "https://roboticaacnp.com.br/educacional",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/roboticaeducacional.jpg",
      icone: <FaRobot className="text-blue-400" size={20} />
    },
    {
      titulo: "Gráfica Delivery",
      tipo: lang === 'pt' ? "Sistema Administrativo" : "Administrative System",
      descricao: lang === 'pt' ? "Sistema de gestão e portal online para serviços gráficos, focado na otimização do fluxo de pedidos e acompanhamento de produção." : "Management system and online portal for printing services, focused on optimizing the order flow and production tracking.",
      techs: ["Sistema Web", "Backend", "E-commerce"],
      link: "http://www.graficadelivery.com",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/graficadelivery.jpg",
      icone: <FaLaptopCode className="text-blue-400" size={20} />
    },
    {
      titulo: "Guia Guapimirim",
      tipo: lang === 'pt' ? "Portal de Informações" : "Information Portal",
      descricao: lang === 'pt' ? "Portal dinâmico de turismo, comércio e serviços locais. Projetado para valorizar a cidade de Guapimirim e facilitar o acesso a informações relevantes ao público local e turistas." : "Dynamic portal for tourism, commerce, and local services. Designed to highlight the city of Guapimirim and provide relevant information for locals and tourists.",
      techs: ["React", "Frontend", "Backend", "Python", "Django"],
      link: "https://guapimirim-portal.vercel.app/a-cidade",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/guiaguapimirim.jpg",
      icone: <FaGlobe className="text-blue-400" size={20} />
    },
    {
      titulo: "Sistema Dualy",
      tipo: "Sistema Web",
      descricao: lang === 'pt' ? "Plataforma completa para gestão e operações financeiras para pessoas físicas e pequenos empreendedores. Arquitetada com foco em estabilidade e usabilidade intuitiva para o usuário final." : "Complete platform for management and financial operations for individuals and small entrepreneurs. Architected with a focus on stability and intuitive usability for the end user.",
      techs: ["Web", "Sistema", "JavaScript", "UI/UX"],
      link: "https://www.dualy.app.br",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/dualy.jpg",
      icone: <FaLaptopCode className="text-blue-400" size={20} />
    },
    {
      titulo: lang === 'pt' ? "Lógica e Código" : "Logic and Code",
      tipo: lang === 'pt' ? "Publicação Científica" : "Scientific Publication",
      descricao: lang === 'pt' ? "Obra didática sobre os fundamentos da programação em Python com IA. Um guia estruturado passo a passo para o desenvolvimento do raciocínio lógico." : "Educational book on the fundamentals of Python programming with AI. A structured step-by-step guide to developing logical reasoning.",
      techs: ["Python", "IA", "Material Didático"],
      links: [
        { url: "https://www.amazon.com.br/L%C3%B3gica-C%C3%B3digo-Fundamentos-Programa%C3%A7%C3%A3o-Python/dp/6501819113", label: "Amazon", icon: <FaAmazon size={14} /> },
        { url: "https://loja.uiclap.com/titulo/ua133185/", label: "Uiclap", icon: <FaShoppingCart size={14} /> }
      ],
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/logicaecodigo.jpg",
      icone: <FaBookOpen className="text-blue-400" size={20} />
    },
    {
      titulo: lang === 'pt' ? "Monitoramento IoT" : "IoT Monitoring",
      tipo: lang === 'pt' ? "Sistema Embarcado" : "Embedded System",
      descricao: lang === 'pt' ? "Projeto financiado pela FAPERJ em parceria com a Faculdade Redentor, de um medidor digital de energia com análise econômica. Captura e transmite dados de consumo em tempo real. Projeto premiado em âmbito regional e nacional." : "FAPERJ-funded project in partnership with Faculdade Redentor, featuring a digital energy meter with economic analysis. Captures and transmits consumption data in real time. Award-winning project at regional and national level.",
      techs: ["C++", "IoT", "Sensores"],
      link: null,
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/projetoiotfaperj.jfif",
      icone: <FaMicrochip className="text-blue-400" size={20} />
    }
  ];

  const hardSkills = [
    { nome: 'Python', icone: <FaPython className="text-blue-500" size={22} /> },
    { nome: 'JavaScript', icone: <SiJavascript className="text-yellow-400" size={20} /> },
    { nome: 'C++', icone: <SiCplusplus className="text-blue-600" size={20} /> },
    { nome: 'React', icone: <FaReact className="text-cyan-400" size={22} /> },
    { nome: 'Node.js', icone: <FaNodeJs className="text-green-500" size={22} /> },
    { nome: 'Django', icone: <SiDjango className="text-emerald-500" size={20} /> },
    { nome: 'UX/UI Design', icone: <FaPalette className="text-pink-400" size={20} /> },
    { nome: 'Scrum', icone: <FaSync className="text-blue-400" size={20} /> },
    { nome: 'Figma', icone: <SiFigma className="text-purple-400" size={20} /> },
    { nome: 'Corel Draw', icone: <SiCoreldraw className="text-green-400" size={20} /> },
    { nome: lang === 'pt' ? 'Banco de Dados' : 'Databases', icone: <FaDatabase className="text-indigo-400" size={20} /> },
    { nome: 'AWS', icone: <FaAws className="text-orange-400" size={22} /> },
    { nome: 'Docker', icone: <FaDocker className="text-blue-500" size={22} /> },
    { nome: 'Linux', icone: <FaLinux className="text-slate-200" size={22} /> },
    { nome: 'Git', icone: <FaGitAlt className="text-red-500" size={22} /> },
    { nome: 'IoT', icone: <FaMicrochip className="text-teal-400" size={22} /> },
    { nome: lang === 'pt' ? 'Servidores' : 'Servers', icone: <FaServer className="text-gray-400" size={20} /> },
    { nome: lang === 'pt' ? 'Redes' : 'Networks', icone: <FaNetworkWired className="text-blue-300" size={20} /> }
  ];

  const formacaoList = [
    {
      titulo: "Business Intelligence, Big Data e Inteligência Artificial",
      tipo: lang === 'pt' ? "Pós-graduação, Especialização | Faculdade Focus" : "Postgraduate, Specialization | Faculdade Focus",
      desc: lang === 'pt' ? "Especialização em análise de grandes volumes de dados, modelagem preditiva e soluções baseadas em inteligência artificial, permitindo decisões automatizadas, previsões de tendências e personalização de serviços." : "Specialization in large-scale data analysis, predictive modeling, and AI-based solutions, enabling automated decisions, trend forecasting, and service personalization.",
      icone: <FaDatabase size={16} className="text-white" />
    },
    {
      titulo: lang === 'pt' ? "Engenharia da Computação" : "Computer Engineering",
      tipo: lang === 'pt' ? "Pós-graduação, Especialização | Faculdade Focus" : "Postgraduate, Specialization | Faculdade Focus",
      desc: lang === 'pt' ? "Formação avançada no desenvolvimento e integração de sistemas de hardware, inteligência artificial, robótica, sistemas embarcados e redes para resolver problemas complexos." : "Advanced training in the development and integration of hardware systems, AI, robotics, embedded systems, and networks to solve complex problems.",
      icone: <FaMicrochip size={16} className="text-white" />
    },
    {
      titulo: lang === 'pt' ? "Análise e Desenvolvimento de Sistemas" : "Systems Analysis and Development",
      tipo: lang === 'pt' ? "Graduação, Tecnólogo | UNICV - Centro Universitário Cidade Verde" : "Degree, Technologist | UNICV - Centro Universitário Cidade Verde",
      desc: lang === 'pt' ? "Graduação focada em projeto, desenvolvimento, implementação e manutenção de softwares envolvendo análise de requisitos, bancos de dados, modelagem de sistemas e gestão de projetos." : "Degree focused on software design, development, implementation, and maintenance, involving requirements analysis, databases, systems modeling, and project management.",
      icone: <FaGraduationCap size={16} className="text-white" />
    },
    {
      titulo: lang === 'pt' ? "Eletrônica" : "Electronics",
      tipo: lang === 'pt' ? "Ensino Técnico | CQT - Centro de Qualificação Técnica de Nova Friburgo" : "Technical Degree | CQT - Centro de Qualificação Técnica de Nova Friburgo",
      desc: lang === 'pt' ? "Formação técnica com base sólida em circuitos eletrônicos, manutenção de hardware, sensores e introdução a sistemas embarcados com ênfase em controle de processos industriais." : "Technical training with a solid foundation in electronic circuits, hardware maintenance, sensors, and an introduction to embedded systems with an emphasis on industrial process control.",
      icone: <FaBolt size={16} className="text-white" />
    }
  ];

  const atuacoesList = [
    {
      titulo: "Squad Leader & Instrutor - Code Club Brasil",
      desc: lang === 'pt' ? "Coordenação de líderes regionais e ensino de programação (Scratch, Python, HTML/CSS) para crianças, expandindo o alcance do projeto no Brasil." : "Coordination of regional leaders and teaching programming (Scratch, Python, HTML/CSS) to children, expanding the project's reach in Brazil.",
      icone: <FaChalkboardTeacher size={24} className="text-blue-400" />
    },
    {
      titulo: lang === 'pt' ? "Juiz de Arena FLL - Torneio SESI de Robótica" : "FLL Arena Judge, SESI Robotics Tournament",
      desc: lang === 'pt' ? "Atuação voluntária como juiz oficial no maior torneio de robótica LEGO (First LEGO League) do Brasil, avaliando projetos e robôs." : "Volunteer work as an official judge in the largest LEGO robotics tournament (First LEGO League) in Brazil, evaluating projects and robots.",
      icone: <FaClipboardCheck size={24} className="text-blue-400" />
    },
    {
      titulo: lang === 'pt' ? "Chefe Escoteiro do Mar" : "Sea Scout Leader",
      desc: lang === 'pt' ? "Atuação de liderança no 143º Grupo de Escoteiros do Mar (Guapimirim/RJ), guiando jovens no desenvolvimento de habilidades práticas e valores do Movimento Escoteiro." : "Leadership role in the 143rd Sea Scout Group (Guapimirim/RJ), guiding youth in developing practical skills and values of the Scout Movement.",
      icone: <FaCompass size={24} className="text-blue-400" />
    },
    {
      titulo: lang === 'pt' ? "Músico Percussionista" : "Percussionist Musician",
      desc: lang === 'pt' ? "Atuação dedicada à música através da percussão, explorando ritmos, participando de apresentações e vivenciando a arte como forma de expressão e conexão." : "Dedicated to music through percussion, exploring rhythms, participating in performances, and experiencing art as a form of expression and connection.",
      icone: <FaMusic size={24} className="text-blue-400" />
    }
  ];

  const premiosList = [
    {
      titulo: "Olympic Certificate, Rio 2016",
      local: "Atos Worldwide IT Partner",
      desc: lang === 'pt' ? "Reconhecimento pela contribuição técnica e sucesso operacional durante os Jogos Olímpicos do Rio de Janeiro." : "Recognition for technical contribution and operational success during the Rio de Janeiro Olympic Games."
    },
    {
      titulo: lang === 'pt' ? "1º Lugar, Iniciação Científica" : "1st Place, Scientific Initiation",
      local: lang === 'pt' ? "V Congresso da Faculdade Redentor" : "V Congress of Redentor College",
      desc: lang === 'pt' ? "Melhor trabalho eleito com o projeto do Medidor Digital de Energia Elétrica com Monitoração Econômica." : "Best project elected with the Digital Electrical Energy Meter with Economic Monitoring."
    },
    {
      titulo: lang === 'pt' ? "Prêmio Nacional de Inovação Atech" : "Atech National Innovation Award",
      local: "VI FEBRACE",
      desc: lang === 'pt' ? "Vencedor nacional da categoria de inovação com o projeto do Medidor Digital de Energia Elétrica." : "National winner in the innovation category with the Digital Electrical Energy Meter project."
    },
    {
      titulo: lang === 'pt' ? "Diploma de Jovem Revelação" : "Young Revelation Diploma",
      local: "Rotary Club",
      desc: lang === 'pt' ? "Homenagem pelo destaque e sucesso alcançado na Feira Brasileira de Ciências e Engenharia." : "Tribute for the prominence and success achieved at the Brazilian Science and Engineering Fair."
    },
    {
      titulo: lang === 'pt' ? "Moção de Aplausos" : "Motion of Applause",
      local: lang === 'pt' ? "Câmara Municipal de Guapimirim" : "Guapimirim City Council",
      desc: lang === 'pt' ? "Honraria concedida por representar o município e conquistar o prêmio nacional de inovação na FEBRACE." : "Honor granted for representing the municipality and winning the national innovation award at FEBRACE."
    }
  ];

  const publicacoesList = [
    {
      titulo: lang === 'pt' ? "Curso de Robótica Educacional" : "Educational Robotics Course",
      local: lang === 'pt' ? "Fundamentos e Projetos Práticos com Arduino" : "Fundamentals and Practical Projects with Arduino",
      badges: [lang === 'pt' ? "Livro Físico" : "Physical Book", "ISBN 978-65-01-86884-4"]
    },
    {
      titulo: lang === 'pt' ? "Lógica e Código" : "Logic and Code",
      local: lang === 'pt' ? "Fundamentos da Programação em Python com IA" : "Fundamentals of Python Programming with AI",
      badges: [lang === 'pt' ? "Livro Físico" : "Physical Book", "ISBN 978-65-01-81911-2"]
    },
    {
      titulo: lang === 'pt' ? "Medidor de Energia Elétrica Digital com Monitoração Econômica" : "Digital Electric Energy Meter with Economic Monitoring",
      local: "VI FEBRACE",
      badges: [lang === 'pt' ? "Anais e Feira" : "Annals & Fair", "ISBN 978-85-86686-47-4"]
    },
    {
      titulo: lang === 'pt' ? "Automação do Sistema de Fornecimento de Energia Elétrica Pública" : "Automation of the Public Electrical Energy Supply System",
      local: lang === 'pt' ? "9ª e 10ª Bienal de Arte, Ciência e Cultura da UNE" : "9th & 10th UNE Biennial of Art, Science and Culture",
      badges: [lang === 'pt' ? "Anais de Congresso" : "Congress Annals", "ISBN 9788561839215 / 9788561839178"]
    },
    {
      titulo: lang === 'pt' ? "Automatização do Sistema de Fornecimento de Energia Elétrica Pública" : "Automation of the Public Electrical Energy Supply System",
      local: "13º e 14º CONIC SEMESP",
      badges: [lang === 'pt' ? "Anais de Congresso" : "Congress Annals", "ISSN 2357-8904"]
    }
  ];

  // Variantes de animacao reutilizaveis
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] font-sans selection:bg-blue-400/30 selection:text-blue-200">

      {/* Elemento de fundo decorativo */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      {/* Navegacao Flutuante */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a192f]/85 backdrop-blur-lg py-3 shadow-lg shadow-black/20 border-b border-slate-800/50' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center relative">

          <a href="#" className="text-blue-400 font-mono font-bold text-xl md:text-2xl tracking-tighter flex items-center z-50 hover:text-blue-300 transition-colors">
            <TypeAnimation sequence={['Augusto Queiroz']} wrapper="span" cursor={false} speed={40} />
            <span className="animate-[pulse_0.6s_ease-in-out_infinite] ml-1 text-blue-400">_</span>
          </a>

          <div className="flex items-center gap-4 md:gap-6">

            {/* Navegacao Desktop */}
            <div className="hidden lg:flex gap-6 font-mono text-sm">
              {t[lang].nav.map((item, i) => (
                <a
                  key={item}
                  href={`#${t[lang].navIds[i]}`}
                  className={`hover:text-blue-400 transition-colors flex items-center gap-1 ${activeSection === t[lang].navIds[i] ? 'text-blue-400' : ''}`}
                >
                  <span className="text-blue-400">0{i + 1}.</span> {item}
                </a>
              ))}
            </div>

            {/* Seletor de Idioma */}
            <div className="relative group cursor-pointer border border-slate-700 rounded-lg px-3 py-1.5 bg-[#112240]/80 backdrop-blur-sm text-sm z-50 hover:border-blue-400/40 transition-colors">
              <div className="flex items-center gap-2 text-slate-400 group-hover:text-blue-400">
                <img src={lang === 'pt' ? 'https://flagcdn.com/w20/br.png' : 'https://flagcdn.com/w20/gb.png'} alt="flag" className="w-5 rounded-sm" />
                {lang === 'pt' ? 'PT' : 'EN'} <FaChevronDown size={10} className="transition-transform group-hover:rotate-180" />
              </div>
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block bg-[#112240] border border-slate-700 rounded-lg shadow-2xl shadow-black/40 overflow-hidden w-36">
                <button onClick={() => setLang('pt')} className={`w-full flex items-center gap-3 text-left px-4 py-3 hover:bg-blue-500/10 transition-colors ${lang === 'pt' ? 'text-blue-400 bg-blue-500/5' : 'text-slate-300'}`}>
                  <img src="https://flagcdn.com/w20/br.png" alt="BR" className="w-5 rounded-sm" /> Português
                </button>
                <button onClick={() => setLang('en')} className={`w-full flex items-center gap-3 text-left px-4 py-3 hover:bg-blue-500/10 transition-colors ${lang === 'en' ? 'text-blue-400 bg-blue-500/5' : 'text-slate-300'}`}>
                  <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-5 rounded-sm" /> English
                </button>
              </div>
            </div>

            {/* Botao Menu Mobile */}
            <button className="lg:hidden text-blue-400 z-50 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

          </div>
        </div>

        {/* Navegacao Mobile com AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden bg-[#112240]/95 backdrop-blur-xl border-t border-slate-700 p-8 absolute top-full left-0 w-full shadow-2xl flex flex-col gap-6 font-mono text-base z-40"
              >
                {t[lang].nav.map((item, i) => (
                  <a key={item} href={`#${t[lang].navIds[i]}`} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="text-blue-400">0{i + 1}.</span> {item}
                  </a>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto relative pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 space-y-5"
          >
            <p className="text-blue-400 font-mono text-lg ml-1">{t[lang].heroIntro}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] tracking-tight leading-tight">
              Augusto Queiroz
            </h1>
            <div className="text-2xl md:text-5xl font-bold h-[60px] md:h-[80px]">
              <TypeAnimation
                key={lang}
                sequence={t[lang].heroSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-400"
              />
            </div>
            <p className="text-lg max-w-xl leading-relaxed mt-4 pt-4">
              {t[lang].heroDesc}
            </p>

            <div className="flex flex-wrap gap-4 md:gap-4 pt-8">
              {[
                { href: "https://github.com/AugustoQueiroz13", icon: <FaGithub size={22} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/queiroz-augusto/", icon: <FaLinkedin size={22} />, label: "LinkedIn" },
                { href: "http://lattes.cnpq.br/", icon: <FaAddressCard size={22} />, label: "Lattes" },
                { href: "mailto:augusto_queiroz@id.uff.br", icon: <FaEnvelope size={22} />, label: "E-mail" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel="noreferrer"
                  title={social.label}
                  className="p-3 bg-[#112240] rounded-lg border border-slate-700 hover:border-blue-400 text-[#ccd6f6] hover:text-blue-400 transition-all shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group w-64 h-64 md:w-80 md:h-80 rounded-full"
          >
            <div className="absolute inset-0 border-2 border-blue-400/60 rounded-full translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-blue-400/10 rounded-full group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img
              src="https://roboticaacnp.com.br/educacional/professor.jpg"
              alt="Augusto Queiroz"
              className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
            />
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blue-400/40"
        >
          <FaChevronDown size={28} />
        </motion.div>
      </section>

      {/* 01. Sobre */}
      <section id="sobre" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-20 relative z-10">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-[#ccd6f6] whitespace-nowrap"><span className="text-blue-400 font-mono text-xl font-normal mr-2">01.</span>{t[lang].sobreTitulo}</h2>
            <div className="h-[1px] bg-gradient-to-r from-slate-700 to-transparent flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-4 text-lg leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t[lang].sobreP1 }} />
              <p dangerouslySetInnerHTML={{ __html: t[lang].sobreP2 }} />
              <p dangerouslySetInnerHTML={{ __html: t[lang].sobreP3 }} />
            </div>

            <div className="md:col-span-2">
              <div className="bg-[#112240] p-6 rounded-xl border border-slate-700/50 shadow-xl">
                <div className="flex gap-2 mb-6 border-b border-slate-700 pb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <p className="text-blue-400 font-mono text-sm mb-4">augusto@tech:~$ ls stack_principal/</p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {hardSkills.map((skill, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center gap-2 bg-[#0a192f]/80 p-2.5 rounded-lg border border-slate-700/50 hover:border-blue-400/40 transition-all cursor-default text-center"
                    >
                      {skill.icone}
                      <span className="font-sans text-[11px] text-[#ccd6f6]">{skill.nome}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 02. Projetos */}
      <section id="projetos" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20 relative z-10">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-[#ccd6f6] whitespace-nowrap"><span className="text-blue-400 font-mono text-xl font-normal mr-2">02.</span>{t[lang].projetosTitulo}</h2>
            <div className="h-[1px] bg-gradient-to-r from-slate-700 to-transparent flex-grow"></div>
          </div>

          {/* Grid de Projetos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetos.map((projeto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-[#112240] rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/30 transition-all group flex flex-col h-full shadow-lg hover:shadow-xl hover:shadow-blue-900/10"
              >
                <div className="h-44 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <p className="font-mono text-blue-400/80 text-xs">{projeto.tipo}</p>
                    <div className="flex gap-2">
                      {projeto.links ? (
                        projeto.links.map((lk, i) => (
                          <a key={i} href={lk.url} target="_blank" rel="noreferrer" title={lk.label} className="p-1.5 bg-[#0a192f] rounded border border-slate-700 hover:border-blue-400 text-slate-400 hover:text-blue-400 transition-colors flex items-center justify-center">
                            {lk.icon}
                          </a>
                        ))
                      ) : projeto.link ? (
                        <a href={projeto.link} target="_blank" rel="noreferrer" className="p-1.5 bg-[#0a192f] rounded border border-slate-700 hover:border-blue-400 text-slate-400 hover:text-blue-400 transition-colors flex items-center justify-center">
                          <FaExternalLinkAlt size={13} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-blue-400 transition-colors">{projeto.titulo}</h3>
                  <p className="text-sm text-[#8892b0] mb-5 flex-grow leading-relaxed">
                    {projeto.descricao}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-400 mt-auto">
                    {projeto.techs.map(tech => (
                      <li key={tech} className="bg-[#0a192f] px-2 py-1 rounded border border-slate-700/50">{tech}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 03. Formacao Academica */}
      <section id="formacao" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-20 relative z-10">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-[#ccd6f6] whitespace-nowrap"><span className="text-blue-400 font-mono text-xl font-normal mr-2">03.</span>{t[lang].formacaoTitulo}</h2>
            <div className="h-[1px] bg-gradient-to-r from-slate-700 to-transparent flex-grow"></div>
          </div>

          <div className="relative border-l-2 border-slate-700/50 ml-4 md:ml-6 space-y-12">
            {formacaoList.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[23px] top-0 bg-[#0a192f] p-2 rounded-full border-2 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                  {item.icone}
                </div>
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">{item.titulo}</h3>
                <p className="text-blue-400 font-mono text-sm mb-3">{item.tipo}</p>
                <p className="text-[#8892b0] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 04. Outras Atuacoes */}
      <section id="outras-atuacoes" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20 relative z-10">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-[#ccd6f6] whitespace-nowrap"><span className="text-blue-400 font-mono text-xl font-normal mr-2">04.</span>{t[lang].atuacoesTitulo}</h2>
            <div className="h-[1px] bg-gradient-to-r from-slate-700 to-transparent flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {atuacoesList.map((atuacao, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-[#112240] p-6 rounded-xl border border-slate-700/50 flex gap-5 items-start hover:border-blue-400/30 transition-all group hover:shadow-lg hover:shadow-blue-900/5"
              >
                <div className="mt-1 hidden sm:block group-hover:scale-110 transition-transform">
                  {atuacao.icone}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-blue-400 transition-colors">{atuacao.titulo}</h3>
                  <p className="text-[#8892b0] text-sm leading-relaxed">{atuacao.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 05. Reconhecimentos */}
      <section id="reconhecimentos" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20 relative z-10">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-[#ccd6f6] whitespace-nowrap"><span className="text-blue-400 font-mono text-xl font-normal mr-2">05.</span>{t[lang].reconhecimentosTitulo}</h2>
            <div className="h-[1px] bg-gradient-to-r from-slate-700 to-transparent flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Publicacoes */}
            <div className="p-8 bg-[#112240] border border-slate-700/50 rounded-xl">
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-6 flex items-center gap-4">
                <div className="p-2.5 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <FaCertificate className="text-blue-400" size={20} />
                </div>
                {t[lang].publicacoesTitulo}
              </h3>

              <ul className="space-y-6 text-[#8892b0]">
                {publicacoesList.map((pub, idx) => (
                  <li key={idx} className="relative pl-5 border-l-2 border-slate-700/50 hover:border-blue-400 transition-colors">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-blue-400"></div>
                    <strong className="text-slate-200 block text-base mb-1">{pub.titulo}</strong>
                    <span className="block text-sm mb-3">{pub.local}</span>
                    <div className="flex flex-wrap gap-2">
                      {pub.badges.map(b => (
                        <span key={b} className="text-[10px] font-mono text-blue-300 bg-blue-900/30 px-2.5 py-1 rounded-full border border-blue-500/20">
                          {b}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premios */}
            <div className="p-8 bg-blue-900/10 border border-blue-500/20 rounded-xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <FaTrophy size={120} />
              </div>
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-6 flex items-center gap-4">
                <div className="p-2.5 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <FaTrophy className="text-blue-400" size={20} />
                </div>
                {t[lang].premiosTitulo}
              </h3>

              <ul className="space-y-6 text-[#8892b0] relative z-10">
                {premiosList.map((premio, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <div>
                      <strong className="text-slate-200 block text-base mb-1">{premio.titulo}</strong>
                      <span className="block text-sm text-blue-300 mb-1">{premio.local}</span>
                      <p className="text-sm">{premio.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 06. Contato Final */}
      <section id="contato" className="py-32 px-6 max-w-2xl mx-auto text-center scroll-mt-20 relative z-10">
        <motion.div {...fadeUp}>
          <p className="text-blue-400 font-mono mb-4">06. {t[lang].contatoSub}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">{t[lang].contatoTitulo}</h2>
          <p className="text-lg mb-10 leading-relaxed">
            {t[lang].contatoDesc}
          </p>

          <div className="flex items-center justify-center gap-6 mt-8">
            <a href="https://www.linkedin.com/in/queiroz-augusto/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-all hover:-translate-y-1">
              <FaLinkedin size={32} />
            </a>
            <a href="mailto:augusto_queiroz@id.uff.br" className="inline-block px-8 py-4 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all font-mono text-sm hover:shadow-lg hover:shadow-blue-500/10">
              {t[lang].btnContato}
            </a>
            <a href="https://github.com/AugustoQueiroz13" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-all hover:-translate-y-1">
              <FaGithub size={32} />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-sm font-mono text-slate-500 border-t border-slate-800/50">
        <p>{t[lang].rodape}</p>
      </footer>
    </div>
  );
}