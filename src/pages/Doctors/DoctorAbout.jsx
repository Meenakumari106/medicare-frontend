import React from 'react'
import { formatDate } from '../../utils/formatDate';
const DoctorAbout = () => {
    return (
        <div>
            <h3 className='text-[20px] leading-[30px]
        text-headingColor font-semibold flex items-center gap-2'>

                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9
            '>Jeon Roowoon</span>
            </h3>
            <p className="text__para">
                I'm Dr. Jeon Roowoon,
                With years of training and experience,
                I specialize in general surgery.I specialize in general surgery, which encompasses a broad range of surgical procedures involving the abdomen,
                digestive system, skin, and soft tissues. My training and experience allow me to perform a variety of surgical interventions
                to address diverse medical conditions and promote patient health and well-being.
                My priority is your well-being, and
                I'm here to guide you through your surgical
                journey with expertise, compassion, and
                dedication. Let's work together
                towards your health and recovery.
            </p>

            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px]
        text-headingColor font-semibold flex items-center gap-2'>
                    Education
                </h3>
                <ul className='pt-4 md:p-5 '>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            {formatDate('09-13-2014')}- {formatDate('09-13-2016')}
                            </span>
                            <p className='text-[16px] leading-5 font-medium text-textColor'>
                                PHD in Surgeon
                            </p>
                        </div>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>
                            New Apolo Hospital ,NewYork.
                        </p>
                    </li>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                               {formatDate('07-04-2010')}- {formatDate('07-04-2014')}
                            </span>
                            <p className='text-[16px] leading-5 font-medium text-textColor'>
                                MBBS
                            </p>
                        </div>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>
                           Medical Institute of Hyderabad
                        </p>
                    </li>

                </ul>
            </div>

            <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px]
        text-headingColor font-semibold flex items-center gap-2'>
                    Experience
                </h3>
                <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellow-500 text-[15px] leading-6
                        font-semibold'>
                           {formatDate('09-13-2016')}- {formatDate('09-13-2020')}
                        </span>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>
                           Sr.Surgeon
                        </p>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>
                            New Apolo Hospital ,NewYork.
                        </p>
                        
                    </li>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellow-500 text-[15px] leading-6
                        font-semibold'>
                           {formatDate('09-13-2014')}- {formatDate('09-13-2016')}
                        </span>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>
                           Jr.Surgeon
                        </p>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>
                            New Apolo Hospital ,NewYork.
                        </p>
                        
                    </li>

                </ul>
            </div>


        </div>
    )
}

export default DoctorAbout;