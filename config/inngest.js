
// import { Inngest } from "inngest";
// import { connectDB } from "./db";
// import User from "../models/User";

// import { connect } from "mongoose";

// // Create a client to send and receive events
// export const inngest = new Inngest({ id: "quickcart-next" });
// // Inngest function to save user data to a database
// export const syncUserCreation = inngest.function({
//     id: "sync-user-from-clerk",
// },  
// { event: "clerk/user.created" },
// async ({ event }) => {
//     const{id, first_name, last_name, email_addresses, image_url} = event.data.user;
//     const userData ={
//         _id:id,
//         name:first_name + " " + last_name,
//         email:email_addresses[0].email_address,
//         imageUrl:image_url
//     }
//     await connectDB();
//     await User.create(userData);
// }
// )
// // Inngest Function to update user data in the database
// export const syncUserUpdation = inngest.createFunction({
//     id: "update-user-from-clerk",
// },
// { event: "clerk/user.updated" },
// async ({ event }) => {
//     const{id, first_name, last_name, email_addresses, image_url} = event.data.user;
//     const userData ={
//         _id:id,
//         name:first_name + " " + last_name,
//         email:email_addresses[0].email_address,
//         imageUrl:image_url
//     }
//     await connectDB();
//     await User.findByIdAndUpdate(id,userData);
// }
// )
// //Inngest function to delete user from database
// export const syncUserDeletion = inngest.function({
//     id: "delete-user-with-clerk",
// },
// { event: "clerk/user.deleted" },
// async ({ event }) => {
//     const{id} = event.data;
//     await connectDB();
//     await User.findByIdAndDelete(id);
// }
// )
import { Inngest } from "inngest";
import { connectDB } from "./db";
import User from "../models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ name: "Quick Cart App" }); // you can use 'name' instead of 'id'

// Inngest function to save user data to a database
// export const syncUserCreation = inngest.createFunction(
//   { id: "sync-user-from-clerk" },
//   { event: "clerk/user.created" },
//   async ({ event }) => {
//     const { id, first_name, last_name, email_addresses, image_url } = event.data.user;

//     const userData = {
//       _id: id,
//       name: `${first_name} ${last_name}`,
//       email: email_addresses?.[0]?.email_address,
//       imageUrl: image_url
//     };

//     await connectDB();
//     await User.create(userData);
//   }
// );
export const syncUserCreation = inngest.createFunction(
    { id: "sync-user-from-clerk" },
    { event: "clerk/user.created" },
    async ({ event }) => {
      const { id, first_name, last_name, email_addresses, image_url } = event.data.user;
  
      const userData = {
        _id: id,
        name: `${first_name} ${last_name}`,
        email: email_addresses[0].email_address,
        imageUrl: image_url,
      };
  
      await connectDB();
      await User.create(userData);
    }
  );
  
// Inngest function to update user data
// export const syncUserUpdation = inngest.createFunction(
//   { id: "update-user-from-clerk" },
//   { event: "clerk/user.updated" },
//   async ({ event }) => {
//     const { id, first_name, last_name, email_addresses, image_url } = event.data.user;

//     const userData = {
//       _id: id,
//       name: `${first_name} ${last_name}`,
//       email: email_addresses?.[0]?.email_address,
//       imageUrl: image_url
//     };

//     await connectDB();
//     await User.findByIdAndUpdate(id, userData);
//   }
// );
export const syncUserUpdation = inngest.createFunction(
    { id: "update-user-from-clerk" },
    { event: "clerk/user.updated" },
    async ({ event }) => {
      const { id, first_name, last_name, email_addresses, image_url } = event.data.user;
  
      const userData = {
        _id: id,
        name: `${first_name} ${last_name}`,
        email: email_addresses[0].email_address,
        imageUrl: image_url,
      };
  
      await connectDB();
      await User.findByIdAndUpdate(id, userData);
    }
  );
  
// Inngest function to delete user
// export const syncUserDeletion = inngest.createFunction(
//   { id: "delete-user-with-clerk" },
//   { event: "clerk/user.deleted" },
//   async ({ event }) => {
//     const { id } = event.data;

//     await connectDB();
//     await User.findByIdAndDelete(id);
//   }
// );
export const syncUserDeletion = inngest.createFunction(
    { id: "delete-user-with-clerk" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
      const { id } = event.data;
  
      await connectDB();
      await User.findByIdAndDelete(id);
    }
  );
  