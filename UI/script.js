const objList =[];

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

}