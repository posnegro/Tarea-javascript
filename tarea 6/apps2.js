let Pokemones = [
    {
      Nombre:"Munchlax",
      tipo: "Normal",
      genero:"masculino",
      lv: 43,
      Habilidad:
        "Recogida",
    },
    {
        Nombre:"Samurott",
        tipo: "Agua",
        genero:"masculino",
        lv: 53,
        Habilidad:
          "torrente",
      },
      {
        Nombre:"Walrein",
        tipo: "Hielo - Agua",
        genero:"femenino",
        lv: 47,
        Habilidad:
          "sebo",
      },
      {
        Nombre:"Gallade",
        tipo: "Psíquico - Lucha",
        genero:"masculino",
        lv: 48,
        Habilidad:
          "impasible",
      },
      {
        Nombre:"Quilaba",
        tipo: "Fuego",
        genero:"masculino",
        lv: 49,
        Habilidad:
          "Mar llamas",
      },
      {
        Nombre:"Dragonite",
        tipo: "Dragon - Volador",
        genero:"masculino",
        lv: 55,
        Habilidad:
          "Foco interno",
      },
];
function nivelMax(){
    for (let i = 0; i < Pokemones.length; i++) {
    
        console.log(`lv:${Pokemones[i].lv}`)
        console.log("----------------------------------------")
    }
  
  
}
nivelMax()
