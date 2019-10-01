

class User{
    constructor(name,userName,password){
        this._name=name;
        this._userName=userName;
        this._password=password;
        this.list=[];
    }
    getUserName(){
    return this._userName;
    };
    setUserName(name){
        this._userName=name;
    }
    getPassword(){
        return this._password;
    }
    postArticle(comment){
        this.list.push(comment);
        let len=this.list.length-1;
        return this.list[len];
    }
    
    
    createPage(){
    let win=window.open("");
    win.document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${this.getUserName} page</title>
        <link rel="stylesheet" href="./styling.css"/>
       
    </head>
    <body>
            <header id="header"><img src="./logo.svg" /> <h1>TeamWork</h1></header>
            <nav>
                <ul>
                    <li><a href="./Home.html">Home</a></li>
                    <li>About Us</li>
                </ul>
            </nav>
            <article id="leftBar">
            
            </article>
            <section></section>
            <footer>
                    <h3> Teamwork copyright &copy; 2019</h3>
                </footer>
    </body>
    </html>`);
    }
     
    }
    window.onmouseover =()=>{
        let obj=document.querySelector("div.inner");
        if(obj==null) return;
    obj.addEventListener("click",()=>{
        location.assign("./articles.html");
       
        });
};