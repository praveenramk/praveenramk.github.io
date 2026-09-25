const Experience = () => {
  const experiences = [
    {
      role: "Software Product Engineer",
      company: "Valeo | Autonomous Vehicles",
      period: "2022 - 2024",
      description:
        "Developed an internal Computer Vision framework for training Deep Learning models for Autonomous Vehicles.",
    },
    {
      role: "Computer Vision Engineer",
      company: "Aqgromalin | Farmtech",
      period: "2021 - 2022",
      description: "Implemented AI and IoT solutions for poultry farming.",
    },
    {
      role: "Computer Vision Engineer",
      company: "Koireader Technologies | Logistics",
      period: "2020 - 2020",
      description: "Developed an Intelligent Data Extraction tool for logistics documents.",
    },
    {
      role: "Computer Vision Engineer",
      company: "Virel AI Technologies | Finance",
      period: "2019 - 2020",
      description: "Built data extraction tool for financial documents.",
    },
    {
      role: "Computer Vision Intern",
      company: "Defect Scanner (Alphabt) | Manufacturing",
      period: "2019 - 2019",
      description: "Built a computer vision tool for extracting serial numbers in engine blocks.",
    },
    {
      role: "Computer Vision Intern",
      company: "Marcom | Manufacturing",
      period: "2018 - 2018",
      description: "Built a computer vision tool for automating measurement of objects.",
    },
    {
      role: "Web Development Intern",
      company: "Datafoundry.ai | Pharma Tech",
      period: "2017 - 2018",
      description: "Built front end applications for Johnson & Johnson.",
    },
  ];
  return <section id="experience" className="section-block experience-section"><div className="container experience-layout"><div><p className="eyebrow">03 / EXPERIENCE</p><h2>A foundation in<br/>real-world systems.</h2></div><div className="experience-list">{experiences.map((exp)=><article key={exp.company} className="experience-row"><span className="experience-period">{exp.period.replace("2020 - 2020","2020").replace("2019 - 2019","2019").replace("2018 - 2018","2018")}</span><div><h3>{exp.role}</h3><p className="company">{exp.company}</p><p>{exp.description}</p></div></article>)}</div></div></section>;
};
export default Experience;
