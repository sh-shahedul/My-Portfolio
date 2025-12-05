import React from 'react';

const Contact = () => {
  return (
    <section className="font-display bg-[#05080E] text-gray-300 antialiased">
      <div className="relative flex  w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-6xl rounded-2xl bg-[#29b6f61a] backdrop-blur-md border border-[#29b6f633] p-8 md:p-12 shadow-lg shadow-cyan-500/20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* Left Info */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-8">
                  <p className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                    Get in Touch
                  </p>
                  <p className="mt-3 text-base font-normal leading-normal text-gray-400">
                    Have a question or want to work together? Drop me a line.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: 'mail', title: 'hello@email.com', subtitle: 'Email Address' },
                    { icon: 'phone', title: '+1 234 567 890', subtitle: 'Phone Number' },
                    { icon: 'location_on', title: 'City, Country', subtitle: 'Location' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-900/40 border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
                        <span className="material-symbols-outlined text-cyan-400">{item.icon}</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-base font-medium text-white">{item.title}</p>
                        <p className="text-sm font-normal text-cyan-200">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="mt-12 flex gap-2">
                {['linkedin', 'github', 'twitter'].map((social, index) => (
                  <button
                    key={index}
                    className="rounded-lg p-2 text-white transition-colors hover:bg-cyan-400/20"
                  >
                    <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                      {social === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
                      {social === 'twitter' && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.218 3.791 4.649-.418.113-.864.172-1.328.172-.303 0-.596-.03-.885-.083.615 1.956 2.423 3.379 4.566 3.419-1.616 1.265-3.645 2.023-5.845 2.023-.379 0-.75-.022-1.116-.065 2.089 1.353 4.581 2.145 7.283 2.145 8.734 0 13.513-7.239 13.513-13.513 0-.206-.005-.412-.013-.617.928-.67 1.733-1.508 2.37-2.45z" />}
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="rounded-2xl bg-[#29b6f61a] backdrop-blur-md border border-[#29b6f633] p-8 lg:p-10 shadow-lg shadow-cyan-500/20">
              <form className="space-y-6">
                {[
                  { label: 'Your Name', id: 'name', type: 'text', placeholder: 'John Doe' },
                  { label: 'Your Email', id: 'email', type: 'email', placeholder: 'john.doe@example.com' },
                  { label: 'Subject', id: 'subject', type: 'text', placeholder: 'Project Inquiry' }
                ].map((field, index) => (
                  <div key={index}>
                    <label className="mb-2 block text-sm font-medium text-cyan-200" htmlFor={field.id}>{field.label}</label>
                    <input
                      className="block w-full rounded-lg border-transparent bg-[#282f39] px-4 py-3 text-white placeholder-cyan-100 focus:border-cyan-400 focus:ring focus:ring-cyan-400/40 focus:ring-opacity-50"
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      type={field.type}
                    />
                  </div>
                ))}
                <div>
                  <label className="mb-2 block text-sm font-medium text-cyan-200" htmlFor="message">Your Message</label>
                  <textarea
                    className="block w-full rounded-lg border-transparent bg-[#282f39] px-4 py-3 text-white placeholder-cyan-100 focus:border-cyan-400 focus:ring focus:ring-cyan-400/40 focus:ring-opacity-50"
                    id="message"
                    name="message"
                    placeholder="Hi, I'd like to discuss..."
                    rows="5"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#29b6f61a]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
