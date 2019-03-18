export class AppareilService {
    appareils = [
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
        for (const appariel of this.appareils) {
            appariel.status = 'allumer';
        }

    }

    switchOffAll() {
        for (const appariel of this.appareils) {
            appariel.status = 'éteint';
        }
    }
    switchOnOne(index: number) {
        this.appareils[index].status = 'allumer';
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
    }

}
