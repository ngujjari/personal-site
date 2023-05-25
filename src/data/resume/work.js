/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'BIRLASOFT INC@Synchrony Financials, Kettering, OH',
    position: 'Solutions Architect',
    url: 'https://smileidentity.com',
    startDate: '2021-11-08',
    summary: `Synchrony offers financial products like “credit cards” and “buy now - pay later” loans to 1000's of merchant across the United States.
    UniFi offers combined product offerings to the merchants with single integration. Our APIs are
    used by thousands of millions of people every day to access financial services. As an Architect of Engineering Team,
    I provide technical leadership on high-impact projects, influence and coach a distributed team of engineers,
    and facilitate alignment and clarity across teams on goals, outcomes, and timelines. I lead a 20+ person engineering org. I directly manage ~5 engineers and spend
    >50% of my time writing code.`,
    highlights: [
      'Defined the overall system architecture, including the application layers, components, and integration points. Identified the best architectural patterns and practices to ensure a reliable and efficient solution.',
      'Implemented Microservices architecture for building applications using NodeJs, Java/Kotlin and Spring Boot frameworks.',
      'Implemented single page micro front end applications using React and Vanilla JavaScript.',
      'Deployed applications to the Pivotal Cloud Foundry private cloud platform, ensuring seamless integration and high availability.',
      'Helped in cloud native migration strategy and designed full serverless architecture for few use cases.',
      'Designed and implemented full stack applications using React and Node, deployed using serverless stack AWS Amplify, AWS Lambda and DynamoDB.',
      'Designed and developed CRUD microservice using Java and leveraged AWS ECS, ECR, API Gateway and RDS ( MySQL) for deploying using cloud-native architecture.',
      'Designed and developed high-throughput, distributed systems using Kafka messaging architecture.',
      'Improved widget load performance by moving the data available, closer to the users geographic location through CDN cache.',
    ],
  },
  {
    name: 'NTTDATA@Hanover Insurance Group, Worcester, MA',
    position: 'Java Architect',
    url: 'https://arthena.com',
    startDate: '2010-06-18',
    endDate: '2021-11-04',
    summary: `Hanover is a property and casualty company header quarterd at Worcester, MA.,
    I designed and developed many enterprise wide products and solutions for Hanover during my stay here. 
    Some of the key products includes Mobile Hybrid App for customer use, Telematics , Agency management systems, Agent provisioning through Identity Managers,
    Insurance Quote Orchestration Services, CallCenter Portals, IVR, Claims Underwritting Improvements etc..
    <br>Won many awards and recognitions and particiapted townhall presentations, Hackthons and other technical symposiums. 
    I ran a 20-person engineering org for 5 years.`,
    highlights: [
      'Hands-on Software Architect and Software Engineer: Developed the software architecture (+ data models).',
      'Developed technical design and presented to the Architect Review Board',
      'Use Java/J2EE technologies to develop web applications for client server environments and add functionalities to existing applications.',
      'Researched on F5 Big-IP access manager policies, load balancer and helped network team to develop iRules to authorize the web traffic and send to back end server pool.',
      'Designed and developed Hanover Mobile App using Hybrid Ionic Angular Framework and deployed to Apple AppStore and Google play stores.',
      'For application performance monitoring(APM), configured AppDynamics to measure performance of the server nodes, for example Memory, CPU utilization and business transactions.',
      'Captured user web/mobile analytics events through google(GTM) and firebase analytics. Developed flows and funnels for business reporting.',
      'Manage mobile platform upgrades, security and compliance changes and release app to the stores.',
      'Implemented F5 WAF to protect the applications from top security vulnerabilities , brute-force attacks, DoS detection, and Bot attack prevention.',
    ],
  },
  {
    name: 'Verizon Data Services India Ltd, Hyderabad, India',
    position: 'Senior Analyst',
    url: 'https://smileidentity.com',
    startDate: '2007-04-01',
    endDate: '2010-06-17',
    summary: `At Verizon worked on developing products for Verizon's CRESS. CRESS is a centralized operations system that delivers essential Real Estate services across the Verizon business groups like Verizon Telecom, Verizon Business, Verizon Wireless and Verizon International.
    Actively involved all phases of the software developement including requirement gathering's, design, development, testing and releasing the products.
    Received many recognisions for outstanding performance during my tenure at Verizon India.`,
    highlights: [
      'Software development based on client requirements.',
      'Enterprise application development, deployment on WebLogic, frontend UI development using Struts, JSPs, HTML, JavaScript, and CSS, utilization of design patterns, development of AJAX-based search functionality, and PL/SQL development.',
    ],
  },
  {
    name: 'MetricStream Infotech Pvt Ltd, Bangalore, India',
    position: 'Member Technial Staff',
    url: 'https://smileidentity.com',
    startDate: '2006-08-01',
    endDate: '2007-03-31',
    summary: `At MetricSteam worked on SYSTEMi product. The Systemi eBusiness Management Suite is designed to make the job of managing and monitoring applications and their interfaces easier and more efficient.
    Actively involved all phases of the software developement including requirement gathering's, design, development, testing and releasing the products.
    Environment – Java 1.5, JSP, Servlets, JavaScript, Velocity Templates, AJAX, JView Server, Tomcat Server,
    Documentum, Apache Lucene, JDBC, PL/SQL, Oracle9i and Eclipse3.2`,
    highlights: [
      'Developed user interfaces using JSP, Velocity Templates, CSS and Java Script for capturing input data by user, and presenting data stored in the database in user-friendly format.',
      'Through Command pattern implemented controller servlet to connect to the database layer.',
      'Worked on the Documentum and helped QA Team to generate reports',
      'Involved in database design, created scripts for new tables, SQL queries and procedures in the application, using PL/SQL and Quest TOAD',
    ],
  },
  {
    name: 'Qwest Software Services (Currently CenturyLink), Bangalore, India',
    position: 'Application Engineer',
    url: 'https://smileidentity.com',
    startDate: '2005-11-21',
    endDate: '2006-08-16',
    summary: `At Qwest worked on SPOT project. SPOT (SoftDial Tone Pre-Provisioning Opportunities Tool) is an application tool used by the Network Services Pre-Provisioning Center that helps in the creation of SoftDial Tone orders for new construction.
    Actively involved all phases of the software developement including requirement gathering's, design, development, testing and releasing the products.
    Environment – JDK1.4, JavaScript, JSP, Servlets, Struts Framework, JDBC, Oracle9i, Weblogic and Eclipse3.0.`,
    highlights: [
      'Involved in requirements gathering and documenting.',
      'Designed the application and developed all the Major Modules.',
      'Developed using JavaScript, JSP and Servlets with backend as Oracle Database.',
      'Writing SQL statements for performing database operations.',
    ],
  },
];

export default work;
