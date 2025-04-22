"use client"
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import FormContainer from './_components/FormContainer';
import { FormData } from '@/types/form';

interface Props {
  // define your props here
}

export default function ComponentName({}) {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
      job_position: '',
      job_description: '',
      interview_duration: '',
      interview_types: []
    });
  
    const onHandleInputChange = (key: keyof FormData, value: string | string[]) => {
      setFormData(prev => ({
        ...prev,
        [key]: value
      }));
    }
    console.log("FormData:", formData);
  return (
    <div className='mt-10 px-10 md:px-24  lg:px-44 xl:px-56'>
        <div className='flex gap-5 items-center'>
            <ArrowLeft onClick={()=>router.back()} className='cursor-pointer'/>
                <h2 className='font-bold text-2xl' >Create New Interview</h2>
        </div>
        <Progress value={step * 33.33} className='my-5' />
        <FormContainer formData={formData} onHandleInputChange={onHandleInputChange}/>
    </div>
  );
};
