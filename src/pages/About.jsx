

import { CTA } from "../components";
import {  skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Shahrear Mahmud
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        A Computer Engineer from NUB, I excel as a Full Stack Web Developer.I love contributing to the growth of technical education through my knowledge in software engineering.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          "I have successfully completed my Computer Science and Engineering degree from NUB. Over the past three years, I have immersed myself in web development, tackling programming challenges across various languages. Additionally, I have honed my expertise in data structures and algorithms. Despite my academic commitments, I haven't had the opportunity to join or apply to any software companies. I am eager to apply my skills and knowledge gained both academically and professionally in a dynamic work environment ."
          </p>
        </div>

       
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
