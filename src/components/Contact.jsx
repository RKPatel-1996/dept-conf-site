import { useData } from "../context/DataContext"; // 👈 Import useData

const Contact = () => {
  const { data, loading, error } = useData(); // 👈 Get data from context

  if (loading) {
    return (
      <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-12 font-lora">
            Venue & Contact
          </h2>
          <p>Loading contact information...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="contact" className="py-20 bg-red-100 dark:bg-red-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-red-700 dark:text-red-200 mb-12 font-lora">
            Error
          </h2>
          <p>Could not load contact information.</p>
        </div>
      </section>
    );
  }

  // Destructure the contact object for cleaner code
  const { location, address, email, phone, mapSrc } = data.contact;

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-12 font-lora">
          Venue & Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Details using data from context */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4 font-lora">
              Location
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              {location}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{address}</p>
            <h3 className="text-2xl font-bold text-secondary mt-8 mb-4 font-lora">
              Contact Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Email:</strong> {email}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Phone:</strong> {phone}
            </p>
          </div>
          {/* Map */}
          <div className="h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={mapSrc}
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
