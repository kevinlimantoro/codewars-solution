export interface CharAndTotal {
  c: string,
  t: number,
  run(arg: any):void; //method
}

export class EnhancedCharAndTotal implements CharAndTotal {
  c: string;
  t: number;
  constructor(a:string,b:number){
    this.c=a;
    this.t=b;
  }
  run(): void {
    console.log(this.c, this.t);
  }
  static test(a:string, b: number): void {
    console.log(a,b);
  }
}

export const orderedCount = (text: string, idx: number): string => 
  text.split("").reduce((total: any, current) => {
    var idx = total.findIndex((x: {c: string,t: number}) => x.c === current);
    if (idx > -1) total[idx].t++;
    else total.push({c: current,t: 1});
    return total;
  }, [] as CharAndTotal[]).sort((a:CharAndTotal,b:CharAndTotal) => b.t - a.t)[idx - 1];


console.log(orderedCount("babracadabra",1));

var a = new EnhancedCharAndTotal('a',123);
a.run();
