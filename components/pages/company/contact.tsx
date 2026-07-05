import { ContactForm } from "@/components/forms";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Contact</h2>
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
