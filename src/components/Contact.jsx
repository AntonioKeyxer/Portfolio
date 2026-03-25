import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { whatsapp } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_op8lt2s',
        'template_9x3z93a',
        {
          from_name: form.name,
          to_name: "Antonio",
          from_email: form.email,
          to_email: "antonioguanilogil@gmail.com",
          message: form.message,
        },
        'dBvVVF6rdScwxSiD3'
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias. Responderé el mensaje lo más pronto posible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, algo salió mal. Porfavor intenta nuevamente.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Ponerse en contacto</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Su nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Como se llama?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Su correo</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cual es su correo?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Deja tu mensaje</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Cual es su mensaje?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? 'enviando...' : 'Enviar Correo'}
          </button>


        </form>

        <div className='mt-10 flex items-center gap-4'>
          <div className='flex-1 h-[1px] bg-white/50' />
          <p className='text-white/80'>O</p>
          <div className='flex-1 h-[1px] bg-white/50' />
        </div>

        <a
          href="https://wa.me/963127012"
          target="_blank"
          rel="noopener noreferrer"
          className='mt-10 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary flex items-center justify-center gap-3'
        >
          <img src={whatsapp} alt="whatsapp" className="w-7 h-7 object-contain" />
          Enviame un Mensaje por Whatsapp
        </a>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")