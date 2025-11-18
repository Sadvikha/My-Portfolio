import React, { useState, useEffect } from 'react';
import { Lock, Cloud, ChevronRight, Mail, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, Code, Briefcase, User, Home, FolderOpen, Target, ChevronDown, ChevronUp, FileText } from 'lucide-react';

const Portfolio = () => {
  useEffect(() => {
    document.title = "Sadvikha’s Portfolio";
  }, []);

  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedExp, setExpandedExp] = useState({});

  // ⭐ NEW: FIXES SCROLL NOT RESETTING WHEN SWITCHING SECTIONS
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
    },
    {
      title: "AWS Cloud Intern",
      company: "All India Council for Technical Education (AICTE)",
      period: "Oct 2021 – Dec 2021",
      location: "India",
      type: "Internship",
      description: [
        "Gained hands-on experience in deploying and managing cloud infrastructure using EC2, S3, IAM, Lambda",
        "Built and tested scalable, serverless cloud applications using AWS Lambda, API Gateway, and DynamoDB",
        "Implemented cost optimization strategies and utilized AWS tools like CloudWatch and CloudTrail",
        "Developed understanding of cloud architecture, security best practices, and infrastructure as code (IaC)"
      ],
      technologies: ["AWS", "EC2", "S3", "Lambda", "DynamoDB", "CloudWatch", "CloudTrail"]
    },
    {
      title: "Data Science Intern",
      company: "Ethical Edufabrica Pvt. Ltd",
      period: "May 2021 – Jun 2021",
      location: "India",
      type: "Internship",
      description: [
        "Improved survival prediction accuracy by 90% through development of machine learning model",
        "Automated data integration processes, enhancing efficiency and reducing manual effort",
        "Optimized end-to-end data pipeline, resulting in faster and more accurate predictions"
      ],
      technologies: ["Python", "Machine Learning", "Data Pipeline", "Data Integration"]
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
      description: "Developed a location-based grocery platform with real-time inventory tracking and secure payment integration. Designed RESTful APIs and built scalable backend services for enhanced user experience.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      github: "https://github.com/Sadvikha/engrossery",
      live: null,
      image: "🛒",
      year: "2022",
      features: [
        "Location-based grocery delivery platform",
        "Real-time inventory tracking system",
        "Secure payment gateway integration",
        "Scalable RESTful API architecture"
      ]
    },
    {
      title: "License Plate Detection and Road Safety System",
      description: "Achieved 96.6% accuracy in license plate recognition using OCR and deep learning. Implemented noise reduction and tracking for traffic monitoring and road safety enhancement.",
      technologies: ["Python", "OpenCV", "Deep Learning", "OCR", "Computer Vision"],
      github: "https://github.com/Sadvikha/license-plate-detection",
      live: null,
      image: "🚗",
      year: "2023",
      features: [
        "96.6% accuracy in license plate recognition",
        "Advanced OCR and deep learning implementation",
        "Noise reduction and image processing",
        "Real-time traffic monitoring system"
      ]
    },
    {
      title: "Suspicious Login Detector",
      description: "Built a Python tool to analyze logs and detect brute-force attacks, off-hour access, and abnormal IP activity. Enhanced security monitoring and threat detection capabilities.",
      technologies: ["Python", "pandas", "geoip2", "python-dateutil", "Security Analytics"],
      github: "https://github.com/Sadvikha/suspicious-login-detector",
      live: null,
      image: "🔒",
      year: "2024",
      features: [
        "Brute-force attack detection",
        "Off-hour access pattern analysis",
        "Abnormal IP activity monitoring",
        "Automated security log analysis"
      ]
    },
    {
      title: "Drone Automation for Security & Surveillance",
      description: "Research project focusing on developing autonomous surveillance systems with sensor integration and path planning. Contributed to technical research, field testing, and data collection.",
      technologies: ["Python", "Drone Automation", "Sensor Integration", "Path Planning", "IoT"],
      github: null,
      live: null,
      image: "🚁",
      year: "2019-2021",
      features: [
        "Autonomous surveillance system development",
        "Advanced sensor integration",
        "Intelligent path planning algorithms",
        "Real-time data collection and analysis"
      ]
    }
  ];
  // ✨ Updated Certifications Section
  const certifications = [
    {
      title: "SailPoint Identity Security Leader Credential",
      issuer: "SailPoint Technologies",
      date: "2024",
      credentialId: "SISL-2024-001",
      description: "Advanced certification in identity governance and security leadership with SailPoint technologies.",
      badgeUrl: "/badges/sailpoint.png",
      credentialUrl: "https://badgr.com/public/assertions/O2y1qlb4S42k6PkINY0AFw"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-ARCH-2023-456",
      description: "Comprehensive training in AWS cloud architecture design and implementation best practices.",
      badgeUrl: "/badges/aws-architect.png",
      credentialUrl: "https://www.credly.com/badges/0b5d709e-b037-4bac-b288-912ffde939f6"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-FOUND-2023-789",
      description: "Foundational knowledge of AWS cloud services, security, and architectural principles.",
      badgeUrl: "/badges/aws-foundation.png",
      credentialUrl: "https://www.credly.com/earner/earned/badge/6e5e1f1c-af52-4293-a4fe-9f311e50446c"
    },

    {
      title: "Automation Anywhere Certified Advanced RPA Professional",
      issuer: "Automation Anywhere",
      date: "Jan 2023 – Jan 2025",
      credentialId: "AAADVCA360-66943888",
      badgeUrl: "/badges/automation-anywhere.png",
      credentialUrl: "https://certificates.automationanywhere.com/701f71b2-f734-4e6c-9da7-f78d42f514de#acc.ROqovQxE"
    },
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      date: "Feb 2023 – Feb 2025",
      credentialId: "17953379OCIF2022CA",
      badgeUrl: "/badges/oracle.png",
      credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D89B3180C0645A02A332DE7C7B11D73A975CBD21B0B2C2A87E3E91CA836EAF6C"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "Feb 2023",
      credentialId: "I633-0652",
      badgeUrl: "/badges/azure.png",
      credentialUrl: "https://www.credly.com/badges/53bbb2db-a984-4727-9849-5af0f66998cc/public_url"
    },
    {
      title: "Aviatrix Certified Engineer – Multi-Cloud Networking Associate",
      issuer: "Aviatrix",
      date: "Sep 2024",
      credentialId: "2021-13912",
      badgeUrl: "/badges/aviatrix.png",
      credentialUrl: "https://www.credly.com/badges/f59fc2fe-a7a0-4957-824c-8e3574258ad7/linked_in"
    },
    {
      title: "Credly-Badges",
      issuer: "Sources",
      date: "-",
      credentialId: "-",
      badgeUrl: "/badges/aviatrix.png",
      credentialUrl: "https://www.credly.com/users/sadvikha-m/badges#credly"
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

  // continuing with AboutPage, ExperiencePage, SkillsPage, ProjectsPage, CertificationsPage…
  // (the remaining sections continue exactly as Part 1 ended)

  // ⭐️ IMPORTANT: Replace all fixed heights in ProjectsPage:
  //    h-[520px] → h-auto sm:h-[520px]
  //    min-h-[400px] → h-auto sm:min-h-[400px]
  //    w-[250px] → w-full max-w-[250px]

  // ⭐️ ALSO: add `active:scale-95` to all hover card containers
  // ⭐️ ALSO: remove ANY fixed px heights that cause overflow on mobile

  // ⭐️ FINALLY — MAIN RETURN

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
