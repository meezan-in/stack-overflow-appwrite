import { Permission } from "node-appwrite";
import { questionAttachmentBucket } from "../name";
import { storage } from "./config";

export default async function createStorageCollection(){

    try {
        await storage.getBucket(questionAttachmentBucket)
            console.log("Storage connected");
    } catch (error) {
        try {
            await storage.createBucket(
                questionAttachmentBucket,
                questionAttachmentBucket,
                [
                    Permission.read("any"),
                    Permission.create("users"),
                    Permission.update("users"),
                    Permission.delete("users"),
                    Permission.read("users"),],
                    false,
                    undefined,
                    undefined,["jpg", "jpeg", "png", "gif", "svg", "ico", "webp"]

                    
            )
            console.log("Storage Created");
                    console.log("Storage connected");
        } catch (error) {
            console.error("Error creating storage:", error);
        }
    }
}