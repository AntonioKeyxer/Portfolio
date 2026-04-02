import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, gitblue } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, github_link, backend_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">

          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div 
            onClick={() => window.open(source_code_link, "_blank")}
            className="absolute inset-0 flex justify-end m-3 card-img_hover cursor-pointer gap-2"
          >
            {backend_code_link && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(backend_code_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.2]"
                title="Backend"
              >
                <img src={github} alt="backend" className="w-1/2 h-1/2 object-contain" />
              </div>
            )}

            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(github_link, "_blank");
              }}
              className="lightblue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.2]"
            >
              <img src={gitblue} alt="github"
                className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Lógica para obtener los proyectos actuales
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Lógica para el número de páginas
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Funciones para moverse entre las páginas
  const handlePrevPage = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };
  const handleNextPage = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mis Trabajos</p>
        <h2 className={styles.sectionHeadText}>Proyectos</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Los siguientes proyectos muestran mis habilidades y experiencia a través
          de ejemplos reales. Cada proyecto está descrito brevemente con enlaces
          hacia un repositorio en GitHub, así como con demos dentro de este.
          Cada proyecto refleja mi capacidad para resolver problemas complejos
          mediante el uso de diversas tecnologías y la gestión eficaz de las mismas.
        </motion.p>
      </div>

      <motion.div 
        key={currentPage}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='mt-20 flex flex-wrap gap-7'
      >
        {currentProjects.map((project, index) => (
          <ProjectCard key={`project-${project.name}-${index}`} index={index} {...project} />
        ))}
      </motion.div>

      {/* Menú de Navegación de Páginas */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center items-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-full flex justify-center items-center font-bold text-[18px] transition-all duration-300 ${
              currentPage === 1
                ? "bg-tertiary text-secondary cursor-not-allowed"
                : "bg-black-100 text-white hover:bg-[#915EFF]"
            }`}
          >
            {"<"}
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-full flex justify-center items-center font-bold text-[16px] transition-all duration-300 ${
                currentPage === index + 1
                  ? "bg-[#915EFF] text-white"
                  : "bg-tertiary text-secondary hover:bg-black-100 hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 rounded-full flex justify-center items-center font-bold text-[18px] transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-tertiary text-secondary cursor-not-allowed"
                : "bg-black-100 text-white hover:bg-[#915EFF]"
            }`}
          >
            {">"}
          </button>
        </div>
      )}
    </>
  )
}

export default SectionWrapper(Works, "");