import logo from "../../assets/img/logo.png";
import Cumprimento from "../../util/cumprimento/Cumprimento";

function Home() {
    return (
        <>
            <div className="bg-[#0E1D1F] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <Cumprimento />
                        <p className='text-center text-lg font-thin text-[#95DF94]'>
                            GESTÃO DE PRODUTOS FARMACÊUTICOS
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Criar Categoria
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src={logo}
                            alt="Imagem da página Home"
                            className='w-1vh'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home