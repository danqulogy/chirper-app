import {saveLikeToggle} from  '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

function toggleTweet({id, authedUser, hasLiked}) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet(info) {
    return function (dispatch) {
        // Using optimistic updates
        dispatch(toggleTweet(info));

        return saveLikeToggle(info)
            .catch((err) => {
                console.warn('Error in handleToggleTweet', err);
                dispatch(toggleTweet(info));
                alert('There was an error liking the tweet. Try again')
            })
    }
}
