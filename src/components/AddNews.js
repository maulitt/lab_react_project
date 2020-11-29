import React, {useState} from "react";
import Button from "@material-ui/core/Button";

export function AddNews() {
    const [title, setTitle] = useState();
    const [preview, setPreview] = useState();
    const [date, setDate] = useState();
    const [text, setText] = useState();
    function handleSubmit(event) {
        event.preventDefault();
        alert('С ДНЁМ МАМЫ, МАМА! <3 <3');
    }
    return(
        <form>
            <div id="add">
                <div className="addnew">
                    <h1>What's up?</h1>
                    <p><b>Title</b>
                        <label>
                            <input
                                value={title}
                                name="title"
                                type="text" size="40"
                                placeholder={'Give a title to your piece...'}
                                maxLength={150}
                                onChange={event => { setTitle(event.target.value) } }
                            />
                        </label>
                    </p>
                    <p><b>Preview</b>
                        <label>
                            <textarea
                                value={preview}
                                name="preview"
                                placeholder={'Describe it in a few words, don\'t be shy...'}
                                maxLength={200}
                                onChange={event => { setPreview(event.target.value) } }
                            />
                        </label>
                    </p>
                    <p><b>Article!</b>
                        <label>
                            <textarea
                                value={text}
                                name={'text'}
                                placeholder={'Let\'s go, I\'m ready, what\'s new, what\'s up?'}
                                onChange={event => {setText(event.target.value)}}
                            />
                        </label>
                    </p>
                    <p><Button type="submit" disabled={!title || !preview || !text} onClick={handleSubmit}>Submit</Button></p>
                </div>
            </div>
        </form>
    )

}