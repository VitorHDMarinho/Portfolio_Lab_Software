import "../assets/CSS/About.css";
import minhaFoto from "../assets/Vitor.png";
import minhaFoto2 from "../assets/Vitor2.png";

export default function About() {
  return (
    <div className="about-container">
      <section className="about p1">
        <div className="about-images">
            <img src={minhaFoto} alt="" />
        </div>
          <div className="texts">
            <h1> Vitor Hugo Dutra</h1>
            <p>Meu nome é Vitor, tenho 19 anos e sou estudante de Engenharia de Software. Desde o início da minha trajetória acadêmica, mergulhei de cabeça no universo da tecnologia, sempre movido por uma curiosidade genuína e uma paixão crescente pela área.

Atualmente, atuo na área de dados, onde tenho desenvolvido habilidades em análise, modelagem e tratamento de informações para gerar insights relevantes. Antes disso, tive a oportunidade de trabalhar com desenvolvimento back-end, o que me permitiu integrar conhecimentos de programação com soluções orientadas a dados — uma combinação que considero poderosa e estratégica.

Sou fascinado pela capacidade que a tecnologia tem de transformar realidades, e estou sempre em busca de novos desafios que me permitam aprender, crescer e contribuir com projetos inovadores. Acredito que minha idade é uma vantagem: tenho energia, sede de conhecimento e estou construindo uma base sólida para uma carreira promissora.</p>
        </div>    
      </section>
      <section className="about p2">
          <div className="texts">
              <h1>Mais sobre mim</h1>
              <p>Tive a oportunidade de trabalhar na MIP, onde dei meus primeiros passos profissionais e aprendi muito sobre responsabilidade, rotina e trabalho em equipe. Foi um ambiente que me ajudou a entender como aplicar o que eu estudava na prática, além de me mostrar a importância de estar sempre disposto a aprender.

Atualmente, estou na ArcelorMittal, onde venho aprofundando ainda mais meus conhecimentos, especialmente na área de dados e tecnologia. Cada desafio que enfrento lá contribui para minha evolução como profissional e como pessoa. Conviver com diferentes equipes, lidar com sistemas complexos e buscar soluções eficientes tem sido uma experiência valiosa que me motiva a seguir crescendo.

Essas vivências me mostraram que o aprendizado não acontece só na sala de aula — ele está em cada projeto, cada conversa e cada erro que vira acerto.</p>
          </div>    
          <div className="about-images">
              <img src={minhaFoto2} alt="" />
          </div>
      </section>
    </div>    
  );
}