function Chai() {
    const mentorName = 'HC';
    // we can write her e our js code and we inject it in our html code by using {} method.
    return (
        <h1>Chai aur React with Vite | Ali Hasan | The mentor in {mentorName}</h1>
        //  here we can inject variables in our html elemnet by using {} syntax.
        // {mentorName} is called the Evaluated Expression and it is the final outcome of js.
        // we can't writewhole js code in this {} like {const a = 8;} it will be always give error
    )
}

export default Chai