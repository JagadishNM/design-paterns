import PubSub from './pub-sub';


export default function publishEvent(){
    const data = {
        msg: 'Published scuccefully!'
    }
    PubSub.publish('eventName', data)
}