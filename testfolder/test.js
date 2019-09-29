/*const should= require("should");
const request = require("request");
const expect = require("chai").expect;
const bUrl="https://arcane-savannah-06691.herokuapp.com";
const util =require("util");
const {assert} = ( chai = require("chai") );*/

/*describe('return []',()=>{
    it('return []',(done)=>{
        request.get({url:bUrl+"/api/v1/users"},()=>{
            expect(response.statusCode).to.equal(200);
            done();
        })
    })

});*/
const chai = require("chai"); 
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);
const server = require("../index").app;
describe("user", ()=>{ 
    describe("GET/https://arcane-savannah-06691.herokuapp.com/api/v1/users",()=>{
        it("it should get an array",done=>{
            chai.request(server).
            get("https://arcane-savannah-06691.herokuapp.com/api/v1/users").
            end(()=>{
                (res).should.have.status(200);
               (res.body).should.be.a("object");
               done();
            })
        })
    })
    
});