import React from 'react'
import { formatDate } from '../../utils/formatDate';
const DoctorAbout = ({name,about,qualifications,experiences}) => {
    return (
        <div className='mt-[100px]'>
            <h3 className='text-[20px] leading-[30px]
        text-headingColor font-semibold flex items-center gap-2'>

                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9
            '>{name}</span>
            </h3>
            <p className="text__para">
                I'm Dr. {name},
                With years of training and experience,
                I specialize in general surgery.I specialize in general surgery, which encompasses a broad range of surgical procedures involving the abdomen,
                digestive system, skin, and soft tissues. My training and experience allow me to perform a variety of surgical interventions
                to address diverse medical conditions and promote patient health and well-being.
                My priority is your well-being, and
                I'm here to guide you through your surgical
                journey with expertise, compassion, and
                dedication. Let's work together
                towards your health and recovery.
                {/*{about}  */}
            </p>

            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px]
        text-headingColor font-semibold flex items-center gap-2'>
                    Education
                </h3>
                <ul className='pt-4 md:p-5 '>

                      {qualifications?.map((item,index)=>
                     <li  key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                     <div>
                         <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                         {formatDate(item.startingDate)}- {formatDate(item.endingDate)}
                         </span>
                         <p className='text-[16px] leading-5 font-medium text-textColor'>
                            {item.degree}
                         </p>
                     </div>
                     <p className='text-[16px] leading-5 font-medium text-textColor'>
                        {item.university}
                     </p>
                 </li>)}
                   
                </ul>
            </div>

            <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px]
        text-headingColor font-semibold flex items-center gap-2'>
                    Experience
                </h3>
                <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                   
                   {experiences?.map((item,index)=> <li key={index} className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellow-500 text-[15px] leading-6
                        font-semibold'>
                           {formatDate(item.startingDate)}- {formatDate(item.endingDate)}
                        </span>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>
                           {item.position}
                        </p>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>
                            {item.hospital}
                        </p>
                        
                    </li>)}

                </ul>
            </div>


        </div>
    )
}

export default DoctorAbout;