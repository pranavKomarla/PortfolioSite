import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import costarLogo from '../../assets/logos/costar-brand-thumbnail-V1.jpg';
import trimbleLogo from '../../assets/logos/trimbleLogo.jpeg';
import avisLogo from '../../assets/logos/AvisLogo.jpeg';
import rafterOneLogo from '../../assets/logos/rafterOneLogo.png';

const ExperienceSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.light};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
  }
`;

const ExperienceCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};
  border-left: 3px solid ${theme.colors.accent};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(246, 177, 122, 0.15);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg} ${theme.spacing.xl};
  }
`;

const CardLayout = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${theme.spacing.lg};
  }
`;

const CardContent = styled.div`
  flex: 1;
  min-width: 0;
  width: 100%;
`;

const LogoBadge = styled.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 16px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.sm};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  @media (min-width: ${theme.breakpoints.md}) {
    width: 88px;
    height: 88px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xs};
`;

const RoleTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  color: ${theme.colors.light};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  svg {
    color: ${theme.colors.accent};
    font-size: 0.9em;
  }
`;

const DateRange = styled.span`
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  color: ${theme.colors.accent};
  font-weight: 500;
  white-space: nowrap;
`;

const CompanyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

const CompanyName = styled.span`
  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: 500;
  opacity: 0.9;
`;

const Location = styled.span`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  opacity: 0.7;

  svg {
    color: ${theme.colors.accent};
  }
`;

const BulletList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  padding-left: ${theme.spacing.lg};
`;

const Bullet = styled.li`
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  opacity: 0.9;
`;

interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  dates: string;
  logo: string;
  bullets: string[];
}

const experiences: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'CoStar Group',
    location: 'Richmond, VA, USA',
    dates: 'February 2026 - May 2026',
    logo: costarLogo,
    bullets: [
      'Built and maintained C#/.NET CRUD APIs within a distributed microservices architecture supporting high-volume review moderation workflows.',
      'Developed a historical audit timeline tool for internal review vetting systems, surfacing approval/rejection states and status history across thousands of records.',
      'Contributed frontend enhancements in a TypeScript microfrontend environment and supported SQL-backed integrations.',
      'Used Azure DevOps pipelines and Datadog monitoring tools for deployment support, debugging, and service observability.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Trimble',
    location: 'Princeton, NJ, USA',
    dates: 'May 2025 - August 2025',
    logo: trimbleLogo,
    bullets: [
      'Developed a RESTful API for a Shipper Integration Service to transmit GPS-based location updates to corporate shippers, enhancing shipment visibility across active tenders.',
      'Streamed 10,000+ location updates daily through a custom-built Kafka connector, reducing average response time by 40% through asynchronous event processing.',
      'Designed and implemented the API using a Spring Boot multi-layered MVC architecture, integrated with a Dockerized MongoDB replica set for high availability.',
      'Secured all endpoints using OAuth 2.0 and JWT; documented APIs using Swagger/OpenAPI for third-party integration.',
      'Achieved 87% unit test coverage with JUnit and Mockito, and maintained 99.9% uptime across staging and production environments.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Avis Budget Group',
    location: 'Piscataway, NJ, USA',
    dates: 'June 2024 - August 2024',
    logo: avisLogo,
    bullets: [
      'Collaborated with a cross-functional team of 8 to design and implement scalable BFF modules for a new consumer product, enhancing application performance by 13%.',
      'Developed dynamic UIs with React/React Native, boosting user engagement across web and mobile platforms.',
      'Utilized NestJS to build maintainable backend services, providing robust API endpoints for frontend consumption.',
      'Implemented CI/CD pipelines using Concourse, reducing deployment time by 30% and achieving 94% reliability in software delivery.',
      'Deployed and managed Kubernetes application containers, achieving high availability and scalability for the user base.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Acxiom (formerly RafterOne)',
    location: 'Remote',
    dates: 'July 2023 - August 2023',
    logo: rafterOneLogo,
    bullets: [
      'Trained extensively on Salesforce Commercial Cloud, building hands-on expertise in the platform’s core commerce capabilities.',
      'Developed a fully functional storefront with foundational features including inventory management and configurable pricing and discount application, leveraging Salesforce flows and Apex coding as needed.',
      'Developed reports and dashboards to support product management and business decision-making.',
    ],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ExperienceSection id="experience" role="region" aria-label="Work Experience">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Work Experience
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Timeline role="list">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`experience-title-${index}`}
              >
                <CardLayout>
                  <CardContent>
                    <CardHeader>
                      <RoleTitle id={`experience-title-${index}`}>
                        <FaBriefcase aria-hidden="true" />
                        {exp.role}
                      </RoleTitle>
                      <DateRange>{exp.dates}</DateRange>
                    </CardHeader>
                    <CompanyRow>
                      <CompanyName>{exp.company}</CompanyName>
                      <Location>
                        <FaMapMarkerAlt aria-hidden="true" />
                        {exp.location}
                      </Location>
                    </CompanyRow>
                    <BulletList>
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <Bullet key={bulletIndex}>{bullet}</Bullet>
                      ))}
                    </BulletList>
                  </CardContent>
                  <LogoBadge>
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  </LogoBadge>
                </CardLayout>
              </ExperienceCard>
            ))}
          </Timeline>
        </motion.div>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
