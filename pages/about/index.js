import React, { useState } from 'react';

//icons
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';


import { 
  SiNextdotjs, 
  SiFramer, 
  SiAdobexd, 
  SiAdobephotoshop, 
} from 'react-icons/si';

// about data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
{
    title: 'awards',
    info: [
      {
        title: 'Advanced Student Forum ',
        stage: 'Kumon, 2018',
      },
      {
        title: '2nd place in the national quiz competition ',
        stage: 'Udayana University, 2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Website Building',
        stage: '2020 - 2021',
      },
      {
        title: 'UI/UX Designer',
        stage: '2021 - 2022',
      },
      {
        title: 'Learning JavaScript and WordPress',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'Graduate',
    info: [
      {
        title: 'Saint Yoseph Kindergarden',
        stage: '2012',
      },
      {
        title: 'Saint Yoseph Elementary School',
        stage: '2013',
      },
      {
        title: 'Saint Yoseph Junior High School',
        stage: '2019',
      },
      {
        title: 'TI Global Denpasar Senior High School ',
        stage: '2022',
      },
    ],
  },
]


// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

//counter
import CountUp from 'react-countup';


// Rest of the code...

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2   
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden" className='h2'
          >
          About <span className='text-accent '>Me </span> 
          </motion.h2>
          <motion.p  
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden" 
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          2 years ago, I started learning about website. 
          since then I have learned about 5 types of programming languages.  
          </motion.p>
          {/* counters */}
          <motion.div   
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* Awards */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute 
              after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Winning Awards
                </div>
              </div>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute 
              after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Years of experience
                </div>
              </div>
               {/*projects*/}
               <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute 
               after:top-0 after:right-0'>
                 <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                   <CountUp start={0} end={2} duration={5}/> 
                 </div>
                 <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                 Finished Project
                 </div>
               </div>
                {/*awards*/}
                <div className='relative flex-1'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={5} duration={5}/> 
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Programming Languages
                  </div>
                </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div  
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex && 
                    'text-accent after-w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                   after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })} 
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                items-center text-center text-white/60'>
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => (
                      <div key={iconIndex} className='text-2xl text-white'>
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
