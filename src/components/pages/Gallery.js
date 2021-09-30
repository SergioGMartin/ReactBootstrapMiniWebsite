import { useEffect,useState } from "react";



const Gallery = () => {
    /* Logic load API */

    const [gallery,setGallery] = useState([]);

    const loadGallery = () => {
        fetch("https://picsum.photos/v2/list?page=6&limit=8")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGallery(data); })
    }

    useEffect(() => { loadGallery(); }, [])

    const ListImages = () => (
        <div className="row">
        { gallery.map( (img) => { 
            const url = "https://picsum.photos/id/" + img.id + "/600/400";
            return(
                <div key={img.id} className= "col-12 col-md-4 mb-3" >
                    <img src={url} className="img-fluid" />
                    <h4 className="text-center">{ img.author}</h4>
                </div >
            )
        })
        }
        </div>
    )

return (
    <section>
        <div className="container-fluid">
            <div className="row">
                <h1 className="h3">Gallery</h1>
            </div>
            <div className="row">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..</p>
                <ListImages />
            </div>
        </div>
    </section>
)
}

export default Gallery