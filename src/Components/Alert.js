import React from 'react'

export default function Alert(props) {

    const Capitalise = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (

    //if initially props.alert is null so div will not be evaluated
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalise(props.alert.type)} : </strong>{props.alert.msg}
    </div>
  ) 
}
