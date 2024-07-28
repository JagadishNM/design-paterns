import PubSub from './pub-sub';
import publishEvent from './app-1';

let subscription: any;
function subscribeEvent1(){
     subscription = PubSub.subscribe('eventName', (data: any) =>{
        console.log(data.msg, '1');
    })
}

function subscribeEvent2(){
    PubSub.subscribe('eventName', (data: any) =>{
        console.log(data.msg,'2')
    })
}

subscribeEvent1();
subscribeEvent2();
publishEvent();
subscription.unsubscribe();
publishEvent();
//setTimeout(publishEvent,2000)