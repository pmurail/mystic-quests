// src/mockData.js

export const mockData = {
    scenario: {
      name: "Epic Battle of the Ancients",
      scenario: `In the ancient lands of Elaria, the city of Veridale is under siege by dark forces led by the sorcerer Malakar. 
      Five brave heroes rise to defend their homeland: Gorak the Brave, an orc barbarian from the northern tribe; 
      Elara the Wise, an elf wizard from the mystical forest of Lumaria; Thrain the Stalwart, a dwarf fighter from the mountainous 
      city of Grondor; Liara the Swift, a human rogue from the bustling port city of Thalasia; and Zoltar the Mystic, a tiefling warlock 
      from the shadowy ruins of Zareth. Together, they must journey through perilous lands, confront powerful enemies, and uncover 
      ancient secrets to thwart Malakar's plan. Along the way, they will visit the enchanted city of Eldoria, the haunted ruins of Arakmoor, 
      and the fiery pits of Dragathor. Their quest will test their strength, wisdom, and resolve as they seek to save Elaria from impending doom.`,
      date: "2024-04-21",
      userId: 1
    },
    pnjs: [
      {
        name: "Gorak the Brave",
        race: "Orc",
        classField: "BARBARIAN",
        hp: 150,
        mp: 50,
        strength: 18,
        dexterity: 12,
        intelligence: 8,
        wisdom: 10,
        charisma: 7,
        constitution: 16
      },
      // Add more PNJ data here
    ],
    equipments: [
      {
        name: "Mystic Sword",
        classField: "BARBARIAN",
        description: "A sword imbued with mystical powers.",
        effect: "Increases critical hit chance by 10%"
      },
      // Add more equipment data here
    ],
    skills: [
      {
        name: "Sword Mastery",
        classField: "BARBARIAN",
        description: "Expertise in sword combat.",
        effect: "Increases attack damage by 20%",
        cooldown: 3
      },
      // Add more skill data here
    ]
  };
  