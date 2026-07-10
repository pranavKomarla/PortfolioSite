import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import {
  FaJava,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaMicrosoft,
  FaBrain,
  FaNetworkWired,
  FaSearch
} from 'react-icons/fa';
import {
  SiJavascript,
  SiPython,
  SiDotnet,
  SiCplusplus,
  SiSpring,
  SiMongodb,
  SiMysql,
  SiApachekafka,
  SiKubernetes,
  SiDatadog,
  SiRedis,
  SiOpenai
} from 'react-icons/si';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
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
    background-color: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${theme.spacing.lg};
  width: min(90%, 1300px);
  margin: ${theme.spacing.xl} auto 0;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${theme.spacing.xl};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 600;
  position: relative;
  padding-bottom: ${theme.spacing.md};
  min-width: 0;

  .category-title-text {
    min-width: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  svg {
    font-size: clamp(1.75rem, 3vw, 2rem);
    color: ${theme.colors.accent};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  flex: 1;
  width: 100%;
  min-width: 0;
`;

const SkillsWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  padding: ${theme.spacing.md};
  border-radius: 12px;
  transition: all ${theme.transitions.default};
  background: ${theme.colors.glass.card};
  min-width: 0;

  > span:not(.sr-only) {
    min-width: 0;
  }

  svg {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    color: ${theme.colors.accent};
    transition: all ${theme.transitions.default};
  }

  &:hover {
    background: ${theme.colors.gradient.glass};
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);

    svg {
      transform: scale(1.1) rotate(5deg);
      color: ${theme.colors.light};
    }
  }
`;

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaJava />,
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'C#', icon: <SiDotnet /> },
      { name: 'C/C++', icon: <SiCplusplus /> },
    ],
  },
  {
    title: 'Backend & Data',
    icon: <FaNodeJs />,
    skills: [
      { name: 'Spring', icon: <SiSpring /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Apache Kafka', icon: <SiApachekafka /> },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: <FaDocker />,
    skills: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Azure DevOps', icon: <FaMicrosoft /> },
      { name: 'Datadog', icon: <SiDatadog /> },
    ],
  },
  {
    title: 'AI & Data Systems',
    icon: <FaBrain />,
    skills: [
      { name: 'RAG', icon: <FaBrain /> },
      { name: 'MCP', icon: <FaNetworkWired /> },
      { name: 'Vector Search', icon: <FaSearch /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'OpenAI', icon: <SiOpenai /> },
    ],
  },
];

const Skills = () => {
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
    <SkillsSection id="skills" role="region" aria-label="Skills and Expertise">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        Skills & Expertise
      </SectionTitle>
      <SkillsWrapper
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SkillsContainer role="list">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`category-title-${index}`}
            >
              <CategoryTitle id={`category-title-${index}`}>
                <span aria-hidden="true">{category.icon}</span>
                <span className="category-title-text">{category.title}</span>
              </CategoryTitle>
              <SkillsList role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem 
                    key={skillIndex} 
                    variants={itemVariants}
                    role="listitem"
                  >
                    <span aria-hidden="true">{skill.icon}</span>
                    <span>{skill.name}</span>
                    <span className="sr-only">{`${skill.name} - ${category.title} skill`}</span>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </SkillsWrapper>
    </SkillsSection>
  );
};

export default Skills;
