export class G964 {
    public static movie(card: number, ticket: number, perc: number): number {
        // your code
        var res = 0;
        var systemB = card;
        var discounted = ticket;
        do{
            res++;
            discounted = discounted * perc;
            systemB += discounted;
        }while(Math.ceil(systemB) >= (ticket * res))
        return res;
    };
}


console.log(G964.movie(500,15,0.9))