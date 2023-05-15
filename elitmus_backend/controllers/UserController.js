import User from "../models/User.js";
import * as argon2 from "argon2";
import pkg from 'jsonwebtoken';
const {sign} = pkg;
const  SECRET_KEY = "NOTESAPI";

const signup = async( req, res) => {
    const {name, email, password} = req.body;
    
    console.log(req.body);
// existing user check 
    let user = await User.findOne({where: {
        email
      }});

    if(user){
        return res.status(400).json({error:"User Already Exists"});
    }
// used argon instead of bcrypt , new way of hashing 
    let passwordHash = await argon2.hash(password);

    // user creation 
    user = await User.create({
        name,
        email,
        password: passwordHash
    });

    const token = sign({email,id : user.userId},SECRET_KEY)
    return res.status(201).json({user,token});
}


const signin = async (req,res) =>{
    const {email, password} = req.body;
    console.log(email);
    try{
        let user = await User.findOne({where: {
            email
          }});
    
        if(!user){
            return res.status(404).json({error:"User Not Found"});
        }

        const matchedPassword = await argon2.verify(user.password, password);
        if(!matchedPassword){
            return res.status(400).json({error:"Invalid Password"});
        }

        console.log(user.email)

        let token = sign({email : user.email,id:user.userId},SECRET_KEY)
        
        return res.status(200).json({token, user});

    }catch(error){
        console.log(error)
        res.status(400).json({error:"Bad Request"});
    }
}

export {signup,signin};