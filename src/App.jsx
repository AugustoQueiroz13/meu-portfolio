import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { SiJavascript, SiCplusplus, SiFigma, SiCoreldraw } from 'react-icons/si';
import {
  FaPython, FaReact, FaNodeJs, FaAws, FaLinux, FaDatabase, FaGitAlt,
  FaMicrochip, FaServer, FaNetworkWired, FaGithub, FaLinkedin, FaEnvelope,
  FaExternalLinkAlt, FaLaptopCode, FaRobot, FaGlobe, FaBookOpen,
  FaGraduationCap, FaBolt, FaTrophy, FaCertificate, FaUsers, FaStar,
  FaCompass, FaChevronDown, FaPalette
} from 'react-icons/fa';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projetos = [
    {
      titulo: "Bolsa Futuro Digital",
      tipo: "Plataforma de Portfólio",
      descricao: "Página desenvolvida para o programa Bolsa Futuro Digital, destacando projetos práticos e aplicações de tecnologias emergentes no ensino.",
      techs: ["HTML", "CSS", "JavaScript"],
      link: "https://augustoqueiroz13.github.io/projetofinalbfdpetropolis/",
      imagem: "https://hermes.dio.me/assets/articles/c4dc8d70-1e9a-408e-8c8e-c68f90541283.png",
      icone: <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><FaGraduationCap className="text-blue-400" size={24} /></div>
    },
    {
      titulo: "Nascente Pequena",
      tipo: "Site Institucional",
      descricao: "Portal da Associação Cultural Nascente Pequena, focado em dar visibilidade a projetos sociais, oficinas e iniciativas de desenvolvimento comunitário.",
      techs: ["Web", "Design UI/UX", "Frontend"],
      link: "https://www.nascentepequena.org.br",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/nascentepequena.jpg",
      icone: <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><FaGlobe className="text-blue-400" size={24} /></div>
    },
    {
      titulo: "Céu da Águia Dourada",
      tipo: "Plataforma Institucional",
      descricao: "Plataforma responsiva desenvolvida para a instituição. Projetada com foco em acessibilidade, identidade visual e gestão eficiente de conteúdo.",
      techs: ["WordPress", "Web Design", "CMS"],
      link: "https://www.ceudaaguiadourada.com.br",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/ceudaaguiadourada.jpg",
      icone: <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><FaGlobe className="text-blue-400" size={24} /></div>
    },
    {
      titulo: "Robótica ACNP",
      tipo: "Ambiente Virtual",
      descricao: "Plataforma E-learning dedicada ao ensino prático de robótica educacional, com módulos interativos para lógica de programação e cultura maker.",
      techs: ["E-learning", "Plataforma", "Web"],
      link: "https://roboticaacnp.com.br/educacional",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/roboticaeducacional.jpg",
      icone: <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><FaRobot className="text-blue-400" size={24} /></div>
    },
    {
      titulo: "Gráfica Delivery",
      tipo: "Sistema Administrativo",
      descricao: "Sistema de gestão e portal online para serviços gráficos, focado na otimização do fluxo de pedidos e acompanhamento de produção.",
      techs: ["Sistema Web", "Backend", "E-commerce"],
      link: "http://www.graficadelivery.com",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/graficadelivery.jpg",
      icone: <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><FaLaptopCode className="text-blue-400" size={24} /></div>
    },
    {
      titulo: "Guia Guapimirim",
      tipo: "Portal de Informações",
      descricao: "Portal dinâmico de turismo, comércio e serviços locais. Projetado para valorizar a cidade de Guapimirim e facilitar o acesso à informação.",
      techs: ["React", "Frontend", "Vercel"],
      link: "https://guapimirim-portal.vercel.app/a-cidade",
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/guiaguapimirim.jpg",
      icone: <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><FaGlobe className="text-blue-400" size={24} /></div>
    },
    {
      titulo: "Sistema Dualy",
      tipo: "Sistema Web",
      descricao: "Plataforma completa para gestão e operações. Arquitetada com foco em estabilidade e usabilidade intuitiva para o usuário final.",
      techs: ["Web", "Sistema", "UI/UX"],
      link: "https://www.dualy.app.br",
      imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      icone: <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><FaLaptopCode className="text-blue-400" size={24} /></div>
    },
    {
      titulo: "Lógica e Código",
      tipo: "Publicação Científica",
      descricao: "Obra didática sobre os fundamentos da programação em Python com IA. Um guia estruturado passo a passo para o desenvolvimento do raciocínio lógico.",
      techs: ["Python", "IA", "Material Didático"],
      link: null,
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/logicaecodigo.jpg",
      icone: <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><FaBookOpen className="text-blue-400" size={24} /></div>
    },
    {
      titulo: "Monitoramento IoT (FAPERJ)",
      tipo: "Sistema Embarcado",
      descricao: "Projeto financiado pela FAPERJ de um medidor digital de energia com análise econômica. Captura e transmite dados de consumo em tempo real.",
      techs: ["C++", "IoT", "Sensores"],
      link: null,
      imagem: "https://raw.githubusercontent.com/AugustoQueiroz13/meu-portfolio/refs/heads/main/public/projetoiotfaperj.jfif",
      icone: <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><FaMicrochip className="text-blue-400" size={24} /></div>
    }
  ];

  const hardSkills = [
    { nome: 'Python', icone: <FaPython className="text-blue-500" size={22} /> },
    { nome: 'JavaScript', icone: <SiJavascript className="text-yellow-400" size={20} /> },
    { nome: 'C++', icone: <SiCplusplus className="text-blue-600" size={20} /> },
    { nome: 'React', icone: <FaReact className="text-cyan-400" size={22} /> },
    { nome: 'Node.js', icone: <FaNodeJs className="text-green-500" size={22} /> },
    { nome: 'UX/UI Design', icone: <FaPalette className="text-pink-400" size={20} /> },
    { nome: 'Figma', icone: <SiFigma className="text-purple-400" size={20} /> },
    { nome: 'Corel Draw', icone: <SiCoreldraw className="text-green-400" size={20} /> },
    { nome: 'Banco de Dados', icone: <FaDatabase className="text-indigo-400" size={20} /> },
    { nome: 'AWS', icone: <FaAws className="text-orange-400" size={22} /> },
    { nome: 'Linux', icone: <FaLinux className="text-slate-200" size={22} /> },
    { nome: 'Git', icone: <FaGitAlt className="text-red-500" size={22} /> },
    { nome: 'IoT', icone: <FaMicrochip className="text-teal-400" size={22} /> },
    { nome: 'Servidores', icone: <FaServer className="text-gray-400" size={20} /> },
    { nome: 'Redes', icone: <FaNetworkWired className="text-blue-300" size={20} /> }
  ];

  const publicacoesList = [
    {
      titulo: "Curso de Robótica Educacional",
      local: "Fundamentos e Projetos Práticos com Arduino",
      badges: ["Livro Físico", "ISBN 978-65-01-86884-4"]
    },
    {
      titulo: "Lógica e Código",
      local: "Fundamentos da Programação em Python com IA",
      badges: ["Livro Físico", "ISBN 978-65-01-81911-2"]
    },
    {
      titulo: "Medidor de Energia Elétrica Digital com Monitoração Econômica",
      local: "VI Feira Brasileira de Ciências e Engenharia, FEBRACE",
      badges: ["Anais e Feira", "ISBN 978-85-86686-47-4"]
    },
    {
      titulo: "Automação do Sistema de Fornecimento de Energia Elétrica Pública",
      local: "9ª e 10ª Bienal de Arte, Ciência e Cultura da UNE",
      badges: ["Anais de Congresso", "ISBN 9788561839215 / 9788561839178"]
    },
    {
      titulo: "Automatização do Sistema de Fornecimento de Energia Elétrica Pública",
      local: "13º e 14º Congresso Nacional de Iniciação Científica, CONIC SEMESP",
      badges: ["Anais de Congresso", "ISSN 2357-8904"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] font-sans selection:bg-blue-400/30 selection:text-blue-200">

      {/* Navegação Flutuante */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/80 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-blue-400 font-mono font-bold text-2xl tracking-tighter hover:text-white transition-colors cursor-pointer">
            AQ.
          </div>
          <div className="hidden md:flex gap-6 font-mono text-sm">
            {['Sobre', 'Projetos', 'Formação', 'Reconhecimentos', 'Destaques', 'Contato'].map((item, i) => (
              <a key={item} href={`#${item.toLowerCase().replace('ç', 'c').replace('ã', 'a')}`} className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <span className="text-blue-400">0{i + 1}.</span> {item}
              </a>
            ))}
          </div>
        </div>
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
            <p className="text-blue-400 font-mono text-lg ml-1">Olá, meu nome é</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] tracking-tight">
              Augusto Queiroz
            </h1>
            <div className="text-3xl md:text-5xl font-bold h-[60px] md:h-[80px]">
              <TypeAnimation
                sequence={[
                  'Eu construo sistemas para a web',
                  1500,
                  'Eu desenvolvo hardware e IoT',
                  1500,
                  'Eu ensino robótica e programação',
                  1500,
                  'Eu exploro dados e IA',
                  1500,
                  'Eu monto redes e infraestruturas',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-400"
              />
            </div>
            <p className="text-lg max-w-xl leading-relaxed mt-4"><br></br>
              Sou especialista em Engenharia da Computação, Desenvolvedor Full-Stack e Educador.
              Meu foco é criar soluções tecnológicas eficientes, explorar a ciência de dados e formar novos talentos em tecnologia.
            </p>

            <div className="flex gap-6 pt-8">
              <a href="https://github.com/AugustoQueiroz13" target="_blank" rel="noreferrer" className="p-3 bg-[#112240] rounded-lg border border-slate-700 hover:border-blue-400 text-[#ccd6f6] hover:text-blue-400 transition-all shadow-lg hover:shadow-blue-500/20">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/queiroz-augusto/" target="_blank" rel="noreferrer" className="p-3 bg-[#112240] rounded-lg border border-slate-700 hover:border-blue-400 text-[#ccd6f6] hover:text-blue-400 transition-all shadow-lg hover:shadow-blue-500/20">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:augusto_queiroz@id.uff.br" className="p-3 bg-[#112240] rounded-lg border border-slate-700 hover:border-blue-400 text-[#ccd6f6] hover:text-blue-400 transition-all shadow-lg hover:shadow-blue-500/20">
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 border-2 border-blue-400 rounded-lg translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
            <img
              src="https://roboticaacnp.com.br/educacional/professor.jpg"
              alt="Augusto Queiroz"
              className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
            />
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blue-400/50"
        >
          <FaChevronDown size={28} />
        </motion.div>
      </section>

      {/* 01. Sobre */}
      <section id="sobre" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-[#ccd6f6]"><span className="text-blue-400 font-mono text-xl font-normal mr-2">01.</span>Sobre mim</h2>
            <div className="h-[1px] bg-slate-700 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-4 text-lg leading-relaxed">
              <p>
                Trabalho na interseção entre o <span className="text-blue-400 font-semibold">desenvolvimento de software</span>, a <span className="text-blue-400 font-semibold">engenharia da computação</span> e a <span className="text-blue-400 font-semibold">educação</span>. Tenho facilidade em transitar do <span className="text-blue-400 font-semibold">código front-end e back-end até o hardware físico</span>, resolvendo problemas complexos com código limpo e eficiente.
              </p>
              <p>
                Já atuei com TI na iniciativa privada, no setor público e no terceiro setor. Essa vivência me deu uma visão ampla sobre como aplicar a tecnologia em diferentes cenários. Além da programação, possuo experiência prática em <span className="text-blue-400 font-semibold">design gráfico</span> e <span className="text-blue-400 font-semibold">UX/UI</span>, dominando ferramentas para a criação de <span className="text-blue-400 font-semibold">arte final em materiais impressos e digitais</span>. Hoje, divido meu tempo entre construir soluções digitais e liderar iniciativas educacionais, ensinando <span className="text-blue-400 font-semibold">robótica e programação</span>.
              </p>
              <p>
                Acredito muito no poder da tecnologia na educação. Sou <span className="text-blue-400 font-semibold">autor de materiais didáticos</span> onde ensino sobre tecnologia, e dedico parte do meu tempo como <span className="text-blue-400 font-semibold">Squad Leader no Code Club Brasil</span>, além de atuar ativamente no Movimento Escoteiro e como músico percussionista.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="bg-[#112240] p-6 rounded-lg border border-slate-700/50 shadow-xl">
                <div className="flex gap-2 mb-6 border-b border-slate-700 pb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-blue-400 font-mono text-sm mb-4">augusto@tech:~$ ls stack_principal/</p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hardSkills.map((skill, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.05, x: 2 }}
                      className="flex flex-col items-center justify-center gap-2 bg-[#0a192f] p-3 rounded border border-slate-700/50 hover:border-blue-400/50 transition-colors cursor-default text-center"
                    >
                      {skill.icone}
                      <span className="font-sans text-xs text-[#ccd6f6]">{skill.nome}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 02. Projetos */}
      <section id="projetos" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-[#ccd6f6]"><span className="text-blue-400 font-mono text-xl font-normal mr-2">02.</span>Alguns trabalhos</h2>
            <div className="h-[1px] bg-slate-700 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-[#112240] rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/30 transition-all group flex flex-col h-full shadow-lg"
              >
                {/* Imagem do Projeto */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <p className="font-mono text-blue-400/80 text-xs">{projeto.tipo}</p>
                    {projeto.link && (
                      <a href={projeto.link} target="_blank" rel="noreferrer" className="p-2 bg-[#0a192f] rounded border border-slate-700 hover:border-blue-400 text-slate-400 hover:text-blue-400 transition-colors">
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-3 group-hover:text-blue-400 transition-colors">{projeto.titulo}</h3>
                  <p className="text-sm text-[#8892b0] mb-6 flex-grow leading-relaxed">
                    {projeto.descricao}
                  </p>

                  <ul className="flex flex-wrap gap-2 font-mono text-[10px] text-slate-400 mt-auto">
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

      {/* 03. Formação Acadêmica */}
      <section id="formacao" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-[#ccd6f6]"><span className="text-blue-400 font-mono text-xl font-normal mr-2">03.</span>Formação Acadêmica</h2>
            <div className="h-[1px] bg-slate-700 flex-grow"></div>
          </div>

          <div className="relative border-l border-slate-700/50 ml-4 md:ml-6 space-y-12">

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[23px] top-0 bg-[#0a192f] p-2 rounded-full border border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <FaDatabase size={16} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">Bussiness Intelligence, Big Data e Inteligencia Artificial</h3>
              <p className="text-blue-400 font-mono text-sm mb-3">Pós-graduação, Especialização | Faculdade Focus</p>
              <p className="text-[#8892b0] text-sm leading-relaxed">Especialização em análise de grandes volumes de dados, modelagem preditiva e soluções baseadas em inteligência artificial, permitindo decisões automatizadas, previsões de tendências e personalização de serviços.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[23px] top-0 bg-[#0a192f] p-2 rounded-full border border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <FaMicrochip size={16} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">Engenharia da Computação</h3>
              <p className="text-blue-400 font-mono text-sm mb-3">Pós-graduação, Especialização | Faculdade Focus</p>
              <p className="text-[#8892b0] text-sm leading-relaxed">Formação avançada no desenvolvimento e integração de sistemas de hardware, inteligência artificial, robótica, sistemas embarcados e redes para resolver problemas complexos.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[23px] top-0 bg-[#0a192f] p-2 rounded-full border border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <FaGraduationCap size={16} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">Análise e Desenvolvimento de Sistemas</h3>
              <p className="text-blue-400 font-mono text-sm mb-3">Graduação, Tecnólogo | UNICV - Centro Universitário Cidade Verde</p>
              <p className="text-[#8892b0] text-sm leading-relaxed">Graduação focada em projeto, desenvolvimento, implementação e manutenção de softwares envolvendo análise de requisitos, bancos de dados, modelagem de sistemas e gestão de projetos.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[23px] top-0 bg-[#0a192f] p-2 rounded-full border border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <FaBolt size={16} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">Eletrônica</h3>
              <p className="text-blue-400 font-mono text-sm mb-3">Ensino Técnico | CQT - Centro de Qualificação Técnica de Nova Friburgo</p>
              <p className="text-[#8892b0] text-sm leading-relaxed">Formação técnica com base sólida em circuitos eletrônicos, manutenção de hardware, sensores e introdução a sistemas embarcados com ênfase em controle de processos industriais.</p>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* 04. Reconhecimentos */}
      <section id="reconhecimentos" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-[#ccd6f6]"><span className="text-blue-400 font-mono text-xl font-normal mr-2">04.</span>Reconhecimentos</h2>
            <div className="h-[1px] bg-slate-700 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Prêmios */}
            <div className="p-8 bg-blue-900/10 border border-blue-500/20 rounded-xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaTrophy size={120} />
              </div>
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-6 flex items-center gap-4">
                <div className="p-2.5 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <FaTrophy className="text-blue-400" size={20} />
                </div>
                Prêmios e Certificações
              </h3>

              <ul className="space-y-6 text-[#8892b0] relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <div>
                    <strong className="text-slate-200 block text-base mb-1">Olympic Certificate, Rio 2016</strong>
                    <span className="block text-sm text-blue-300 mb-1">Atos Worldwide IT Partner</span>
                    <p className="text-sm">Reconhecimento pela contribuição técnica e sucesso operacional durante os Jogos Olímpicos do Rio de Janeiro.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <div>
                    <strong className="text-slate-200 block text-base mb-1">1º Lugar, Iniciação Científica</strong>
                    <span className="block text-sm text-blue-300 mb-1">V Congresso da Faculdade Redentor</span>
                    <p className="text-sm">Melhor trabalho eleito com o projeto do Medidor Digital de Energia Elétrica com Monitoração Econômica.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <div>
                    <strong className="text-slate-200 block text-base mb-1">Prêmio Nacional de Inovação Atech</strong>
                    <span className="block text-sm text-blue-300 mb-1">VI FEBRACE, Fundação Atech</span>
                    <p className="text-sm">Vencedor nacional da categoria de inovação com o projeto do Medidor Digital de Energia Elétrica.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <div>
                    <strong className="text-slate-200 block text-base mb-1">Diploma de Jovem Revelação</strong>
                    <span className="block text-sm text-blue-300 mb-1">Rotary Club de Guapimirim Dedo de Deus</span>
                    <p className="text-sm">Homenagem pelo destaque e sucesso alcançado na Feira Brasileira de Ciências e Engenharia.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <div>
                    <strong className="text-slate-200 block text-base mb-1">Moção de Aplausos</strong>
                    <span className="block text-sm text-blue-300 mb-1">Câmara Municipal de Guapimirim</span>
                    <p className="text-sm">Honraria concedida por representar o município e conquistar o prêmio nacional de inovação na FEBRACE.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Publicações */}
            <div className="p-8 bg-[#112240] border border-slate-700/50 rounded-xl">
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-6 flex items-center gap-4">
                <div className="p-2.5 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <FaCertificate className="text-blue-400" size={20} />
                </div>
                Publicações e Artigos
              </h3>

              <ul className="space-y-6 text-[#8892b0]">
                {publicacoesList.map((pub, idx) => (
                  <li key={idx} className="relative pl-5 border-l-2 border-slate-700/50 hover:border-blue-400 transition-colors">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-blue-400"></div>
                    <strong className="text-slate-200 block text-base mb-1">{pub.titulo}</strong>
                    <span className="block text-sm mb-3">{pub.local}</span>
                    <div className="flex flex-wrap gap-2">
                      {pub.badges.map(b => (
                        <span key={b} className="text-[10px] font-mono text-blue-300 bg-blue-900/30 px-2.5 py-1 rounded border border-blue-500/20">
                          {b}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 05. Destaques / Atribuições */}
      <section id="destaques" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-[#ccd6f6]"><span className="text-blue-400 font-mono text-xl font-normal mr-2">05.</span>Destaques</h2>
            <div className="h-[1px] bg-slate-700 flex-grow"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#112240] p-6 rounded-lg border border-slate-700/50 flex gap-6 items-center hover:border-blue-400/30 transition-colors">
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 hidden md:flex items-center justify-center">
                <FaUsers size={28} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">Squad Leader & Instrutor, Code Club Brasil</h3>
                <p className="text-[#8892b0] leading-relaxed">Coordenação de líderes regionais e ensino de programação (Scratch, Python, HTML/CSS) para crianças, expandindo o alcance do projeto no Brasil.</p>
              </div>
            </div>

            <div className="bg-[#112240] p-6 rounded-lg border border-slate-700/50 flex gap-6 items-center hover:border-blue-400/30 transition-colors">
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 hidden md:flex items-center justify-center">
                <FaStar size={28} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">Juiz de Arena FLL, Torneio SESI de Robótica</h3>
                <p className="text-[#8892b0] leading-relaxed">Atuação voluntária como juiz oficial no maior torneio de robótica LEGO (First LEGO League) do Brasil, avaliando projetos e robôs.</p>
              </div>
            </div>

            <div className="bg-[#112240] p-6 rounded-lg border border-slate-700/50 flex gap-6 items-center hover:border-blue-400/30 transition-colors">
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 hidden md:flex items-center justify-center">
                <FaCompass size={28} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">Chefe Escoteiro do Mar</h3>
                <p className="text-[#8892b0] leading-relaxed">Atuação de liderança no 143º Grupo de Escoteiros do Mar (Guapimirim/RJ), guiando jovens no desenvolvimento de habilidades práticas e valores do Movimento Escoteiro.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 06. Contato Final */}
      <section id="contato" className="py-32 px-6 max-w-2xl mx-auto text-center scroll-mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-blue-400 font-mono mb-4">06. O que vem a seguir?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">Entre em Contato</h2>
          <p className="text-lg mb-10 leading-relaxed">
            Seja para discutir uma oportunidade, trocar ideias sobre tecnologia ou conversar sobre robótica educacional, minha caixa de entrada está sempre aberta.
          </p>
          <a href="mailto:augusto_queiroz@id.uff.br" className="inline-block px-8 py-4 border border-blue-400 text-blue-400 rounded hover:bg-blue-400/10 transition-colors font-mono text-sm">
            Diga Olá
          </a>
        </motion.div>
      </section>

      <footer className="py-6 text-center text-sm font-mono text-slate-500">
        <p>Desenvolvido por Augusto Queiroz.</p>
      </footer>
    </div>
  );
}