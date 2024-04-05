import ProgramCard from '@/components/ProgramCard'
import { programList } from '@/utils/lists'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <main className='n-container'>
      <h1 className="font-bold border-b-2 uppercase text-center pt-8 pb-2 text-slate-800">Our Programs</h1>
      <div className='py-6 grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        programList.map((item,i)=>(
          <ProgramCard key={i} title={item.title} description={item.desciption} imgUrl={item.imgUrl} />
        ))
      }

      </div>
    </main>
  )
}

export default Page
