export class AppareilService {
    appariels = [
        {
            name : 'Machine a laver',
            status : 'éteint'
        },
        {
            name: 'Telephone',
            status: 'allumer'
        },
        {
            name: 'Ordinateur',
            status: 'allumer'
        },
        {
            name: 'Télévision 1',
            status: 'allumer'
        },
        {
            name: 'Télévision 2',
            status: 'éteint'
        },
        {
            name: 'Télévision 3',
            status: 'allumer'
        }
    ];
    switchOnAll() {
        for (let appariels of this.appariels){
            appariels.status = 'allumer'
        }
    }
    switchOffAll(){
        for (let appariels of this.appariels){
            appariels.status ='éteint'
        }
    }
    switchOnOne(index: number){
        this.appariels[index].status ='allumer';
    }
    switchOffOne(index: number) {
        this.appariels[index].status ='éteint';
    }
}