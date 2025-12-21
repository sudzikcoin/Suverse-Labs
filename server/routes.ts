import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

      const { name, email, company, subject, message } = result.data;

      const contactMessage = await storage.createContactMessage(result.data);

      try {
        await resend.emails.send({
          from: "SuVerse Labs <onboarding@resend.dev>",
          to: "info@suverse.io",
          replyTo: email,
          subject: `[SuVerse.io Contact] ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
            <hr />
            <p><small>Submitted at: ${new Date().toISOString()}</small></p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send email via Resend:", emailError);
      }
      
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
