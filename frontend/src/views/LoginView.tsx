import {Link} from 'react-router-dom'
//View principal 
export default function LoginView(){
    return (
        //Fragment para poder retornar mas de 1 elemento
        <>
            <h1 className='text-4xl text-white font-bold'>Iniciar Sesion</h1>

            <nav className='mt-10'>
                {/*Los <a> no son eficientes en la navegacion por lo que usaremos  otro tipo de componente
                de react router dom
                Para links externos a la app si usamos <a>
                */}
                <Link 
                className='text-center text-white text-lg block'
                to="/auth/register">¿No tienes cuenta? Crea una aquí
                </Link>
            </nav>
            
        </>
        )
}