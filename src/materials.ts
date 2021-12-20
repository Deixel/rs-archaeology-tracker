export interface Material {
    name: string,
    link?: string
}

let materials: {[name: string]: Material} = {
    // Generic
    thirdAgeIron: { name: "Third Age Iron" },
    samiteSilk: { name: "Samite Silk" },
    whiteOak: { name: "White Oak" },
    goldrune: { name: "Goldrune" },
    orthenglass: { name: "Orthenglass" },
    vellum: { name: "Vellum" },
    leatherScraps: { name: "Leather Scraps" },
    soapstone: { name: "Soapstone"},

    // Zaros
    zarosianInsignia: { name: "Zarosian Insignia" },
    tyrianPurple: {name: "Tyrian Purple" }, 
    imperialSteel: {name: "Imperial Steel" }, 
    ancientVis: {name: "Ancient Vis" }, 

    // Zamorak

    // Bandos

    // Dragonkin

    // Saradomin
}

export default materials;