import conf from '../config/conf.js'

import { Client, ID , Databases, Query, Storage} from "appwrite";

export class Service {

    Client = new Client();
    database;
    bucket;

    constructor()
    {
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.database = new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Error creating post: ", error);
            
        }
    }

    async updatePost(slug, {title,content,featuredImage,status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Error updating post: ", error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Error deleting post: ", error);
            return false;
        }
    }

    async getPost(slug)
    {
        try {
           return this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error getting post: ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Error getting posts: ", error);
            
        }
    }

    // file upload service

    async uploadFile(file)
    {
        try {
            return await this.bucket.uploadFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Error uploading file: ", error);
            
        }
    }

    async deleteFile(fileId)
    {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("upload file error: ", error);
            return false
        }
    } 

    getFilePreview(filed){
        return this.bucket.getFilePreview(conf.appwriteBucketId, filed)
    }
}

const service = new Service();

export default service;