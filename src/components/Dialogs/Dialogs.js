import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
       <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              <div className={`${s.dialog} ${s.active}`}>Anya</div>
              <div className={s.dialog}>Bitler</div>
              <div className={s.dialog}>Stepan</div>
              <div className={s.dialog}>Orko</div>
              <div className={s.dialog}>Olena</div>
          </div>
          <div className={s.messages}>
              <div className={s.message}>Hello</div>
              <div className={s.message}>How are you?</div>
              <div className={s.message}>I am fine</div>
          </div>
       </div>
    )
}

export default Dialogs;
