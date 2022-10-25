import React from 'react'
import { Checkmark } from 'react-checkmark'


const Sobre = () => {
  return (
    
    
        <div className='py-24 '>
        <div className=' bg-[#202024] rounded-3xl sm:w-[800px] w-[400px] h-[600px] mx-auto flex flex-col pt-10 my-auto  items-center'>
        <div className=' 2xl:flex py-10  mx-44  '>
        <Checkmark size={100}/> 
        </div>
        <div className='pt-5' >
            <h1 className=' pb-5 text-3xl font-medium text-[#519dcc] text-center  '>ENVIADO! </h1>
            <h2 className=' text-[#b4cddc] '> Sua mensagem foi enviada com sucesso! </h2>
        </div>
        <div className='pt-20 ' >
        <a href='https://portfolio-thiagovillani.vercel.app' className='  bg-[#519dcc] px-4 py-4 rounded-lg  w-[200px] '>Voltar para pagina principal</a>
          </div>
    </div>
    </div>
  )
}

export default Sobre