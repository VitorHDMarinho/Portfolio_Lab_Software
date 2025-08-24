import "../assets/CSS/Experience.css";
import Card from "../components/Card";
import MipLogo from "../assets/Mip Engenharia.jpg";
import ArcelorLogo from "../assets/ArcelorMittal.png";

export default function Experience() {
  const empresas = [
    {
      imageSrc: MipLogo,
      altText: "Blocx Monitoring",
      title: "Mip Engenharia",
      dateRange: "NOV/2024 - JUN/2025",
      hoverText:
        "Desenvolvimento e manutenção de dashboads Power BI.\nDesenvolvimento de API's REST utilizando c#\nIntegração da IA da empresa/nPower Automate.\nSql",
    },
    {
      imageSrc: ArcelorLogo,
      altText: "Stellantis",
      title: "Arcelor Mittal",
      dateRange: "JUL/2025 - Atual",
      hoverText:
        "Desenvolvimento e manutenção de dashboads Power BI.\nTratamento de dados com Python\nPower Automate.",
    },
  ];

  return (
    <div className="experience">
      <h1 className="experience-title">Experiencias</h1>
      <div className="experience-grid">
        {empresas.map((empresa, index) => (
          <Card
            key={index}
            imageSrc={empresa.imageSrc}
            altText={empresa.altText}
            title={empresa.title}
            dateRange={empresa.dateRange}
            hoverText={empresa.hoverText}
          />
        ))}
      </div>
    </div>
  );
}
