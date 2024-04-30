function Card({img , people , info}) {
    return (
        <>
            <div className="imgContainer text-center flex  justify-center w-96 mt-6 pt-6 pb-6  flex-col items-center ">
                <figure>
                    <img src={img} style={{ width: "150px" }} />
                </figure>
                <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>{people}</h3>
                <p style={{ fontWeight: "bold", fontSize: "15px", color: "gray" , margin :"10px 0px"}}>{info}</p>
            </div>
        </>
    )
}
export default Card;