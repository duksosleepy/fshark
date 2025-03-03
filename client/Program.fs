open Browser
let div = document.createElement "div"
div.innerHTML <- "Hello from F# and Fable!"
document.body.appendChild div |> ignore
