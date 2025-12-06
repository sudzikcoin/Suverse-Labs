import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const flattened = result.error.flatten();
        const firstFieldError = Object.values(flattened.fieldErrors)[0]?.[0];
        const message = firstFieldError || "Validation failed. Please check your input.";
        return res.status(400).json({ 
          message,
          errors: flattened.fieldErrors 
        });
      }

      const contactMessage = await storage.createContactMessage(result.data);
      
      return res.status(201).json({ 
        message: "Thank you for your message. We will get back to you soon!",
        id: contactMessage.id 
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      return res.status(500).json({ message: "An error occurred. Please try again later." });
    }
  });

  return httpServer;
}
