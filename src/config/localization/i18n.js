import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources:{
        en: {
            translation: {
                technologies: "Technologies that I use",
                description: "Engineering student, employee within the company Capgemini. I like to learn new things, listen to music, play videogames, go to the movies and go out with my girlfriend or my friends to the movies, to eat or go to pool. When I finish engineering I would like to have learned more about programming, especially if it can be oriented towards video game development, and I would also like to have a good job abroad.",
                action: "Count Visit",
                counter: "Visit Counter"
            },
        },
        es: {
            translation: {
                technologies: "Tecnologias que manejo",
                description: "Estudiante de Ingenieria, empleado dentro de la empresa Capgemini. Me gusta aprender nuevas cosas, escuchar musica, jugar videojuegos, ir al cine y salir con mi novia o mis amigos al cine, a comer o ir al billar. Cuando termine la ingenieria me gustaria haber aprendido más sobre programación, sobre todo si puede ser orientado a desarrollo de videojuegos, y tambien me gustaria tener un buen trabajo en el extranjero.",
                action: "Contar Visita",
                counter: "Contador de Visitas"
            },
        },
    },
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;