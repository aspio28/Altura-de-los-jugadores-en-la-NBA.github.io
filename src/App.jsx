import "./App.css";

import { DecadatesChart, Paragraph, Section, TeamMedia } from "./components";

export default function App() {
  return (
    <main className="px-10 flex justify-center w-full">
      <div className="w-full max-w-[900px]">
        <Section>
          <Paragraph>La búsqueda del unicornio Wembamyama</Paragraph>
          <img
            src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </Section>

        <Section>
          <Paragraph>Que tan normal es un jugador...</Paragraph>
          <img
            src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </Section>

        <Section>
          <p>Siempre ha sido asi</p>
          <DecadatesChart />
        </Section>

        <Section>
          <p>Que equipo ha tenido la media mas alta</p>
          <TeamMedia />
        </Section>
      </div>
    </main>
  );
}
