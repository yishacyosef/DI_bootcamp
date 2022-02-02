const MoviesList = (props) => {
    return (
        <>
            <h2>Movie List</h2>
            {
                props.map((item, i)=>{
                    return(
                        <div key={i}>
                            <span>{item.title}</span>
                            <button>Detail</button>
                        </div>
                    )
                })
            }
        </>
    )
}