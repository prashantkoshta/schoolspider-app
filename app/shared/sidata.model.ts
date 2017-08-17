export class SiDate {
    amount:number;
    rate:number;
    time:number;
    si:number;
    
    result():number{
       //console.log("#SiDate-result:",this.amount,this.rate,this.time);
       this.si= (this.amount * this.rate * this.time) /100;
       return this.si;
    }
}