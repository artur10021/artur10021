import React from "react"
import classes from "./Dialogues.module.css"
import Contact from "./DialoguesItems/contacts"
import Message from "./DialoguesItems/masseges"



function Dialogues(props) {


    let contactsItems = props.state.contactsData.map((elem) => <Contact name={elem.name} id={elem.id} imgMassegeAvatar={elem.img} />)
    let masseges = props.state.massegesData.map((elem) => <Message id={elem.id} massegeText={elem.massegeText} />)

    let newMassageElem = React.createRef();

    let textMassage = () => {
        let text = newMassageElem.current.value;
        alert(text);
    }

    return (
        <div className={classes.dialogues}>
            <div className={classes.contacts}>
                <input className={classes.contactSearchInput} />
                {contactsItems}
            </div>
            <div className={classes.messages}>
                {masseges}
                <textarea ref={newMassageElem} className={classes.massegeTextarea}></textarea>
                <button onClick = {textMassage} >text massage</button>
            </div>
        </div>
    );
}
export default Dialogues;