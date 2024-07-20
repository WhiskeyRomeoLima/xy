function FeedbackStats({feedback}) {

    //calculate average.  Each item in feedback is an object which 'cur' will refer to 
    const ratingSum = feedback.reduce((acc, cur) => acc+cur.rating, 0)
    let ratingAverage = ratingSum/feedback.length
   
    // let average = feedback.reduce((acc, cur) => acc+cur.rating, 0) /feedback.length
    // console.log(average)

   ratingAverage = ratingAverage.toFixed(1).replace(/[.,]0$/, '')

    return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(ratingAverage) ? 0 : ratingAverage }</h4>  
    </div>
    )
}
export default FeedbackStats