function Card( {children, reverse} ) {
    return ( //if reverse && 'reverse' return `card false' else 'card reverse'
        <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    )
}

export default Card

/*
.card {
  background-color: #fff;
  color: #333;
 ...
}

.card.reverse {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}

*/