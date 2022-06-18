import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type PropRating = {
    rating: number;
    onClick: Function;
    style?: React.CSSProperties | undefined
}
const Rating = ({ rating, onClick, style }: PropRating) => {
    return (
        <>
            {[...Array(5)].map((_, i) => (
                <span key={i} onClick={() => onClick(i)} style={style}>
                    {rating > i ? (
                        <AiFillStar fontSize="15px" />
                    ) : (
                        <AiOutlineStar fontSize="15px" />
                    )}
                </span>
            ))}
        </>
    );
};

export default Rating;
