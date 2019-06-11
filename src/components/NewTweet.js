import React, {Component} from 'react';

class NewTweet extends Component {

    state = {
        text: ''
    }

    handleChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {text} = this.state;

        //TODO: add tweet to the store

        console.log('New Tweet: ', text);

        this.setState(() => ({
            text: ''
        }))
    }

    render() {
        const {text } = this.state;

        {/* TODO: Redirect to home view if submitted*/}

        const tweetLeft = 280 - text.length;

        return (
            <div>
                <h3 className="center">Compose new Tweet</h3>
                <form onSubmit={this.handleSubmit} className='new-tweet'>
                    <textarea
                        maxLength={280}
                        className='textarea'
                        onChange={this.handleChange}
                        placeholder="What's happening"/>

                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>{tweetLeft}</div>
                    )}

                    <button className='btn' type='submit' disabled={text === ''}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }

}

export default NewTweet;
