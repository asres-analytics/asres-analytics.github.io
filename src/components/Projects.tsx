import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, revealViewport } from '../animations';
import { useLanguage } from '../i18n';

type Project = {
  title: string;
  summary: string;
  tags: string[];
  repo: string;
  readme: string;
};

const projects: Project[] = [
  {
    title: 'Spotify Popularity Analysis',
    summary: 'Analyzed 232,000+ Spotify tracks to identify how danceability, genre context, and audio-feature patterns influence popularity.',
    tags: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Jupyter'],
    repo: 'https://github.com/ethioCodingRoom/music-streaming-data-analytics',
    readme: 'https://github.com/ethioCodingRoom/music-streaming-data-analytics/blob/main/README.md',
  },
  {
    title: 'Real Estate Price Scraper',
    summary: 'Resilient web scraping pipeline for property pricing and market analysis.',
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'MySQL'],
    repo: 'https://github.com/ethioCodingRoom',
    readme: 'https://github.com/ethioCodingRoom?tab=repositories',
  },
  {
    title: 'Customer Segmentation ML',
    summary: 'Customer segmentation using RFM and K-means on 50,000+ records to support targeted campaign planning.',
    tags: ['Python', 'Scikit-learn', 'Plotly', 'pandas'],
    repo: 'https://github.com/ethioCodingRoom',
    readme: 'https://github.com/ethioCodingRoom?tab=repositories',
  },
  {
    title: 'Automated ETL Data Pipeline',
    summary: 'Scalable ETL pipeline processing daily data from multiple sources to reduce manual reporting effort.',
    tags: ['Python', 'pandas', 'PostgreSQL', 'API'],
    repo: 'https://github.com/ethioCodingRoom',
    readme: 'https://github.com/ethioCodingRoom?tab=repositories',
  },
  {
    title: 'Interactive Finance Dashboard',
    summary: 'Executive Tableau dashboard with KPI drill-downs designed for faster visibility and decision cycles.',
    tags: ['Tableau', 'SQL', 'DAX', 'Excel'],
    repo: 'https://github.com/ethioCodingRoom',
    readme: 'https://github.com/ethioCodingRoom?tab=repositories',
  },
  {
    title: 'Social Media Analytics Tool',
    summary: 'Multi-platform social analytics tool that integrates APIs and visualizes engagement trends.',
    tags: ['Python', 'API Integration', 'Matplotlib', 'Seaborn'],
    repo: 'https://github.com/ethioCodingRoom',
    readme: 'https://github.com/ethioCodingRoom?tab=repositories',
  },
];

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const isAm = language === 'am';

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mb-4 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl"
        >
          {isAm ? 'ተመርጠው የቀረቡ ፕሮጀክቶች' : 'Featured Projects'}
        </motion.h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]">
          {isAm
            ? 'በሊለካ በሚችል ውጤት ላይ የተመሰረቱ ተግባራዊ የአናሊቲክስ እና አውቶሜሽን ስራዎች ምርጫ።'
            : 'A selection of practical analytics and automation work focused on measurable outcomes.'}
        </p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto mb-8 max-w-2xl rounded-3xl border border-cyan-500/25 bg-gradient-to-r from-cyan-500/10 to-orange-500/10 p-6 text-center shadow-lg"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200">
            {isAm ? 'ተለይቶ የቀረበ ፕሮጀክት' : 'Featured Project'}
          </p>
          <h3 className="mt-3 text-3xl font-extrabold text-[var(--site-text)]">{projects[1].title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--site-muted)]">{projects[1].summary}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 shadow-lg backdrop-blur"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-300">
                Project
              </p>
              <h3 className="mt-3 text-xl font-extrabold text-[var(--site-text)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--site-muted)]">{project.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full border border-cyan-700/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold text-cyan-700 dark:text-cyan-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold">
                <a className="text-cyan-700 hover:text-cyan-600 dark:text-cyan-300" href={project.repo} target="_blank" rel="noreferrer">
                  GitHub Repo ↗
                </a>
                <a className="text-orange-600 hover:text-orange-500 dark:text-orange-300" href={project.readme} target="_blank" rel="noreferrer">
                  README ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
