"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How much do I need to start investing?",
    answer:
      "You can start with as little as $200 for vegetable farming. Investment minimums vary by farm category: Fish Farming ($500), Tuber Crops ($300), Vegetables ($200), and Cereal Crops ($250).",
  },
  {
    question: "What returns can I expect?",
    answer:
      "Returns vary by farm category and cycle duration. Fish farming offers 40-60% ROI over 4-12 months, vegetable farming can yield 50-80% per cycle. You receive 70% of all profits.",
  },
  {
    question: "Is my investment protected?",
    answer:
      "Yes, all farms are covered by comprehensive agricultural insurance protecting against natural disasters, pests, diseases, and market fluctuations.",
  },
  {
    question: "Can I visit my farm?",
    answer:
      "You can schedule farm visits anytime through your dashboard. We also offer agri-tourism packages for extended stays at our farm cottages.",
  },
  {
    question: "How do I receive my profits?",
    answer:
      "Profits are deposited directly to your GoFA wallet after harvest and sales. You can withdraw to your bank account, mobile money, or reinvest in new farming cycles.",
  },
  {
    question: "What happens if I'm in the diaspora?",
    answer:
      "GoFA is designed for both local and diaspora investors. We support international payments and provide real-time updates so you can monitor your farm from anywhere in the world.",
  },
]

export function HowItWorksFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-28 bg-sage/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Got questions? We've got answers. If you don't find what you're looking for, contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="bg-background rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
