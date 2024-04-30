function Button({buttonStyles}){
    console.log("button" , buttonStyles);
   
   //const btnStyle = Button;
   return(
    <>    
            <div className="btn">
                <button style={{background : buttonStyles.background, color : "black", padding :"12px" , borderRadius  :"0px"}}>Sing in</button>
            </div>
        </>
   )
        
    
}
export default Button;