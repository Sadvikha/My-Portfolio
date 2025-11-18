import React, { useState, useEffect } from 'react';
import { Lock, Cloud, ChevronRight, Mail, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, Code, Briefcase, User, Home, FolderOpen, Target, ChevronDown, ChevronUp } from 'lucide-react';

const Portfolio = () => {
  useEffect(() => {
    document.title = "Sadvikha’s Portfolio";
  }, []);

  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedExp, setExpandedExp] = useState({});

  // ⭐ FIX: Scroll resets when section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 300);
  };

  const toggleExpand = (index) => {
    setExpandedExp(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const personalInfo = {
    name: "Sadvikha M",
    title: "Software Engineer | SailPoint IIQ & IDN | Full Stack Developer",
    subtitle: "Passionate about building secure, scalable, and efficient solutions that solve problems that matter",
    email: "sadvikha.mannepalli@gmail.com",
    location: "India",
    github: "https://github.com/Sadvikha",
    linkedin: "https://linkedin.com/in/sadvikha-m",
    profileImage: "./sa1.jpg"
  };

  const aboutContent = `Technology is not just about building systems. It is about solving problems that matter. I help organizations overcome complex technology challenges by building secure, scalable, and efficient solutions, combining deep technical expertise with a passion for solving problems that matter.

I currently work as a Software Engineer at Triquinix Solutions, implementing identity and access management with SailPoint IIQ & IDN, automating workflows, access reviews, and policy enforcement, and building custom rules using Java and BeanShell, integrating with Active Directory and AWS to improve efficiency, compliance, and audit readiness.

Previously, I worked as a Software Engineer at PIL Gaming, building full-stack web applications with React.js, Node.js, and MySQL, developing scalable APIs and microservices. I have internship experience in AWS Cloud and Data Science, contributed to a research paper on drone automation, and was a Teaching Assistant at KL University, mentoring students in Data Science and Big Data Analytics.

My academic foundation in Computer Science with a specialization in Data Science and Big Data Analytics, combined with certifications in AWS, Azure, Oracle Cloud, and Identity Security Leader, reflects my commitment to continuous learning and adaptability.`;

  const experience = [
    {
      title: "Software Engineer",
      company: "Triquinix Solutions",
      period: "Oct 2024 – Present",
      location: "Hyderabad, India",
      type: "Full-time",
      description: [
        "Designed and implemented identity lifecycle management, access reviews, and role-based provisioning using SailPoint IdentityIQ & IdentityNow",
        "Automated provisioning workflows and policy enforcement using Java and BeanShell, improving efficiency and compliance",
        "Integrated SailPoint IIQ & IDN with external systems including Active Directory and AWS, enabling centralized identity management",
        "Collaborated with security teams to align IAM strategy with organizational compliance and audit requirements"
      ],
      technologies: ["SailPoint IdentityIQ", "SailPoint IdentityNow", "Java", "BeanShell", "MySQL", "AWS", "REST/SOAP APIs", "Active Directory", "LDAP", "XML", "JavaScript"]
    },
    {
      title: "Software Engineer",
      company: "PIL Gaming",
      period: "May 2023 – Sep 2024",
      location: "Hyderabad, India",
      type: "Full-time",
      description: [
        "Developed and deployed scalable web applications for gamified learning and entertainment, improving responsiveness and user engagement",
        "Built responsive frontend components with React.js and backend services using Node.js and MySQL",
        "Integrated third-party APIs and deployed continuous updates through AWS, enhancing platform stability",
        "Designed and developed full-stack web applications enhancing user experience and system scalability"
      ],
      technologies: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "AWS", "MySQL", "REST APIs"]
    },
    {
      title: "Teaching Assistant",
      company: "KL University",
      period: "Sep 2021 – Oct 2022",
      location: "India",
      type: "Part-time",
      description: [
        "Mentored students in Data Science and Big Data Analytics, helping them grasp machine learning concepts",
        "Assisted with lab sessions and guided on big data technologies, ensuring hands-on experience with industry-standard tools",
        "Applied data analysis techniques to real-world problems and supervised student projects"
      ],
      technologies: ["Python", "Machine Learning", "Big Data Analytics", "Data Science"]
    }
  ];

  const skills = {
    "Languages & Frameworks": [
      "Java", "Python", "JavaScript", "TypeScript", "C++", "SQL",
      "React.js", "Node.js", "Spring Boot", "Express.js", "Tailwind CSS"
    ],
    "Identity & Access Management": [
      "SailPoint IdentityIQ", "SailPoint IdentityNow", "BeanShell Scripting",
      "Active Directory", "LDAP", "IAM"
    ],
    "Cloud & Backend": [
      "AWS", "Azure", "Kubernetes", "Docker", "MySQL", "PostgreSQL",
      "MongoDB", "Redis", "RESTful APIs", "CI/CD"
    ],
    "Tools & Other": [
      "Git", "Maven", "JIRA", "IntelliJ IDEA", "VS Code",
      "Postman", "Jenkins", "Terraform"
    ]
  };

  const projects = [
    {
      title: "Engrossery – Grocery E-commerce Web Application",
      description: "Developed a location-based grocery platform with real-time inventory tracking and secure payment integration.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      github: "https://github.com/Sadvikha/engrossery",
      live: null,
      image: "🛒",
      year: "2022",
      features: [
        "Location-based grocery delivery",
        "Real-time inventory tracking",
        "Secure payment gateway",
        "Scalable API architecture"
      ]
    }
  ];

  const certifications = [
    {
      title: "SailPoint Identity Security Leader Credential",
      issuer: "SailPoint Technologies",
      date: "2024",
      badgeUrl: "/badges/sailpoint.png",
      credentialUrl: "https://badgr.com/public/assertions/O2y1qlb4S42k6PkINY0AFw"
    },
    {
      title: "AWS Academy Graduate - Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "2023",
      badgeUrl: "/badges/aws-architect.png",
      credentialUrl: "https://www.credly.com/badges/0b5d709e-b037-4bac-b288-912ffde939f6"
    }
  ];

  const Navigation = () => (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-700">
      <div className="flex space-x-3">
        {[
          { id: 'home', label: 'Home', icon: Home },
          { id: 'about', label: 'About', icon: User },
          { id: 'experience', label: 'Experience', icon: Briefcase },
          { id: 'skills', label: 'Skills', icon: Target },
          { id: 'projects', label: 'Projects', icon: FolderOpen },
          { id: 'certifications', label: 'Certifications', icon: Award }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => navigateTo(id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 active:scale-95 ${currentPage === id
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
          >
            <Icon size={16} />
            <span className="text-sm font-medium hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-40 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="relative group w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-400 bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)] mb-6">
            <img
              src={personalInfo.profileImage}
              alt="Sadvikha M"
              className="text-gray-400 hover:text-green-400 transition-all duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-4xl font-bold">SM</div>';
              }}
            />
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-400">Sadvikha M</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-300 mb-4">{personalInfo.title}</h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {personalInfo.subtitle}
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => navigateTo('projects')}
            className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-blue-700 active:scale-95 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <span>View My Work</span>
            <ChevronRight size={16} />
          </button>

          <button
            onClick={() => navigateTo('about')}
            className="border border-gray-600 text-gray-300 px-6 sm:px-8 py-3 rounded-full hover:bg-gray-800 active:scale-95 transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full">

          <div className="text-center">
            <div className="bg-blue-900/50 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-blue-400" size={22} />
            </div>
            <h3 className="font-semibold text-white mb-2">Identity & Access</h3>
            <p className="text-gray-400 text-sm">SailPoint IIQ & IDN specialist</p>
          </div>

          <div className="text-center">
            <div className="bg-green-900/50 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-green-400" size={22} />
            </div>
            <h3 className="font-semibold text-white mb-2">Full Stack Dev</h3>
            <p className="text-gray-400 text-sm">Building scalable applications</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-900/50 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="text-purple-400" size={22} />
            </div>
            <h3 className="font-semibold text-white mb-2">Cloud & DevOps</h3>
            <p className="text-gray-400 text-sm">AWS certified cloud architect</p>
          </div>

        </div>
      </div>
    </div>
  );
  const AboutPage = () => (
    <div className="min-h-screen py-20 bg-gray-900 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-lg text-gray-400">Get to know more about my journey</p>
        </div>

        <div className="prose text-gray-300 space-y-4 max-w-none">
          {aboutContent.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 space-y-4 text-gray-300">
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-400" size={20} />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-400" size={20} />
            <span>{personalInfo.location}</span>
          </div>

          <div className="flex space-x-4 pt-4">
            <a href={personalInfo.github} target="_blank" className="text-gray-400 hover:text-white"><Github size={24} /></a>
            <a href={personalInfo.linkedin} target="_blank" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  );

  const ExperiencePage = () => (
    <div className="min-h-screen py-20 bg-gray-800 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
          <p className="text-lg text-gray-400">My professional journey</p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => {
            const isExpanded = expandedExp[index];
            const shouldTruncate = exp.description.length > 3;
            const displayItems =
              isExpanded || !shouldTruncate ? exp.description : exp.description.slice(0, 3);

            return (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700 h-auto sm:min-h-[400px] hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>

                  <div className="mt-4 md:mt-0 text-right">
                    <div className="flex items-center space-x-2 text-gray-400 mb-2 justify-end">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <div className="bg-blue-900 text-blue-300 px-4 py-1 rounded-full text-sm text-center">
                      {exp.type}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {displayItems.map((item, i2) => (
                      <li key={i2} className="text-gray-300 flex items-start text-sm">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {shouldTruncate && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-400 text-sm mt-3 flex items-center space-x-1"
                    >
                      <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, t) => (
                    <span key={t} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div className="min-h-screen py-20 bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Skills</h1>
          <p className="text-lg text-gray-400">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, list], index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 active:scale-95 hover:scale-[1.03] transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">{category}</h2>

              <div className="flex flex-wrap gap-3">
                {list.map((skill, si) => (
                  <span key={si} className="bg-gray-900 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="min-h-screen py-20 bg-gray-800 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-lg text-gray-400">A showcase of my work</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, pi) => (
            <div
              key={pi}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-700 h-auto sm:h-[520px] hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-20 flex items-center justify-center">
                <span className="text-4xl">{project.image}</span>
              </div>

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">{project.year}</span>
                </div>

                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{project.description}</p>

                <div className="flex-1 overflow-y-auto max-h-[110px] mb-4 pr-1">
                  <h4 className="font-medium text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.features.map((f, fi) => (
                      <li key={fi} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, ti) => (
                      <span key={ti} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.github && (
                      <a href={project.github} target="_blank" className="flex items-center space-x-2 text-blue-400">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CertificationsPage = () => (
    <div className="min-h-screen py-20 bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Certifications</h1>
          <p className="text-lg text-gray-400">Professional credentials & achievements</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, ci) => (
            <div
              key={ci}
              className="w-full max-w-[250px] mx-auto bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 hover:scale-[1.03] active:scale-95 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center mb-6">
                <img src={cert.badgeUrl} alt={cert.title} className="w-14 h-14 object-contain" />
              </div>

              <h3 className="text-base font-semibold text-white text-center mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm text-center mb-4">{cert.issuer}</p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                className="block text-center px-4 py-2 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-800 transition-all"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'experience': return <ExperiencePage />;
      case 'skills': return <SkillsPage />;
      case 'projects': return <ProjectsPage />;
      case 'certifications': return <CertificationsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="relative bg-gray-900 min-h-screen">
      <Navigation />
      {isLoading && <LoadingSpinner />}
      <main className="pt-20">
        {renderPage()}
      </main>
    </div>
  );
};

export default Portfolio;
