# Observaciones

Chicas, felicitaciones por su trabajo. Estoy muy contenta recorriendo su TP. El funcionamiento está muy bien, el codigo es claro y prolijo y se nota el esfuerzo puesto a cada paso. 

A nivel del trabajo en grupo, noto que no todas colaboraron de la misma manera al proyecto. No sé las particularidades del grupo, si algunas de ustedes trabajaron de a dos por ejemplo, pero no puedo verlo por sus commits. Sólo ustedes saben cuánto aprendió cada una de este trabajo, pero recuerden que las notas para mí no tienen tanto valor. Lo que importa es cuánto aprenden, y eso sólo pueden lograrlo practicando lo más posible. Soy una convencida de que los profes somos la mitad de la ecuación: más allá del contenido que demos, el programa, etc, el factor diferencial del aprendizaje en cursos como este es cuánto ponen ustedes. Si alguna salió de este trabajo sintiendo que no aprendió todo lo que podría, que no entiende todo lo que se hizo, que no podría hacerlo nuevamente por sí sola, entonces este TP fue una oportunidad perdida. Si ese fue el caso, las animo a que en el próximo puedan remediarlo. 


## Estructura correcta de documento HTML

En general muy bien. Dejé en el archivo algunas observaciones. 

## Respeta el diseño dado

Cumplido. 

## Respeta el funcionamiento

Cumplido en general
- Apenas cargamos la web, aparece el icono de imagen rota en el meme. Eso es porque la imagen tiene img src="". Saquen eso y se arregla. 
- El botón de alinear texto sólo funciona para el texto superior. 
- En "modo claro", los select y botones siguen oscuros. 

## Responsive funciona correctamente

Cumplidisimo. 

## Buena estructura de proyecto

El favicon deberia llamarse favicon.ico

## Código bien indentado

Cumplido en general, aunque hay varios comentarios en HTML. En JS recuerden que siempre que se abre una llave, debe haber un espaciado en la linea siguiente. Eso incluye a las funciones, a los if, a los for, a todo lugar donde haya una llave. O sea:

```js
button.onclick = () => {
    if (condicion) {
        for (let i = 0; i < 5; i++) {

        }
    }
}
```

Un detalle es que suelen hacer html muy largo. Cuando ven que tiene mas de 100 columnas (VSCode lo informa 
en el panel inferior), es buena idea hacer un salto de linea. 

## Comentarios que permiten mejorar la legibilidad del código

Impecables. 

## Uso correcto de etiquetas semánticas

Impecables. 

## Buenos nombres de clases

Cumplido. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido, aunque el modo oscuro me parece que esta mucho mas complicado de lo que deberia ser. Comenté en clase como hacerlo cambiandole una clase al body: si les trae dudas no dejen de escribirme. 

## Funciones pequeñas

No cumplido, hay muchas funciones que son mas complejas de lo que deberían, que les dejé comentadas, y varias oportunidades en donde podrían haber aprovechado un poquito más los parametros para hacer un codigo más breve y claro. Les dejé varios comentarios al respecto en JS. 

## Accesibilidad

Cumplido.

## Commits con mensajes adecuados

Cumplido, y menciono tambien el excelente nivel del README. 

# Nota final: 9

