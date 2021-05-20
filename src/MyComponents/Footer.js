import React from 'react'

export const Footer = () => {
   let footerStyle = {
       position:"relative",
       top:"70vh",
       width:"100%",
       border: "solid red 2px"

    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">

           
            Copyright &copy; MyTodosList.com
        </p>
        </footer>
    )
}
