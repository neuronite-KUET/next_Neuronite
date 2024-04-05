import PortfolioCard from '@/components/PortfolioCard'
import { portFolioList } from '@/utils/lists'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (    
  <main className='n-container'>
    <h1 className="font-bold border-b-2 uppercase text-center pt-8 pb-2 text-slate-800">Portfolios</h1>
    <div className='py-6 grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {
      portFolioList.map((item,i)=>(
        <PortfolioCard key={i} title={item.title} description={item.description} imgUrl={item.imgUrl} status={item.status}/>
      ))
    }

    </div>
  </main>
  )
}

export default Page
