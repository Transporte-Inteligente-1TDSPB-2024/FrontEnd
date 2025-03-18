import Link from "next/link";

export default function NotFound() {
    return (
        <div className='flex items-center justify-center' >
            <h1 className='text-center font-bold mt-9 text-6x1'> Erro 404, página não encontrada</h1>
            <p> Essa página que tentou acessar não foi encontrada! Por favor, volte pra Home.

            </p>
            <Link href='/'> Voltar para a home </Link>
        </div>
    )
}