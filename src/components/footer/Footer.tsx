import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  const data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-[#0E1D1F] text-[#F4F5F4]">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-mono'>
            CTRL + Farmácia | Copyright: {data}
          </p>
          <hr className="w-1/8 h-0.5 mx-auto my-1.5 bg-[#f4f5f454] border-0" />
          <p className='text-lg py-2'>Acesse nossas redes sociais</p>
          <div className='flex gap-4'>
            <LinkedinLogo size={48} weight='bold' className='hover:bg-[#2665A8]' />
            <InstagramLogo size={48} weight='bold' className='hover:bg-[#2665A8]' />
            <FacebookLogo size={48} weight='bold' className='hover:bg-[#2665A8]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer