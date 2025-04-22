"use client";
import { Button } from '@/components/ui/button';
import { PlusCircle, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface Props {
  // define your props here
}

export default function LatestInterviewsList() {
    const [interviews, setInterviews] = useState<any[]>([]);
    const router = useRouter();
  return (
    <div className='my-5'>
        <h2 className='text-2xl font-bold'>Previously Scheduled Interviews</h2>
        {interviews.length===0 && (
            <div className='p-5 flex flex-col gap-3 items-center justify-center'>
                <Video className="w-16 h-16 p-3 rounded-lg bg-blue-50 text-blue-500" />
                <p className='text-gray-500'>No interviews scheduled yet</p>
                <Button onClick={()=>router.push('dashboard/create-interview')} className='cursor-pointer'>
                    <PlusCircle className='w-4 h-4 mr-2' />
                    Schedule Interview
                </Button>
            </div>
        )}
      
    </div>
  );
};
