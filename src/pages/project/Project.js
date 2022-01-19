import { useParams } from "react-router-dom";

/* HOOKS */
import { useDocument } from "../../hooks/useDocument";

/* COMPONENETS & STYLES */
import ProjectSummary from "./ProjectSummary";
import "./Project.css";

const Project = () => {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
    </div>
  );
};

export default Project;
