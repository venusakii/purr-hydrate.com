"use client"

import type React from "react"

import { useState } from "react"
import { MolecularBackground } from "@/components/molecular-background"
import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <MolecularBackground />
      <div className="relative z-10">
        <NavHeader />
        <main className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-balance">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our products? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">support@purr-hydrate.com</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">Within 24 hours</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 p-8">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Send className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
