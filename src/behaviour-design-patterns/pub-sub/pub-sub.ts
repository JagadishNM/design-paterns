 export default class PubSub{

    static subscribers: {[key:string]: Array<(data:any) => void>} = {};
    // private class members/variables in javascript starts with "#"
    private static _instance = new PubSub();

    constructor(){
        if(PubSub._instance){
            throw new Error('cannot initialize single instance class using new')
        }

        PubSub._instance = this;
    }

    public static get instance(): PubSub {
		return PubSub._instance;
	}


    static subscribe(eventName: string, callback: (data: any) => void){
        let index;

        if(!PubSub.subscribers[eventName]){
            PubSub.subscribers[eventName] = []
        }
        PubSub.subscribers[eventName].push(callback)
        index = PubSub.subscribers[eventName].length - 1;

        return{
            unsubscribe(){
                PubSub.subscribers[eventName].splice(index, 1);
            }
        }
    }

    static publish<T>(eventName: string, data: T){
        PubSub.subscribers[eventName]?.forEach((subscriberCallback:(data:T) => void) => subscriberCallback(data));
    }
}

