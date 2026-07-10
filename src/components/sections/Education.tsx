import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const EducationSection = styled.section`
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

const EducationCard = styled(motion.div)`
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

const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xs};
`;

const DegreeTitle = styled.h3`
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

const SchoolRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

const SchoolName = styled.span`
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

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

const StatusBadge = styled.span`
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 600;
`;

const Gpa = styled.span`
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  opacity: 0.8;
`;

const CourseworkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
  }
`;

const CourseTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`;

interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  dates: string;
  status?: string;
  gpa?: string;
  coursework: string[];
}

const education: EducationEntry[] = [
  {
    degree: "M.S. in Computer Science, Machine Learning Specialization",
    school: "Georgia Institute of Technology",
    location: "Atlanta, GA, USA",
    dates: "January 2026 - June 2027",
    status: "In Progress",
    coursework: [],
  },
  {
    degree: "B.S. in Computer Science & Data Science (Double Major)",
    school: "Rutgers, the State University of New Jersey - New Brunswick",
    location: "New Brunswick, NJ, USA",
    dates: "September 2022 - December 2025",
    gpa: "GPA: 3.9",
    coursework: [
      "Computer Architecture",
      "Software Methodology",
      "Machine Learning Principles",
      "Regression Methods",
    ],
  },
];

const Education = () => {
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
    <EducationSection id="education" role="region" aria-label="Education">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Education
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Timeline role="list">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`education-title-${index}`}
              >
                <CardHeader>
                  <DegreeTitle id={`education-title-${index}`}>
                    <FaGraduationCap aria-hidden="true" />
                    {edu.degree}
                  </DegreeTitle>
                  <DateRange>{edu.dates}</DateRange>
                </CardHeader>
                <SchoolRow>
                  <SchoolName>{edu.school}</SchoolName>
                  <Location>
                    <FaMapMarkerAlt aria-hidden="true" />
                    {edu.location}
                  </Location>
                </SchoolRow>
                {(edu.status || edu.gpa) && (
                  <MetaRow>
                    {edu.status && <StatusBadge>{edu.status}</StatusBadge>}
                    {edu.gpa && <Gpa>{edu.gpa}</Gpa>}
                  </MetaRow>
                )}
                {edu.coursework.length > 0 && (
                  <CourseworkList role="list" aria-label={`Relevant coursework for ${edu.degree}`}>
                    {edu.coursework.map((course) => (
                      <CourseTag key={course} role="listitem">{course}</CourseTag>
                    ))}
                  </CourseworkList>
                )}
              </EducationCard>
            ))}
          </Timeline>
        </motion.div>
      </div>
    </EducationSection>
  );
};

export default Education;
