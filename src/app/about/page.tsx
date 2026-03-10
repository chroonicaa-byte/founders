import type { Metadata } from 'next'
import Link from 'next/link'
// import { ArrowRight, Mic, Target, Heart, Zap, Award } from 'lucide-react'

import { ArrowRight, Mic, Target, Heart, Zap, Award,CheckCircle2 ,Building2,} from 'lucide-react'
// import { ArrowRight, CheckCircle2, Mic, Building2, Users, GraduationCap, Star, ChevronRight } from 'lucide-react'

export const metadata: Metadata = { title: 'About – Real HR. Real Story.' }

const values = [
  { icon: Target, title: 'Real Experience Over Theoretical Advice', desc: 'The insights shared here — through conversations with founders and professionals — are grounded in real operational challenges, not textbook concepts.' },
  { icon: Heart, title: 'Strong Foundations Build Strong Team', desc: 'Compliance, role clarity, structured hiring, and performance accountability are the base of sustainable growth.' },
  { icon: Zap, title: 'Honest Dialogue Drives Better Decisions', desc: 'Open discussions about mistakes, challenges, and learning curves create smarter founders and more confident professionals.' },
  { icon: Award, title: 'Clarity Creates Direction', desc: 'Whether building a company or a career, clarity in systems, expectations, and goals leads to long-term confidence and success.' },
]

const missionPoints = [
  'Help founders build strong, compliant, high-performing teams.',
  'Help professionals navigate career growth with clarity and strategic direction.',
  'Bridge the gap between HR systems and real business realities.',
  // 'Lessons from hiring mistakes and leadership decisions',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
          <div className="w-96 h-96 rounded-full bg-gold-500 blur-[100px] ml-auto mt-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">About Us</p>
            <h1 className="heading-hero text-white mb-6">
              HR Without the Corporate Script
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              Founders Unfiltered exists to bring practical, honest, and experience-driven insights to new  founders and growing businesses & working professionals.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 10C1200 50 960 70 720 40C480 10 240 -10 0 30Z" fill="#F9F7F4" /></svg>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">The Story</p>
              <h2 className="heading-xl mb-6">Bridging the Gap: People, Process, and Performance</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                I’m an HR professional with years of experience across payroll management, statutory compliance, employee lifecycle operations, and corporate HR strategy. My work has consistently focused on building structured, legally sound, and people-centric systems that help businesses grow sustainably.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Through this platform, I combine my HR expertise with meaningful conversations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a podcast host, I engage with founders, business leaders, and experienced professionals to explore the real side of entrepreneurship — team building, compliance challenges, leadership decisions, hiring mistakes, career transitions, and growth strategies. These conversations are practical, honest, and focused on execution — not theory.
              </p>
              <h4 className="heading-xl mb-4">
                My mission is clear:
              </h4>
               <div className="space-y-3">
                {missionPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{point}</span>
                  </div>
                ))}
              <p className="text-muted-foreground text-lg leading-relaxed">
               This platform is not about generic advice.
               </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
               It is about structure, insight, and practical understanding.
               </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
               If you’re building a company or building your career — you’re in the right place.
               </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
               Let’s build with clarity and confidence.
               </p>
              </div>
              <Link href="/services"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gold-gradient text-brand-900 font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                See What We Offer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="bg-brand-gradient rounded-2xl p-8 text-white">
                <Mic className="h-8 w-8 text-gold-400 mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">The Podcast Side</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Founders Unfiltered is a podcast where we break down real business journeys — from zero to profitability. No gyaan, no theory — only practical insights, mistakes, and systems that actually work. The goal is to inspire students, aspiring entrepreneurs, and professionals through honest conversations
                </p>
                 <p className="text-white/70 text-sm leading-relaxed">
                  On this channel, will connect with entrepreneurs and businessmen to break down how their businesses work—from idea to execution. We discuss business models, management strategies, failures, and growth stories to help new entrepreneurs learn faster and smarter.
Perfect for anyone who wants to start a business or improve the one they already have.
                  </p>
                <Link href="/podcast" className="inline-flex items-center gap-1 text-gold-400 text-sm font-semibold mt-4 hover:text-gold-300">
                  Listen to episodes <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* <div className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold mb-4">Who We Work With</h3>
                <div className="space-y-3">
                  {[
                    { emoji: '🏢', text: 'Startups (5–100 employees) building their first HR systems' },
                    { emoji: '🧑‍💼', text: 'SME founders navigating payroll and compliance for the first time' },
                    { emoji: '🎓', text: 'Freshers and students entering the job market' },
                    { emoji: '🔄', text: 'Professionals restarting after a career gap' },
                    { emoji: '📈', text: 'Experienced professionals planning their next move' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-base">{item.emoji}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="heading-xl mb-4">Our Working Principles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-background rounded-2xl p-7 border border-border card-lift">
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center mb-5">
                  <v.icon className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="heading-lg text-white mb-4">Let's Talk — No Pitch, No Pressure</h2>
          <p className="text-white/70 mb-8 text-lg">A 20-minute discovery call is all it takes to figure out how we can help.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-brand-900 font-semibold shadow-xl shadow-gold-500/25 hover:opacity-90 transition-opacity"
          >
            Book a Call <ArrowRight className="h-5 w-5" />
          </Link>
        </div> 
      </section>
    </>
  )
}
