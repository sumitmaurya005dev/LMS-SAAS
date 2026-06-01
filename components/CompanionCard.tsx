import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import { Link } from 'lucide-react';

interface CompanionCardProps{
    id:string;
    name:string,
    color:string,
    topic:string,
    subject:string,
    duration:number
}

const CompanionCard = ({id,name,color,topic,subject,duration}:CompanionCardProps) => {
  return (
    <article className="companion-card" style={{backgroundColor:color}}>
        <div className="flex justify-between items-center">
            <div className="subject-badge">{subject}</div> 
            <Button className='companion-bookmark'>
                <Image src="/icons/bookmark.svg" alt="save" width={12.5} height={15}/>  
            </Button> 
        </div>

        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm">{topic}</p>
        <div className="flex items-center gap-2">
                <Image src="/icons/clock.svg" alt="duration" width ={13.5} height={13.5}/>
                <p className='text-sm'>{duration} mins duration</p>
        </div>

                <Button className="btn-primary w-full justify-center">Launch Session</Button>         
    </article>
  )
}

export default CompanionCard
