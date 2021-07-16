import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './pages/MainPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
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
    </BrowserRouter>
  );
}

export default App;
