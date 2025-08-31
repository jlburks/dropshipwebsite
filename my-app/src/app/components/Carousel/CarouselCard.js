export default function CarouselCard(props) {
    return(
        <img style={{width:'30px'}} key={props.index} src={props.item}></img>
    )
}