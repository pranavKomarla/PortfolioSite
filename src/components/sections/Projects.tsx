import { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import researchAgentDemo from '../../assets/projects/researchAgentDemo.mov';
import careerAdvisorDemo from '../../assets/projects/CareerAdvisorDemo.mov';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
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

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    margin-top: ${theme.spacing.xl};
  }
`;

const CarouselTrack = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 700px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: box-shadow ${theme.transitions.default};
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

const NavButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: all ${theme.transitions.default};
  flex-shrink: 0;

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    transform: none;
  }
`;

const ProjectCounter = styled.span`
  color: ${theme.colors.textLight};
  opacity: 0.7;
  font-size: 0.9rem;
  min-width: 56px;
  text-align: center;
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 180px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${theme.colors.glass.card}, transparent);
  }
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: top center;
  display: block;
  background: ${theme.colors.glass.card};

  @media (min-width: ${theme.breakpoints.md}) {
    height: 360px;
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
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

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;
    
    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Career Advisor",
    description: "A 4-service Java/Spring Boot 3.3 platform (candidate, job, hiring, and AI-advisor services) built with a Maven multi-module setup and independent REST APIs. Integrates Spring AI to support pluggable LLM providers (OpenAI, Google Gemini, and local Ollama) via profile-based configuration, enabling candidate-job match scoring, job comparison, and AI-generated resume tailoring. Features an event-driven, asynchronous scoring pipeline using Spring's @TransactionalEventListener and @Async so job application submissions return immediately while AI evaluation happens in the background and persists match scores/reasoning. Inter-service communication runs through typed HTTP clients (Feign-style) with a layered controller → service → repository architecture and DTO/entity mapping across all modules, plus a lightweight web UI (career-advisor module) for candidates and recruiters to interact with AI-powered job discovery and comparison features.",
    video: careerAdvisorDemo,
    techStack: ["Java", "Spring Boot", "Spring AI", "OpenAI", "Gemini", "Ollama", "Maven"],
    githubUrl: "https://github.com/pranavKomarla/AI-Operations-Platform",
    liveUrl: "https://github.com/pranavKomarla/AI-Operations-Platform",
  },
  {
    id: 2,
    title: "RAG Research Agent",
    description: "A RAG-based Q&A agent that retrieves from a custom document corpus and answers with cited sources, using a provider-agnostic vector store interface for portability. Includes an agentic tool-calling layer giving the LLM autonomous decision-making over document retrieval, web search, and calculation, with per-conversation memory via LangGraph state checkpointing. An automated evaluation pipeline scores faithfulness, answer relevancy, and retrieval precision/recall against a curated test set, with full request tracing via LangSmith. Also includes a technical comparison of RAG vs. LoRA vs. full fine-tuning, justifying the architecture's tradeoffs for a knowledge-intensive, frequently-updated use case.",
    video: researchAgentDemo,
    techStack: ["Python", "LangGraph", "OpenAI GPT-4o-mini", "Chroma", "Ragas", "LangSmith"],
    githubUrl: "https://github.com/pranavKomarla/rag-research-agent",
    liveUrl: "https://github.com/pranavKomarla/rag-research-agent",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

const Projects = () => {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);

  const project = projects[index];

  const goTo = (newDirection: number) => {
    setSlide(([current]) => {
      const next = (current + newDirection + projects.length) % projects.length;
      return [next, newDirection];
    });
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Featured Projects
        </SectionTitle>
        <CarouselWrapper>
          <CarouselTrack
            role="group"
            aria-roledescription="carousel"
            aria-label="Featured projects"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <ProjectCard
                key={project.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeOut' }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${projects.length}`}
                aria-labelledby={`project-title-${project.id}`}
              >
                {project.video ? (
                  <ProjectVideo
                    src={project.video}
                    aria-label={`Demo video of ${project.title}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                ) : (
                  <ProjectImage
                    imageUrl={project.image ?? ''}
                    role="img"
                    aria-label={`Screenshot of ${project.title}`}
                  />
                )}
                <ProjectContent>
                  <ProjectTitle id={`project-title-${project.id}`}>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} role="listitem">{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FaGithub aria-hidden="true" />
                      <span className="sr-only">GitHub repository</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <FaExternalLinkAlt aria-hidden="true" />
                      <span className="sr-only">Live site</span>
                    </a>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            </AnimatePresence>
          </CarouselTrack>
          <NavControls>
            <NavButton
              type="button"
              onClick={() => goTo(-1)}
              disabled={projects.length < 2}
              aria-label="Previous project"
            >
              <FaChevronLeft aria-hidden="true" />
            </NavButton>
            <ProjectCounter aria-live="polite">
              {index + 1} / {projects.length}
            </ProjectCounter>
            <NavButton
              type="button"
              onClick={() => goTo(1)}
              disabled={projects.length < 2}
              aria-label="Next project"
            >
              <FaChevronRight aria-hidden="true" />
            </NavButton>
          </NavControls>
        </CarouselWrapper>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
