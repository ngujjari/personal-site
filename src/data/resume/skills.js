const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'ShellScipt',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'NodeJS',
    competency: 3,
    category: ['Web Development', 'Frameworks', 'Javascript'],
  },
  {
    title: 'Angular',
    competency: 3,
    category: ['Web Development', 'Frameworks', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Frameworks', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'JQuery',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Ionic framework',
    competency: 4,
    category: ['Web Development', 'Frameworks', 'Javascript', 'Mobile'],
  },
  {
    title: 'Spring Boot',
    competency: 5,
    category: ['Web Development', 'Frameworks'],
  },
  {
    title: 'Restful services',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Hibernate JPA',
    competency: 4,
    category: ['Frameworks'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Apache Kafka',
    competency: 4,
    category: ['Message Brokers'],
  },
  {
    title: 'Apache ActiveMQ',
    competency: 2,
    category: ['Message Brokers'],
  },
  {
    title: 'AWS SQS',
    competency: 4,
    category: ['Message Brokers'],
  },
  {
    title: 'AWS Amplify',
    competency: 3,
    category: ['AWS'],
  },
  {
    title: 'AWS Lambda',
    competency: 4,
    category: ['AWS'],
  },
  {
    title: 'AWS DynamoDB',
    competency: 4,
    category: ['AWS', 'Databases'],
  },
  {
    title: 'AWS ECS',
    competency: 3,
    category: ['AWS'],
  },
  {
    title: 'AWS API Gateway',
    competency: 4,
    category: ['AWS'],
  },
  {
    title: 'AWS S3',
    competency: 3,
    category: ['AWS'],
  },
  {
    title: 'Oracle',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'PLSQL',
    competency: 3,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Android/Kotlin',
    competency: 2,
    category: ['Languages', 'Mobile'],
  },
  {
    title: 'IOS/Swift',
    competency: 2,
    category: ['Languages', 'Mobile'],
  },
  {
    title: 'Maven',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Gradle',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Javascript'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
