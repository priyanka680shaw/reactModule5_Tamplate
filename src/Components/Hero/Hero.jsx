function Hero(){
  return(
    <>
    <div className="container w-full p-10 h-2/5 flex justify-center items-center bg-blue-900" style={{color : "white"}} >
        <div className="cardBod w-1/2  flex flex-col justify-center items-center p-6">
            <h1 className="font-black text-4xl">See Values From Social Sooners</h1>
            <p className="text-base text-center mt-6 mb-6">our traning  and stragaic services helped<br/>Thousands od organizations successed in Social</p>
            <button style={{background: "green" , padding :"10px 40px"} }>Request a Demo</button>
        </div>
    </div>
</>
  )
}
export default Hero;