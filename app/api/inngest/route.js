import { serve } from "inngest/next";
import { Inngest } from "inngest";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});
// export const inngest = new Inngest({ name: "Quick Cart App" });
