import GrandChild from "./grandChild";

import './../App.css';

const Child = () => {
    return (
        <div >
            <div className="child">
                Estudiante de Ingenieria, empleado dentro de la empresa Capgemini.
                Me gusta aprender nuevas cosas, escuchar musica, jugar videojuegos, ir al cine y salir con mi novia o mis amigos al cine, a comer o ir al billar. 
                Cuando termine la ingenieria me gustaria haber aprendido más sobre programación, sobre todo si puede ser orientado a desarrollo de videojuegos, y tambien me gustaria tener un buen trabajo en el extranjero.
            </div>
            
            <GrandChild />
        </div>
    );
};
export default Child;