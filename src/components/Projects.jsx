import React, { useEffect, useMemo, useState } from 'react'
import './Projects.css'

const GITHUB_USER = 'Rehan959'

const humanizeRepoName = (name) => {
  if (!name) return 'Project'
  const withSpaces = name.replace(/[-_]+/g, ' ')
  return withSpaces
    .split(' ')
    .filter(Boolean)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

const buildAutoDescription = (repo) => {
  const pretty = humanizeRepoName(repo.name)
  const lang = repo.language
  const topics = Array.isArray(repo.topics) ? repo.topics.slice(0, 2) : []
  const techList = [lang, ...topics].filter(Boolean)
  if (techList.length === 0) {
    return `${pretty} — a small utility or learning project.`
  }
  if (techList.length === 1) {
    return `${pretty} — a ${techList[0]} project.`
  }
  if (techList.length === 2) {
    return `${pretty} — built with ${techList[0]} and ${techList[1]}.`
  }
  return `${pretty} — built with ${techList.slice(0, 3).join(', ')}.`
}

const normalizeTag = (t) => (t || '').toString().trim().toLowerCase()
const prettyTag = (t) => {
  const n = normalizeTag(t)
  const map = {
    'js': 'JavaScript',
    'javascript': 'JavaScript',
    'ts': 'TypeScript',
    'typescript': 'TypeScript',
    'node': 'Node.js',
    'nodejs': 'Node.js',
    'next': 'Next.js',
    'nextjs': 'Next.js',
    'next.js': 'Next.js',
    'react': 'React',
    'vue': 'Vue.js',
    'vuejs': 'Vue.js',
    'vue.js': 'Vue.js',
    'express': 'Express',
    'expressjs': 'Express',
    'express.js': 'Express',
    'mongodb': 'MongoDB',
    'postgres': 'PostgreSQL',
    'postgresql': 'PostgreSQL',
    'mysql': 'MySQL',
    'prisma': 'Prisma',
    'tailwind': 'Tailwind CSS',
    'tailwindcss': 'Tailwind CSS',
    'vite': 'Vite',
    'redux': 'Redux',
    'socket.io': 'Socket.io',
    'socketio': 'Socket.io',
    'graphql': 'GraphQL',
    'firebase': 'Firebase',
    'supabase': 'Supabase',
    'docker': 'Docker',
    'aws': 'AWS',
  }
  return map[n] || t
}

const stripMarkdown = (s) => {
  if (!s) return ''
  return s
    // images/links [text](url)
    .replace(/!?\[[^\]]*\]\([^\)]+\)/g, (m) => m.replace(/!?\[|\]\([^\)]+\)/g, ''))
    // inline code
    .replace(/`([^`]*)`/g, '$1')
    // headings #'s
    .replace(/^#+\s*/gm, '')
    // bold/italics
    .replace(/\*\*([^*]+)\*\*|\*([^*]+)\*|__([^_]+)__|_([^_]+)_/g, '$1$2$3$4')
    // HTML tags
    .replace(/<[^>]*>/g, '')
    .trim()
}

const extractTagsFromReadme = (readmeText) => {
  if (!readmeText) return []
  const hay = readmeText.toLowerCase()
  const candidates = []
  const checks = [
    { key: 'next.js', tag: 'Next.js' },
    { key: 'nextjs', tag: 'Next.js' },
    { key: 'react', tag: 'React' },
    { key: 'typescript', tag: 'TypeScript' },
    { key: 'javascript', tag: 'JavaScript' },
    { key: 'node.js', tag: 'Node.js' },
    { key: 'nodejs', tag: 'Node.js' },
    { key: 'express', tag: 'Express' },
    { key: 'mongodb', tag: 'MongoDB' },
    { key: 'postgres', tag: 'PostgreSQL' },
    { key: 'postgresql', tag: 'PostgreSQL' },
    { key: 'mysql', tag: 'MySQL' },
    { key: 'prisma', tag: 'Prisma' },
    { key: 'tailwind', tag: 'Tailwind CSS' },
    { key: 'vite', tag: 'Vite' },
    { key: 'redux', tag: 'Redux' },
    { key: 'socket.io', tag: 'Socket.io' },
    { key: 'graphql', tag: 'GraphQL' },
    { key: 'firebase', tag: 'Firebase' },
    { key: 'supabase', tag: 'Supabase' },
    { key: 'docker', tag: 'Docker' },
    { key: 'aws', tag: 'AWS' },
  ]
  checks.forEach(({ key, tag }) => {
    if (hay.includes(key)) candidates.push(tag)
  })
  if (/\bts\b|typescript/.test(hay)) candidates.push('TypeScript')
  if (/\bjs\b|javascript/.test(hay)) candidates.push('JavaScript')
  const seen = new Set()
  const result = []
  for (const c of candidates) {
    const n = normalizeTag(c)
    if (!seen.has(n)) {
      seen.add(n)
      result.push(prettyTag(c))
    }
  }
  return result.slice(0, 8)
}

const extractDescriptionBullets = (readmeText, fallback) => {
  const bullets = []
  if (readmeText) {
    const lines = readmeText.split('\n')
    // collect up to 3 bullet lines
    for (const line of lines) {
      const trimmed = line.trim()
      if (/^[-*+]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
        const clean = stripMarkdown(trimmed.replace(/^([-*+]|\d+\.)\s+/, ''))
        if (clean) bullets.push(clean)
      }
      if (bullets.length >= 3) break
    }
    // if no bullets, use first paragraph (non-heading) split into up to 2 concise sentences
    if (bullets.length === 0) {
      const paras = []
      let current = []
      for (const line of lines) {
        const t = line.trim()
        if (t === '') {
          if (current.length) { paras.push(current.join(' ')); current = [] }
        } else if (!t.startsWith('#')) {
          current.push(t)
        }
      }
      if (current.length) paras.push(current.join(' '))
      const first = stripMarkdown(paras.find(p => p && !/^<|!\[/.test(p)) || '')
      if (first) {
        const sentences = first.split(/(?<=[.!?])\s+/).slice(0, 2)
        bullets.push(...sentences)
      }
    }
  }
  if (bullets.length === 0 && fallback) bullets.push(fallback)
  return bullets.slice(0, 3)
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all') // all | personal | fork
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    const fetchRepos = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`)
        if (!response.ok) throw new Error('Failed to load repositories')
        const data = await response.json()
        if (!isMounted) return

        const personalWhitelist = new Set([
          'info_tracker',
          'portfoilio',
          'randomproject_gen',
          'todos',
          'cv-app',
          'simon-game',
        ])
        const forkWhitelist = new Set([
          'bolt.new',
          'nocodb',
        ])

        const whitelisted = data.filter(repo => {
          const name = (repo.name || '').toLowerCase()
          return personalWhitelist.has(name) || forkWhitelist.has(name)
        })

        const withReadmes = await Promise.all(whitelisted.map(async (repo) => {
          try {
            const readmeRes = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repo.name}/readme`, {
              headers: { Accept: 'application/vnd.github.v3.raw' },
            })
            const readmeText = readmeRes.ok ? await readmeRes.text() : ''
            return { repo, readmeText }
          } catch (_) {
            return { repo, readmeText: '' }
          }
        }))

        const filtered = withReadmes.map(({ repo, readmeText }) => {
          const nameLower = (repo.name || '').toLowerCase()
          const forcedCategory = personalWhitelist.has(nameLower) ? 'personal' : 'client'

          // tags
          const readmeTags = extractTagsFromReadme(readmeText)

          // description items
          let descriptionItems = extractDescriptionBullets(readmeText, repo.description || buildAutoDescription(repo))

          // Special enrichment for info_tracker
          if (nameLower === 'info_tracker') {
            descriptionItems = [
              'Next.js app for tracking and organizing information efficiently.',
              'Clean UI, fast routing, and responsive design for all devices.',
              'Built to be easily extensible and deployable (e.g., Vercel-ready).'
            ]
            if (!readmeTags.includes('Next.js')) readmeTags.unshift('Next.js')
          }

          // Merge language, topics, and README tags
          const mergedTags = []
          const addTag = (t) => {
            if (!t) return
            const n = normalizeTag(t)
            if (n && !mergedTags.some(x => normalizeTag(x) === n)) {
              mergedTags.push(prettyTag(t))
            }
          }
          addTag(repo.language)
          ;(repo.topics || []).forEach(addTag)
          readmeTags.forEach(addTag)

          return {
            id: repo.id,
            title: repo.name,
            descriptionItems,
            topics: mergedTags,
            homepage: repo.homepage,
            htmlUrl: repo.html_url,
            fork: repo.fork,
            updatedAt: repo.updated_at,
            forcedCategory,
          }
        })

        setRepos(filtered)
      } catch (e) {
        setError(e.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchRepos()
    return () => { isMounted = false }
  }, [])

  const projects = useMemo(() => {
    return repos.map(r => ({
      title: r.title,
      descriptionItems: r.descriptionItems,
      technologies: (r.topics || []).filter(Boolean).slice(0, 8),
      category: r.forcedCategory || (r.fork ? 'client' : 'personal'),
      liveDemo: r.homepage || '#',
      viewCode: r.htmlUrl,
      updatedAt: r.updatedAt,
    }))
  }, [repos])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    if (activeFilter === 'personal') return projects.filter(p => p.category === 'personal')
    if (activeFilter === 'client') return projects.filter(p => p.category === 'client')
    return projects
  }, [projects, activeFilter])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveFilter('personal')}
          >
            Personal
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'client' ? 'active' : ''}`}
            onClick={() => setActiveFilter('client')}
          >
            Forks
          </button>
        </div>

        {isLoading && (
          <div className="projects-loading">Loading repositories…</div>
        )}
        {error && (
          <div className="projects-error">{error}</div>
        )}

        {!isLoading && !error && (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-category ${project.category}`}>
                    {project.category === 'personal' ? 'Personal' : 'Fork'}
                  </span>
                </div>

                <div className="project-description">
                  <ul>
                    {project.descriptionItems.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-meta">
                  <span className="project-updated">Updated: {new Date(project.updatedAt).toLocaleDateString()}</span>
                </div>

                <div className="project-links">
                  <a href={project.viewCode} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                  {project.liveDemo && project.liveDemo !== '#' && (
                    <a href={project.liveDemo} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
