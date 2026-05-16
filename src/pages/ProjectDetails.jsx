import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectDetailLayout from "../components/projects/ProjectDetailLayout";
import NotFound from "./NotFound";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return <ProjectDetailLayout project={project} />;
}
