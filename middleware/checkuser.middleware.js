const checkUser = (req,res,next) => {
    console.log('inside middleware')
}

export default checkUser

/* Middleware is just a function
When the execution of middleware gets completed, we want to run the real function
When we use the next function it makes sure that if theres another function that exists,
it calls that function.

*/