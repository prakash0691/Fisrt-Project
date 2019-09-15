import { Component } from "@angular/core";


@Component({
    selector: 'fruits',
    templateUrl: './fruits.component.html',
    styleUrls: ['./fruits.component.css']

})
export class FruitsComponent {

    todayOffer: string = 'Mango';
    price: number = 50;
    empid: number = 2481;
    myName: boolean = true
    myColor: string = 'blue'
    clickFunction: boolean = true
    items: any[] = []
    product:string='';
    date = new Date();
    interest = 78;
    
    getToOffer() {
        return 'orange';
    }

    nameEntered(nameEvent) {
        if (nameEvent.keyCode === 13) {
            var value = nameEvent.target.value;
            this.items.push(value);
            nameEvent.target.value = '';
            console.log(this.items);

        }

    }
    addName(item) {
        var value = item.value;
        this.items.push(value);
        item.value = '';
        console.log(this.items);

    }


}

