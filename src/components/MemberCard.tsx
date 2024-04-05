
import Link from 'next/link';
import React from 'react';
import {  IoLogoLinkedin } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { IoLogoFacebook } from 'react-icons/io';
import clsx from 'clsx'
import { countWords } from '@/utils/misc'

type Props = {
  data:{
    name:string,
    role:string,
    imgUrl:string,
    email:string,
    facebook:string,
    linkedIn:string
  }
}

const MemberCard = ({data}: Props) => {
  const {name,role,imgUrl,email,facebook,linkedIn}=data;
  
  return (
    
<div className="card member-card shadow-sm hover:shadow-md border-1  rounded-sm w-full !max-w-[310px] border bg-white mx-auto flex flex-col overflow-hidden">
    {/* <div className='flex items-center justify-center overflow-hidden'>
      <img className='h-72 transition-all' src={imgUrl} alt="" />
    </div> */}
    <div className="card-details w-full transition-all border-t-2 bg-white flex flex-col items-start justify-between py-8 pl-3 flex-1 h-auto">
      
      <h1 className='text-xl text-left font-semibold text-slate-800'>{name}</h1>
      <h3 className={clsx("text-lg text-gray-500 font-semibold",countWords(role)>4&&'!text-sm')}>
        {role}
      </h3>
      <ul className="mt-4">
          <li className="inline-block mr-4"><Link href={email?`mailto:${email}`:"#"} target={email&&'_blank'} className="text-red-500"><MdEmail className='text-2xl'/></Link></li>
          <li className="inline-block mr-4"><Link href={facebook} target={(facebook!=='#')?'_blank':""} className="text-[#1877F2]"><IoLogoFacebook className='text-2xl'/></Link></li>
          <li className="inline-block mr-4"><Link href={linkedIn} target={(linkedIn!=='#')?'_blank':''} className="text-[#0077B5]"><IoLogoLinkedin className='text-2xl'/></Link></li>
        </ul>
    </div>
</div>

  )
}

const ProfileCard = ({data}: Props) => {
  return (
    <div className="card member-card shadow-sm hover:shadow-md border-1 rounded-md w-full !max-w-[310px] border bg-white mx-auto">
      <img className="w-full" src="https://via.placeholder.com/150" alt="Profile Picture" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">John Doe</div>
        <p className="text-gray-700 text-base">Frontend Developer</p>
        <ul className="mt-4">
          <li className="inline-block mr-2"><a href="#" className="text-blue-500">Email</a></li>
          <li className="inline-block mr-2"><a href="#" className="text-blue-500">LinkedIn</a></li>
          <li className="inline-block mr-2"><a href="#" className="text-blue-500">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MemberCard;
// export default ProfileCard;
