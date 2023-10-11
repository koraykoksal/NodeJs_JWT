"use strict"

// npm i jsonwebtoken

const Personnel = require('../models/personnel.model')

module.exports = {

    login:async (req,res,next)=>{

        const  {username,password} = req.body
        
        if(username & password){
            const user = await Personnel.findOne({username,password})

            if(user){

                if(user.isActive){
                    // LOGİN OK

                    const jwtData={
                        _id:user.id,
                        departmentId:user.departmentId,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        isActive:user.isActive,
                        isAdmin:user.isAdmin,
                        isLead:user.isLead
                    }

                    const refreshData={
                        username:user.username,
                        password:user.password,
                    }
                }
                else{
                    res.errorStatusCode = 401
                    throw new Error('This account is not active.')
                }
            }
            else{

                res.errorStatusCode = 401
                throw new Error('Username or Password Wrong.')
            }
        }
    },

    refresh:async (req,res,next)=>{

    },

    logout:async (req,res,next)=>{

    }
}