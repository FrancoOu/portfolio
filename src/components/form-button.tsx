


import React from 'react'
import { Button } from './ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom';

export default function FormButton() {

    const { pending } = useFormStatus();
  return (
    <Button className='group gap-2 md:h-[3rem] md:w-[8rem] rounded-full' disabled={pending}>
        {pending?(<ReloadIcon className="animate-spin" />):(<>SUBMIT 
        <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/> </>)}
                
    </Button>
  )
}
