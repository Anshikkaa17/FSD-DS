async function fetchdata(){
    try{
        let response = await fetch("https://api.github/users?per_page=10");
        let data = await response.json();
        //console.log(data);
        data.forEach((element) =>{
            let h1 =document.createElement('h1');
            h1.textContent = element.login; 
            let a = document.createElement("a");
            a.textContent = element.login;
            a.setAttribute("herf", element.html_url);
            let top = document.getElementByIdById('top');
            top.appendChild(h1);
            top.appendChild(a);

        }
        );
    }
    catch (error){
        console.log(error);
    }
}
