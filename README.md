# LABO5WEB

Pregunta de la pagina 13

¿Qué significa className en React? ¿las props tienen un limite? ¿Quién define las
props?

className es el atributo que se usa en React para aplicar clases CSS a los elementos. Es el equivalente de class en HTML normal

No hay un limite tecnico para las props, pero hay unas practicas que debemos seguir: -El límite real es la memoria disponible y el rendimiento
-Puedes pasar tantas props como necesites etc...

Las props son definidas por el elemento padre que usa el componente, el componente hijo puede definir valores por defecto y validaciones, pero el componente padre es quien decide que valores pasarle cuando lo usa
