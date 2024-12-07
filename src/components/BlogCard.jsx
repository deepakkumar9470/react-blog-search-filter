import React from "react";
import {motion} from 'framer-motion';
import { Tilt } from 'react-tilt'
import {fadeIn} from '../utils/motion';
import { Eye } from "lucide-react";

const BlogCard = ({ blog }) => {
  const { title, description, image, category, dateCreated,index } = blog;
  return(
    <motion.div
    variants={fadeIn("up","spring",index*0.5,0.75)}
    >
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="w-full sm:w-[360px] bg-tertiary p-5 rounded-2xl"
      >

       <div className="w-full h-[230px] relative">
        <img
        src={image}
        alt={title}
        className='w-full h-full object-cover rounded-2xl'
        />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer' 
              onClick={()=>window.open(source_code_link,"_blank")}
              >
            <Eye className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>

       </div>

        
        <div className='mt-5'>
            <h3 className='text-[24px] text-white font-bold'>{title}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
          
        <div className='mt-4 flex items-center justify-between'>
        <span className="rounded-full bg-black-200 px-3 py-1 text-xs font-medium">
          {category}
        </span>          
        <span className="text-xs text-gray-200 font-medium">{dateCreated}</span>
        </div>
      </Tilt>

    </motion.div>
  );
};

export default BlogCard;
