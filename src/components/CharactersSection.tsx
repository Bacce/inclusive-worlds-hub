import charactersGroup from "@/assets/characters-group.png";

const characters = [
  { name: "Sunny", description: "Visual impairment", color: "bg-sunshine" },
  { name: "Bella", description: "Wheelchair user", color: "bg-bubble" },
  { name: "Max", description: "Hearing aids", color: "bg-olive" },
  { name: "Luna", description: "Prosthetic limb", color: "bg-secondary" },
  { name: "Charlie", description: "Feeding tube", color: "bg-primary" },
  { name: "Ivy", description: "Down syndrome", color: "bg-cta" },
];

const CharactersSection = () => {
  return (
    <section id="characters" className="section-padding bg-warm-white">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-6">
            Meet Our Characters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our 11 original characters each represent different disabilities and medical conditions, 
            helping children see themselves reflected in positive, empowering ways.
          </p>
        </div>

        {/* Characters Image */}
        <div className="mb-12">
          <img
            src={charactersGroup}
            alt="A diverse group of illustrated children characters representing various disabilities including hearing aids, wheelchair, prosthetic leg, and more"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-bubble"
          />
        </div>

        {/* Character Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {characters.map((character) => (
            <div
              key={character.name}
              className={`${character.color} text-card px-6 py-3 rounded-full font-semibold shadow-soft hover:scale-105 transition-transform duration-200`}
            >
              <span className="font-display">{character.name}</span>
              <span className="opacity-80 ml-2">— {character.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
