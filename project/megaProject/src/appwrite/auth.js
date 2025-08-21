import conf from '../config/conf.js'

import { Client, Account, ID } from "appwrite";

export class AuthService {

    Client = new Client();
    acount;

    constructor()
    {
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.acount = new Account(this.Client);
    }

    async createAccount({email,password,name}){
        try {
         const userAccount= await this.acount.create(ID.unique(),email, password, name);
         if(userAccount)
         {
            //call back to login page or redirect to home page
            return this.login({email, password});
         }
         else{
            return userAccount;
         }
        } catch (error) {
            console.log("Appwrite :: createAccount Error: ", error);
        }
    }

    async login({email,password}){
        try {
            return this.acount.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite :: login Error: ", error);
            
        }
    }

    async getCurrentUser(){
        try {
            return this.acount.get();
        } catch (error) {
            console.log("Appwrite service:: currentUse Error: ", error);
        }

        return null;
    }

    async logout()
    {
        try {
          return await this.acount.deleteSession();
        } catch (error) {
            console.log("Appwrite service:: logout Error: ", error);
            
        }
    }
}

const authService = new AuthService();

export default authService