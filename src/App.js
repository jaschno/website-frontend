import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from './components/Layout';

import MainPage from "./pages/MainPage";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
