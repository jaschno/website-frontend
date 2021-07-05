import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import MainPage from './pages/MainPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div>
        <p>Logo</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <p>Links</p>
        </nav>

        <Switch>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
