'use client'
import MemberCard from '@/components/MemberCard'
import ProgramCard from '@/components/ProgramCard'
import {  programList } from '@/utils/lists'
import React, { useEffect, useState } from 'react'
import committee from '@/utils/edited.json';
import clsx from 'clsx';

type Props = {}

const page = (props: Props) => {
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [memberList, setmemberList] = useState(committee[0].members);
  

  useEffect(() => {
    setmemberList(committee[activeNavItem].members);
  }, [activeNavItem])
  

  return (
    <main className='n-container py-6'>
      <nav className='bg-gray-200 py-3 flex overflow-x-scroll whitespace-nowrap'>
        <ul className='!flex-row'>
          {committee.map((item,i)=>(
            <li key={i} className='inline-block px-1 mx-2 cursor-pointer' onClick={()=>setActiveNavItem(i)}>
              <p className={clsx('font-semibold hover:border-green-500 border-gray-200 border-b-2 box-border',i===activeNavItem&&'!border-green-600')}   >{item.session}</p>
            </li>
          ))} 
        </ul>
      </nav>
      <h1 className="font-bold border-b-2 uppercase text-center py-2 text-slate-800">Neuronite Executive Committee - ({committee[activeNavItem].session})</h1>
      
      <div className='py-6 grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {
        memberList.map((item,i)=>(
          <MemberCard key={i} data={{...item}} />
        ))
      }

      </div>
    </main>
  )
}

export default page;
