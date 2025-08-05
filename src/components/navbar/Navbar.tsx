import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div className='w-full flex justify-center py-4
            			  bg-[#0E1D1F] text-[#F4F5F4]'>
            
                <div className="container flex justify-between text-lg">
                     <Link to='/home' className="text-2xl font-bold">CTRL + FARMÁCIA</Link>

                    <div className='flex gap-4'>
                        <Link to='/categorias' className='hover:text-[#95DF94]'>Categorias</Link>
                        <Link to='/adicionarcategoria' className='hover:text-[#95DF94]'>Criar categoria</Link>
                        <Link to='/produtos' className='hover:text-[#95DF94]'>Produtos</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar