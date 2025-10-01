import { contactData } from "../data/contact";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-12 font-lora">
          Venue & Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4 font-lora">
              Location
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              {contactData.location}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {contactData.address}
            </p>

            <h3 className="text-2xl font-bold text-secondary mt-8 mb-4 font-lora">
              Contact Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Email:</strong> {contactData.email}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Phone:</strong> {contactData.phone}
            </p>
          </div>

          {/* Map */}
          <div className="h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={contactData.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gujarat University Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
