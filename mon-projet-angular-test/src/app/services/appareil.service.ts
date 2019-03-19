export class AppareilService{

  appareils=[
    {
      id:1,
      name: "Machine à laver",
      status: "allumé"
    },
    {
      id:2,
      name: "Télévision",
      status: "allumé"
    },
    {
      id:3,
      name: "Cuisinière",
      status: "éteint"
    }
  ];

  getAppareilBYId(id: number){
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  swithchOnAll(){
    for(let appareil of this.appareils){
      appareil.status= 'allumé';
    }
  }

  swithchOffAll(){
    for(let appareil of this.appareils){
      appareil.status= 'éteint';
    }
  }

  swithOnOne(index: number){
    this.appareils[index].status = "allumé";
  }

  switchOffOne(index: number){
    this.appareils[index].status = "éteint";
  }

}

