"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    }
});
UserSchema.methods.validatePassword = function (password) {
    if (this.password === '*') {
        return false;
    }
    return bcrypt_1.default.compareSync(password, this.password);
};
exports.default = mongoose.model("User", UserSchema);
/*
//represents a user in the system
export class UserModel{
    id?='';
    email = '';
    private _password='';

    //when user password is set through here, it is stored encrypted
    set password(val:string){
        this._password=UserModel.encryptString(val);
    }
    //returns encrypted password
    get password():string{return this._password;}

    //encrypts password
    public constructor(email:string,password:string){
        this.email=email;
        this.password=password;
    }

    //does not encrypt password, expects already encrypted password
    static fromObject=(obj:any):UserModel=>{
        const mdl=new UserModel(obj.email,'');
        mdl._password=obj.password;
        return mdl;
    }

    //includes encrypted password
    toObject=(): any=> ({email: this.email,password: this.password});

    //compares unencrypted password to encrypted password
    validatePassword(password:string):boolean{
        if (this.password==='*') {return false;}
        return bcrypt.compareSync(password,this.password);
    }
    
    //encrypt a string using the bcrypt library
    static encryptString(inval:string):string{
        try {
            var salt  = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(inval, salt);
        }catch (err){
            return '*';
        }
    }
}
*/ 
//# sourceMappingURL=userModel.js.map