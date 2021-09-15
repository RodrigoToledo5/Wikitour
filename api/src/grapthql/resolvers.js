const {Router} = require('express');
const {Country} = require('../db');


export const resolvers={
    Query:{
        hello:()=>{
            return 'Hellow con graphql'
        },
        greet:(root,{name})=>{
            return `Hello ${name}`
        },
        country:async(root,{id})=>{
            const country=await Country.findByPk(id);  
            return country;
        }
    }
};