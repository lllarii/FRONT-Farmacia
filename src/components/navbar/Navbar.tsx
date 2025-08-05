function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			  bg-[#0E1D1F] text-[#F4F5F4]'>
            
                <div className="container flex justify-between text-lg">
                    <h1 className="font-bold">CTRL + FARMÁCIA</h1>

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        Adicionar
                        Atualizar
                        Deletar
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar