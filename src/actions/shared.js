import {getInitialData} from '../utils/api';
import {receiveTweets} from './tweets'

export function handleInitialData() {
    return (dispatch)=>{
        return getInitialData().then(({users, tweets}) => {

        })
    }
}
