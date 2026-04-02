import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

interface Project {
  id: string;
  name: string;
  color: string;
}

interface SidebarProps {
  projects: Project[];
  isOpen: boolean;
  onRenameProject?: (project: Project) => void;
  onDeleteProject?: (id: string) => void;
}

export default function Sidebar({
  projects,
  isOpen,
  onRenameProject,
  onDeleteProject,
}: SidebarProps) {
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <h2 className={styles.title}>Mes Projets</h2>

      <ul className={styles.list}>
        {projects.map((p) => (
          <li key={p.id}>
            <NavLink
              to={`/projects/${p.id}`}
              className={({ isActive }) =>
                `${styles.item} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.dot} style={{ background: p.color }} />
              {p.name}
            </NavLink>

            <div style={{ display: 'flex', gap: '0.5rem', margin: '0.35rem 0 0 1.8rem' }}>
              <button type="button" onClick={() => onRenameProject?.(p)}>
                Renommer
              </button>
              <button type="button" onClick={() => onDeleteProject?.(p.id)}>
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}