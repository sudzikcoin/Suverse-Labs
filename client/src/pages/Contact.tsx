import { useState } from "react";
import { PageShell, PageHeader, Section } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/lib/siteConfig";
import { Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: data.message || "We'll get back to you as soon as possible.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = insertContactMessageSchema.safeParse(formData);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(validation.data);
  };

  if (isSubmitted) {
    return (
      <PageShell>
        <PageHeader 
          title="Contact"
          subtitle="For partnerships, pilots, and general inquiries, contact SuVerse Labs."
        />

        <Section className="pt-0">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-900/50 border-white/10 p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-chart-2/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-chart-2" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Thank You!
              </h2>
              <p className="text-muted-foreground mb-6">
                Your message has been received. We'll review it and get back to you as soon as possible.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", company: "", subject: "", message: "" });
                  contactMutation.reset();
                }}
                data-testid="button-send-another"
              >
                Send Another Message
              </Button>
            </Card>
          </div>
        </Section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <PageHeader 
        title="Contact"
        subtitle="For partnerships, pilots, and general inquiries, contact SuVerse Labs."
      />

      <Section className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-slate-900/50 border-white/10 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-slate-900 border-slate-700 focus:border-chart-1 focus:ring-chart-1/20"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-slate-900 border-slate-700 focus:border-chart-1 focus:ring-chart-1/20"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company / Organization
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company or organization"
                    className="bg-slate-900 border-slate-700 focus:border-chart-1 focus:ring-chart-1/20"
                    data-testid="input-company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className="bg-slate-900 border-slate-700 focus:border-chart-1 focus:ring-chart-1/20"
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className="bg-slate-900 border-slate-700 focus:border-chart-1 focus:ring-chart-1/20 min-h-[150px] resize-none"
                    data-testid="input-message"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full md:w-auto bg-gradient-to-r from-chart-1 to-chart-1/80"
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-900/50 border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-chart-1/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-chart-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-muted-foreground hover:text-chart-1 transition-colors text-sm"
                    data-testid="link-contact-email"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/50 border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    United States
                  </p>
                </div>
              </div>
            </Card>

            <div className="p-6 rounded-lg bg-slate-900/30 border border-white/5">
              <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
              <p className="text-sm text-muted-foreground">
                We typically respond to inquiries within 1-2 business days. For urgent 
                matters, please indicate so in your message.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
