import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const inputClasses =
  "bg-[#0C1018] border-white/10 text-[#F0F4F8] placeholder:text-[#8899AA]/50 focus:border-[#00D4FF]/50 focus:ring-[#00D4FF]/20";

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
      const json = await response.json();
      if (!json.ok) {
        throw new Error(json.error || "Failed to send message");
      }
      return json;
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

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#060910" }}>
        {/* Cyan radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00D4FF]/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-[#00FF88]/[0.03] rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F0F4F8] leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
            data-testid="text-page-title"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#8899AA]/80 max-w-2xl leading-relaxed"
            data-testid="text-page-subtitle"
          >
            Whether you're a carrier, investor, or technology partner — we'd love to connect.
          </motion.p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#060910" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="rounded-xl border border-white/[0.06] bg-[#0C1018] p-10 md:p-14 text-center">
                <div className="w-16 h-16 rounded-full bg-[#00FF88]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#00FF88]" />
                </div>
                <h2
                  className="text-2xl font-semibold text-[#F0F4F8] mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Thank You!
                </h2>
                <p className="text-[#8899AA] mb-8 leading-relaxed">
                  Your message has been received. We'll review it and get back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  className="bg-transparent border-white/10 text-[#F0F4F8] hover:bg-white/5"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
                    contactMutation.reset();
                  }}
                  data-testid="button-send-another"
                >
                  Send Another Message
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Left: contact info */}
              <div className="lg:col-span-2 space-y-5">
                {/* Email card */}
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="rounded-xl border border-white/[0.06] bg-[#0C1018] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F0F4F8] mb-1">Email</h3>
                      <a
                        href="mailto:contact@suverselabs.com"
                        className="text-[#8899AA] hover:text-[#00D4FF] transition-colors text-sm"
                        data-testid="link-contact-email"
                      >
                        contact@suverselabs.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Location card */}
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="rounded-xl border border-white/[0.06] bg-[#0C1018] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00FF88]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#00FF88]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F0F4F8] mb-1">Location</h3>
                      <p className="text-[#8899AA] text-sm">United States</p>
                    </div>
                  </div>
                </motion.div>

                {/* Response time note */}
                <motion.p
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="text-sm text-[#8899AA]/70 px-1"
                >
                  We typically respond within 24–48 hours.
                </motion.p>

                {/* What to include */}
                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="rounded-xl border border-white/[0.06] bg-[#0C1018] p-6"
                >
                  <h4 className="font-semibold text-[#F0F4F8] mb-3 text-sm uppercase tracking-wider text-[#00D4FF]">
                    What to include
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Your company / role",
                      "What you're building or need",
                      "How you found us",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#8899AA]/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00D4FF]/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Right: contact form */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="lg:col-span-3"
              >
                <div className="rounded-xl border border-white/[0.06] bg-[#0C1018] p-7 md:p-10">
                  <h2
                    className="text-xl font-semibold text-[#F0F4F8] mb-7"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Send us a message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-[#F0F4F8]">
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
                          className={inputClasses}
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-[#F0F4F8]">
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
                          className={inputClasses}
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-[#F0F4F8]">
                        Company{" "}
                        <span className="text-[#8899AA]/60 font-normal">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company or organization"
                        className={inputClasses}
                        data-testid="input-company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium text-[#F0F4F8]">
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
                        className={inputClasses}
                        data-testid="input-subject"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-[#F0F4F8]">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        className={`${inputClasses} min-h-[150px] resize-none`}
                        data-testid="input-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full md:w-auto bg-[#00D4FF] text-[#060910] font-semibold border-0 hover:bg-[#00C0E8] hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all px-8"
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
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
