import React, { useState, useEffect  } from 'react';
import { Lock, Cloud, ChevronRight, Mail, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, Code, Briefcase, User, Home, FolderOpen, Target, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import sailpointLogo from './assets/sailpoint.png';
import oracleLogo from './assets/oracle.png';
import aviatrix from './assets/aviatrix.png';

const Portfolio = () => {
  useEffect(() => {
  document.title = "Sadvikha’s Portfolio";
}, []);
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedExp, setExpandedExp] = useState({});

      // ✅ FIX: Reset scroll on page change
  useEffect(() => { window.scrollTo(0, 0);}, [currentPage]);
  
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
      description: "A full-stack grocery e-commerce application built around practical user and seller interaction flows. The platform demonstrates structured API design, data-driven operations, and frontend-backend coordination in a production-style setup.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      github: "https://github.com/Sadvikha/Engrossery_",
      live: null,
      image: "🛒",
      year: "2022",
      features: [
        "End-to-end user and seller interaction workflows",
        "Data-driven product, cart, and order handling",
        "Clean separation between frontend logic and backend services",
        "Scalable request–response patterns using RESTful APIs",
        "Responsive and consistent UI across devices"
      ]
    },
    {
      title: "License Plate Detection and Road Safety System",
      description: "A computer vision project focused on automated license plate recognition from images and videos.The system applies preprocessing, OCR, and deep learning techniques to extract structured information from unstructured visual data.",
      technologies: ["Python", "OpenCV", "Deep Learning", "OCR", "Computer Vision"],
      github: "https://github.com/Sadvikha/License-Plate-Detection-and-Road-Safety-System",
      live: null,
      image: "🚗",
      year: "2023",
      features: [
        "Automated detection of license plates from visual inputs",
        "Image preprocessing and noise reduction for improved recognition",
        "OCR-based extraction of alphanumeric plate data",
        "Frame-wise analysis for video-based inputs",
        "Structured output generation for downstream analysis"
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
        "Automated security log analysis", 
        "Email alerts with attached reports of suspicious activity"
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
    // Existing Certifications
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
    /*{
      title: "Excellence in Hackathon",
      issuer: "KL University",
      date: "2022",
      credentialId: "KLU-HACK-2022-890",
      description: "Certificate of excellence and memento for outstanding performance in university hackathon.",
      badgeUrl: "/badges/hackathon.png",
      credentialUrl: "#"
    },*/

    // ✅ New Credly Certifications
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
            className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${currentPage === id
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
          <div className="relative group w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-400 bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)] mb-6">
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
          <h1 className="text-5xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-400">Sadvikha M</span>
          </h1>
          <h2 className="text-2xl text-gray-300 mb-6">{personalInfo.title}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {personalInfo.subtitle}
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => navigateTo('projects')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <span>View My Work</span>
            <ChevronRight size={16} />
          </button>
          <button
            onClick={() => navigateTo('about')}
            className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {/* Identity & Access Management */}
          <div className="text-center">
            <div className="bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-blue-400" size={24} />
            </div>
            <h3 className="font-semibold text-white mb-2">Identity & Access Management</h3>
            <p className="text-gray-400 text-sm">
              SailPoint IIQ & IDN specialist with enterprise security focus
            </p>
          </div>

          {/* Full Stack Development */}
          <div className="text-center">
            <div className="bg-green-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-green-400" size={24} />
            </div>
            <h3 className="font-semibold text-white mb-2">Full Stack Development</h3>
            <p className="text-gray-400 text-sm">
              Building scalable web applications with modern technologies
            </p>
          </div>

          {/* Cloud & DevOps */}
          <div className="text-center">
            <div className="bg-purple-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="text-purple-400" size={24} />
            </div>
            <h3 className="font-semibold text-white mb-2">Cloud & DevOps</h3>
            <p className="text-gray-400 text-sm">
              AWS certified with expertise in cloud architecture
            </p>
          </div>
        </div>
      </div>
    </div>
  );


  const AboutPage = () => (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-lg text-gray-400">Get to know more about my background and journey</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">My Story</h2>
            <div className="prose text-gray-300 space-y-4">
              {aboutContent.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={20} />
                <span className="text-gray-300">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-400" size={20} />
                <span className="text-gray-300">{personalInfo.location}</span>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/Sadvikha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300">
                  <Github size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/sadvikha-m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300">
                  <Linkedin size={24} />
                </a>

                <a
                  href="https://drive.google.com/file/d/1wJWtvkvw5ordvFttl5XQ-v-RewyO2VXi/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300">
                  <span className="text-sm font-medium text-gray-400 hover:text-blue-400">Resume</span>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* 🎓 Education Card with same hover palette */}
        <div className="bg-gray-800 p-8 rounded-lg mb-8 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:border-blue-500 border border-gray-700 transition-all duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Bachelor of Technology in Computer Science and Engineering
                </h3>
                <p className="text-gray-300 font-medium">KL University, India</p>
                <p className="text-gray-400 text-sm">Jun 2019 – Mar 2023</p>
              </div>
              <div className="mt-3 md:mt-0">
                <div className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  CGPA: 9.2/10
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              <h3 className="font-semibold text-black-400 mb-2">Specialized in Data Science and Big Data Analytics. </h3>
              <div>Relevant Coursework: Data Structures and Algorithms, Operating Systems, Databases, Machine Learning, Computer Networks, Cloud Computing, Software Engineering.
              </div></p>
          </div>
        </div>

        {/* 🏆 Leadership & Recognition — entire section hovers, inner cards do not */}
        <div className="bg-gray-800 p-8 rounded-lg transition-all duration-300 border border-gray-700 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:border-blue-500 cursor-pointer">
          <h2 className="text-2xl font-semibold text-white mb-6">Leadership & Recognition</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inner cards are static (no hover classes) */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-blue-400 mb-2">Club Leadership</h3>
              <p className="text-gray-300 text-sm">
                Led IoT & Cloud Edge Club and Data Science Club at KL University, organized 10+ technical events and mentored 250+ students
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-green-400 mb-2">Research Contribution</h3>
              <p className="text-gray-300 text-sm">
                Contributed to research paper on drone automation for security & surveillance during 2-year research assistantship
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );



  const ExperiencePage = () => (
    <div className="min-h-screen py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
          <p className="text-lg text-gray-400">My professional journey and accomplishments</p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => {
            const isExpanded = expandedExp[index];
            const shouldTruncate = exp.description.length > 3;
            const displayItems = isExpanded || !shouldTruncate ? exp.description : exp.description.slice(0, 3);

            return (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700 min-h-[400px] flex flex-col 
                         transition-all duration-300 transform hover:scale-[1.03] 
                         hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border-blue-500 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0 flex flex-col items-end">
                    <div className="flex items-center space-x-2 text-gray-400 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="bg-blue-900 text-blue-300 px-4 py-1 rounded-full text-sm font-medium min-w-[100px] text-center">
                      {exp.type}
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex-1">
                  <h4 className="font-medium text-white mb-3">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    {displayItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start text-sm">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {shouldTruncate && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-400 hover:text-blue-300 text-sm mt-3 flex items-center space-x-1 font-medium"
                    >
                      <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );


  const SkillsPage = () => (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Skills</h1>
          <p className="text-lg text-gray-400 mb-2">Future-proof stack and habits</p>
          <p className="text-gray-500 text-sm max-w-3xl mx-auto">
            High-velocity languages, cloud services, and operating rituals that keep delivery sharp for the next generation of infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer">

              <h2 className="text-2xl font-semibold text-white mb-6">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-900 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-white transition-all cursor-pointer"
                  >
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
    <div className="min-h-screen py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-lg text-gray-400">A showcase of my recent work and accomplishments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-700 flex flex-col h-[520px] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(147,197,253,0.4)] hover:border-blue-500 cursor-pointer"

            >
              {/* Uniform top gradient bar */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-20 flex items-center justify-center">
                <span className="text-4xl">{project.image}</span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h3 className="text-xl font-semibold text-white flex-1">{project.title}</h3>
                  <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">{project.year}</span>
                </div>

                {/* Description: fixed visible area (3 lines) so it won't push content */}
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {project.description}
                </p>



                {/* Key features area: limited height with scroll if needed */}
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Anchored bottom section: technologies + links stay aligned across cards */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
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


  const CertificationsPage = () => {
    const creativeCerts = certifications
      .filter(cert => cert.title !== "Excellence in Hackathon")
      .map(cert => {
        let logoUrl = '';
        let bgGradient = '';
        let borderColor = '';
        let buttonColor = '';

        if (cert.title.includes('SailPoint')) {
          logoUrl = sailpointLogo;
          bgGradient = 'from-indigo-900 via-indigo-800 to-indigo-900';
          borderColor = 'border-indigo-500';
          buttonColor = 'border-indigo-400 text-indigo-300 hover:bg-indigo-800';
        } else if (cert.title.includes('AWS')) {
          logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg';
          bgGradient = cert.title.includes('Architecting')
            ? 'from-cyan-900 via-blue-900 to-cyan-900'
            : 'from-emerald-900 via-green-900 to-emerald-900';
          borderColor = cert.title.includes('Architecting') ? 'border-cyan-500' : 'border-emerald-500';
          buttonColor = cert.title.includes('Architecting')
            ? 'border-cyan-400 text-cyan-300 hover:bg-cyan-800'
            : 'border-emerald-400 text-emerald-300 hover:bg-emerald-800';
        } else if (cert.title.includes('Automation Anywhere')) {
          logoUrl = 'https://logowik.com/content/uploads/images/automation-anywhere1292.logowik.com.webp';
          bgGradient = 'from-orange-900 via-red-900 to-orange-900';
          borderColor = 'border-orange-500';
          buttonColor = 'border-orange-400 text-orange-300 hover:bg-orange-800';
        } else if (cert.title.includes('Oracle')) {
          logoUrl = oracleLogo;
          bgGradient = 'from-red-900 via-red-800 to-red-900';
          borderColor = 'border-red-500';
          buttonColor = 'border-red-400 text-red-300 hover:bg-red-800';
        } else if (cert.title.includes('Azure')) {
          logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg';
          bgGradient = 'from-blue-900 via-sky-900 to-blue-900';
          borderColor = 'border-sky-500';
          buttonColor = 'border-sky-400 text-sky-300 hover:bg-sky-800';
        } else if (cert.title.includes('Aviatrix')) {
          logoUrl = aviatrix;
          bgGradient = 'from-teal-900 via-cyan-900 to-teal-900';
          borderColor = 'border-teal-500';
          buttonColor = 'border-teal-400 text-teal-300 hover:bg-teal-800';
        } else if (cert.title.includes('Credly')) {
          logoUrl = 'https://images.credly.com/images/c4689f29-3940-42ca-823e-340ea05dd936/blob';
          bgGradient = 'from-teal-900 via-cyan-900 to-teal-900';
          borderColor = 'border-teal-500';
          buttonColor = 'border-teal-400 text-teal-300 hover:bg-teal-800';
        }

        return { ...cert, logoUrl, bgGradient, borderColor, buttonColor };
      });

    return (
      <div className="min-h-screen py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-3">Certifications</h1>
            <p className="text-base text-gray-400">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

            {creativeCerts.map((cert, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${cert.bgGradient} rounded-2xl w-[250px] h-[360px] p-6 flex flex-col border-2 ${cert.borderColor} shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden`}
              >
                {/* Decorative Dotted Overlay */}
                <div className="absolute inset-0 opacity-[0.07]">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern
                        id={`dots-${index}`}
                        x="0" y="0" width="25" height="25"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
                  </svg>
                </div>

                {/* Logo Badge */}
                <div className="relative w-20 h-20 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 mb-4 mx-auto">
                  <img
                    src={cert.logoUrl}
                    alt={cert.title}
                    className="w-14 h-14 object-contain p-1.5"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIzNSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zNSAzNUw0NSA0NUwzNSA1NSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4=';
                    }}
                  />
                </div>

                {/* Text Info */}
                <div className="text-center z-10 flex-grow flex flex-col justify-center">
                  <h3 className="text-base font-semibold text-white mb-1 leading-snug px-1">
                    {cert.title}
                  </h3>
                  <p className="text-white/70 text-xs font-medium">{cert.issuer}</p>
                </div>

                {/* Button (fixed bottom position) */}
                <div className="z-10 mt-auto">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-4 py-2 rounded-full border-2 ${cert.buttonColor} font-semibold text-xs transition-all duration-300 hover:scale-105`}
                  >
                    View Credential
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };






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
