

class User{
constructor(firstName,lastName,email,userName,password,gender,jobRole,department,address){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.userName=userName;
    this.password=password;
    this.gender=gender;
    this.jobRole=jobRole;
    this.department=department;
    this.address=address;
}
getUserName(){
return this.userName;
};
setUserName(name){
    this.userName=name;
}
getPassword(){
    return this.password;
}
postArticle(comment){
    
}
}
 
