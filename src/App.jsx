import "./App.css";

import {
  DataByHeight,
  DecadatesChart,
  Image,
  Paragraph,
  Section,
  TeamMedia,
  Title,
} from "./components";

export default function App() {
  return (
    <main className="flex items-center flex-col w-full pt-8">
      <img
        src="./collage.jpg"
        alt=""
        className="w-full object-cover h-[400px]"
      />

      <div className="w-full max-w-[900px] flex flex-col items-center">
        <Title>¿Más alto es mejor?</Title>

        <Section>
          <Paragraph>
            En junio de este año llegaba oficialmente a la NBA Victor
            Wembanyama, generando un hype nunca antes visto en la liga, con una
            mezcla de cualidades únicas. Es un base en el cuerpo de un pivot, un
            jugador de defender al pivot más alto de la liga y de igual manera,
            realizar un crossover digno del mejor base. Parece que apareció el
            anciado unicornio en la NBA, un jugador capaz de jugar en las 5
            posiciones.
          </Paragraph>

          <div className="grid gap-10 grid-cols-2 w-full">
            <div>
              <img src="./team.jpg" alt="" className="mb-5" />
              <Paragraph>
                Devin Vassell(196), Victor Wembanyama(224), Zach Collins(211), Jeremy Sochan(203) 
                (de izquierda a derecha)
              </Paragraph>
            </div>

            <div>
              <img src="./tall.jpg" alt="" />
            </div>
          </div>
        </Section>

        <Section>
          <Paragraph>
            ¿Qué tan normal es el físico de Wembanyama en la NBA actual?
          </Paragraph>
          <Paragraph>
            Wemby mide 224cm, lo que lo convierte actualmente en el jugador as
            alto de la liga, igualado con Boban Marjanovic. Seguido de Kristaps
            Porzingis con 222cm. Coincidente mente los 3 jugadores más altos de
            la actualidad son europeos, lo cual no debería ser tan normal dado
            la gran mayoría de jugadores estadounidenses en la liga. En
            contraposición el jugador mas bajo es Jacob Gilyard con 173cm.
          </Paragraph>
          <Paragraph>
            El jugador promedio en la actualidad mide 200.2cm, lo cual es 24
            centímetros por debajo del fenómeno francés y 27cm encima de
            Gilyard.
          </Paragraph>

          <img src="./alturas.jpg" alt="" />
        </Section>

        <Section>
          <Paragraph>
            A lo largo de la historia el promedio de altura no ha tenido una
            gran variación en los datos analizados, solo una ligera subida de un
            cm en la década del 2000. En los datos analizados hubo un ligero decremento 
            en la década del 2020, lo cual debe estar dado por el pequeño tamaño de muestra 
            analizado en este lapso de tiempo. 
          </Paragraph>
          <Paragraph>
            En los datos se aprecia que los Indiana Pacers en la década de 1990-2000, poseen el promedio
            más alto entre todos los equipos. Mientras que el país con mayor altura promedio es China tanto en
            la década 2000-2010, como en 2010-2020, lo cual coincide con la precencia de Yao Ming(228cm) en la liga.
          </Paragraph>
          <DecadatesChart />
        </Section>

        <Section>
          <Paragraph>
            La altura promedio de la altura coincide con la altura actual de
            200cm. Todos los equipos tienen un promedio de altura bastante
            parecido, donde el mayor otra vez son los Indiana Pacers co 201,3cm, 
            mientras el mas bajo históricamente son los New Orleans Pelicans con 199,7cm.
          </Paragraph>
          <TeamMedia />
        </Section>

        <Section>
          <Paragraph>
            En la siguiente gráfica se ve como los puntos anotados por partido aumentan mientras mayor 
            sea la altura del jugador, al igual que los rebotes. Mientras con las asistencias pasa todo lo contrario.
          </Paragraph>
          <Paragraph>
            Curioso es que los puntos no aumentan siempre, y hay una bajada con los jugadores entre 200 y 220cm, lo cual
            evidencia la importancia que tiene la capacidad atlética en la liga. Con jugadores que a pesar de no ser los mas altos 
            suplen sus centimetros de menos, con explosividad, y potencia de salto.
          </Paragraph>
        </Section>

        <Section>
          <DataByHeight />
        </Section>

        <Section>
          <Paragraph>
            El jugador mas alto de la historia es Gheorghe Mureşan con 231cm de
            altura, 71cm mas alto que los 160cm de Muggsy Bogues el jugador mas
            bajo de la historia.
          </Paragraph>
        </Section>

        <Section>
          <div className="grid-cols-3 grid gap-x-10 gap-y-5">
            <Image
              image={"./small.jpg"}
              text={"Muggsy Bogues 160cm"}
              height={470}
            />
            <Image
              image={"./big.jpg"}
              text={"Gheorghe Muresan 231cm"}
              height={470}
            />
            <Image
              image={"./big-small.jpg"}
              text={"Ambos enfrentados en un partido"}
              width={600}
              height={470}
            />
          </div>
        </Section>
      </div>
    </main>
  );
}
