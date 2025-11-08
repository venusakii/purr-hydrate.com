"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5">
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-2xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl p-6">
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center pr-8">
            <div className="flex-1 space-y-2">
              <h3 className="font-heading text-lg font-semibold flex items-center gap-2">
                <span className="text-2xl">🍪</span>
                Cookie Consent
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This website uses cookies to enhance your experience and analyze site usage. By continuing, you consent
                to our use of cookies. Learn more in our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                onClick={acceptCookies}
                className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap"
              >
                Accept Data Flow
              </Button>
              <Button onClick={declineCookies} variant="outline" className="whitespace-nowrap bg-transparent">
                Decline
              </Button>
            </div>
          </div>

          {/* Animated flow effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-flow" />
          </div>
        </div>
      </div>
    </div>
  )
}
