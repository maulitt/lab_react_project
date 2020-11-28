import React, {useState} from "react";
import Button from "@material-ui/core/Button";

export function AddNews() {
    const [title, setTitle] = useState();
    const [preview, setPreview] = useState();
    const [date, setDate] = useState();
    const [text, setText] = useState();
    function handleSubmit(event) {
        event.preventDefault();
        alert('success!');
    }
    return(
        <form>
            <div id="mainy">
                <div className="registration">
                    <h1>What's up?</h1>
                    <p><b>Title</b> <br />
                        <label>
                            <input
                                value={title}
                                name="name"
                                type="text" size="40"
                                placeholder={'Title..'}
                                onChange={event => { setTitle(event.target.value) } }
                            />
                        </label>
                    </p>
                    <p><b>Preview</b><br />
                        <label>
                            <textarea
                                value={preview}
                                name="preview"
                                placeholder={'Preview..'}
                                onChange={event => { setPreview(event.target.value) } }
                            />
                        </label>
                    </p>

                </div>
                <div className="right">
                    <textarea value={text}
                              name={'text'}
                              placeholder={'Your news...'}
                              onChange={event => {setText(event.target.value)}}> </textarea>
                    <p><Button type="submit" disabled={!title || !preview || !text} onClick={handleSubmit}>Submit</Button></p>
                </div>
            </div>
        </form>
    )

}