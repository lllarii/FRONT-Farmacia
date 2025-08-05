/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardcategorias/CardCategorias";

function ListaCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([])  

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias) 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      alert("Tente novamente.")
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, []) 

  return (
    <>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
          Galeria de Categorias
        </h1>
      </div>

      {CardCategorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className='w-full m-4'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

          {categorias.map((categoria) => 
          <CardCategorias key={categoria.id} categoria={categoria} />)}
        </div>
      </div>
    </>
  )
}

export default ListaCategorias;