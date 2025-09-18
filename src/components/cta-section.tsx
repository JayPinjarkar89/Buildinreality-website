import { FiArrowRight, FiMail, FiPhone } from "react-icons/fi"

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-stone-950 via-accent to-stone-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Ready to Transform Your Construction Projects?
            </h2>
            <p className="text-xl text-slate-50/80 max-w-3xl mx-auto">
              Join the construction revolution with Buildinreality. Experience
              the future of project visualization and execution today.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-lime-400 text-slate-900 font-semibold hover:bg-lime-400/90 transition">
              Start Your Project
              <FiArrowRight />
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-100/20 text-slate-50 font-semibold bg-transparent hover:bg-slate-50/10 transition">
              <FiPhone />
              Schedule Demo
            </button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-slate-100/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-50/80">
              <div className="flex items-center space-x-2">
                <FiMail />
                <span>contact@buildinreality.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
